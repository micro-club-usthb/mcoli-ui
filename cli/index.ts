#!/usr/bin/env node

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import inquirer from "inquirer";
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
    // shadcn initialization
    console.log("Running shadcn init...");
    execSync("npx shadcn@latest init", {
      stdio: "inherit",
    });
  }

  // Prompt user to select a theme
  inquirer
    .prompt([
      {
        type: "list",
        name: "theme",
        message: "Select your MC theme:",
        choices: [
          { name: "Primary", value: "primary" },
          { name: "Light Purple", value: "light-purple" },
          { name: "Dark Purple", value: "dark-purple" },
        ],
        default: "primary",
      },
    ])
    .then((answers) => {
      const selectedTheme = answers.theme;

      // Add the selected color theme
      const themeSpinner = ora(
        `Adding ${chalk.yellow(selectedTheme)} theme...`,
      ).start();
      try {
        // TODO: Need to change the website URL once hosted
        execSync(
          `npx shadcn@latest add http://localhost:3000/r/${selectedTheme}.json`,
          {
            stdio: "inherit",
          },
        );
        themeSpinner.succeed(
          `Successfully added ${chalk.green(selectedTheme)} theme`,
        );
      } catch (error) {
        themeSpinner.fail(`Failed to add ${chalk.red(selectedTheme)} theme`);
        console.error(`Error adding ${selectedTheme} theme:`, error);
        process.exit(1);
      }

      const completeSpinner = ora("Finalizing mc-ui initialization...").start();
      completeSpinner.succeed("mc-ui initialization complete!");
    })
    .catch((error) => {
      console.error("Error during theme selection:", error);
      process.exit(1);
    });
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
