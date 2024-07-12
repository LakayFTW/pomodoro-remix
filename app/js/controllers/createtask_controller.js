import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"];

  async greet() {
    console.log("Test"); // Debugging
  }
}
