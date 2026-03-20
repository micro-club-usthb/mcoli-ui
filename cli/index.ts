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
  console.log("  init              Initialize mc-ui theme (requires shadcn/ui)");
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
  console.log("  init              Initialize mc-ui theme (requires shadcn/ui)");
  console.log("  add [...packages]  Add mc-ui components");
  process.exit(1);
}

function handleInit() {
  const componentsJsonPath = join(process.cwd(), "components.json");

  if (!existsSync(componentsJsonPath)) {
    console.error(
      `${chalk.red("Error:")} ${chalk.bold("shadcn/ui")} is required but not initialized.`,
    );
    console.log("\nPlease initialize shadcn/ui first:");
    console.log(`  ${chalk.cyan("npx shadcn@latest init")}\n`);
    console.log(
      "For more information, visit: " +
        chalk.underline("https://ui.shadcn.com/docs/installation"),
    );
    process.exit(1);
  }

  const checkSpinner = ora(
    `${chalk.green("✓")} shadcn/ui found, proceeding with mc-ui theme...`,
  ).start();
  checkSpinner.succeed("shadcn/ui configuration detected");

  inquirer
    .prompt([
      {
        type: "list",
        name: "theme",
        message: "Select an mc-ui theme:",
        choices: [
          { name: "Primary", value: "primary" },
          { name: "Secondary", value: "secondary" },
          { name: "GameDev", value: "game-dev" },
          { name: "Robotics", value: "robotics" },
          { name: "IT", value: "it" },
        ],
        default: "primary",
      },
    ])
    .then((answers) => {
      const selectedTheme = answers.theme;

      const themeSpinner = ora(
        `Adding ${chalk.yellow(selectedTheme)} mc-ui theme...`,
      ).start();
      try {
        execSync(
          `npx shadcn@latest add https://mc-ui.microclub.info/r/${selectedTheme}.json`,
          {
            stdio: "inherit",
          },
        );
        themeSpinner.succeed(
          `Successfully added ${chalk.green(selectedTheme)} mc-ui theme`,
        );
      } catch (error) {
        themeSpinner.fail(`Failed to add ${chalk.red(selectedTheme)} theme`);
        console.error(`Error adding ${selectedTheme} theme:`, error);
        process.exit(1);
      }

      const completeSpinner = ora("Finalizing mc-ui setup...").start();
      completeSpinner.succeed("mc-ui theme setup complete!");
    })
    .catch((error) => {
      console.error("Error during theme selection:", error);
      process.exit(1);
    });
}

function handleAdd(packageNames: string[]) {
  const componentsJsonPath = join(process.cwd(), "components.json");

  if (!existsSync(componentsJsonPath)) {
    console.error(
      `${chalk.red("Error:")} ${chalk.bold("shadcn/ui")} is required but not initialized.`,
    );
    console.log("\nPlease initialize shadcn/ui first:");
    console.log(`  ${chalk.cyan("npx shadcn@latest init")}\n`);
    console.log(
      "For more information, visit: " +
        chalk.underline("https://ui.shadcn.com/docs/installation"),
    );
    process.exit(1);
  }

  if (packageNames.length === 0) {
    console.log("Usage: npx mc-ui add [...packages]");
    process.exit(1);
  }

  for (const packageName of packageNames) {
    if (!packageName.trim()) {
      continue;
    }

    const addSpinner = ora(
      `Adding ${chalk.yellow(packageName)} mc-ui component...`,
    ).start();

    try {
      const url = new URL(`r/${packageName}.json`, "https://mc-ui.microclub.info");

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
