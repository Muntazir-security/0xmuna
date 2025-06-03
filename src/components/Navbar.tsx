
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        isScrolled 
          ? "bg-[#0B0B1E]/90 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <span className="relative text-2xl font-bold bg-gradient-to-r from-[#6366f1] via-[#9b87f5] to-[#a855f7] text-transparent bg-clip-text">
              Muntazir
            </span>
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <motion.a 
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out group",
                      activeSection === item.id
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    )}
                    onClick={() => setActiveSection(item.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#9b87f5] rounded-xl shadow-lg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }}
                      />
                    )}
                    
                    {/* Hover effect for inactive tabs */}
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
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
                    <XIcon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon size={20} />
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
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 mx-6"
          >
            <div className="bg-[#0B0B1E]/95 backdrop-blur-xl shadow-2xl shadow-black/50 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "relative flex items-center px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 group overflow-hidden",
                      activeSection === item.id
                        ? "bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white shadow-lg"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={() => handleMobileLinkClick(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/5 to-[#9b87f5]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
