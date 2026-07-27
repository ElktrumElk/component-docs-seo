"use client";

import { Stack, Text, Badge } from "elk-components";
import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";

const props = [
  { prop: "child", type: "ElementType", required: false, description: "Render function for stack children" },
  { prop: "direction", type: '"row" | "column"', required: false, description: "Flex direction" },
  { prop: "gap", type: "string", required: false, description: "Spacing between children" },
  { prop: "align", type: "string", required: false, description: "Cross-axis alignment" },
  { prop: "justify", type: "string", required: false, description: "Main-axis alignment" },
  { prop: "wrap", type: "string", required: false, description: "Whether children wrap" },
  { prop: "width", type: "string", required: false, description: "Width" },
  { prop: "height", type: "string", required: false, description: "Height" },
  { prop: "padding", type: "string", required: false, description: "Inner spacing" },
  { prop: "margin", type: "string", required: false, description: "Outer spacing" },
  { prop: "style", type: "CSSProperties", required: false, description: "Inline styles" },
  { prop: "className", type: "string", required: false, description: "CSS class" },
  { prop: "gest", type: "object", required: false, description: "Gesture handlers" },
];

function ColorBox({ color, label }: { color: string; label: string }) {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "8px",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text text={label} type="p" size=".7rem" color="#fff" style={{ fontWeight: 600 }} />
    </div>
  );
}

