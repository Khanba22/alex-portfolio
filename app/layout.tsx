import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/theme-context";

export const metadata: Metadata = {
  title: "Alex Kouba — Toronto Market Intelligence",
  description: "Market intelligence and deal-making for Toronto owners, buyers, and operators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
