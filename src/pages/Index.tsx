import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vaisnav Roy | Business Analytics & Product Strategy Professional</title>
        <meta 
          name="description" 
          content="Business Analytics professional specializing in product implementation, revenue operations, and data-driven strategy. Expert in SQL, Python, Snowflake, Tableau, and cross-functional leadership." 
        />
        <meta name="keywords" content="business analytics, product analytics, RevOps, SQL, Python, Snowflake, Tableau, Power BI, data visualization, business intelligence, USC Marshall" />
        <link rel="canonical" href="https://vaisnavroy.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vaisnav Roy | Business Analytics & Product Strategy" />
        <meta property="og:description" content="The Bridge Between Data and Impact. Expert in Product Implementation, Business Strategy, and RevOps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaisnavroy.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vaisnav Roy | Business Analytics & Product Strategy" />
        <meta name="twitter:description" content="The Bridge Between Data and Impact. Expert in Product Implementation, Business Strategy, and RevOps." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
