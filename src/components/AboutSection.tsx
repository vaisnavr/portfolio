import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const strengths = [
  {
    icon: Target,
    title: "Analytical Thinking",
    description: "Breaking down complex problems into actionable insights through structured frameworks and rigorous analysis.",
  },
  {
    icon: Lightbulb,
    title: "Business Acumen",
    description: "Connecting data findings to real business outcomes, ensuring analyses drive meaningful decisions.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description: "Translating technical findings into compelling narratives that resonate with stakeholders at all levels.",
  },
  {
    icon: TrendingUp,
    title: "Impact Focus",
    description: "Prioritizing analyses that deliver measurable ROI and sustainable competitive advantages.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <p className="text-accent font-medium mb-4">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Turning Data Into Business Advantage
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a Business Analytics professional with a passion for uncovering the stories hidden within data. 
                  My approach combines technical rigor with strategic thinking to deliver insights that matter.
                </p>
                <p>
                  With experience spanning <span className="text-foreground font-medium">retail, finance, and technology</span>, 
                  I've developed a versatile analytical toolkit. I thrive on challenges that require both 
                  quantitative precision and creative problem-solving.
                </p>
                <p>
                  Currently seeking opportunities where I can leverage data to drive <span className="text-foreground font-medium">measurable business outcomes</span> — 
                  whether that's optimizing operations, improving customer experiences, or identifying new growth opportunities.
                </p>
              </div>
            </div>

            {/* Right Column - Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={strength.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <strength.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
