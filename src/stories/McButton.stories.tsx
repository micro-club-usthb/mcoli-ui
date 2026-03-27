import type { Meta, StoryObj } from '@storybook/react';
import { McButton } from '@/registry/ui/mc-button';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Mail, ArrowRight, Trash, Plus, Send, Download, Lock } from 'lucide-react';

const meta: Meta<typeof McButton> = {
  title: 'Components/McButton',
  component: McButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof McButton>;

export const Default: Story = {
  args: {
    children: 'Primary Action',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Send Message',
    leftIcon: <Send />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Get Started',
    rightIcon: <ArrowRight />,
  },
};

export const FullIconSupport: Story = {
  args: {
    children: 'Download Report',
    leftIcon: <Download />,
    rightIcon: <ArrowRight />,
  },
};

export const IconOnly: Story = {
  args: {
    children: null,
    size: 'icon',
    leftIcon: <Plus />,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Project',
    leftIcon: <Trash />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Secondary Action',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Hero Call to Action',
    rightIcon: <ArrowRight />,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Tag Action',
    leftIcon: <Plus />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Locked Action',
    leftIcon: <Lock size={16} />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
  },
};
