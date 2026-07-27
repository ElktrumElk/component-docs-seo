"use client";

import { Button, Text, Icon, Icons, Stack } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Render function for button content (arrow function returning JSX)" },
  { prop: "border", type: "string", required: false, description: "CSS border value, e.g. '1px solid rgba(34,197,94,0.3)'" },
  { prop: "borderRadius", type: "string", required: false, description: "CSS border radius" },
  { prop: "color", type: "string", required: false, description: "Text or background color" },
  { prop: "padding", type: "string", required: false, description: "Inner spacing using typed CSS units (rem/px/em)" },
  { prop: "width", type: "string", required: false, description: "Width" },
  { prop: "height", type: "string", required: false, description: "Height" },
  { prop: "className", type: "string", required: false, description: "Additional CSS class" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles for full customisation" },
  { prop: "gest", type: "HTMLAttributes<HTMLButtonElement>", required: false, description: "Native button attributes — onClick, disabled, type, etc." },
  { prop: "onFunc", type: "(self: _Button) => void", required: false, description: "Instance callback for imperative control" },
];

const notes = (
  <div className="feature-card mb-6">
    <h3 className="font-bold mb-2 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
      How Button works
    </h3>
    <p className="text-text-secondary text-sm leading-relaxed">
      Button is a <span className="highlight-green">styled div</span> that renders as a clickable element.
      Content is provided via the{" "}
      <code className="text-primary-light text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded">child</code> render
      prop. For click handlers and accessibility, use the{" "}
      <code className="text-warm-accent text-xs font-mono bg-warm-accent/10 px-1.5 py-0.5 rounded">gest</code> prop
      to pass native button events. For icon-only buttons, set{" "}
      <code className="text-cool-accent text-xs font-mono bg-cool-accent/10 px-1.5 py-0.5 rounded">borderRadius="50%"</code> for
      a circular shape.
    </p>
  </div>
);

