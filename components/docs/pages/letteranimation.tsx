"use client";

import { LetterAnimation } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "text", type: "string", required: true, description: "Text to animate" },
  { prop: "type", type: '"letters" | "words"', required: false, default: '"letters"', description: "Animation granularity" },
  { prop: "animation", type: "AnimationPreset", required: false, default: '"fadeUp"', description: "Built-in preset name" },
  { prop: "keyframes", type: "Keyframe[]", required: false, description: "Custom keyframes for all tokens" },
  { prop: "letterKeyframes", type: "Keyframe[][]", required: false, description: "Per-letter keyframes (letters mode)" },
  { prop: "words", type: "WordSegment[]", required: false, description: "Word segments with per-word keyframes" },
  { prop: "size", type: "string", required: false, description: 'Font size (e.g. "2rem")' },
  { prop: "textType", type: "'h1' | 'h2' | ... | 'p' | 'pre'", required: false, default: '"div"', description: "HTML element type" },
  { prop: "duration", type: "number", required: false, default: "300", description: "Animation duration in ms" },
  { prop: "delay", type: "number", required: false, default: "0", description: "Base delay in ms" },
  { prop: "stagger", type: "number", required: false, default: "50", description: "Delay between tokens in ms" },
  { prop: "iterations", type: "number", required: false, default: "1", description: "Repeat count" },
  { prop: "direction", type: "PlaybackDirection", required: false, default: '"normal"', description: "Play direction" },
  { prop: "fill", type: "FillMode", required: false, default: '"forwards"', description: "Style retention" },
  { prop: "easing", type: "string", required: false, default: '"ease"', description: "CSS timing function" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
];

const notes = (
  <div className="feature-card">
    <h3 className="font-semibold mb-2">20 Built-in Presets</h3>
    <p className="text-text-secondary text-sm">
      <code className="text-accent text-xs font-mono">fadeUp</code>,{" "}
      <code className="text-accent text-xs font-mono">fadeDown</code>,{" "}
      <code className="text-accent text-xs font-mono">fadeIn</code>,{" "}
      <code className="text-accent text-xs font-mono">slideLeft</code>,{" "}
      <code className="text-accent text-xs font-mono">slideRight</code>,{" "}
      <code className="text-accent text-xs font-mono">scaleUp</code>,{" "}
      <code className="text-accent text-xs font-mono">scaleDown</code>,{" "}
      <code className="text-accent text-xs font-mono">rotateIn</code>,{" "}
      <code className="text-accent text-xs font-mono">flipIn</code>,{" "}
      <code className="text-accent text-xs font-mono">bounceIn</code>,{" "}
      <code className="text-accent text-xs font-mono">typewriter</code>,{" "}
      <code className="text-accent text-xs font-mono">blurIn</code>,{" "}
      <code className="text-accent text-xs font-mono">swingIn</code>,{" "}
      <code className="text-accent text-xs font-mono">wave</code>,{" "}
      <code className="text-accent text-xs font-mono">glitch</code>,{" "}
      <code className="text-accent text-xs font-mono">pop</code>,{" "}
      <code className="text-accent text-xs font-mono">dropIn</code>,{" "}
      <code className="text-accent text-xs font-mono">foldIn</code>,{" "}
      <code className="text-accent text-xs font-mono">elastic</code>,{" "}
      <code className="text-accent text-xs font-mono">spiral</code>
    </p>
  </div>
);

export function LetterAnimationPage() {
  return (
    <ComponentPage
      title="LetterAnimation"
      description="Animates individual letters or words of a text string with 20 built-in presets, per-letter/word keyframe overrides, and staggered timing."
      props={props}
      notes={notes}
      example={`// Basic letter animation
<LetterAnimation
  text="Hello World"
  animation="bounceIn"
  size="3rem"
  stagger={60}
  duration={400}
/>

// Word-level animation
<LetterAnimation
  text="Welcome to elk-components"
  type="words"
  animation="slideLeft"
  size="2rem"
  stagger={80}
/>`}
    >
      <ExampleCard
        title="Fade Up"
        description="Letters fade in from below with stagger."
        code={`<LetterAnimation
  text="Hello World"
  animation="fadeUp"
  size="2.5rem"
  stagger={60}
  duration={400}
/>`}
      >
        <LetterAnimation text="Hello World" animation="fadeUp" size="2.5rem" stagger={60} duration={400} />
      </ExampleCard>

      <ExampleCard
        title="Bounce In"
        description="Letters bounce in with elastic timing."
        code={`<LetterAnimation
  text="Bounce In"
  animation="bounceIn"
  size="2.5rem"
  stagger={80}
  duration={500}
/>`}
      >
        <LetterAnimation text="Bounce In" animation="bounceIn" size="2.5rem" stagger={80} duration={500} />
      </ExampleCard>

      <ExampleCard
        title="Word Animation"
        description="Animate whole words instead of letters."
        code={`<LetterAnimation
  text="Welcome to elk-components"
  type="words"
  animation="slideLeft"
  size="1.8rem"
  stagger={100}
/>`}
      >
        <LetterAnimation text="Welcome to elk-components" type="words" animation="slideLeft" size="1.8rem" stagger={100} />
      </ExampleCard>

      <ExampleCard
        title="Wave"
        description="Wave animation across letters."
        code={`<LetterAnimation
  text="Wave Effect"
  animation="wave"
  size="2.5rem"
  stagger={50}
  duration={600}
/>`}
      >
        <LetterAnimation text="Wave Effect" animation="wave" size="2.5rem" stagger={50} duration={600} />
      </ExampleCard>
    </ComponentPage>
  );
}
