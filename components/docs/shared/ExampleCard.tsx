"use client";

import React from "react";
import { CodeBlock } from "./CodeBlock";

interface ExampleCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code?: string;
}

export function ExampleCard({ title, description, children, code }: ExampleCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
        <h3 className="text-base font-bold text-text-primary">{title}</h3>
        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/12 text-primary-light border border-primary/20">
          Live
        </span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed pl-4">
        {description}
      </p>
      <div className="p-5 md:p-6 rounded-xl border border-border bg-surface-card/60">
        {children}
      </div>
      {code && <CodeBlock>{code}</CodeBlock>}
    </div>
  );
}
