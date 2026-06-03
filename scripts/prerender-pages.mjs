import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(rootDir, "dist", "client");
const serverEntry = path.join(rootDir, "dist", "server", "server.js");

function normalizeBasePath(value) {
  if (!value || value === "/") return "/";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function getPagesBasePath() {
  const explicitBase = process.env.VITE_BASE_PATH ?? process.env.GITHUB_PAGES_BASE_PATH;
  if (explicitBase) return normalizeBasePath(explicitBase);

  const repoName = process.env.GITHUB_REPOSITORY?.split("/").pop();
  if (process.env.GITHUB_PAGES === "true" && repoName && !repoName.endsWith(".github.io")) {
    return normalizeBasePath(repoName);
  }

  return "/";
}

const basePath = getPagesBasePath();
const routerBasePath = basePath === "/" ? "/" : basePath.slice(0, -1);
const renderUrl = new URL(basePath, "https://example.com");

process.env.NODE_ENV ??= "production";
process.env.TSS_ROUTER_BASEPATH ??= routerBasePath;

const serverModule = await import(pathToFileURL(serverEntry).href);
const handler = serverModule.default ?? serverModule;

if (typeof handler.fetch !== "function") {
  throw new Error(`Expected a fetch handler in ${serverEntry}`);
}

const response = await handler.fetch(new Request(renderUrl));

if (!response.ok) {
  throw new Error(`Failed to prerender ${renderUrl.pathname}: HTTP ${response.status}`);
}

const html = await response.text();

if (!html.startsWith("<!DOCTYPE html>")) {
  throw new Error("Prerendered response did not look like a complete HTML document.");
}

await mkdir(clientDir, { recursive: true });
await writeFile(path.join(clientDir, "index.html"), html);
await writeFile(path.join(clientDir, "404.html"), html);
await writeFile(path.join(clientDir, ".nojekyll"), "");

console.log(`Prerendered GitHub Pages HTML for ${basePath} into dist/client.`);
