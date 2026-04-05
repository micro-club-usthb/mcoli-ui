import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  McInputOtp,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/registry/ui/mc-input-otp';

const meta: Meta<typeof McInputOtp> = {
  title: 'Components/McInputOtp',
  component: McInputOtp,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof McInputOtp>;

export const Playground: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-2 justify-center min-h-screen w-full bg-background">
      <McInputOtp maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </McInputOtp>

      <McInputOtp maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </McInputOtp>

      <McInputOtp maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </McInputOtp>
    </div>
  ),
};
