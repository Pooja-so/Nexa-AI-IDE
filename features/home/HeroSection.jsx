import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col sm:flex-row px-6 py-10  gap-12 items-center">
      {/* Left Content */}
      <div className="sm:w-1/2 flex flex-col gap-6 py-20 px-20 ">
        {/* Heading */}
        <h1
          className="text-4xl tracking-wider sm:text-5xl font-bold leading-13 bg-clip-text text-transparent
             bg-gradient-to-r from-purple-700 via-blue-400 to-orange-600
             dark:from-purple-500 dark:via-blue-400 dark:to-orange-400"
        >
          Code Your Way to the Future with{" "}
          <span className="whitespace-nowrap">Nexa AI IDE</span>
        </h1>

        {/* Paragraph */}
        <p className="text-2xl text-gray-600 dark:text-gray-400 text-justify font-mono leading-9">
          Nexa AI IDE is a next-generation AI-powered code editor that helps you
          write better code, debug faster, and deliver sooner. It’s a powerful code editor 
          with built-in project templates, an AI-powered chat assistant, and 
          intelligent AI suggestions that adapt to your workflow and enhance productivity.
        </p>

        {/* Centered Button */}
        <div className="flex justify-center align-center py-6">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="
              flex items-center gap-2 text-xl tracking-wider cursor-pointer px-15 py-5 
              rounded-md text-white hover:text-white
              bg-blue-600 hover:bg-blue-700
              focus:outline-none focus:ring-4 focus:ring-blue-300 
              shadow-sm shadow-blue-400/40 
              dark:focus:ring-blue-700 dark:shadow-blue-900/60
              transition-transform duration-200
              hover:translate-y-1"
            >
              Get Started
              <ArrowUpRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Hero Image */}
      <div className="sm:w-1/2 flex justify-center">
        <Image
          src="/hero.svg"
          alt="Hero Section Illustration"
          height={500}
          width={500}
          priority
        />
        <h1 className="text-3xl">-----Put the dashboard image here----- </h1>
      </div>
    </section>
  );
};

export default HeroSection;
