import { Controller } from "@hotwired/stimulus";
import React from "react";
import ReactDOM from "react-dom/client";
import Task from "../../components/Task";

export default class extends Controller {
  static targets = ["button", "inputName", "inputDesc", "tasks"];

  async connect() {
    this.get();
  }

  async create() {
    const inputNameValue = this.inputNameTarget.value.trim();
    const inputDescValue = this.inputDescTarget.value.trim();
    if (
      inputNameValue == "" &&
      inputNameValue == undefined &&
      inputNameValue == null
    ) {
      return;
    }

    if (sessionStorage.getItem(inputNameValue) !== null) {
      console.error("Item already exists");
      return;
    }
    var json = {
      identifier: "pomodoro",
      name: inputNameValue,
      desc: inputDescValue,
    };

    sessionStorage.setItem(inputNameValue, JSON.stringify(json));
    this.get();
  }

  async get() {
    const fragment = document.createDocumentFragment();

    // Clear existing UI elements
    while (this.tasksTarget.firstChild) {
      this.tasksTarget.removeChild(this.tasksTarget.firstChild);
    }

    // Retrieve unique tasks from sessionStorage
    const uniqueTasks = Object.keys(sessionStorage)
      .map((key) => {
        const value = sessionStorage.getItem(key);
        if (value !== null) {
          try {
            const taskData = JSON.parse(value);
            return taskData;
          } catch (e) {
            console.error("Error parsing JSON from sessionStorage");
            return null;
          }
        }
        return null;
      })
      .filter((task, index, self) => {
        // Filter out duplicates based on the name (key)
        return (
          task !== null &&
          task.identifier === "pomodoro" &&
          self.findIndex((t) => t.name === task.name) === index
        );
      });

    // Render each unique task into the fragment
    uniqueTasks.forEach((task) => {
      const container = document.createElement("div");
      fragment.appendChild(container);

      const taskElement = React.createElement(Task, {
        name: task.name,
        desc: task.desc,
      });
      ReactDOM.createRoot(container).render(taskElement);
    });

    // Append the fragment to the tasksTarget element
    this.tasksTarget.appendChild(fragment);
  }
}
