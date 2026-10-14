import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "PPG Biosignals — Physiological Signal Monitor",
  description:
    "Measure your heart rate, respiratory rate, SpO₂ and HRV in 30 seconds using only your phone camera. No wearable required.",
  openGraph: {
    title: "PPG Biosignals",
    description: "Clinical-grade vitals from your phone camera.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="footer">
          <div className="wrap footer__in">
            <p className="footer__copy">© {new Date().getFullYear()} PPG Biosignals. All rights reserved.</p>
            <nav className="footer__links">
              <a href="#privacy">Privacy</a>
              <a href="mailto:hello@ppgbiosignals.com">Contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
