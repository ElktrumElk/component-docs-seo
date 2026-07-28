
import { Layout, Move,  Wind } from "elk-components/icons";
import Link from "next/link";

const FEATURES = [
  {
    icon: "✦",
    title: "Motion Mode",
    description:
      "Declarative animations via motion/react. Spring and tween configurations, hover and tap gesture triggers, scroll-triggered entrance animations, and automatic layout transitions — all expressed as props on a single component.",
  },
  {
    icon: "⚡",
    title: "Legacy Mode",
    description:
      "Native Web Animations API keyframes for lightweight, high-performance animations without external dependencies. Imperative control with play, pause, reverse, and cancel methods.",
  },
  {
    icon: "🔤",
    title: "Letter Animation",
    description:
      "20 built-in presets from bounceIn to glitch, typewriter, spiral, and wave. Animate individual letters or whole words with per-character keyframes and configurable staggered timing.",
  },
  {
    icon: "🔄",
    title: "Transitions",
    description:
      "13 built-in CSS effect presets — fade, slide, zoom, flip, liquid, morph, glide — with gesture triggers and full Motion mode support. Switch between views declaratively.",
  },
  {
    icon: "🎨",
    title: "205 SVG Icons",
    description:
      "Stroke-based icons organized across 12 categories: navigation, actions, communication, social, media, status, commerce, time, users, layout, code, and miscellaneous. All accept size, color, and className.",
  },
  {
    icon: "📦",
    title: "30+ UI Primitives",
    description:
      "Button, Card, Avatar, Input, Badge, TabView, BottomModal, SidePanel, GridView, ListView — every component is fully typed, composable via render props, and customisable with CSS shorthand props.",
  },
];

const COMPONENTS = [
  "Button",
  "Card",
  "Text",
  "Input",
  "Avatar",
  "Icon",
  "Badge",
  "Animation",
  "Transition",
  "LetterAnimation",
  "Panel",
  "Stack",
  "TabView",
  "BottomModal",
  "SidePanel",
  "Reabon",
  "GridView",
  "ScrollView",
  "SectionDivider",
  "Navigator",
  "Tiles",
  "ListView",
  "TextButton",
  "IconButton",
  "Span",
  "Padding",
  "Gap",
  "PageScrollView",
  "Example",
];

const ICON_CATEGORIES = [
  { name: "Navigation", count: 25 },
  { name: "Actions", count: 25 },
  { name: "Communication", count: 20 },
  { name: "Social", count: 20 },
  { name: "Media", count: 25 },
  { name: "Status", count: 15 },
  { name: "Commerce", count: 10 },
  { name: "Time", count: 9 },
  { name: "Users", count: 14 },
  { name: "Layout", count: 9 },
  { name: "Code", count: 7 },
  { name: "Misc", count: 22 },
];

const HOOKS = [
  {
    name: "useState",
    desc: "Enhanced with reset(), get(), and named object return — safer than React's useState for complex state.",
  },
  {
    name: "useRef",
    desc: "Provides setValue, getValue, and isSet methods instead of direct .current mutation for controlled ref access.",
  },
  {
    name: "useEffect",
    desc: "Includes useMountEffect, useUpdateEffect, useDebounceEffect, and usePreviousEffect for common lifecycle patterns.",
  },
  {
    name: "useCallback",
    desc: "Defaults the dependency array to [] when omitted, preventing unnecessary re-renders from unstable references.",
  },
  {
    name: "createStore",
    desc: "Lightweight external store built on useSyncExternalStore. Share state across components without prop drilling.",
  },
  {
    name: "useInstance",
    desc: "Cross-component data sharing using a named instance key. One component sets data, another reads it reactively.",
  },
  {
    name: "useComponentData",
    desc: "Read-only accessor to another component's instance data. Type-safe with generics.",
  },
  {
    name: "useStableCallback",
    desc: "Returns a permanently stable callback identity across renders. Never triggers effect re-runs.",
  },
];

