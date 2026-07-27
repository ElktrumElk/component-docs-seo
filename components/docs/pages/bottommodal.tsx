"use client";

import { useState } from "react";
import { BottomModal, Button, Stack, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Modal body content" },
  { prop: "title", type: "ElementType", required: false, description: "Modal title" },
  { prop: "isOpen", type: "boolean", required: false, description: "Controls visibility" },
  { prop: "onClose", type: "() => void", required: false, description: "Close callback" },
  { prop: "height", type: "string", required: false, default: '"80vh"', description: "Max panel height" },
  { prop: "padding", type: "string", required: false, default: '"1rem"', description: "Panel padding" },
  { prop: "showHandle", type: "boolean", required: false, default: "true", description: "Show drag handle indicator" },
  { prop: "backgroundColor", type: "string", required: false, default: '"rgba(0,0,0,0.8)"', description: "Backdrop color" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _BottomModal) => void", required: false, description: "Instance callback" },
];

const exampleCode = `const [open, setOpen] = useState(false);

<BottomModal
  isOpen={open}
  onClose={() => setOpen(false)}
  title={() => <Text text="Select Option" type="h3" />}
  height="60vh"
  child={() => (
    <Stack direction="column" gap=".5rem" child={() => (
      <>
        <Button child={() => <Text text="Option A" type="p" />} />
        <Button child={() => <Text text="Option B" type="p" />} />
      </>
    )} />
  )}
/>`;

export function BottomModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      title="BottomModal"
      description="Full-screen overlay with a bottom-anchored panel that slides up. Renders nothing when closed."
      props={props}
      example={exampleCode}
    >
      <ExampleCard
        title="Basic BottomModal"
        description="A bottom-anchored modal with title and two option buttons."
        code={exampleCode}
      >
        <Button child={() => <Text text="Open Modal" type="p" />} gest={{ onClick: () => setOpen(true) }} />
        <BottomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={() => <Text text="Select Option" type="h3" />}
          height="60vh"
          child={() => (
            <Stack direction="column" gap=".5rem" child={() => (
              <>
                <Button child={() => <Text text="Option A" type="p" />} />
                <Button child={() => <Text text="Option B" type="p" />} />
              </>
            )} />
          )}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
