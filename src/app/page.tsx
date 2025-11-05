import MCLogo from "@/components/MCLogo";
import BackgroundBlur from "@/components/sections/BackgroundBlur";
import Blur from "@/components/sections/Blur";
import BorderRadius from "@/components/sections/BorderRadius";
import Colors from "@/components/sections/Colors";
import Hero from "@/components/sections/Hero";
import Shadow from "@/components/sections/Shadow";
import Stroke from "@/components/sections/Stroke";
import TextStyles from "@/components/sections/TextStyles";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10">
      <MCLogo />
      <Hero />
      <Colors />
      <TextStyles />
      <Shadow />
      <Stroke />
      <BorderRadius />
      <Blur />
      <BackgroundBlur />
    </div>
  );
}
