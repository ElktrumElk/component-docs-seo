"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { Padding, Text } from "elk-components";

const props = [
  { prop: "child", type: "ElementType", required: true, description: "Content slot (render prop)" },
  { prop: "left", type: "string", required: false, description: "Left padding" },
  { prop: "right", type: "string", required: false, description: "Right padding" },
  { prop: "top", type: "string", required: false, description: "Top padding" },
  { prop: "bottom", type: "string", required: false, description: "Bottom padding" },
  { prop: "inline", type: "string", required: false, description: "Logical inline (horizontal) padding" },
  { prop: "block", type: "string", required: false, description: "Logical block (vertical) padding" },
  { prop: "blockStart", type: "string", required: false, description: "Logical block-start padding" },
  { prop: "blockEnd", type: "string", required: false, description: "Logical block-end padding" },
  { prop: "padding", type: "string", required: false, default: '"1rem"', description: "Shorthand padding (overrides all sides)" },
];

const shorthandExample = `<Padding padding="2rem" child={() => <Text text="Padded content" type="p" />} />`;

const logicalExample = `<Padding inline="1.5rem" block=".5rem" child={() => <Text text="Logically padded" type="p" />} />`;

export function PaddingPage() {
  return (
    <ComponentPage
      title="Padding"
      description="Wrapper div applying configurable padding using both physical and logical CSS properties."
      props={props}
      example={shorthandExample}
    >
      <ExampleCard
        title="Shorthand Padding"
        description="Apply uniform padding with the shorthand prop."
        code={shorthandExample}
      >
        <Padding padding="2rem" child={() => <Text text="Padded content" type="p" />} />
      </ExampleCard>
      <ExampleCard
        title="Logical Padding"
        description="Use logical properties for inline and block padding."
        code={logicalExample}
      >
        <Padding inline="1.5rem" block=".5rem" child={() => <Text text="Logically padded" type="p" />} />
      </ExampleCard>
    </ComponentPage>
  );
}
