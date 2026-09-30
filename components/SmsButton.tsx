"use client";

import { useState } from "react";
import { smsHref, smsMessage, site } from "@/lib/site";
import { CopyIcon, MessageIcon } from "./icons";

type Props = {
  trailerLabel: string;
  className?: string;
  compact?: boolean;
};

export function SmsButton({ trailerLabel, className = "", compact }: Props) {
  const [copied, setCopied] = useState(false);
  const href = smsHref(trailerLabel);
  const message = smsMessage(trailerLabel);

  async function handleDesktopCopy(e: React.MouseEvent) {
    // On coarse pointers (phones) let the sms: link open the Messages app.
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fall through — still try opening sms:
      window.location.href = href;
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <a
        href={href}
        onClick={handleDesktopCopy}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-electric/25 transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
      >
        <MessageIcon className="h-4 w-4" />
        {compact ? "Text us" : "Text us about this trailer"}
      </a>
      {/* Desktop helper: show number + copyable message */}
      <div className="hidden rounded-xl border border-navy/10 bg-surface px-3 py-2 text-xs text-muted md:block">
        <p className="font-medium text-navy">
          Or text {site.phone}
        </p>
        <p className="mt-1 break-words leading-relaxed">{message}</p>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(message);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            } catch {
              /* ignore */
            }
          }}
          className="mt-2 inline-flex items-center gap-1.5 font-semibold text-electric hover:underline"
        >
          <CopyIcon />
          {copied ? "Copied!" : "Copy message"}
        </button>
      </div>
    </div>
  );
}
