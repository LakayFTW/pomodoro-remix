import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Pomodoro-Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="place-content-center-x w-full">
        <p className="header">Pomodoro</p>
      </div>
      <div data-controller="createtask">
        <button data-action="click->createtask#greet">Test</button>
      </div>
    </div>
  );
}