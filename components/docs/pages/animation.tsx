"use client";

import { useState } from "react";
import { Animation, Stack, Text, Button } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const motionProps = [
  { prop: "child", type: "ElementType", required: true, description: "Content to animate (render prop)" },
  { prop: "initial", type: "Record<string, any>", required: false, description: "Initial state — e.g. { opacity: 0, y: 20 }" },
  { prop: "animate", type: "Record<string, any>", required: false, description: "Target state. Animates when this object changes" },
  { prop: "exit", type: "Record<string, any>", required: false, description: "Exit state — use with AnimatePresence for unmount animations" },
  { prop: "whileHover", type: "Record<string, any>", required: false, description: "State applied on hover" },
  { prop: "whileTap", type: "Record<string, any>", required: false, description: "State applied on tap/click" },
  { prop: "whileInView", type: "Record<string, any>", required: false, description: "State applied when element enters viewport" },
  { prop: "transition", type: "MotionTransition", required: false, description: "Spring or tween configuration" },
  { prop: "variants", type: "Record<string, any>", required: false, description: "Named animation states for shared variants" },
  { prop: "layout", type: 'boolean | "position" | "size"', required: false, description: "Enable layout animations for position/size changes" },
  { prop: "viewport", type: "{ once?: boolean; amount?: number }", required: false, description: "Viewport intersection config for whileInView" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
];

const legacyProps = [
  { prop: "child", type: "ElementType", required: true, description: "Content to animate (render prop)" },
  { prop: "keyframes", type: "Keyframe[] | Record<string, any[]>", required: false, description: "Web Animations API keyframes — array or object syntax" },
  { prop: "duration", type: "number", required: false, default: "300", description: "Duration in milliseconds" },
  { prop: "delay", type: "number", required: false, default: "0", description: "Delay before animation starts in ms" },
  { prop: "iterations", type: "number", required: false, default: "1", description: "Repeat count — use Infinity for infinite loops" },
  { prop: "direction", type: "PlaybackDirection", required: false, default: '"normal"', description: 'Play direction: "normal", "reverse", "alternate"' },
  { prop: "fill", type: "FillMode", required: false, default: '"forwards"', description: "Style retention after animation completes" },
  { prop: "easing", type: "string", required: false, default: '"ease"', description: "CSS timing function — ease, linear, ease-in-out, cubic-bezier(...)" },
  { prop: "isAutomatic", type: "boolean", required: false, default: "true", description: "Play immediately on mount" },
  { prop: "gesture", type: '"click" | "hover" | "focus" | "scroll" | "none"', required: false, default: '"none"', description: "Trigger gesture — play animation on user interaction" },
];

const HoverTapDemo = function HoverTapDemo() {
  const [hoverCount, setHoverCount] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  return (
    <Animation
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(34,197,94,0.15)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      child={() => (
        <div
          style={{ padding: "1.25rem 2rem", background: "rgba(34,197,94,0.08)", borderRadius: "12px", border: "1px solid rgba(34,197,94,0.2)", color: "#faf5f0", textAlign: "center", cursor: "pointer", userSelect: "none" }}
          onMouseEnter={() => setHoverCount((c) => c + 1)}
          onClick={() => setTapCount((c) => c + 1)}
        >
          Hover: {hoverCount} | Tap: {tapCount}
        </div>
      )}
    />
  );
};

const notes = (
  <div className="feature-card mb-6">
    <h3 className="font-bold mb-2 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
      Dual Mode — Motion or Legacy
    </h3>
    <p className="text-text-secondary text-sm leading-relaxed">
      Pass any <span className="highlight-green">motion prop</span> (initial, animate, whileHover, etc.) to use
      Motion mode — the component renders as{" "}
      <code className="text-cool-accent text-xs font-mono bg-cool-accent/10 px-1.5 py-0.5 rounded">motion.div</code> automatically.
      Otherwise, the component uses the{" "}
      <span className="highlight-amber">native Web Animations API</span> with keyframes for
      zero-dependency, high-performance animations.
    </p>
  </div>
);

export function AnimationPage() {
  return (
    <ComponentPage
      title="Animation"
      description="Dual-mode animation component. Motion mode provides declarative spring/tween animations via motion/react. Legacy mode uses the native Web Animations API for zero-dependency keyframe animations. The mode is auto-detected based on which props you pass."
      props={motionProps}
      example={`<span class="comment">// Motion mode — declarative spring animation</span>
&lt;<span class="component">Animation</span>
  <span class="prop">initial</span>={{ <span class="prop">opacity</span>: 0, <span class="prop">y</span>: 20 }}
  <span class="prop">animate</span>={{ <span class="prop">opacity</span>: 1, <span class="prop">y</span>: 0 }}
  <span class="prop">transition</span>={{ <span class="prop">type</span>: <span class="string">"spring"</span>, <span class="prop">stiffness</span>: 200, <span class="prop">damping</span>: 15 }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">MyComponent</span> /&gt;}
/&gt;

<span class="comment">// Legacy mode — auto fade-in on mount</span>
&lt;<span class="component">Animation</span>
  <span class="prop">isAutomatic</span>
  <span class="prop">duration</span>={<span class="string">600</span>}
  <span class="prop">easing</span>=<span class="string">"ease-out"</span>
  <span class="prop">keyframes</span>={[
    { <span class="prop">opacity</span>: 0, <span class="prop">transform</span>: <span class="string">"translateY(10px)"</span> },
    { <span class="prop">opacity</span>: 1, <span class="prop">transform</span>: <span class="string">"translateY(0)"</span> },
  ]}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">div</span>&gt;I fade in&lt;/<span class="component">div</span>&gt;}
/&gt;`}
      notes={notes}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-primary inline-block" />
          Motion Mode
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          Declarative animations powered by motion/react. Pass{" "}
          <span className="highlight-green">initial/animate/exit</span> props and the
          component renders as motion.div automatically. Supports spring and tween transitions.
        </p>
      </div>

      <ExampleCard
        title="Spring Fade-In"
        description="A smooth fade-in with spring physics. The element slides up from 20px below while fading in. Spring physics give a natural, slightly bouncy feel."
        code={`&lt;<span class="component">Animation</span>
  <span class="prop">initial</span>={{ <span class="prop">opacity</span>: 0, <span class="prop">y</span>: 20 }}
  <span class="prop">animate</span>={{ <span class="prop">opacity</span>: 1, <span class="prop">y</span>: 0 }}
  <span class="prop">transition</span>={{ <span class="prop">type</span>: <span class="string">"spring"</span>, <span class="prop">stiffness</span>: 200, <span class="prop">damping</span>: 15 }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">div</span>&gt;I spring in from below&lt;/<span class="component">div</span>&gt;}
/&gt;`}
      >
        <Animation
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          child={() => (
            <div style={{ padding: "1.5rem", background: "rgba(34,197,94,0.08)", borderRadius: "10px", border: "1px solid rgba(34,197,94,0.2)", color: "#faf5f0" }}>
              I spring in from below
            </div>
          )}
        />
      </ExampleCard>

      <ExampleCard
        title="Hover + Tap Gestures"
        description="Interactive animation that responds to hover and tap. Scales up on hover with a subtle shadow, and compresses on tap for tactile feedback."
        code={`&lt;<span class="component">Animation</span>
  <span class="prop">initial</span>={{ <span class="prop">opacity</span>: 0, <span class="prop">scale</span>: 0.9 }}
  <span class="prop">animate</span>={{ <span class="prop">opacity</span>: 1, <span class="prop">scale</span>: 1 }}
  <span class="prop">whileHover</span>={{ <span class="prop">scale</span>: 1.05, <span class="prop">boxShadow</span>: <span class="string">"0 4px 20px rgba(0,0,0,0.2)"</span> }}
  <span class="prop">whileTap</span>={{ <span class="prop">scale</span>: 0.95 }}
  <span class="prop">transition</span>={{ <span class="prop">type</span>: <span class="string">"spring"</span>, <span class="prop">stiffness</span>: 300, <span class="prop">damping</span>: 20 }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">div</span>&gt;Hover: {hoverCount} | Tap: {tapCount}&lt;/<span class="component">div</span>&gt;}
/&gt;`}
      >
        <HoverTapDemo />
      </ExampleCard>

      <ExampleCard
        title="Scroll-Triggered Entrance"
        description="Animate when the element enters the viewport. Use viewport.once=true to only play once. The amount threshold controls how much of the element must be visible."
        code={`&lt;<span class="component">Animation</span>
  <span class="prop">initial</span>={{ <span class="prop">opacity</span>: 0, <span class="prop">y</span>: 40 }}
  <span class="prop">whileInView</span>={{ <span class="prop">opacity</span>: 1, <span class="prop">y</span>: 0 }}
  <span class="prop">viewport</span>={{ <span class="prop">once</span>: <span class="keyword">true</span>, <span class="prop">amount</span>: 0.5 }}
  <span class="prop">transition</span>={{ <span class="prop">type</span>: <span class="string">"spring"</span>, <span class="prop">stiffness</span>: 100, <span class="prop">damping</span>: 20 }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">div</span>&gt;Scroll me into view&lt;/<span class="component">div</span>&gt;}
/&gt;`}
      >
        <Animation
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          child={() => (
            <div style={{ padding: "2rem", background: "rgba(245,158,11,0.06)", borderRadius: "10px", border: "1px solid rgba(245,158,11,0.2)", color: "#faf5f0", textAlign: "center" }}>
              I animate when you scroll me into view (once)
            </div>
          )}
        />
      </ExampleCard>

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-warm-accent inline-block" />
          Legacy Mode (Web Animations API)
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          When <span className="highlight-amber">no motion props</span> are present,
          the component uses the native Web Animations API with keyframes.
          Zero CSS, zero re-renders, maximum performance.
        </p>
      </div>

      <ExampleCard
        title="Auto Fade-In on Mount"
        description="Fade in automatically when the component mounts using the Web Animations API. No external dependencies needed."
        code={`&lt;<span class="component">Animation</span>
  <span class="prop">isAutomatic</span>
  <span class="prop">duration</span>={<span class="string">600</span>}
  <span class="prop">easing</span>=<span class="string">"ease-out"</span>
  <span class="prop">keyframes</span>={[
    { <span class="prop">opacity</span>: 0, <span class="prop">transform</span>: <span class="string">"translateY(10px)"</span> },
    { <span class="prop">opacity</span>: 1, <span class="prop">transform</span>: <span class="string">"translateY(0)"</span> },
  ]}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">div</span>&gt;I fade in on mount&lt;/<span class="component">div</span>&gt;}
/&gt;`}
      >
        <Animation isAutomatic duration={600} easing="ease-out" keyframes={[{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }]} child={() => (
          <div style={{ padding: "1.5rem", background: "rgba(34,197,94,0.08)", borderRadius: "10px", border: "1px solid rgba(34,197,94,0.2)", color: "#faf5f0" }}>
            I fade in on mount
          </div>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Click Bounce"
        description="Bounce animation triggered on click. The gesture prop makes the animation respond to user interaction — no manual event handlers needed."
        code={`&lt;<span class="component">Animation</span>
  <span class="prop">gesture</span>=<span class="string">"click"</span>
  <span class="prop">duration</span>={<span class="string">400</span>}
  <span class="prop">keyframes</span>={[
    { <span class="prop">transform</span>: <span class="string">"scale(1)"</span> },
    { <span class="prop">transform</span>: <span class="string">"scale(1.2)"</span> },
    { <span class="prop">transform</span>: <span class="string">"scale(0.95)"</span> },
    { <span class="prop">transform</span>: <span class="string">"scale(1)"</span> },
  ]}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">button</span>&gt;Click to bounce&lt;/<span class="component">button</span>&gt;}
/&gt;`}
      >
        <Animation gesture="click" duration={400} keyframes={[{ transform: "scale(1)" }, { transform: "scale(1.2)" }, { transform: "scale(0.95)" }, { transform: "scale(1)" }]} child={() => (
          <div style={{ padding: "1rem 2rem", background: "rgba(34,197,94,0.08)", borderRadius: "10px", border: "1px solid rgba(34,197,94,0.2)", color: "#faf5f0", cursor: "pointer", textAlign: "center" }}>
            Click to bounce
          </div>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
