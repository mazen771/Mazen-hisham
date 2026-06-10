import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "AI Trainee",
      company: "National Technology Institute (NTI)",
      location: "Cairo, Egypt",
      period: "2025",
      description: "Intensive training program focusing on advanced AI techniques, machine learning algorithms, and practical implementation of AI solutions.",
      skills: ["Python","Data Analysis","Machine Learning", "Deep Learning", "TensorFlow","Keras","Computer Vision"],
      type: "Training"
    },
    {
      title: "IEEE Bootcamp",
      company: "IEEE",
      location: "Benha, Egypt",
      period: "2025",
      description: "Completed an intensive hands-on program focused on machine learning. Gained experience in data preprocessing and model development using Python, Scikit-learn, TensorFlow, and PyTorch. Built real-world projects across supervised learning and unsupervised learning developing both technical expertise and practical problem-solving skills.",
      skills: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "Data Preprocessing", "Supervised Learning", "Unsupervised Learning"],
      type: "Bootcamp"
    },
    {
      title: "Machine Learning Camp",
      company: "CREATIVA Camp",
      location: "Benha, Egypt",
      period: "2025",
      description: "Comprehensive machine learning bootcamp covering supervised and unsupervised learning, model evaluation, and deployment strategies.",
      skills: ["Scikit-learn", "Model Deployment", "Feature Engineering", "Statistical Analysis"],
      type: "Bootcamp"
    }
  ];

  const skills = [
    { name: "Python" },
    { name: "Machine Learning" },
    { name: "Data Visualization" },
    { name: "TensorFlow" },
    { name: "Deep Learning" },
    { name: "Computer Vision" },
    { name: "Statistical Analysis" },
    { name: "Data Engineering" },
    { name: "REST API Integration" },
    { name: "JSON Data Processing" }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and hands-on experience in AI, machine learning, and data science through 
            specialized training programs and practical projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Training</h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-0 hover:neon-glow transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg mt-1">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                        <Badge className="bg-accent/20 text-accent border-accent/30">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <h5 className="text-lg text-primary mb-3">{exp.company}</h5>
                      
                      <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-foreground/70 mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out w-full"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications/Achievements */}
            <Card className="glass-card border-0 hover:neon-glow transition-all duration-300 mt-8">
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-4">Key Achievements</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Successfully completed AI training at NTI
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Implemented multiple ML projects with real-world impact
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Proficient in end-to-end data science workflows
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Experience with web scraping and data collection
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
