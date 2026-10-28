import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-muted border-t border-outline pt-16 pb-12 px-5 sm:px-8 lg:px-10">
      <div className="max-w-shell mx-auto space-y-12">
        {/* Three Columns Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: About & Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="font-extrabold text-[18px] tracking-[-0.03em] text-secondary">
                My Cloud App
              </span>
            </div>
            <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-sm">
              A free checklist for anyone about to file a warranty claim. Built on the editorial principle that claims succeed on calm, documented facts.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-ink bg-primary-soft border border-primary-border px-3 py-1 rounded-full">
                PINK EDITORIAL DESIGN SYSTEM
              </span>
            </div>
          </div>

          {/* Col 2: Checklist Stages (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary font-bold">
              Checklist Stages
            </h4>
            <ul className="space-y-2 text-[13.5px] text-on-surface-variant">
              <li>
                <a href="#checklist" className="hover:text-secondary transition-colors">
                  01. Before Anything Goes Wrong (Steps 1–4)
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-secondary transition-colors">
                  02. When the Fault Appears (Steps 5–7)
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-secondary transition-colors">
                  03. When a Technician Visits (Steps 8–10)
                </a>
              </li>
              <li>
                <a href="#refusal-guide" className="hover:text-secondary transition-colors">
                  04. If the Claim is Refused (Steps 11–15)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Principles (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary font-bold">
              Essential Rules
            </h4>
            <ul className="space-y-2 text-[13.5px] text-on-surface-variant">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Keep original invoice copy</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Demand written job sheet</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Photograph physical defects</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Escalate with official paper trail</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-outline w-full" />

        {/* Exact FOOTER NOTE from NurBatrisyia.txt */}
        <div className="rounded-md bg-surface border border-outline p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-ink font-semibold">
                FOOTER NOTE
              </span>
              <p className="text-[13.5px] text-on-surface leading-relaxed">
                My Cloud App is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom meta line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-on-surface-muted">
          <p>© {new Date().getFullYear()} My Cloud App. Built with Pink Editorial design system.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>15 STEPS</span>
            <span>4 RECORDS</span>
            <span className="text-primary font-bold">1 WRITTEN RULE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
