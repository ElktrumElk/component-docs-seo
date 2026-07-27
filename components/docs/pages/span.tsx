"use client";

import { Span, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Content slot (render prop)" },
  { prop: "color", type: "string", required: false, description: "Text color" },
  { prop: "fontSize", type: "string", required: false, description: "Font size" },
  { prop: "fontWeight", type: "string | number", required: false, description: "Font weight" },
  { prop: "padding", type: "string", required: false, description: "Padding" },
  { prop: "margin", type: "string", required: false, description: "Margin" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLSpanElement>", required: false, description: "Native span attributes" },
  { prop: "onFunc", type: "(self: _Span) => void", required: false, description: "Instance callback" },
];

export function SpanPage() {
  return (
    <ComponentPage
      title="Span"
      description="Inline span element with shorthand style props for color, font, and spacing."
      props={props}
      example={`<Span color="red" fontSize="1.2rem" fontWeight="bold" child={() => <Text text="inline styled text" type="p" />} />`}
    >
      <ExampleCard
        title="Styled Span"
        description="An inline span with color, font size, and font weight."
      >
        <Span color="#ef4444" fontSize="1.2rem" fontWeight="bold" child={() => <Text text="inline styled text" type="p" />} />
      </ExampleCard>
      <ExampleCard
        title="Multiple Spans"
        description="Several styled spans in a row."
      >
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Span color="#ef4444" fontWeight="bold" child={() => <Text text="Red Bold" type="p" />} />
          <Span color="#22c55e" fontSize="1.2rem" child={() => <Text text="Green Large" type="p" />} />
          <Span color="#3b82f6" fontSize="0.9rem" fontWeight="600" child={() => <Text text="Blue Small" type="p" />} />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
