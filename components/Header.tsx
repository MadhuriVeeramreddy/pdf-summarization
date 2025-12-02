"use client";

import Link from "next/link";
import { useWaitlist } from "./WaitlistProvider";

export default function Header() {
  const { openDialog } = useWaitlist();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-gray-900"
          style={{ fontFamily: 'var(--font-inter-display)' }}
        >
          DOCU<span className="text-purple-600">FLASH</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium" style={{ fontFamily: 'var(--font-switzer)' }}>
          <Link href="#features" className="hover:text-black transition">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-black transition">
            How It Works
          </Link>
          <Link href="#faq" className="hover:text-black transition">
            FAQ
          </Link>
        </nav>

        {/* Button */}
        <button
          onClick={openDialog}
          className="px-6 py-2.5 bg-gradient-to-b from-[#5235EF] to-[#8771FF] text-white rounded-full font-medium hover:opacity-90 transition"
          style={{ fontFamily: 'var(--font-switzer)', cursor:'pointer' }}
        >
          Join Waitlist
        </button>
      </div>
    </header>
  );
}
