"use client";

import { PageScrollView, Center, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Single child (non-section mode)" },
  { prop: "sections", type: "Array<{ id: string; child: ElementType }>", required: false, description: "Snap-scroll sections" },
  { prop: "activeSection", type: "string", required: false, description: "Section ID to scroll to programmatically" },
  { prop: "onSectionChange", type: "(sectionId: string) => void", required: false, description: "Callback when visible section changes" },
  { prop: "width", type: "string", required: false, default: '"100%"', description: "Width" },
  { prop: "height", type: "string", required: false, default: '"100vh"', description: "Height" },
  { prop: "snap", type: "boolean", required: false, default: "true", description: "Enable vertical snap scrolling" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _PageScrollView) => void", required: false, description: "Instance callback" },
];

export function PageScrollViewPage() {
  return (
    <ComponentPage
      title="PageScrollView"
      description="Full-height scroll container with snap-scrolling sections and IntersectionObserver-based section tracking."
      props={props}
      example={`<PageScrollView
  sections={[
    { id: "hero", child: () => <Center child={() => <Text text="Welcome" type="h1" />} /> },
    { id: "features", child: () => <Center child={() => <Text text="Features" type="h1" />} /> },
    { id: "pricing", child: () => <Center child={() => <Text text="Pricing" type="h1" />} /> },
  ]}
  onSectionChange={(id) => console.log("Current section:", id)}
/>`}
    >
      <ExampleCard
        title="Sectioned PageScroll"
        description="A scrollable container with three snap-scroll sections."
        code={`<PageScrollView
  height="300px"
  sections={[
    { id: "hero", child: () => <Center child={() => <Text text="Welcome" type="h1" />} /> },
    { id: "features", child: () => <Center child={() => <Text text="Features" type="h1" />} /> },
    { id: "pricing", child: () => <Center child={() => <Text text="Pricing" type="h1" />} /> },
  ]}
  onSectionChange={(id) => console.log("Current section:", id)}
/>`}
      >
        <PageScrollView
          height="300px"
          sections={[
            { id: "hero", child: () => <Center child={() => <Text text="Welcome" type="h1" />} /> },
            { id: "features", child: () => <Center child={() => <Text text="Features" type="h1" />} /> },
            { id: "pricing", child: () => <Center child={() => <Text text="Pricing" type="h1" />} /> },
          ]}
          onSectionChange={(id) => console.log("Current section:", id)}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
