import statisticsHtml from "./statistics.html?raw";
import "./statistics.css";

export function mount(root: HTMLElement): void {
  root.innerHTML = statisticsHtml;
}
