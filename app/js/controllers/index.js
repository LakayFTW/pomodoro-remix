import { Application } from "@hotwired/stimulus";

export async function initializeStimulus() {
  const application = Application.start();

  const controllers = import.meta.glob("./*.js");

  console.log("Controllers found:", controllers); // Debugging

  for (const path in controllers) {
    const module = await controllers[path]();
    const controllerName = path
      .replace(/^\.\/(.*)_controller\.js$/, "$1")
      .replace(/_/g, "-");

    console.log(`Registering controller: ${controllerName}`); // Debugging
    application.register(controllerName, module.default);
  }
}
