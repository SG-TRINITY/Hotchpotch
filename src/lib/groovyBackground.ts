export type GroovyBackgroundOptions = {
  rootSelector?: string;
  rasterUrl?: string;
  vectorUrl?: string;
};

const DEFAULT_RASTER = "/groovy-background.jpg";
const DEFAULT_VECTOR = "/groovy-pattern.svg";

function probeImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/**
 * Sets CSS variables on the groovy root (usually `[data-groovy-root]`) so the
 * main column shows `public/groovy-background.jpg` or the SVG fallback.
 */
export async function applyGroovyBackground(
  options: GroovyBackgroundOptions = {},
): Promise<void> {
  const rootSelector = options.rootSelector ?? "[data-groovy-root]";
  const root = document.querySelector<HTMLElement>(rootSelector);
  if (!root) return;

  const rasterUrl = options.rasterUrl ?? DEFAULT_RASTER;
  const vectorUrl = options.vectorUrl ?? DEFAULT_VECTOR;

  const hasRaster = await probeImage(rasterUrl);

  root.style.setProperty("--groovy-raster", hasRaster ? `url("${rasterUrl}")` : "none");
  root.style.setProperty("--groovy-vector", hasRaster ? "none" : `url("${vectorUrl}")`);
  root.dataset.groovySource = hasRaster ? "raster" : "vector";
}
