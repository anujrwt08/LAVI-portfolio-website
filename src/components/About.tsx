import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div 
          ref={contentRef}
          className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p>
            I'm a passionate B.Tech Data Science student with a strong foundation in statistical analysis, 
            machine learning, and data-driven problem solving. My journey in data science has equipped me 
            with the skills to transform complex datasets into actionable insights.
          </p>
          
          <p>
            With hands-on experience in building predictive models, creating data visualizations, and 
            implementing machine learning algorithms, I thrive on solving real-world challenges through 
            innovative data solutions. I'm constantly learning and staying updated with the latest 
            advancements in AI and data science.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">8.5+</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
