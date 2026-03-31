import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InputOtp, InputOTPGroup, InputOTPSeparator, InputOTPSlot } 
  from '@/registry/ui/mc-input-otp';

const meta: Meta<typeof InputOtp> = {
  title: 'Components/InputOtp',
  component: InputOtp,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof InputOtp>;

export const Playground: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-2 justify-center min-h-screen w-full bg-background">
      <InputOtp maxLength={6}>
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
      </InputOtp>

      <InputOtp maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOtp>

       <InputOtp maxLength={6}>
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
      </InputOtp>


    </div>
  ),
};
