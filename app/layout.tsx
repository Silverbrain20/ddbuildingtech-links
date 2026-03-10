import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DD Building Tech",
  description:
    "DD Building Tech — Advanced solar energy infrastructure, CCTV, access control, fire alarm, and building automation solutions in Nigeria.",
  icons: {
    icon: "/dd_logo.png",
    apple: "/dd_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
