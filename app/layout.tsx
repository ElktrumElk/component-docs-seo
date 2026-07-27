import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "elk-components — React Animation, Layout & Styling Toolkit",
    template: "%s | elk-components",
  },
  description:
    "Declarative motion, transitions, letter animations, and composable UI primitives with 205 built-in SVG icons. A production-ready React component library powered by Motion and the Web Animations API.",
  keywords: [
    "react",
    "component library",
    "animation",
    "motion",
    "transitions",
    "UI components",
    "React primitives",
    "letter animation",
    "SVG icons",
    "layout components",
    "web animations api",
    "framer-motion",
    "elk-components",
    "npm",
  ],
  authors: [{ name: "elktrumelk" }],
  creator: "elktrumelk",
  publisher: "elktrumelk",
  metadataBase: new URL("https://elk-components.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elk-components.dev",
    title: "elk-components — React Animation, Layout & Styling Toolkit",
    description:
      "Declarative motion, transitions, letter animations, and composable UI primitives with 205 built-in SVG icons.",
    siteName: "elk-components",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "elk-components — React Animation, Layout & Styling Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "elk-components — React Animation, Layout & Styling Toolkit",
    description:
      "Declarative motion, transitions, letter animations, and composable UI primitives with 205 built-in SVG icons.",
    images: ["/og.png"],
    creator: "@elktrumelk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "elk-components",
  description:
    "React animation, layout, and styling toolkit with declarative motion, transitions, letter animations, and composable UI primitives with 205 built-in SVG icons.",
  url: "https://elk-components.dev",
  codeRepository: "https://github.com/elktrumelk/elk-components",
  programmingLanguage: "TypeScript",
  runtimePlatform: "React",
  license: "https://opensource.org/licenses/MIT",
  keywords:
    "react, animation, motion, transitions, ui, components, layout, styling, icons",
  version: "1.3.8",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
