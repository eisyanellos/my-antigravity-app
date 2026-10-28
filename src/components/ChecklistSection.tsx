"use client";

import React, { useState } from "react";
import PillLabel from "./PillLabel";
import { Check, RotateCcw, Scale } from "lucide-react";

interface Step {
  id: number;
  stage: string;
  stageCode: string;
  title: string;
  description: string;
  tip?: string;
}

const CHECKLIST_STEPS: Step[] = [
  // STAGE 1: BEFORE ANYTHING GOES WRONG
  {
    id: 1,
    stage: "BEFORE ANYTHING GOES WRONG",
    stageCode: "STAGE 01",
    title: "Keep the invoice.",
    description:
      "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
    tip: "Store a digital scan in cloud storage labeled by product name and purchase date.",
  },
  {
    id: 2,
    stage: "BEFORE ANYTHING GOES WRONG",
    stageCode: "STAGE 01",
    title: "Register the product.",
    description:
      "Many brands ask you to register on their website or app; some add extra warranty when you do.",
    tip: "Screenshot the final registration confirmation screen and keep the confirmation email.",
  },
  {
    id: 3,
    stage: "BEFORE ANYTHING GOES WRONG",
    stageCode: "STAGE 01",
    title: "Read the warranty card once.",
    description:
      "Note how long it lasts, what it covers, and what it excludes.",
    tip: "Check whether accidental damage, power surges, or software issues are excluded.",
  },
  {
    id: 4,
    stage: "BEFORE ANYTHING GOES WRONG",
    stageCode: "STAGE 01",
    title: "Record the condition.",
    description:
      "Take a few dated photos of the product once it is installed or unboxed.",
    tip: "Photographs of clean ports, intact seals, and pristine casing establish baseline condition.",
  },

  // STAGE 2: WHEN THE FAULT APPEARS
  {
    id: 5,
    stage: "WHEN THE FAULT APPEARS",
    stageCode: "STAGE 02",
    title: "Record the fault.",
    description:
      "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
    tip: "Show serial number in the same video or photograph if possible.",
  },
  {
    id: 6,
    stage: "WHEN THE FAULT APPEARS",
    stageCode: "STAGE 02",
    title: "Raise the complaint in writing.",
    description:
      "Use email, the brand's website or its app, not only a phone call, so there is a record.",
    tip: "If you must call, follow up immediately with an email summarizing what was discussed.",
  },
  {
    id: 7,
    stage: "WHEN THE FAULT APPEARS",
    stageCode: "STAGE 02",
    title: "Note every reference number.",
    description:
      "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
    tip: "Keep a single running note or folder with dates, names, and exact reference IDs.",
  },

  // STAGE 3: WHEN A TECHNICIAN VISITS
  {
    id: 8,
    stage: "WHEN A TECHNICIAN VISITS",
    stageCode: "STAGE 03",
    title: "Ask for the job sheet.",
    description:
      "Ask the technician for a copy of the visit report or job sheet before they leave.",
    tip: "Do not let them leave saying 'it will be emailed later'; take a photo of the paper or tablet sheet.",
  },
  {
    id: 9,
    stage: "WHEN A TECHNICIAN VISITS",
    stageCode: "STAGE 03",
    title: "Ask what was tested.",
    description:
      "Ask which test or instrument was used to reach the diagnosis.",
    tip: "Write down if they merely looked at it versus using a multimeter, diagnostic software, or probe.",
  },
  {
    id: 10,
    stage: "WHEN A TECHNICIAN VISITS",
    stageCode: "STAGE 03",
    title: "Take your own photos.",
    description:
      "Photograph the product and anything the technician points to, during the visit.",
    tip: "If the technician opens the device or points to corrosion or marks, photograph it immediately.",
  },

  // STAGE 4: IF THE CLAIM IS REFUSED
  {
    id: 11,
    stage: "IF THE CLAIM IS REFUSED",
    stageCode: "STAGE 04",
    title: "Ask for the reason in writing.",
    description:
      "Request a written explanation that names the exact cause and the evidence for it.",
    tip: "Vague verbal claims of 'customer abuse' or 'unauthorized tampering' must be put in writing.",
  },
  {
    id: 12,
    stage: "IF THE CLAIM IS REFUSED",
    stageCode: "STAGE 04",
    title: "Ask for the technical report.",
    description:
      "If the refusal rests on an inspection, ask for that inspection report.",
    tip: "The internal report reveals the exact measurements, photos, and engineering rationale.",
  },
  {
    id: 13,
    stage: "IF THE CLAIM IS REFUSED",
    stageCode: "STAGE 04",
    title: "Escalate inside the company.",
    description:
      "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
    tip: "Search for 'Grievance Officer', 'Principal Nodal Officer', or 'Customer Service Head'.",
  },
  {
    id: 14,
    stage: "IF THE CLAIM IS REFUSED",
    stageCode: "STAGE 04",
    title: "Keep it factual.",
    description:
      "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
    tip: "Leave out anger and speculation. Present a chronological timeline of indisputable facts.",
  },
  {
    id: 15,
    stage: "IF THE CLAIM IS REFUSED",
    stageCode: "STAGE 04",
    title: "Know your consumer helpline.",
    description:
      "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
    tip: "Government consumer forums frequently resolve matters swiftly once official notices are dispatched.",
  },
];

