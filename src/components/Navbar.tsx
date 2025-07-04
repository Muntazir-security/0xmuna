import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isManuallyNavigating = useRef(false);
  
  // Effect for handling navbar background visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for observing which section is in view
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Do not update section if user is clicking a nav link
      if (isManuallyNavigating.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Active section is: ${entry.target.id}`);
          setActiveSection(entry.target.id);
        }
      });
    };
    
    // This root margin creates a horizontal "line" across the screen center.
    // A section is considered "active" when it crosses this line.
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    });

    const sections = ['home', 'about', 'portfolio', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Effect to handle body scroll when mobile menu is open
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
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    const element = document.getElementById(sectionId);
    if (!element) {
      console.error(`Error: Element with ID '${sectionId}' not found.`);
      return;
    }
    
    isManuallyNavigating.current = true;
    setActiveSection(sectionId);

    // The 'scroll-section' class on each section component handles the offset via CSS.
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      isManuallyNavigating.current = false;
    }, 1000);
  };

  const handleMobileLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    // Add a small delay to allow the menu to start closing before scroll
    setTimeout(() => {
      handleSmoothScroll(sectionId);
    }, 100);
  };

  const handleLogoClick = () => {
    handleSmoothScroll("home");
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="text-xl md:text-2xl font-bold text-white group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Muntazir
            </span>
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
            {navItems.map((item) => (
                <motion.button 
                key={item.id}
                className={cn(
                    "relative px-4 lg:px-6 py-2 rounded-full text-sm font-medium",
                  activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                )}
                  onClick={() => handleSmoothScroll(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                  layout
              >
                  {item.label}
                </motion.button>
            ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XIcon size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2"
            >
                {navItems.map((item, index) => (
                <motion.button
                    key={item.id}
                    className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-base font-medium",
                      activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    )}
                  onClick={() => handleMobileLinkClick(item.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                  >
                    {item.label}
                </motion.button>
                ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


