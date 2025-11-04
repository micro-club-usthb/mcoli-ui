import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="space-y-1">
        <h1 className="header-lg font-bold">Hello world</h1>
        <p className="paragraph-md">
          This is a test paragraph to test new styles
        </p>
      </div>
      <Link
        href={"/docs/introduction"}
        className="flex gap-1 text-xl font-medium hover:underline hover:text-primary-700"
      >
        Go to docs
        <ArrowRight />
      </Link>
    </div>
  );
}

export default Hero;
