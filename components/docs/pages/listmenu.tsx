"use client";

import { ListMenu, Button, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Menu content (render prop)" },
  { prop: "gap", type: "string", required: false, default: '"0rem"', description: "Gap between items (rem/px/em)" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _ListMenu) => void", required: false, description: "Instance callback" },
];

const basicExample = `<ListMenu gap=".5rem" child={() => (
  <>
    <Button child={() => <Text text="Profile" type="p" />} />
    <Button child={() => <Text text="Settings" type="p" />} />
    <Button child={() => <Text text="Logout" type="p" />} />
  </>
)} />`;

export function ListMenuPage() {
  return (
    <ComponentPage
      title="ListMenu"
      description="Vertical menu container. Delegates to Stack with direction: column."
      props={props}
      example={basicExample}
    >
      <ExampleCard
        title="Basic ListMenu"
        description="A vertical menu with three button items."
        code={basicExample}
      >
        <ListMenu gap=".5rem" child={() => (
          <>
            <Button child={() => <Text text="Profile" type="p" />} />
            <Button child={() => <Text text="Settings" type="p" />} />
            <Button child={() => <Text text="Logout" type="p" />} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
