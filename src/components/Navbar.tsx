
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { throttle } from 'lodash';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
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
    }, 16); // ~60fps
    
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  const handleMobileLinkClick = (sectionId: string) => {
    handleSmoothScroll(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#0B0B1E]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="relative text-2xl font-bold text-white hover:opacity-80 transition-opacity group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text">
              Muntazir
            </span>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0 relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1">
            {/* Background indicator that moves smoothly */}
            <motion.div
              className="absolute bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl h-[calc(100%-8px)] top-1"
              layoutId="navIndicator"
              initial={false}
              animate={{
                left: `${navItems.findIndex(item => item.id === activeSection) * (100 / navItems.length)}%`,
                width: `${100 / navItems.length}%`
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                duration: 0.6
              }}
            />
            
            {navItems.map((item) => (
              <motion.a 
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 z-10 flex-1 text-center",
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.id);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#0B0B1E]/95 backdrop-blur-md border-l border-white/10 z-50"
            >
              <div className="p-6 pt-20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "block py-4 text-lg font-medium transition-colors border-b border-white/5 last:border-b-0",
                      activeSection === item.id
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileLinkClick(item.id);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
