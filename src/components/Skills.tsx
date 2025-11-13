import { Card } from "@/components/ui/card";

const skillsData = [
  { category: "Programming", skills: ["Java", "DSA", "OOP"] },
  { category: "Web Development", skills: ["Spring Boot", "Thymeleaf", "HTML/CSS", "JavaScript"] },
  { category: "Databases", skills: ["MySQL", "Spring Data JPA"] },
  { category: "Tools & Others", skills: ["Git", "VS Code", "IntelliJ IDEA", "MVC Pattern"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <Card
              key={category.category}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground">{skill}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:scale-x-105"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
