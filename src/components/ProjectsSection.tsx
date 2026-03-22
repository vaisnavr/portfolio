import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Lightbulb,
  Bot,
  AlertTriangle,
  CheckCircle2,
  Code2,
  DollarSign,
  Briefcase,
  Scale,
  Megaphone,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProjectCategory = "all" | "fintech" | "strategy" | "analytics";

interface FrictionItem {
  hurdle: string;
  solution: string;
}

interface Project {
  title: string;
  icon: React.ElementType;
  category: ProjectCategory;
  industry: string;
  status: string;
  problem: string;
  data: string;
  methods: string;
  tools: string[];
  insights: string;
  impact: string;
  impactMetric: string;
  frictionLog: FrictionItem[];
  stakeholders: { icon: React.ElementType; label: string }[];
  github: string;
}

const projects: Project[] = [
  {
    title: "Everlane Marketing & Brand Analytics Pipeline",
    icon: TrendingUp,
    category: "strategy",
    industry: "Retail / DTC",
    status: "Shipped",
    problem:
      "Everlane needed data-driven insights into brand positioning gaps and customer retention drivers across multiple channels.",
    data: "Integrated Trustpilot, Reddit, and survey data (1000+ responses) with Google Trends and ESRI Tapestry segmentation data.",
    methods:
      "Segmentation, sentiment analysis, logistic regression, survey analytics",
    tools: ["Python", "R", "JMP", "Tableau", "Web Scraping", "Enginius"],
    insights:
      "Identified brand positioning gaps and key retention drivers through multi-source sentiment analysis and logistic regression modeling.",
    impact:
      "Delivered actionable segmentation strategy enabling targeted marketing interventions for improved customer retention.",
    impactMetric: "Targeted Retention Strategy",
    frictionLog: [
      {
        hurdle: "Disparate data sources with no unified schema",
        solution:
          "Built custom ETL pipeline to normalize Trustpilot, Reddit, and survey data into a single analytics-ready format.",
      },
      {
        hurdle: "Low survey response quality in key segments",
        solution:
          "Applied statistical weighting and cross-validated with behavioral data from Google Trends.",
      },
    ],
    stakeholders: [
      { icon: Megaphone, label: "Marketing" },
      { icon: BarChart3, label: "Analytics" },
      { icon: Users, label: "Product" },
    ],
    github: "https://github.com/vaisnavr/Everlane-Marketing-Brand-Analytics-Pipeline",
  },
  {
    title: "Digital Twin RAG Model",
    icon: Bot,
    category: "fintech",
    industry: "AI / Consumer Tech",
    status: "Shipped",
    problem:
      "Consumer persona research required expensive and time-consuming manual processes to simulate target customer behaviors.",
    data: "Consumer behavior profiles, product reviews, and shopping pattern datasets for persona modeling.",
    methods:
      "RAG architecture, vector embeddings, prompt engineering, persona simulation",
    tools: ["Python", "Gemini", "FAISS", "Vector Databases"],
    insights:
      "Developed a GenAI 'Digital Twin' for consumer persona mimicry, simulating a 'Trend-Conscious Sustainable Shopper'.",
    impact:
      "Outperformed baseline LLM by 60% in groundedness and persona consistency for consumer behavior simulation.",
    impactMetric: "60% Improvement",
    frictionLog: [
      {
        hurdle: "LLM hallucination on niche consumer personas",
        solution:
          "Implemented RAG with FAISS vector store to ground responses in real consumer behavior data.",
      },
      {
        hurdle: "Inconsistent persona outputs across sessions",
        solution:
          "Engineered structured prompts with persona guardrails and consistency scoring.",
      },
    ],
    stakeholders: [
      { icon: Cpu, label: "Engineering" },
      { icon: Users, label: "Research" },
      { icon: Briefcase, label: "Strategy" },
    ],
    github: "https://github.com/vaisnavr/Digital-Twin-RAG-Model",
  },
  {
    title: "AI-Driven Compliance Rule Engine",
    icon: Target,
    category: "fintech",
    industry: "FinServ / Compliance",
    status: "Shipped",
    problem:
      "Fortune 500 FinServ clients needed automated compliance monitoring across multi-modal assets at scale.",
    data: "Multi-modal asset content from 10,000+ users including video transcriptions, image text, and linked content.",
    methods:
      "ML transcription, OCR, keyword detection, rule-based classification",
    tools: ["Python", "ML/OCR", "Sprinklr Platform", "JIRA"],
    insights:
      "Built automated detection of non-compliant keywords across video, image, and link assets at enterprise scale.",
    impact:
      "Deployed for Fortune 500 FinServ clients serving 10,000+ users; received Recognition Certificate.",
    impactMetric: "10K+ Users Served",
    frictionLog: [
      {
        hurdle: "OCR accuracy below 80% on low-quality image assets",
        solution:
          "Implemented multi-pass preprocessing pipeline with adaptive thresholding and noise reduction.",
      },
      {
        hurdle: "Cross-team alignment on compliance rule definitions",
        solution:
          "Facilitated rule taxonomy workshops with Legal and created a versioned rule configuration system.",
      },
    ],
    stakeholders: [
      { icon: Scale, label: "Legal" },
      { icon: Cpu, label: "Engineering" },
      { icon: Briefcase, label: "Product" },
    ],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "Time-Series Forecasting for Marketing Spend",
    icon: Users,
    category: "strategy",
    industry: "AdTech / RevOps",
    status: "Shipped",
    problem:
      "Pacvue needed accurate forecasting models to optimize $100M+ in marketing spend allocation.",
    data: "Historical marketing spend data, regional performance metrics, and business KPIs.",
    methods:
      "Time-series forecasting, modular data modeling, analytics pipeline architecture",
    tools: ["Python", "Snowflake", "Tableau", "SQL"],
    insights:
      "Identified regional growth trends and optimized marketing spend allocation through forecasting models.",
    impact:
      "Improved KPI predictability for $100M+ marketing spend, delivering strategic recommendations.",
    impactMetric: "$100M+ Optimized",
    frictionLog: [
      {
        hurdle: "Sparse historical data in emerging markets",
        solution:
          "Applied transfer learning from mature markets and Bayesian priors to stabilize forecasts.",
      },
      {
        hurdle: "Stakeholder skepticism on model predictions",
        solution:
          "Built interactive what-if scenario dashboards allowing executives to stress-test assumptions.",
      },
    ],
    stakeholders: [
      { icon: Megaphone, label: "Marketing" },
      { icon: DollarSign, label: "Revenue" },
      { icon: BarChart3, label: "Analytics" },
    ],
    github: "https://github.com/vaisnavr",
  },
  {
    title: "Wine Price vs. Rating Analysis (USC)",
    icon: BarChart3,
    category: "analytics",
    industry: "Consumer Analytics / Academic",
    status: "Shipped",
    problem:
      "Investigated whether expensive wines are necessarily better-rated, challenging common consumer assumptions using large-scale Vivino.com data.",
    data: "13,834 wines from Vivino.com across 33 countries, 4 wine types, with price, rating, region, and vintage data.",
    methods:
      "OLS regression, correlation analysis, EDA, hypothesis testing, segmentation by continent & wine type",
    tools: ["Python", "R", "JMP", "Tableau", "Web Scraping"],
    insights:
      "Price explains only 23.3% of rating variance (R²=0.233). Strongest price-rating correlation found in the Americas and Sparkling wines. Price is statistically significant but practically weak as a predictor.",
    impact:
      "Debunked the price-quality assumption with statistical rigor; delivered actionable segmentation insights for value-driven wine selection strategies.",
    impactMetric: "13.8K Wines Analyzed",
    frictionLog: [
      {
        hurdle: "Unbalanced dataset skewed toward European red wines (80% Europe, 63% Red)",
        solution:
          "Applied sub-group testing by continent and wine type to ensure findings generalized across segments.",
      },
      {
        hurdle: "Multiple confounding factors (region reputation, brand, vintage, packaging)",
        solution:
          "Designed ideal blind-test experiment framework and controlled for confounders via correlation matrix analysis.",
      },
    ],
    stakeholders: [
      { icon: BarChart3, label: "Analytics" },
      { icon: Users, label: "Research" },
      { icon: Lightbulb, label: "Strategy" },
    ],
    github: "https://github.com/vaisnavr/Wine-Quality-vs-Price-A-Data-Driven-Analysis",
  },
];

