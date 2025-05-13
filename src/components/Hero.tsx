
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-[#6366f1] via-[#9b87f5] to-[#a855f7] text-transparent bg-clip-text">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            I'm a passionate designer and developer creating beautiful digital experiences
            that connect people and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#6366f1] to-[#9b87f5] hover:opacity-90 transition-opacity text-white border-none"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
