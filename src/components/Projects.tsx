
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with payment integration.",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A drag-and-drop task management application with real-time updates.",
      tags: ["React", "Firebase", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-[#9b87f5]">Projects</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents unique challenges 
            and solutions that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-[#9b87f5]/5 transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-white/30">{project.title} Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-white/10 text-white/80 text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
