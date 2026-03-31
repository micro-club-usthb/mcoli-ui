    import {
  InputOtp,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
    } from "../ui/mc-input-otp"
    export default function McInputOtpDemo() {
  return (  <div className="flex items-center justify-center min-h-screen w-full bg-background">
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
    </div>
  )
}
