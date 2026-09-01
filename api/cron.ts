import type {
  VercelRequest,
  VercelResponse
} from "@vercel/node";

import { config } from "../src/config.js";
import { runEngine } from "../src/engine.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  const auth =
    req.headers.authorization;

  if (
    config.cronSecret &&
    auth !==
      `Bearer ${config.cronSecret}`
  ) {

    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  try {

    const result =
      await runEngine();

    return res.status(200).json({
      ok: true,
      timestamp:
        new Date().toISOString(),
      result
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Unknown error"
    });
  }
}
