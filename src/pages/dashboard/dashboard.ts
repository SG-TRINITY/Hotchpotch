import dashboardHtml from "./dashboard.html?raw";
import "./dashboard.css";

export function mount(root: HTMLElement): void {
  root.innerHTML = dashboardHtml;
}
