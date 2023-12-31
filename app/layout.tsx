import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description:
    "Jotion is a Next.js starter kit with TypeScript and Tailwind CSS.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ConvexProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="jotion-theme"
          >
            {children}
          </ThemeProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
