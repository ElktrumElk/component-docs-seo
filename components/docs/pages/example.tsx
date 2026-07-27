"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { Example } from "elk-components";

const props = [
  { prop: "width", type: "string", required: false, description: "CSS width" },
  { prop: "height", type: "string", required: false, description: "CSS height" },
  { prop: "background", type: "string", required: false, description: "Background color" },
  { prop: "border", type: "string", required: false, description: "CSS border" },
  { prop: "borderRadius", type: "string", required: false, description: "CSS border radius" },
  { prop: "text", type: "string", required: false, default: '""', description: "HTML string" },
  { prop: "onFunc", type: "(self: _Example) => void", required: false, description: "Instance callback" },
];

const basicExample = `<Example width="100px" height="100px" background="rgba(255,255,255,0.1)" text="<b>Bold</b>" />`;

export function ExamplePage() {
  return (
    <ComponentPage
      title="Example"
      description="Lightweight placeholder span for prototyping. Renders HTML via dangerouslySetInnerHTML."
      props={props}
      example={basicExample}
    >
      <ExampleCard
        title="Basic Placeholder"
        description="A 100x100 placeholder with bold text rendered via HTML."
        code={basicExample}
      >
        <Example width="100px" height="100px" background="rgba(255,255,255,0.1)" text="<b>Bold</b>" />
      </ExampleCard>
    </ComponentPage>
  );
}
