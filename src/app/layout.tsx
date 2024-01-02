import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const Satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "./font/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./font/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./font/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./font/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Made Of Bees",
  description: "Made Of Bees",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-360BYMRCDY" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-360BYMRCDY');
        `}
      </Script>
      <meta name="darkreader-lock" />
      <body
        className={`${Satoshi.variable} font-satoshi bg-gradient-to-t from-white to-[#4b815c] via-[#4b815c]`}
      >
        <main className="font-satoshi">{children}</main>
      </body>
    </html>
  );
}
