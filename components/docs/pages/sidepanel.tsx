"use client";

import { useState } from "react";
import { SidePanel, Button, Stack, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Panel content" },
  { prop: "side", type: "'left'|'right'", required: false, default: '"left"', description: "Which edge to anchor to" },
  { prop: "width", type: "string", required: false, default: '"280px"', description: "Panel width" },
  { prop: "isOpen", type: "boolean", required: false, description: "Controls visibility" },
  { prop: "onClose", type: "() => void", required: false, description: "Close callback (backdrop click)" },
  { prop: "backgroundColor", type: "string", required: false, default: '"rgba(255,255,255,0.05)"', description: "Panel background" },
  { prop: "padding", type: "string", required: false, default: '"1rem"', description: "Panel padding" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLElement>", required: false, description: "Native aside attributes" },
  { prop: "onFunc", type: "(self: _SidePanel) => void", required: false, description: "Instance callback" },
];

const exampleCode = `const [open, setOpen] = useState(false);

<SidePanel
  isOpen={open}
  side="right"
  onClose={() => setOpen(false)}
  child={() => (
    <Stack direction="column" gap="1rem" child={() => (
      <>
        <Text text="Menu" type="h2" />
        <Button child={() => <Text text="Settings" type="p" />} />
        <Button child={() => <Text text="Help" type="p" />} />
      </>
    )} />
  )}
/>`;

export function SidePanelPage() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      title="SidePanel"
      description="Fixed-position slide-in aside panel anchored to the left or right edge. Renders nothing when closed."
      props={props}
      example={exampleCode}
    >
      <ExampleCard
        title="Basic SidePanel"
        description="A right-anchored side panel with menu items."
        code={exampleCode}
      >
        <Button child={() => <Text text="Open Panel" type="p" />} gest={{ onClick: () => setOpen(true) }} />
        <SidePanel
          isOpen={open}
          side="right"
          onClose={() => setOpen(false)}
          child={() => (
            <Stack direction="column" gap="1rem" child={() => (
              <>
                <Text text="Menu" type="h2" />
                <Button child={() => <Text text="Settings" type="p" />} />
                <Button child={() => <Text text="Help" type="p" />} />
              </>
            )} />
          )}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
