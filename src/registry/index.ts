import { type Registry } from "shadcn/schema";
import { ui } from "./registry-ui";
import { examples } from "./registry-examples";

export const registry = {
  name: "HADJ ARAB Adel",
  homepage: "https://mc-ui.microclub.info/",
  items: [...ui, ...examples],
} satisfies Registry;
