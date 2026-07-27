"use client";

import React from "react";
import { CodeBlock } from "@/components/docs/shared/CodeBlock";

export function ConventionsPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Conventions</h1>
      <p className="text-text-secondary text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
        Every component in elk-components follows these core patterns.
        Understanding them will help you use the library effectively and avoid common issues.
      </p>

      <div className="space-y-8">
        <section className="feature-card">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Render Props Pattern
          </h2>
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            Every slot in elk-components uses{" "}
            <code className="text-primary-light text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded">React.JSX.ElementType</code> —
            you must pass an <span className="highlight-green">arrow function returning JSX</span>, not raw JSX children.
            This is different from standard React patterns where you would use{" "}
            <code className="text-warm-accent text-xs font-mono bg-warm-accent/10 px-1.5 py-0.5 rounded">children</code>.
          </p>
          <CodeBlock>{`// Correct — arrow function returning JSX
&lt;<span class="component">Center</span> <span class="prop">child</span>={() =&gt; &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Hello"</span> <span class="prop">type</span>=<span class="string">"p"</span> /&gt;} /&gt;

// Wrong — raw JSX children (will not work)
&lt;<span class="component">Center</span> <span class="prop">child</span>={&lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Hello"</span> <span class="prop">type</span>=<span class="string">"p"</span> /&gt;} /&gt;`}</CodeBlock>
          <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/15">
            <p className="text-text-secondary text-xs leading-relaxed">
              <span className="highlight-green font-semibold">Why?</span> Render props
              ensure components only mount when the parent renders, enabling lazy
              initialization and avoiding unnecessary re-renders from JSX identity changes.
            </p>
          </div>
        </section>

        <section className="feature-card">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-warm-accent inline-block" />
            Gesture Passthrough via <code className="text-warm-accent text-sm">gest</code>
          </h2>
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            Native DOM events are passed via the{" "}
            <code className="text-warm-accent text-xs font-mono bg-warm-accent/10 px-1.5 py-0.5 rounded">gest</code> prop,
            which is <span className="highlight-amber">typed to the underlying HTML element</span>.
            For example, a Button accepts HTMLButtonElement events (onClick, disabled, type, etc.),
            while an Input accepts HTMLInputElement events (onChange, onFocus, onBlur, etc.).
          </p>
          <CodeBlock>{`<span class="comment">// Button receives button-specific events</span>
&lt;<span class="component">Button</span>
  <span class="prop">gest</span>={{
    <span class="prop">onClick</span>: () =&gt; alert(<span class="string">"clicked"</span>),
    <span class="prop">disabled</span>: isLoading,
    <span class="prop">type</span>: <span class="string">"submit"</span>
  }}
/&gt;

<span class="comment">// Input receives input-specific events</span>
&lt;<span class="component">Input</span>
  <span class="prop">gest</span>={{
    <span class="prop">onChange</span>: (e) =&gt; setSearch(e.target.value),
    <span class="prop">onFocus</span>: () =&gt; setFocused(true)
  }}
/&gt;`}</CodeBlock>
        </section>

        <section className="feature-card">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cool-accent inline-block" />
            Instance Access via <code className="text-cool-accent text-sm">onFunc</code>
          </h2>
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            Components that expose{" "}
            <span className="highlight-cyan">imperative control</span> accept an{" "}
            <code className="text-cool-accent text-xs font-mono bg-cool-accent/10 px-1.5 py-0.5 rounded">onFunc</code> callback
            which receives the internal class instance. This gives you direct access to
            methods like build(), play(), stop(), and dispose() when needed.
          </p>
          <CodeBlock>{`<span class="comment">// Access the internal instance for imperative control</span>
&lt;<span class="component">Animation</span>
  <span class="prop">onFunc</span>={(self) =&gt; {
    <span class="comment">// Store the instance for later use</span>
    animationRef.current = self;
  }}
/&gt;

<span class="comment">// Later: imperatively control the animation</span>
animationRef.current?.play?.();
animationRef.current?.stop?.();`}</CodeBlock>
        </section>

        <section className="feature-card">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Typed CSS Units
          </h2>
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            Props like gap, padding, and borderRadius use{" "}
            <span className="highlight-green">template literal types</span> that provide
            autocomplete for valid CSS units. You can use{" "}
            <code className="text-primary-light text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded">rem</code>,{" "}
            <code className="text-primary-light text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded">px</code>, or{" "}
            <code className="text-primary-light text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded">em</code> —
            or pass raw strings for full control.
          </p>
          <CodeBlock>{`<span class="comment">// Typed — autocomplete suggests valid values</span>
&lt;<span class="component">Stack</span> <span class="prop">gap</span>=<span class="string">"1rem"</span> <span class="prop">padding</span>=<span class="string">"1.5rem"</span> /&gt;

<span class="comment">// Or use pixel values</span>
&lt;<span class="component">Stack</span> <span class="prop">gap</span>=<span class="string">"16px"</span> <span class="prop">padding</span>=<span class="string">"24px"</span> /&gt;

<span class="comment">// Enum sizing presets</span>
&lt;<span class="component">Avatar</span> <span class="prop">size</span>=<span class="string">"lg"</span> /&gt;  <span class="comment">// xs | sm | md | lg | xl</span>
&lt;<span class="component">Badge</span> <span class="prop">size</span>=<span class="string">"md"</span> /&gt;`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
