import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-4 pt-20">
      <div className="space-y-1 flex flex-col items-center">
        <h1 className="header-xl font-black">MC-UI</h1>
        <p className="paragraph-md text-center">
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
