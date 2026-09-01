import type {
  VercelRequest,
  VercelResponse
} from "@vercel/node";

import { config } from "../src/config.js";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  return res.status(200).json({
    liveTrading:
      config.liveTrading,

    startingCapital:
      config.startingCapitalUsd,

    maxPositionPercent:
      config.maxPositionPercent,

    riskPerTradePercent:
      config.riskPerTradePercent,

    stopLossPercent:
      config.stopLossPercent,

    trailingStopPercent:
      config.trailingStopPercent
  });
}
