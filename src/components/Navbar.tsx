import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ["home", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100; 
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  const handleMobileLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 border-b",
        isScrolled 
          ? "bg-[#0B0B1E]/80 backdrop-blur-md shadow-md border-white/10"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14">
        <a href="#home" className="text-white font-bold text-xl hover:opacity-80 transition-opacity" onClick={() => handleMobileLinkClick('home')}>
          <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">Muntazir</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ease-in-out",
                activeSection === item.id
                  ? "bg-[#9b87f5]/20 text-white shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-16 bg-[#0B0B1E]/95 backdrop-blur-lg shadow-xl z-40 py-4"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-3 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ease-in-out text-center",
                    activeSection === item.id
                      ? "bg-[#9b87f5]/25 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                  onClick={() => handleMobileLinkClick(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
