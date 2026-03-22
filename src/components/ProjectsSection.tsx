import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, BarChart3, Target, Lightbulb, Bot } from "lucide-react";

const projects = [
  {
    title: "Everlane Marketing & Brand Analytics Pipeline",
    icon: TrendingUp,
    problem: "Everlane needed data-driven insights into brand positioning gaps and customer retention drivers across multiple channels.",
    data: "Integrated Trustpilot, Reddit, and survey data (1000+ responses) with Google Trends and ESRI Tapestry segmentation data.",
    methods: "Segmentation, sentiment analysis, logistic regression, survey analytics",
    tools: ["Python", "R", "JMP", "Tableau", "Web Scraping", "Enginius"],
    insights: "Identified brand positioning gaps and key retention drivers through multi-source sentiment analysis and logistic regression modeling.",
    impact: "Delivered actionable segmentation strategy enabling targeted marketing interventions for improved customer retention.",
    github: "https://github.com/vaisnavr",
    color: "accent",
  },
  {
    title: "Digital Twin RAG Model",
    icon: Bot,
    problem: "Consumer persona research required expensive and time-consuming manual processes to simulate target customer behaviors.",
    data: "Consumer behavior profiles, product reviews, and shopping pattern datasets for persona modeling.",
    methods: "RAG architecture, vector embeddings, prompt engineering, persona simulation",
    tools: ["Python", "Gemini", "FAISS", "Vector Databases"],
    insights: "Developed a GenAI 'Digital Twin' for consumer persona mimicry, simulating a 'Trend-Conscious Sustainable Shopper'.",
    impact: "Outperformed baseline LLM by 60% in groundedness and persona consistency for consumer behavior simulation.",
    github: "https://github.com/vaisnavr",
    color: "primary",
  },
  {
    title: "AI-Driven Compliance Rule Engine",
    icon: Target,
    problem: "Fortune 500 FinServ clients needed automated compliance monitoring across multi-modal assets (Video, Image, Link) at scale.",
    data: "Multi-modal asset content from 10,000+ users including video transcriptions, image text, and linked content.",
    methods: "ML transcription, OCR (Optical Character Recognition), keyword detection, rule-based classification",
    tools: ["Python", "ML/OCR", "Sprinklr Platform", "JIRA"],
    insights: "Built automated detection of non-compliant keywords across video, image, and link assets at enterprise scale.",
    impact: "Deployed for Fortune 500 FinServ clients serving 10,000+ users; received Recognition Certificate for exceptional delivery.",
    github: "https://github.com/vaisnavr",
    color: "accent",
  },
  {
    title: "Executive Analytics Dashboard Suite",
    icon: BarChart3,
    problem: "Regional and global clients lacked actionable visibility into market research and consumer behavior metrics.",
    data: "Raw datasets from enterprise CRM, marketing platforms, and consumer behavior tracking systems.",
    methods: "Data modeling, automated ETL pipelines, interactive visualization design, structured analysis frameworks",
    tools: ["SQL", "Snowflake", "Tableau", "Power BI"],
    insights: "Transformed raw datasets into testable insights, surfacing hidden patterns in consumer behavior and market trends.",
    impact: "Delivered 15+ high-impact dashboards for regional and global enterprise clients, enabling data-driven strategic decisions.",
    github: "https://github.com/vaisnavr",
    color: "primary",
  },
  {
    title: "Order-to-Cash Automation Platform",
    icon: Lightbulb,
    problem: "Enterprise clients experienced manual accounts receivable workflows causing delays in cash-flow reporting and financial visibility.",
    data: "Financial transaction data including ACH, wire, and card transactions; ERP billing and accounts receivable records.",
    methods: "SQL optimization, stored procedures, payment portal integrations, SaaS financial modeling",
    tools: ["SQL", "Excel (VBA)", "ERP Systems", "SaaS Platforms"],
    insights: "Identified bottlenecks in financial transaction processing and automated key accounts receivable workflows.",
    impact: "Streamlined processing by 25%, achieved 30% working capital savings across 7+ end-to-end implementations.",
    github: "https://github.com/vaisnavr",
    color: "accent",
  },
  {
    title: "Time-Series Forecasting for Marketing Spend",
    icon: Users,
    problem: "Pacvue needed accurate forecasting models to optimize $100M+ in marketing spend allocation across regions.",
    data: "Historical marketing spend data, regional performance metrics, and business KPIs across multiple markets.",
    methods: "Time-series forecasting, modular data modeling, analytics pipeline architecture",
    tools: ["Python", "Snowflake", "Tableau", "SQL"],
    insights: "Identified regional growth trends and optimized marketing spend allocation through data-backed forecasting models.",
    impact: "Improved KPI predictability for $100M+ marketing spend, delivering strategic recommendations to executive stakeholders.",
    github: "https://github.com/vaisnavr",
    color: "primary",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Featured Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Analytics Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world analytics projects demonstrating the full journey from 
              business problem to measurable impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                    }`}>
                      <project.icon className={`w-6 h-6 ${
                        project.color === "accent" ? "text-accent" : "text-primary"
                      }`} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1">Problem</p>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Data</p>
                    <p className="text-muted-foreground">{project.data}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Methods</p>
                    <p className="text-muted-foreground">{project.methods}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Key Insights</p>
                    <p className="text-muted-foreground">{project.insights}</p>
                  </div>
                  <div className={`p-4 rounded-xl ${
                    project.color === "accent" ? "bg-accent/5 border border-accent/20" : "bg-primary/5 border border-primary/20"
                  }`}>
                    <p className={`font-medium mb-1 ${
                      project.color === "accent" ? "text-accent" : "text-primary"
                    }`}>Business Impact</p>
                    <p className="text-foreground font-medium">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/vaisnavr" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <ExternalLink size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
