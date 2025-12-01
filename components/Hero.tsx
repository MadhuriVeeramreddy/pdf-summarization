"use client";

import { useWaitlist } from "./WaitlistProvider";

export default function Hero() {
  const { openDialog } = useWaitlist();

  return (
    <section
      className="relative w-full pt-44 pb-32 font-sans
  bg-gradient-to-b from-white via-[#5235EF]/30 to-white "
      style={{ fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-8"
            style={{ 
              letterSpacing: '-0.05em',
              lineHeight: '1.1',
              fontFamily: 'var(--font-inter-display)'
            }}
          >
            Turn Any PDF into Instant Summaries, Flashcards & Smart Insights
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Stop wasting hours reading long PDFs. Upload your document and let AI generate summaries, key insights, flashcards, and answers — all in seconds.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center mb-6">
            <button 
              onClick={openDialog}
              className="px-8 py-4 bg-gradient-to-b from-[#5235EF] to-[#8771FF] text-white font-regular rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative group pr-16"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              <span className="relative z-10">👉 Join the Waitlist</span>
            </button>
          </div>

          {/* Sub CTA Text */}
          {/* <p 
            className="text-sm text-gray-600 mb-4"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Be the first to get early access.
          </p> */}

          {/* Trust Badge */}
          {/* <p 
            className="text-sm text-gray-500"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Trusted by students, researchers, and professionals.
          </p> */}

          {/* Visual Element - PDF Summarization Process */}
          <div className="relative w-full max-w-5xl mx-auto mt-12">
  <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Left: PDF Documents */}
      <div className="flex flex-col gap-4 items-start">
        {/* PDF 1 */}
        <div
          className="relative w-24 h-32 bg-white rounded-lg shadow-lg transform -rotate-3"
          style={{ animation: "float 3s ease-in-out 0.2s infinite" }}
        >
          <div className="p-3">
            <div className="w-full h-1.5 bg-gray-300 rounded mb-1.5"></div>
            <div className="w-4/5 h-1.5 bg-gray-300 rounded mb-1.5"></div>
            <div className="w-full h-1.5 bg-gray-300 rounded mb-1.5"></div>
            <div className="w-3/5 h-1.5 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-1.5 bg-purple-200 rounded"></div>
          </div>

          <div className="absolute top-2 right-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* PDF 2 */}
        <div
          className="relative w-24 h-32 bg-white rounded-lg shadow-lg transform rotate-2 -mt-6"
          style={{ animation: "float 3s ease-in-out 0.5s infinite" }}
        >
          <div className="p-3">
            <div className="w-full h-1.5 bg-gray-300 rounded mb-1.5"></div>
            <div className="w-3/4 h-1.5 bg-gray-300 rounded mb-1.5"></div>
            <div className="w-full h-1.5 bg-gray-300 rounded mb-2"></div>
            <div className="w-2/3 h-1.5 bg-blue-200 rounded"></div>
          </div>

          <div className="absolute top-2 right-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Center: AI Brain */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative" style={{ animation: "pulse 2s ease-in-out infinite" }}>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          {/* Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-40"
            style={{ animation: "pulse 2s ease-in-out 0.3s infinite", transform: "scale(1.3)" }}>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-30"
            style={{ animation: "pulse 2s ease-in-out 0.6s infinite", transform: "scale(1.6)" }}>
          </div>
        </div>
      </div>

      {/* Right: Output — now HORIZONTAL & RESPONSIVE */}
{/* Right: Output — bigger, much taller cards */}
<div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-2 w-full md:w-auto">

  {/* Summary */}
  <div
    className="w-40 h-40 md:h-40 bg-white rounded-lg shadow-lg p-4 border-l-4 border-purple-500"
    style={{ animation: "fadeInScale 0.6s ease-out 0.8s both, float 3s ease-in-out 1s infinite" }}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      <span className="text-sm font-semibold text-gray-800">Summary</span>
    </div>

    <div className="w-full h-1.5 bg-purple-100 rounded mb-2"></div>
    <div className="w-4/5 h-1.5 bg-purple-100 rounded mb-2"></div>
    <div className="w-3/4 h-1.5 bg-purple-100 rounded"></div>
  </div>

  {/* Insights */}
  <div
    className="w-40 h-40 md:h-40 bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-500"
    style={{ animation: "fadeInScale 0.6s ease-out 1s both, float 3s ease-in-out 1.2s infinite" }}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      <span className="text-sm font-semibold text-gray-800">Insights</span>
    </div>

    <div className="flex gap-2 mb-3">
      <div className="w-1.5 h-8 bg-blue-200 rounded"></div>
      <div className="w-1.5 h-10 bg-blue-400 rounded"></div>
      <div className="w-1.5 h-9 bg-blue-200 rounded"></div>
    </div>

    <div className="w-3/4 h-1.5 bg-blue-100 rounded"></div>
  </div>

  {/* Cards */}
  <div
    className="w-40 h-40 md:h-40 bg-white rounded-lg shadow-lg p-4 border-l-4 border-orange-500"
    style={{ animation: "fadeInScale 0.6s ease-out 1.2s both, float 3s ease-in-out 1.4s infinite" }}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
      <span className="text-sm font-semibold text-gray-800">Cards</span>
    </div>

    <div className="grid grid-cols-2 gap-2">
      <div className="w-full h-10 bg-orange-100 rounded"></div>
      <div className="w-full h-10 bg-orange-100 rounded"></div>
      <div className="w-full h-10 bg-orange-100 rounded"></div>
      <div className="w-full h-10 bg-orange-100 rounded"></div>
    </div>
  </div>

</div>


    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
