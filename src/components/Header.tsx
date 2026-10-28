"use client";

import React, { useState } from "react";
import { Menu, X, ArrowDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-surface/92 backdrop-blur-md border-b border-outline transition-colors">
      <div className="max-w-shell mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 select-none"
        >
          <div className="w-8 h-8 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0">
            <span className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>
          <span className="font-extrabold text-[17px] sm:text-[18px] tracking-[-0.03em] text-secondary whitespace-nowrap">
            My Cloud App
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-shrink-0">
          <button
            onClick={() => scrollTo("who-this-is-for")}
            className="text-[14px] xl:text-[15px] font-semibold text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap py-1"
          >
            Who This Is For
          </button>
          <button
            onClick={() => scrollTo("core-idea")}
            className="text-[14px] xl:text-[15px] font-semibold text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap py-1"
          >
            The Idea
          </button>
          <button
            onClick={() => scrollTo("key-numbers")}
            className="text-[14px] xl:text-[15px] font-semibold text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap py-1"
          >
            Key Numbers
          </button>
          <button
            onClick={() => scrollTo("checklist")}
            className="text-[14px] xl:text-[15px] font-semibold text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap py-1"
          >
            The Checklist
          </button>
          <button
            onClick={() => scrollTo("refusal-guide")}
            className="text-[14px] xl:text-[15px] font-semibold text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap py-1"
          >
            If Refused
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button
            onClick={() => scrollTo("checklist")}
            className="h-[40px] px-5 rounded-full bg-secondary hover:bg-primary text-on-secondary text-[13.5px] font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <span>Get Checklist</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button for screens < 1024px */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-secondary hover:bg-surface-muted focus:outline-none flex-shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Only visible on screens < 1024px when toggled) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-outline px-6 py-5 space-y-4 shadow-float animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollTo("who-this-is-for")}
              className="text-left py-2 text-[15px] font-semibold text-secondary border-b border-outline/60 hover:text-primary transition-colors"
            >
              Who This Is For
            </button>
            <button
              onClick={() => scrollTo("core-idea")}
              className="text-left py-2 text-[15px] font-semibold text-secondary border-b border-outline/60 hover:text-primary transition-colors"
            >
              The Idea
            </button>
            <button
              onClick={() => scrollTo("key-numbers")}
              className="text-left py-2 text-[15px] font-semibold text-secondary border-b border-outline/60 hover:text-primary transition-colors"
            >
              Key Numbers
            </button>
            <button
              onClick={() => scrollTo("checklist")}
              className="text-left py-2 text-[15px] font-semibold text-secondary border-b border-outline/60 hover:text-primary transition-colors"
            >
              The Checklist
            </button>
            <button
              onClick={() => scrollTo("refusal-guide")}
              className="text-left py-2 text-[15px] font-semibold text-secondary border-b border-outline/60 hover:text-primary transition-colors"
            >
              If Refused
            </button>
          </div>
          <div className="pt-1">
            <button
              onClick={() => scrollTo("checklist")}
              className="w-full py-3 rounded-full bg-secondary text-on-secondary text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors"
            >
              <span>Get Checklist</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
