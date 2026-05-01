import applicationsHtml from "./applications.html?raw";
import "./applications.css";

export function mount(root: HTMLElement): void {
  root.innerHTML = applicationsHtml;
}
