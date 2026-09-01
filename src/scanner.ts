export interface Candidate {
  address: string;
  symbol: string;

  liquidityUsd: number;
  volume24hUsd: number;

  priceChange5m: number;
  priceChange1h: number;
  priceChange24h: number;

  buys: number;
  sells: number;
}

export function scoreCandidate(
  token: Candidate
): number {

  let score = 0;

  if (
    token.liquidityUsd >= 250_000
  ) {
    score += 25;
  }

  if (
    token.volume24hUsd >= 100_000
  ) {
    score += 20;
  }

  const buyRatio =
    token.buys /
    Math.max(
      token.buys + token.sells,
      1
    ) *
    100;

  if (buyRatio >= 55) {
    score += 20;
  }

  if (
    token.priceChange1h > 0 &&
    token.priceChange1h < 25
  ) {
    score += 15;
  }

  if (
    token.priceChange5m > -2 &&
    token.priceChange5m < 8
  ) {
    score += 10;
  }

  if (
    token.priceChange24h > 0 &&
    token.priceChange24h < 100
  ) {
    score += 10;
  }

  return score;
}
