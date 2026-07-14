import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import How from "@/components/How";
import Roles from "@/components/Roles";
import Features from "@/components/Features";
import BentoGrid from "@/components/BentoGrid";
import Demos from "@/components/Demos";
import TrustNumbers from "@/components/TrustNumbers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <How />
        <Roles />
        <Features />
        <BentoGrid />
        <Demos />
        <TrustNumbers />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
