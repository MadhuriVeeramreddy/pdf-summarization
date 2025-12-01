export function PreviewSection() {
  return (
    <section className="w-full py-32 bg-white">
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
            See your PDF summarized beautifully
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            A clean interface that delivers summaries, insights, highlights, and
            flashcards with zero clutter.
          </p>
        </div>

        {/* Screenshot Card */}
        <div className="rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          {/* Top Bar */}
          <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* Screenshot Placeholder */}
          <div className="h-[500px] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
            <p className="text-gray-400 text-lg">
              (Your product screenshot goes here)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
