export type PageId =
  | "dashboard"
  | "applications"
  | "interviews"
  | "statistics"
  | "resources";

type PageModule = { mount: (root: HTMLElement) => void };

const loaders: Record<PageId, () => Promise<PageModule>> = {
  dashboard: () => import("./pages/dashboard/dashboard"),
  applications: () => import("./pages/applications/applications"),
  interviews: () => import("./pages/interviews/interviews"),
  statistics: () => import("./pages/statistics/statistics"),
  resources: () => import("./pages/resources/resources"),
};

function isPageId(value: string): value is PageId {
  return Object.prototype.hasOwnProperty.call(loaders, value);
}

function parseHash(): PageId {
  const raw = location.hash.replace(/^#\/?/, "").replace(/\/$/, "");
  if (raw === "" || raw === "/") return "dashboard";
  return isPageId(raw) ? raw : "dashboard";
}

function setActiveNav(id: PageId): void {
  document.querySelectorAll<HTMLAnchorElement>(".sidebar__nav .nav-item").forEach((link) => {
    const page = link.dataset.page;
    link.classList.toggle("nav-item--active", page === id);
  });
}

async function render(outlet: HTMLElement): Promise<void> {
  const id = parseHash();
  const mod = await loaders[id]();
  mod.mount(outlet);
  setActiveNav(id);
}

export function initRouter(outlet: HTMLElement): void {
  window.addEventListener("hashchange", () => {
    void render(outlet);
  });
  void render(outlet);
}
