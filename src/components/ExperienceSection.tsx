import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Data Analytics Intern",
    company: "TechVenture Solutions",
    period: "Jun 2024 – Aug 2024",
    location: "San Francisco, CA",
    highlights: [
      "Developed automated SQL reporting pipeline that reduced weekly reporting time from 8 hours to 30 minutes",
      "Built customer segmentation model using Python, identifying 4 high-value segments worth $1.2M in potential upsell",
      "Created executive Tableau dashboard tracking 15 KPIs, adopted by C-suite for quarterly business reviews",
      "Collaborated with product team to design A/B testing framework for feature experiments",
    ],
  },
  {
    type: "work",
    title: "Business Intelligence Analyst (Part-time)",
    company: "RetailMax Analytics",
    period: "Jan 2024 – May 2024",
    location: "Remote",
    highlights: [
      "Analyzed 2M+ transactions to identify seasonal inventory optimization opportunities",
      "Delivered weekly performance reports to 5 regional managers, improving data-driven decision adoption",
      "Automated ETL processes using Python, reducing data preparation time by 65%",
      "Presented pricing analysis findings that informed $50K promotional strategy adjustments",
    ],
  },
  {
    type: "work",
    title: "Research Assistant – Analytics Lab",
    company: "University Analytics Research Center",
    period: "Sep 2023 – Dec 2023",
    location: "Boston, MA",
    highlights: [
      "Conducted statistical analysis for faculty research on consumer behavior patterns",
      "Cleaned and prepared datasets of 100K+ records for regression and clustering analysis",
      "Co-authored research brief on predictive modeling applications in retail analytics",
      "Mentored 3 undergraduate students in SQL and data visualization fundamentals",
    ],
  },
];

const accomplishments = [
  "Awarded 'Best Analytics Presentation' at university case competition (1st place out of 24 teams)",
  "Published analytics blog with 5K+ monthly readers covering business intelligence topics",
  "Volunteer data analyst for local nonprofit, optimizing donor engagement strategy",
  "Completed 50+ hours of advanced analytics training through corporate partnerships",
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Career Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience & Accomplishments
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A track record of delivering measurable business value through analytics, 
              from internships to independent research.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-sm" style={{ top: "1.5rem" }} />
                  
                  <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Accomplishments */}
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Notable Accomplishments
              </h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-4">
              {accomplishments.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
