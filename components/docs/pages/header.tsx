"use client";

import { Header, Text, Icon, Icons } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "leading", type: "ElementType", required: false, description: "Left-side element (avatar, icon)" },
  { prop: "title", type: "ElementType", required: true, description: "Title content" },
  { prop: "subTitle", type: "ElementType", required: false, description: "Subtitle below title" },
  { prop: "action", type: "ElementType", required: false, description: "Right-side actions" },
  { prop: "titleGap", type: "string", required: false, description: "Gap between title and subtitle" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Override default flex layout" },
];

export function HeaderPage() {
  return (
    <ComponentPage
      title="Header"
      description="App bar with leading element, title/subtitle, and action slot."
      props={props}
      example={`<Header
  leading={() => <Icon icon={Icons.icon.Settings} size="md" />}
  title={() => <Text text="Dashboard" type="h1" />}
  subTitle={() => <Text text="Overview" type="p" />}
  titleGap=".3rem"
  action={() => <Button child={() => <Text text="Settings" type="p" />} />}
/>`}
    >
      <ExampleCard
        title="Basic Header"
        description="A header with title and subtitle."
      >
        <Header
          title={() => <Text text="Dashboard" type="h1" />}
          subTitle={() => <Text text="Overview" type="p" />}
          titleGap=".3rem"
        />
      </ExampleCard>
      <ExampleCard
        title="With Leading Icon"
        description="A header with an icon on the left side."
      >
        <Header
          leading={() => <Icon icon={Icons.icon.Settings} size="md" />}
          title={() => <Text text="Settings" type="h1" />}
          subTitle={() => <Text text="Manage your preferences" type="p" />}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
