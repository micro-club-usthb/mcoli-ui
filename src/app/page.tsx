import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold">Hello world</h1>
        <Link
          href={"/docs/introduction"}
          className="flex gap-1 text-xl font-medium hover:underline hover:text-gray-300"
        >
          Go to docs
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
