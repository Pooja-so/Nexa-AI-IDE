import Link from "next/link";
import {
  Github as LucideGithub,
  Twitter as LucideTwitter,
  Linkedin as LucideLinkedin,
} from "lucide-react";

const Footer = () => {
  // An array of social links objects
  const socialLinks = [
    {
      href: "https://github.com/Pooja-so",
      icon: <LucideGithub className="w-7 h-7" />,
      label: "GitHub",
    },
    {
      href: "https://x.com/PoojaSingh294",
      icon: <LucideTwitter className="w-7 h-7" />,
      label: "X (Twitter)",
    },
    {
      href: "https://www.linkedin.com/in/pooja-singh-400a64253/",
      icon: <LucideLinkedin className="w-7 h-7" />,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className=" dark:bg-zinc-900 mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col items-center space-y-4 text-center">
        {/* Social Links */}
        <div className="flex gap-5">
          {socialLinks.map(({ href, icon, label }, idx) => (
            <Link
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              {icon}
            </Link>
          ))}
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-500"></div>

        {/* Copyright */}
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          <span className="text-2xl dark:text-white">&copy;</span>  {new Date().getFullYear()}{" "}
          <span className="font-medium ">Pooja Singh</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
