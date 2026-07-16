import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#02030a] text-white">
      <Navbar />
      <Ticker />
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}