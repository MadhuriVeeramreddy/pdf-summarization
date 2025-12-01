export function FeatureSection() {
  return (
    <section className="relative w-full  bg-gray-50 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
            style={{ 
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.02em'
            }}
          >
            Features that save hours
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8"
            style={{ fontFamily: 'var(--font-switzer)' , letterSpacing:'-.01em'}}
          >
            A complete study assistant. Summarize faster, extract insights, build flashcards, and ask questions instantly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Feature 1 - Instant Summaries */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Visual Element */}
            <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border-2 border-dashed border-pink-200">
              <div 
                className="bg-white rounded-lg p-4 shadow-md border border-pink-100"
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black mb-3"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Instant PDF Summaries
            </h3>

            <p 
              className="text-gray-700 leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Get clean, accurate summaries of any document — no matter how long.
            </p>
          </div>
          
          {/* Feature 2 - Key Insights */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Visual Element */}
            <div className="w-full h-48 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="flex flex-row items-center gap-3">
                <div 
                  className="w-14 h-14 bg-yellow-400 rounded-lg"
                  style={{
                    animation: 'fadeInScale 0.6s ease-out 0.2s both'
                  }}
                ></div>
                <div 
                  className="h-1 w-8 bg-gray-300"
                  style={{
                    animation: 'expandWidth 0.4s ease-out 0.8s both'
                  }}
                ></div>
                <div 
                  className="w-14 h-14 bg-orange-400 rounded-full"
                  style={{
                    animation: 'fadeInScale 0.6s ease-out 1.2s both'
                  }}
                ></div>
                <div 
                  className="h-1 w-8 bg-gray-300"
                  style={{
                    animation: 'expandWidth 0.4s ease-out 1.6s both'
                  }}
                ></div>
                <div 
                  className="w-16 h-16 bg-purple-300 rounded-xl flex items-center justify-center"
                  style={{
                    animation: 'fadeInScale 0.6s ease-out 2s both, pulse 2s ease-in-out 2.6s infinite'
                  }}
                >
                  <span className="text-xl">💡</span>
                </div>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black mb-3"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Key Insights Extraction
            </h3>

            <p 
              className="text-gray-700 leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Automatically detect the most relevant ideas, concepts, and facts.
            </p>
          </div>

          {/* Feature 3 - Flashcards */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Visual Element */}
            <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl mb-6 flex items-center justify-center relative">
              <div className="relative w-32 h-32">
                {/* Central speech bubble */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center"
                    style={{
                      animation: 'fadeInScale 0.5s ease-out 0.3s both, pulse 2s ease-in-out 0.8s infinite'
                    }}
                  >
                    <div className="flex gap-1">
                      <div 
                        className="w-2 h-2 bg-white rounded-full"
                        style={{
                          animation: 'bounce 1.4s ease-in-out 0.8s infinite'
                        }}
                      ></div>
                      <div 
                        className="w-2 h-2 bg-white rounded-full"
                        style={{
                          animation: 'bounce 1.4s ease-in-out 1s infinite'
                        }}
                      ></div>
                      <div 
                        className="w-2 h-2 bg-white rounded-full"
                        style={{
                          animation: 'bounce 1.4s ease-in-out 1.2s infinite'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Circular profile indicators */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-400 rounded-full border-2 border-white"
                  style={{
                    animation: 'fadeInScale 0.5s ease-out 0.5s both, float 3s ease-in-out 1s infinite'
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full border-2 border-white"
                  style={{
                    animation: 'fadeInScale 0.5s ease-out 0.7s both, float 3s ease-in-out 1.2s infinite'
                  }}
                ></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-pink-400 rounded-full border-2 border-white"
                  style={{
                    animation: 'fadeInScale 0.5s ease-out 0.9s both, float 3s ease-in-out 1.4s infinite'
                  }}
                ></div>
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-400 rounded-full border-2 border-white"
                  style={{
                    animation: 'fadeInScale 0.5s ease-out 1.1s both, float 3s ease-in-out 1.6s infinite'
                  }}
                ></div>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black mb-3"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Flashcards for Faster Learning
            </h3>

            <p 
              className="text-gray-700 leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Turn your PDF into study-ready flashcards instantly.
            </p>
          </div>

          {/* Feature 4 - Ask Anything */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Visual Element */}
            <div className="w-full h-48 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Chat bubble */}
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                {/* Question marks */}
                <div 
                  className="absolute top-4 right-8 text-2xl"
                  style={{
                    animation: 'float 3s ease-in-out 0.5s infinite'
                  }}
                >
                  ?
                </div>
                <div 
                  className="absolute bottom-6 left-8 text-xl"
                  style={{
                    animation: 'float 3s ease-in-out 1s infinite'
                  }}
                >
                  ?
                </div>
              </div>
            </div>

            <h3 
              className="text-xl font-semibold text-black mb-3"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Ask Anything — Chat with Your PDF
            </h3>

            <p 
              className="text-gray-700 leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Ask questions and get grounded answers straight from the document.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
