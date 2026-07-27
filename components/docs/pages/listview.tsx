"use client";

import { ListView, List, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "List items content" },
  { prop: "padding", type: "string", required: false, description: "Padding" },
  { prop: "margin", type: "string", required: false, description: "Margin" },
  { prop: "gap", type: "string", required: false, description: "Gap between items (typed: rem/px/em)" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _ListView) => void", required: false, description: "Instance callback" },
];

export function ListViewPage() {
  return (
    <ComponentPage
      title="ListView"
      description="Unordered ul list container with listStyle: none. Use with List children."
      props={props}
      example={`<ListView gap=".5rem" child={() => (
  <>
    <List child={() => <Text text="Item A" type="p" />} />
    <List child={() => <Text text="Item B" type="p" />} />
  </>
)} />`}
    >
      <ExampleCard
        title="Basic ListView"
        description="A list view with two items and custom gap spacing."
        code={`<ListView gap=".5rem" child={() => (
  <>
    <List child={() => <Text text="Item A" type="p" />} />
    <List child={() => <Text text="Item B" type="p" />} />
  </>
)} />`}
      >
        <ListView gap=".5rem" child={() => (
          <>
            <List child={() => <Text text="Item A" type="p" />} />
            <List child={() => <Text text="Item B" type="p" />} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
