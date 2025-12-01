"use client";

import { useWaitlist } from "./WaitlistProvider";

export function HowItWorks() {
  const { openDialog } = useWaitlist();

  return (
    <section className="w-full py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content: Steps + UI Mockup */}
        <h2 
              className="text-4xl md:text-5xl font-semibold text-black mb-6"
              style={{ 
                fontFamily: 'var(--font-inter-display)',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                lineHeight:'1.1'
              }}
            >
              Simplify your workflow
            </h2>
            <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal mb-16"
            style={{ fontFamily: 'var(--font-switzer)',textAlign: 'center',letterSpacing:'-.01em' }}
          >
            A complete study assistant. Summarize faster, extract insights, build flashcards, and ask questions instantly.
          </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Steps with Numbers */}
          <div>
            

            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl  bg-gradient-to-b from-white via-[#5235EF]/30 to-white  flex items-center justify-center">
                    <span 
                      className="text-4xl font-bold text-black-800"
                      style={{ fontFamily: 'var(--font-inter-display)' }}
                    >
                      01
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-semibold text-black mb-2"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    Upload your PDF
                  </h3>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    Drag & drop any document — textbooks, research papers, reports, or articles.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-b from-white via-[#5235EF]/30 to-white  flex items-center justify-center">
                    <span 
                      className="text-4xl font-bold text-black-800"
                      style={{ fontFamily: 'var(--font-inter-display)' }}
                    >
                      02
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-semibold text-black mb-2"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    AI understands your content
                  </h3>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'var(--font-switzer)',letterSpacing:'-.01em' }}
                  >
                    Our AI reads, analyzes, and extracts the most important concepts in seconds.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-b from-white via-[#5235EF]/30 flex items-center justify-center">
                    <span 
                      className="text-4xl font-bold text-black-800"
                      style={{ fontFamily: 'var(--font-inter-display)' }}
                    >
                      03
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-semibold text-black mb-2"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    Get summaries, insights & flashcards
                  </h3>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    Download summaries, review key insights, generate flashcards, and chat with your PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: UI Mockup */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
              {/* Top Bar */}
              <div className="bg-white rounded-lg mb-4 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-switzer)' }}>PDF Summarizer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-purple-300 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-300 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-300 border-2 border-white"></div>
                  </div>
                  <button className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg" style={{ fontFamily: 'var(--font-switzer)' }}>
                    Share
                  </button>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'var(--font-switzer)' }}>
                    document.pdf
                  </h3>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
                
                {/* PDF Content Preview */}
                <div className="space-y-3 mb-4">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                </div>

                {/* Summary Card */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'var(--font-switzer)' }}>
                      AI Summary
                    </span>
                    <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full" style={{ fontFamily: 'var(--font-switzer)' }}>
                      Ready
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-purple-300 rounded w-full"></div>
                    <div className="h-1.5 bg-purple-300 rounded w-4/5"></div>
                    <div className="h-1.5 bg-blue-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Tools */}
              <div className="flex items-center gap-2 text-xs text-gray-500" style={{ fontFamily: 'var(--font-switzer)' }}>
                <span>Quick actions:</span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-purple-200 rounded"></div>
                  <div className="w-6 h-6 bg-blue-200 rounded"></div>
                  <div className="w-6 h-6 bg-orange-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button 
            onClick={openDialog}
            className="px-8 py-4 bg-gradient-to-b from-[#5235EF] to-[#8771FF] text-white font-regular rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative group pr-16"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            <span className="relative z-10">👉 Join the Waitlist</span>
          </button>
        </div>
      </div>
    </section>
  );
}
