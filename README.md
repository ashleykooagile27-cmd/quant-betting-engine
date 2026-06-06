# Football Analytics & Quant Betting Engine

A production-ready quantitative betting analysis system for global football matches. Analyzes matches through mathematical models, filters via strict criteria, and builds high-confidence parlay tickets.

## Features

- **Global Match Scanner**: Analyzes football matches across all major and minor leagues
- **Elite V3 Strategy Filter**: Advanced mathematical model with xG and clean sheet metrics
- **Dual-Array Classification**: Separates qualifying from non-qualifying matches
- **Parlay Engine**: Builds combined betting tickets with 5.00+ odds
- **Backtesting Framework**: Test strategy performance on historical data
- **API Integration Ready**: Connect to real sports data providers

## Quick Start

```bash
git clone https://github.com/ashleykooagile27-cmd/quant-betting-engine.git
cd quant-betting-engine
npm install
cp .env.example .env
npm start
```

## Strategy Overview

### ELITE V3 Rules
1. **Combined xG ≥ 3.10** - Combined expected goals threshold
2. **Clean Sheet ≤ 60%** - Either team with >60% clean sheets = disqualified
3. **Market**: Over 2.5 Match Goals

## Documentation

- See `docs/` for detailed guides
- API endpoints in `API_REFERENCE.md`
- Strategy parameters in `STRATEGY_GUIDE.md`

## Tech Stack

- Node.js 18+
- Express.js
- MongoDB
- Decimal.js (precise odds)
- Jest (testing)

## License

MIT
