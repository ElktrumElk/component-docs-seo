"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { Navigator, Button, Text } from "elk-components";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Navigation content (render prop)" },
  { prop: "direction", type: "'horizontal'|'vertical'", required: false, default: '"horizontal"', description: "Flex direction" },
  { prop: "gap", type: "string", required: false, description: "Gap between items" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLElement>", required: false, description: "Native nav attributes" },
  { prop: "onFunc", type: "(self: _Navigator) => void", required: false, description: "Instance callback" },
];

const basicExample = `<Navigator direction="horizontal" gap="1rem" child={() => (
  <>
    <Button child={() => <Text text="Home" type="p" />} />
    <Button child={() => <Text text="About" type="p" />} />
    <Button child={() => <Text text="Contact" type="p" />} />
  </>
)} />`;

export function NavigatorPage() {
  return (
    <ComponentPage
      title="Navigator"
      description="Semantic nav element with flexbox layout for navigation bars."
      props={props}
      example={basicExample}
    >
      <ExampleCard
        title="Horizontal Nav"
        description="A horizontal navigation bar with 1rem gap between items."
        code={basicExample}
      >
        <Navigator direction="horizontal" gap="1rem" child={() => (
          <>
            <Button child={() => <Text text="Home" type="p" />} />
            <Button child={() => <Text text="About" type="p" />} />
            <Button child={() => <Text text="Contact" type="p" />} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
