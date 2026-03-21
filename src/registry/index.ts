import { type Registry } from "shadcn/schema";
import { ui } from "./registry-ui";
import { examples } from "./registry-examples";
import { themes } from "./registry-themes";
import { config } from "dotenv";

config();

const REGISTRY_URL =
  process.env.MC_UI_REGISTRY_URL || "https://mc-ui.microclub.info";

export const registry = {
  name: "mc-ui-registry",
  homepage: `${REGISTRY_URL}/`,
  items: [...themes, ...ui, ...examples],
} satisfies Registry;
