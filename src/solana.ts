import {
  Connection,
  Keypair,
  PublicKey
} from "@solana/web3.js";

import bs58 from "bs58";
import { config } from "./config.js";

export const connection = new Connection(
  config.rpcUrl,
  "confirmed"
);

export function getWallet(): Keypair | null {
  const privateKey = process.env.WALLET_PRIVATE_KEY;

  if (!privateKey) {
    return null;
  }

  try {
    return Keypair.fromSecretKey(
      bs58.decode(privateKey)
    );
  } catch {
    throw new Error(
      "Invalid WALLET_PRIVATE_KEY"
    );
  }
}

export async function getSolBalance(): Promise<number> {
  const wallet = getWallet();

  if (!wallet) {
    return 0;
  }

  const lamports =
    await connection.getBalance(
      new PublicKey(wallet.publicKey)
    );

  return lamports / 1_000_000_000;
}
