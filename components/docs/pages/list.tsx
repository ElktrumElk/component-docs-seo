"use client";

import { List, ListView, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "List item content" },
  { prop: "padding", type: "string", required: false, description: "Padding" },
  { prop: "margin", type: "string", required: false, description: "Margin" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLLIElement>", required: false, description: "Native li attributes" },
  { prop: "onFunc", type: "(self: _List) => void", required: false, description: "Instance callback" },
];

export function ListPage() {
  return (
    <ComponentPage
      title="List"
      description="Single li list item element for use inside ListView."
      props={props}
      example={`<ListView child={() => (
  <>
    <List child={() => <Text text="First item" type="p" />} />
    <List child={() => <Text text="Second item" type="p" />} />
  </>
)} />`}
    >
      <ExampleCard
        title="Basic List"
        description="Two list items inside a ListView container."
        code={`<ListView child={() => (
  <>
    <List child={() => <Text text="First item" type="p" />} />
    <List child={() => <Text text="Second item" type="p" />} />
  </>
)} />`}
      >
        <ListView child={() => (
          <>
            <List child={() => <Text text="First item" type="p" />} />
            <List child={() => <Text text="Second item" type="p" />} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
