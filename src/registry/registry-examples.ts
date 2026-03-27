import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
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
      "https://mcoli.microclub.info/r/mc-button.json",
    ],
  },
  {
    name: "mc-input-demo",
    type: "registry:example",
    title: "MicroClub Input Demo",
    description: "Demo for MicroClub Input",
    files: [
      {
        path: "examples/mc-input-demo.tsx",
        type: "registry:example",
      },
    ],
    registryDependencies: [
      "https://mcoli.microclub.info/r/mc-input.json",
    ],
  },
];
