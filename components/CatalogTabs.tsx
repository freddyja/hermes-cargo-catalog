"use client";

import { useState } from "react";
import { inventory, trailerStyles } from "@/lib/trailers";
import { site } from "@/lib/site";
import { TrailerCard } from "./TrailerCard";

type Tab = "styles" | "inventory";

export function CatalogTabs() {
  const [tab, setTab] = useState<Tab>("inventory");

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="flex rounded-full border border-navy/10 bg-surface p-1"
        role="tablist"
        aria-label="Catalog sections"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "inventory"}
          id="tab-inventory"
          aria-controls="panel-inventory"
          onClick={() => setTab("inventory")}
          className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
            tab === "inventory"
              ? "bg-white text-navy shadow-sm"
              : "text-navy/60 hover:text-navy"
          }`}
        >
          In stock ({inventory.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "styles"}
          id="tab-styles"
          aria-controls="panel-styles"
          onClick={() => setTab("styles")}
          className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
            tab === "styles"
              ? "bg-white text-navy shadow-sm"
              : "text-navy/60 hover:text-navy"
          }`}
        >
          Styles ({trailerStyles.length})
        </button>
      </div>

      {tab === "inventory" ? (
        <div
          id="panel-inventory"
          role="tabpanel"
          aria-labelledby="tab-inventory"
          className="mt-8"
        >
          <div id="inventory" className="scroll-mt-24">
            <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
              {site.inventoryNote}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {inventory.map((unit) => (
                <TrailerCard key={unit.id} item={unit} kind="inventory" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          id="panel-styles"
          role="tabpanel"
          aria-labelledby="tab-styles"
          className="mt-8"
        >
          <div id="styles" className="scroll-mt-24">
            <p className="mb-6 text-sm text-muted">
              Standard enclosed trailer styles. Prices marked &ldquo;from&rdquo;
              are starting points — always call to confirm. Models without a
              listed price show <strong>Call for price</strong>.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trailerStyles.map((style) => (
                <TrailerCard key={style.id} item={style} kind="style" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
