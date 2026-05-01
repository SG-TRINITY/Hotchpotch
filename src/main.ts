import "./styles/global.css";
import { mountLayout } from "./layout/layout";
import { applyGroovyBackground } from "./lib/groovyBackground";
import { initRouter } from "./router";

const app = document.getElementById("app");
if (!app) throw new Error("#app missing");

const outlet = mountLayout(app);
void applyGroovyBackground();

if (!location.hash || location.hash === "#") {
  location.hash = "#/dashboard";
}

initRouter(outlet);
