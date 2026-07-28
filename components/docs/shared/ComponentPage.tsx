"use client";

import React from "react";
import { PropsTable } from "./PropsTable";
import { CodeBlock } from "./CodeBlock";

interface PropRow {
  prop: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

interface ComponentPageProps {
  title: string;
  description: string;
  props: PropRow[];
  example: string;
  exampleFilename?: string;
  notes?: React.ReactNode;
  related?: string[];
  children?: React.ReactNode;
}

export function ComponentPage({
  title,
  description,
  props,
  example,
  exampleFilename,
  notes,
  related,
  children,
}: ComponentPageProps) {
  return (
    <article className="max-w-4xl" itemScope itemType="https://schema.org/TechArticle">
      <header className="animate-slide-up">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3" itemProp="name">
          {title}
        </h1>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl" itemProp="description">
          {description}
        </p>
      </header>

      {notes && <div className="mt-6">{notes}</div>}

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {children && (
        <section className="animate-slide-up" style={{ animationDelay: "100ms" }} aria-label="Live examples">
          <h2 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-primary inline-block" />
            Examples
          </h2>
          <div className="flex flex-col gap-10">
            {children}
          </div>
        </section>
      )}

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <section className="animate-slide-up" style={{ animationDelay: "200ms" }} aria-label="Props reference">
        <h2 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-warm-accent inline-block" />
          Props
        </h2>
        <PropsTable props={props} />
      </section>

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <section className="animate-slide-up" style={{ animationDelay: "300ms" }} aria-label="Usage example">
        <h2 className="text-lg sm:text-xl font-bold mb-5 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-cool-accent inline-block" />
          Usage
        </h2>
        <CodeBlock filename={exampleFilename}>{example}</CodeBlock>
      </section>

      {related && related.length > 0 && (
        <>
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <section className="animate-slide-up" style={{ animationDelay: "400ms" }} aria-label="Related components">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-text-muted inline-block" />
              See Also
            </h2>
            <div className="flex flex-wrap gap-2">
              {related.map((name) => (
                <button
                  key={name}
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("navigate", { detail: name.toLowerCase() })
                    );
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-surface-light border border-border text-text-secondary hover:text-primary-light hover:border-primary/40 transition-colors cursor-pointer"
                >
                  {name}
                </button>
              ))}
            </div>
          </section>
        </>
      )}
    </article>
  );
}
