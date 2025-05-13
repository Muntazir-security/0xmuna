
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-[#0B0B1E]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl">
          <span className="text-gradient">Portfolio</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors relative story-link after:bg-[#9b87f5]"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
