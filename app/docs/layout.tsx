"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/docs/Sidebar";
import { OverviewPage } from "@/components/docs/pages/overview";
import { InstallPage } from "@/components/docs/pages/install";
import { ConventionsPage } from "@/components/docs/pages/conventions";
import { PagePage } from "@/components/docs/pages/page-component";
import { HeaderPage } from "@/components/docs/pages/header";
import { TextPage } from "@/components/docs/pages/text";
import { ContainerPage } from "@/components/docs/pages/container";
import { ButtonPage } from "@/components/docs/pages/button";
import { IconButtonPage } from "@/components/docs/pages/iconbutton";
import { CenterPage } from "@/components/docs/pages/center";
import { StackPage } from "@/components/docs/pages/stack";
import { DividerPage } from "@/components/docs/pages/divider";
import { InputPage } from "@/components/docs/pages/input";
import { ImagePage } from "@/components/docs/pages/image";
import { BadgePage } from "@/components/docs/pages/badge";
import { CardPage } from "@/components/docs/pages/card";
import { AvatarPage } from "@/components/docs/pages/avatar";
import { IconPage } from "@/components/docs/pages/icon";
import { IconNetworkPage } from "@/components/docs/pages/iconnetwork";
import { AnimationPage } from "@/components/docs/pages/animation";
import { TransitionPage } from "@/components/docs/pages/transition";
import { LetterAnimationPage } from "@/components/docs/pages/letteranimation";
import { PanelPage } from "@/components/docs/pages/panel";
import { SpanPage } from "@/components/docs/pages/span";
import { ScrollViewPage } from "@/components/docs/pages/scrollview";
import { SectionPage } from "@/components/docs/pages/section";
import { ArticlePage } from "@/components/docs/pages/article";
import { NavigatorPage } from "@/components/docs/pages/navigator";
import { TextButtonPage } from "@/components/docs/pages/textbutton";
import { TilesPage } from "@/components/docs/pages/tiles";
import { ListPage } from "@/components/docs/pages/list";
import { ListViewPage } from "@/components/docs/pages/listview";
import { ListMenuPage } from "@/components/docs/pages/listmenu";
import { BottomModalPage } from "@/components/docs/pages/bottommodal";
import { SidePanelPage } from "@/components/docs/pages/sidepanel";
import { ReabonPage } from "@/components/docs/pages/reabon";
import { TabPage } from "@/components/docs/pages/tab";
import { TabViewPage } from "@/components/docs/pages/tabview";
import { PageScrollViewPage } from "@/components/docs/pages/pagescrollview";
import { GapPage } from "@/components/docs/pages/gap";
import { ExamplePage } from "@/components/docs/pages/example";
import { SectionDividerPage } from "@/components/docs/pages/sectiondivider";
import { PaddingPage } from "@/components/docs/pages/padding";
import { GridViewPage } from "@/components/docs/pages/gridview";
import { HooksPage } from "@/components/docs/pages/hooks";
import { IconsPage } from "@/components/docs/pages/icons";

const PAGES: Record<string, React.FC> = {
  overview: OverviewPage,
  install: InstallPage,
  conventions: ConventionsPage,
  page: PagePage,
  header: HeaderPage,
  text: TextPage,
  container: ContainerPage,
  button: ButtonPage,
  iconbutton: IconButtonPage,
  center: CenterPage,
  stack: StackPage,
  divider: DividerPage,
  input: InputPage,
  image: ImagePage,
  badge: BadgePage,
  card: CardPage,
  avatar: AvatarPage,
  icon: IconPage,
  iconnetwork: IconNetworkPage,
  animation: AnimationPage,
  transition: TransitionPage,
  letteranimation: LetterAnimationPage,
  panel: PanelPage,
  span: SpanPage,
  scrollview: ScrollViewPage,
  section: SectionPage,
  article: ArticlePage,
  navigator: NavigatorPage,
  textbutton: TextButtonPage,
  tiles: TilesPage,
  list: ListPage,
  listview: ListViewPage,
  listmenu: ListMenuPage,
  bottommodal: BottomModalPage,
  sidepanel: SidePanelPage,
  reabon: ReabonPage,
  tab: TabPage,
  tabview: TabViewPage,
  pagescrollview: PageScrollViewPage,
  gap: GapPage,
  example: ExamplePage,
  sectiondivider: SectionDividerPage,
  padding: PaddingPage,
  gridview: GridViewPage,
  hooks: HooksPage,
  icons: IconsPage,
};

const PAGE_LABELS: Record<string, string> = {
  overview: "Overview",
  install: "Installation",
  conventions: "Conventions",
  page: "Page",
  header: "Header",
  text: "Text",
  container: "Container",
  button: "Button",
  iconbutton: "IconButton",
  center: "Center",
  stack: "Stack",
  divider: "Divider",
  input: "Input",
  image: "Image",
  badge: "Badge",
  card: "Card",
  avatar: "Avatar",
  icon: "Icon",
  iconnetwork: "IconNetwork",
  animation: "Animation",
  transition: "Transition",
  letteranimation: "LetterAnimation",
  panel: "Panel",
  span: "Span",
  scrollview: "ScrollView",
  section: "Section",
  article: "Article",
  navigator: "Navigator",
  textbutton: "TextButton",
  tiles: "Tiles",
  list: "List",
  listview: "ListView",
  listmenu: "ListMenu",
  bottommodal: "BottomModal",
  sidepanel: "SidePanel",
  reabon: "Reabon",
  tab: "Tab",
  tabview: "TabView",
  pagescrollview: "PageScrollView",
  gap: "Gap",
  example: "Example",
  sectiondivider: "SectionDivider",
  padding: "Padding",
  gridview: "GridView",
  hooks: "Hooks",
  icons: "205 Icons",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ActivePage = PAGES[activeSection] || OverviewPage;
  const currentPageLabel = PAGE_LABELS[activeSection] || "Docs";

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeSection={activeSection}
        onSelect={setActiveSection}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="sticky top-0 z-40 glass border-b border-border">
          <div className="flex items-center justify-between px-4 sm:px-6 h-14">
            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-lighter transition-colors"
                aria-label="Open navigation menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="4" x2="16" y2="4" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="14" x2="16" y2="14" />
                </svg>
              </button>
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-lg font-bold gradient-text">elk</span>
                <span className="text-xs text-text-muted hidden sm:inline">/</span>
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors hidden sm:inline">
                  docs
                </span>
              </Link>
              {/* Mobile page title */}
              <span className="md:hidden text-xs text-text-muted font-mono truncate max-w-[120px]">
                {currentPageLabel}
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs text-text-muted font-mono hidden sm:inline">v1.3.8</span>
              <a
                href="https://www.npmjs.com/package/elk-components"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-primary-light transition-colors"
              >
                npm
              </a>
              <a
                href="https://github.com/elktrumelk/elk-components"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-primary-light transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Content area */}
        <div
          className="flex-1 min-w-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.05) 0%, transparent 70%)",
          }}
        >
          <div className="p-5 sm:p-8 max-w-5xl mx-auto">
            <ActivePage />
          </div>
        </div>
      </main>
    </div>
  );
}
