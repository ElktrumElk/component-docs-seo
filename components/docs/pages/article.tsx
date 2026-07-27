"use client";

import { Article, Text } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "title", type: "ElementType", required: true, description: "Article title" },
  { prop: "body", type: "ElementType", required: true, description: "Article body" },
  { prop: "padding", type: "string", required: false, description: "Padding" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "gest", type: "HTMLAttributes<HTMLElement>", required: false, description: "Native article attributes" },
  { prop: "onFunc", type: "(self: _Article) => void", required: false, description: "Instance callback" },
];

export function ArticlePage() {
  return (
    <ComponentPage
      title="Article"
      description="Semantic article element with required title and body."
      props={props}
      example={`<Article
  title={() => <Text text="Getting Started" type="h2" />}
  body={() => <Text text="Follow these steps to set up your project." type="p" />}
/>`}
    >
      <ExampleCard
        title="Basic Article"
        description="An article with a title and body content."
      >
        <Article
          title={() => <Text text="Getting Started" type="h2" />}
          body={() => <Text text="Follow these steps to set up your project." type="p" />}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
