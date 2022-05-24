import { imageLoader, DiskCache } from "remix-image/server";

const config = {
  selfUrl: "http://localhost:3000",
  cache: new DiskCache(),
};

export default async function handler(req, res) {
  const { body, headers } = await imageLoader(config, {
    url: `http://localhost:3000${req.url}`,
  });

  const responseHeaders = {};

  Array.from(headers).map(([property, value]) => {
    responseHeaders[property] = value;
  });

  res.writeHead(200, responseHeaders);
  res.end(body);
}
