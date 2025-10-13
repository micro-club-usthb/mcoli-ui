import { type Registry } from "shadcn/schema";
import { ui } from "./registry-ui";
import { examples } from "./registry-examples";
import { themes } from "./registry-themes";

export const registry = {
  name: "mc-ui-registry",
  homepage: "https://mc-ui.microclub.info/",
  items: [...themes, ...ui, ...examples],
} satisfies Registry;
