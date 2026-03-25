import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroProfile from "@/assets/hero-profile.png";
import profilePhoto from "@/assets/profile-photo.png";

const QUIZ_OPTIONS = [
{ label: "01", text: "Deep-Dive Analytics" },
{ label: "02", text: "Audit Tech Implementation" },
{ label: "03", text: "Scale Sales Ops" }];


function useCountUp(target: number, start: boolean, duration = 1800, suffix = "") {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {if (rafRef.current) cancelAnimationFrame(rafRef.current);};
  }, [start, target, duration]);

  return `${value}${suffix}`;
}

export function HeroSection() {
  const [phase, setPhase] = useState<"quiz" | "dissolving" | "bridge" | "profile">("quiz");
  const [statsVisible, setStatsVisible] = useState(false);
  const [bridgeVisible, setBridgeVisible] = useState(false);

  const stat1 = useCountUp(15, statsVisible, 1500, "+");
  const stat2 = useCountUp(3, statsVisible, 1200, "");
  const stat3 = useCountUp(2, statsVisible, 1800, "M+");

  const handleOptionClick = useCallback(() => {
    if (phase !== "quiz") return;
    setPhase("dissolving");
  }, [phase]);

  useEffect(() => {
    if (phase === "dissolving") {
      const timer = setTimeout(() => {
        setPhase("bridge");
        setBridgeVisible(true);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "bridge") {
      const timer = setTimeout(() => {
        setBridgeVisible(false);
        setTimeout(() => {
          setPhase("profile");
          toast({
            title: "Great instinct.",
            description: "Welcome to my portfolio."
          });
          setTimeout(() => setStatsVisible(true), 400);
        }, 600);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // ── Quiz Phase ──
  if (phase === "quiz" || phase === "dissolving") {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(hsl(239 84% 67% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(239 84% 67% / 0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        {/* Ambient glows */}
        <div className="absolute top-20 right-[20%] w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

        <div className={`relative z-10 container mx-auto px-6 transition-all duration-700 ${phase === "dissolving" ? "opacity-0 scale-95 blur-sm" : ""}`}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Profile Image */}
            <div className="flex-shrink-0 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl animate-pulse-subtle" />
                <div className="absolute -inset-2 rounded-2xl bg-primary/10 blur-xl" />
                {/* Image */}
                <div className="relative w-72 h-80 md:w-80 md:h-[22rem] lg:w-[22rem] lg:h-[26rem] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                  <img
                    src={heroProfile}
                    alt="Vaisnav Roy — Business Analytics Professional"
                    className="w-full h-full object-cover object-top" />
                  
                </div>
              </div>
            </div>

            {/* Right: Quiz Card */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  Strategic Challenge
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
                The Product is Stalling.{" "}
                <span className="text-gradient">What's your move?</span>
              </h2>

              <div className="space-y-4">
                {QUIZ_OPTIONS.map((option, i) =>
                <button
                  key={i}
                  onClick={handleOptionClick}
                  disabled={phase === "dissolving"}
                  className="w-full text-left rounded-xl border border-border bg-secondary/40 hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow px-6 py-5 transition-all duration-300 group animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  
                    <div className="flex items-center gap-5">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {option.label}
                      </span>
                      <span className="text-base md:text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {option.text}
                      </span>
                      <ArrowRight size={18} className="ml-auto text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                )}
              </div>

              <p className="text-muted-foreground text-xs mt-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.7s" }}>
                Pick any — they all lead somewhere interesting.
              </p>
            </div>
          </div>
        </div>
      </section>);

  }

  // ── Profile Phase ──
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 left-[15%] text-primary/20 animate-float" style={{ animationDelay: "0.5s" }}>
          <TrendingUp size={48} />
        </div>
        <div className="absolute top-1/3 right-[20%] text-primary/15 animate-float" style={{ animationDelay: "1.5s" }}>
          <BarChart3 size={56} />
        </div>
        <div className="absolute bottom-1/3 left-[25%] text-primary/15 animate-float" style={{ animationDelay: "3s" }}>
          <PieChart size={40} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
              Open to Opportunities
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              Vaisnav Roy
            </h1>

            <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
              <span className="text-gradient">The Bridge Between Data and Impact.</span>
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>Expert in Product Implementation, Business Strategy in Fin-tech and Digital Marketing. I don't just analyze data, I drive the cross-functional adoption that delivers results.


            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
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
          </div>

          <div className="flex-shrink-0 animate-hero-photo opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl animate-pulse-subtle" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl ring-1 ring-primary/10">
                <img
                  src={profilePhoto}
                  alt="Vaisnav Roy — Business Analytics Professional"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary text-lg">✦</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 pt-12 border-t border-border/50 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat1}</p>
            <p className="text-sm text-muted-foreground mt-1">Analytics Projects</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat2}</p>
            <p className="text-sm text-muted-foreground mt-1">Industries Explored</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-foreground">${stat3}</p>
            <p className="text-sm text-muted-foreground mt-1">Business Impact</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>);

}