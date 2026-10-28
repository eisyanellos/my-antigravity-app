import React from "react";

interface PillLabelProps {
  children: React.ReactNode;
  dotColor?: string;
  className?: string;
}

export default function PillLabel({
  children,
  dotColor = "bg-primary",
  className = "",
}: PillLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary-border ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} flex-shrink-0`} />
      <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-primary-ink">
        {children}
      </span>
    </div>
  );
}
