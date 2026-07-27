"use client";

import { Panel, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Content slot (render prop)" },
  { prop: "width", type: "string", required: false, default: '"100%"', description: "Width" },
  { prop: "height", type: "string", required: false, description: "Height" },
  { prop: "padding", type: "string", required: false, description: "Inner padding" },
  { prop: "margin", type: "string", required: false, description: "Outer margin" },
  { prop: "color", type: "string", required: false, description: "Background color" },
  { prop: "border", type: "string", required: false, description: "Border style" },
  { prop: "borderRadius", type: "string", required: false, description: "Border radius" },
  { prop: "overflow", type: "'visible'|'hidden'|'scroll'|'auto'", required: false, description: "Overflow behavior" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Panel) => void", required: false, description: "Instance callback" },
];

export function PanelPage() {
  return (
    <ComponentPage
      title="Panel"
      description="Styled container div with layout, color, and border properties."
      props={props}
      example={`<Panel width="300px" padding="1rem" border="1px solid rgba(255,255,255,0.1)" borderRadius=".5rem"
  child={() => <Text text="Panel content" type="p" />} />`}
    >
      <ExampleCard
        title="Bordered Panel"
        description="A panel with border, padding, and border radius."
      >
        <Panel
          width="300px"
          padding="1rem"
          border="1px solid rgba(255,255,255,0.1)"
          borderRadius=".5rem"
          child={() => <Text text="Panel content" type="p" />}
        />
      </ExampleCard>
      <ExampleCard
        title="Colored Panel"
        description="A panel with a background color."
      >
        <Panel
          width="300px"
          padding="1rem"
          color="rgba(255,255,255,0.05)"
          borderRadius=".5rem"
          child={() => <Text text="Colored panel content" type="p" />}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
