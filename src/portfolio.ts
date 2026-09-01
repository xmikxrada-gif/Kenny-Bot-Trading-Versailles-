import { config } from "./config.js";

export interface Portfolio {
  tradingCapital: number;
  reserve: number;
  lockedProfit: number;
}

export function applyProfit(
  portfolio: Portfolio,
  profit: number
): Portfolio {

  if (profit <= 0) {
    return portfolio;
  }

  const reinvest =
    profit *
    config.reinvestProfitPercent /
    100;

  const reserve =
    profit *
    config.reserveProfitPercent /
    100;

  const locked =
    profit *
    config.lockedProfitPercent /
    100;

  return {
    tradingCapital:
      portfolio.tradingCapital +
      reinvest,

    reserve:
      portfolio.reserve +
      reserve,

    lockedProfit:
      portfolio.lockedProfit +
      locked
  };
}
