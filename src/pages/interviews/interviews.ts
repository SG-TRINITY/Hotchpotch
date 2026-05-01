import interviewsHtml from "./interviews.html?raw";
import "./interviews.css";

export function mount(root: HTMLElement): void {
  root.innerHTML = interviewsHtml;
}
