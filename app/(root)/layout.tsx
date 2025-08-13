import Footer from "@/features/home/Footer";
import Header from "@/features/home/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Nex-AI IDE - Next-Gen AI Code Editor",
    default: "Nex-AI IDE - The Next Generation AI-Powered Code Editor",
  },
  description:
    "Nex-AI IDE is the next-generation, AI-powered code editor built for speed, intelligence, and seamless coding. Write, debug, and build faster than ever with smart AI assistance and a sleek developer experience.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {/* Background Grid */}
      <div className={cn("absolute inset-0 bg-white dark:bg-zinc-900")} />

      {/* Radial Mask Overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          flex items-center justify-center
          bg-white/80 dark:bg-black/10
          "
      />

      {/* Main Content */}
      <main className="z-20 relative w-full pt-0 md:pt-0">{children}</main>

      <Footer />
    </>
  );
}
