import type { Registry } from "shadcn/schema";
import { REGISTRY_URL } from "./consts/index";

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
    registryDependencies: [`${REGISTRY_URL}/r/mc-button.json`],
  },
  {
    name: "mc-checkbox-demo",
    type: "registry:example",
    title: "MicroClub Checkbox Demo",
    description: "Demo for MicroClub Checkbox",
    files:[
      {
        path: "examples/mc-checkbox-demo.tsx",
        type: "registry:example",
      },
    ],
    registryDependencies: [`${REGISTRY_URL}/r/mc-checkbox.json`],
  },
];
