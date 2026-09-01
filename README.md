# Solana Vercel Trading Bot

A Node.js / TypeScript Solana trading system designed for Vercel.

## Strategy

The system is designed around:

- Moderate momentum
- Liquidity filtering
- Volume filtering
- Buyer/seller balance
- Risk management
- Initial stop loss
- Trailing stop
- Partial profit taking
- Partial profit compounding
- Reserve capital
- Locked profits

This is NOT an HFT or sniper bot.

## Safety

LIVE_TRADING=false by default.

Never commit a private key to GitHub.

Use Vercel Environment Variables.

## Required services

- Solana RPC
- Jupiter
- Vercel

## Deployment

Install dependencies:

npm install

Build:

npm run build

Deploy:

vercel

## Environment variables

Copy .env.example into your Vercel Environment Variables.

Never upload .env.

## Important

This project must be tested in paper trading before live trading.

There is no guaranteed return.
