"use client";

import { useWaitlist } from "./WaitlistProvider";

export function CTA() {
  const { openDialog } = useWaitlist();

  return (
    <section className="w-full py-32 bg-gradient-to-b from-purple-50 via-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6"
          style={{ 
            fontFamily: 'var(--font-inter-display)',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}
        >
          Be the first to try the fastest PDF AI study tool.
        </h2>
        <p 
          className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto font-normal"
          style={{ fontFamily: 'var(--font-switzer)' }}
        >
          Join thousands of students and professionals already waiting for early access.
        </p>
        <button 
          onClick={openDialog}
          className="px-8 py-4 bg-gradient-to-b from-[#5235EF] to-[#8771FF] text-white font-regular rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative group pr-16 mb-4"
          style={{ fontFamily: 'var(--font-switzer)' }}
        >
          <span className="relative z-10">👉 Join the Waitlist</span>
        </button>
        <p 
          className="text-sm text-gray-500"
          style={{ fontFamily: 'var(--font-switzer)' }}
        >
          Get notified when we launch. No spam — ever.
        </p>
      </div>
    </section>
  );
}

