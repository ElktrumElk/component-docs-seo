"use client";

import React from "react";
import { CodeBlock } from "@/components/docs/shared/CodeBlock";

export function InstallPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Installation</h1>
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mb-8">
        Install <span className="highlight-green">elk-components</span> via your
        preferred package manager. The library has{" "}
        <span className="highlight-amber">zero config</span> — import any component
        or hook and start building immediately.
      </p>

      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-primary inline-block" />
        Package Manager
      </h2>
      <CodeBlock filename="terminal">
{`<span class="comment"># npm</span>
<span class="keyword">npm</span> install <span class="string">elk-components</span>

<span class="comment"># yarn</span>
<span class="keyword">yarn</span> add <span class="string">elk-components</span>

<span class="comment"># pnpm</span>
<span class="keyword">pnpm</span> add <span class="string">elk-components</span>`}
      </CodeBlock>

      <div className="mt-8 p-5 rounded-xl border border-border bg-surface-card/50">
        <h3 className="font-bold mb-2 text-primary-light">Peer Dependencies</h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          elk-components requires <code className="text-warm-accent font-mono text-xs">react</code> and{" "}
          <code className="text-warm-accent font-mono text-xs">react-dom</code> as peer
          dependencies. For Motion mode animations, it also uses{" "}
          <code className="text-cool-accent font-mono text-xs">motion/react</code> which is
          bundled as a dependency.
        </p>
      </div>

      <h2 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-warm-accent inline-block" />
        Import Patterns
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-text-secondary text-sm mb-3">
            <span className="highlight-green">Named imports</span> — import individual
            components directly. Tree-shaking removes any unused code.
          </p>
          <CodeBlock filename="App.tsx">
{`<span class="keyword">import</span> { Button, Card, Text, Avatar } <span class="keyword">from</span> <span class="string">"elk-components"</span>;
<span class="keyword">import</span> { Icons, Icon } <span class="keyword">from</span> <span class="string">"elk-components"</span>;
<span class="keyword">import</span> { Animation, Transition } <span class="keyword">from</span> <span class="string">"elk-components"</span>;`}
          </CodeBlock>
        </div>

        <div>
          <p className="text-text-secondary text-sm mb-3">
            <span className="highlight-amber">Hooks</span> — import from the hooks subpath.
            All hooks are tree-shakeable.
          </p>
          <CodeBlock filename="hooks.ts">
{`<span class="keyword">import</span> {
  useState, useRef, useEffect, useCallback,
  createStore, useStore, useSetState,
  useInstance, useComponentData,
  useStableCallback
} <span class="keyword">from</span> <span class="string">"elk-components"</span>;`}
          </CodeBlock>
        </div>

        <div>
          <p className="text-text-secondary text-sm mb-3">
            <span className="highlight-cyan">Scaffold a new project</span> — use the CLI
            to generate a starter component file with all required imports.
          </p>
          <CodeBlock filename="terminal">
{`<span class="comment"># Scaffolds a new component file</span>
<span class="keyword">npx</span> create-elk-component <span class="string">MyComponent</span>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
