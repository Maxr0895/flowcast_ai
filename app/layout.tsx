import type { Metadata } from "next";
import { ClerkProvider, SignInButton } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowcast AI",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
