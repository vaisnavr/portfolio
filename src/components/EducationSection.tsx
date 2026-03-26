import { Award, BookOpen } from "lucide-react";
import logoUsc from "@/assets/logo-usc.png";
import logoKiit from "@/assets/logo-kiit.png";

const education = [
  {
    degree: "Master of Science in Business Analytics (STEM)",
    school: "University of Southern California, Marshall School of Business",
    period: "2024 – 2026",
    gpa: "3.6/4.0",
    logo: logoUsc,
    coursework: [
      "SQL & Python",
      "ETL & Data Warehousing",
      "Marketing Analytics",
      "LLMs for Business",
      "Product Management",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Kalinga Institute of Industrial Technology",
    period: "2018 – 2022",
    gpa: "9.2/10",
    logo: logoKiit,
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Machine Learning",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

const certifications = [
  {
    name: "Snowflake Data Warehousing",
    issuer: "Snowflake",
    date: "2025",
    icon: "❄️",
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2024",
    icon: "📈",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2024",
    icon: "📊",
  },
  {
    name: "SQL for Data Science",
    issuer: "Coursera (UC Davis)",
    date: "2023",
    icon: "🗄️",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Academic Background</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education & Certifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A strong foundation in Computer Science and Business Analytics, 
              complemented by industry-recognized certifications.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Mobile: logo left-aligned */}
                <div className="flex justify-start md:hidden py-2">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="h-[60px] max-w-[120px] object-contain group-hover:drop-shadow-[0_0_12px_hsl(var(--accent)/0.5)] group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Desktop: 70/30 grid */}
                <div className="grid md:grid-cols-[70%_30%] gap-12">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-[20px] font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-semibold text-[18px]">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground text-left md:text-right">
                        <p>{edu.period}</p>
                        <p className="font-medium text-foreground">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                        <BookOpen size={16} className="text-accent" />
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Logo column */}
                  <div className="hidden md:flex items-center justify-center">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="h-[80px] w-auto object-contain group-hover:drop-shadow-[0_0_16px_hsl(var(--accent)/0.45)] group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 flex items-center gap-4"
                >
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h4 className="font-medium text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
