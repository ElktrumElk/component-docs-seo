"use client";

import { IconNetwork, Icon, Icons } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "src", type: "string", required: true, description: "Image URL" },
  { prop: "alt", type: "string", required: false, default: '""', description: "Alt text" },
  { prop: "size", type: "'xs'|'sm'|'md'|'lg'|'xl' | string", required: false, default: '"md"', description: "Size preset or custom string" },
  { prop: "borderRadius", type: "string", required: false, default: '"50%"', description: "Border radius" },
  { prop: "backgroundColor", type: "string", required: false, default: '"transparent"', description: "Background" },
  { prop: "fallback", type: "ElementType", required: false, description: "Component shown on error" },
  { prop: "loading", type: "'lazy'|'eager'", required: false, default: '"lazy"', description: "Loading strategy" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "onFunc", type: "(self: _IconNetwork) => void", required: false, description: "Instance callback" },
];

const exampleCode = `<IconNetwork src="https://cdn.example.com/logo.png" size="lg" />
<IconNetwork src="/favicon.ico" size="16px" borderRadius=".25rem" />
<IconNetwork src="https://brand.com/icon.svg" fallback={() => <Icon icon={Icons.icon.Globe} />} />`;

export function IconNetworkPage() {
  return (
    <ComponentPage
      title="IconNetwork"
      description="Loads an image from a URL as an icon-sized element. Useful for favicons, CDN-hosted icons, or external brand images."
      props={props}
      example={exampleCode}
    >
      <ExampleCard
        title="IconNetwork Sizes"
        description="Different size and border radius configurations for URL-based icons."
        code={exampleCode}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <IconNetwork src="https://cdn.example.com/logo.png" size="lg" fallback={() => <Icon icon={Icons.icon.Globe} size="lg" color="#64748b" />} />
          <IconNetwork src="/favicon.ico" size="16px" borderRadius=".25rem" fallback={() => <Icon icon={Icons.icon.Image} size="sm" color="#64748b" />} />
          <IconNetwork src="https://brand.com/icon.svg" fallback={() => <Icon icon={Icons.icon.Globe} size="md" color="#64748b" />} />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
