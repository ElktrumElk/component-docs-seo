# elk-components — AI Rules & Guidelines

> Strict rules for AI agents generating code using elk-components. Follow these rules EXACTLY.
> Version: 1.3.9 | License: MIT | Author: Elkanah Cole (elktrumelk)

---

## 🔴 CARDINAL RULE: Use `child` prop, NOT `children`

Every content slot in EVERY elk-components component uses the `child` prop as a **render function** (`() => JSX.Element`). This is THE most common mistake AI agents make.

```tsx
// ✅ CORRECT — arrow function returning JSX
<Stack child={() => <div>Hello</div>} />
<Center child={() => <Text text="Hi" type="p" />} />

// ❌ WRONG — passing JSX directly (will NOT render)
<Center child={<Text text="Hi" type="p" />} />

// ❌ WRONG — using children prop (does NOT exist)
<Stack><div>Hello</div></Stack>
<Center><Text text="Hi" /></Center>
```

**Why?** elk-components uses render props for lazy initialization — children only mount when the parent renders.

---

## 🔴 RULE 2: Native events go in `gest`, NOT directly on the element

```tsx
// ✅ CORRECT
<Button
  gest={{ onClick: () => alert("clicked"), disabled: isLoading, type: "submit" }}
  child={() => <Text text="Submit" />}
/>

<Input gest={{ onChange: (e) => setValue(e.target.value), onFocus: () => setIsFocused(true) }} />

// ❌ WRONG — direct event props do NOT work
<Button onClick={() => alert("clicked")} child={() => <Text text="Click" />} />
```

---

## 🔴 RULE 3: Instance access via `onFunc`, NOT refs

```tsx
// ✅ CORRECT
<Animation
  onFunc={(self) => { animationRef.current = self; }}
  child={() => <div>Animate me</div>}
/>

// Later: animationRef.current.play?.()
```

---

## 🔴 RULE 4: CSS unit props use string literals

```tsx
<Stack gap="1rem" padding="1.5rem" />
<Button borderRadius="12px" padding="8px 16px" />
```

---

## Complete Component API Reference

### Layout Components

#### Center
Centers its child both horizontally and vertically.
```tsx
<Center child={() => <Text text="Centered" type="h1" />} />
```

#### Stack
Flexbox stack — vertical or horizontal layout.
```tsx
<Stack direction="column" gap="1rem" child={() => (
  <>
    <div>Item 1</div>
    <div>Item 2</div>
  </>
)} />
<Stack direction="row" gap="16px" child={() => <Text text="Row item" />} />
```
Props: `direction: "row" | "column"`, `gap: string`, `padding: string`, `align: string`, `justify: string`

#### Container
Responsive container with max-width.
```tsx
<Container maxWidth="1200px" padding="20px" child={() => <Text text="Content" />} />
```

#### Center
```tsx
<Center child={() => <Text text="Centered" type="h1" />} />
```

#### Padding
```tsx
<Padding all="1rem" child={() => <Text text="Padded" />} />
```
Props: `all: string`, `x: string`, `y: string`, `top: string`, `right: string`, `bottom: string`, `left: string`

#### Gap
```tsx
<Gap size="1rem" />
```

#### GridView
```tsx
<GridView columns={3} gap="16px" child={() => (
  <>
    <Card padding="md" child={() => <Text text="Cell 1" />} />
    <Card padding="md" child={() => <Text text="Cell 2" />} />
  </>
)} />
```

#### ScrollView
```tsx
<ScrollView height="400px" child={() => (
  <Text text="Scrollable content" type="body" />
)} />
```

#### PageScrollView
```tsx
<PageScrollView child={() => <Text text="Page content" />} />
```

### Content Components

#### Text
```tsx
<Text text="Hello World" type="h1" />
<Text text="Subtitle" type="h2" color="#a3a3a3" />
<Text text="Body content" type="body" />
<Text text="Label" type="overline" weight="bold" />
```
Props: `text: string`, `type: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "overline"`, `color: string`, `weight: string`, `size: string`, `align: "left" | "center" | "right"`, `lineHeight: string`, `letterSpacing: string`

#### Card
```tsx
<Card padding="lg" glass child={() => (
  <Text text="Card content" type="body" />
)} />
```
Props: `padding: string`, `radius: string`, `glass: boolean`, `backgroundColor: string`, `borderColor: string`, `width: string`, `header: ElementType`, `body: ElementType`, `footer: ElementType`

#### Badge
```tsx
<Badge text="Active" variant="success" />
<Badge text="Pending" variant="warning" size="sm" />
```
Props: `text: string`, `variant: "primary" | "success" | "warning" | "error" | "info"`, `size: "sm" | "md" | "lg"`

#### Divider
```tsx
<Divider variant="wave" />
<Divider variant="curl" />
<Divider variant="dots" />
<Divider variant="line" />
```