export function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="A styled button with customizable appearance, border, padding, and gesture support. Ideal for actions, form submissions, and interactive elements. Use the gest prop for onClick handlers and accessibility attributes."
      props={props}
      example={`&lt;<span class="component">Button</span>
  <span class="prop">borderRadius</span>=<span class="string">"12px"</span>
  <span class="prop">padding</span>=<span class="string">".75rem 1.5rem"</span>
  <span class="prop">border</span>=<span class="string">"1px solid rgba(34,197,94,0.3)"</span>
  <span class="prop">style</span>={{ <span class="prop">background</span>: <span class="string">"linear-gradient(135deg, #22c55e, #16a34a)"</span> }}
  <span class="prop">child</span>={() =&gt; (
    &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Click Me"</span> <span class="prop">type</span>=<span class="string">"p"</span> <span class="prop">size</span>=<span class="string">".9rem"</span> <span class="prop">color</span>=<span class="string">"#0d0906"</span> /&gt;
  )}
  <span class="prop">gest</span>={{ <span class="prop">onClick</span>: () =&gt; console.log(<span class="string">"clicked"</span>) }}
/&gt;`}
      notes={notes}
    >
      <ExampleCard
        title="Gradient Buttons"
        description="Styled buttons with gradient backgrounds, rounded corners, and box shadows. Use border and style props for full visual control."
        code={`<span class="comment">// Green gradient primary button</span>
&lt;<span class="component">Button</span>
  <span class="prop">borderRadius</span>=<span class="string">"12px"</span>
  <span class="prop">padding</span>=<span class="string">".75rem 1.5rem"</span>
  <span class="prop">border</span>=<span class="string">"1px solid rgba(34,197,94,0.3)"</span>
  <span class="prop">style</span>={{ <span class="prop">background</span>: <span class="string">"linear-gradient(135deg, #22c55e, #16a34a)"</span> }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Get Started"</span> <span class="prop">type</span>=<span class="string">"p"</span> /&gt;}
/&gt;`}
      >
        <Stack direction="row" gap="1rem" align="center" child={() => (
          <>
            <Button
              borderRadius="12px"
              padding=".75rem 1.5rem"
              border="1px solid rgba(34,197,94,0.3)"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                boxShadow: "0 4px 20px rgba(34,197,94,0.2)",
                cursor: "pointer",
              }}
              child={() => (
                <Text text="Get Started" type="p" size=".9rem" color="#0d0906" style={{ fontWeight: 700 }} />
              )}
            />
            <Button
              borderRadius="12px"
              padding=".75rem 1.5rem"
              border="1px solid rgba(163,230,53,0.3)"
              style={{
                background: "linear-gradient(135deg, #a3e635, #65a30d)",
                boxShadow: "0 4px 20px rgba(163,230,53,0.2)",
                cursor: "pointer",
              }}
              child={() => (
                <Text text="Learn More" type="p" size=".9rem" color="#0d0906" style={{ fontWeight: 700 }} />
              )}
            />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Button with Icon"
        description="Combine buttons with icons for visual context. Use Stack with direction='row' to align icon and text horizontally."
        code={`<span class="comment">// Button with icon and text</span>
&lt;<span class="component">Button</span>
  <span class="prop">borderRadius</span>=<span class="string">"10px"</span>
  <span class="prop">padding</span>=<span class="string">".65rem 1.25rem"</span>
  <span class="prop">border</span>=<span class="string">"1px solid rgba(34,197,94,0.3)"</span>
  <span class="prop">style</span>={{ <span class="prop">background</span>: <span class="string">"rgba(34,197,94,0.1)"</span> }}
  <span class="prop">child</span>={() =&gt; (
    &lt;<span class="component">Stack</span> <span class="prop">direction</span>=<span class="string">"row"</span> <span class="prop">gap</span>=<span class="string">".5rem"</span> <span class="prop">child</span>={() =&gt; (
      &lt;&gt;
        &lt;<span class="component">Icon</span> <span class="prop">icon</span>={Icons.icon.Star} <span class="prop">size</span>=<span class="string">"xs"</span> <span class="prop">color</span>=<span class="string">"#22c55e"</span> /&gt;
        &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Premium"</span> <span class="prop">type</span>=<span class="string">"p"</span> <span class="prop">color</span>=<span class="string">"#22c55e"</span> /&gt;
      &lt;/&gt;
    )} /&gt;
  )}
/&gt;`}
      >
        <Stack direction="row" gap="1rem" align="center" child={() => (
          <>
            <Button
              borderRadius="10px"
              padding=".65rem 1.25rem"
              border="1px solid rgba(34,197,94,0.3)"
              style={{
                background: "rgba(34,197,94,0.1)",
                cursor: "pointer",
              }}
              child={() => (
                <Stack direction="row" gap=".5rem" align="center" child={() => (
                  <>
                    <Icon icon={Icons.icon.Star} size="xs" color="#22c55e" />
                    <Text text="Premium" type="p" size=".85rem" color="#22c55e" style={{ fontWeight: 600 }} />
                  </>
                )} />
              )}
            />
            <Button
              borderRadius="10px"
              padding=".65rem 1.25rem"
              border="1px solid rgba(245,158,11,0.3)"
              style={{
                background: "rgba(245,158,11,0.1)",
                cursor: "pointer",
              }}
              child={() => (
                <Stack direction="row" gap=".5rem" align="center" child={() => (
                  <>
                    <Icon icon={Icons.icon.Heart} size="xs" color="#f59e0b" />
                    <Text text="Favorite" type="p" size=".85rem" color="#f59e0b" style={{ fontWeight: 600 }} />
                  </>
                )} />
              )}
            />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Icon-Only Button"
        description="Circular button with just an icon. Set borderRadius='50%' for a perfect circle."
        code={`<span class="comment">// Circular icon button</span>
&lt;<span class="component">Button</span>
  <span class="prop">borderRadius</span>=<span class="string">"50%"</span>
  <span class="prop">padding</span>=<span class="string">".75rem"</span>
  <span class="prop">border</span>=<span class="string">"1px solid rgba(34,197,94,0.3)"</span>
  <span class="prop">style</span>={{ <span class="prop">background</span>: <span class="string">"rgba(34,197,94,0.1)"</span> }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">Icon</span> <span class="prop">icon</span>={Icons.icon.Zap} <span class="prop">size</span>=<span class="string">"sm"</span> <span class="prop">color</span>=<span class="string">"#22c55e"</span> /&gt;}
/&gt;`}
      >
        <Stack direction="row" gap="1rem" align="center" child={() => (
          <>
            <Button
              borderRadius="50%"
              padding=".75rem"
              border="1px solid rgba(34,197,94,0.3)"
              style={{ background: "rgba(34,197,94,0.1)", cursor: "pointer" }}
              child={() => <Icon icon={Icons.icon.Zap} size="sm" color="#22c55e" />}
            />
            <Button
              borderRadius="50%"
              padding=".75rem"
              border="1px solid rgba(245,158,11,0.3)"
              style={{ background: "rgba(245,158,11,0.1)", cursor: "pointer" }}
              child={() => <Icon icon={Icons.icon.Check} size="sm" color="#f59e0b" />}
            />
            <Button
              borderRadius="50%"
              padding=".75rem"
              border="1px solid rgba(239,68,68,0.3)"
              style={{ background: "rgba(239,68,68,0.1)", cursor: "pointer" }}
              child={() => <Icon icon={Icons.icon.Close} size="sm" color="#ef4444" />}
            />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Button with Gesture Handler"
        description="Use the gest prop to attach click handlers, disabled states, and other native button events. The gest prop is typed to HTMLButtonElement."
        code={`<span class="comment">// Button with onClick via gest prop</span>
&lt;<span class="component">Button</span>
  <span class="prop">borderRadius</span>=<span class="string">"14px"</span>
  <span class="prop">padding</span>=<span class="string">".85rem 2rem"</span>
  <span class="prop">border</span>=<span class="string">"1px solid rgba(245,158,11,0.3)"</span>
  <span class="prop">style</span>={{ <span class="prop">background</span>: <span class="string">"linear-gradient(135deg, #f59e0b, #d97706)"</span> }}
  <span class="prop">child</span>={() =&gt; &lt;<span class="component">Text</span> <span class="prop">text</span>=<span class="string">"Click Me"</span> <span class="prop">type</span>=<span class="string">"p"</span> <span class="prop">color</span>=<span class="string">"#0d0906"</span> /&gt;}
  <span class="prop">gest</span>={{ <span class="prop">onClick</span>: () =&gt; alert(<span class="string">"clicked!"</span>) }}
/&gt;`}
      >
        <Button
          borderRadius="14px"
          padding=".85rem 2rem"
          border="1px solid rgba(245,158,11,0.3)"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            boxShadow: "0 4px 24px rgba(245,158,11,0.2)",
            cursor: "pointer",
          }}
          child={() => (
            <Stack direction="row" gap=".5rem" align="center" child={() => (
              <>
                <Icon icon={Icons.icon.Zap} size="sm" color="#0d0906" />
                <Text text="Click Me" type="p" size=".9rem" color="#0d0906" style={{ fontWeight: 700 }} />
              </>
            )} />
          )}
          gest={{ onClick: () => alert("Button clicked!") }}
        />
      </ExampleCard>
    </ComponentPage>
  );
}
