"use client";

import React from "react";
import { CodeBlock } from "@/components/docs/shared/CodeBlock";
import { Gap, Icon, Icons } from "elk-components";

export function OverviewPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
        <span className="gradient-text">elk-components</span>
      </h1>
      <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
        A <span className="highlight-green">React animation</span>,{" "}
        <span className="highlight-amber">layout</span>, and{" "}
        <span className="highlight-cyan">styling</span> toolkit for building
        polished user interfaces with motion, structure, and style.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
        <div className="feature-card">
          <span className="text-2xl mb-3 block">✦</span>
          <h3 className="font-bold mb-1.5">Dual-Mode Animation</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            <span className="highlight-green">Motion mode</span> via
            motion/react for declarative spring/tween configs, or{" "}
            <span className="highlight-amber">Legacy mode</span> via the Web
            Animations API for imperative keyframe control. Auto-detected based
            on which props you pass.
          </p>
        </div>
        <div className="feature-card">
          <span className="text-2xl mb-3 block">
            <Icon icon={Icons.icon.Leaf} />
          </span>
          <h3 className="font-bold mb-1.5">Letter Animations</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            <span className="highlight-cyan">20 built-in presets</span>{" "}
            including bounceIn, glitch, typewriter, elastic, wave, and spiral.
            Animate individual letters or whole words with per-character
            keyframes and staggered timing.
          </p>
        </div>
        <div className="feature-card">
          <span className="text-2xl mb-3 block">
            <Icon icon={Icons.icon.Airplay} />
          </span>
          <h3 className="font-bold mb-1.5">Transitions</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            <span className="highlight-amber">13 CSS effect presets</span> —
            fade, slide, zoom, flip, liquid, morph, glide — with gesture
            triggers and AnimatePresence mode support for view switching.
          </p>
        </div>
        <div className="feature-card">
          <span className="text-2xl mb-3 block">
            <Icon icon={Icons.icon.Layout} />
          </span>
          <h3 className="font-bold mb-1.5">205 SVG Icons</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            <span className="highlight-green">Stroke-based icons</span> across
            12 categories. Forward size and color via the Icon wrapper, or use{" "}
            <code className="text-primary-light font-mono text-xs">
              Icons.icon.*
            </code>{" "}
            namespace.
          </p>
        </div>
        <div className="feature-card">
          <span className="text-2xl mb-3 block">
            <Icon icon={Icons.icon.Crown} />
          </span>
          <h3 className="font-bold mb-1.5">30+ UI Primitives</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Button, Card, Avatar, Input, Badge, Tabs, Modals, SidePanels, Grids,
            Lists — all <span className="highlight-green">fully typed</span> and
            composable via render props.
          </p>
        </div>
        <div className="feature-card">
          <span className="text-2xl mb-3 block">
            <Icon icon={Icons.icon.Hourglass} />
          </span>
          <h3 className="font-bold mb-1.5">Enhanced Hooks</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            <span className="highlight-cyan">useState</span> with reset/get,{" "}
            <span className="highlight-amber">createStore</span>,{" "}
            <span className="highlight-green">useInstance</span> for
            cross-component data, and useStableCallback for stable references.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-primary inline-block" />
        Quick Install
      </h2>
      <Gap height="1rem" />
      <code
        className="code-block rounded-none border-0 m-0"
        dangerouslySetInnerHTML={{
          __html:
            '<span class="keyword">npm</span> install <span class="string">elk-components</span>',
        }}
      ></code>
    </div>
  );
}
