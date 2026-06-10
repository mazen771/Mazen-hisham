import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
export const About = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming raw data into actionable insights that drive business growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a dedicated Data Scientist and AI enthusiast with a strong foundation in machine learning, 
              data visualization, and predictive modeling. My passion lies in uncovering hidden patterns 
              within complex datasets and translating them into clear, actionable strategies.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently pursuing my AI major at the Faculty of Computers and AI, I combine academic rigor 
              with practical experience gained through various training programs and real-world projects. 
              I believe in the power of data to solve complex problems and drive meaningful change.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'Computer Vision'].map(skill => <span key={skill} className="px-4 py-2 glass-card rounded-lg text-sm font-medium hover:neon-glow transition-all duration-300">
                  {skill}
                </span>)}
            </div>
          </div>

          {/* Right Content - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
            
            <div className="space-y-6">
              <Card className="glass-card border-0 hover:neon-glow transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        Bachelor in Artificial Intelligence
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Faculty of Computers and AI, Benha University</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Expected Graduation: 2027</span>
                        </div>
                      </div>
                      <p className="text-foreground/70 mt-3">
                        Specializing in machine learning algorithms, neural networks, and AI applications 
                        with a focus on practical implementation and real-world problem solving.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card border-0 hover:neon-glow transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        Diploma in Data Science
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Space Code, Maadi, Egypt</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Aug 2024 – Feb 2025</span>
                        </div>
                      </div>
                      <p className="text-foreground/70 mt-3">
                        Proficient in Python and SQL for data analysis and database management; experienced in data preprocessing, cleaning, and transformation; skilled in Exploratory Data Analysis (EDA) and statistical methods; adept at creating insightful data visualizations using Matplotlib, Seaborn, and Power BI. Specialized in machine learning model development, evaluation, and deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center glass-card p-6 rounded-lg hover:neon-glow transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center glass-card p-6 rounded-lg hover:neon-glow transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};