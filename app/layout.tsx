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
  version: "1.3.9",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  datePublished: "2024-01-15",
  dateModified: "2025-07-26",
  author: {
    "@type": "Person",
    name: "Elkanah Cole",
    url: "https://github.com/elktrumelk",
  },
  maintainer: {
    "@type": "Person",
    name: "Elkanah Cole",
    url: "https://github.com/elktrumelk",
  },
  supports: ["React 18+", "TypeScript", "Next.js"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is elk-components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "elk-components is a production-ready React component library providing declarative motion, transitions, letter animations, and composable UI primitives with 205 built-in SVG icons. It is powered by Motion and the Web Animations API.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install elk-components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run `npm install elk-components` in your project. It has minimal peer dependencies: react and react-dom. Motion is optional — used only if you want Motion mode animations.",
      },
    },
    {
      "@type": "Question",
      name: "Does elk-components support TypeScript?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. elk-components is written in TypeScript and ships with full type definitions. All props, hooks, and component APIs are fully typed.",
      },
    },
    {
      "@type": "Question",
      name: "What animation modes does elk-components support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "elk-components has two animation modes: Motion mode (declarative spring/tween animations via motion/react) and Legacy mode (native Web Animations API with keyframes). The mode is auto-detected based on which props you pass — no configuration needed.",
      },
    },
    {
      "@type": "Question",
      name: "How many icons does elk-components include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "elk-components includes 205 built-in SVG icons across categories: arrows, communication, devices, files, media, navigation, social, interface, charts, and more. Access them via the Icons object.",
      },
    },
    {
      "@type": "Question",
      name: "Is elk-components free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. elk-components is open source under the MIT license. You can use it in personal and commercial projects.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
