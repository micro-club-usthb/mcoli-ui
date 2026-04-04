import type { Meta, StoryObj } from "@storybook/nextjs";

import { McCheckbox } from "@/registry/ui/mc-checkbox";

const meta: Meta<typeof McCheckbox> = {
  title: "Components/McCheckbox",
  component: McCheckbox,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    checked: {
      control: "select",
      options: [true, false],
    },
    text: { control: "text" },
    supportText: { control: "text" },
  },
  args: {
    size: "md",
    text: "Remember me",
    supportText: "",
    disabled: false,
    defaultChecked: false,
  },
};

export default meta;
type Story = StoryObj<typeof McCheckbox>;

const themes = ["primary", "secondary", "game-dev", "robotics", "it"] as const;
const modes = ["light", "dark"] as const;

export const Playground: Story = {
  args: {
    text: "teste",
    supportText: "teste",
    size: "sm",
    defaultChecked: false,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <McCheckbox {...args} size="sm" text="Remember me" />
      <McCheckbox {...args} size="md" text="Remember me" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="space-y-4">
      <McCheckbox {...args} checked={false} text="Remember me" />
      <McCheckbox {...args} checked text="Remember me" />
      <McCheckbox {...args} disabled text="Remember me" />
      <McCheckbox {...args} checked disabled text="Remember me" />
    </div>
  ),
};

export const WithSupportText: Story = {
  render: (args) => (
    <div className="space-y-4">
      <McCheckbox
        {...args}
        text="Remember me"
        supportText="Save my login details for next time."
        checked={false}
      />
      <McCheckbox
        {...args}
        text="Remember me"
        supportText="Save my login details for next time."
        checked
      />
      <McCheckbox
        {...args}
        text="Remember me"
        supportText="Save my login details for next time."
        checked={false}
      />
      <McCheckbox
        {...args}
        text="Remember me"
        supportText="Save my login details for next time."
        disabled
      />
      <McCheckbox
        {...args}
        text="Remember me"
        supportText="Save my login details for next time."
        checked
        disabled
      />
    </div>
  ),
};

export const AllThemesLightDark: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid gap-4 sm:grid-cols-2">
      {modes.map((mode) =>
        themes.map((theme) => (
          <div
            key={`${mode}-${theme}`}
            className={mode === "dark" ? "dark" : ""}
            data-theme={theme}
          >
            <div className="space-y-3 rounded-xl border border-border bg-background p-4 text-foreground">
              <p className="text-sm font-medium capitalize">
                {theme} - {mode}
              </p>
              <McCheckbox text="Remember me" checked={false} />
              <McCheckbox text="Remember me" checked />
              <McCheckbox
                text="Remember me"
                supportText="Save my login details for next time."
                checked={false}
              />
              <McCheckbox
                text="Remember me"
                supportText="Save my login details for next time."
                checked
              />
              <McCheckbox text="Remember me" disabled />
            </div>
          </div>
        )),
      )}
    </div>
  ),
};
