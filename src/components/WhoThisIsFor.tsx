import React from "react";
import PillLabel from "./PillLabel";
import { Smartphone, Tv, Laptop, Refrigerator, CheckCheck, AlertCircle } from "lucide-react";

export default function WhoThisIsFor() {
  const devices = [
    {
      title: "Smartphones",
      desc: "Screen flickers, battery swelling, dead ports, or sudden reboot loops while within manufacturer warranty.",
      icon: Smartphone,
    },
    {
      title: "Televisions",
      desc: "Horizontal lines, backlighting failure, motherboard glitches, and panel burnout within warranty coverage.",
      icon: Tv,
    },
    {
      title: "Laptops & PCs",
      desc: "Hinge breakage, keyboard failures, GPU crashes, charging issues, and internal component defects.",
      icon: Laptop,
    },
    {
      title: "Home Appliances",
      desc: "Washing machines, refrigerators, air conditioners, microwaves, and dishwashers stalling early.",
      icon: Refrigerator,
    },
  ];

  return (
    <section id="who-this-is-for" className="scroll-mt-20 py-20 sm:py-28 lg:py-36 bg-surface-muted border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 space-y-12 sm:space-y-16">
        {/* Header Stack */}
        <div className="space-y-4 max-w-3xl">
          <PillLabel>WHO THIS IS FOR</PillLabel>
          <h2 className="headline-lg text-secondary">
            Built for when everyday technology stops working.
          </h2>
          <p className="body-lg text-on-surface-variant">
            Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
          </p>
        </div>

        {/* 4 Category Cards in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {devices.map((device, idx) => {
            const Icon = device.icon;
            return (
              <div
                key={idx}
                className="bg-surface rounded-md p-7 border border-outline shadow-card hover:shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-primary-soft border border-primary-border flex items-center justify-center mb-5 text-primary-ink">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-[18px] text-secondary tracking-tight mb-2">
                    {device.title}
                  </h3>
                  <p className="text-[14px] text-on-surface-variant leading-relaxed">
                    {device.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center text-xs font-mono text-on-surface-muted">
                  <span className="text-primary mr-1.5 font-bold">#0{idx + 1}</span> COVERED CATEGORY
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Callout: The Principle of Evidence */}
        <div className="rounded-md bg-primary-soft border border-primary-border p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-surface border border-primary-border flex items-center justify-center flex-shrink-0 text-primary-ink mt-0.5">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-[17px] text-secondary mb-1">
                Why oral phone promises fail consumers
              </h4>
              <p className="text-[14.5px] text-on-surface leading-relaxed max-w-2xl">
                Customer service representatives on phone calls can promise repairs or replacements that are later denied by service centers. When everything is documented in writing, claims are judged on verified technical facts rather than memory.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-primary-border text-xs font-mono text-primary-ink font-medium">
              <CheckCheck className="w-3.5 h-3.5 text-primary" />
              WRITTEN &gt; VERBAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
