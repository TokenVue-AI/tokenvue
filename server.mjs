import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";

import worker from "./dist/server/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, "dist/client");
const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "0.0.0.0";
const canonicalHostname = "tokenvue.in";
const wwwHostname = `www.${canonicalHostname}`;

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webmanifest", "application/manifest+json; charset=utf-8"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
]);

function safeStaticPath(pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }

  const filePath = path.resolve(clientDir, `.${decodedPath}`);
  return filePath.startsWith(`${clientDir}${path.sep}`) ? filePath : undefined;
}

function redirectCanonicalHost(request, response) {
  const hostHeader = request.headers.host ?? "";
  const hostname = hostHeader.split(":")[0]?.toLowerCase();

  if (hostname !== wwwHostname) {
    return false;
  }

  const protocolHeader = request.headers["x-forwarded-proto"];
  const protocol = Array.isArray(protocolHeader) ? protocolHeader[0] : protocolHeader;
  const url = new URL(request.url ?? "/", `${protocol ?? "https"}://${hostHeader}`);
  url.protocol = "https:";
  url.hostname = canonicalHostname;
  url.port = "";

  response.statusCode = 301;
  response.setHeader("location", url.toString());
  response.setHeader("cache-control", "public, max-age=3600");
  response.end();
  return true;
}

async function serveStatic(request, response, pathname) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return false;
  }

  const filePath = safeStaticPath(pathname);
  if (!filePath) return false;

  let fileStat;
  try {
    fileStat = await stat(filePath);
  } catch {
    return false;
  }

  if (!fileStat.isFile()) return false;

  response.statusCode = 200;
  response.setHeader("content-length", fileStat.size);
  response.setHeader(
    "content-type",
    contentTypes.get(path.extname(filePath)) ?? "application/octet-stream",
  );

  if (pathname.startsWith("/assets/")) {
    response.setHeader("cache-control", "public, max-age=31536000, immutable");
  } else {
    response.setHeader("cache-control", "public, max-age=300");
  }

  if (request.method === "HEAD") {
    response.end();
    return true;
  }

  createReadStream(filePath).pipe(response);
  return true;
}

function nodeRequestToWebRequest(request) {
  const protocol = request.headers["x-forwarded-proto"] ?? "http";
  const hostHeader = request.headers.host ?? `localhost:${port}`;
  const url = new URL(request.url ?? "/", `${protocol}://${hostHeader}`);
  const headers = new Headers();

  for (const [key, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const init = {
    method: request.method,
    headers,
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request;
    init.duplex = "half";
  }

  return new Request(url, init);
}

function writeWebResponse(webResponse, nodeResponse) {
  nodeResponse.statusCode = webResponse.status;

  const getSetCookie = webResponse.headers.getSetCookie;
  const setCookies =
    typeof getSetCookie === "function" ? getSetCookie.call(webResponse.headers) : undefined;

  webResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "set-cookie") {
      nodeResponse.setHeader(key, value);
    }
  });

  if (setCookies?.length) {
    nodeResponse.setHeader("set-cookie", setCookies);
  }

  if (!webResponse.body) {
    nodeResponse.end();
    return;
  }

  Readable.fromWeb(webResponse.body).pipe(nodeResponse);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);

    if (redirectCanonicalHost(request, response)) {
      return;
    }

    if (await serveStatic(request, response, url.pathname)) {
      return;
    }

    const webResponse = await worker.fetch(nodeRequestToWebRequest(request), {}, {});
    writeWebResponse(webResponse, response);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`TokenVue listening on http://${host}:${port}`);
});