#### SectionDivider
```tsx
<SectionDivider variant="wave" animate float color="#22c55e" amplitude={20} frequency={4} />
```

#### Image
```tsx
<Image src="/photo.jpg" alt="Description" width="100%" child={() => <Text text="Caption" />} />
```

#### Span
Inline layout wrapper.
```tsx
<Span display="inline-flex" gap="8px" child={() => (
  <>
    <Badge text="Tag 1" variant="primary" />
    <Badge text="Tag 2" variant="info" />
  </>
)} />
```

#### Example
```tsx
<Example title="Usage" child={() => <Text text="Demo content" />} />
```

### Forms & Actions

#### Button
```tsx
<Button
  borderRadius="12px"
  padding="12px 24px"
  background="rgba(34,197,94,0.15)"
  color="#4ade80"
  hover={{ background: "rgba(34,197,94,0.25)" }}
  tap={{ scale: 0.97 }}
  gest={{ onClick: () => console.log("clicked"), disabled: false, type: "button" }}
  child={() => <Text text="Click Me" />}
/>
```
Props: `borderRadius: string`, `padding: string`, `background: string`, `color: string`, `border: string`, `fontSize: string`, `fontWeight: string`, `gap: string`, `hover: object`, `tap: object`, `disabled: boolean`, `gest: HTMLButtonElement events`

#### IconButton
```tsx
<IconButton
  icon={Icons.icon.Heart}
  size={24}
  gest={{ onClick: () => toggle() }}
/>
```

#### TextButton
```tsx
<TextButton gest={{ onClick: () => console.log("clicked") }} child={() => <Text text="Link style" />} />
```

#### Input
```tsx
<Input
  label="Email"
  placeholder="you@example.com"
  type="email"
  value={email}
  onChange={setEmail}
  gest={{ onFocus: () => setIsFocused(true) }}
/>
```
Props: `value: string`, `onChange: (value: string) => void`, `placeholder: string`, `label: string`, `error: string`, `type: "text" | "password" | "email" | "number"`

### Navigation

#### Tab / TabView
```tsx
<TabView defaultActive={0} child={() => (
  <>
    <Tab label="Overview" child={() => <Text text="Overview content" type="body" />} />
    <Tab label="API" child={() => <Text text="API docs" type="body" />} />
  </>
)} />
```

#### List / ListView / ListMenu
```tsx
<List child={() => <Text text="Item" />} />
<ListView items={data} renderItem={(item) => <Text text={item.title} type="body" />} />
<ListMenu items={menuItems} onSelect={(item) => console.log(item)} />
```

#### Tiles
```tsx
<Tiles columns={3} gap="16px" child={() => (
  <>
    <Card padding="md" child={() => <Text text="Tile 1" />} />
    <Card padding="md" child={() => <Text text="Tile 2" />} />
    <Card padding="md" child={() => <Text text="Tile 3" />} />
  </>
)} />
```

#### Header
```tsx
<Header brand="My App" links={[{ label: "Home", href: "/" }, { label: "Docs", href: "/docs" }]} />
```

#### Navigator
```tsx
<Navigator routes={routes} defaultRoute="/home" child={() => <Text text="Page" />} />
```

### Overlays

#### BottomModal
```tsx
<BottomModal show={isOpen} onClose={() => setIsOpen(false)} child={() => (
  <Text text="Modal content" type="body" />
)} />
```

#### SidePanel
```tsx
<SidePanel show={isOpen} onClose={() => setIsOpen(false)} side="right" child={() => (
  <Text text="Panel content" />
)} />
```

#### Panel (collapsible)
```tsx
<Panel title="Details" defaultOpen child={() => <Text text="Panel content" type="body" />} />
```

#### Reabon
```tsx
<Reabon child={() => <div>Content</div>} />
```

### Media & Icons

#### Avatar
```tsx
<Avatar src="/user.jpg" size="lg" presence="online" />
<Avatar src="/user.jpg" size="md" presence="busy" borderRadius="50%" />
```
Props: `src: string`, `alt: string`, `size: "xs" | "sm" | "md" | "lg" | "xl"`, `presence: "online" | "offline" | "away" | "busy"`, `borderRadius: string`

#### Icon
```tsx
import { Icon, Icons } from "elk-components";
<Icon icon={Icons.icon.Home} size={24} color="#4ade80" />
<Icon icon={Icons.icon.Heart} size={20} />
<Icon icon={Icons.icon.ArrowRight} />
```

#### IconNetwork
```tsx
<IconNetwork network="ethereum" size={24} />
<IconNetwork network="solana" size={24} />
```

### Animation

#### Animation (Dual-Mode)
Two modes auto-detected by which props you pass:

