import resourcesHtml from "./resources.html?raw";
import "./resources.css";

export function mount(root: HTMLElement): void {
  root.innerHTML = resourcesHtml;
}
