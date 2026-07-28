"use client";

import { Page, Header, Text, Center, Icon, Icons } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  {
    prop: "header",
    type: "ElementType",
    required: false,
    description: "Header slot",
  },
  {
    prop: "body",
    type: "ElementType",
    required: true,
    description: "Body slot",
  },
  {
    prop: "footer",
    type: "ElementType",
    required: false,
    description: "Footer slot",
  },
  {
    prop: "className",
    type: "string",
    required: false,
    default: '"page"',
    description: "CSS class",
  },
  {
    prop: "style",
    type: "CSSProperties",
    required: false,
    default: "{}",
    description: "Inline styles",
  },
  {
    prop: "background",
    type: "color",
    required: false,
    description: "CSS Color background",
  },
  {
    prop: "atrib",
    type: "HTMLAttributes<HTMLElement>",
    required: false,
    description: "Native HTML attributes",
  },
];

export function PagePage() {
  return (
    <ComponentPage
      title="Page"
      description="Top-level layout section. Wraps header, body, and footer into a semantic page structure."
      props={props}
      example={`
<Page header={() => 
    <Header ... />} body={() => <Center child={() => <Text text="Content" type="h1" />} />}
  footer={() => <Text text="Footer" type="p" />}
/>`}
    >
      <ExampleCard
        title="Basic Page Layout"
        description="A page with header, body, and footer sections."
      >
        <Page
          background="black"
          style={{ width: "100%", height: "20rem", padding: "1rem" }}
          header={() => (
            <Header
              leading={() => (
                <Icon icon={Icons.icon.Layers} color="navy" size={"lg"} />
              )}
              title={() => <Text text="Dashboard" type="h1" />}
              subTitle={() => <Text text="Overview" type="p" color="grey" />}
              underLine="1px solid rgba(127, 87, 127, 0.18)"
            />
          )}
          body={() => (
            <Center child={() => <Text text="Page Content" type="h1" />} />
          )}
          footer={() => (
            <>
              <Text text="elk-component" type="p" />
            </>
          )}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