const tabs = [
  { key: "problem", label: "Problem & Methods" },
  { key: "friction", label: "Friction Log" },
  { key: "impact", label: "Business Impact" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return isVisible;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  const [activeTab, setActiveTab] = useState<TabKey>("problem");

  const goNext = () => {
    const idx = tabs.findIndex((t) => t.key === activeTab);
    if (idx < tabs.length - 1) setActiveTab(tabs[idx + 1].key);
  };
  const goPrev = () => {
    const idx = tabs.findIndex((t) => t.key === activeTab);
    if (idx > 0) setActiveTab(tabs[idx - 1].key);
  };

  const activeIndex = tabs.findIndex((t) => t.key === activeTab);

  return (
    <article
      ref={ref}
      className={`group rounded-2xl border border-purple-200/60 bg-white shadow-md hover:shadow-xl transition-all duration-500 flex flex-col ${
        visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header — always visible */}
      <div className="flex items-start justify-between p-5 pb-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <project.icon className="w-5 h-5 text-purple-600" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-slate-800 leading-tight truncate">
              {project.title}
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">{project.industry}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-3">
          <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200 text-xs hover:bg-emerald-50">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {project.status}
          </Badge>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="px-5">
        <div className="flex gap-1 bg-purple-50/80 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable content area */}
      <div className="relative flex-1 px-5 py-4 min-h-[200px]">
        {/* Arrow navigation */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className={`absolute left-1 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full transition-all ${
            activeIndex === 0
              ? "opacity-0 pointer-events-none"
              : "text-purple-400 hover:text-purple-600 hover:bg-purple-50"
          }`}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === tabs.length - 1}
          className={`absolute right-1 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full transition-all ${
            activeIndex === tabs.length - 1
              ? "opacity-0 pointer-events-none"
              : "text-purple-400 hover:text-purple-600 hover:bg-purple-50"
          }`}
        >
          <ChevronRight size={16} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* Slide 1: Problem & Methods */}
            <div className="min-w-full px-2 space-y-3 text-sm">
              <div>
                <p className="font-medium text-slate-700 mb-1">Problem</p>
                <p className="text-slate-500 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="font-medium text-slate-700 mb-1">Data</p>
                <p className="text-slate-500 leading-relaxed">{project.data}</p>
              </div>
              <div>
                <p className="font-medium text-slate-700 mb-1">Methods</p>
                <p className="text-slate-500">{project.methods}</p>
              </div>
            </div>

            {/* Slide 2: Friction Log */}
            <div className="min-w-full px-2">
              <div className="rounded-xl bg-purple-50/60 border border-purple-100 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-purple-500" />
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                    Friction Log & Solution Output
                  </span>
                </div>
                <div className="space-y-3">
                  {project.frictionLog.map((item, i) => (
                    <div key={i} className="text-xs space-y-1">
                      <p className="text-slate-600">
                        <span className="text-slate-700 font-medium">Hurdle:</span>{" "}
                        {item.hurdle}
                      </p>
                      <p className="text-emerald-600">
                        <span className="font-medium">Solution:</span>{" "}
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Stakeholder Map */}
              <div className="flex items-center gap-1 mt-4">
                <span className="text-xs text-slate-400 mr-2">Teams:</span>
                {project.stakeholders.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-xs text-purple-600 border border-purple-100"
                    title={s.label}
                  >
                    <s.icon className="w-3 h-3" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 3: Business Impact */}
            <div className="min-w-full px-2 space-y-4">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
                <p className="text-xs text-emerald-600 font-medium mb-1">
                  Business Impact
                </p>
                <p className="text-emerald-700 font-display text-2xl font-bold">
                  {project.impactMetric}
                </p>
                <p className="text-slate-600 text-sm mt-2">{project.impact}</p>
              </div>
              <div>
                <p className="font-medium text-slate-700 text-sm mb-1">Key Insight</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.insights}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-4">
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                activeIndex === i
                  ? "bg-purple-500 w-5"
                  : "bg-purple-200 hover:bg-purple-300"
              }`}
              aria-label={tab.label}
            />
          ))}
        </div>
      </div>

      {/* Tools — always visible at bottom */}
      <div className="flex flex-wrap gap-1.5 px-5 pb-5 pt-3 border-t border-purple-100/60 mt-auto">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: "All Projects" },
    { key: "fintech", label: "Fintech Projects" },
    { key: "strategy", label: "AI&Strategy Projects" },
    { key: "analytics", label: "Analytics Projects" },
  ];

  return (
    <section id="projects" className="py-24 relative" style={{ background: "#F3E8FF" }}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-purple-600 font-medium mb-4 text-sm uppercase tracking-wider">
              Implementation War Room
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Case Studies & Impact
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Each project follows the full journey — from business friction to
              shipped solution to measurable outcome.
            </p>
          </div>

          {/* Quick Jump Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1 gap-1 shadow-sm border border-purple-100">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filter === cat.key
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-slate-500 hover:text-slate-700 hover:bg-purple-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-300 text-purple-700 hover:bg-purple-100 hover:text-purple-800 bg-white"
            >
              <a
                href="https://github.com/vaisnavr"
                target="_blank"
                rel="noopener noreferrer"
              >
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
