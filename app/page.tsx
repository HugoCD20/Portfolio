import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import DataAI from "@/components/DataAI";
import LearningRoadmap from "@/components/LearningRoadmap";
import Experience from "@/components/Experience";
import ResumeCta from "@/components/ResumeCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-mono text-on-surface antialiased">
      <Header />
      <main className="w-full bg-surface pt-16">
        <div className="relative w-full overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-96 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]"
          />
          <Hero />
          <SocialBar />
        </div>
        <About />
        <Technologies />
        <FeaturedProjects />
        <OtherProjects />
        <DataAI />
        <LearningRoadmap />
        <Experience />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
