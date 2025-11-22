import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Health Fitness Tracker",
    description: "Developed a fitness tracking app that analyzes user data to provide personalized workout and nutrition plans.",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/lavanya792/Health-Fitness-Tracker-.git",
    demo: "#"
  },
  {
    title: "Banking System",
    description: "Implemented a secure banking system with user authentication, transaction management, and account monitoring features using C++ and Streamlit.",
    tags: ["Python", "C++", "Streamlit", "OOP"],
    github: "https://github.com/lavanya792/banking_system.git",
    demo: "#"
  },
  {
    title: "Azure Health Fitness Tracker",
    description: "Deployed the Health Fitness Tracker app on Microsoft Azure, ensuring scalability and accessibility worldwide.",
    tags: ["Azure", "Cloud Deployment", "Streamlit"],
    github: "https://github.com/lavanya792/Azure_Health_Fitness_Tracker-.git",
    demo: "#"
  },
  {
    title: "Image Classification CNN",
    description: "Created a convolutional neural network for image classification achieving 74% accuracy on test dataset.",
    tags: ["PyTorch", "Computer Vision", "CNN", "Data Augmentation"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        
        {/* Title Animation */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my data science journey through hands-on projects and real-world applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed pt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Buttons (Clickable Now) */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;













// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// const projects = [
//   {
//     title: "Health Fitness Tracker",
//     description: "Developed a fitness tracking app that analyzes user data to provide personalized workout and nutrition plans.",
//     tags: ["Python", "Streamlit", "Pandas", "Matplotlib","Seaborn"],
//     github: "https://github.com/lavanya792/Health-Fitness-Tracker-.git",
//     demo: "#"
//   },
//   {
//     title: "Banking System",
//     description: "Implemented a secure banking system with user authentication, transaction management, and account monitoring features.using C++ for backend and streamlit for frontend.",
//     tags: [ "Python", "C++", "Streamlit", "OOP"],
//     github: "https://github.com/lavanya792/banking_system.git" ,
//     demo: "#"

  
//   },
//   {
//     title: "Azure Health Fitness Tracker",
//     description: "Deployed the Health Fitness Tracker app on Microsoft Azure, ensuring scalability and accessibility for users worldwide.",
//     tags: ["Azure", "Cloud Deployment", "Streamlit"],
//     github: "https://github.com/lavanya792/Azure_Health_Fitness_Tracker-.git",
//     demo: "#"
//   },
//   {
//     title: "Image Classification CNN",
//     description: "Created a convolutional neural network for image classification achieving 74% accuracy on test dataset.",
//     tags: ["PyTorch", "Computer Vision", "CNN", "Data Augmentation"],
//     github: "#",
//     demo: "#"
//   }
// ];

// const Projects = () => {
//   const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
//   const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

//   return (
//     <section id="projects" className="py-20 px-4 bg-secondary/30">
//       <div className="container mx-auto max-w-6xl">
//         <div 
//           ref={titleRef}
//           className={`text-center mb-16 transition-all duration-700 ${
//             titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Showcasing my data science journey through hands-on projects and real-world applications
//           </p>
//         </div>

//         <div 
//           ref={gridRef}
//           className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
//             gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           {projects.map((project, index) => (
//             <Card 
//               key={index}
//               className="bg-card hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border animate-scale-in"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <CardHeader>
//                 <CardTitle className="text-2xl">{project.title}</CardTitle>
//                 <CardDescription className="text-base leading-relaxed pt-2">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//                 <div className="flex gap-3 pt-2">
//                   <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
//                     <Github className="w-4 h-4 mr-2" />
//                     Code
//                   </Button>
//                   <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Demo
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
