import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nexa-AI IDE",
  description:
    "Nexa-AI IDE is a free, open-source online IDE with a built-in AI assistant that helps you code, test, and run programs right in your browser. Its clean, intuitive design makes learning and coding simple and engaging.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>{children}</body>
      </html>
    </SessionProvider>
  );
}
