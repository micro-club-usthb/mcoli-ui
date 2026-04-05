import {
  McInputOtp,
  McInputOtpGroup,
  McInputOtpSeparator,
  McInputOtpSlot,
} from '../ui/mc-input-otp';
export default function McInputOtpDemo() {
  return (
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
  );
}
