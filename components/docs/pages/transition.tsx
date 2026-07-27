"use client";

import { Transition, Text, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const cssProps = [
  { prop: "from", type: "ElementType", required: true, description: "Initial element" },
  { prop: "to", type: "ElementType", required: true, description: "Target element" },
  { prop: "active", type: "boolean", required: false, description: "Manual control (true = show to)" },
  { prop: "effect", type: "TransitionEffect", required: false, default: '"fade"', description: "Built-in effect preset" },
  { prop: "duration", type: "number", required: false, default: "300", description: "Duration in ms" },
  { prop: "delay", type: "number", required: false, default: "0", description: "Delay in ms" },
  { prop: "easing", type: "string", required: false, description: "CSS easing" },
  { prop: "isAutomatic", type: "boolean", required: false, default: "false", description: "Transition on mount" },
  { prop: "gesture", type: '"click" | "hover" | "focus" | "scroll" | "none"', required: false, default: '"none"', description: "Trigger gesture" },
  { prop: "origin", type: "string", required: false, default: '"top left"', description: "Transform origin" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
];

const motionProps = [
  { prop: "useMotion", type: "boolean", required: true, default: "false", description: "Enable Motion mode" },
  { prop: "motionInitial", type: "Record<string, any>", required: false, description: "Custom Motion initial state" },
  { prop: "motionExit", type: "Record<string, any>", required: false, description: "Custom Motion exit state" },
  { prop: "motionTransition", type: "MotionTransition", required: false, description: "Motion transition config" },
];

const notes = (
  <div className="feature-card">
    <h3 className="font-semibold mb-2">13 Built-in Effects</h3>
    <p className="text-text-secondary text-sm">
      <code className="text-accent text-xs font-mono">fade</code>,{" "}
      <code className="text-accent text-xs font-mono">slide-left</code>,{" "}
      <code className="text-accent text-xs font-mono">slide-right</code>,{" "}
      <code className="text-accent text-xs font-mono">slide-up</code>,{" "}
      <code className="text-accent text-xs font-mono">slide-down</code>,{" "}
      <code className="text-accent text-xs font-mono">zoom</code>,{" "}
      <code className="text-accent text-xs font-mono">flip</code>,{" "}
      <code className="text-accent text-xs font-mono">liquid</code>,{" "}
      <code className="text-accent text-xs font-mono">smooth</code>,{" "}
      <code className="text-accent text-xs font-mono">morph</code>,{" "}
      <code className="text-accent text-xs font-mono">glide</code>,{" "}
      <code className="text-accent text-xs font-mono">reveal</code>,{" "}
      <code className="text-accent text-xs font-mono">pop</code>
    </p>
  </div>
);

export function TransitionPage() {
  return (
    <ComponentPage
      title="Transition"
      description="Switches between two elements with built-in CSS transition effects or Motion-based enter/exit animations."
      props={cssProps}
      notes={notes}
      example={`<Transition
  from={() => <LoginView />}
  to={() => <RegisterView />}
  effect="slide-left"
  duration={300}
  gesture="click"
/>

// Controlled with active prop
<Transition
  from={() => <Off />}
  to={() => <On />}
  active={isOn}
  effect="zoom"
/>`}
    >
      <ExampleCard
        title="Click Transition"
        description="Click to toggle between two views with a fade effect."
        code={`<Transition
  from={() => <Text text="View A" type="p" />}
  to={() => <Text text="View B" type="p" />}
  effect="fade"
  gesture="click"
/>`}
      >
        <Transition
          from={() => (
            <div style={{ padding: "1.5rem", background: "rgba(99,102,241,0.1)", borderRadius: "8px", border: "1px solid rgba(99,102,241,0.2)", textAlign: "center" }}>
              <Text text="Click to switch" type="p" size="0.9rem" color="#e2e8f0" />
            </div>
          )}
          to={() => (
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.1)", borderRadius: "8px", border: "1px solid rgba(139,92,246,0.2)", textAlign: "center" }}>
              <Text text="Switched!" type="p" size="0.9rem" color="#e2e8f0" />
            </div>
          )}
          effect="fade"
          gesture="click"
        />
      </ExampleCard>
    </ComponentPage>
  );
}
