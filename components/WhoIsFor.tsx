export function WhoIsFor() {
  return (
    <section className="w-full pb-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
            style={{ 
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.02em'
            }}
          >
            Who this is for
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Designed for professionals and learners who need to process information efficiently
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Student Card */}
          <div className="bg-gradient-to-tr from-white via-[#5235EF]/10 to-white  rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v6" />
              </svg>
            </div>
            <h4 
              className="font-semibold text-black mb-2 text-lg"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Students
            </h4>
            <p 
              className="text-gray-700 text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Preparing for exams and managing multiple textbooks efficiently
            </p>
          </div>

          {/* Researcher Card */}
          <div className="bg-gradient-to-tr from-white via-[#5235EF]/10 to-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 
              className="font-semibold text-black mb-2 text-lg"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Researchers
            </h4>
            <p 
              className="text-gray-700 text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Reading and analyzing long research papers and academic documents
            </p>
          </div>

          {/* Professional Card */}
          <div className="bg-gradient-to-tr from-white via-[#5235EF]/10 to-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h4 
              className="font-semibold text-black mb-2 text-lg"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Professionals
            </h4>
            <p 
              className="text-gray-700 text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)',letterSpacing:'-.01em' }}
            >
              Dealing with business reports, contracts, and lengthy documents
            </p>
          </div>

          {/* Anyone Card */}
          <div className="bg-gradient-to-tr from-white via-[#5235EF]/10 to-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 
              className="font-semibold text-black mb-2 text-lg"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Everyone
            </h4>
            <p 
              className="text-gray-700 text-sm leading-relaxed font-normal"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Anyone who wants to learn faster and save time on information processing
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        {/* <div className="text-center">
          <p 
            className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-normal"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            DocuFlash gives you everything you need to understand complex documents effortlessly.
          </p>
        </div> */}
      </div>
    </section>
  );
}