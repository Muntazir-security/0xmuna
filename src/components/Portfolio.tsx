import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Shield, Building2, GraduationCap, Database as DatabaseIcon,
  ShoppingCart, CheckSquare, Car, Home, Briefcase, ArrowRight, X as XIcon, ExternalLink
} from 'lucide-react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  ProjectCardSkeleton, 
  CertificationCardSkeleton, 
  TechStackSkeleton 
} from "@/components/ui/loading-skeleton";

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  tags: string[];
  image?: string;
  category?: string;
  features?: string[];
  overview?: string;
  problem?: string;
  solution?: string;
}

interface ProjectInputData {
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  category?: string;
  features?: string[];
  overview?: string;
  problem?: string;
  solution?: string;
}

const certificationsData = [
  { id: 1, title: "Red Hat System Administration I (RH124)", issuingBody: "Red Hat", imageSrc: "/assets/images/RH124.png", },
  { id: 2, title: "SOC Analyst Learning Path", issuingBody: "LetsDefend", imageSrc: "/assets/images/SOC_Analyst_LetsDefend.png", },
  { id: 3, title: "eLearnSecurity Junior Penetration Tester (eJPT)", issuingBody: "INE (eLearnSecurity)", imageSrc: "/assets/images/eJPT.png", },
  { id: 4, title: "INE Certified Cloud Associate (ICCA)", issuingBody: "INE", imageSrc: "/assets/images/ICCA.png", },
  { id: 5, title: "Google Cybersecurity Certificate", issuingBody: "Google", imageSrc: "/assets/images/Google_cert.png", },
  { id: 6, title: "CCNAv7: Switching, Routing, and Wireless Essentials", issuingBody: "Cisco Networking Academy", imageSrc: "/assets/images/SRE_cert.png", },
];

const techStackData = [
  { id: 1, name: "AWS", logoSrc: "/assets/images/aws.svg" },
  { id: 2, name: "Azure", logoSrc: "/assets/images/azure.svg" },
  { id: 3, name: "Docker", logoSrc: "/assets/images/docker.svg" },
  { id: 4, name: "Kubernetes", logoSrc: "/assets/images/kubernets.svg" },
  { id: 5, name: "Portainer", logoSrc: "/assets/images/portainer.svg" },
  { id: 6, name: "Nessus", logoSrc: "/assets/images/nessus-professional.svg" },
  { id: 7, name: "TheHive", logoSrc: "/assets/images/thehive.png" },
  { id: 8, name: "John the Ripper", logoSrc: "/assets/images/johntheripper.png" },
  { id: 9, name: "Burp Suite", logoSrc: "/assets/images/burpsuite.svg" },
  { id: 10, name: "Snort", logoSrc: "/assets/images/Snort.svg" },
  { id: 11, name: "Splunk", logoSrc: "/assets/images/splunk.svg" },
  { id: 12, name: "Elastic Stack", logoSrc: "/assets/images/elastic.svg" },
  { id: 13, name: "WireGuard", logoSrc: "/assets/images/wireguard.svg" },
  { id: 14, name: "Red Hat", logoSrc: "/assets/images/redhat.svg" },
  { id: 15, name: "Wazuh", logoSrc: "/assets/images/wazuh.png" },
  { id: 16, name: "Arch Linux", logoSrc: "/assets/images/archlinux.svg" },
  { id: 17, name: "Suricata", logoSrc: "/assets/images/suricata.png" },
  { id: 18, name: "Fortinet", logoSrc: "/assets/images/fortinet.svg" },
];

interface ModernProjectCardProps {
  project: Project;
  index: number;
}

