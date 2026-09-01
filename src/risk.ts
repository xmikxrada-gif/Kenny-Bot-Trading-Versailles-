import { config } from "./config.js";

export interface Position {
  entryPrice: number;
  highestPrice: number;
  amountUsd: number;
}

export function stopLossPrice(
  entry: number
): number {

  return entry *
    (1 - config.stopLossPercent / 100);
}

export function trailingStopPrice(
  highest: number
): number {

  return highest *
    (1 - config.trailingStopPercent / 100);
}

export function shouldStop(
  position: Position,
  currentPrice: number
): boolean {

  const initialStop =
    stopLossPrice(
      position.entryPrice
    );

  const trailingStop =
    trailingStopPrice(
      Math.max(
        position.highestPrice,
        currentPrice
      )
    );

  return (
    currentPrice <= initialStop ||
    currentPrice <= trailingStop
  );
}

export function maxPositionSize(
  capital: number
): number {

  return capital *
    config.maxPositionPercent /
    100;
}
