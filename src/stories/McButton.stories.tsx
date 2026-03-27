import type { Meta, StoryObj } from "@storybook/react";
import { McButton } from "@/registry/ui/mc-button";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Mail, ArrowRight, Trash, Plus } from "lucide-react";

const meta: Meta<typeof McButton> = {
  title: "Components/McButton",
  component: McButton,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof McButton>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const WithIcons: Story = {
  args: {
    children: "Send Email",
    leftIcon: <Mail />,
    rightIcon: <ArrowRight />,
  },
};

export const IconOnly: Story = {
  args: {
    children: null,
    size: "icon",
    leftIcon: <Plus />,
  },
};

export const DestructiveWithIcon: Story = {
  args: {
    variant: "destructive",
    children: "Delete Account",
    leftIcon: <Trash />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <McButton {...args} size="xs">
        Extra Small
      </McButton>
      <McButton {...args} size="sm">
        Small
      </McButton>
      <McButton {...args} size="default">
        Default
      </McButton>
      <McButton {...args} size="lg">
        Large
      </McButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
    leftIcon: <Mail />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeDisabled();
    await userEvent.click(button, { pointerEventsCheck: 0 });
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
