#!/usr/bin/env node

import { config } from "dotenv";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";

config();

const themes = [
  {
    name: "Primary",
    value: "primary",
    description: "Blue primary with Purple secondary accents",
    colors: ["#0006B1", "#6A0DAD"],
  },
  {
    name: "Secondary",
    value: "secondary",
    description: "Purple primary with Blue secondary accents",
    colors: ["#6A0DAD", "#001EFF"],
  },
  {
    name: "GameDev",
    value: "game-dev",
    description: "Pink primary with Yellow accents",
    colors: ["#D04F99", "#FACC15"],
  },
  {
    name: "Robotics",
    value: "robotics",
    description: "Blue primary with Accent Blue",
    colors: ["#001EFF", "#00D3FF"],
  },
  {
    name: "IT",
    value: "it",
    description: "Green primary with Gray accents",
    colors: ["#25C059", "#8F9193"],
  },
];

const validThemeValues = themes.map((t) => t.value);

const REGISTRY_URL = process.env.MC_UI_REGISTRY_URL || "https://mc-ui.microclub.info";

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Usage: npx mc-ui <command>");
  console.log("Commands:");
  console.log("  init [theme]     Initialize mc-ui theme (requires shadcn/ui)");
  console.log("  add [...packages]  Add mc-ui components");
  console.log("\nAvailable themes:");
  themes.forEach((theme) => {
    console.log(`  ${chalk.cyan(theme.value.padEnd(12))} ${theme.description}`);
  });
  console.log(`\nRegistry URL: ${chalk.gray(REGISTRY_URL)}`);
  process.exit(1);
}

const command = args[0];

if (command === "init") {
  handleInit(args.slice(1));
} else if (command === "add") {
  handleAdd(args.slice(1));
} else {
  console.log(`Unknown command: ${command}`);
  console.log("Usage: npx mc-ui <command>");
  console.log("Commands:");
  console.log("  init [theme]     Initialize mc-ui theme (requires shadcn/ui)");
  console.log("  add [...packages]  Add mc-ui components");
  process.exit(1);
}

function createColorSwatch(hexColors: string[]): string {
  return hexColors.map((hex) => chalk.bgHex(hex)("  ")).join("");
}

async function interactiveThemeSelect() {
  const choices = themes.map((theme, index) => ({
    name: `${index + 1}. ${theme.name.padEnd(10)} ${createColorSwatch(theme.colors)}  ${theme.description}`,
    value: theme.value,
    short: theme.name,
  }));

  const answer = await inquirer.prompt([
    {
      type: "select",
      name: "theme",
      message: "Select an mc-ui theme:",
      choices,
      default: "primary",
      loop: false,
    },
  ]);

  return answer.theme;
}

function handleInit(themeArgs: string[]) {
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

  const selectedThemeArg = themeArgs[0]?.toLowerCase();

  if (selectedThemeArg && validThemeValues.includes(selectedThemeArg)) {
    const theme = themes.find((t) => t.value === selectedThemeArg);
    const themeName = theme?.name || selectedThemeArg;

    checkSpinner.info(`Theme selected: ${chalk.cyan(themeName)}`);

    addTheme(selectedThemeArg, themeName);
    return;
  }

  if (selectedThemeArg && !validThemeValues.includes(selectedThemeArg)) {
    console.error(
      `${chalk.red("Error:")} Invalid theme "${chalk.bold(selectedThemeArg)}"`,
    );
    console.log("\nAvailable themes:");
    themes.forEach((theme, index) => {
      console.log(
        `  ${chalk.cyan(String(index + 1).padStart(2) + ".")} ${chalk.bold(theme.name.padEnd(12))} ${createColorSwatch(theme.colors)}  ${theme.description}`,
      );
    });
    console.log("\nOr run without arguments for interactive selection.");
    process.exit(1);
  }

  interactiveThemeSelect()
    .then((selectedTheme) => {
      const theme = themes.find((t) => t.value === selectedTheme);
      const themeName = theme?.name || selectedTheme;
      addTheme(selectedTheme, themeName);
    })
    .catch((error) => {
      console.error("Error during theme selection:", error);
      process.exit(1);
    });
}

function addTheme(themeValue: string, themeName: string) {
  const themeSpinner = ora(
    `Adding ${chalk.yellow(themeName)} mc-ui theme...`,
  ).start();
  try {
    execSync(
      `npx shadcn@latest add ${REGISTRY_URL}/r/${themeValue}.json`,
      {
        stdio: "inherit",
      },
    );
    themeSpinner.succeed(
      `Successfully added ${chalk.green(themeName)} mc-ui theme`,
    );
  } catch (error) {
    themeSpinner.fail(`Failed to add ${chalk.red(themeName)} theme`);
    console.error(`Error adding ${themeName} theme:`, error);
    process.exit(1);
  }

  const completeSpinner = ora("Finalizing mc-ui setup...").start();
  completeSpinner.succeed("mc-ui theme setup complete!");
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
      const url = new URL(
        `r/${packageName}.json`,
        REGISTRY_URL,
      );

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
