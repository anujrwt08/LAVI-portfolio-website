import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, BarChart3, GitBranch, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "C/C++", "SQL", "JavaScript", ]
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch","NLP", "Computer Vision"]
  },
  {
    icon: Database,
    title: "Data Processing",
    skills: ["Pandas", "NumPy", "Data Cleaning"]
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"]
  },
  {
    icon: GitBranch,
    title: "Tools & Technologies",
    skills: ["Git", "VS Code" ,"Google Colab", "Jupyter"]
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    skills: ["Azure","AWS", "Google Cloud", "Heroku", "FastAPI", "Flask"]
  }
];

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
