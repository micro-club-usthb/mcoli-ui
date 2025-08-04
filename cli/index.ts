#!/usr/bin/env node

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import ora from "ora";
import chalk from "chalk";

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

  // Check if components.json already exists
  const componentsJsonPath = join(process.cwd(), "components.json");

  if (existsSync(componentsJsonPath)) {
    const skipSpinner = ora(
      "components.json found, skipping shadcn init...",
    ).start();
    skipSpinner.succeed("components.json found, skipping shadcn init");
  } else {
    console.log("Running shadcn init...");
    // Run shadcn init
    execSync("npx shadcn@latest init", {
      stdio: "inherit",
    });
  }

  // TODO: Change from clean-slate to mc-ui custom tweakcn theme later
  // Add color theme
  const themeSpinner = ora("Adding mc-ui theme...").start();
  try {
    execSync(
      "npx shadcn@latest add https://tweakcn.com/r/themes/cmdwgqc1m000004lb3zxvaygo",
      {
        stdio: "inherit",
      },
    );
    themeSpinner.succeed("Successfully added mc-ui theme");
  } catch (error) {
    themeSpinner.fail("Failed to add mc-ui theme");
    console.error("Error adding mc-ui theme:", error);
    process.exit(1);
  }

  const completeSpinner = ora("Finalizing mc-ui initialization...").start();
  completeSpinner.succeed("mc-ui initialization complete!");
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

    const addSpinner = ora(
      `Adding ${chalk.yellow(packageName)} component...`,
    ).start();

    try {
      // TODO: Need to change the website URL once hosted
      const url = new URL(`r/${packageName}.json`, "http://localhost:3000");

      execSync(`npx shadcn@latest add ${url.toString()}`, {
        stdio: "inherit",
      });

      addSpinner.succeed(
        `Successfully added ${chalk.green(packageName)} component`,
      );
    } catch (error) {
      addSpinner.fail(`Failed to add ${chalk.red(packageName)} component`);
      console.error(
        `Error adding ${chalk.red(packageName)}:`,
        error instanceof Error ? error.message : String(error),
      );
    }
  }
}
