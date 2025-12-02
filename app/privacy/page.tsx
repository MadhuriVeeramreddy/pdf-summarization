export const metadata = {
  title: "Privacy Policy | DocuFlash",
  description: "How DocuFlash collects, uses, and protects your data.",
};

const sections = [
  {
    title: "Data We Collect",
    body:
      "We collect account details you provide (like your email) and the PDFs you upload for processing. Diagnostics such as usage logs and device information help us keep the service reliable.",
  },
  {
    title: "How We Use Data",
    body:
      "Uploaded documents are processed temporarily to generate summaries and related outputs. They are not used to train models, and they are deleted automatically after processing completes.",
  },
  {
    title: "Sharing & Disclosure",
    body:
      "We do not sell your information. We only share data with trusted service providers (such as hosting and analytics providers) who help us deliver DocuFlash and who agree to strict confidentiality obligations.",
  },
  {
    title: "Security",
    body:
      "We implement encryption in transit, access controls, and auditing to protect your data. No system is perfectly secure, so please contact us immediately if you suspect unauthorized access.",
  },
  {
    title: "Your Choices",
    body:
      "You can request deletion of your waitlist information or uploaded files by contacting support@docuflash.ai. You may also unsubscribe from emails at any time.",
  },
  {
    title: "Updates",
    body:
      "We may update this Privacy Policy to reflect product, legal, or regulatory changes. Material updates will be announced via email or in-app notices.",
  },
  {
    title: "Contact",
    body:
      "Questions about privacy? Email support@docuflash.ai and we’ll respond promptly.",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-switzer)" }}
          >
            Transparency matters. This page explains what we collect, why we collect it, and how you stay in control of your data.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section
              key={section.title}
              className="bg-white/80 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow scroll-mt-32"
              style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
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

