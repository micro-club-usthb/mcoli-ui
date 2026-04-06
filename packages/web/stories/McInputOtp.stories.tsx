import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  McInputOtp,
  McInputOtpGroup,
  McInputOtpSeparator,
  McInputOtpSlot,
} from '@/registry/ui/mc-input-otp';

const meta: Meta<typeof McInputOtp> = {
  title: 'Components/McInputOtp',
  component: McInputOtp,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof McInputOtp>;

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 justify-center">
      <McInputOtp maxLength={6}>
        <McInputOtpGroup>
          <McInputOtpSlot index={0} />
          <McInputOtpSlot index={1} />
          <McInputOtpSlot index={2} />
          <McInputOtpSlot index={3} />
          <McInputOtpSlot index={4} />
          <McInputOtpSlot index={5} />
        </McInputOtpGroup>
      </McInputOtp>

      <McInputOtp maxLength={6}>
        <McInputOtpGroup>
          <McInputOtpSlot index={0} />
          <McInputOtpSlot index={1} />
          <McInputOtpSlot index={2} />
        </McInputOtpGroup>
        <McInputOtpSeparator />
        <McInputOtpGroup>
          <McInputOtpSlot index={3} />
          <McInputOtpSlot index={4} />
          <McInputOtpSlot index={5} />
        </McInputOtpGroup>
      </McInputOtp>

      <McInputOtp maxLength={6}>
        <McInputOtpGroup>
          <McInputOtpSlot index={0} />
          <McInputOtpSlot index={1} />
        </McInputOtpGroup>
        <McInputOtpSeparator />
        <McInputOtpGroup>
          <McInputOtpSlot index={2} />
          <McInputOtpSlot index={3} />
        </McInputOtpGroup>
        <McInputOtpSeparator />
        <McInputOtpGroup>
          <McInputOtpSlot index={4} />
          <McInputOtpSlot index={5} />
        </McInputOtpGroup>
      </McInputOtp>
    </div>
  ),
};
