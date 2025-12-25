import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, TrendingUp, BarChart3, PieChart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Floating Analytics Icons */}
        <div className="absolute top-1/4 left-[15%] text-accent/20 animate-float" style={{ animationDelay: "0.5s" }}>
          <TrendingUp size={48} />
        </div>
        <div className="absolute top-1/3 right-[20%] text-primary/15 animate-float" style={{ animationDelay: "1.5s" }}>
          <BarChart3 size={56} />
        </div>
        <div className="absolute bottom-1/3 left-[25%] text-accent/15 animate-float" style={{ animationDelay: "3s" }}>
          <PieChart size={40} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-subtle" />
            Open to Opportunities
          </div>

          {/* Name & Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Alex Chen
          </h1>
          
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Business Analytics Professional |{" "}
            <span className="text-gradient">Data-Driven Problem Solver</span>
          </p>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            Transforming complex data into actionable business insights. 
            I help organizations make smarter decisions through rigorous analysis, 
            compelling visualizations, and strategic thinking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="/resume.pdf" download>
                <Download size={20} />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">
                <Mail size={20} />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Analytics Projects</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground mt-1">Industries Explored</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">$2M+</p>
              <p className="text-sm text-muted-foreground mt-1">Business Impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
