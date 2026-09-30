# Hermes Cargo Catalog

Mobile-friendly customer catalog for **Hermes Cargo LLC** (Douglas, GA). Browse enclosed trailer styles and current inventory, then tap a unit to open SMS to **912-383-0222** with a prefilled message.

**Habla Español** — bilingual welcome; catalog body stays in English.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Deployed on Vercel

No purchase checkout. Prices are starting points — always call/text to confirm. Delivery excluded; GA residents: 8% tax.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

## Contact

- **Hermes Cargo LLC**
- 2526 SR-32 E, Douglas, GA 31533
- Phone / SMS: 912-383-0222
- Email: hermescargollc@gmail.com
- Hours: Mon–Fri 9AM–5PM · Sat 9AM–12PM
- Website: [hermescargotrailers.com](https://www.hermescargotrailers.com/)

## Data

Trailer styles and inventory live in `lib/trailers.ts`. Company details in `lib/site.ts`. Inventory changes daily — update that module when stock changes.
