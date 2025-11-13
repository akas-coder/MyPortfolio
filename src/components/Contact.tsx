import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_40px_hsl(200_100%_50%_/_0.25)] animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:rauniyarakash144@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">rauniyarakash144@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919335528946"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 9335528946</p>
              </div>
            </a>

            <a
              href="https://github.com/akas-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground font-medium">@akas-coder</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/akash-rauniyar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium">akash-rauniyar</p>
              </div>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Available for internships and full-time opportunities
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              <a href="/AKash_resume.pdf" download>
                Download Full Resume
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
