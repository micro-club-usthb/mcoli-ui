import { type Registry } from "shadcn/schema";
import { ui } from "./registry-ui";
import { examples } from "./registry-examples";
import { themes } from "./registry-themes";
import { fonts } from "./regisry-fonts";
import { REGISTRY_URL } from "./consts";

export const registry = {
  name: "mc-ui-registry",
  homepage: `${REGISTRY_URL}/`,
  items: [...fonts, ...themes, ...ui, ...examples],
} satisfies Registry;
