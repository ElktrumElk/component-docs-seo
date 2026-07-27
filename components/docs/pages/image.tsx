"use client";

import { Image, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "src", type: "string", required: false, description: "Image URL" },
  { prop: "alt", type: "string", required: false, default: '""', description: "Alt text" },
  { prop: "width", type: "string", required: false, default: '"100%"', description: "Width" },
  { prop: "height", type: "string", required: false, default: '"auto"', description: "Height" },
  { prop: "aspectRatio", type: "${number}/${number}", required: false, description: 'CSS aspect-ratio (e.g. "16/9")' },
  { prop: "objectFit", type: "'cover'|'contain'|'fill'|'none'|'scale-down'", required: false, default: '"cover"', description: "Object-fit" },
  { prop: "borderRadius", type: "string", required: false, description: "Border radius" },
  { prop: "placeholder", type: "string", required: false, default: '"rgba(255,255,255,0.05)"', description: "Placeholder background color" },
  { prop: "loading", type: "'lazy'|'eager'", required: false, default: '"lazy"', description: "Loading strategy" },
  { prop: "fallback", type: "ElementType", required: false, description: "Component shown on error" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Image) => void", required: false, description: "Instance callback" },
];

export function ImagePage() {
  return (
    <ComponentPage
      title="Image"
      description="Image component with lazy loading, aspect ratio, object-fit, and error fallback support."
      props={props}
      example={`<Image
  src="/photo.jpg"
  alt="Photo"
  width="200px"
  height="150px"
  borderRadius=".5rem"
  objectFit="cover"
  fallback={() => <Text text="No image" type="p" />}
/>`}
    >
      <ExampleCard
        title="Fallback Display"
        description="When no src is provided, the fallback component renders."
        code={`<Image
  width="200px"
  height="150px"
  borderRadius=".5rem"
  fallback={() => <Text text="No image available" type="p" size="0.85rem" color="#64748b" />}
/>`}
      >
        <div style={{ maxWidth: "200px" }}>
          <Image
            width="200px"
            height="150px"
            borderRadius=".5rem"
            fallback={() => (
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(99,102,241,0.05)", borderRadius: ".5rem", border: "1px dashed rgba(99,102,241,0.3)" }}>
                <Text text="No image" type="p" size="0.85rem" color="#64748b" />
              </div>
            )}
          />
        </div>
      </ExampleCard>
    </ComponentPage>
  );
}
