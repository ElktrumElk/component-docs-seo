"use client";

import { Icon, Icons, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "icon", type: "ElementType", required: true, description: "SVG icon component from Icons.icon" },
  { prop: "size", type: "'xs'|'sm'|'md'|'lg'|'xl' | number", required: false, default: '"md"', description: "Size preset or raw number" },
  { prop: "color", type: "string", required: false, description: "Icon color" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _Icon) => void", required: false, description: "Instance callback" },
];

export function IconPage() {
  return (
    <ComponentPage
      title="Icon"
      description="Wraps any SVG icon component, forwarding size and color props. Pass the component reference directly so props forward correctly."
      props={props}
      example={`<Icon icon={Icons.icon.Lock} size="lg" color="white" />
<Icon icon={Icons.icon.Search} size={40} />
<Icon icon={Icons.icon.Heart} size="sm" color="#ef4444" />`}
    >
      <ExampleCard
        title="Sizes"
        description="Different size presets from xs to xl."
        code={`<Icon icon={Icons.icon.Zap} size="xs" />
<Icon icon={Icons.icon.Zap} size="sm" />
<Icon icon={Icons.icon.Zap} size="md" />
<Icon icon={Icons.icon.Zap} size="lg" />
<Icon icon={Icons.icon.Zap} size="xl" />`}
      >
        <Stack direction="row" gap="1.5rem" align="center" child={() => (
          <>
            <div className="flex flex-col items-center gap-1">
              <Icon icon={Icons.icon.Zap} size="xs" color="#6366f1" />
              <span className="text-[10px] text-text-muted">xs</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon icon={Icons.icon.Zap} size="sm" color="#6366f1" />
              <span className="text-[10px] text-text-muted">sm</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon icon={Icons.icon.Zap} size="md" color="#6366f1" />
              <span className="text-[10px] text-text-muted">md</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon icon={Icons.icon.Zap} size="lg" color="#6366f1" />
              <span className="text-[10px] text-text-muted">lg</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon icon={Icons.icon.Zap} size="xl" color="#6366f1" />
              <span className="text-[10px] text-text-muted">xl</span>
            </div>
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Colored Icons"
        description="Icons with different colors."
        code={`<Icon icon={Icons.icon.Heart} size="lg" color="#ef4444" />
<Icon icon={Icons.icon.Star} size="lg" color="#f59e0b" />
<Icon icon={Icons.icon.Check} size="lg" color="#22c55e" />
<Icon icon={Icons.icon.Lock} size="lg" color="#6366f1" />`}
      >
        <Stack direction="row" gap="1.5rem" align="center" child={() => (
          <>
            <Icon icon={Icons.icon.Heart} size="lg" color="#ef4444" />
            <Icon icon={Icons.icon.Star} size="lg" color="#f59e0b" />
            <Icon icon={Icons.icon.Check} size="lg" color="#22c55e" />
            <Icon icon={Icons.icon.Lock} size="lg" color="#6366f1" />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
