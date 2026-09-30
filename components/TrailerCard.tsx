import Image from "next/image";
import {
  formatPrice,
  priceDisclaimer,
  type InventoryUnit,
  type TrailerStyle,
} from "@/lib/trailers";
import { CameraOffIcon, CheckIcon } from "./icons";
import { SmsButton } from "./SmsButton";

type Props = {
  item: TrailerStyle | InventoryUnit;
  kind: "style" | "inventory";
};

function isInventory(item: TrailerStyle | InventoryUnit): item is InventoryUnit {
  return "color" in item;
}

export function TrailerCard({ item, kind }: Props) {
  const label = item.label;
  const price = formatPrice(item.price);
  const disclaimer = priceDisclaimer(item.price);
  const inv = isInventory(item) ? item : null;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] bg-surface">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={`${label} enclosed cargo trailer`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted">
            <CameraOffIcon className="h-12 w-12 opacity-40" />
            <p className="text-sm font-medium">Photo coming soon</p>
          </div>
        )}
        {kind === "inventory" && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
            In stock
          </span>
        )}
        {inv?.flag === "concession" && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
            Concession / custom
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold text-navy">{label}</h3>
            <p className="text-base font-bold text-electric">{price}</p>
          </div>
          <p className="mt-0.5 text-xs text-muted">{disclaimer}</p>
          {"description" in item && item.description && (
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              {item.description}
            </p>
          )}
          {inv?.interiorHeight && (
            <p className="mt-1 text-sm text-navy/70">
              Interior height: <strong>{inv.interiorHeight}</strong>
            </p>
          )}
          {inv?.flagNote && (
            <p className="mt-2 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs text-amber-900">
              {inv.flagNote}
            </p>
          )}
        </div>

        <ul className="space-y-1.5">
          {item.features.slice(0, 5).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-navy/80">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-1">
          <SmsButton trailerLabel={label} />
        </div>
      </div>
    </article>
  );
}
