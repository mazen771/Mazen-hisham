import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Globe, Activity, Play, Database } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [{
    title: "Rawlytics",
    description: "Full-stack automated EDA platform that transforms raw data uploads into production-ready insights through statistical profiling, intelligent remediation, and ML readiness evaluation.",
    longDescription: "Rawlytics is a high-performance, full-stack application engineered to eliminate the manual bottleneck of Exploratory Data Analysis (EDA) and data preprocessing. Designed for data scientists, machine learning engineers, and analysts, the platform transforms raw data uploads into actionable, production-ready insights in seconds. By automating deep statistical profiling, intelligent data remediation, and machine learning readiness evaluations, Rawlytics bridges the gap between rigorous mathematical analysis and an intuitive, modern user experience—accelerating the time-to-insight for complex datasets.",
    icon: <Database className="w-8 h-8" />,
    technologies: ["React", "Vite", "Tailwind CSS", "FastAPI", "Pandas", "NumPy", "SciPy", "Scikit-learn"],
    categories: ["Data Analysis"],
    github: "https://github.com/MazenHisham1/Rawlytics"
  }, {
    title: "Player Overall Prediction",
    description: "Full-stack ML application that predicts football player ratings based on attributes like age, potential, and market value. Deployed with Gradio on Hugging Face Spaces with a React frontend on Vercel.",
    longDescription: "Developed a full-stack machine learning application that predicts football player ratings based on multiple attributes such as age, potential, and market value. The model was trained and optimized on structured player data, saved using joblib, and deployed with a Gradio backend on Hugging Face Spaces. A modern React (Vite) frontend styled with Tailwind CSS was built and hosted on Vercel, providing a responsive interface for real-time predictions.",
    icon: <Activity className="w-8 h-8" />,
    technologies: ["Python", "Scikit-learn", "Joblib", "Gradio", "React", "Vite", "Tailwind CSS", "Hugging Face", "XGBoost"],
    categories: ["Machine Learning", "Data Analysis"],
    github: "https://github.com/MazenHisham1/Player-Overall-Prediction"
  }, {
    title: "Life Expectancy Prediction",
    description: "Comprehensive analysis and predictive modeling of global health trends using machine learning algorithms to forecast life expectancy based on various socio-economic and health factors.",
    longDescription: "This project involved extensive exploratory data analysis (EDA) on WHO health data, feature engineering, and implementation of multiple regression models including Random Forest, XGBoost, and Neural Networks. Achieved 94% accuracy in predicting life expectancy.",
    icon: <BarChart3 className="w-8 h-8" />,
    technologies: ["Python", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "XGBoost", "LightGBM"],
    categories: ["Machine Learning"],
    github: "https://github.com/MazenHisham1/Life-Expectancy"
  }, {
    title: "Video Games Market Analysis",
    description: "In-depth market trends exploration and data visualization of the gaming industry, analyzing sales patterns, platform performance, and genre popularity across different regions.",
    longDescription: "Analyzed over 16,000+ video game records to identify market trends, regional preferences, and sales patterns. Created interactive dashboards and predictive models for market forecasting.",
    icon: <Play className="w-8 h-8" />,
    technologies: ["Python", "Pandas", "Matplotlib", "Plotly", "Jupyter", "Statistical Analysis"],
    categories: ["Data Analysis"],
    github: "https://github.com/MazenHisham1/Video-Games-Sales"
  }, {
    title: "COVID-19 Interactive Dashboard",
    description: "Developed an interactive dashboard to visualize global COVID-19 time-series data with dynamic charts, geographic maps, and filters. Prepared and cleaned large datasets for analysis and highlighted anomalies with moving averages.",
    longDescription: "Created a comprehensive dashboard for COVID-19 data visualization featuring interactive charts, geographic heat maps, and real-time filtering capabilities. Implemented data preprocessing pipelines and anomaly detection using statistical methods.",
    icon: <Activity className="w-8 h-8" />,
    technologies: ["Python", "Plotly", "Dash", "Pandas", "Data Cleaning", "Statistical Analysis"],
    categories: ["Data Visualization"],
    github: "https://github.com/MazenHisham1/IEEE-Project/tree/main"
  }, {
    title: "Book Scraping Tool",
    description: "Automated web scraping solution built with BeautifulSoup to extract book information, ratings, and pricing data from online bookstores for market research and price comparison.",
    longDescription: "Developed a robust web scraping tool that extracts book metadata, customer reviews, and pricing information. Implemented data cleaning pipelines and automated data collection workflows.",
    icon: <Globe className="w-8 h-8" />,
    technologies: ["Python", "BeautifulSoup", "Requests", "CSV", "Data Cleaning", "Automation"],
    categories: ["Web Scraping"],
    github: "https://github.com/MazenHisham1/Web-Scraping"
  }];
  const categories = ["All", "Machine Learning", "Data Analysis", "Data Visualization", "Web Scraping"];
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(project => project.categories.includes(activeCategory));
  return <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my data science and machine learning projects, demonstrating practical solutions 
            to real-world problems through innovative analytics and AI techniques.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 glass-card p-2 rounded-lg">
            {categories.map(category => <Button key={category} variant={activeCategory === category ? "default" : "ghost"} className={`px-6 py-2 rounded-md transition-all duration-300 ${activeCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-primary/20 hover:text-primary"}`} onClick={() => setActiveCategory(category)}>
                {category}
              </Button>)}
          </div>
        </div>

        {/* All Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => <Card key={index} className="glass-card border-0 hover:neon-glow transition-all duration-300 group">
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-300">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                        {project.categories.join(" · ")}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm rounded-md">
                      {tech}
                    </span>)}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground flex items-center gap-2" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button className="bg-gradient-secondary hover:bg-gradient-secondary/90 text-accent-foreground px-8 py-3 rounded-xl neon-glow" onClick={() => window.open('https://github.com/MazenHisham1', '_blank')}>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>;
};