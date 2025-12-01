import { Benefits } from "components/Benefits";
import { CTA } from "components/CTA";
import { FAQ } from "components/FAQ";
import { FeatureSection } from "components/Feature";
import { Footer } from "components/Footer";
import { HowItWorks } from "components/HowItWorks";
import { Problem } from "components/Problem";
import { WhoIsFor } from "components/WhoIsFor";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <FeatureSection />
      <WhoIsFor />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
