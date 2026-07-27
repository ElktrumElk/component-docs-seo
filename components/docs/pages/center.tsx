"use client";

import { Center, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: true, description: "Content to center (render prop)" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
];

export function CenterPage() {
  return (
    <ComponentPage
      title="Center"
      description="Centers content both vertically and horizontally using fixed flex styles. Always fills parent width/height."
      props={props}
      example={`<Center child={() => <Text text="Centered" type="h2" size="1.5rem" />} />`}
    >
      <ExampleCard
        title="Basic Centering"
        description="Center content within a container."
        code={`<Center child={() => (
  <div style={{ padding: "1rem 2rem", background: "rgba(99,102,241,0.1)", borderRadius: "8px", border: "1px solid rgba(99,102,241,0.2)" }}>
    <Text text="Centered Content" type="h2" size="1.5rem" />
  </div>
)} />`}
      >
        <Center
          child={() => (
            <div style={{ padding: "1rem 2rem", background: "rgba(99,102,241,0.1)", borderRadius: "8px", border: "1px solid rgba(99,102,241,0.2)" }}>
              <Text text="Centered Content" type="h2" size="1.5rem" />
            </div>
          )}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
