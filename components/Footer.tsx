import { site } from "@/lib/site";
import { ClockIcon, LogoMark, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-navy/5 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 brightness-0 invert" />
            <div>
              <p className="font-bold">{site.name}</p>
              <p className="text-sm text-blue-200">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-blue-100/80">
            Affordable enclosed cargo trailers in Douglas, GA. Habla Español.
            Text or call for current inventory and delivery options.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Visit & hours
          </p>
          <ul className="mt-3 space-y-3 text-sm text-white/90">
            <li className="inline-flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.address.full}</span>
            </li>
            <li className="inline-flex items-start gap-2">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {site.hours.weekdays}
                <br />
                {site.hours.saturday}
                <br />
                {site.hours.sunday}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Contact
          </p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
              >
                <MailIcon className="h-4 w-4" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white"
              >
                hermescargotrailers.com →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs leading-relaxed text-blue-200/70">
        <p>{site.taxNote}</p>
        <p className="mt-2">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
