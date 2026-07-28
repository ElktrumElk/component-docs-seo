"use client";

import React from "react";
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

export default function DocsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const Page = PAGES[slug];

  if (!Page) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
        <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
        <p className="text-text-secondary text-lg mb-2">Page not found</p>
        <p className="text-text-muted text-sm mb-8 max-w-md">
          The documentation page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/docs/overview"
          className="px-6 py-2.5 rounded-lg bg-primary text-surface font-semibold text-sm hover:bg-primary-dark transition-colors"
        >
          Back to Overview
        </a>
      </div>
    );
  }

  return <Page />;
}
