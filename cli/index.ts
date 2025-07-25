#!/usr/bin/env node

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: npx mc-ui <command>");
  console.log("Commands:");
  console.log("  init          Initialize shadcn/ui with mc-ui styling");
  console.log("  add [...packages]  Add mc-ui components");
  process.exit(1);
}

const command = args[0];

if (command === "init") {
  handleInit();
} else if (command === "add") {
  handleAdd(args.slice(1));
} else {
  console.log(`Unknown command: ${command}`);
  console.log("Usage: npx mc-ui <command>");
  console.log("Commands:");
  console.log("  init          Initialize shadcn/ui with mc-ui styling");
  console.log("  add [...packages]  Add mc-ui components");
  process.exit(1);
}

function handleInit() {
  console.log("Initializing shadcn/ui with mc-ui styling...");
  
  // Run shadcn init
  execSync("npx shadcn@latest init", {
    stdio: "inherit",
  });
  
  // Copy mc-ui globals.css content
  const mcUiGlobalsPath = join(__dirname, "..", "app", "globals.css");
  
  if (!existsSync(mcUiGlobalsPath)) {
    console.error("Error: mc-ui globals.css file not found");
    process.exit(1);
  }
  
  const mcUiGlobalsContent = readFileSync(mcUiGlobalsPath, "utf8");
  
  // Try to find the target globals.css file
  const possiblePaths = [
    join(process.cwd(), "app", "globals.css"),
    join(process.cwd(), "src", "app", "globals.css"),
  ];
  
  let targetPath = null;
  for (const path of possiblePaths) {
    if (existsSync(path)) {
      targetPath = path;
      break;
    }
  }
  
  if (!targetPath) {
    console.error("Error: Could not find app/globals.css or src/app/globals.css in the current project");
    process.exit(1);
  }
  
  // Override the target globals.css file
  writeFileSync(targetPath, mcUiGlobalsContent);
  console.log(`Successfully copied mc-ui styling to ${targetPath}`);
  console.log("mc-ui initialization complete!");
}

function handleAdd(packageNames: string[]) {
  if (packageNames.length === 0) {
    console.log("Usage: npx mc-ui add [...packages]");
    process.exit(1);
  }

  for (const packageName of packageNames) {
    if (!packageName.trim()) {
      continue;
    }

    console.log(`Adding ${packageName} component...`);

    // TODO: Need to change the website URL once hosted
    const url = new URL(`r/${packageName}.json`, "http://localhost:3000");

    execSync(`npx shadcn@latest add ${url.toString()}`, {
      stdio: "inherit",
    });
  }
}
