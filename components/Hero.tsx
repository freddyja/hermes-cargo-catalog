import { site, sharedFeatures } from "@/lib/site";
import { CheckIcon, MessageIcon, PhoneIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero-mesh border-b border-navy/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-electric-soft px-3 py-1 text-xs font-semibold text-electric">
            Douglas, GA · Habla Español
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {site.appName}
          </h1>
          <p className="mt-3 text-lg font-medium text-electric sm:text-xl">
            Welcome — browse enclosed cargo trailers &amp; current inventory
          </p>
          <p className="mt-2 text-base text-navy/70 sm:text-lg">
            Bienvenidos — vea estilos de trailers cerrados e inventario actual.
            Habla Español.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Tap any unit to text us at {site.phone} with a prefilled message.
            No online checkout — we&apos;ll help you confirm price, options, and
            delivery.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`sms:${site.phoneSms}`}
              className="inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-electric/25 transition hover:bg-blue-600"
            >
              <MessageIcon className="h-4 w-4" />
              Text {site.phone}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-surface"
            >
              <PhoneIcon className="h-4 w-4" />
              Call now
            </a>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 animate-fade-up-delay-1">
          {sharedFeatures.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 rounded-xl border border-navy/5 bg-white/80 px-3 py-2.5 text-sm text-navy/80 shadow-sm"
            >
              <CheckIcon className="h-4 w-4 shrink-0 text-electric" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
