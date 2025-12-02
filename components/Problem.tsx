"use client";

import { useWaitlist } from "./WaitlistProvider";

export function Problem() {
  const { openDialog } = useWaitlist();

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
            style={{ 
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.02em', lineHeight:'1.1'
            }}
          >
            Empower your learning with our all-in-one platform
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8"
            style={{ fontFamily: 'var(--font-switzer)',letterSpacing:'-.01em' }}
          >
            A complete study assistant. Summarize faster, extract insights, build flashcards, and ask questions instantly.
          </p>

          <div className="mt-8 flex items-center justify-center ">
            <button 
              onClick={openDialog}
              className="px-8 py-4 bg-gradient-to-b from-[#5235EF] to-[#8771FF] text-white font-regular rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative group pr-16"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              <span className="relative z-10">👉 Join the Waitlist</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Manage PDFs */}
          <div
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black text-center mb-3 group-hover:text-blue-600 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Manage PDFs
            </h3>
            <p 
              className="text-gray-700 text-center text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Streamline your study workflow with cleanly extracted summaries and organized sections.
            </p>
          </div>

          {/* Card 2: Convert Experience */}
          <div
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            style={{ animation: "fadeInUp 0.7s ease-out 0.2s both" }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black text-center mb-3 group-hover:text-purple-600 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Convert Experience
            </h3>
            <p 
              className="text-gray-700 text-center text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Clean conversion for consistent summaries and insights optimized for better learning.
            </p>
          </div>

          {/* Card 3: Smart Flashcards */}
          <div
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black text-center mb-3 group-hover:text-green-600 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Smart Flashcards
            </h3>
            <p 
              className="text-gray-700 text-center text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Generate study-ready flashcards and get AI-powered assistance for deeper understanding.
            </p>
          </div>

        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div 
                className="text-2xl font-bold text-black mb-1"
                style={{ fontFamily: 'var(--font-inter-display)' }}
              >
                10x
              </div>
              <div 
                className="text-sm text-gray-700 font-normal"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Faster Learning
              </div>
            </div>
            <div>
              <div 
                className="text-2xl font-bold text-black mb-1"
                style={{ fontFamily: 'var(--font-inter-display)' }}
              >
                99%
              </div>
              <div 
                className="text-sm text-gray-700 font-normal"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Accuracy Rate
              </div>
            </div>
            <div>
              <div 
                className="text-2xl font-bold text-black mb-1"
                style={{ fontFamily: 'var(--font-inter-display)' }}
              >
                500+
              </div>
              <div 
                className="text-sm text-gray-700 font-normal"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                Pages/Hour
              </div>
            </div>
            <div>
              <div 
                className="text-2xl font-bold text-black mb-1"
                style={{ fontFamily: 'var(--font-inter-display)' }}
              >
                24/7
              </div>
              <div 
                className="text-sm text-gray-700 font-normal"
                style={{ fontFamily: 'var(--font-switzer)' }}
              >
                AI Assistant
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}