"use client";

import { ComponentPage } from "@/components/docs/shared/ComponentPage";
import { ExampleCard } from "@/components/docs/shared/ExampleCard";
import { Gap, Stack, Button, Text } from "elk-components";

const props = [
  { prop: "width", type: "string", required: false, description: "CSS width" },
  { prop: "height", type: "string", required: false, description: "CSS height" },
  { prop: "flex", type: "string", required: false, description: "CSS flex value" },
];

const basicExample = `<Stack direction="row" child={() => (
  <>
    <Button child={() => <Text text="Left" type="p" />} />
    <Gap flex="1" />
    <Button child={() => <Text text="Right" type="p" />} />
  </>
)} />`;

export function GapPage() {
  return (
    <ComponentPage
      title="Gap"
      description="Empty spacer div for spacing between sibling elements."
      props={props}
      example={basicExample}
    >
      <ExampleCard
        title="Basic Usage"
        description="Gap pushes siblings apart with flex='1'."
        code={basicExample}
      >
        <Stack direction="row" child={() => (
          <>
            <Button child={() => <Text text="Left" type="p" />} />
            <Gap flex="1" />
            <Button child={() => <Text text="Right" type="p" />} />
          </>
        )} />
      </ExampleCard>
    </ComponentPage>
  );
}
