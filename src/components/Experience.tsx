import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and accomplishments
          </p>
        </div>

        <div className="space-y-8">
          {/* Internship */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.2)] animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Web Development & Marketing Intern</CardTitle>
                  <div className="text-muted-foreground">
                    <p className="font-semibold">IBM (Virtual Internship)</p>
                    <p className="text-sm">Aug 2025 - Oct 2025</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Built a website frontend for "shopman" using HTML, CSS, and JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gained practical experience in designing web applications and improving user interfaces</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.2)] animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Achievements & Competitions</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">🏆</span>
                  <span><strong className="text-foreground">Qualified for Round 2</strong> of the HCL Hackathon sponsored by GUVI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">🏆</span>
                  <span><strong className="text-foreground">Selected at college level</strong> for Smart India Hackathon (SIH) 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">🏆</span>
                  <span>Participated in multiple inter-college hackathons and web development challenges</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Position of Responsibility */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.2)] animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Member - DataVerse Club</CardTitle>
                  <div className="text-muted-foreground">
                    <p className="font-semibold">ABES Engineering College</p>
                    <p className="text-sm">Dec 2023 - Jan 2025</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Actively participated in technical sessions and coding events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborated with peers on DSA and web development projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
