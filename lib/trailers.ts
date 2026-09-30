import { sharedFeatures } from "./site";

export type PriceInfo =
  | { kind: "from"; amount: number; note?: string }
  | { kind: "exact"; amount: number; note?: string }
  | { kind: "call" };

export type TrailerStyle = {
  id: string;
  size: string;
  axle: "SA" | "TA";
  label: string;
  description: string;
  price: PriceInfo;
  features: string[];
  imageUrl?: string;
};

export type InventoryUnit = {
  id: string;
  size: string;
  axle: "SA" | "TA";
  color: string;
  package?: string;
  label: string;
  interiorHeight?: string;
  price: PriceInfo;
  features: string[];
  imageUrl?: string;
  flag?: "concession" | "custom";
  flagNote?: string;
};

function money(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function formatPrice(price: PriceInfo): string {
  if (price.kind === "call") return "Call for price";
  if (price.kind === "from") return `From ${money(price.amount)}`;
  return money(price.amount);
}

export function priceDisclaimer(price: PriceInfo): string {
  if (price.kind === "call") return "Text or call to confirm pricing";
  return "Call to confirm · delivery not included";
}

const WIX = {
  "6x12sa-black-bo":
    "https://static.wixstatic.com/media/00a683_8c676fbe392040f68ccdf1e12b681649~mv2.png",
  "8.5x20ta-black-bo":
    "https://static.wixstatic.com/media/00a683_f64f5b1ebf3a4419b247cde157c746a7~mv2.png",
  "7x16ta-black-bo":
    "https://static.wixstatic.com/media/00a683_d8d0c14723dd4027932e1d2d62717388~mv2.png",
  "7x14ta-white-bo":
    "https://static.wixstatic.com/media/00a683_a46edbcc1c8345f2a83d45663f8752f2~mv2.png",
  "8.5x16ta-white-bo":
    "https://static.wixstatic.com/media/00a683_e93eb2108dfc46739c5ddb52c6b11493~mv2.png",
} as const;

/** Standard enclosed trailer styles offered by Hermes. */
export const trailerStyles: TrailerStyle[] = [
  {
    id: "5x8sa",
    size: "5x8",
    axle: "SA",
    label: "5x8 SA",
    description: "Compact single-axle — great for light hauling and storage.",
    price: { kind: "call" },
    features: [...sharedFeatures],
  },
  {
    id: "5x10sa",
    size: "5x10",
    axle: "SA",
    label: "5x10 SA",
    description: "Extra length in a single-axle footprint.",
    price: { kind: "call" },
    features: [...sharedFeatures],
  },
  {
    id: "6x10sa",
    size: "6x10",
    axle: "SA",
    label: "6x10 SA",
    description: "Popular mid-size single-axle for tools and gear.",
    price: { kind: "call" },
    features: [...sharedFeatures],
  },
  {
    id: "6x10ta",
    size: "6x10",
    axle: "TA",
    label: "6x10 TA",
    description: "Tandem-axle stability in a compact 6x10 shell.",
    price: { kind: "call" },
    features: [...sharedFeatures],
  },
  {
    id: "6x12sa",
    size: "6x12",
    axle: "SA",
    label: "6x12 SA",
    description: "Best-selling single-axle — multiple colors available.",
    price: { kind: "from", amount: 3500, note: "Black/BO listing ~$3,800" },
    features: [...sharedFeatures],
    imageUrl: WIX["6x12sa-black-bo"],
  },
  {
    id: "6x12ta",
    size: "6x12",
    axle: "TA",
    label: "6x12 TA",
    description: "Tandem-axle 6x12 for heavier loads and smoother tow.",
    price: { kind: "from", amount: 4600 },
    features: [...sharedFeatures],
  },
  {
    id: "6x14ta",
    size: "6x14",
    axle: "TA",
    label: "6x14 TA",
    description: "More cargo length with tandem-axle confidence.",
    price: { kind: "call" },
    features: [...sharedFeatures],
  },
  {
    id: "7x12ta",
    size: "7x12",
    axle: "TA",
    label: "7x12 TA",
    description: "Wider 7' shell — room for ATVs, gear, and work packages.",
    price: { kind: "call" },
    features: [...sharedFeatures],
  },
  {
    id: "7x14ta",
    size: "7x14",
    axle: "TA",
    label: "7x14 TA",
    description: "Workhorse size with blackout and color options in stock.",
    price: { kind: "from", amount: 5200 },
    features: [...sharedFeatures],
    imageUrl: WIX["7x14ta-white-bo"],
  },
  {
    id: "8.5x16ta",
    size: "8.5x16",
    axle: "TA",
    label: "8.5x16 TA",
    description: "Full-width commercial shell for serious cargo capacity.",
    price: { kind: "from", amount: 7750 },
    features: [...sharedFeatures],
    imageUrl: WIX["8.5x16ta-white-bo"],
  },
];

/** Current inventory units (deduped from live listings). Changes daily. */
export const inventory: InventoryUnit[] = [
  {
    id: "inv-6x12sa-black-bo",
    size: "6x12",
    axle: "SA",
    color: "Black",
    package: "Blackout",
    label: "6x12 SA Black/BO",
    interiorHeight: "6'3\"",
    price: { kind: "exact", amount: 3800 },
    features: [...sharedFeatures, "Blackout package", "6'3\" interior height"],
    imageUrl: WIX["6x12sa-black-bo"],
  },
  {
    id: "inv-6x12sa-orange",
    size: "6x12",
    axle: "SA",
    color: "Orange",
    label: "6x12 SA Orange",
    price: { kind: "from", amount: 3500 },
    features: [...sharedFeatures],
  },
  {
    id: "inv-6x12sa-red",
    size: "6x12",
    axle: "SA",
    color: "Red",
    label: "6x12 SA Red",
    price: { kind: "from", amount: 3500 },
    features: [...sharedFeatures],
  },
  {
    id: "inv-6x12sa-blue",
    size: "6x12",
    axle: "SA",
    color: "Blue",
    label: "6x12 SA Blue",
    price: { kind: "from", amount: 3500 },
    features: [...sharedFeatures],
  },
  {
    id: "inv-6x12sa-black",
    size: "6x12",
    axle: "SA",
    color: "Black",
    label: "6x12 SA Black",
    price: { kind: "from", amount: 3500 },
    features: [...sharedFeatures],
  },
  {
    id: "inv-6x12ta-tan-bo",
    size: "6x12",
    axle: "TA",
    color: "Tan",
    package: "Blackout",
    label: "6x12 TA Tan/BO",
    interiorHeight: "6'3\"",
    price: { kind: "exact", amount: 4600 },
    features: [...sharedFeatures, "Blackout package", "6'3\" interior height"],
  },
  {
    id: "inv-7x14ta-white-bo",
    size: "7x14",
    axle: "TA",
    color: "White",
    package: "Blackout",
    label: "7x14 TA White/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 5200 },
    features: [...sharedFeatures, "Blackout package", "7' interior height"],
    imageUrl: WIX["7x14ta-white-bo"],
  },
  {
    id: "inv-7x14ta-charcoal-bo",
    size: "7x14",
    axle: "TA",
    color: "Charcoal",
    package: "Blackout",
    label: "7x14 TA Charcoal/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 5200 },
    features: [...sharedFeatures, "Blackout package", "7' interior height"],
  },
  {
    id: "inv-7x16ta-black-bo",
    size: "7x16",
    axle: "TA",
    color: "Black",
    package: "Blackout",
    label: "7x16 TA Black/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 5450 },
    features: [...sharedFeatures, "Blackout package", "7' interior height"],
    imageUrl: WIX["7x16ta-black-bo"],
  },
  {
    id: "inv-7x16ta-green-bo",
    size: "7x16",
    axle: "TA",
    color: "Green",
    package: "Blackout",
    label: "7x16 TA Green/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 5450 },
    features: [...sharedFeatures, "Blackout package", "7' interior height"],
  },
  {
    id: "inv-7x16ta-pink-bo",
    size: "7x16",
    axle: "TA",
    color: "Pink",
    package: "Blackout",
    label: "7x16 TA Pink/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 16750 },
    features: [
      ...sharedFeatures,
      "Blackout package",
      "7' interior height",
      "Concession / custom build features",
    ],
    flag: "concession",
    flagNote: "Likely concession or custom package — confirm details with Hermes",
  },
  {
    id: "inv-8.5x16ta-white-bo",
    size: "8.5x16",
    axle: "TA",
    color: "White",
    package: "Blackout",
    label: "8.5x16 TA White/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 7750 },
    features: [...sharedFeatures, "Blackout package", "7' interior height"],
    imageUrl: WIX["8.5x16ta-white-bo"],
  },
  {
    id: "inv-8.5x20ta-black-bo",
    size: "8.5x20",
    axle: "TA",
    color: "Black",
    package: "Blackout",
    label: "8.5x20 TA Black/BO",
    interiorHeight: "7'",
    price: { kind: "exact", amount: 8100 },
    features: [...sharedFeatures, "Blackout package", "7' interior height"],
    imageUrl: WIX["8.5x20ta-black-bo"],
  },
  {
    id: "inv-8.5x24ta-pepsi-blue",
    size: "8.5x24",
    axle: "TA",
    color: "Pepsi Blue",
    package: "Blackout",
    label: "8.5x24 TA Pepsi Blue/BO",
    interiorHeight: "7'6\"",
    price: { kind: "exact", amount: 8900 },
    features: [
      ...sharedFeatures,
      "Blackout package",
      "7'6\" extra height",
      "Full-width commercial shell",
    ],
  },
];

export const optionExamples = [
  "Ladder rack",
  "Rear spoiler + 2 LEDs",
  "Double doors",
  "Barlock",
  "Polycore exterior",
  "Extra height (7' / 7'6\")",
  "Electrical jack",
  "50A electrical package",
  "Strip lights",
  "Cabinets",
  "Blackout package",
] as const;
