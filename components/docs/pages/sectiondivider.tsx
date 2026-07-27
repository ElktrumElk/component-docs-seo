"use client";

import { SectionDivider, Text, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "variant", type: '"wave"|"curl"|"zigzag"|"dots"|"tilde"|"heart"|"diamond"|"leaf"|"curve"|"pulse"|"loop"|"scroll"', required: false, default: '"wave"', description: "Visual style" },
  { prop: "color", type: "string", required: false, default: '"#e2e8f0"', description: "Stroke/fallback fill color" },
  { prop: "fillColor", type: "string", required: false, description: "Fill color for filled variants" },
  { prop: "strokeWidth", type: "number", required: false, default: "2", description: "Stroke width in px" },
  { prop: "height", type: "number", required: false, default: "80", description: "SVG height in px" },
  { prop: "width", type: "string", required: false, default: '"100%"', description: "CSS width" },
  { prop: "flip", type: "boolean", required: false, description: "Mirror vertically" },
  { prop: "customPath", type: "string", required: false, description: "Override built-in SVG path" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "child", type: "ElementType", required: false, description: "Child component" },
  { prop: "gest", type: "SVGAttributes<SVGSVGElement>", required: false, description: "SVG attributes" },
  { prop: "onFunc", type: "(self: _SectionDivider) => void", required: false, description: "Instance callback" },
  { prop: "animate", type: "boolean", required: false, description: "Enable continuous scroll animation" },
  { prop: "duration", type: "number", required: false, description: "Scroll animation duration per cycle in ms" },
  { prop: "delay", type: "number", required: false, default: "0", description: "Delay before animation starts in ms" },
  { prop: "direction", type: '"ltr"|"rtl"|"ttb"|"btt"', required: false, default: '"ltr"', description: "Scroll direction" },
  { prop: "easing", type: "string", required: false, default: '"linear"', description: "Scroll easing function" },
  { prop: "gesture", type: '"click"|"hover"|"focus"|"scroll"|"none"', required: false, description: "Gesture that triggers the animation" },
  { prop: "listen", type: "Store", required: false, description: "A store; when its state changes the animation replays" },
  { prop: "float", type: "boolean", required: false, description: "Enable continuous vertical undulation" },
  { prop: "amplitude", type: "number", required: false, default: "15", description: "Float distance in px from center" },
  { prop: "frequency", type: "number", required: false, description: "Float oscillation cycles per animation duration" },
];

const variants = ["wave", "curl", "zigzag", "dots", "tilde", "heart", "diamond", "leaf", "curve", "pulse", "loop", "scroll"] as const;
const variantColors = ["#6366f1", "#8b5cf6", "#f59e0b", "#ef4444", "#ec4899", "#14b8a6", "#f97316", "#06b6d4", "#d946ef", "#84cc16", "#3b82f6", "#6366f1"];

const notes = (
  <div className="feature-card">
    <h3 className="font-semibold mb-2">12 Built-in Variants</h3>
    <p className="text-text-secondary text-sm">
      <code className="text-accent text-xs font-mono">wave</code>,{" "}
      <code className="text-accent text-xs font-mono">curl</code>,{" "}
      <code className="text-accent text-xs font-mono">zigzag</code>,{" "}
      <code className="text-accent text-xs font-mono">dots</code>,{" "}
      <code className="text-accent text-xs font-mono">tilde</code>,{" "}
      <code className="text-accent text-xs font-mono">heart</code>,{" "}
      <code className="text-accent text-xs font-mono">diamond</code>,{" "}
      <code className="text-accent text-xs font-mono">leaf</code>,{" "}
      <code className="text-accent text-xs font-mono">curve</code>,{" "}
      <code className="text-accent text-xs font-mono">pulse</code>,{" "}
      <code className="text-accent text-xs font-mono">loop</code>,{" "}
      <code className="text-accent text-xs font-mono">scroll</code>
    </p>
  </div>
);

export function SectionDividerPage() {
  return (
    <ComponentPage
      title="SectionDivider"
      description="SVG-based decorative divider between content sections. 12 built-in visual variants with continuous scroll animation and floating undulation."
      props={props}
      notes={notes}
      example={`// Static
<SectionDivider variant="wave" color="#6366f1" height={60} />

// Animated scroll
<SectionDivider variant="wave" animate color="#6366f1" />

// Floating undulation
<SectionDivider variant="wave" float color="#6366f1" />

// Combined scroll + float
<SectionDivider variant="curl" animate float amplitude={20} frequency={4} />`}
    >
      <ExampleCard
        title="All 12 Variants"
        description="Each variant is a unique SVG path design."
        code={`<SectionDivider variant="wave" color="#6366f1" height={40} />
<SectionDivider variant="curl" color="#8b5cf6" height={40} />
<SectionDivider variant="zigzag" color="#f59e0b" height={40} />
...`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {variants.map((variant, i) => (
            <div key={variant} className="rounded-lg border border-border bg-surface-light/30 overflow-hidden text-center">
              <div className="px-3 pt-2">
                <Text text={variant} type="p" size="0.8rem" color={variantColors[i]} style={{ fontWeight: 500 }} />
              </div>
              <SectionDivider variant={variant} color={variantColors[i]} height={40} />
            </div>
          ))}
        </div>
      </ExampleCard>

      <ExampleCard
        title="Animated Scroll"
        description="Continuous horizontal scroll animation."
        code={`<SectionDivider variant="wave" animate color="#6366f1" height={60} />`}
      >
        <SectionDivider variant="wave" animate color="#6366f1" height={60} />
      </ExampleCard>

      <ExampleCard
        title="Floating Undulation"
        description="Continuous vertical bobbing animation."
        code={`<SectionDivider variant="curl" float color="#8b5cf6" height={60} />`}
      >
        <SectionDivider variant="curl" float color="#8b5cf6" height={60} />
      </ExampleCard>

      <ExampleCard
        title="Combined Scroll + Float"
        description="Both scroll and float animations together."
        code={`<SectionDivider variant="heart" animate float color="#ec4899" height={60} amplitude={20} frequency={4} />`}
      >
        <SectionDivider variant="heart" animate float color="#ec4899" height={60} amplitude={20} frequency={4} />
      </ExampleCard>
    </ComponentPage>
  );
}
