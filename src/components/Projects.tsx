import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "GoRide - Bus Pass Management System",
    description: "A comprehensive web application to automate bus pass application and approval processes with dedicated user and admin modules.",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "User and admin authentication modules",
      "CRUD operations for passes, routes, and users",
      "MySQL database integration with Spring Data JPA",
      "Responsive design for all devices"
    ]
  },
  {
    title: "QuizApplication",
    description: "An interactive quiz platform with score tracking, database-driven questions, and instant result display for seamless learning experience.",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "CSS"],
    features: [
      "Dynamic question loading from database",
      "Real-time score tracking and calculation",
      "Result display with detailed analytics",
      "Spring Data JPA for data persistence"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable web applications with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_40px_hsl(200_100%_50%_/_0.25)] group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Code className="h-6 w-6 text-primary shrink-0 ml-4" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-muted-foreground">Key Features:</h4>
                  <ul className="space-y-1 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
