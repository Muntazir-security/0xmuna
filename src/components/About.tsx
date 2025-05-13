
import React from "react";
import { Badge } from "@/components/ui/badge";

const AboutMe: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "UI/UX Design", 
    "Tailwind CSS", "Next.js", "GraphQL", "Figma"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          <div className="lg:w-2/5">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#6366f1]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#a855f7]/20 rounded-full blur-2xl"></div>
              <div className="aspect-square rounded-xl overflow-hidden relative z-10">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/40 to-[#a855f7]/40 flex items-center justify-center">
                  <span className="text-white/50 text-center px-4">Profile Image</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About <span className="text-[#9b87f5]">Me</span>
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mb-6"></div>
            
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              I'm a passionate developer with over 5 years of experience creating beautiful, 
              functional websites and applications. I specialize in frontend development 
              with React and have a strong background in UI/UX design.
            </p>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving. 
              I believe in creating digital experiences that are not just visually appealing,
              but also intuitive and accessible to all users.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-4 py-1.5 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
