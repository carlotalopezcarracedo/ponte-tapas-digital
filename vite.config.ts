// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

function normalizeBasePath(value: string | undefined) {
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

export default defineConfig({
  vite: {
    base: basePath,
    define: {
      "process.env.TSS_ROUTER_BASEPATH": JSON.stringify(routerBasePath),
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
