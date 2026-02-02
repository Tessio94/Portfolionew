import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollWrapper from "@/components/ScrollWrapper";

const orbitronCover = localFont({
  src: [
    { path: "fonts/Orbitron-Regular.ttf", weight: "400", style: "normal" },
    { path: "fonts/Orbitron-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--orbitron-cover",
  preload: true,
});

const orbitronRest = localFont({
  src: [
    {
      path: "fonts/Orbitron-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Orbitron-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Orbitron-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/Orbitron-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--orbitron-rest",
  preload: false,
});

const interRegular = localFont({
  src: [
    {
      path: "fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--inter-regular",
  preload: true,
});

const interRest = localFont({
  src: [
    {
      path: "fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/Inter_18pt-SemiBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "fonts/Inter_18pt-BoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--inter-rest",
  preload: false,
});

const jetBrainsRegular = localFont({
  src: [
    {
      path: "fonts/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/JetBrainsMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/JetBrainsMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--jetBrains-regular",
  preload: true,
});

export const metadata: Metadata = {
  title: "Portfolio | Šime Klapan",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${interRegular.variable} ${interRest.variable} ${interRegular.className} ${orbitronCover.variable} ${orbitronRest.variable} ${jetBrainsRegular.variable} antialiased`}
      >
        {children}
        <ScrollWrapper />
      </body>
    </html>
  );
}
