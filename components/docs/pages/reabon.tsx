"use client";

import { useState } from "react";
import { Reabon, Button, ListMenu, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Dropdown content" },
  { prop: "trigger", type: "ElementType", required: false, description: "Trigger element" },
  { prop: "isOpen", type: "boolean", required: false, description: "Controlled open state" },
  { prop: "onClose", type: "() => void", required: false, description: "Close callback (outside click)" },
  { prop: "width", type: "string", required: false, default: '"200px"', description: "Dropdown width" },
  { prop: "backgroundColor", type: "string", required: false, default: '"rgba(255,255,255,0.05)"', description: "Dropdown background" },
  { prop: "borderRadius", type: "string", required: false, default: '".5rem"', description: "Dropdown border radius" },
  { prop: "padding", type: "string", required: false, default: '".25rem 0"', description: "Dropdown padding" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Reabon) => void", required: false, description: "Instance callback" },
];

const exampleCode = `const [open, setOpen] = useState(false);

<Reabon
  isOpen={open}
  onClose={() => setOpen(false)}
  trigger={() => <Button child={() => <Text text="Menu" type="p" />} />}
  width="180px"
  child={() => (
    <ListMenu gap="0rem" child={() => (
      <>
        <Button child={() => <Text text="Edit" type="p" />} />
        <Button child={() => <Text text="Delete" type="p" />} />
      </>
    )} />
  )}
/>`;

export function ReabonPage() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      title="Reabon"
      description="Dropdown/popover component positioned absolutely below a trigger element. Auto-closes on outside click."
      props={props}
      example={exampleCode}
    >
      <ExampleCard
        title="Basic Reabon"
        description="A dropdown menu triggered by a button, with edit and delete options."
        code={exampleCode}
      >
        <Reabon
          isOpen={open}
          onClose={() => setOpen(false)}
          trigger={() => <Button child={() => <Text text="Menu" type="p" />} />}
          width="180px"
          child={() => (
            <ListMenu gap="0rem" child={() => (
              <>
                <Button child={() => <Text text="Edit" type="p" />} />
                <Button child={() => <Text text="Delete" type="p" />} />
              </>
            )} />
          )}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
