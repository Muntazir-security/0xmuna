import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  id: number;
  name: string;
  logoSrc: string;
}

interface TechStackGridProps {
  techStackData: TechItem[];
  techStackVisible: boolean;
}

const TechStackGrid: React.FC<TechStackGridProps> = ({ 
  techStackData, 
  techStackVisible 
}) => {
  return (
    <div className="space-y-8">
      <h4 className="text-xl font-bold text-white text-center">Technologies & Tools</h4>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {techStackData.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={techStackVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <img 
                  src={tech.logoSrc} 
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white/60 text-xs font-bold">${tech.name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <span className="text-white/85 text-xs font-medium group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;