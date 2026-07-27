"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { GridView, Card, Text } from "elk-components";

const props = [
  { prop: "child", type: "ElementType", required: true, description: "Grid content (render prop)" },
  { prop: "templateRows", type: "string", required: false, description: "grid-template-rows" },
  { prop: "templateColumns", type: "string", required: false, default: '"1fr 1fr"', description: "grid-template-columns" },
  { prop: "autoRows", type: "string", required: false, description: "grid-auto-rows" },
  { prop: "autoColumn", type: "string", required: false, description: "grid-auto-columns" },
  { prop: "area", type: "string", required: false, description: "grid-area" },
  { prop: "autoFlow", type: "string", required: false, description: "grid-auto-flow" },
  { prop: "justifyItems", type: "string", required: false, default: '"center"', description: "justify-items" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _GridView) => void", required: false, description: "Instance callback" },
];

const basicExample = `<GridView templateColumns="repeat(3, 1fr)" autoRows="minmax(100px, auto)" child={() => (
  <>
    <Card body={() => <Text text="Cell 1" type="p" />} />
    <Card body={() => <Text text="Cell 2" type="p" />} />
    <Card body={() => <Text text="Cell 3" type="p" />} />
  </>
)} />`;

export function GridViewPage() {
  return (
    <ComponentPage
      title="GridView"
      description="CSS Grid container with configurable template and auto-placement properties."
      props={props}
      example={basicExample}
    >
      <ExampleCard
        title="Basic Grid"
        description="A 3-column grid with minimum row height."
        code={basicExample}
      >
        <GridView templateColumns="repeat(3, 1fr)" autoRows="minmax(100px, auto)" child={() => (
          <>
            <Card body={() => <Text text="Cell 1" type="p" />} />
            <Card body={() => <Text text="Cell 2" type="p" />} />
            <Card body={() => <Text text="Cell 3" type="p" />} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
