"use client";

import React, { useState } from "react";
import PillLabel from "./PillLabel";
import { Share2, Check, Printer, FileDown } from "lucide-react";

export default function CallToAction() {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    const checklistContent = `My Cloud App
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
My Cloud App is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

    const blob = new Blob([checklistContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "My-Cloud-App-Warranty-Checklist.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "My Cloud App — Warranty Claim Checklist",
          text: "A free checklist for anyone about to file a warranty claim. A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="cta-section" className="scroll-mt-20 py-20 sm:py-28 lg:py-36 bg-surface-2 border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative rounded-lg bg-surface border border-outline p-8 sm:p-14 lg:p-20 shadow-raised overflow-hidden">
          {/* Subtle accent backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-soft rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
            <PillLabel>CALL TO ACTION</PillLabel>

            <h2 className="headline-lg text-secondary">
              Download the checklist and keep it with your invoices.
            </h2>

            <p className="body-lg text-on-surface-variant">
              Share it with a friend who just bought something expensive.
            </p>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleDownload}
                className="px-8 py-4 rounded-full bg-primary hover:bg-primary-strong text-on-primary font-semibold text-[15px] shadow-raised transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-5 h-5 text-on-primary" />
                    <span>Checklist Downloaded!</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-5 h-5" />
                    <span>Download Complete Checklist</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShare}
                className="px-8 py-4 rounded-full bg-surface hover:bg-surface-muted text-secondary font-semibold text-[15px] border border-outline transition-all duration-200 inline-flex items-center justify-center gap-2.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary" />
                    <span>Link Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-on-surface-variant" />
                    <span>Share With a Friend</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="px-5 py-4 rounded-full bg-surface-muted hover:bg-primary-soft text-on-surface-variant hover:text-secondary font-semibold text-[15px] border border-outline transition-all duration-200 inline-flex items-center justify-center gap-2"
                title="Print this page"
              >
                <Printer className="w-4 h-4" />
                <span className="sm:hidden lg:inline">Print</span>
              </button>
            </div>

            {/* Notification note */}
            <div className="pt-6 border-t border-outline flex flex-wrap items-center gap-6 text-xs text-on-surface-muted">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Format: Clean text document (.txt) & web print ready</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary-bright" />
                <span>Zero registration required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
