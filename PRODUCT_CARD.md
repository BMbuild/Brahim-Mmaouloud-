Product Card component

- Usage: the component is in `src/components/ProductCard.jsx` and expects props `{id, title, venue, datetime, category, image}`.
- Visual signature: countdown badge with color-coded urgency (green live, red <1h, amber <24h, teal otherwise).
- Opinionated line: small override map plus heuristic generator to provide an insider sentence for each event.

To run locally:

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Notes: This is a minimal scaffold for the 2‑hour hackathon demo. Next steps: wire a small serverless proxy to fetch NYC Parks live events and pass real data into the card.
