"use client";

import { Card, Text, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "header", type: "ElementType", required: false, description: "Header slot (separated by border)" },
  { prop: "body", type: "ElementType", required: false, description: "Body slot" },
  { prop: "footer", type: "ElementType", required: false, description: "Footer slot (separated by border)" },
  { prop: "padding", type: "'none'|'sm'|'md'|'lg'", required: false, default: '"md"', description: "Padding preset" },
  { prop: "radius", type: "'none'|'sm'|'md'|'lg'|'xl'", required: false, default: '"md"', description: "Border radius preset" },
  { prop: "backgroundColor", type: "string", required: false, default: '"rgba(255,255,255,0.05)"', description: "Background" },
  { prop: "borderColor", type: "string", required: false, default: '"rgba(255,255,255,0.08)"', description: "Border color" },
  { prop: "width", type: "string", required: false, description: "Width" },
  { prop: "height", type: "string", required: false, description: "Height" },
  { prop: "shadow", type: "boolean", required: false, description: "Add drop shadow" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Card) => void", required: false, description: "Instance callback" },
];

export function CardPage() {
  return (
    <ComponentPage
      title="Card"
      description="Content container with header, body, and footer sections. Supports padding presets, border radius, and shadow."
      props={props}
      example={`<Card
  padding="md"
  radius="lg"
  shadow
  header={() => <Text text="Title" type="h3" size="1.1rem" />}
  body={() => <Text text="Content goes here" type="p" size="0.9rem" color="#94a3b8" />}
  footer={() => <Text text="Action" type="p" size="0.85rem" />}
/>`}
    >
      <ExampleCard
        title="Basic Card"
        description="Simple card with header, body, and footer."
        code={`<Card
  padding="md"
  radius="lg"
  header={() => <Text text="Card Title" type="h3" size="1.1rem" />}
  body={() => <Text text="This is the card content." type="p" size="0.9rem" color="#94a3b8" />}
  footer={() => <Text text="Footer action" type="p" size="0.85rem" color="#64748b" />}
/>`}
      >
        <div style={{ maxWidth: "360px" }}>
          <Card
            padding="md"
            radius="lg"
            header={() => <Text text="Card Title" type="h3" size="1.1rem" color="#fff" />}
            body={() => <Text text="This is the card content with some description text." type="p" size="0.9rem" color="#94a3b8" />}
            footer={() => <Text text="Footer action" type="p" size="0.85rem" color="#64748b" />}
          />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Card with Shadow"
        description="Card with drop shadow for depth."
        code={`<Card
  padding="lg"
  radius="xl"
  shadow
  body={() => (
    <Stack direction="column" gap="0.5rem" child={() => (
      <>
        <Text text="Shadow Card" type="h3" size="1.1rem" />
        <Text text="With extra padding and rounded corners." type="p" size="0.9rem" color="#94a3b8" />
      </>
    )} />
  )}
/>`}
      >
        <div style={{ maxWidth: "360px" }}>
          <Card
            padding="lg"
            radius="xl"
            shadow
            body={() => (
              <Stack direction="column" gap="0.5rem" child={() => (
                <>
                  <Text text="Shadow Card" type="h3" size="1.1rem" color="#fff" />
                  <Text text="With extra padding and rounded corners." type="p" size="0.9rem" color="#94a3b8" />
                </>
              )} />
            )}
          />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Custom Styled Card"
        description="Card with custom colors and border."
        code={`<Card
  padding="md"
  radius="lg"
  borderColor="rgba(99,102,241,0.3)"
  backgroundColor="rgba(99,102,241,0.05)"
  body={() => (
    <Text text="Custom styled card" type="p" size="0.9rem" />
  )}
/>`}
      >
        <div className="flex gap-4">
          <div style={{ maxWidth: "280px" }}>
            <Card
              padding="md"
              radius="lg"
              borderColor="rgba(99,102,241,0.3)"
              backgroundColor="rgba(99,102,241,0.05)"
              body={() => <Text text="Indigo card" type="p" size="0.9rem" color="#e2e8f0" />}
            />
          </div>
          <div style={{ maxWidth: "280px" }}>
            <Card
              padding="md"
              radius="lg"
              borderColor="rgba(139,92,246,0.3)"
              backgroundColor="rgba(139,92,246,0.05)"
              body={() => <Text text="Violet card" type="p" size="0.9rem" color="#e2e8f0" />}
            />
          </div>
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
