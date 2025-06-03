
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

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 border-b backdrop-blur-lg",
        isScrolled 
          ? "bg-[#0B0B1E]/85 shadow-2xl shadow-black/30 border-white/20"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <motion.button 
          onClick={handleLogoClick}
          className="text-white font-bold text-2xl hover:opacity-80 transition-all duration-300 group relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative bg-gradient-to-r from-[#6366f1] via-[#9b87f5] to-[#a855f7] text-transparent bg-clip-text">
            Muntazir
          </span>
        </motion.button>
        
        <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
          {navItems.map((item) => (
            <motion.a 
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out relative group",
                activeSection === item.id
                  ? "bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white shadow-lg shadow-[#9b87f5]/30"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection !== item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#9b87f5]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/5 backdrop-blur-sm border border-white/10"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-20 bg-[#0B0B1E]/95 backdrop-blur-lg shadow-2xl shadow-black/50 z-40 mx-4 rounded-2xl border border-white/20"
          >
            <div className="container mx-auto px-6 flex flex-col space-y-2 py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 ease-in-out text-center relative group overflow-hidden",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white shadow-lg"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                  onClick={() => handleMobileLinkClick(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#9b87f5]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
