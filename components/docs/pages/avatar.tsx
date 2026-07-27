"use client";

import { Avatar, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "src", type: "string", required: false, description: "Image URL (highest priority)" },
  { prop: "alt", type: "string", required: false, default: '""', description: "Alt text" },
  { prop: "icon", type: "ElementType", required: false, description: "SVG icon component (used when no src)" },
  { prop: "size", type: "'xs'|'sm'|'md'|'lg'|'xl'", required: false, default: '"md"', description: "Size preset: xs=1.5rem, sm=2rem, md=2.5rem, lg=3.5rem, xl=5rem" },
  { prop: "borderRadius", type: "string", required: false, default: '"50%"', description: "Border radius (circular by default)" },
  { prop: "backgroundColor", type: "string", required: false, default: '"rgba(255,255,255,0.1)"', description: "Background" },
  { prop: "fallback", type: "ElementType", required: false, description: "Component shown when no src and no icon" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Avatar) => void", required: false, description: "Instance callback" },
];

const notes = (
  <div className="feature-card">
    <h3 className="font-semibold mb-2">Content Priority</h3>
    <p className="text-text-secondary text-sm">
      <code className="text-accent text-xs font-mono">src</code> &gt;{" "}
      <code className="text-accent text-xs font-mono">icon</code> &gt;{" "}
      <code className="text-accent text-xs font-mono">fallback</code>
    </p>
  </div>
);

export function AvatarPage() {
  return (
    <ComponentPage
      title="Avatar"
      description="Circular image with size presets, icon support, and fallback."
      props={props}
      notes={notes}
      example={`<Avatar src="/user.jpg" alt="User" size="lg" />
<Avatar icon={Lock} size="md" backgroundColor="rgba(255,255,255,0.05)" />
<Avatar size="sm" fallback={() => <Text text="JD" type="p" />} />`}
    >
      <ExampleCard
        title="Sizes"
        description="Avatars in different size presets."
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Avatar size="xs" fallback={() => <Text text="XS" type="p" />} />
          <Avatar size="sm" fallback={() => <Text text="SM" type="p" />} />
          <Avatar size="md" fallback={() => <Text text="MD" type="p" />} />
          <Avatar size="lg" fallback={() => <Text text="LG" type="p" />} />
          <Avatar size="xl" fallback={() => <Text text="XL" type="p" />} />
        </div>
      </ExampleCard>
      <ExampleCard
        title="With Image"
        description="Avatar displaying an image source."
      >
        <Avatar src="/avatar.jpg" alt="User avatar" size="lg" />
      </ExampleCard>
      <ExampleCard
        title="Fallback"
        description="Avatar with initials when no image or icon is provided."
      >
        <Avatar size="md" fallback={() => <Text text="JD" type="p" />} />
      </ExampleCard>
    </ComponentPage>
  );
}
