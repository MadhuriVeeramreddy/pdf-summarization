import "./globals.css";
import { Inter } from "next/font/google";
import { WaitlistProvider } from "../components/WaitlistProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SummarizeAI",
  description: "AI-powered PDF summarizer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-black">
        <WaitlistProvider>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
