// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

// custom config
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // don't sent cookies
  req.headers.cookie = "";

  proxy.web(req, res, {
    target: process.env.API_URL, // target host
    changeOrigin: true, // needed for virtual hosted sites
    selfHandleResponse: false, // let the proxy handle the response
  });
}
