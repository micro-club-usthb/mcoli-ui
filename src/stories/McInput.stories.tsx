import type { Meta, StoryObj } from '@storybook/react';
import { McInput } from '@/registry/ui/mc-input';
import { expect, userEvent, within } from '@storybook/test';
import { Mail, Lock, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

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
    label: {
      control: 'text',
    },
    hint: {
      control: 'text',
    },
  },
  // Global defaults for all stories
  args: {
    placeholder: 'Type something...',
    variant: 'default',
    disabled: false,
    label: undefined, // Default to hidden
    hint: undefined,  // Default to hidden
  },
};

export default meta;
type Story = StoryObj<typeof McInput>;

/**
 * The default input is minimal, without a label or hint.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type something...');
    await userEvent.type(input, 'Hello MicroClub');
    await expect(input).toHaveValue('Hello MicroClub');
  },
};

/**
 * Showcase label and hint support.
 */
export const WithLabelAndHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    hint: 'Choose a unique name for your profile.',
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'email@example.com',
    leftIcon: <Mail className="size-4" />,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '••••••••',
    leftIcon: <Lock className="size-4" />,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Search documentation...',
    leftIcon: <Search className="size-4" />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    placeholder: 'Minimal outline',
  },
};

export const FormStateSuccess: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+213 ...',
    rightIcon: <CheckCircle2 className="size-4 text-green-500" />,
    hint: 'Phone number verified successfully.',
  },
};

export const FormStateError: Story = {
  args: {
    label: 'Recovery Email',
    placeholder: 'invalid-email',
    'aria-invalid': 'true',
    rightIcon: <AlertCircle className="size-4 text-destructive" />,
    hint: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Cannot edit',
    leftIcon: <Lock className="size-4" />,
  },
};
