"use client";

import React from "react";
import PillLabel from "./PillLabel";
import { ArrowRight, CheckCircle2, FileText, Camera, ShieldCheck, Download } from "lucide-react";

export default function Hero() {
  const scrollToChecklist = () => {
    const el = document.getElementById("checklist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCta = () => {
    const el = document.getElementById("cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 border-b border-outline bg-surface">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-soft rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <PillLabel>A FREE CHECKLIST</PillLabel>

            <div className="space-y-4">
              <h1 className="headline-display text-secondary text-balance">
                My Cloud App
              </h1>
              <p className="font-extrabold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.12] tracking-[-0.03em] text-on-surface">
                A free checklist for anyone about to file a warranty claim.
              </p>
            </div>

            <p className="body-lg max-w-[62ch]">
              When an expensive product stops working, companies rely on customer service scripts, delays, and verbal denials. Turn the odds in your favour by building an indisputable paper trail from day one.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToChecklist}
                className="group px-7 py-3.5 rounded-full bg-primary hover:bg-primary-strong text-on-primary font-semibold text-[15px] shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                <span>Open 15-Step Checklist</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToCta}
                className="px-7 py-3.5 rounded-full bg-surface hover:bg-surface-muted text-secondary font-semibold text-[15px] border border-outline transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-on-surface-variant" />
                <span>Save & Share Guide</span>
              </button>
            </div>

            {/* Quick feature tags */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-on-surface-variant">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>15 actionable steps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Phone, TV, laptop & appliances</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% free & browser-ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual / Document Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg bg-surface border border-outline p-6 sm:p-8 shadow-raised">
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-outline mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-medium text-primary-ink">
                    CASE FILE TEMPLATE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-on-surface-muted">
                  DOC-CLAIM-01
                </span>
              </div>

              {/* Document Evidence Snippet */}
              <div className="space-y-4">
                <div className="p-4 rounded-sm bg-surface-2 border border-outline space-y-2">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant">
                    <span className="font-mono font-medium text-secondary flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" />
                      Invoice & Registration
                    </span>
                    <span className="font-mono text-[10px] bg-primary-soft text-primary-ink px-2 py-0.5 rounded-full font-medium">
                      PRE-CLAIM
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed">
                    Proof of purchase, serial number, and registration timestamp saved on day one.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-surface-2 border border-outline space-y-2">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant">
                    <span className="font-mono font-medium text-secondary flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-primary" />
                      Dated Photographic Proof
                    </span>
                    <span className="font-mono text-[10px] bg-primary-soft text-primary-ink px-2 py-0.5 rounded-full font-medium">
                      EVIDENCE
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed">
                    Clear video of device breakdown showing exact error state before technician visit.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-primary-soft border border-primary-border space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-medium text-secondary flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      Signed Technician Job Sheet
                    </span>
                    <span className="font-mono text-[10px] bg-surface text-primary-ink border border-primary-border px-2 py-0.5 rounded-full font-medium">
                      INSPECTION
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface leading-relaxed font-medium">
                    &ldquo;Diagnosed motherboard fault with testing tool. No signs of physical water damage.&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom quote note */}
              <div className="mt-6 pt-4 border-t border-outline flex items-center justify-between text-xs text-on-surface-muted">
                <span className="italic">Records prevent arbitrary claim rejections.</span>
                <span className="font-mono text-[11px] text-secondary font-semibold">100% FACTUAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
