"use client";

import { TabView, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "tabs", type: "Array<{ id: string; label: ElementType; content: ElementType }>", required: false, description: "Tab definitions" },
  { prop: "activeTab", type: "string", required: false, description: "Controlled active tab id" },
  { prop: "defaultTab", type: "string", required: false, description: "Uncontrolled default tab id" },
  { prop: "onChange", type: "(tabId: string) => void", required: false, description: "Tab change callback" },
  { prop: "gap", type: "string", required: false, description: "Spacing between tab buttons" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _TabView) => void", required: false, description: "Instance callback" },
];

export function TabViewPage() {
  return (
    <ComponentPage
      title="TabView"
      description="Self-contained tabbed interface with tab buttons and content panel. Supports controlled and uncontrolled modes."
      props={props}
      example={`<TabView
  tabs={[
    { id: "info", label: () => <Text text="Info" type="p" />, content: () => <Text text="Info content" type="p" /> },
    { id: "settings", label: () => <Text text="Settings" type="p" />, content: () => <Text text="Settings content" type="p" /> },
  ]}
  defaultTab="info"
  onChange={(id) => console.log("Switched to", id)}
  gap="1rem"
/>`}
    >
      <ExampleCard
        title="Basic TabView"
        description="A tabbed interface with Info and Settings tabs."
        code={`<TabView
  tabs={[
    { id: "info", label: () => <Text text="Info" type="p" />, content: () => <Text text="Info content" type="p" /> },
    { id: "settings", label: () => <Text text="Settings" type="p" />, content: () => <Text text="Settings content" type="p" /> },
  ]}
  defaultTab="info"
  gap="1rem"
/>`}
      >
        <TabView
          tabs={[
            { id: "info", label: () => <Text text="Info" type="p" />, content: () => <Text text="Info content" type="p" /> },
            { id: "settings", label: () => <Text text="Settings" type="p" />, content: () => <Text text="Settings content" type="p" /> },
          ]}
          defaultTab="info"
          gap="1rem"
        />
      </ExampleCard>
    </ComponentPage>
  );
}
