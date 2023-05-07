import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Adeptus Notes",
  description: "A modern notes app.",
  twitter: {
    card: "summary_large_image",
    title: "Adeptus Notes",
    description: "A modern notes app.",
    creator: "@SameerBasi25709",
  },
  metadataBase: new URL("https://adeptus-notes.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
          {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
