"use client";

import { Divider, Text, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "direction", type: "'horizontal'|'vertical'", required: false, default: '"horizontal"', description: "Separator orientation" },
  { prop: "size", type: "'xs'|'sm'|'md'|'lg'", required: false, default: '"sm"', description: "Thickness: xs=1px, sm=2px, md=4px, lg=8px" },
  { prop: "color", type: "string", required: false, default: '"rgba(255,255,255,0.1)"', description: "Line color" },
  { prop: "margin", type: "string", required: false, description: "Margin (auto by default)" },
  { prop: "child", type: "ElementType", required: false, description: "Optional center content (e.g. 'or')" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
];

export function DividerPage() {
  return (
    <ComponentPage
      title="Divider"
      description="Horizontal or vertical separator line with customizable thickness and color."
      props={props}
      example={`<Divider direction="horizontal" size="sm" color="rgba(255,255,255,0.2)" />
<Divider direction="vertical" size="xs" />`}
    >
      <ExampleCard
        title="Sizes"
        description="Different thickness presets."
        code={`<Divider size="xs" />
<Divider size="sm" />
<Divider size="md" />
<Divider size="lg" />`}
      >
        <Stack direction="column" gap="1rem" child={() => (
          <>
            <Text text="xs (1px)" type="p" size="0.8rem" color="#94a3b8" />
            <Divider size="xs" />
            <Text text="sm (2px)" type="p" size="0.8rem" color="#94a3b8" />
            <Divider size="sm" />
            <Text text="md (4px)" type="p" size="0.8rem" color="#94a3b8" />
            <Divider size="md" />
            <Text text="lg (8px)" type="p" size="0.8rem" color="#94a3b8" />
            <Divider size="lg" />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Vertical Divider"
        description="Vertical separator for inline layouts."
        code={`<Stack direction="row" gap="1rem" align="center" child={() => (
  <>
    <Text text="Left" type="p" />
    <Divider direction="vertical" size="xs" />
    <Text text="Right" type="p" />
  </>
)}/>`}
      >
        <Stack direction="row" gap="1rem" align="center" child={() => (
          <>
            <Text text="Left" type="p" size="0.9rem" color="#e2e8f0" />
            <Divider direction="vertical" size="xs" />
            <Text text="Right" type="p" size="0.9rem" color="#e2e8f0" />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
