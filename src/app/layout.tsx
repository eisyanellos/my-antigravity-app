import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Cloud App — A free checklist for anyone about to file a warranty claim",
  description:
    "Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-on-surface antialiased selection:bg-[#DCF3EA] selection:text-[#7b264e]">
        {children}
      </body>
    </html>
  );
}
