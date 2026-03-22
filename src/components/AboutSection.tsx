import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const strengths = [
  { icon: Target, title: "Product Implementation", description: "End-to-end project lifecycle management, from requirement gathering and UAT to Agile delivery with cross-functional teams." },
  { icon: Lightbulb, title: "Business Strategy & RevOps", description: "Translating business requirements into technical specifications, driving revenue operations and SaaS metrics optimization." },
  { icon: Users, title: "Cross-functional Leadership", description: "Bridging marketing, sales, product, and engineering teams to drive adoption and deliver measurable business outcomes." },
  { icon: TrendingUp, title: "Data-Driven Impact", description: "Building analytics pipelines, dashboards, and AI-driven solutions that enable $5.5M+ ARR retention and 30% efficiency gains." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                    <img src={profilePhoto} alt="Vaisnav Roy — Business Analytics Professional" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">✦</span>
                  </div>
                </div>
              </div>

              <p className="text-primary font-medium mb-4">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Turning Data Into Business Advantage
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a Business Analytics graduate from <span className="text-foreground font-medium">USC Marshall School of Business</span> with
                  3+ years of experience in product implementation, business systems analysis, and revenue operations across
                  <span className="text-foreground font-medium"> Financial Services, SaaS, and Fintech</span>.
                </p>
                <p>
                  I don't just analyze data — I drive the cross-functional adoption that delivers results. From architecting
                  analytics pipelines in Snowflake to deploying AI-driven compliance engines for Fortune 500 clients,
                  I bridge the gap between technical execution and strategic impact.
                </p>
                <p>
                  Currently seeking opportunities in <span className="text-foreground font-medium">Business Analytics, Product Analytics, and Strategy</span> where
                  I can leverage data to drive measurable business outcomes.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={strength.title}
                  className="group p-6 rounded-2xl bg-popover border border-border hover:shadow-[0_0_25px_hsl(45_80%_60%/0.15)] hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <strength.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
