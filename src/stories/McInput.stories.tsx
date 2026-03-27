import type { Meta, StoryObj } from '@storybook/react';
import { McInput } from '@/registry/ui/mc-input';
import { expect, userEvent, within } from '@storybook/test';
import { Mail, Lock, Search } from 'lucide-react';

const meta: Meta<typeof McInput> = {
  title: 'Components/McInput',
  component: McInput,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outline'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    placeholder: 'Type something...',
    variant: 'default',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof McInput>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type something...');
    await userEvent.type(input, 'Hello MicroClub');
    await expect(input).toHaveValue('Hello MicroClub');
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'email@example.com',
    leftIcon: <Mail className="size-4" />,
    rightIcon: <Search className="size-4" />,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Search here...',
    leftIcon: <Search className="size-4" />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    placeholder: 'Username',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    leftIcon: <Lock className="size-4" />,
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': 'true',
    placeholder: 'Invalid entry',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Invalid entry');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Cannot edit',
    leftIcon: <Mail className="size-4" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Cannot edit');
    await expect(input).toBeDisabled();
  },
};
