import {
  Candidate,
  scoreCandidate
} from "./scanner.js";

export interface Signal {
  action: "BUY" | "WAIT";
  score: number;
  reason: string;
}

export function generateSignal(
  token: Candidate
): Signal {

  const score =
    scoreCandidate(token);

  if (score < 75) {
    return {
      action: "WAIT",
      score,
      reason:
        "Quality score below entry threshold"
    };
  }

  return {
    action: "BUY",
    score,
    reason:
      "Liquidity, volume, buyers and momentum conditions passed"
  };
}
