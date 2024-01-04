import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Exquizite",
  description: "Create your quizzes naturally!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/assets/favicon/favicon.ico" />
        <link
          rel="icon"
          href="/public/assets/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          sizes="16x16"
          href="/public//assets/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          sizes="32x32"
          href="/public/assets/favicon/favicon-32x32.png"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