**Motion Mode** (pass motion props):
```tsx
<Animation
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  layout
  child={() => <div>Animated content</div>}
/>
```
Props: `initial: object`, `animate: object`, `exit: object`, `whileHover: object`, `whileTap: object`, `whileInView: object`, `transition: object`, `variants: object`, `layout: boolean | "position" | "size"`, `viewport: { once?: boolean, amount?: number }`

**Legacy Mode** (no motion props — uses Web Animations API):
```tsx
<Animation
  isAutomatic
  duration={600}
  easing="ease-out"
  delay={0}
  iterations={Infinity}
  direction="alternate"
  fill="forwards"
  gesture="click"
  keyframes={[
    { opacity: 0, transform: "translateY(10px)" },
    { opacity: 1, transform: "translateY(0)" },
  ]}
  child={() => <div>Animated</div>}
/>
```
Props: `isAutomatic: boolean`, `duration: number`, `easing: string`, `delay: number`, `iterations: number | Infinity`, `direction: "normal" | "reverse" | "alternate"`, `fill: FillMode`, `gesture: "click" | "hover" | "focus" | "scroll" | "none"`, `keyframes: array | object`

#### Transition
CSS enter/exit transitions.
```tsx
<Transition type="slide-up" show={isVisible} duration={300} child={() => (
  <div>I transition in/out</div>
)} />
```
Props: `type: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "flip" | "rotate" | "blur" | "bounce" | "elastic" | "swing" | "wobble"`, `show: boolean`, `duration: number`, `delay: number`, `easing: string`

#### LetterAnimation
Character-by-character text animation with 20 built-in presets.
```tsx
<LetterAnimation
  text="Welcome"
  type="words"
  animation="bounceIn"
  size="3rem"
  stagger={60}
  duration={400}
/>
```
Props: `text: string`, `type: "characters" | "words" | "lines"`, `animation: "bounceIn" | "glitch" | "elastic" | "typewriter" | "wave" | "spiral" | "flip" | "rotate" | "scale" | "fade" | "slide" | "blur" | "glow" | "shake" | "swing" | "pulse" | "rubberBand" | "jello" | "heartBeat" | "flash"`, `size: string`, `stagger: number`, `duration: number`, `delay: number`

### Semantic Components

#### Section
```tsx
<Section title="Features" id="features" divider="wave" child={() => (
  <Text text="Section content" type="body" />
)} />
```

#### Article
```tsx
<Article title="Blog Post" date="2024-01-01" child={() => <Text text="Content" type="body" />} />
```

## Hooks

```tsx
import { useTheme, useBreakpoint, useMediaQuery, useReducedMotion } from "elk-components";

const theme = useTheme();          // { theme, colors, fonts }
const bp = useBreakpoint();        // "xs" | "sm" | "md" | "lg" | "xl"
const isMobile = useMediaQuery("(max-width: 640px)");
const prefersReduced = useReducedMotion();

// Internal hooks
import { createStore, useStore, useSetState } from "elk-components";
const store = createStore({ count: 0 });
const { count } = useStore(store);
const set = useSetState(store);
```

## Icons

```tsx
import { Icon, Icons } from "elk-components";

// Access icons via Icons.icon.* namespace
<Icon icon={Icons.icon.Home} size={24} color="white" />
<Icon icon={Icons.icon.Settings} size="md" />
<Icon icon={Icons.icon.Search} />
<Icon icon={Icons.icon.Heart} />
<Icon icon={Icons.icon.Star} />
<Icon icon={Icons.icon.ShoppingCart} />
<Icon icon={Icons.icon.User} />
<Icon icon={Icons.icon.ArrowRight} />
```

205 icons across 12 categories: Navigation, Actions, Communication, Social, Media, Status, Commerce, Time, Users, Layout, Code, Misc.

## Common AI Mistakes

1. **WRONG:** `<Stack><div>content</div></Stack>` — **CORRECT:** `<Stack child={() => <div>content</div>} />`
2. **WRONG:** `<Button onClick={handler} />` — **CORRECT:** `<Button gest={{ onClick: handler }} child={() => <Text text="..." />} />`
3. **WRONG:** `<Center child={<Text text="x" />} />` — **CORRECT:** `<Center child={() => <Text text="x" />} />`
4. **WRONG:** `<Animation child={<div>x</div>} />` — **CORRECT:** `<Animation child={() => <div>x</div>} />`
5. **WRONG:** Using refs for Animation control — **CORRECT:** Use `onFunc` callback
6. **WRONG:** Importing from wrong path — **CORRECT:** Import everything from `"elk-components"`

## Links
- npm: https://www.npmjs.com/package/elk-components
- GitHub: https://github.com/ElktrumElk/components
- Docs: https://elk-components.dev/docs
- Full reference: https://elk-components.dev/llms-full.txt
