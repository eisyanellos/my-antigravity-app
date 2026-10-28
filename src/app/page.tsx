import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeadlineCard from "@/components/HeadlineCard";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import KeyNumbers from "@/components/KeyNumbers";
import ChecklistSection from "@/components/ChecklistSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary-soft-2 selection:text-primary-ink">
      {/* Sticky header */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Headline Card: The Idea in One Line */}
      <HeadlineCard />

      {/* Who This Is For */}
      <WhoThisIsFor />

      {/* Key Numbers */}
      <KeyNumbers />

      {/* 15-Step Checklist spanning 4 stages */}
      <ChecklistSection />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer with legal note */}
      <Footer />
    </main>
  );
}
