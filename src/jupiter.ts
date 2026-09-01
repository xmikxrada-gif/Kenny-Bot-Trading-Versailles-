import { config } from "./config.js";

export interface QuoteRequest {
  inputMint: string;
  outputMint: string;
  amount: string;
  slippageBps?: number;
}

export async function getQuote(
  request: QuoteRequest
) {
  const params = new URLSearchParams({
    inputMint: request.inputMint,
    outputMint: request.outputMint,
    amount: request.amount,
    slippageBps: String(
      request.slippageBps ??
      config.maxSlippageBps
    )
  });

  const response = await fetch(
    `${config.jupiterBaseUrl}/v6/quote?${params}`
  );

  if (!response.ok) {
    throw new Error(
      `Jupiter quote failed: ${response.status}`
    );
  }

  return response.json();
}
