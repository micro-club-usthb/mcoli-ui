import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "floating-label-input-demo",
    type: "registry:example",
    title: "Floating Label Input",
    description: "Material UI floating label input",
    files: [
      {
        path: "examples/floating-label-input-demo.tsx",
        type: "registry:example",
      },
    ],
    registryDependencies: [
      "https://mc-ui.microclub.info/r/floating-label-input.json",
    ],
  },
  {
    name: "mc-button-demo",
    type: "registry:example",
    title: "MicroClub Button Demo",
    description: "Demo for MicroClub Button",
    files: [
      {
        path: "examples/mc-button-demo.tsx",
        type: "registry:example",
      },
    ],
    registryDependencies: [
      "https://mc-ui.microclub.info/r/mc-button.json",
    ],
  },
];
