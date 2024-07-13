/* eslint-disable jsx-a11y/label-has-associated-control */
import type { MetaFunction } from "@remix-run/node";
import CustomInput from "../components/Input";

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
      <div className="flex flex-col items-center space-y-10" data-controller="task">
        <button data-action="click->task#create">New Task</button>
        <CustomInput labelText="New Task" dataTarget="inputName"></CustomInput>
        <CustomInput labelText="New Desc" dataTarget="inputDesc"></CustomInput>
        {/* <Task name="Task" desc="Desc"></Task> */}
        <div className="space-y-4" data-task-target="tasks"></div>
      </div>
    </div>
  );
}