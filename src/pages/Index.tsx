import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { Header } from "@/components/ui/header-2";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingFallback from "@/components/LoadingFallback";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Footer } from "@/components/ui/footer-section";

// Lazy load components that are below the fold
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const WhyMe = lazy(() => import("@/components/WhyMe"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <BeamsBackground intensity="low" className="text-foreground overflow-x-hidden">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <WhyMe />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </BeamsBackground>
  );
};

export default Index;
