import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  tags: string[];
  category?: string;
}

interface ModernProjectCardProps {
  project: Project;
  index: number;
}

const ModernProjectCard: React.FC<ModernProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();
  const IconComponent = project.icon;

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  if (!IconComponent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer h-full"
      onClick={handleCardClick}
    >
      <div className="bg-card/80 border border-border rounded-lg p-6 h-full transition-all duration-200 hover:bg-card/90 hover:border-border/50 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <IconComponent className="w-5 h-5 text-primary" />
          </div>
          {project.category && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
              {project.category}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
          {project.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200 font-medium">
              View Details
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModernProjectCard;