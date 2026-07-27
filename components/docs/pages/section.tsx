"use client";

import { Section, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "title", type: "ElementType", required: true, description: "Section heading" },
  { prop: "child", type: "ElementType", required: false, description: "Body content" },
  { prop: "padding", type: "string", required: false, description: "Inner padding" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLElement>", required: false, description: "Native section attributes" },
  { prop: "onFunc", type: "(self: _Section) => void", required: false, description: "Instance callback" },
];

export function SectionPage() {
  return (
    <ComponentPage
      title="Section"
      description="Semantic section element with a required title and optional body content."
      props={props}
      example={`<Section
  title={() => <Text text="Settings" type="h2" />}
  child={() => <Text text="Configure your preferences here" type="p" />}
/>`}
    >
      <ExampleCard
        title="Basic Section"
        description="A section with a heading and body text."
      >
        <Section
          title={() => <Text text="Settings" type="h2" />}
          child={() => <Text text="Configure your preferences here" type="p" />}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
