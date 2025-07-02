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
  
  // Use the exact same color scheme as the About section to maintain consistency
  const colorSchemes = [
    {
      iconBg: "from-cyan-400 to-purple-500",
      iconColor: "text-white",
      categoryBg: "bg-[#9b87f5]/20",
      categoryText: "text-[#9b87f5]",
      categoryBorder: "border-[#9b87f5]/30",
      hoverText: "group-hover:text-[#9b87f5]",
      hoverArrow: "group-hover:text-[#9b87f5]"
    },
    {
      iconBg: "from-blue-400 to-blue-600",
      iconColor: "text-white",
      categoryBg: "bg-blue-500/20",
      categoryText: "text-blue-300",
      categoryBorder: "border-blue-500/30",
      hoverText: "group-hover:text-blue-300",
      hoverArrow: "group-hover:text-blue-300"
    },
    {
      iconBg: "from-green-400 to-green-600",
      iconColor: "text-white",
      categoryBg: "bg-green-500/20",
      categoryText: "text-green-300",
      categoryBorder: "border-green-500/30",
      hoverText: "group-hover:text-green-300",
      hoverArrow: "group-hover:text-green-300"
    },
    {
      iconBg: "from-orange-400 to-orange-600",
      iconColor: "text-white",
      categoryBg: "bg-orange-500/20",
      categoryText: "text-orange-300",
      categoryBorder: "border-orange-500/30",
      hoverText: "group-hover:text-orange-300",
      hoverArrow: "group-hover:text-orange-300"
    },
    {
      iconBg: "from-cyan-400 to-cyan-600",
      iconColor: "text-white",
      categoryBg: "bg-cyan-500/20",
      categoryText: "text-cyan-300",
      categoryBorder: "border-cyan-500/30",
      hoverText: "group-hover:text-cyan-300",
      hoverArrow: "group-hover:text-cyan-300"
    },
    {
      iconBg: "from-purple-400 to-purple-600",
      iconColor: "text-white",
      categoryBg: "bg-purple-500/20",
      categoryText: "text-purple-300",
      categoryBorder: "border-purple-500/30",
      hoverText: "group-hover:text-purple-300",
      hoverArrow: "group-hover:text-purple-300"
    }
  ];
  
  const colors = colorSchemes[index % colorSchemes.length];

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
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 h-full transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-[1.02] flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.iconBg} shadow-lg`}>
            <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
          </div>
          {project.category && (
            <span className={`px-3 py-1 ${colors.categoryBg} ${colors.categoryText} rounded-full text-xs font-medium border ${colors.categoryBorder}`}>
              {project.category}
            </span>
          )}
        </div>
        
        <h3 className={`text-xl font-bold text-white mb-2 ${colors.hoverText} transition-colors duration-300 line-clamp-2`}>
          {project.title}
        </h3>
        
        <p className="text-white/85 leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="mt-auto space-y-3">
          <p className="text-xs font-medium text-white/60 uppercase tracking-wider">Technologies</p>
          
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-2.5 py-1 bg-white/10 text-white/80 rounded-md text-xs border border-white/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2.5 py-1 bg-white/10 text-white/70 rounded-md text-xs border border-white/20">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <span className={`text-sm text-white/80 ${colors.hoverText} transition-colors duration-300 font-medium`}>
              View Details
            </span>
            <ArrowRight className={`w-4 h-4 text-white/80 ${colors.hoverArrow} group-hover:translate-x-1 transition-all duration-300`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModernProjectCard;