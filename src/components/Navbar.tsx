
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        isScrolled 
          ? "py-3 bg-[#0B0B1E]/90 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Enhanced Logo */}
        <motion.button 
          onClick={handleLogoClick}
          className="relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
              Muntazir
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.button>
        
        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-lg">
            {navItems.map((item) => (
              <motion.a 
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-out relative group overflow-hidden",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-[#6366f1]/30"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative p-3 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50"
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
                  transition={{ duration: 0.3 }}
                >
                  <XIcon size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuIcon size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-20 bg-[#0B0B1E]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 z-40 mx-4 rounded-3xl border border-white/30"
          >
            <div className="container mx-auto px-8 flex flex-col space-y-3 py-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "px-8 py-5 rounded-2xl text-lg font-medium transition-all duration-300 ease-out text-center relative group overflow-hidden",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-[#6366f1]/30"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                  onClick={() => handleMobileLinkClick(item.id)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
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
