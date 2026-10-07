/** Hermes Cargo LLC — contact & business facts; app chrome = Enclosed Trailer */

export const site = {
  name: "Hermes Cargo LLC",
  /** Product / app name shown in UI chrome, titles, PWA */
  appName: "Enclosed Trailer",
  shortName: "Enclosed Trailer",
  tagline: "Browse enclosed trailers",
  phone: "912-383-0222",
  phoneTel: "+19123830222",
  phoneSms: "9123830222",
  email: "hermescargollc@gmail.com",
  address: {
    line1: "2526 SR-32 E",
    city: "Douglas",
    state: "GA",
    zip: "31533",
    full: "2526 SR-32 E, Douglas, GA 31533",
  },
  hours: {
    weekdays: "Mon–Fri 9AM–5PM",
    saturday: "Sat 9AM–12PM",
    sunday: "Closed Sunday",
  },
  website: "https://www.hermescargotrailers.com/",
  taxNote:
    "GA residents: 8% Georgia sales tax applies. Starting prices do not include delivery. Call to confirm current pricing and options.",
  inventoryNote:
    "Inventory changes daily. Photos and prices are approximate — call or text to confirm availability.",
} as const;

export const sharedFeatures = [
  "Polycore metal exterior",
  "Steel tubular frames",
  '24" stoneguards',
  "Leaf-spring axles",
  "LED exterior lights",
] as const;

/** Build an sms: deep link with a prefilled body. */
export function smsHref(trailerLabel: string): string {
  const body = `Hi Hermes, I'm interested in the ${trailerLabel} trailer. Please send more details.`;
  return `sms:${site.phoneSms}?body=${encodeURIComponent(body)}`;
}

export function smsMessage(trailerLabel: string): string {
  return `Hi Hermes, I'm interested in the ${trailerLabel} trailer. Please send more details.`;
}
