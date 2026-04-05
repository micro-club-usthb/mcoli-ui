import type { Meta, StoryObj } from '@storybook/nextjs';
import * as React from 'react';

import { McCheckbox } from '@/registry/ui/mc-checkbox';

const meta: Meta<typeof McCheckbox> = {
  title: 'Components/McCheckbox',
  component: McCheckbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    text: { control: 'text' },
    supportText: { control: 'text' },
  },
  args: {
    size: 'sm',
    text: 'Remember me',
    disabled: false,
    checked: false,
  },
};

export default meta;
type Story = StoryObj<typeof McCheckbox>;

export const Playground: Story = {
  args: {
    checked: undefined,
    text: 'Remember me',
    supportText: 'Save my login details for next time.',
  },
  render: (args) => {
    const [checked, setChecked] = React.useState(false);

    return <McCheckbox {...args} checked={checked} onCheckedChange={setChecked} />;
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <McCheckbox {...args} size="sm" />
      <McCheckbox {...args} size="md" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <McCheckbox {...args} checked={false} />
      <McCheckbox {...args} checked />
      <McCheckbox {...args} disabled />
      <McCheckbox {...args} checked disabled />
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <McCheckbox {...args} size="sm" text="Small checkbox" />
      <McCheckbox {...args} size="md" text="Medium checkbox" />
    </div>
  ),
};

export const WithSupportText: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
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

export const AllSizesWithAllStates: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Small</span>
        <div className="flex flex-wrap gap-4">
          <McCheckbox {...args} size="sm" text="Unchecked" checked={false} />
          <McCheckbox {...args} size="sm" text="Checked" checked />
          <McCheckbox {...args} size="sm" text="Disabled unchecked" disabled />
          <McCheckbox {...args} size="sm" text="Disabled checked" checked disabled />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Medium</span>
        <div className="flex flex-wrap gap-4">
          <McCheckbox {...args} size="md" text="Unchecked" checked={false} />
          <McCheckbox {...args} size="md" text="Checked" checked />
          <McCheckbox {...args} size="md" text="Disabled unchecked" disabled />
          <McCheckbox {...args} size="md" text="Disabled checked" checked disabled />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Small with support text</span>
        <McCheckbox
          {...args}
          size="sm"
          text="Remember me"
          supportText="Save my login details for next time."
          checked={false}
        />
        <McCheckbox
          {...args}
          size="sm"
          text="Remember me"
          supportText="Save my login details for next time."
          checked
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Medium with support text</span>
        <McCheckbox
          {...args}
          size="md"
          text="Remember me"
          supportText="Save my login details for next time."
          checked={false}
        />
        <McCheckbox
          {...args}
          size="md"
          text="Remember me"
          supportText="Save my login details for next time."
          checked
        />
      </div>
    </div>
  ),
};
