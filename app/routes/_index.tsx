/* eslint-disable jsx-a11y/label-has-associated-control */
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Pomodoro-Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col w-full justfy-center">
      <div className="flex justify-center w-full">
        <p className="header">Pomodoro</p>
      </div>
      <div className="flex flex-col items-center" data-controller="task">
        <button data-action="click->task#create">New Task</button>
        <label className="text" htmlFor="taskInput">Label</label>
        <input id="taskInput" type="text" data-task-target="input" />
      </div>
    </div>
  );
}