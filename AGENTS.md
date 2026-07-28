<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# elk-components Docs — AI Agent Rules

This is the documentation site for **elk-components** (v^1.3.13), a React animation/layout/styling toolkit. The site itself is built with Next.js 16.2 + Tailwind CSS 4.

## 🚨 Critical: elk-components Library Patterns

When writing example code for documentation pages, follow these rules:

### 1. `child` render-prop (NEVER `children`)

Every elk-components component uses the `child` prop as an **arrow function returning JSX**. This is the #1 mistake.

```tsx
// ✅ CORRECT
<Stack child={() => <div>Hello</div>} />
<Animation child={() => <div>Animate me</div>} />
<Button child={() => <Text text="Click" type="body" />} />

// ❌ WRONG — these will NOT render
<Stack><div>Hello</div></Stack>
<Center child={<Text text="Hi" type="p" />} />
```

### 2. `gest` prop for native events

Native DOM events go in the `gest` prop, NOT as direct props.

```tsx
// ✅ CORRECT
<Button gest={{ onClick: () => alert("hi"), disabled: false }} child={() => <Text text="Submit" />} />

// ❌ WRONG
<Button onClick={() => alert("hi")} child={() => <Text text="Submit" />} />
```

### 3. `onFunc` for imperative access

```tsx
<Animation onFunc={(self) => { ref.current = self; }} child={() => <div>x</div>} />
ref.current?.play?.();
```

### 4. No `className` or `children`

Components don't accept `className` or `children` — only the `child` render-prop and CSS shorthand props.

---

## 📁 Codebase Structure

```
app/
  page.tsx              — Homepage
  layout.tsx            — Root layout (metadata, JSON-LD)
  globals.css           — Theme (dark brown), code syntax highlighting classes
  [slug]/page.tsx       — Dynamic doc route (client component renders 1 of 44 pages)
  [slug]/not-found.tsx  — 404 for unknown slugs
  docs/
    layout.tsx          — Server component -> DocsShell
    page.tsx            — Redirects /docs -> /docs/overview
components/
  docs/
    Sidebar.tsx         — Nav with Link href, active state via usePathname
    DocsShell.tsx       — Client shell (sidebar + top bar + content slot)
    pages/              — 46 individual doc page components (all "use client")
    shared/
      CodeBlock.tsx     — Plain-text code display (renders string as-is)
      ComponentPage.tsx — Reusable layout for component docs
      ExampleCard.tsx   — Interactive example wrapper
      PropsTable.tsx    — Component props reference
public/
  llms.txt              — AI site overview
  llms-full.txt         — Full doc dump for AI
  ai-rules.md           — Strict AI usage rules
  .well-known/agent-skills/index.json
```

## 📝 Code Example Guidelines

- **CodeBlock** renders strings as plain text — no syntax highlighting
- **HighlightedCode** (install.tsx only) uses `dangerouslySetInnerHTML` with `<span class="keyword">` etc.
- Code syntax classes: `.keyword` (green), `.string` (amber), `.component` (cyan), `.prop` (pink), `.comment` (brown italic)
- Write examples as raw strings, NOT JSX components
- Version strings: `v1.3.9` everywhere

## 🧭 Routing

- `/docs` redirects to `/docs/overview`
- `/docs/[slug]` renders the matching page component or a 404
- Sidebar uses `<Link href="/docs/SLUG">` for navigation
- "See Also" links use `<Link>` from `next/link`

## 🔗 External References

- Library npm: `elk-components` ^1.3.13
- Docs URL: https://elk-components.dev
- Domain author: Elkanah Cole (elktrumelk)
