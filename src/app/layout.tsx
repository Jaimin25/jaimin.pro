import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RESUME } from "@/lib/resume";
import Header from "@/components/Layout/header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: `Hey! It's me ${RESUME.initials}`,
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head> */}
      <body className={`font-poppins antialiased grid justify-center`}>
        <GoogleAnalytics gaId={process.env.GOOGLE_TAG!} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
