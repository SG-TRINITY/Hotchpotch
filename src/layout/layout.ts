import layoutHtml from "./layout.html?raw";
import "./layout.css";

export function mountLayout(app: HTMLElement): HTMLElement {
  app.innerHTML = layoutHtml;
  const outlet = document.getElementById("page-outlet");
  if (!outlet) throw new Error("mountLayout: #page-outlet missing");
  return outlet;
}
