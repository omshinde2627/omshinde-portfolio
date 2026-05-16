import Hero from "@/components/Hero";
import { Header } from "@/components/ui/header-2";
import ScrollProgress from "@/components/ScrollProgress";
import { Footer } from "@/components/ui/footer-section";
import SEO from "@/components/SEO";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <SEO 
        title="Om Shinde — Full Stack Developer, Entrepreneur & AI Creator | Web Development Expert India"
        description="Om Shinde — Professional web developer from Pune, India specializing in React, TypeScript, AI tools, SEO optimization, and startup development. Hire an expert full-stack developer for modern web solutions."
        keywords="Om Shinde, Om Shinde portfolio, web developer India, web developer Pune, full stack developer, React developer, TypeScript developer, SEO expert India, AI developer India, startup builder, freelance web developer, digital marketing expert"
      />
      <div className="text-foreground overflow-x-hidden bg-background">
        <Header />
        <ScrollProgress />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <WhyMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
