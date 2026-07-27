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
  "Button", "Card", "Text", "Input", "Avatar", "Icon", "Badge",
  "Animation", "Transition", "LetterAnimation", "Panel", "Stack",
  "TabView", "BottomModal", "SidePanel", "Reabon", "GridView",
  "ScrollView", "SectionDivider", "Navigator", "Tiles", "ListView",
  "TextButton", "IconButton", "Span", "Padding", "Gap",
  "PageScrollView", "Example",
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
  { name: "useState", desc: "Enhanced with reset(), get(), and named object return — safer than React's useState for complex state." },
  { name: "useRef", desc: "Provides setValue, getValue, and isSet methods instead of direct .current mutation for controlled ref access." },
  { name: "useEffect", desc: "Includes useMountEffect, useUpdateEffect, useDebounceEffect, and usePreviousEffect for common lifecycle patterns." },
  { name: "useCallback", desc: "Defaults the dependency array to [] when omitted, preventing unnecessary re-renders from unstable references." },
  { name: "createStore", desc: "Lightweight external store built on useSyncExternalStore. Share state across components without prop drilling." },
  { name: "useInstance", desc: "Cross-component data sharing using a named instance key. One component sets data, another reads it reactively." },
  { name: "useComponentData", desc: "Read-only accessor to another component's instance data. Type-safe with generics." },
  { name: "useStableCallback", desc: "Returns a permanently stable callback identity across renders. Never triggers effect re-runs." },
];

