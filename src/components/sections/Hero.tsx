import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="space-y-1 flex flex-col items-center">
        <Logo size={200} />
        <p className="paragraph-xl font-medium text-foreground/40 text-center">
          the MicroClub Component Library
        </p>
      </div>
      <Link
        href={"/docs/introduction"}
        className="flex gap-1 text-xl font-medium hover:underline text-primary-800 hover:text-primary-700"
      >
        Go to docs
        <ArrowRight />
      </Link>
    </div>
  );
}

export default Hero;
