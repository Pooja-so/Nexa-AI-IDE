import { ThemeToggle } from "@/components/ui/toggle-theme";
import UserButton from "../auth/components/UserButton";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-white dark:bg-black/5 w-full">
        <div className="flex items-center justify-center w-full flex-col">
          <div
            className={`
            flex items-center justify-between
            bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
           dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
            shadow-md
            backdrop-blur-md
            border-x border-b border-gray-200/70 dark:border-gray-700/70
            w-full sm:min-w-[800px] sm:max-w-[1200px]
            rounded-b-2xl
            px-4 py-3
            relative
            transition-all duration-300 ease-in-out
            `}
          >
            <div className="relative z-10 flex items-center justify-between w-full gap-2">
              {/* left side: Logo + Title */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/NexaLogo.png"
                  alt="Nexa Logo"
                  height={60}
                  width={100}
                />
                <span
                  className="hidden sm:inline-block px-3 py-1 text-sm font-medium 
                 text-green-800 bg-green-200 border border-green-700 rounded-full 
                 backdrop-blur-sm dark:text-green-400 dark:bg-white/20 dark:border-amber-50"
                >
                  AI Ready
                </span>
              </Link>

              {/* Middle */}
              <div className="flex items-center gap-2">{/*Something */}</div>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
