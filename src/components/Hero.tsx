import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20 lg:pt-0" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-xl text-primary/80 mb-2">Hey, I'm</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Mazen <span className="gradient-text">Hisham</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A Data Scientist & AI Enthusiast
              </p>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                Data is only useful when it drives business outcomes — I help companies uncover patterns, 
                predict trends, and make data-driven decisions with clarity and confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 rounded-xl neon-glow transition-all duration-300"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-xl"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/MazenHisham1" 
                className="p-3 glass-card rounded-xl hover:neon-glow transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mazenhisham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="p-3 glass-card rounded-xl hover:neon-glow transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:mazenelkala47@gmail.com" 
                className="p-3 glass-card rounded-xl hover:neon-glow transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image Area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 glass-card rounded-3xl overflow-hidden neon-glow animate-pulse-neon">
                <img 
                  src={profilePhoto} 
                  alt="Mazen Hisham - Data Scientist & AI Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm gradient-text-secondary font-medium tracking-wider">
          "Transforming Data into Decisions"
        </p>
      </div>
    </section>
  );
};