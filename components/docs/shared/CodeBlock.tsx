"use client";

import React from "react";

export function CodeBlock({
  children,
  filename,
}: {
  children: string;
  filename?: string;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-surface-lighter border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-warm-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="text-[10px] font-mono text-text-muted">
            {filename}
          </span>
        </div>
      )}
      <pre className="code-block rounded-none border-0 m-0">
        <code dangerouslySetInnerHTML={{ __html: children }} />
      </pre>
    </div>
  );
}