function Divider({ variant = "wave" }: { variant?: string }) {
  const paths: Record<string, string> = {
    wave: "M0,40 Q25,10 50,40 T100,40 T150,40 T200,40 T250,40 T300,40 T350,40 T400,40 T450,40 T500,40 T550,40 T600,40 T650,40 T700,40 T750,40 T800,40 T850,40 T900,40 T950,40 T1000,40 T1050,40 T1100,40 T1150,40 T1200,40 T1250,40 T1300,40 T1350,40 T1400,40",
    curl: "M0,50 C50,10 100,90 150,50 S250,10 300,50 S400,90 450,50 S550,10 600,50 S700,90 750,50 S850,10 900,50 S1000,90 1050,50 S1150,10 1200,50 S1300,90 1350,50 S1450,10 1500,50",
    dots: "M0,40 L10,40 M20,40 L30,40 M40,40 L50,40 M60,40 L70,40 M80,40 L90,40 M100,40 L110,40 M120,40 L130,40 M140,40 L150,40",
  };
  return (
    <svg viewBox="0 0 1500 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block" aria-hidden="true">
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

function CodeBlock({ children, filename }: { children: string; filename?: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-surface-lighter border-b border-border">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-warm-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="text-[10px] font-mono text-text-muted">{filename}</span>
        </div>
      )}
      <pre className="code-block rounded-none border-0 m-0">
        <code dangerouslySetInnerHTML={{ __html: children }} />
      </pre>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold gradient-text">elk</span>
            <span className="text-sm font-medium text-text-secondary group-hover:text-primary-light transition-colors hidden sm:inline">
              components
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="nav-link">Features</a>
              <a href="#components" className="nav-link">Components</a>
              <a href="#icons" className="nav-link">Icons</a>
              <a href="#hooks" className="nav-link">Hooks</a>
              <a href="#quickstart" className="nav-link">Quick Start</a>
            </div>
            <Link
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="animate-slide-up">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/30 bg-primary/10 text-primary-light">
              v1.3.8 &middot; MIT License &middot; 3 Dependencies
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">React</span>{" "}
            <span className="text-text-primary">animation,</span>
            <br />
            <span className="text-text-primary">layout</span>{" "}
            <span className="text-text-primary">&amp;</span>{" "}
            <span className="gradient-text">styling</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed animate-slide-up text-balance" style={{ animationDelay: "0.2s" }}>
            Declarative motion, transitions, letter animations, and composable UI
            primitives with 205 built-in SVG icons. Powered by Motion and the
            Web Animations API. Fully typed for TypeScript.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#quickstart" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-surface font-bold text-base hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20">
              Get Started
            </a>
            <a href="#components" className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border text-text-secondary font-semibold text-base hover:border-primary/40 hover:text-text-primary transition-all text-center">
              Explore Components
            </a>
          </div>

          <div className="mt-14 sm:mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-xl bg-surface-light border border-border font-mono text-sm">
              <span className="text-warm-accent">$</span>
              <span className="text-text-secondary">npm install</span>
              <span className="text-primary-light font-semibold">elk-components</span>
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
              A batteries-included toolkit for building polished React interfaces
              with motion, structure, and style — all in one dependency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURES.map((f) => (
              <article key={f.title} className="feature-card">
                <span className="text-2xl sm:text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold mb-2 text-text-primary">{f.title}</h3>
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
              Up and running in{" "}
              <span className="gradient-text">seconds</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              Install, import, and start building — zero configuration required.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-3">
                1. Install
              </h3>
              <CodeBlock filename="terminal">
{`<span class="comment"># npm</span>
<span class="keyword">npm</span> install <span class="string">elk-components</span>

<span class="comment"># yarn</span>
<span class="keyword">yarn</span> add <span class="string">elk-components</span>

<span class="comment"># pnpm</span>
<span class="keyword">pnpm</span> add <span class="string">elk-components</span>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-3">
                2. Import &amp; Use
              </h3>
              <CodeBlock filename="App.tsx">
{`<span class="keyword">import</span> {
  Button, Text, Card, Avatar,
  Animation, Transition, LetterAnimation,
  Icon, Icons
} <span class="keyword">from</span> <span class="string">"elk-components"</span>;

<span class="keyword">export default function</span> <span class="component">App</span>() {
  <span class="keyword">return</span> (
    &lt;<span class="component">Card</span> <span class="prop">padding</span>=<span class="string">"lg"</span>&gt;
      &lt;<span class="component">Animation</span>
        <span class="prop">initial</span>={{ <span class="prop">opacity</span>: 0, <span class="prop">y</span>: 20 }}
        <span class="prop">animate</span>={{ <span class="prop">opacity</span>: 1, <span class="prop">y</span>: 0 }}
        <span class="prop">child</span>={() =&gt; (
          &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Hello, elk-components!"</span> <span class="prop">type</span>=<span class="string">"h1"</span> /&gt;
        )}
      /&gt;
      &lt;<span class="component">Avatar</span> <span class="prop">src</span>=<span class="string">"/user.jpg"</span> <span class="prop">size</span>=<span class="string">"lg"</span> /&gt;
      &lt;<span class="component">Button</span> <span class="prop">child</span>={() =&gt; &lt;<span class="component">Icon</span> <span class="prop">icon</span>={Icons.icon.ShoppingCart} /&gt;} /&gt;
    &lt;/<span class="component">Card</span>&gt;
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-sm font-bold text-primary-light uppercase tracking-wider mb-3">
                3. Animate text with one line
              </h3>
              <CodeBlock filename="Hero.tsx">
{`<span class="keyword">import</span> { LetterAnimation } <span class="keyword">from</span> <span class="string">"elk-components"</span>;

<span class="comment">// 20 built-in presets: bounceIn, glitch, elastic,</span>
<span class="comment">// typewriter, wave, spiral, and more</span>

&lt;<span class="component">LetterAnimation</span>
  <span class="prop">text</span>=<span class="string">"Welcome to elk-components"</span>
  <span class="prop">type</span>=<span class="string">"words"</span>
  <span class="prop">animation</span>=<span class="string">"bounceIn"</span>
  <span class="prop">size</span>=<span class="string">"3rem"</span>
  <span class="prop">stagger</span>={<span class="string">60</span>}
  <span class="prop">duration</span>={<span class="string">400</span>}
/&gt;`}
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
              Every component uses <span className="highlight-green">render props</span>,{" "}
              <span className="highlight-amber">typed CSS units</span>, and{" "}
              <span className="highlight-cyan">gesture passthrough</span> via the{" "}
              <code className="text-primary-light font-mono text-sm">gest</code> prop.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {COMPONENTS.map((c) => (
              <span key={c} className="component-badge">{c}</span>
            ))}
          </div>

          <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 gap-6 sm:gap-8">
            <article className="feature-card">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Animation
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                Dual-mode: <span className="highlight-green">Motion props</span> (initial, animate, whileHover) for declarative
                or <span className="highlight-amber">legacy Web Animations API</span> keyframes for imperative control.
                Both support gesture triggers and scroll-linked playback.
              </p>
              <CodeBlock>
{`<span class="component">Animation</span>
  <span class="prop">initial</span>={{ <span class="prop">opacity</span>: 0, <span class="prop">scale</span>: 0.8 }}
  <span class="prop">animate</span>={{ <span class="prop">opacity</span>: 1, <span class="prop">scale</span>: 1 }}
  <span class="prop">whileHover</span>={{ <span class="prop">scale</span>: 1.05 }}
  <span class="prop">whileTap</span>={{ <span class="prop">scale</span>: 0.95 }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">Button</span> /&gt;}
/>`}
              </CodeBlock>
            </article>

            <article className="feature-card">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warm-accent" />
                Transition
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                <span className="highlight-amber">13 built-in CSS effects</span> with gesture triggers or controlled via the{" "}
                <code className="text-primary-light font-mono text-xs">active</code> prop.
                Effects include fade, slide, zoom, flip, liquid, morph, and glide.
              </p>
              <CodeBlock>
{`<span class="component">Transition</span>
  <span class="prop">from</span>={() =&gt; &lt;<span class="component">LoginView</span> /&gt;}
  <span class="prop">to</span>={() =&gt; &lt;<span class="component">RegisterView</span> /&gt;}
  <span class="prop">effect</span>=<span class="string">"slide-left"</span>
  <span class="prop">duration</span>={<span class="string">300</span>}
  <span class="prop">gesture</span>=<span class="string">"click"</span>
/>`}
              </CodeBlock>
            </article>

            <article className="feature-card">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cool-accent" />
                SectionDivider
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                <span className="highlight-cyan">12 SVG variants</span> with continuous scroll animation, floating undulation,
                and gesture triggers. Each variant has a unique animation preset.
              </p>
              <CodeBlock>
{`<span class="component">SectionDivider</span>
  <span class="prop">variant</span>=<span class="string">"wave"</span>
  <span class="prop">animate</span>
  <span class="prop">float</span>
  <span class="prop">color</span>=<span class="string">"#22c55e"</span>
  <span class="prop">amplitude</span>={<span class="string">20</span>}
  <span class="prop">frequency</span>={<span class="string">4</span>}
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
                <code className="text-primary-light font-mono text-xs">useSyncExternalStore</code> integration.
                <span className="highlight-green">Cross-component state</span> without prop drilling or context providers.
              </p>
              <CodeBlock>
{`<span class="keyword">const</span> store = <span class="component">createStore</span>({ <span class="prop">count</span>: 0 });

<span class="keyword">function</span> <span class="component">Counter</span>() {
  <span class="keyword">const</span> { count } = <span class="component">useStore</span>(store);
  <span class="keyword">const</span> set = <span class="component">useSetState</span>(store);
  <span class="keyword">return</span> (
    &lt;<span class="component">Button</span>
      <span class="prop">child</span>={() =&gt; &lt;<span class="component">Text</span>
        <span class="prop">text</span>={\`Count: \${count}\`}
        <span class="prop">type</span>=<span class="string">"p"</span> /&gt;}
      <span class="prop">gest</span>={{ <span class="prop">onClick</span>: () =&gt;
        <span class="component">set</span>(p =&gt; ({ <span class="prop">count</span>: p.count + 1 }))
      }}
    /&gt;
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
              <span className="highlight-cyan">className</span> props for consistent styling.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {ICON_CATEGORIES.map((cat) => (
              <div key={cat.name} className="text-center p-4 rounded-xl border border-border bg-surface-card/50 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold gradient-text mb-1">{cat.count}</div>
                <div className="text-sm text-text-secondary">{cat.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <CodeBlock filename="icons.tsx">
{`<span class="keyword">import</span> { Icon, Icons } <span class="keyword">from</span> <span class="string">"elk-components"</span>;

<span class="comment">// Access icons via Icons.icon.* namespace</span>
&lt;<span class="component">Icon</span> <span class="prop">icon</span>={Icons.icon.Lock} <span class="prop">size</span>=<span class="string">"lg"</span> <span class="prop">color</span>=<span class="string">"white"</span> /&gt;
&lt;<span class="component">Icon</span> <span class="prop">icon</span>={Icons.icon.Heart} <span class="prop">size</span>={<span class="string">24</span>} <span class="prop">color</span>=<span class="string">"red"</span> /&gt;

<span class="comment">// Size presets: xs=12, sm=16, md=24, lg=32, xl=48</span>
<span class="comment">// Or pass a raw number for exact pixel sizing</span>
&lt;<span class="component">Icon</span> <span class="prop">icon</span>={Icons.icon.Search} <span class="prop">size</span>={<span class="string">40</span>} /&gt;`}
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
              Enhanced versions of React&apos;s core hooks plus a lightweight store
              and <span className="highlight-green">cross-component data primitives</span> for complex applications.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {HOOKS.map((h) => (
              <div key={h.name} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border bg-surface-card/40 hover:border-primary/20 transition-colors">
                <code className="shrink-0 text-primary-light font-mono text-sm font-bold mt-0.5">
                  {h.name}
                </code>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <CodeBlock filename="hooks.ts">
{`<span class="keyword">import</span> {
  useState, useRef, useEffect, useCallback,
  createStore, useStore, useSetState,
  useInstance, useComponentData,
  useStableCallback
} <span class="keyword">from</span> <span class="string">"elk-components/hooks"</span>;

<span class="comment">// Enhanced useState with reset() and get()</span>
<span class="keyword">const</span> count = <span class="component">useState</span>(<span class="string">0</span>);
count.set(<span class="string">1</span>);           <span class="comment">// set value</span>
count.get();            <span class="comment">// read without re-render</span>
count.reset();          <span class="comment">// back to 0</span>

<span class="comment">// Stable callback — identity never changes</span>
<span class="keyword">const</span> fn = <span class="component">useStableCallback</span>((data) =&gt; {
  console.log(data);
});

<span class="comment">// Cross-component data sharing</span>
<span class="keyword">const</span> { setData } = <span class="component">useInstance</span>(<span class="string">"sidebar"</span>);
<span class="keyword">const</span> width = <span class="component">useComponentData</span>&lt;number&gt;(
  <span class="string">"sidebar"</span>, <span class="string">"width"</span>
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
              Full TypeScript support with <span className="highlight-green">autocomplete for CSS units</span>,{" "}
              <span className="highlight-amber">enum sizing</span>, and{" "}
              <span className="highlight-cyan">gesture passthrough</span>.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            <article className="feature-card text-center">
              <div className="text-3xl mb-3">T</div>
              <h3 className="font-bold mb-2">Typed CSS Units</h3>
              <p className="text-text-secondary text-sm">
                Template literal types for gap, padding, and borderRadius.
                Autocomplete for <code className="text-primary-light text-xs font-mono">rem</code>,{" "}
                <code className="text-primary-light text-xs font-mono">px</code>,{" "}
                <code className="text-primary-light text-xs font-mono">em</code>.
              </p>
            </article>
            <article className="feature-card text-center">
              <div className="text-3xl mb-3">E</div>
              <h3 className="font-bold mb-2">Enum Sizing</h3>
              <p className="text-text-secondary text-sm">
                Badge, Card, Avatar, Icon — use string presets{" "}
                <code className="text-primary-light text-xs font-mono">&quot;xs&quot;</code> to{" "}
                <code className="text-primary-light text-xs font-mono">&quot;xl&quot;</code>{" "}
                mapped to internal size dictionaries.
              </p>
            </article>
            <article className="feature-card text-center">
              <div className="text-3xl mb-3">G</div>
              <h3 className="font-bold mb-2">Gesture Passthrough</h3>
              <p className="text-text-secondary text-sm">
                The <code className="text-primary-light text-xs font-mono">gest</code> prop accepts the full
                type for the underlying HTML element. Any native event works — click, focus, blur, keydown, and more.
              </p>
            </article>
          </div>

          <div className="mt-12">
            <CodeBlock filename="advanced-patterns.tsx">
{`<span class="comment">// Render props — every slot uses () =&gt; JSX</span>
&lt;<span class="component">Card</span>
  <span class="prop">padding</span>=<span class="string">"lg"</span>
  <span class="prop">radius</span>=<span class="string">"lg"</span>
  <span class="prop">shadow</span>
  <span class="prop">header</span>={() =&gt; &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Title"</span> <span class="prop">type</span>=<span class="string">"h2"</span> /&gt;}
  <span class="prop">body</span>={() =&gt; &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Content"</span> <span class="prop">type</span>=<span class="string">"p"</span> /&gt;}
/&gt;

<span class="comment">// Avatar — content priority: src &gt; icon &gt; fallback</span>
&lt;<span class="component">Avatar</span> <span class="prop">src</span>=<span class="string">"/user.jpg"</span> <span class="prop">size</span>=<span class="string">"lg"</span> /&gt;
&lt;<span class="component">Avatar</span> <span class="prop">icon</span>={Icons.icon.Lock} <span class="prop">size</span>=<span class="string">"md"</span> /&gt;
&lt;<span class="component">Avatar</span> <span class="prop">fallback</span>={() =&gt; &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"JD"</span> <span class="prop">type</span>=<span class="string">"p"</span> /&gt;} /&gt;

<span class="comment">// Gesture passthrough via gest</span>
&lt;<span class="component">Input</span>
  <span class="prop">gest</span>={{ <span class="prop">onChange</span>: (e) =&gt; setSearch(e.target.value) }}
/&gt;
&lt;<span class="component">Button</span>
  <span class="prop">gest</span>={{ <span class="prop">onClick</span>: submit, <span class="prop">disabled</span>: isLoading }}
/&gt;`}
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
            <a
              href="https://github.com/elktrumelk/elk-components"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border text-text-secondary font-semibold hover:border-primary/40 hover:text-text-primary transition-all text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 sm:py-12 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">elk</span>
            <span className="text-sm text-text-muted">components</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-sm text-text-muted">
            <a href="https://www.npmjs.com/package/elk-components" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              npm
            </a>
            <a href="https://github.com/elktrumelk/elk-components" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              GitHub
            </a>
            <span>v1.3.8</span>
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
