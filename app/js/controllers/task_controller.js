import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "input"];

  async create() {
    const inputValue = this.inputTarget.value;
    if (inputValue != "" && inputValue != undefined && inputValue != null) {
      console.log(inputValue);
      var json = {
        name: inputValue,
      };
      sessionStorage.setItem(inputValue, JSON.stringify(json));
    }
  }
}