export default function ChecklistSection() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetAll = () => {
    setCompletedSteps([]);
  };

  const progressPercent = Math.round(
    (completedSteps.length / CHECKLIST_STEPS.length) * 100
  );

  const stage1 = CHECKLIST_STEPS.filter((s) => s.stageCode === "STAGE 01");
  const stage2 = CHECKLIST_STEPS.filter((s) => s.stageCode === "STAGE 02");
  const stage3 = CHECKLIST_STEPS.filter((s) => s.stageCode === "STAGE 03");
  const stage4 = CHECKLIST_STEPS.filter((s) => s.stageCode === "STAGE 04");

  return (
    <div id="checklist" className="scroll-mt-20">
      {/* Interactive Sticky Progress Bar */}
      <div className="bg-surface-2 border-b border-outline py-4 px-5 sm:px-8 lg:px-10 sticky top-[72px] z-30 backdrop-blur-md bg-surface/95">
        <div className="max-w-shell mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center font-mono text-xs font-bold text-primary-ink">
              {completedSteps.length}
            </div>
            <div className="text-xs">
              <span className="font-extrabold text-secondary text-[14px]">
                {completedSteps.length} of {CHECKLIST_STEPS.length} Completed
              </span>
              <span className="text-on-surface-variant ml-2 font-mono">
                ({progressPercent}%)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-36 sm:w-48 h-2 bg-outline rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {completedSteps.length > 0 && (
              <button
                onClick={resetAll}
                className="text-xs font-mono text-on-surface-variant hover:text-secondary flex items-center gap-1 transition-colors"
                title="Reset progress"
              >
                <RotateCcw className="w-3 h-3 text-primary" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* STAGE 1: BEFORE ANYTHING GOES WRONG */}
      <section className="py-20 sm:py-28 lg:py-32 bg-surface border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 space-y-12 sm:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <PillLabel>BEFORE ANYTHING GOES WRONG</PillLabel>
            <h2 className="headline-lg text-secondary">
              Pre-claim readiness: save your proof early.
            </h2>
            <p className="body-lg text-on-surface-variant">
              The easiest time to secure evidence is right after purchase or installation. Four simple habits protect you before a single fault appears.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stage1.map((step) => {
              const isChecked = completedSteps.includes(step.id);
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-200 transform hover:-translate-y-0.5 select-none ${
                    isChecked
                      ? "bg-primary-soft border-primary-border shadow-sm"
                      : "bg-surface border-outline shadow-card hover:shadow-raised"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="font-mono text-[11px] font-semibold text-primary-ink tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary-soft border border-primary-border">
                      Step 0{step.id}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-primary border-primary text-on-primary"
                          : "border-outline-strong bg-surface hover:border-primary"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-[19px] text-secondary mb-2 leading-snug">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-[15px] text-on-surface leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {step.tip && (
                    <div className="pt-3 border-t border-outline text-xs font-mono text-on-surface-muted">
                      <span className="text-primary font-bold">PRO TIP: </span>
                      {step.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STAGE 2: WHEN THE FAULT APPEARS */}
      <section className="py-20 sm:py-28 lg:py-32 bg-surface-muted border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 space-y-12 sm:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <PillLabel>WHEN THE FAULT APPEARS</PillLabel>
            <h2 className="headline-lg text-secondary">
              Initial breakdown: capture the issue in writing.
            </h2>
            <p className="body-lg text-on-surface-variant">
              The moment a breakdown occurs is where most consumers make fatal errors by calling without a written record. Establish the exact timeline immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stage2.map((step) => {
              const isChecked = completedSteps.includes(step.id);
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-200 transform hover:-translate-y-0.5 select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-primary-soft border-primary-border shadow-sm"
                      : "bg-surface border-outline shadow-card hover:shadow-raised"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="font-mono text-[11px] font-semibold text-primary-ink tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary-soft border border-primary-border">
                        Step 0{step.id}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-primary border-primary text-on-primary"
                            : "border-outline-strong bg-surface hover:border-primary"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[18px] text-secondary mb-2 leading-snug">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-[14.5px] text-on-surface leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {step.tip && (
                    <div className="mt-4 pt-3 border-t border-outline text-xs font-mono text-on-surface-muted">
                      <span className="text-primary font-bold">RECORD: </span>
                      {step.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STAGE 3: WHEN A TECHNICIAN VISITS */}
      <section className="py-20 sm:py-28 lg:py-32 bg-surface border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 space-y-12 sm:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <PillLabel>WHEN A TECHNICIAN VISITS</PillLabel>
            <h2 className="headline-lg text-secondary">
              The on-site inspection: get the paper report.
            </h2>
            <p className="body-lg text-on-surface-variant">
              Do not let a technician leave your home without a signed report. What they say out loud often contradicts what they write in their private company log.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stage3.map((step) => {
              const isChecked = completedSteps.includes(step.id);
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-200 transform hover:-translate-y-0.5 select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-primary-soft border-primary-border shadow-sm"
                      : "bg-surface border-outline shadow-card hover:shadow-raised"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="font-mono text-[11px] font-semibold text-primary-ink tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary-soft border border-primary-border">
                        {step.id < 10 ? `Step 0${step.id}` : `Step ${step.id}`}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-primary border-primary text-on-primary"
                            : "border-outline-strong bg-surface hover:border-primary"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[18px] text-secondary mb-2 leading-snug">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-[14.5px] text-on-surface leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {step.tip && (
                    <div className="mt-4 pt-3 border-t border-outline text-xs font-mono text-on-surface-muted">
                      <span className="text-primary font-bold">ACTION: </span>
                      {step.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STAGE 4: IF THE CLAIM IS REFUSED (Dark Section styling from DESIGN.md) */}
      <section
        id="refusal-guide"
        className="scroll-mt-20 py-24 sm:py-32 lg:py-36 bg-secondary text-on-secondary relative overflow-hidden"
      >
        {/* Subtle accent glow */}
        <div className="absolute -top-24 right-10 w-96 h-96 bg-primary-bright/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 space-y-12 sm:space-y-16 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-bright flex-shrink-0" />
              <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-primary-bright">
                IF THE CLAIM IS REFUSED
              </span>
            </div>
            <h2 className="headline-lg text-white">
              Do not accept verbal rejections. Demand evidence.
            </h2>
            <p className="body-lg text-white/70">
              A rejection is not final until it is delivered in writing with verifiable technical proof. Most claims are rejected on automatic boilerplate that crumbles under documented scrutiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stage4.map((step) => {
              const isChecked = completedSteps.includes(step.id);
              return (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`cursor-pointer rounded-md p-7 sm:p-8 border transition-all duration-200 transform hover:-translate-y-0.5 select-none flex flex-col justify-between ${
                    isChecked
                      ? "bg-white/15 border-primary-bright shadow-sm"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="font-mono text-[11px] font-semibold text-primary-bright tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                        Step {step.id}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-primary-bright border-primary-bright text-secondary"
                            : "border-white/30 bg-transparent hover:border-primary-bright"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[18px] text-white mb-2 leading-snug">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-[14.5px] text-white/80 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {step.tip && (
                    <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-white/50">
                      <span className="text-primary-bright font-bold">ESCALATION: </span>
                      {step.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Golden Escalation Note */}
          <div className="rounded-md bg-white/5 border border-white/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary-bright/10 border border-primary-bright/30 flex items-center justify-center flex-shrink-0 text-primary-bright">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[17px] text-white mb-1">
                  Calm, written records are what consumer forums judge
                </h4>
                <p className="text-[14px] text-white/70">
                  Consumer protection tribunals and nodal grievance officers penalize uncooperative companies that fail to provide technical inspection sheets.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-bright text-secondary font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0">
              STAND ON FACTS
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
