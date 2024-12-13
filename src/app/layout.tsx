import type { Metadata } from "next";
import "../app/globals.scss";
import "../assets/scss/main.scss";

export const metadata: Metadata = {
  title: "Lingroks - Your All-in-One Language Tool",
  description: "Lingroks is a language translator and learning platform that helps you learn and translate languages in a fun and interactive way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
