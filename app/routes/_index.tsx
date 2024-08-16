/* eslint-disable jsx-a11y/label-has-associated-control */
import type { MetaFunction } from "@remix-run/node";
import CustomInput from "../components/Input";
import Nav from "~/components/Nav";
import BareButton from "~/components/Buttons/BareButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Pomodoro-Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col w-full justfy-center">
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center w-full">
        <p className="header">OpenChrono</p>
        <p className="p-2 -mt-6 subheader">The Open Source Pomodoro App</p>
      </div>
      <div className="flex flex-col items-center space-y-10" data-controller="task">
        <div data-action=" click->task#create">
          <BareButton className="w-64 h-16 text-2xl">New Task</BareButton>
        </div>
        <CustomInput labelText="New Task" dataTarget="inputName"></CustomInput>
        <CustomInput labelText="New Desc" dataTarget="inputDesc"></CustomInput>
        {/* <Task name="Task" desc="Desc"></Task> */}
        <div className="space-y-4" data-task-target="tasks"></div>
      </div>
    </div>
  );
}