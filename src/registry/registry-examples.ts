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
];
