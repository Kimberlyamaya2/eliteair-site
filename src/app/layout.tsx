import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Elite Air HVAC | Heating & Cooling in Nashville, TN",
  description:
    "Seasonal HVAC specials, same-day service, and trusted technicians.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
