# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.1.0](https://github.com/MicroClub-USTHB/mcoli-ui/releases/tag/v0.1.0) - 2026-03-29

### Added

- Interactive theme selection menu with visual color swatches
- `init` command to initialize mcoli-ui theme in projects
  - Supports CLI argument (`npx mcoli-ui init <theme>`) and interactive selection
  - Validates shadcn/ui dependency before setup
  - Automatic theme JSON injection from registry
- `add` command to add mcoli-ui components to projects
  - Supports multiple components: `npx mcoli-ui add mc-button mc-input`
  - Direct integration with shadcn CLI
  - Per-component progress tracking
- Theme preview with color swatches in terminal
- Error handling with helpful suggestions
  - Detects missing shadcn/ui setup
  - Validates theme names
  - Clear usage instructions
- Support for 5 themes:
  - Primary: Professional blue (#0006B1)
  - Secondary: Creative purple (#6A0DAD)
  - GameDev: Fun pink & yellow (#D04F99, #FACC15)
  - Robotics: Technical blue (#001EFF)
  - IT: Clean green (#34D399)

### Dependencies

- `inquirer`: Interactive command-line prompts
- `ora`: Elegant terminal spinners
- `chalk`: Terminal string styling
- `dotenv`: Environment variable loading

### Usage

```bash
# Initialize with a specific theme
npx mcoli-ui init primary

# Initialize with interactive selection
npx mcoli-ui init

# Add components
npx mcoli-ui add mc-button

# Add multiple components
npx mcoli-ui add mc-button mc-input
```

### Registry

Components are fetched from the mcoli-ui registry:

- Default: `https://mcoli-ui.microclub.info`
- Configurable via `MCOLI_UI_REGISTRY_URL` environment variable
