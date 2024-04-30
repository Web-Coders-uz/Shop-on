import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHOP-ON",
  description: "SHOP-ON Project",
  icons: "/logo.png"
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;