export function StackPage() {
  return (
    <ComponentPage
      title="Stack"
      description="A flexbox container for creating row or column layouts with consistent spacing, alignment, and responsive wrapping."
      props={props}
      example={`<Stack
  direction="row"
  gap="1rem"
  align="center"
  child={() => (
    <>
      <div style={{ width: 60, height: 60, background: "#3b82f6", borderRadius: 8 }} />
      <div style={{ width: 60, height: 60, background: "#22c55e", borderRadius: 8 }} />
      <div style={{ width: 60, height: 60, background: "#a855f7", borderRadius: 8 }} />
    </>
  )}
/>`}
    >
      <ExampleCard
        title="Row Layout"
        description="Arrange children horizontally in a row with consistent gap spacing."
        code={`<Stack
  direction="row"
  gap="1rem"
  align="center"
  child={() => (
    <>
      <ColorBox color="#3b82f6" label="A" />
      <ColorBox color="#22c55e" label="B" />
      <ColorBox color="#a855f7" label="C" />
    </>
  )}
/>`}
      >
        <Stack direction="row" gap="1rem" align="center" child={() => (
          <>
            <ColorBox color="rgba(59,130,246,0.3)" label="A" />
            <ColorBox color="rgba(34,197,94,0.3)" label="B" />
            <ColorBox color="rgba(168,85,247,0.3)" label="C" />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Column Layout"
        description="Stack children vertically with controlled spacing between them."
        code={`<Stack
  direction="column"
  gap=".75rem"
  child={() => (
    <>
      <div style={{ height: 40, background: "#f59e0b", borderRadius: 6 }} />
      <div style={{ height: 40, background: "#ec4899", borderRadius: 6 }} />
      <div style={{ height: 40, background: "#06b6d4", borderRadius: 6 }} />
    </>
  )}
/>`}
      >
        <Stack direction="column" gap=".75rem" child={() => (
          <>
            <div style={{ height: "40px", background: "rgba(245,158,11,0.3)", borderRadius: "6px", border: "1px solid rgba(245,158,11,0.4)" }} />
            <div style={{ height: "40px", background: "rgba(236,72,153,0.3)", borderRadius: "6px", border: "1px solid rgba(236,72,153,0.4)" }} />
            <div style={{ height: "40px", background: "rgba(6,182,212,0.3)", borderRadius: "6px", border: "1px solid rgba(6,182,212,0.4)" }} />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="With Gap"
        description="Control spacing between children using the gap prop."
        code={`<Stack
  direction="row"
  gap="2rem"
  align="center"
  child={() => (
    <>
      <Text text="Spaced" type="p" size=".9rem" color="#fff" />
      <Text text="Out" type="p" size=".9rem" color="#fff" />
      <Text text="Elements" type="p" size=".9rem" color="#fff" />
    </>
  )}
/>`}
      >
        <Stack direction="column" gap="1rem" child={() => (
          <>
            <Stack direction="row" gap=".5rem" align="center" child={() => (
              <>
                <Badge text="gap: .5rem" size="sm" color="rgba(255,255,255,0.5)" backgroundColor="rgba(255,255,255,0.06)" />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }} />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }} />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }} />
              </>
            )} />
            <Stack direction="row" gap="1.5rem" align="center" child={() => (
              <>
                <Badge text="gap: 1.5rem" size="sm" color="rgba(255,255,255,0.5)" backgroundColor="rgba(255,255,255,0.06)" />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }} />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }} />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }} />
              </>
            )} />
            <Stack direction="row" gap="3rem" align="center" child={() => (
              <>
                <Badge text="gap: 3rem" size="sm" color="rgba(255,255,255,0.5)" backgroundColor="rgba(255,255,255,0.06)" />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(168,85,247,0.3)", border: "1px solid rgba(168,85,247,0.4)" }} />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(168,85,247,0.3)", border: "1px solid rgba(168,85,247,0.4)" }} />
                <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: "rgba(168,85,247,0.3)", border: "1px solid rgba(168,85,247,0.4)" }} />
              </>
            )} />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Alignment"
        description="Control how children are aligned along the cross axis."
        code={`<Stack
  direction="row"
  gap="1rem"
  align="center"
  justify="space-between"
  child={() => (
    <>
      <Text text="Left" type="p" size=".9rem" color="#fff" />
      <Text text="Center" type="p" size=".9rem" color="#fff" />
      <Text text="Right" type="p" size=".9rem" color="#fff" />
    </>
  )}
/>`}
      >
        <Stack direction="column" gap="1rem" child={() => (
          <>
            <Stack direction="row" gap="1rem" align="flex-start" child={() => (
              <>
                <Badge text="flex-start" size="sm" color="rgba(255,255,255,0.5)" backgroundColor="rgba(255,255,255,0.06)" />
                <div style={{ width: "50px", height: "30px", borderRadius: "4px", background: "rgba(239,68,68,0.3)", border: "1px solid rgba(239,68,68,0.4)" }} />
                <div style={{ width: "50px", height: "50px", borderRadius: "4px", background: "rgba(239,68,68,0.3)", border: "1px solid rgba(239,68,68,0.4)" }} />
                <div style={{ width: "50px", height: "35px", borderRadius: "4px", background: "rgba(239,68,68,0.3)", border: "1px solid rgba(239,68,68,0.4)" }} />
              </>
            )} />
            <Stack direction="row" gap="1rem" align="center" child={() => (
              <>
                <Badge text="center" size="sm" color="rgba(255,255,255,0.5)" backgroundColor="rgba(255,255,255,0.06)" />
                <div style={{ width: "50px", height: "30px", borderRadius: "4px", background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }} />
                <div style={{ width: "50px", height: "50px", borderRadius: "4px", background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }} />
                <div style={{ width: "50px", height: "35px", borderRadius: "4px", background: "rgba(99,102,241,0.3)", border: "1px solid rgba(99,102,241,0.4)" }} />
              </>
            )} />
            <Stack direction="row" gap="1rem" align="flex-end" child={() => (
              <>
                <Badge text="flex-end" size="sm" color="rgba(255,255,255,0.5)" backgroundColor="rgba(255,255,255,0.06)" />
                <div style={{ width: "50px", height: "30px", borderRadius: "4px", background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }} />
                <div style={{ width: "50px", height: "50px", borderRadius: "4px", background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }} />
                <div style={{ width: "50px", height: "35px", borderRadius: "4px", background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }} />
              </>
            )} />
          </>
        )} />
      </ExampleCard>

      <ExampleCard
        title="Responsive Wrap"
        description="Children wrap to new lines when space is limited."
        code={`<Stack
  direction="row"
  gap=".75rem"
  wrap={true}
  child={() => (
    <>
      <Badge text="React" size="sm" />
      <Badge text="TypeScript" size="sm" />
      <Badge text="Animation" size="sm" />
      <Badge text="Icons" size="sm" />
      <Badge text="Hooks" size="sm" />
    </>
  )}
/>`}
      >
        <Stack direction="row" gap=".75rem" wrap={true} child={() => (
          <>
            <Badge text="React" size="sm" color="#fff" backgroundColor="rgba(59,130,246,0.3)" />
            <Badge text="TypeScript" size="sm" color="#fff" backgroundColor="rgba(34,197,94,0.3)" />
            <Badge text="Animation" size="sm" color="#fff" backgroundColor="rgba(168,85,247,0.3)" />
            <Badge text="Icons" size="sm" color="#fff" backgroundColor="rgba(245,158,11,0.3)" />
            <Badge text="Hooks" size="sm" color="#fff" backgroundColor="rgba(236,72,153,0.3)" />
            <Badge text="Layout" size="sm" color="#fff" backgroundColor="rgba(6,182,212,0.3)" />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
