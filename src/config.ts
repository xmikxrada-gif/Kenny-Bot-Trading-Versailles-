function num(name: string, fallback: number): number {
  const value = process.env[name];
  if (!value) return fallback;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const config = {
  rpcUrl:
    process.env.SOLANA_RPC_URL ||
    "https://api.mainnet-beta.solana.com",

  jupiterBaseUrl:
    process.env.JUPITER_BASE_URL ||
    "https://quote-api.jup.ag",

  cronSecret: process.env.CRON_SECRET || "",

  liveTrading:
    process.env.LIVE_TRADING === "true",

  startingCapitalUsd:
    num("STARTING_CAPITAL_USD", 20),

  maxPositionPercent:
    num("MAX_POSITION_PERCENT", 70),

  riskPerTradePercent:
    num("RISK_PER_TRADE_PERCENT", 1),

  stopLossPercent:
    num("STOP_LOSS_PERCENT", 8),

  trailingStopPercent:
    num("TRAILING_STOP_PERCENT", 12),

  takeProfit1Percent:
    num("TAKE_PROFIT_1_PERCENT", 30),

  takeProfit1SellPercent:
    num("TAKE_PROFIT_1_SELL_PERCENT", 20),

  takeProfit2Percent:
    num("TAKE_PROFIT_2_PERCENT", 70),

  takeProfit2SellPercent:
    num("TAKE_PROFIT_2_SELL_PERCENT", 20),

  reinvestProfitPercent:
    num("REINVEST_PROFIT_PERCENT", 70),

  reserveProfitPercent:
    num("RESERVE_PROFIT_PERCENT", 20),

  lockedProfitPercent:
    num("LOCKED_PROFIT_PERCENT", 10),

  minLiquidityUsd:
    num("MIN_LIQUIDITY_USD", 250000),

  minVolume24hUsd:
    num("MIN_VOLUME_24H_USD", 100000),

  minBuyRatio:
    num("MIN_BUY_RATIO", 55),

  maxSlippageBps:
    num("MAX_SLIPPAGE_BPS", 50),

  maxOpenPositions:
    num("MAX_OPEN_POSITIONS", 1)
};
