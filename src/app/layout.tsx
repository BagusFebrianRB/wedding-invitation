import type { Metadata, Viewport } from "next";
import { Great_Vibes, Jost } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Wedding Invitation Bagus & Aya",
  description: "Dengan penuh syukur, kami mengundang Anda untuk hadir di hari bahagia kami.",
  metadataBase: new URL("https://namadomainmu.vercel.app"),
  openGraph: {
    title: "Wedding Invitation Bagus & Aya",
    description: "Dengan penuh syukur, kami mengundang Anda untuk hadir di hari bahagia kami.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${greatVibes.variable} ${jost.variable} font-sans bg-ivory text-charcoal antialiased`}>
        <SmoothScroll>
          <div className="max-w-120 mx-auto min-h-screen relative overflow-x-hidden shadow-xl">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
