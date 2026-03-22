import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, TrendingUp, BarChart3, PieChart, Megaphone, Settings, Briefcase } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.png";

const MOVES = [
  { icon: Megaphone, label: "Marketing", correct: false },
  { icon: Settings, label: "Product", correct: true },
  { icon: Briefcase, label: "Sales", correct: false },
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

export function HeroSection() {
  const [phase, setPhase] = useState<"challenge" | "wrong" | "reveal" | "profile">("challenge");
  const [wrongLabel, setWrongLabel] = useState("");
  const [statsVisible, setStatsVisible] = useState(false);

  const stat1 = useCountUp(15, statsVisible, 1500, "+");
  const stat2 = useCountUp(3, statsVisible, 1200, "");
  const stat3 = useCountUp(2, statsVisible, 1800, "M+");

  const handleMove = useCallback((move: typeof MOVES[0]) => {
    if (phase !== "challenge" && phase !== "wrong") return;

    if (!move.correct) {
      setWrongLabel(move.label);
      setPhase("wrong");
      setTimeout(() => setPhase("challenge"), 1500);
      return;
    }

    setPhase("reveal");
  }, [phase]);

  const handleSeeApproach = useCallback(() => {
    setPhase("profile");
    toast({
      title: "Exactly. That's where I come in.",
      description: "Welcome to my portfolio.",
    });
    setTimeout(() => setStatsVisible(true), 400);
  }, []);

  // ── Challenge / Reveal Phase ──
  if (phase !== "profile") {
    return (
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-lg w-full mx-6 text-center">
          {phase === "reveal" ? (
            /* ── Reveal Card ── */
            <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
              <div className="glass rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                  <Settings className="text-primary" size={24} />
                </div>
                <p className="text-foreground text-lg md:text-xl font-semibold leading-relaxed mb-2">
                  Here's what I'd do—and why most teams get this wrong.
                </p>
                <p className="text-muted-foreground text-sm mb-8">
                  It's never just one lever. It's about auditing the full system.
                </p>
                <Button variant="hero" size="lg" onClick={handleSeeApproach}>
                  See my approach
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          ) : (
            /* ── Challenge Card ── */
            <div>
              {/* Scenario */}
              <div className="glass rounded-2xl p-8 md:p-10 mb-8">
                <div className="flex items-center gap-3 justify-center mb-6">
                  <span className="text-2xl">📉</span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Adoption dropped 25%
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  What's your first move?
                </p>
              </div>

              {/* Move Buttons */}
              <div className="flex items-center justify-center gap-4 mb-6">
                {MOVES.map((move) => {
                  const Icon = move.icon;
                  const isWrongPick = phase === "wrong" && wrongLabel === move.label;

                  return (
                    <button
                      key={move.label}
                      onClick={() => handleMove(move)}
                      disabled={phase === "wrong"}
                      className={`
                        group flex flex-col items-center gap-2 px-6 py-5 rounded-xl border transition-all duration-300
                        ${isWrongPick
                          ? "border-destructive/60 bg-destructive/10 animate-[shake_0.4s_ease-in-out]"
                          : "border-border bg-background/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 active:scale-95"
                        }
                      `}
                    >
                      <Icon
                        size={28}
                        className={`transition-colors ${isWrongPick ? "text-destructive" : "text-muted-foreground group-hover:text-primary"}`}
                      />
                      <span className={`text-sm font-medium transition-colors ${isWrongPick ? "text-destructive" : "text-foreground/80 group-hover:text-foreground"}`}>
                        {move.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Wrong feedback */}
              {phase === "wrong" && (
                <p className="text-destructive/80 text-sm animate-[fadeIn_0.3s_ease-out]">
                  Not quite — think bigger.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // ── Profile Phase ──
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
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

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
              Expert in Product Implementation, Business Strategy, and RevOps.
              I don't just analyze data—I drive the cross-functional adoption that delivers results.
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
                  className="w-full h-full object-cover"
                />
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
    </section>
  );
}
