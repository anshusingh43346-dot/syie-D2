import type { Metadata } from "next";
import { DeveloperModeSwitcher } from "@/components/dev/developer-mode-switcher";
import { DevUserProvider } from "@/components/dev/dev-user-provider";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SYIE | Creator-Learner Marketplace",
  description: "SYIE is a creator-learner marketplace operated by Sdivynex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-charcoal font-sans text-ivory antialiased">
        <DevUserProvider>
          {children}
          <DeveloperModeSwitcher />
        </DevUserProvider>
      </body>
    </html>
  );
}
