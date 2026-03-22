import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink, Github, TrendingUp, Users, BarChart3, Target,
  Lightbulb, Bot, AlertTriangle, CheckCircle2, Code2, DollarSign,
  Briefcase, Scale, Megaphone, Cpu,
} from "lucide-react";

type ProjectCategory = "all" | "fintech" | "strategy";

interface FrictionItem { hurdle: string; solution: string; }

interface Project {
  title: string; icon: React.ElementType; category: ProjectCategory;
  industry: string; industryColor: string; status: string; problem: string;
  data: string; methods: string; tools: string[]; insights: string;
  impact: string; impactMetric: string; frictionLog: FrictionItem[];
  stakeholders: { icon: React.ElementType; label: string }[]; github: string;
}

const projects: Project[] = [
  {
    title: "Everlane Marketing & Brand Analytics Pipeline",
    icon: TrendingUp, category: "strategy", industry: "Retail / DTC",
    industryColor: "bg-orange-50 text-orange-600 border-orange-200",
    status: "Shipped",
    problem: "Everlane needed data-driven insights into brand positioning gaps and customer retention drivers across multiple channels.",
    data: "Integrated Trustpilot, Reddit, and survey data (1000+ responses) with Google Trends and ESRI Tapestry segmentation data.",
    methods: "Segmentation, sentiment analysis, logistic regression, survey analytics",
    tools: ["Python", "R", "JMP", "Tableau", "Web Scraping", "Enginius"],
    insights: "Identified brand positioning gaps and key retention drivers through multi-source sentiment analysis and logistic regression modeling.",
    impact: "Delivered actionable segmentation strategy enabling targeted marketing interventions for improved customer retention.",
    impactMetric: "Targeted Retention Strategy",
    frictionLog: [
      { hurdle: "Disparate data sources with no unified schema", solution: "Built custom ETL pipeline to normalize Trustpilot, Reddit, and survey data into a single analytics-ready format." },
      { hurdle: "Low survey response quality in key segments", solution: "Applied statistical weighting and cross-validated with behavioral data from Google Trends." },
    ],
    stakeholders: [{ icon: Megaphone, label: "Marketing" }, { icon: BarChart3, label: "Analytics" }, { icon: Users, label: "Product" }],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "Digital Twin RAG Model",
    icon: Bot, category: "fintech", industry: "AI / Consumer Tech",
    industryColor: "bg-blue-50 text-blue-600 border-blue-200",
    status: "Shipped",
    problem: "Consumer persona research required expensive and time-consuming manual processes to simulate target customer behaviors.",
    data: "Consumer behavior profiles, product reviews, and shopping pattern datasets for persona modeling.",
    methods: "RAG architecture, vector embeddings, prompt engineering, persona simulation",
    tools: ["Python", "Gemini", "FAISS", "Vector Databases"],
    insights: "Developed a GenAI 'Digital Twin' for consumer persona mimicry, simulating a 'Trend-Conscious Sustainable Shopper'.",
    impact: "Outperformed baseline LLM by 60% in groundedness and persona consistency for consumer behavior simulation.",
    impactMetric: "60% Improvement",
    frictionLog: [
      { hurdle: "LLM hallucination on niche consumer personas", solution: "Implemented RAG with FAISS vector store to ground responses in real consumer behavior data." },
      { hurdle: "Inconsistent persona outputs across sessions", solution: "Engineered structured prompts with persona guardrails and consistency scoring." },
    ],
    stakeholders: [{ icon: Cpu, label: "Engineering" }, { icon: Users, label: "Research" }, { icon: Briefcase, label: "Strategy" }],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "AI-Driven Compliance Rule Engine",
    icon: Target, category: "fintech", industry: "FinServ / Compliance",
    industryColor: "bg-blue-50 text-blue-600 border-blue-200",
    status: "Shipped",
    problem: "Fortune 500 FinServ clients needed automated compliance monitoring across multi-modal assets at scale.",
    data: "Multi-modal asset content from 10,000+ users including video transcriptions, image text, and linked content.",
    methods: "ML transcription, OCR, keyword detection, rule-based classification",
    tools: ["Python", "ML/OCR", "Sprinklr Platform", "JIRA"],
    insights: "Built automated detection of non-compliant keywords across video, image, and link assets at enterprise scale.",
    impact: "Deployed for Fortune 500 FinServ clients serving 10,000+ users; received Recognition Certificate.",
    impactMetric: "10K+ Users Served",
    frictionLog: [
      { hurdle: "OCR accuracy below 80% on low-quality image assets", solution: "Implemented multi-pass preprocessing pipeline with adaptive thresholding and noise reduction." },
      { hurdle: "Cross-team alignment on compliance rule definitions", solution: "Facilitated rule taxonomy workshops with Legal and created a versioned rule configuration system." },
    ],
    stakeholders: [{ icon: Scale, label: "Legal" }, { icon: Cpu, label: "Engineering" }, { icon: Briefcase, label: "Product" }],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "Executive Analytics Dashboard Suite",
    icon: BarChart3, category: "strategy", industry: "Enterprise / SaaS",
    industryColor: "bg-orange-50 text-orange-600 border-orange-200",
    status: "Shipped",
    problem: "Regional and global clients lacked actionable visibility into market research and consumer behavior metrics.",
    data: "Raw datasets from enterprise CRM, marketing platforms, and consumer behavior tracking systems.",
    methods: "Data modeling, automated ETL pipelines, interactive visualization design",
    tools: ["SQL", "Snowflake", "Tableau", "Power BI"],
    insights: "Transformed raw datasets into testable insights, surfacing hidden patterns in consumer behavior and market trends.",
    impact: "Delivered 15+ high-impact dashboards for regional and global enterprise clients.",
    impactMetric: "15+ Dashboards",
    frictionLog: [
      { hurdle: "Data latency of 24+ hours in legacy reporting", solution: "Migrated to Snowflake with incremental refresh, reducing latency to under 15 minutes." },
      { hurdle: "Stakeholder misalignment on KPI definitions", solution: "Created a shared metrics glossary and automated data validation layer." },
    ],
    stakeholders: [{ icon: Briefcase, label: "Executives" }, { icon: BarChart3, label: "Analytics" }, { icon: DollarSign, label: "Finance" }],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "Order-to-Cash Automation Platform",
    icon: Lightbulb, category: "fintech", industry: "FinTech / ERP",
    industryColor: "bg-blue-50 text-blue-600 border-blue-200",
    status: "Shipped",
    problem: "Enterprise clients experienced manual AR workflows causing delays in cash-flow reporting.",
    data: "Financial transaction data including ACH, wire, and card transactions; ERP billing and AR records.",
    methods: "SQL optimization, stored procedures, payment portal integrations, SaaS financial modeling",
    tools: ["SQL", "Excel (VBA)", "ERP Systems", "SaaS Platforms"],
    insights: "Identified bottlenecks in financial transaction processing and automated key AR workflows.",
    impact: "Streamlined processing by 25%, achieved 30% working capital savings across 7+ implementations.",
    impactMetric: "$2M+ Impact",
    frictionLog: [
      { hurdle: "Legacy ERP systems with no API access", solution: "Built custom SQL stored procedures and VBA macros for automated data extraction and reconciliation." },
      { hurdle: "Resistance to process change from finance teams", solution: "Ran parallel processing for 2 sprints to demonstrate accuracy before full cutover." },
    ],
    stakeholders: [{ icon: DollarSign, label: "Finance" }, { icon: Code2, label: "Engineering" }, { icon: Briefcase, label: "Operations" }],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "Time-Series Forecasting for Marketing Spend",
    icon: Users, category: "strategy", industry: "AdTech / RevOps",
    industryColor: "bg-rose-50 text-rose-600 border-rose-200",
    status: "Shipped",
    problem: "Pacvue needed accurate forecasting models to optimize $100M+ in marketing spend allocation.",
    data: "Historical marketing spend data, regional performance metrics, and business KPIs.",
    methods: "Time-series forecasting, modular data modeling, analytics pipeline architecture",
    tools: ["Python", "Snowflake", "Tableau", "SQL"],
    insights: "Identified regional growth trends and optimized marketing spend allocation through forecasting models.",
    impact: "Improved KPI predictability for $100M+ marketing spend, delivering strategic recommendations.",
    impactMetric: "$100M+ Optimized",
    frictionLog: [
      { hurdle: "Sparse historical data in emerging markets", solution: "Applied transfer learning from mature markets and Bayesian priors to stabilize forecasts." },
      { hurdle: "Stakeholder skepticism on model predictions", solution: "Built interactive what-if scenario dashboards allowing executives to stress-test assumptions." },
    ],
    stakeholders: [{ icon: Megaphone, label: "Marketing" }, { icon: DollarSign, label: "Revenue" }, { icon: BarChart3, label: "Analytics" }],
    github: "https://github.com/vaisnavr",
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return isVisible;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);

  return (
    <article
      ref={ref}
      className={`group bg-popover rounded-2xl border border-border p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_25px_hsl(45_80%_60%/0.15)] hover:border-primary/30 ${
        visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <project.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground leading-tight truncate">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-3">
          <Badge className={`${project.industryColor} border text-xs`}>
            {project.industry}
          </Badge>
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {project.status}
          </Badge>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="View on GitHub"><Github size={16} /></a>
        </div>
      </div>

      {/* Problem & Methods */}
      <div className="space-y-3 text-sm mb-5">
        <div>
          <p className="font-medium text-foreground mb-1">Problem</p>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="font-medium text-foreground mb-1">Methods</p>
          <p className="text-muted-foreground">{project.methods}</p>
        </div>
      </div>

      {/* Friction Log - Sticky Note style */}
      <div className="rounded-xl bg-amber-50 border border-amber-200/60 p-4 mb-5 rotate-[0.3deg]">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Friction Log
          </span>
        </div>
        <div className="space-y-3">
          {project.frictionLog.map((item, i) => (
            <div key={i} className="text-xs space-y-1">
              <p className="text-amber-900/70">
                <span className="text-amber-800 font-medium">Hurdle:</span> {item.hurdle}
              </p>
              <p className="text-primary">
                <span className="font-medium">✓ Solution:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stakeholder Map */}
      <div className="flex items-center gap-1 mb-5">
        <span className="text-xs text-muted-foreground mr-2">Teams:</span>
        {project.stakeholders.map((s, i) => (
          <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-xs text-secondary-foreground" title={s.label}>
            <s.icon className="w-3 h-3" /><span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Impact Metric */}
      <div className="rounded-xl bg-primary/5 border border-primary/15 p-4 mb-5">
        <p className="text-xs text-primary font-medium mb-1">Business Impact</p>
        <p className="text-primary font-display text-xl font-bold">{project.impactMetric}</p>
        <p className="text-muted-foreground text-xs mt-1">{project.impact}</p>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
        {project.tools.map((tool) => (
          <span key={tool} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: "All Projects" },
    { key: "fintech", label: "Fintech Projects" },
    { key: "strategy", label: "Strategy Projects" },
  ];

  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">Implementation War Room</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Case Studies & Impact</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each project follows the full journey — from business friction to shipped solution to measurable outcome.
            </p>
          </div>

          {/* Quick Jump Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-popover rounded-full border border-border p-1 gap-1">
              {categories.map((cat) => (
                <button key={cat.key} onClick={() => setFilter(cat.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === cat.key
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/vaisnavr" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                View All Projects on GitHub
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
