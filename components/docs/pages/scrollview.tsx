"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { ScrollView, Stack, Text } from "elk-components";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Content slot (render prop)" },
  { prop: "direction", type: "'vertical'|'horizontal'|'both'", required: false, default: '"vertical"', description: "Scroll direction" },
  { prop: "width", type: "string", required: false, default: '"100%"', description: "Width" },
  { prop: "height", type: "string", required: false, default: '"100%"', description: "Height" },
  { prop: "padding", type: "string", required: false, description: "Inner padding" },
  { prop: "hideScrollbar", type: "boolean", required: false, description: "Hide scrollbar via CSS" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _ScrollView) => void", required: false, description: "Instance callback" },
];

const basicExample = `<ScrollView direction="vertical" height="400px" hideScrollbar child={() => (
  <Stack direction="column" gap="1rem" child={() => (
    <>
      <Text text="Item 1" type="p" />
      <Text text="Item 2" type="p" />
    </>
  )} />
)} />`;

export function ScrollViewPage() {
  return (
    <ComponentPage
      title="ScrollView"
      description="Scrollable container with configurable direction and optional hidden scrollbar."
      props={props}
      example={basicExample}
    >
      <ExampleCard
        title="Vertical Scroll"
        description="A vertically scrollable container with hidden scrollbar."
        code={basicExample}
      >
        <ScrollView direction="vertical" height="400px" hideScrollbar child={() => (
          <Stack direction="column" gap="1rem" child={() => (
            <>
              <Text text="Item 1" type="p" />
              <Text text="Item 2" type="p" />
            </>
          )} />
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
