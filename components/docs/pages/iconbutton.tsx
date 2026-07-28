"use client";

import { IconButton,  Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { Heart, Lock, Star } from "elk-components/icons";

const props = [
  { prop: "icon", type: "ElementType", required: false, description: "Icon component to render" },
  { prop: "borderRadius", type: "string", required: false, description: "Border radius" },
  { prop: "width", type: "string", required: false, description: "Width" },
  { prop: "height", type: "string", required: false, description: "Height" },
  { prop: "color", type: "string", required: false, description: "Icon color" },
  { prop: "border", type: "string", required: false, default: '"none"', description: "Border" },
  { prop: "className", type: "string", required: false, default: '"icon-btn"', description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLButtonElement>", required: false, description: "Native button attributes" },
  { prop: "onFunc", type: "(self: _Button) => void", required: false, description: "Instance callback" },
];

export function IconButtonPage() {
  return (
    <ComponentPage
      title="IconButton"
      description="Button that renders an icon instead of text content. Extends Button with icon-specific props."
      props={props}
      example={`<IconButton
  borderRadius="50%"
  icon={() => <Icon icon={Icons.icon.Lock} size="sm" />}
  gest={{ onClick: () => alert("clicked") }}
/>`}
    >
      <ExampleCard
        title="Basic IconButton"
        description="Circular icon button with different icons."
        code={`<IconButton borderRadius="50%" icon={() => <Icon icon={Icons.icon.Lock} size="sm" />} />
<IconButton borderRadius="50%" icon={() => <Icon icon={Icons.icon.Heart} size="sm" />} />
<IconButton borderRadius="50%" icon={() => <Icon icon={Icons.icon.Star} size="sm" />} />`}
      >
        <Stack direction="row" gap="1rem" align="center"  child={() => (
          <>
            <IconButton borderRadius="50%" style={{background: '#6365f140'}} icon={() => <Lock  color="#6366f1" />} />
            <IconButton borderRadius="50%" style={{background: '#ef444430'}} icon={() => <Heart  color="#ef4444" />} />
            <IconButton style={{background: '#ffe60437'}} borderRadius="50%" icon={() => <Star color="#f59e0b" fill={true} fillColor="red"/>} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
