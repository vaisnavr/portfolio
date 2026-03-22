import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, TrendingUp, BarChart3, PieChart, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const QUIZ_OPTIONS = [
  { label: "A", text: "Increase Marketing Spend", correct: false },
  { label: "B", text: "Audit the Technical Implementation & Cross-functional Alignment", correct: true },
  { label: "C", text: "Hire more Sales Reps", correct: false },
];

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
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, target, duration]);

  return `${value}${suffix}`;
}

function GlitchOverlay({ active, onDone }: { active: boolean; onDone: () => void }) {
  useEffect(() => {
    if (active) {
      const timer = setTimeout(onDone, 1200);
      return () => clearTimeout(timer);
    }
  }, [active, onDone]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Glitch bars */}
      <div className="absolute inset-0 animate-[glitch-wipe_1.2s_ease-in-out_forwards]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 bg-accent/90"
            style={{
              top: `${(i / 12) * 100}%`,
              height: `${100 / 12}%`,
              animationDelay: `${i * 40}ms`,
              animation: `glitch-bar 0.8s ${i * 40}ms ease-in-out forwards`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      {/* Flash */}
      <div className="absolute inset-0 bg-accent/20 animate-[flash_0.6s_0.4s_ease-out_forwards] opacity-0" />
    </div>
  );
}

export function HeroSection() {
  const [phase, setPhase] = useState<"quiz" | "transitioning" | "profile">("quiz");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [wrongPick, setWrongPick] = useState<number | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const stat1 = useCountUp(15, statsVisible, 1500, "+");
  const stat2 = useCountUp(3, statsVisible, 1200, "");
  const stat3 = useCountUp(2, statsVisible, 1800, "M+");

  const handleOptionClick = useCallback((index: number) => {
    if (selectedOption !== null) return;
    const option = QUIZ_OPTIONS[index];

    if (!option.correct) {
      setWrongPick(index);
      setTimeout(() => setWrongPick(null), 800);
      return;
    }

    setSelectedOption(index);
    setTimeout(() => {
      setPhase("transitioning");
    }, 600);
  }, [selectedOption]);

  const handleTransitionDone = useCallback(() => {
    setPhase("profile");
    toast({
      title: "Exactly. That's where I come in.",
      description: "Welcome to my portfolio.",
    });
    setTimeout(() => setStatsVisible(true), 400);
  }, []);

  // ── Quiz Phase ──
  if (phase === "quiz" || phase === "transitioning") {
    return (
      <>
        <GlitchOverlay active={phase === "transitioning"} onDone={handleTransitionDone} />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(220,30%,8%)]">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(hsl(175,60%,40%) 1px, transparent 1px), linear-gradient(90deg, hsl(175,60%,40%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          {/* Floating accents */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

          <div className={`relative z-10 max-w-2xl w-full mx-6 transition-all duration-500 ${selectedOption !== null ? "scale-95 opacity-60" : ""}`}>
            {/* Challenge badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                Business Logic Challenge
              </span>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[hsl(220,25%,18%)] bg-[hsl(220,30%,11%)] p-8 md:p-10 shadow-2xl">
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-[hsl(40,20%,98%)] leading-tight mb-8">
                A high-growth Fintech firm is seeing a{" "}
                <span className="text-accent">25% drop</span> in product adoption.{" "}
                <span className="text-[hsl(220,15%,60%)]">What's the first lever you pull?</span>
              </h2>

              <div className="space-y-3">
                {QUIZ_OPTIONS.map((option, i) => {
                  const isWrong = wrongPick === i;
                  const isSelected = selectedOption === i;

                  return (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(i)}
                      disabled={selectedOption !== null}
                      className={`
                        w-full text-left rounded-xl border px-5 py-4 transition-all duration-300 group
                        ${isWrong
                          ? "border-destructive/60 bg-destructive/10 animate-[shake_0.4s_ease-in-out]"
                          : isSelected
                            ? "border-accent bg-accent/15 shadow-glow"
                            : "border-[hsl(220,25%,20%)] bg-[hsl(220,30%,9%)] hover:border-accent/40 hover:bg-[hsl(220,30%,13%)]"
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`
                          flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors
                          ${isWrong
                            ? "bg-destructive/20 text-destructive"
                            : isSelected
                              ? "bg-accent text-[hsl(220,30%,8%)]"
                              : "bg-[hsl(220,25%,18%)] text-[hsl(220,15%,60%)] group-hover:text-accent"
                          }
                        `}>
                          {isWrong ? <XCircle size={16} /> : isSelected ? <CheckCircle2 size={16} /> : option.label}
                        </span>
                        <span className={`
                          text-sm md:text-base font-medium leading-relaxed transition-colors
                          ${isWrong
                            ? "text-destructive/80"
                            : isSelected
                              ? "text-accent"
                              : "text-[hsl(40,20%,90%)] group-hover:text-[hsl(40,20%,98%)]"
                          }
                        `}>
                          {option.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-[hsl(220,15%,45%)] text-xs mt-6 text-center">
                Choose wisely — your answer reveals something about your approach.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── Profile Phase ──
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

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

          {/* Name */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Vaisnav Roy
          </h1>

          {/* New headline */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <span className="text-gradient">The Bridge Between Data and Impact.</span>
          </p>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            Expert in Product Implementation, Business Strategy, and RevOps.
            I don't just analyze data—I drive the cross-functional adoption that delivers results.
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

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
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
