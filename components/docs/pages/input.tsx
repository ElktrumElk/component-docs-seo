"use client";

import { Input, Icon, Icons, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "type", type: "'text'|'password'|'email'|'number'|'tel'|'url'|'search'", required: false, default: '"text"', description: "Input type" },
  { prop: "placeholder", type: "string", required: false, description: "Placeholder text" },
  { prop: "value", type: "string", required: false, description: "Default value" },
  { prop: "disabled", type: "boolean", required: false, description: "Disabled state" },
  { prop: "readOnly", type: "boolean", required: false, description: "Read-only state" },
  { prop: "prefix", type: "ElementType", required: false, description: "Element before input (icon, label)" },
  { prop: "suffix", type: "ElementType", required: false, description: "Element after input (icon, button)" },
  { prop: "width", type: "string", required: false, default: '"100%"', description: "Width" },
  { prop: "height", type: "string", required: false, default: '"2.5rem"', description: "Height" },
  { prop: "borderRadius", type: "string", required: false, default: '".5rem"', description: "Border radius" },
  { prop: "backgroundColor", type: "string", required: false, default: '"transparent"', description: "Background" },
  { prop: "color", type: "string", required: false, default: '"inherit"', description: "Text color" },
  { prop: "borderColor", type: "string", required: false, default: '"rgba(255,255,255,0.15)"', description: "Border color" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "InputHTMLAttributes<HTMLInputElement>", required: false, description: "Native input attributes" },
  { prop: "onFunc", type: "(self: _Input) => void", required: false, description: "Instance callback" },
];

export function InputPage() {
  return (
    <ComponentPage
      title="Input"
      description="Text input with optional prefix and suffix slots. Supports all standard input types."
      props={props}
      example={`<Input
  type="email"
  placeholder="you@example.com"
  borderRadius=".5rem"
  borderColor="rgba(99,102,241,0.3)"
  gest={{ onChange: (e) => console.log(e.target.value) }}
/>`}
    >
      <ExampleCard
        title="Basic Input"
        description="Simple text input with placeholder."
        code={`<Input
  type="text"
  placeholder="Type something..."
  borderRadius=".5rem"
  borderColor="rgba(99,102,241,0.3)"
/>`}
      >
        <div style={{ maxWidth: "360px" }}>
          <Input
            type="text"
            placeholder="Type something..."
            borderRadius=".5rem"
            borderColor="rgba(99,102,241,0.3)"
          />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Input with Icon"
        description="Input with a prefix icon."
        code={`<Input
  type="search"
  placeholder="Search..."
  prefix={() => <Icon icon={Icons.icon.Search} size="xs" />}
  borderRadius=".5rem"
  borderColor="rgba(99,102,241,0.3)"
/>`}
      >
        <div style={{ maxWidth: "360px" }}>
          <Input
            type="search"
            placeholder="Search..."
            prefix={() => <Icon icon={Icons.icon.Search} size="xs" color="#64748b" />}
            borderRadius=".5rem"
            borderColor="rgba(99,102,241,0.3)"
          />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Input Types"
        description="Different input types for various use cases."
        code={`<Input type="text" placeholder="Text" borderRadius=".5rem" />
<Input type="email" placeholder="Email" borderRadius=".5rem" />
<Input type="password" placeholder="Password" borderRadius=".5rem" />
<Input type="number" placeholder="Number" borderRadius=".5rem" />`}
      >
        <Stack direction="column" gap="0.75rem" child={() => (
          <>
            <div style={{ maxWidth: "360px" }}><Input type="text" placeholder="Text input" borderRadius=".5rem" borderColor="rgba(99,102,241,0.3)" /></div>
            <div style={{ maxWidth: "360px" }}><Input type="email" placeholder="Email input" borderRadius=".5rem" borderColor="rgba(99,102,241,0.3)" /></div>
            <div style={{ maxWidth: "360px" }}><Input type="password" placeholder="Password input" borderRadius=".5rem" borderColor="rgba(99,102,241,0.3)" /></div>
            <div style={{ maxWidth: "360px" }}><Input type="number" placeholder="Number input" borderRadius=".5rem" borderColor="rgba(99,102,241,0.3)" /></div>
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
