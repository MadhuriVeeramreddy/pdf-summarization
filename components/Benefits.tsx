export function Benefits() {
  return (
    <section className="w-full pb-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
            style={{ 
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.02em'
            }}
          >
            Why choose DocuFlash?
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'var(--font-switzer)', letterSpacing:'-.01em' }}
          >
            Experience the future of document processing with AI-powered efficiency
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Benefit 1: Saves Time */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Saves Time
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed text-sm font-normal"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Summaries in seconds — no more reading hundreds of pages.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2: Understands Complex PDFs */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="text-lg font-semibold text-black mb-2 group-hover:text-purple-600 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Understands Complex PDFs
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed text-sm font-normal"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Perfect for technical documents, legal papers, research, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3: Study Faster */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="text-lg font-semibold text-black mb-2 group-hover:text-green-600 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Helps You Study Faster
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed text-sm font-normal"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Focus on what matters with highlighted insights & flashcards.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4: Ready-to-use Flashcards */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="text-lg font-semibold text-black mb-2 group-hover:text-orange-600 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Ready-to-Use Flashcards
                </h3>
                <p 
                  className="text-gray-700 leading-relaxed text-sm font-normal"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  Instant flashcards for revision, memorization, and quick reviews.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
              Faster Reading
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
              Accuracy
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
              Available
            </div>
          </div>
          <div>
            <div 
              className="text-2xl font-bold text-black mb-1"
              style={{ fontFamily: 'var(--font-inter-display)' }}
            >
              1000+
            </div>
            <div 
              className="text-sm text-gray-700 font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              PDFs Processed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}