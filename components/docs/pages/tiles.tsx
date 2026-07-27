"use client";

import { Tiles, Text, Avatar, IconButton, Icon, Icons } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "leading", type: "ElementType", required: false, description: "Leading content (icon, avatar)" },
  { prop: "title", type: "ElementType", required: false, description: "Title content" },
  { prop: "subtitle", type: "ElementType", required: false, description: "Subtitle content" },
  { prop: "trailing", type: "ElementType", required: false, description: "Trailing content (action button)" },
  { prop: "padding", type: "string", required: false, default: '".75rem 1rem"', description: "Container padding" },
  { prop: "gap", type: "string", required: false, default: '".75rem"', description: "Gap between sections" },
  { prop: "borderBottom", type: "string", required: false, description: "Bottom border style" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLDivElement>", required: false, description: "Native div attributes" },
  { prop: "onFunc", type: "(self: _Tiles) => void", required: false, description: "Instance callback" },
];

export function TilesPage() {
  return (
    <ComponentPage
      title="Tiles"
      description="Flexible list-item layout with leading, title, subtitle, and trailing sections."
      props={props}
      example={`<Tiles
  leading={() => <Avatar src="/user.jpg" size="sm" />}
  title={() => <Text text="John Doe" type="h3" />}
  subtitle={() => <Text text="john@example.com" type="p" />}
  trailing={() => <IconButton icon={() => <Icon icon={Icons.icon.MoreVertical} />} />}
  borderBottom="1px solid rgba(255,255,255,0.1)"
/>`}
    >
      <ExampleCard
        title="Basic Tile"
        description="A tile with leading avatar, title, subtitle, and trailing action button."
        code={`<Tiles
  leading={() => <Avatar src="/user.jpg" size="sm" />}
  title={() => <Text text="John Doe" type="h3" />}
  subtitle={() => <Text text="john@example.com" type="p" />}
  trailing={() => <IconButton icon={() => <Icon icon={Icons.icon.MoreVertical} />} />}
  borderBottom="1px solid rgba(255,255,255,0.1)"
/>`}
      >
        <Tiles
          leading={() => <Avatar src="/user.jpg" size="sm" />}
          title={() => <Text text="John Doe" type="h3" />}
          subtitle={() => <Text text="john@example.com" type="p" />}
          trailing={() => <IconButton icon={() => <Icon icon={Icons.icon.MoreVertical} />} />}
          borderBottom="1px solid rgba(255,255,255,0.1)"
        />
      </ExampleCard>
    </ComponentPage>
  );
}
