import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse" 
           style={{ animationDuration: "4s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
              AKASH RAUNIYAR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Java Developer | Web Enthusiast | DSA Learner
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate Computer Science student specializing in Data Science with expertise in 
            Java, Spring Boot, and full-stack web development. Experienced in building scalable 
            applications and solving complex problems through data structures and algorithms.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              <a href="/AKash_resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-6">
            <a 
              href="https://github.com/akas-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-7 w-7" />
            </a>
            <a 
              href="https://linkedin.com/in/akash-rauniyar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a 
              href="mailto:rauniyarakash144@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
