import React from "react";
import PillLabel from "./PillLabel";
import { CheckSquare, Archive, ShieldAlert } from "lucide-react";

export default function KeyNumbers() {
  return (
    <section id="key-numbers" className="scroll-mt-20 py-20 sm:py-28 lg:py-36 bg-surface border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 space-y-12 sm:space-y-16">
        {/* Header Stack */}
        <div className="space-y-4 max-w-3xl">
          <PillLabel>KEY NUMBERS FOR THE PAGE</PillLabel>
          <h2 className="headline-lg text-secondary">
            The three numbers that make or break your claim.
          </h2>
          <p className="body-lg text-on-surface-variant">
            Warranty claims aren&apos;t won through angry escalations or endless calls. They succeed when you have the records ready before the company asks for them.
          </p>
        </div>

        {/* Stat Grid with 1px hairline dividers inside rounded-md (18px) container */}
        <div className="border border-outline rounded-md bg-outline overflow-hidden shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {/* Stat 1 */}
            <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-on-surface-muted mb-6">
                <span className="tracking-[0.16em] uppercase">CHECKLIST SCOPE</span>
                <CheckSquare className="w-4 h-4 text-on-surface-variant" />
              </div>
              <div className="space-y-3">
                <div className="stat-number text-secondary">
                  15
                </div>
                <p className="text-[17px] font-extrabold text-secondary">
                  15 steps in the checklist.
                </p>
                <p className="text-[13.5px] text-on-surface-variant leading-relaxed">
                  Clear, chronological actions spanning from initial purchase to senior escalation.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline text-[11px] font-mono uppercase text-primary-ink tracking-wider">
                Full lifecycle coverage
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-on-surface-muted mb-6">
                <span className="tracking-[0.16em] uppercase">PRE-FAILURE ASSETS</span>
                <Archive className="w-4 h-4 text-on-surface-variant" />
              </div>
              <div className="space-y-3">
                <div className="stat-number text-secondary">
                  4
                </div>
                <p className="text-[17px] font-extrabold text-secondary">
                  4 records to keep before anything goes wrong.
                </p>
                <p className="text-[13.5px] text-on-surface-variant leading-relaxed">
                  Invoice, product registration, warranty clause terms, and initial condition photos.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline text-[11px] font-mono uppercase text-primary-ink tracking-wider">
                Preparation prevents delay
              </div>
            </div>

            {/* Stat 3 (Hot cell: Pink #e29fbf) */}
            <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-soft rounded-bl-full pointer-events-none" />
              <div className="flex items-center justify-between text-xs font-mono text-on-surface-muted mb-6 relative z-10">
                <span className="tracking-[0.16em] uppercase font-bold text-primary-ink">GOLDEN RULE</span>
                <ShieldAlert className="w-4 h-4 text-primary" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="stat-number text-primary">
                  1
                </div>
                <p className="text-[17px] font-extrabold text-secondary">
                  1 rule: if it is not in writing, it did not happen.
                </p>
                <p className="text-[13.5px] text-on-surface-variant leading-relaxed">
                  Oral conversations disappear. Every promise, report, and refusal must be saved in writing.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-primary-border text-[11px] font-mono uppercase text-primary font-bold tracking-wider relative z-10">
                The core principle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
