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
        <title>Alex Chen | Business Analytics Professional | Data-Driven Problem Solver</title>
        <meta 
          name="description" 
          content="Business Analytics professional specializing in data analysis, business insights, and decision-making impact. View portfolio of analytics projects, skills in SQL, Python, Tableau, and more." 
        />
        <meta name="keywords" content="business analytics, data analyst, SQL, Python, Tableau, Power BI, data visualization, business intelligence" />
        <link rel="canonical" href="https://alexchen.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Alex Chen | Business Analytics Professional" />
        <meta property="og:description" content="Transforming complex data into actionable business insights. View my analytics portfolio and projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alexchen.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alex Chen | Business Analytics Professional" />
        <meta name="twitter:description" content="Transforming complex data into actionable business insights." />
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
