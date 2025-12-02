export const metadata = {
  title: "Terms of Service | DocuFlash",
  description: "Terms of Service for using DocuFlash",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body:
      "By accessing or using DocuFlash, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, you may not use DocuFlash.",
  },
  {
    title: "2. Use of the Service",
    body:
      "DocuFlash provides AI-assisted PDF summarization utilities. You must not misuse the service, attempt to disrupt our infrastructure, or use the output in violation of any applicable law or third-party rights.",
  },
  {
    title: "3. User Content",
    body:
      "You retain ownership of any documents you upload. By submitting content, you grant DocuFlash a limited license to process the files solely for delivering the requested functionality. We do not sell or train models on user uploads.",
  },
  {
    title: "4. Waitlist & Communications",
    body:
      "By joining the waitlist you consent to receive transactional emails about product updates. You can opt out at any time via the unsubscribe link in each email.",
  },
  {
    title: "5. Limitation of Liability",
    body:
      "DocuFlash is provided “as is” without warranties of any kind. We are not liable for indirect, incidental, or consequential damages arising from your use of the service.",
  },
  {
    title: "6. Changes to Terms",
    body:
      "We may update these Terms periodically. Continued use of DocuFlash after changes take effect constitutes acceptance of the modified Terms.",
  },
  {
    title: "Contact",
    body:
      "For questions about these Terms, email support@docuflash.ai.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-switzer)' }}>
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-black mb-4"
            style={{
              fontFamily: "var(--font-inter-display)",
              letterSpacing: "-0.02em",
            }}
          >
            Terms of Service
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            Please read these Terms carefully. They describe your rights and responsibilities when using DocuFlash.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-white/80 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow scroll-mt-32"
              style={{ animation: "fadeInUp 0.6s ease-out both" }}
            >
              <h2
                className="text-xl font-semibold text-black mb-3"
                style={{ fontFamily: "var(--font-inter-display)" }}
              >
                {section.title}
              </h2>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-switzer)" }}
              >
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

