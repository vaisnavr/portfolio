import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, ShoppingCart, Target, BarChart3, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "Sales Forecasting Engine",
    icon: TrendingUp,
    problem: "Retail chain struggled with inventory management due to inaccurate demand predictions, leading to $500K annual overstock losses.",
    data: "3 years of historical sales data (2M+ transactions), weather data, promotional calendars, and economic indicators.",
    methods: "Time series analysis (ARIMA, Prophet), feature engineering, ensemble modeling",
    tools: ["Python", "Pandas", "Prophet", "Tableau"],
    insights: "Identified seasonal patterns and promotional lift effects that improved forecast accuracy by 23%.",
    impact: "Reduced inventory costs by $180K annually and decreased stockouts by 35%.",
    github: "https://github.com",
    color: "accent",
  },
  {
    title: "Customer Segmentation Analysis",
    icon: Users,
    problem: "E-commerce company lacked targeted marketing strategies, treating all customers uniformly despite diverse behaviors.",
    data: "Customer transaction history, website behavior logs, and demographic data for 150K customers.",
    methods: "K-means clustering, RFM analysis, behavioral cohort analysis",
    tools: ["Python", "Scikit-learn", "SQL", "Power BI"],
    insights: "Discovered 5 distinct customer personas with unique purchasing patterns and lifetime value trajectories.",
    impact: "Enabled targeted campaigns that increased email conversion rates by 42% and customer retention by 18%.",
    github: "https://github.com",
    color: "primary",
  },
  {
    title: "Executive Performance Dashboard",
    icon: BarChart3,
    problem: "Leadership team spent 10+ hours weekly compiling reports from disparate sources, delaying strategic decisions.",
    data: "Integrated data from CRM, ERP, and marketing platforms covering sales, operations, and customer metrics.",
    methods: "Data modeling, automated ETL pipelines, interactive visualization design",
    tools: ["SQL", "Tableau", "Python", "Snowflake"],
    insights: "Surfaced hidden correlations between marketing spend and regional sales performance.",
    impact: "Reduced reporting time by 85% and accelerated decision-making cycle from 2 weeks to 2 days.",
    github: "https://github.com",
    color: "accent",
  },
  {
    title: "A/B Testing Framework",
    icon: Target,
    problem: "Product team ran experiments without statistical rigor, leading to false conclusions and wasted development resources.",
    data: "User interaction data from web and mobile platforms across 500K monthly active users.",
    methods: "Hypothesis testing, Bayesian analysis, sequential testing, sample size calculations",
    tools: ["Python", "R", "SQL", "Jupyter"],
    insights: "Built reusable framework that standardized experiment design and automated statistical analysis.",
    impact: "Prevented 3 false positive feature rollouts worth $200K in development costs.",
    github: "https://github.com",
    color: "primary",
  },
  {
    title: "Churn Prediction Model",
    icon: ShoppingCart,
    problem: "SaaS company had 15% monthly churn rate but couldn't identify at-risk customers until cancellation.",
    data: "Usage logs, support tickets, billing history, and NPS scores for 50K subscribers.",
    methods: "Logistic regression, random forest, feature importance analysis, model interpretation",
    tools: ["Python", "XGBoost", "SHAP", "Tableau"],
    insights: "Identified 7 early warning signals that predict churn 30 days in advance with 78% accuracy.",
    impact: "Enabled proactive retention efforts that reduced churn by 22% within 6 months.",
    github: "https://github.com",
    color: "accent",
  },
  {
    title: "Market Basket Analysis",
    icon: Lightbulb,
    problem: "Grocery retailer wanted to optimize store layouts and cross-sell strategies but lacked data-driven insights.",
    data: "1.5 years of point-of-sale transaction data covering 10K+ SKUs and 200K transactions.",
    methods: "Association rule mining (Apriori), lift analysis, network visualization",
    tools: ["Python", "MLxtend", "NetworkX", "Power BI"],
    insights: "Uncovered 150+ high-confidence product associations not captured by category-based thinking.",
    impact: "Strategic product placements increased basket size by 8% and promotional bundle sales by 25%.",
    github: "https://github.com",
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
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Header */}
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

                {/* Content */}
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

                {/* Tools */}
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
