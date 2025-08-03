import type { Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "floating-label-input-demo",
    type: "registry:example",
    title: "Floating Label Input",
    description: "Material UI floating label input",
    files: [
      {
        path: "default/examples/floating-label-input-demo.tsx",
        type: "registry:example",
      },
    ],
    registryDependencies: [
      "https://mc-ui.microclub.info/r/floating-label-input.json",
    ],
  },
];
