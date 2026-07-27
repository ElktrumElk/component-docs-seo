"use client";

import { Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "text", type: "string", required: true, description: "Text content to display" },
  { prop: "type", type: "'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'pre'", required: true, description: "HTML tag to render" },
  { prop: "size", type: "string", required: false, description: 'Font size (e.g. "1rem", "14px")' },
  { prop: "color", type: "string", required: false, description: "Text color" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
];

export function TextPage() {
  return (
    <ComponentPage
      title="Text"
      description="Polymorphic text element. Renders any heading or paragraph tag with customizable size, color, and styling."
      props={props}
      example={`<Text text="Heading" type="h1" size="2rem" color="#fff" />
<Text text="Subheading" type="h2" size="1.5rem" color="#94a3b8" />
<Text text="Body text" type="p" size="1rem" style={{ color: "grey" }} />`}
    >
      <ExampleCard
        title="Heading Sizes"
        description="Different heading levels with custom sizes."
        code={`<Text text="Title" type="h1" size="2rem" color="#fff" />
<Text text="Subtitle" type="h2" size="1.5rem" color="#94a3b8" />
<Text text="Section" type="h3" size="1.2rem" color="#94a3b8" />`}
      >
        <div className="flex flex-col gap-2">
          <Text text="Title (h1)" type="h1" size="2rem" color="#fff" />
          <Text text="Subtitle (h2)" type="h2" size="1.5rem" color="#94a3b8" />
          <Text text="Section (h3)" type="h3" size="1.2rem" color="#94a3b8" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Body Text"
        description="Paragraph text with custom styling."
        code={`<Text
  text="This is a paragraph with custom color and line height."
  type="p"
  size="1rem"
  color="#94a3b8"
  style={{ lineHeight: 1.6 }}
/>`}
      >
        <Text
          text="This is a paragraph with custom color and line height. The Text component makes it easy to create consistent typography throughout your application."
          type="p"
          size="1rem"
          color="#94a3b8"
          style={{ lineHeight: 1.6 }}
        />
      </ExampleCard>

      <ExampleCard
        title="Colored Text"
        description="Text with different colors for emphasis."
        code={`<Text text="Default" type="p" size="1rem" />
<Text text="Primary" type="p" size="1rem" color="#6366f1" />
<Text text="Accent" type="p" size="1rem" color="#8b5cf6" />
<Text text="Muted" type="p" size="1rem" color="#64748b" />`}
      >
        <div className="flex flex-col gap-1">
          <Text text="Default text" type="p" size="1rem" />
          <Text text="Primary color" type="p" size="1rem" color="#6366f1" />
          <Text text="Accent color" type="p" size="1rem" color="#8b5cf6" />
          <Text text="Muted text" type="p" size="1rem" color="#64748b" />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