const ModernProjectCard: React.FC<ModernProjectCardProps> = ({ project, index }) => {
  const IconComponent = project.icon || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-[1.02] flex flex-col">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="bg-cyan-400/20 p-3 rounded-xl border border-cyan-400/30">
              <IconComponent className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/20">
              {project.category || 'Development'}
            </span>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            
            <p className="text-white/70 leading-relaxed line-clamp-3 group-hover:text-white/85 transition-colors duration-300">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 bg-white/10 text-white/70 rounded-md text-xs border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2.5 py-1 bg-white/10 text-white/60 rounded-md text-xs border border-white/20">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                View Details
              </span>
              <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [activeSubSection, setActiveSubSection] = useState('projects');
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [techStackVisible, setTechStackVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setProjectsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const imagePromises = certificationsData.map((cert) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = cert.imageSrc;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, []);

  useEffect(() => {
    if (activeSubSection === 'techstack') {
      setTechStackVisible(true);
    } else {
      setTechStackVisible(false);
    }
  }, [activeSubSection]);

  const projectsInput: ProjectInputData[] = [
    { 
      title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN", 
      description: "Advanced anomaly detection system protecting Software-Defined Networks from DDoS attacks using statistical analysis and real-time traffic monitoring. Implemented comprehensive security measures to prevent SYN flooding attacks while maintaining network performance.", 
      iconName: "Shield", 
      tags: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis", "Real-time Monitoring"],
      category: "Network Security"
    },
    { 
      title: "SABB Bank Management System", 
      description: "Comprehensive Python-based banking system featuring multi-level authentication, secure transaction processing, and fraud prevention mechanisms. Includes account management, transaction history, and robust security protocols.", 
      iconName: "Building2", 
      tags: ["Python", "CLI Interface", "File I/O Operations", "User Authentication", "Security"],
      category: "Financial Software"
    },
    { 
      title: "University Information Management System", 
      description: "Intelligent recommendation engine designed for the Malaysian Ministry of Higher Education to evaluate and rank universities. Features user-specific interfaces, comprehensive data analysis, and ranking algorithms.", 
      iconName: "GraduationCap", 
      tags: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis", "Ranking System"],
      category: "Educational Technology"
    },
    { 
      title: "APU e-Bookstore Database Management System", 
      description: "Robust database system for APU's e-Bookstore with normalized design, efficient book catalog management, order processing, and inventory tracking. Features optimized queries and data integrity controls.", 
      iconName: "DatabaseIcon", 
      tags: ["Database Design", "SQL Optimization", "ERD Modeling", "Normalization", "Data Integrity"],
      category: "Database Systems"
    },
    { 
      title: "Minimart Management System", 
      description: "Low-level Assembly Language application providing comprehensive minimart operations including inventory management, sales tracking, reporting systems, and performance optimization for retail environments.", 
      iconName: "ShoppingCart", 
      tags: ["Assembly Language", "Low-level Programming", "Inventory Management", "Sales Analytics"],
      category: "Retail Management"
    },
    { 
      title: "Personal Task Management System", 
      description: "Efficient CLI-based task management solution built in C, featuring priority-based scheduling, task categorization, deadline tracking, and productivity analytics for personal workflow optimization.", 
      iconName: "CheckSquare", 
      tags: ["C Programming", "CLI Interface", "File I/O", "Task Management", "Priority Scheduling"],
      category: "Productivity Tools"
    },
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    Shield, Building2, GraduationCap, DatabaseIcon, ShoppingCart, CheckSquare, Car, Home, Briefcase
  };

  const projects: Project[] = projectsInput.map((p, index) => ({
    ...p,
    id: index + 1,
    icon: iconMap[p.iconName],
  }));

  const subNavItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'techstack', label: 'Tech Stack' },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Here's a collection of my work, certifications, and the technologies I work with.
          </p>
        </div>

        {/* Modern Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
            {subNavItems.map((item) => (
              <motion.button
                key={item.id}
                className={cn(
                  "relative px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeSubSection === item.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setActiveSubSection(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        {activeSubSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!projectsLoaded ? (
              // Loading skeletons
              [...Array(6)].map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            ) : (
              projects.map((project, index) => (
                <ModernProjectCard key={project.id} project={project} index={index} />
              ))
            )}
          </div>
        )}

        {activeSubSection === 'certifications' && (
          <div className="space-y-8">
            {!imagesLoaded ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <CertificationCardSkeleton key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 opacity-100">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setSelectedCertImage(cert.imageSrc)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-[1.02] h-full flex flex-col">
                      <div className="aspect-video overflow-hidden border-b border-white/10 bg-white/5">
                        <img
                          src={cert.imageSrc}
                          alt={`${cert.title} Certificate`}
                          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          loading="eager"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-white/60 mt-auto">
                          {cert.issuingBody}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSubSection === 'techstack' && (
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
                    <span className="text-white/80 text-xs font-medium group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for Certificate Images */}
      {selectedCertImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertImage(null)}
        >
          <motion.div
            className="relative max-w-3xl max-h-[80vh] bg-white/10 p-2 rounded-lg shadow-2xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertImage}
              alt="Selected Certificate - Full View"
              className="block max-w-full max-h-[calc(80vh-1rem)] object-contain rounded-md"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 md:w-10 md:h-10"
              onClick={() => setSelectedCertImage(null)}
            >
              <XIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
