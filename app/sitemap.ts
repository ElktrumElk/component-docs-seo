import type { MetadataRoute } from "next";

const docs = [
  "overview",
  "install",
  "conventions",
  "page",
  "button",
  "text",
  "textbutton",
  "badge",
  "card",
  "avatar",
  "icon",
  "iconbutton",
  "iconnetwork",
  "input",
  "tab",
  "tabview",
  "list",
  "listview",
  "tiles",
  "transition",
  "animation",
  "letteranimation",
  "scrollview",
  "pagescrollview",
  "gridview",
  "section",
  "sectiondivider",
  "container",
  "stack",
  "center",
  "padding",
  "gap",
  "divider",
  "image",
  "span",
  "panel",
  "example",
  "navigator",
  "header",
  "bottommodal",
  "sidepanel",
  "hooks",
  "icons",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://component-docs-seo.vercel.app";

  const docPages = docs.map((slug) => ({
    url: `${base}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...docPages,
  ];
}
