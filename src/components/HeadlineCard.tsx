import React from "react";
import { Terminal, ShieldCheck } from "lucide-react";

export default function HeadlineCard() {
  return (
    <section id="core-idea" className="scroll-mt-24 px-5 sm:px-8 lg:px-10 py-10 md:py-16">
      <div className="max-w-shell mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-secondary text-primary-bright p-8 sm:p-12 md:p-16 shadow-raised border border-white/10 scanlines-texture">
          {/* Subtle glow / grid accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-bright animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-primary-bright">
                THE IDEA IN ONE LINE
              </span>
            </div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-primary-bright" />
              <span>RECORD_FIRST_PRINCIPLE</span>
            </div>
          </div>

          <div className="relative z-10 max-w-4xl">
            <p className="font-sans font-extrabold text-[24px] sm:text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.035em] text-primary-bright">
              &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-bright" />
              <span>Factual evidence over oral assurances</span>
            </div>
            <span className="text-primary uppercase tracking-wider font-semibold">
              Rule 01 of 01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
