import FirstPage from "@/components/Hero/HeroCoponent/FirstPage";
import SecondSection from "@/components/Hero/HeroCoponent/SecondSection";
import HowItWorks from "@/components/Hero/HeroCoponent/HowItWorks";
import FAQ from "@/components/Hero/HeroCoponent/FAQ";
import CTASection from "@/components/Hero/HeroCoponent/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookChetna | Rent Books, Earn Money, Share Knowledge",
  description: "Join BookChetna, the premier peer-to-peer book rental marketplace. Rent books locally, list your own collection to earn money, and connect with a community of readers.",
  keywords: ["rent books", "online book rental", "earn money from books", "p2p book sharing", "used books", "book library", "BookChetna"],
  openGraph: {
    title: "BookChetna | Rent Books & Earn Money",
    description: "The smart way to read. Rent books from neighbors or lend yours to earn extra income.",
    url: "https://bookchetna.com",
    siteName: "BookChetna",
    locale: "en_US",
    type: "website",
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      
      <section id="hero" className="w-full">
        <FirstPage />
      </section>

      <section id="features" className="w-full">
        <SecondSection />
      </section>

      <section id="how-it-works" className="w-full">
        <HowItWorks />
      </section>

      <section id="faq" className="w-full">
        <FAQ />
      </section>

      <section id="cta" className="w-full mb-12">
        <CTASection />
      </section>

    </main>
  );
}
