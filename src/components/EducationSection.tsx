import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Business Analytics",
    school: "Boston University Questrom School of Business",
    period: "2023 – 2025",
    gpa: "3.9/4.0",
    coursework: [
      "Predictive Analytics",
      "Machine Learning for Business",
      "Data Mining & Statistical Analysis",
      "Business Intelligence & Visualization",
      "Marketing Analytics",
      "Operations Analytics",
    ],
  },
  {
    degree: "Bachelor of Science in Economics",
    school: "University of California, Los Angeles",
    period: "2019 – 2023",
    gpa: "3.7/4.0",
    coursework: [
      "Econometrics",
      "Statistical Methods",
      "Microeconomic Theory",
      "Financial Economics",
      "Data Analysis with R",
      "Business Strategy",
    ],
  },
];

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2024",
    icon: "📊",
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2024",
    icon: "📈",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "☁️",
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
              A strong foundation in business, economics, and analytics, 
              complemented by industry-recognized certifications.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-medium">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground text-left md:text-right">
                        <p>{edu.period}</p>
                        <p className="font-medium text-foreground">GPA: {edu.gpa}</p>
                      </div>
                    </div>

                    {/* Coursework */}
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
