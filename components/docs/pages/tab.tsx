"use client";

import { Tab, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "label", type: "ElementType", required: true, description: "Tab label" },
  { prop: "isActive", type: "boolean", required: false, default: "false", description: "Whether tab is selected" },
  { prop: "onClick", type: "() => void", required: false, description: "Click handler" },
  { prop: "activeColor", type: "string", required: false, default: '"#fff"', description: "Text color when active" },
  { prop: "inactiveColor", type: "string", required: false, default: '"rgba(255,255,255,0.5)"', description: "Text color when inactive" },
  { prop: "padding", type: "string", required: false, default: '".5rem 1rem"', description: "Button padding" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLButtonElement>", required: false, description: "Native button attributes" },
  { prop: "onFunc", type: "(self: _Tab) => void", required: false, description: "Instance callback" },
];

export function TabPage() {
  return (
    <ComponentPage
      title="Tab"
      description="Transparent button styled as a tab indicator. Color toggles based on isActive."
      props={props}
      example={`<Tab
  label={() => <Text text="Tab 1" type="p" />}
  isActive={true}
  onClick={() => {}}
/>`}
    >
      <ExampleCard
        title="Active and Inactive Tabs"
        description="Tabs in active and inactive states to show color toggling."
        code={`<Tab
  label={() => <Text text="Tab 1" type="p" />}
  isActive={true}
  onClick={() => {}}
/>
<Tab
  label={() => <Text text="Tab 2" type="p" />}
  isActive={false}
  onClick={() => {}}
/>`}
      >
        <div style={{ display: "flex", gap: "0.5rem", background: "rgba(0,0,0,0.3)", padding: "0.5rem", borderRadius: "8px" }}>
          <Tab
            label={() => <Text text="Tab 1" type="p" />}
            isActive={true}
            onClick={() => {}}
          />
          <Tab
            label={() => <Text text="Tab 2" type="p" />}
            isActive={false}
            onClick={() => {}}
          />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
