"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { TextButton, Text } from "elk-components";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Custom content (renders instead of text)" },
  { prop: "text", type: "string", required: false, description: "Plain text content" },
  { prop: "color", type: "string", required: false, default: '"inherit"', description: "Text color" },
  { prop: "hoverColor", type: "string", required: false, description: "Text color on hover" },
  { prop: "activeColor", type: "string", required: false, description: "Text color when active" },
  { prop: "fontSize", type: "string", required: false, description: "Font size" },
  { prop: "padding", type: "string", required: false, default: '"0"', description: "Padding" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLButtonElement>", required: false, description: "Native button attributes" },
  { prop: "onFunc", type: "(self: _TextButton) => void", required: false, description: "Instance callback" },
];

const textPropExample = `<TextButton text="Learn more" color="blue" hoverColor="darkblue" />`;

const childPropExample = `<TextButton child={() => <Text text="Cancel" type="p" />} padding="0 .5rem" />`;

export function TextButtonPage() {
  return (
    <ComponentPage
      title="TextButton"
      description="Transparent button with text content and hover/active color states."
      props={props}
      example={`${textPropExample}\n${childPropExample}`}
    >
      <ExampleCard
        title="Text Prop"
        description="Use the text prop for simple button labels."
        code={textPropExample}
      >
        <TextButton text="Learn more" color="blue" hoverColor="darkblue" />
      </ExampleCard>
      <ExampleCard
        title="Child Prop"
        description="Use the child prop for custom content."
        code={childPropExample}
      >
        <TextButton child={() => <Text text="Cancel" type="p" />} padding="0 .5rem" />
      </ExampleCard>
    </ComponentPage>
  );
}
