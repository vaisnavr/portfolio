import { useState, useCallback, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.png";

const QUIZ_OPTIONS = [
  { label: "A", text: "Deep-Dive Analytics" },
  { label: "B", text: "Audit Tech Implementation" },
  { label: "C", text: "Scale Sales Ops" },
];

function ShatterOverlay({ active, onDone }: { active: boolean; onDone: () => void }) {
  useEffect(() => {
    if (active) {
      const timer = setTimeout(onDone, 900);
      return () => clearTimeout(timer);
    }
  }, [active, onDone]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Glass shatter shards */}
      {Array.from({ length: 20 }).map((_, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        const angle = (Math.random() - 0.5) * 120;
        const tx = (Math.random() - 0.5) * 300;
        const ty = (Math.random() - 0.5) * 300;
        return (
          <div
            key={i}
            className="absolute bg-primary/30 backdrop-blur-sm"
            style={{
              left: `${col * 20}%`,
              top: `${row * 25}%`,
              width: "20%",
              height: "25%",
              clipPath: `polygon(${Math.random()*20}% ${Math.random()*20}%, ${80+Math.random()*20}% ${Math.random()*30}%, ${70+Math.random()*30}% ${80+Math.random()*20}%, ${Math.random()*20}% ${70+Math.random()*30}%)`,
              animation: `shard-fly 0.8s ${i * 30}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              opacity: 1,
              ["--tx" as string]: `${tx}px`,
              ["--ty" as string]: `${ty}px`,
              ["--rot" as string]: `${angle}deg`,
            }}
          />
        );
      })}
      {/* Flash */}
      <div className="absolute inset-0 bg-primary/20 animate-[flash_0.5s_ease-out_forwards]" />
    </div>
  );
}

export function HeroSection() {
  const [phase, setPhase] = useState<"quiz" | "shattering" | "done">("quiz");

  const handleOptionClick = useCallback((index: number) => {
    if (phase !== "quiz") return;
    setPhase("shattering");
  }, [phase]);

  const handleShatterDone = useCallback(() => {
    setPhase("done");
    toast({
      title: "Welcome to my portfolio.",
      description: "Scroll down to explore my work.",
    });
    // Smooth scroll to about section
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <ShatterOverlay active={phase === "shattering"} onDone={handleShatterDone} />
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-all duration-500 ${phase === "shattering" ? "scale-95 opacity-0" : ""}`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(hsl(239 84% 67%) 1px, transparent 1px), linear-gradient(90deg, hsl(239 84% 67%) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />

        {/* Ambient glow blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column — Profile Image */}
            <div className="flex justify-center lg:justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-2xl animate-pulse-subtle" />
                {/* Image */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Vaisnav Roy — Business Analytics Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column — Quiz Challenge */}
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.25s" }}>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
                <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  Strategic Challenge
                </span>
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-8 md:p-10 shadow-2xl">
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-8">
                  The Product is Stalling.{" "}
                  <span className="text-gradient">What's your move?</span>
                </h2>

                <div className="space-y-3">
                  {QUIZ_OPTIONS.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(i)}
                      className="w-full text-left rounded-xl border border-border bg-secondary/50 px-5 py-4 transition-all duration-300 group hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center text-sm font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {option.label}
                        </span>
                        <span className="text-base font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                          {option.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="text-muted-foreground text-xs mt-6 text-center">
                  Pick any — the answer is always execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
