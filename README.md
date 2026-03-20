# MC UI – Micro Club UI Component Registry

mc-ui is a theme and component registry that extends [shadcn/ui](https://ui.shadcn.com) with Micro Club's custom themes and components.

> **Important:** mc-ui is not a standalone library. It requires shadcn/ui to be installed first. Think of mc-ui as an extension that adds Micro Club's branding and components to your existing shadcn/ui project.

## Prerequisites

Before using mc-ui, you must have a project with shadcn/ui installed. Follow the [shadcn/ui installation guide](https://ui.shadcn.com/docs/installation) to set up shadcn/ui in your project.

## Available Themes

| Theme | Description |
|-------|-------------|
| **primary** | Blue primary with purple secondary accents |
| **secondary** | Purple primary with blue secondary accents |
| **game-dev** | Pink primary with yellow accents for gaming |
| **robotics** | Blue primary with accent blue for precision |
| **it** | Green primary with gray accents for IT |

## Quick Start

### 1. Initialize mc-ui

After shadcn/ui is set up, initialize mc-ui with your preferred theme:

**Interactive mode** (visual theme picker):
```sh
npx mc-ui@latest init
```

**Direct selection**:
```sh
npx mc-ui@latest init primary
```

### 2. Add Components

Add mc-ui components to your project:

```sh
npx mc-ui@latest add mc-button
```

## CLI Commands

| Command | Description |
|---------|-------------|
| `mc-ui init` | Initialize mc-ui theme (interactive picker) |
| `mc-ui init [theme]` | Initialize with specific theme (e.g., `primary`, `secondary`) |
| `mc-ui add [component]` | Add an mc-ui component |

## Features

- **Pre-built Themes**: Choose from 5 professionally designed color themes
- **Visual Theme Picker**: Interactive CLI with color swatches for easy selection
- **Copy & Paste**: Components are copied directly into your project - you own the code
- **Customizable**: Built with Tailwind CSS v4 for full styling control
- **Accessible**: Components follow accessibility best practices
- **Type-Safe**: Written in TypeScript

## Development

To start the documentation site:

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the component showcase.

## Resources

- [shadcn/ui](https://ui.shadcn.com) - Base component library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Radix UI](https://radix-ui.com/) - Primitive components

---

Micro Club © 2026. All rights reserved.
