import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(rootDir, "dist", "client");
const indexPath = path.join(clientDir, "index.html");

const portArg = process.argv.find((arg) => arg.startsWith("--port="));
const port = Number(portArg?.split("=")[1] ?? process.env.PORT ?? 4173);

function normalizeBasePath(value) {
  if (!value || value === "/") return "/";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

async function getBasePath() {
  const explicitBase = process.env.VITE_BASE_PATH ?? process.env.GITHUB_PAGES_BASE_PATH;
  if (explicitBase) return normalizeBasePath(explicitBase);

  const indexHtml = await readFile(indexPath, "utf8");
  const assetPathMatch = indexHtml.match(/["'](\/[^"']*?)assets\//);
  return normalizeBasePath(assetPathMatch?.[1] ?? "/");
}

const basePath = await getBasePath();

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".woff2", "font/woff2"],
]);

async function sendFile(res, filePath, statusCode = 200) {
  const contentType = contentTypes.get(path.extname(filePath)) ?? "application/octet-stream";
  res.writeHead(statusCode, { "content-type": contentType });
  createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "127.0.0.1"}`);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === "/" && basePath !== "/") {
      res.writeHead(302, { location: basePath });
      res.end();
      return;
    }

    if (basePath !== "/" && !pathname.startsWith(basePath)) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    if (basePath !== "/") pathname = pathname.slice(basePath.length);
    let relativePath = pathname.replace(/^\/+/, "");
    if (!relativePath || relativePath.endsWith("/")) relativePath += "index.html";

    const filePath = path.resolve(clientDir, relativePath);
    if (!filePath.startsWith(clientDir)) {
      res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      await sendFile(res, path.join(filePath, "index.html"));
      return;
    }

    await sendFile(res, filePath);
  } catch {
    await sendFile(res, path.join(clientDir, "404.html"), 404);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`GitHub Pages preview: http://127.0.0.1:${port}${basePath}`);
});
