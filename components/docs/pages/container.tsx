"use client";

import { Container, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Content slot" },
  { prop: "width", type: "string", required: false, default: '"auto"', description: "Width" },
  { prop: "height", type: "string", required: false, default: '"auto"', description: "Height" },
  { prop: "padding", type: "string", required: false, default: '"1rem"', description: "Padding" },
  { prop: "color", type: "string", required: false, description: "Background color" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Container) => void", required: false, description: "Instance callback" },
];

export function ContainerPage() {
  return (
    <ComponentPage
      title="Container"
      description="Generic div wrapper with layout props. Useful for creating styled boxes and layout sections."
      props={props}
      example={`<Container
  color="rgba(99,102,241,0.1)"
  width="200px"
  height="100px"
  padding="1rem"
  child={() => <Text text="Box" type="p" />}
/>`}
    >
      <ExampleCard
        title="Basic Container"
        description="Simple container with background color and padding."
        code={`<Container
  color="rgba(99,102,241,0.1)"
  width="200px"
  height="100px"
  padding="1rem"
  child={() => <Text text="Hello" type="p" size="0.9rem" />}
/>`}
      >
        <Container
          color="rgba(99,102,241,0.1)"
          width="200px"
          height="100px"
          padding="1rem"
          child={() => <Text text="Hello" type="p" size="0.9rem" color="#e2e8f0" />}
        />
      </ExampleCard>

      <ExampleCard
        title="Sized Containers"
        description="Different sizes and colors."
        code={`<Container color="rgba(99,102,241,0.1)" width="80px" height="80px" />
<Container color="rgba(139,92,246,0.1)" width="120px" height="80px" />
<Container color="rgba(236,72,153,0.1)" width="160px" height="80px" />`}
      >
        <div className="flex gap-3 items-end">
          <Container color="rgba(99,102,241,0.1)" width="80px" height="80px" />
          <Container color="rgba(139,92,246,0.1)" width="120px" height="80px" />
          <Container color="rgba(236,72,153,0.1)" width="160px" height="80px" />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