function Divider({ variant = "wave" }: { variant?: string }) {
  const paths: Record<string, string> = {
    wave: "M0,40 Q25,10 50,40 T100,40 T150,40 T200,40 T250,40 T300,40 T350,40 T400,40 T450,40 T500,40 T550,40 T600,40 T650,40 T700,40 T750,40 T800,40 T850,40 T900,40 T950,40 T1000,40 T1050,40 T1100,40 T1150,40 T1200,40 T1250,40 T1300,40 T1350,40 T1400,40",
    curl: "M0,50 C50,10 100,90 150,50 S250,10 300,50 S400,90 450,50 S550,10 600,50 S700,90 750,50 S850,10 900,50 S1000,90 1050,50 S1150,10 1200,50 S1300,90 1350,50 S1450,10 1500,50",
    dots: "M0,40 L10,40 M20,40 L30,40 M40,40 L50,40 M60,40 L70,40 M80,40 L90,40 M100,40 L110,40 M120,40 L130,40 M140,40 L150,40",
  };
  return (
    <svg
      viewBox="0 0 1500 80"
      preserveAspectRatio="none"
      className="w-full h-16 sm:h-20 block"
      aria-hidden="true"
    >
      <path
        d={paths[variant] || paths.wave}
        fill="none"
        stroke="rgba(34,197,94,0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodeBlock({
  children,
  filename,
}: {
  children: string;
  filename?: string;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-surface-lighter border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-warm-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="text-[10px] font-mono text-text-muted">
            {filename}
          </span>
        </div>
      )}
      <pre className="code-block rounded-none border-0 m-0">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold gradient-text">elk</span>
              <span className="text-sm font-medium text-text-secondary group-hover:text-primary-light transition-colors hidden sm:inline">
                components
              </span>
            </Link>
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="nav-link">
                  Features
                </a>
                <a href="#components" className="nav-link">
                  Components
                </a>
                <a href="#icons" className="nav-link">
                  Icons
                </a>
                <a href="#hooks" className="nav-link">
                  Hooks
                </a>
                <a href="#quickstart" className="nav-link">
                  Quick Start
                </a>
              </div>
              <Link
                style={{ border: "1px solid #51ff6868" }}
                href="/docs"
                className="px-4 py-2 rounded-lg border border-primary/40 text-primary-light text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                Docs
              </Link>
              <a
                href="https://www.npmjs.com/package/elk-components"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-block px-4 py-2 rounded-lg bg-primary text-surface text-sm font-bold hover:bg-primary-dark transition-colors"
              >
                npm install elk-components
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <div className="animate-slide-up">
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/30 bg-primary/10 text-primary-light">
                v1.3.13 &middot; MIT License &middot; 3 Dependencies
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">React</span>{" "}
              <span className="text-text-primary">animation,</span>
              <br />
              <span className="text-text-primary">layout</span>{" "}
              <span className="text-text-primary">&amp;</span>{" "}
              <span className="gradient-text">styling</span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed animate-slide-up text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Declarative motion, transitions, letter animations, and composable
              UI primitives with 205 built-in SVG icons. Powered by Motion and
              the Web Animations API. Fully typed for TypeScript.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#quickstart"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-surface font-bold text-base hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </a>
              <a
                href="#components"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border text-text-secondary font-semibold text-base hover:border-primary/40 hover:text-text-primary transition-all text-center"
              >
                Explore Components
              </a>
            </div>

            <div
              className="mt-14 sm:mt-16 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-xl bg-surface-light border border-border font-mono text-sm">
                <span className="text-warm-accent">$</span>
                <span className="text-text-secondary">npm install</span>
                <span className="text-primary-light font-semibold">
                  elk-components
                </span>
              </div>
            </div>
          </div>
        </section>

        <Divider variant="wave" />

        {/* Features */}
        <section id="features" className="py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Everything</span> you need
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
                A batteries-included toolkit for building polished React
                interfaces with motion, structure, and style — all in one
                dependency.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {FEATURES.map((f) => (
                <article key={f.title} className="feature-card">
                  <span className="text-2xl sm:text-3xl mb-3 block">
                    {f.icon}
                  </span>
                  <h3 className="font-bold mb-2 text-text-primary">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {f.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Divider variant="curl" />

        {/* Quick Start */}
        <section id="quickstart" className="py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Up and running in <span className="gradient-text">seconds</span>
              </h2>
              <p className="text-text-secondary text-base sm:text-lg">
                Install, import, and start building — zero configuration
                required.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-3">
                  1. Install
                </h3>
                <CodeBlock filename="terminal">
                  {`# npm
npm install elk-components

# yarn
yarn add elk-components

# pnpm
pnpm add elk-components`}
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-3">
                  2. Import &amp; Use
                </h3>
                <CodeBlock filename="App.tsx">
                  {`import {
  Button, Text, Card, Avatar,
  Animation, Transition, LetterAnimation,
  Icon, Icons
} from "elk-components";

export default function App() {
  return (
    <Card padding="lg">
      <Animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        child={() => (
          <Text text="Hello, elk-components!" type="h1" />
        )}
      />
      <Avatar src="/user.jpg" size="lg" />
      <Button child={() => <Icon icon={Icons.icon.ShoppingCart} />} />
    </Card>
  );
}`}
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-3">
                  3. Animate text with one line
                </h3>
                <CodeBlock filename="Hero.tsx">
                  {`import { LetterAnimation } from "elk-components";

// 20 built-in presets: bounceIn, glitch, elastic,
// typewriter, wave, spiral, and more

<LetterAnimation
  text="Welcome to elk-components"
  type="words"
  animation="bounceIn"
  size="3rem"
  stagger={60}
  duration={400}
/>`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </section>

        <Divider variant="dots" />

        {/* Components */}
        <section id="components" className="py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">30+</span> Components
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
                Every component uses{" "}
                <span className="highlight-green">render props</span>,{" "}
                <span className="highlight-amber">typed CSS units</span>, and{" "}
                <span className="highlight-cyan">gesture passthrough</span> via
                the{" "}
                <code className="text-primary-light font-mono text-sm">
                  gest
                </code>{" "}
                prop.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {COMPONENTS.map((c) => (
                <span key={c} className="component-badge">
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 gap-6 sm:gap-8">
              <article className="feature-card">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Animation
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  Dual-mode:{" "}
                  <span className="highlight-green">Motion props</span>{" "}
                  (initial, animate, whileHover) for declarative or{" "}
                  <span className="highlight-amber">
                    legacy Web Animations API
                  </span>{" "}
                  keyframes for imperative control. Both support gesture
                  triggers and scroll-linked playback.
                </p>
                <CodeBlock>
                  {`Animation
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  child={() => <Button />}
/>`}
                </CodeBlock>
              </article>

              <article className="feature-card">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warm-accent" />
                  Transition
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  <span className="highlight-amber">
                    13 built-in CSS effects
                  </span>{" "}
                  with gesture triggers or controlled via the{" "}
                  <code className="text-primary-light font-mono text-xs">
                    active
                  </code>{" "}
                  prop. Effects include fade, slide, zoom, flip, liquid, morph,
                  and glide.
                </p>
                <CodeBlock>
                  {`Transition
  from={() => <LoginView />}
  to={() => <RegisterView />}
  effect="slide-left"
  duration={300}
  gesture="click"
/>`}
                </CodeBlock>
              </article>

              <article className="feature-card">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cool-accent" />
                  SectionDivider
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  <span className="highlight-cyan">12 SVG variants</span> with
                  continuous scroll animation, floating undulation, and gesture
                  triggers. Each variant has a unique animation preset.
                </p>
                <CodeBlock>
                  {`SectionDivider
  variant="wave"
  animate
  float
  color="#22c55e"
  amplitude={20}
  frequency={4}
/>`}
                </CodeBlock>
              </article>

              <article className="feature-card">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  createStore
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  Lightweight external store with{" "}
                  <code className="text-primary-light font-mono text-xs">
                    useSyncExternalStore
                  </code>{" "}
                  integration.
                  <span className="highlight-green">
                    Cross-component state
                  </span>{" "}
                  without prop drilling or context providers.
                </p>
                <CodeBlock>
                  {`const store = createStore({ count: 0 });

function Counter() {
  const { count } = useStore(store);
  const set = useSetState(store);
  return (
    <Button
      child={() => <Text
        text={\`Count: \${count}\`}
        type="p" />}
      gest={{ onClick: () =>
        set(p => ({ count: p.count + 1 }))
      }}
    />
  );
}`}
                </CodeBlock>
              </article>
            </div>
          </div>
        </section>

        <Divider variant="wave" />

        {/* Icons */}
        <section id="icons" className="py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">205</span> Built-in Icons
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
                Stroke-based SVG icons organized into 12 categories. All accept{" "}
                <span className="highlight-green">size</span>,{" "}
                <span className="highlight-amber">color</span>, and{" "}
                <span className="highlight-cyan">className</span> props for
                consistent styling.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {ICON_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="text-center p-4 rounded-xl border border-border bg-surface-card/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {cat.count}
                  </div>
                  <div className="text-sm text-text-secondary">{cat.name}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <CodeBlock filename="icons.tsx">
                {`import { Icon, Icons } from "elk-components";

// Access icons via Icons.icon.* namespace
<Icon icon={Icons.icon.Lock} size="lg" color="white" />
<Icon icon={Icons.icon.Heart} size={24} color="red" />

// Size presets: xs=12, sm=16, md=24, lg=32, xl=48
// Or pass a raw number for exact pixel sizing
<Icon icon={Icons.icon.Search} size={40} />`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <Divider variant="curl" />

        {/* Hooks */}
        <section id="hooks" className="py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Powerful</span> Hooks
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
                Enhanced versions of React&apos;s core hooks plus a lightweight
                store and{" "}
                <span className="highlight-green">
                  cross-component data primitives
                </span>{" "}
                for complex applications.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {HOOKS.map((h) => (
                <div
                  key={h.name}
                  style={{border: '.4px solid #ffffff24'}}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border bg-surface-card/40 hover:border-primary/20 transition-colors"
                >
                  <code className="shrink-0 text-primary-light font-mono text-sm font-bold mt-0.5" style={{color: '#ff9a0c'}}>
                    {h.name}
                  </code>
                  <p className="text-text-secondary text-sm leading-relaxed" style={{color: '#f5f5f'}}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <CodeBlock filename="hooks.ts">
                {`import {
  useState, useRef, useEffect, useCallback,
  createStore, useStore, useSetState,
  useInstance, useComponentData,
  useStableCallback
} from "elk-components/hooks";

// Enhanced useState with reset() and get()
const count = useState(0);
count.set(1);           // set value
count.get();            // read without re-render
count.reset();          // back to 0

// Stable callback — identity never changes
const fn = useStableCallback((data) => {
  console.log(data);
});

// Cross-component data sharing
const { setData } = useInstance("sidebar");
const width = useComponentData<number>(
  "sidebar", "width"
);`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <Divider variant="dots" />

        {/* API Reference */}
        <section className="py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Typed</span> from the ground up
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
                Full TypeScript support with{" "}
                <span className="highlight-green">
                  autocomplete for CSS units
                </span>
                , <span className="highlight-amber">enum sizing</span>, and{" "}
                <span className="highlight-cyan">gesture passthrough</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              <article className="feature-card text-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="text-3xl mb-3" style={{alignSelf: 'center'}}>
                  <Layout color="orange"/>
                </div>
                <h3 className="font-bold mb-2">Typed CSS Units</h3>
                <p className="text-text-secondary text-sm">
                  Template literal types for gap, padding, and borderRadius.
                  Autocomplete for{" "}
                  <code className="text-primary-light text-xs font-mono">
                    rem
                  </code>
                  ,{" "}
                  <code className="text-primary-light text-xs font-mono">
                    px
                  </code>
                  ,{" "}
                  <code className="text-primary-light text-xs font-mono">
                    em
                  </code>
                  .
                </p>
              </article>
              <article className="feature-card text-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="text-3xl mb-3" style={{alignSelf: 'center'}}>
                  <Wind color="green"/>
                  </div>
                <h3 className="font-bold mb-2">Enum Sizing</h3>
                <p className="text-text-secondary text-sm">
                  Badge, Card, Avatar, Icon — use string presets{" "}
                  <code className="text-primary-light text-xs font-mono">
                    &quot;xs&quot;
                  </code>{" "}
                  to{" "}
                  <code className="text-primary-light text-xs font-mono">
                    &quot;xl&quot;
                  </code>{" "}
                  mapped to internal size dictionaries.
                </p>
              </article>
              <article className="feature-card text-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <div className="text-3xl mb-3" style={{alignSelf: 'center'}}>
                  <Move color="#01b7ff"/>
                </div>
                <h3 className="font-bold mb-2">Gesture Passthrough</h3>
                <p className="text-text-secondary text-sm">
                  The{" "}
                  <code className="text-primary-light text-xs font-mono">
                    gest
                  </code>{" "}
                  prop accepts the full type for the underlying HTML element.
                  Any native event works — click, focus, blur, keydown, and
                  more.
                </p>
              </article>
            </div>

            <div className="mt-12">
              <CodeBlock filename="advanced-patterns.tsx">
                {`// Render props — every slot uses () => JSX
<Card
  padding="lg"
  radius="lg"
  shadow
  header={() => <Text text="Title" type="h2" />}
  body={() => <Text text="Content" type="p" />}
/>

// Avatar — content priority: src > icon > fallback
<Avatar src="/user.jpg" size="lg" />
<Avatar icon={Icons.icon.Lock} size="md" />
<Avatar fallback={() => <Text text="JD" type="p" />} />

// Gesture passthrough via gest
<Input
  gest={{ onChange: (e) => setSearch(e.target.value) }}
/>
<Button
  gest={{ onClick: submit, disabled: isLoading }}
/>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <Divider variant="wave" />

        {/* CTA */}
        <section className="py-20 sm:py-24 px-5 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Start building with{" "}
              <span className="gradient-text">elk-components</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg mb-10">
              30+ components, 205 icons, dual-mode animation, enhanced hooks,
              and full TypeScript support — all in one package.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.npmjs.com/package/elk-components"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-surface font-bold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                View on npm
              </a>
              <a href="https://github.com/ElktrumElk/components"></a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 sm:py-12 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">elk</span>
            <span className="text-sm text-text-muted">components</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-sm text-text-muted">
            <a
              href="https://www.npmjs.com/package/elk-components"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-colors"
            >
              npm
            </a>
            <a
              href="https://github.com/elktrumelk/elk-components"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-colors"
            >
              GitHub
            </a>
            <span>v1.3.13</span>
            <span>MIT License</span>
          </div>
          <p className="text-xs text-text-muted">
            Built by{" "}
            <a
              href="https://www.npmjs.com/~elktrumelk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-light transition-colors"
            >
              elktrumelk
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
