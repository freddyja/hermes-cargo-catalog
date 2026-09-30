import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark, PhoneIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-navy sm:text-base">
              {site.shortName}
            </span>
            <span className="hidden text-[11px] font-medium text-electric sm:block">
              {site.tagline} · Douglas, GA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main">
          <a
            href="#styles"
            className="rounded-full px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Styles
          </a>
          <a
            href="#inventory"
            className="rounded-full px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            In stock
          </a>
          <a
            href="#contact"
            className="rounded-full px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-navy"
          >
            Contact
          </a>
        </nav>

        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-full bg-electric px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-electric/25 transition hover:bg-blue-600 sm:px-4 sm:text-sm"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden xs:inline sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
