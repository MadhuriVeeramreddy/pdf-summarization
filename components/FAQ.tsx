"use client";
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Start with first item open

  const faqs = [
    {
      question: "Is SummarizeAI free?",
      answer: "Yes, early access users get free credits."
    },
    {
      question: "Do you store my documents?",
      answer: "Your files are secure and processed privately. We never share them."
    },
    {
      question: "What types of PDFs can I upload?",
      answer: "Textbooks, research papers, reports, articles — anything with text."
    },
    {
      question: "When are you launching?",
      answer: "We're opening early access soon. Join the waitlist to be notified."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-semibold text-black mb-6"
            style={{ 
              fontFamily: 'var(--font-inter-display)',
              letterSpacing: '-0.02em'
            }}
          >
            FAQ
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'var(--font-switzer)' ,letterSpacing:'-.01em'}}
          >
            Find quick answers to common questions about SummarizeAI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 
                  className="text-lg font-semibold text-black pr-4"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>
              
              {/* Collapsible Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#5235EF] to-[#8771FF] mb-4"></div>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'var(--font-switzer)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h4 
              className="text-xl font-semibold text-black mb-3"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Still have questions?
            </h4>
            <p 
              className="text-gray-700 mb-6 max-w-md mx-auto"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <button 
              className="px-8 py-4 bg-gradient-to-b from-[#5235EF] to-[#8771FF] text-white font-regular rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 text-lg relative group pr-16"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              <span className="relative z-10">Contact Support</span>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}