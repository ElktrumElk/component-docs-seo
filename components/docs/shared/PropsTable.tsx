"use client";

import React from "react";

interface PropRow {
  prop: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export function PropsTable({ props }: { props: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface-card/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-border-strong/50 text-[11px] font-bold uppercase tracking-wider text-text-muted">
            <th className="text-left px-4 py-3 whitespace-nowrap">Prop</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Type</th>
            <th className="text-center px-3 py-3 whitespace-nowrap">Req</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Default</th>
            <th className="text-left px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr
              key={p.prop}
              className="border-b border-border/30 transition-colors hover:bg-surface-light/40"
              style={{ background: i % 2 === 1 ? "rgba(34,197,94,0.015)" : undefined }}
            >
              <td className="px-4 py-3">
                <code className="text-primary-light font-mono text-xs font-semibold bg-primary/8 px-1.5 py-0.5 rounded">
                  {p.prop}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-cool-accent font-mono text-xs">
                  {p.type}
                </code>
              </td>
              <td className="px-3 py-3 text-center">
                {p.required ? (
                  <span className="text-[10px] font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">
                    *
                  </span>
                ) : (
                  <span className="text-text-muted text-[10px]">&mdash;</span>
                )}
              </td>
              <td className="px-4 py-3">
                {p.default ? (
                  <code className="text-warm-accent font-mono text-xs">
                    {p.default}
                  </code>
                ) : (
                  <span className="text-text-muted text-xs">&mdash;</span>
                )}
              </td>
              <td className="px-4 py-3 text-text-secondary text-xs leading-relaxed max-w-xs">
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
