import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in CSE - Data Science",
    institution: "ABES Engineering College, Ghaziabad",
    score: "CGPA: 8.47",
    year: "Expected Nov 2025",
    icon: "🎓"
  },
  {
    degree: "Class XII (UP Board)",
    institution: "R I C BALI NICHLAUL MAHARAJGANJ",
    score: "84.8%",
    year: "April 2023",
    icon: "📚"
  },
  {
    degree: "Class X (ICSE)",
    institution: "LITTLE FLOWER SCHOOL MAHARAJGANJ",
    score: "81.17%",
    year: "July 2020",
    icon: "📖"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{edu.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    <div className="text-muted-foreground">
                      <p className="font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{edu.score}</div>
                    <div className="text-sm text-muted-foreground">{edu.year}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
