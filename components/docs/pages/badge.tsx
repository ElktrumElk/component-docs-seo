"use client";

import { Badge } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "text", type: "string", required: false, description: "Badge text (used when no child)" },
  { prop: "child", type: "ElementType", required: false, description: "Custom content slot" },
  { prop: "variant", type: "'filled'|'outlined'|'soft'", required: false, default: '"soft"', description: "Visual variant" },
  { prop: "size", type: "'xs'|'sm'|'md'|'lg'", required: false, default: '"sm"', description: "Size preset" },
  { prop: "color", type: "string", required: false, default: '"#fff"', description: "Text color" },
  { prop: "backgroundColor", type: "string", required: false, default: '"rgba(255,255,255,0.1)"', description: "Background (filled/soft)" },
  { prop: "borderColor", type: "string", required: false, description: "Border color (outlined variant)" },
  { prop: "borderRadius", type: "string", required: false, default: '"9999px"', description: "Border radius (pill by default)" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Badge) => void", required: false, description: "Instance callback" },
];

const notes = (
  <div className="feature-card">
    <h3 className="font-semibold mb-2">Variants</h3>
    <ul className="text-text-secondary text-sm space-y-1">
      <li><code className="text-accent text-xs font-mono">filled</code> &mdash; solid background</li>
      <li><code className="text-accent text-xs font-mono">outlined</code> &mdash; transparent background with border</li>
      <li><code className="text-accent text-xs font-mono">soft</code> &mdash; tinted background (default)</li>
    </ul>
  </div>
);

export function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      description="Status or label indicator with variant and size options."
      props={props}
      notes={notes}
      example={`<Badge text="Online" variant="filled" size="sm" backgroundColor="rgba(34,197,94,0.3)" />
<Badge text="Away" variant="outlined" size="sm" color="#f59e0b" borderColor="#f59e0b" />
<Badge text="Busy" variant="soft" size="sm" backgroundColor="rgba(239,68,68,0.3)" />`}
    >
      <ExampleCard
        title="Variants"
        description="Three visual variants: filled, outlined, and soft."
        code={`<Badge text="Filled" variant="filled" size="sm" backgroundColor="rgba(99,102,241,0.3)" />
<Badge text="Outlined" variant="outlined" size="sm" color="#6366f1" borderColor="#6366f1" />
<Badge text="Soft" variant="soft" size="sm" backgroundColor="rgba(99,102,241,0.3)" />`}
      >
        <div className="flex gap-3 items-center">
          <Badge text="Filled" variant="filled" size="sm" backgroundColor="rgba(99,102,241,0.3)" />
          <Badge text="Outlined" variant="outlined" size="sm" color="#6366f1" borderColor="#6366f1" />
          <Badge text="Soft" variant="soft" size="sm" backgroundColor="rgba(99,102,241,0.3)" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Sizes"
        description="Four size presets from xs to lg."
        code={`<Badge text="xs" size="xs" />
<Badge text="sm" size="sm" />
<Badge text="md" size="md" />
<Badge text="lg" size="lg" />`}
      >
        <div className="flex gap-3 items-center">
          <Badge text="xs" size="xs" />
          <Badge text="sm" size="sm" />
          <Badge text="md" size="md" />
          <Badge text="lg" size="lg" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Status Badges"
        description="Common status indicator patterns."
        code={`<Badge text="Online" size="sm" color="#fff" backgroundColor="rgba(34,197,94,0.3)" />
<Badge text="Away" size="sm" color="#fff" backgroundColor="rgba(245,158,11,0.3)" />
<Badge text="Busy" size="sm" color="#fff" backgroundColor="rgba(239,68,68,0.3)" />
<Badge text="Offline" size="sm" color="#fff" backgroundColor="rgba(100,116,139,0.3)" />`}
      >
        <div className="flex gap-3 items-center">
          <Badge text="Online" size="sm" color="#fff" backgroundColor="rgba(34,197,94,0.3)" />
          <Badge text="Away" size="sm" color="#fff" backgroundColor="rgba(245,158,11,0.3)" />
          <Badge text="Busy" size="sm" color="#fff" backgroundColor="rgba(239,68,68,0.3)" />
          <Badge text="Offline" size="sm" color="#fff" backgroundColor="rgba(100,116,139,0.3)" />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
