import { Award } from "lucide-react";
import logoPacvue from "@/assets/logo-pacvue.png";
import logoSprinklr from "@/assets/logo-sprinklr.png";
import logoHighradius from "@/assets/logo-highradius.png";

const experiences = [
  {
    type: "work",
    title: "Revenue Operations Analyst Intern",
    company: "Pacvue",
    period: "May 2025 – Aug 2025",
    location: "California",
    logo: logoPacvue,
    highlights: [
      "Architected modular data models and analytics pipelines to drive business experimentation, leveraging Snowflake and Tableau to identify regional growth trends and provide strategic recommendations to executive stakeholders.",
      "Communicated time-series forecasting outputs and model assumptions on $100M+ in marketing spend into clear, data-backed recommendations for technical, non-technical, and executive stakeholders, improving KPI predictability.",
    ],
  },
  {
    type: "work",
    title: "Business Systems Analyst (Managed Services)",
    company: "Sprinklr",
    period: "Sep 2022 – Aug 2024",
    location: "India",
    logo: logoSprinklr,
    highlights: [
      "Collaborated with regional and global clients to deliver 15+ high-impact dashboards, utilizing structured thinking to transform raw datasets into testable insights for market research and consumer behavior analysis.",
      "Managed end-to-end project lifecycles for enterprise partners, synthesizing complex compliance data to identify process optimization opportunities and drive the adoption of automated analytical assets.",
      "Enabled $5.5M+ ARR retention by translating business requirements into technical specifications for data workflows, collaborating with marketing, sales, product and engineering teams to support 50+ product features through Agile delivery (JIRA).",
      "Deployed an AI-driven compliance rule engine for Fortune 500 FinServ clients, utilizing ML transcription and OCR to identify non-compliant keywords in multi-modal assets for 10,000+ users. Received Recognition Certificate for exceptional client ownership.",
    ],
  },
  {
    type: "work",
    title: "Technical Implementation Consultant",
    company: "HighRadius",
    period: "Jun 2021 – Sep 2022",
    location: "India",
    logo: logoHighradius,
    highlights: [
      "Improved ERP data accuracy and operational efficiency by leading ingestion, transformation, and governance of data using advanced Microsoft Excel (VLOOKUP, VBA, PivotTables) to support enterprise ERP integrations.",
      "Spearheaded 7+ end-to-end Order-to-Cash implementations by gathering business requirements, conducting UAT, and deploying customized SaaS financial models within 3-month delivery timelines, while mentoring 5 interns.",
      "Streamlined financial transaction processing by 25% by implementing payment portal integrations with major financial institutions, enabling visibility into ACH, wire, and card transactions.",
      "Automated accounts receivable workflows, achieving 30% working capital savings, by optimizing SQL queries, stored procedures, triggers, and CTEs, improving data accuracy and cash-flow reporting.",
    ],
  },
];

const accomplishments = [
  "Recognition Certificate at Sprinklr for exceptional client ownership, analytical problem-solving, and cross-functional collaboration",
  "Led deployment of AI-driven compliance rule engine serving 10,000+ users across Fortune 500 FinServ clients",
  "Managed $100M+ in marketing spend analytics at Pacvue, delivering forecasting outputs to executive stakeholders",
  "Mentored 5 interns while delivering 7+ end-to-end Order-to-Cash implementations at HighRadius",
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
              3+ years driving measurable business value through product implementation, 
              business systems analysis, and revenue operations.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20 group">
                  <div className="hidden md:flex absolute left-6 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-sm" style={{ top: "1.5rem" }} />
                  
                  <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Logo - shown above text on mobile */}
                      <div className="flex justify-center md:hidden">
                        <div className="w-[160px] h-[80px] rounded-lg bg-white/90 border border-[hsl(214_32%_91%)] flex items-center justify-center p-3">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="max-h-[64px] max-w-[140px] object-contain group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      </div>

                      {/* Text content - 75% */}
                      <div className="flex-[3]">
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

                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Logo - right side on desktop, 25% */}
                      <div className="hidden md:flex flex-[1] items-center justify-center">
                        <div className="w-[120px] h-[60px] rounded-lg bg-white/90 border border-[hsl(214_32%_91%)] flex items-center justify-center p-2">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="max-h-[48px] max-w-[100px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </div>
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
