import { site } from "@/lib/site";
import { MessageIcon, PhoneIcon } from "./icons";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex flex-1 items-center justify-center gap-2 bg-navy px-3 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
        aria-label={`Call ${site.phone}`}
      >
        <PhoneIcon className="h-5 w-5" />
        Call
      </a>
      <a
        href={`sms:${site.phoneSms}`}
        className="flex flex-1 items-center justify-center gap-2 bg-electric px-3 py-3.5 text-sm font-semibold text-white shadow-lg shadow-electric/30 transition hover:bg-blue-600"
        aria-label={`Text ${site.phone}`}
      >
        <MessageIcon className="h-5 w-5" />
        Text us
      </a>
    </div>
  );
}
