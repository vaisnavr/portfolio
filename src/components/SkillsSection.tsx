import { 
  Database, 
  BarChart2, 
  Target,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Analytics & Data",
    icon: Database,
    color: "accent",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL (Snowflake, MySQL)", level: 95 },
      { name: "A/B Testing & Hypothesis Testing", level: 88 },
      { name: "Time Series Forecasting", level: 85 },
      { name: "Data Modelling & EDA", level: 90 },
      { name: "Segmentation & Quantitative Analysis", level: 88 },
    ],
  },
  {
    title: "Visualization & BI",
    icon: BarChart2,
    color: "accent",
    skills: [
      { name: "Tableau", level: 92 },
      { name: "Power BI", level: 90 },
      { name: "Looker", level: 82 },
      { name: "Data Storytelling", level: 90 },
      { name: "Dashboard Design", level: 92 },
      { name: "dbt", level: 78 },
    ],
  },
  {
    title: "Consulting & Strategy",
    icon: Target,
    color: "accent",
    skills: [
      { name: "Client Management", level: 92 },
      { name: "Business Case Development", level: 90 },
      { name: "Stakeholder Engagement", level: 92 },
      { name: "Requirement Gathering", level: 90 },
      { name: "Revenue Operations (RevOps)", level: 88 },
      { name: "SaaS Metrics & KPI Design", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Layers,
    color: "accent",
    skills: [
      { name: "Excel (VBA, Power Query)", level: 95 },
      { name: "Snowflake", level: 88 },
      { name: "Git & GitHub", level: 85 },
      { name: "JIRA (Agile)", level: 90 },
      { name: "MS Excel (PivotTables)", level: 95 },
      { name: "Jupyter Notebooks", level: 88 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Skills & Expertise</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Toolkit
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive skill set spanning data engineering, analytics, visualization, 
              and business strategy, all focused on driving measurable outcomes.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === "accent" ? "text-accent" : "text-primary"
                    }`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            category.color === "accent" ? "bg-gradient-accent" : "bg-gradient-hero"
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">Also experienced with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["RAG & Vector Databases", "FAISS", "Prompt Engineering", "LLMs for Business", 
                "ETL Pipelines", "Agile/Scrum", "JIRA", "OCR & ML Transcription", "Financial Services",
                "Business Process Transformation", "R", "Web Scraping"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
