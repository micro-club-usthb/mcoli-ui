# Contributing to mcoli-ui

This guide covers how to add a new registry item (component, hook, or theme) to the MicroClub registry.

## Our Priority

**At this stage, our focus is explicitly on implementing remaining planned registry items (components).** We ask that you prioritize these before proposing other features or architectural changes.

## Choosing Your Path

- **[Internal Contributors](#internal-contributors)**: You have push access to the repository.
- **[External Contributors](#external-contributors)**: You are an open-source contributor. Fork the repository first, then follow the external guide.

---

# Internal Contributors

If you have push access to the repository, follow these steps.

## Workflow

1. Find an issue labeled with `component` that includes a Figma link
2. Create a branch from `dev` (naming: `component/mc-<name>`)
3. Implement the item (e.g., component using `@base-ui/react` primitives)
4. Create stories, examples, and documentation
5. Test with Storybook and verify registry build (`npm run build:registry`)
6. Create a pull request targeting `dev`

## Step-by-Step

### Step 1: Find an Issue

Browse the GitHub issues to find an item to implement. Each issue includes a Figma link with the design specifications. **Please stick to these designs to maintain MicroClub's identity.**

### Step 2: Create a Branch

```bash
git switch dev
git pull origin dev
git switch -c component/mc-<name>
```

Example: `git switch -c component/mc-button`

### Step 3: Create the Registry Item

Create your component file in `src/registry/ui/mc-<name>.tsx`.

- Prefix with `mc-` (e.g., `mc-button.tsx`)
- Use `@base-ui/react` primitives for high-quality, accessible building blocks
- Utilize Tailwind CSS v4 for styling

Example file: [`src/registry/ui/mc-button.tsx`](src/registry/ui/mc-button.tsx)

### Step 4: Register the Item

Edit [`src/registry/registry-ui.ts`](src/registry/registry-ui.ts) and add your entry. This metadata allows the shadcn-based CLI to discover and distribute your code.

### Step 5: Create Demo

Create a demo for the documentation in `src/registry/examples/mc-<name>-demo.tsx`.

Example file: [`src/registry/examples/mc-button-demo.tsx`](src/registry/examples/mc-button-demo.tsx)

### Step 6: Create Storybook Story

Create a story in `src/stories/Mc<Name>.stories.tsx` for visual testing and regression checks.

Example file: [`src/stories/McButton.stories.tsx`](src/stories/McButton.stories.tsx)

### Step 7: Create Documentation

Create an MDX file in `src/content/docs/components/mc-<name>.mdx` using Fumadocs components.

Example file: [`src/content/docs/components/mc-button.mdx`](src/content/docs/components/mc-button.mdx)

### Step 8: Build and Test

```bash
# Build the registry metadata (registry.json)
npm run build:registry

# Run storybook for visual verification
npm run storybook
```

### Step 9: Create a Pull Request

```bash
git add .
git commit -m "feat: add mc-<name> component"
git push -u origin component/mc-<name>
```

Create a PR targeting `dev`. Link the issue (e.g., `Closes #42`) in your description.

---

# External Contributors

External contributors should follow the same technical steps but start with a fork.

## Workflow

1. Fork the repository on GitHub
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/mcoli-ui.git`
3. Add upstream: `git remote add upstream https://github.com/MicroClub-USTHB/mcoli-ui.git`
4. Follow the **Internal Contributors** steps from Step 2 onwards, using `upstream` to pull.

---

# Registry Item Summary

When adding a new item, you will create/edit these files:

| File                                                                                     | Purpose                       |
| ---------------------------------------------------------------------------------------- | ----------------------------- |
| [`src/registry/ui/mc-<name>.tsx`](src/registry/ui/mc-button.tsx)                         | The actual code to distribute |
| [`src/registry/registry-ui.ts`](src/registry/registry-ui.ts)                             | Metadata for CLI discovery    |
| [`src/registry/examples/mc-<name>-demo.tsx`](src/registry/examples/mc-button-demo.tsx)   | Live demo for documentation   |
| [`src/stories/Mc<Name>.stories.tsx`](src/stories/McButton.stories.tsx)                   | Visual testing in Storybook   |
| [`src/content/docs/components/mc-<name>.mdx`](src/content/docs/components/mc-button.mdx) | Markdown documentation        |

### Planned Components

| Component            | Design State | Dev State |
| -------------------- | ------------ | --------- |
| `mc-button`          | Designed     | Developed |
| `mc-input`           | Designed     | Developed |
| `mc-textarea`        | Designed     | Pending   |
| `mc-input-opt`       | Designed     | Pending   |
| `mc-checkbox`        | Designed     | Pending   |
| `mc-radio-group`     | Designed     | Pending   |
| `mc-card`            | Designed     | Pending   |
| `mc-select`          | Designed     | Pending   |
| `mc-combobox`        | Designed     | Pending   |
| `mc-switch`          | Designed     | Pending   |
| `mc-navigation-menu` | Designed     | Pending   |
| `mc-side-bar`        | Designed     | Pending   |
| `mc-tabs`            | Designed     | Pending   |
| `mc-breadcrumb`      | Designed     | Pending   |
| `mc-pagination`      | Designed     | Pending   |
| `mc-dialog`          | Pending      | Pending   |
| `mc-alert-dialog`    | Pending      | Pending   |
| `mc-alert`           | Pending      | Pending   |
| `mc-sonner`          | Pending      | Pending   |
| `mc-tooltip`         | Pending      | Pending   |
| `mc-popover`         | Pending      | Pending   |
| `mc-dropdown-menu`   | Pending      | Pending   |
| `mc-context-menu`    | Pending      | Pending   |
| `mc-data-table`      | Pending      | Pending   |
| `mc-accordion`       | Pending      | Pending   |
| `mc-collapsible`     | Pending      | Pending   |
| `mc-separator`       | Pending      | Pending   |
| `mc-progress`        | Pending      | Pending   |
| `mc-calendar`        | Pending      | Pending   |
| `mc-scrollarea`      | Pending      | Pending   |
| `mc-skeleton`        | Pending      | Pending   |
| `mc-badge`           | Pending      | Pending   |
| `mc-tag`             | Pending      | Pending   |
| `mc-avatar`          | Pending      | Pending   |
| `mc-drawer`          | Pending      | Pending   |
| `mc-hover-card`      | Pending      | Pending   |
| `mc-slider`          | Pending      | Pending   |
| `mc-carousel`        | Pending      | Pending   |

# Important Notes

- **Distribution First**: Remember that this code will be copied into user's projects. Keep it clean and self-contained.
- **Figma First**: Always refer to the designs in Figma for colors, spacing, and variants.
- **Prefix Everything**: All registry items MUST use the `mc-` prefix.
- **Base UI**: Use `@base-ui/react` for underlying logic to ensure accessibility.
- **Themes and Modes**: Every item must be tested in all 5 themes in both light and dark modes.
- **Build Verification**: Ensure `npm run build:registry` passes before submitting.
