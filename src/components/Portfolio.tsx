import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Shield, Building2, GraduationCap, Database as DatabaseIcon,
  ShoppingCart, CheckSquare, Car, Home, Briefcase, ArrowRight, X as XIcon, ExternalLink
} from 'lucide-react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <div className="bg-[#9b87f5]/20 p-3 rounded-xl border border-[#9b87f5]/30">
              <IconComponent className="w-6 h-6 text-[#9b87f5]" />
            </div>
            <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium border border-white/20">
              {project.category || 'Development'}
            </span>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:text-[#9b87f5] transition-colors duration-300 line-clamp-2">
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
              <span className="text-sm text-white/60 group-hover:text-[#9b87f5] transition-colors duration-300 font-medium">
                View Details
              </span>
              <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#9b87f5] group-hover:translate-x-1 transition-all duration-300" />
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

  useEffect(() => {
    AOS.init({ once: true });
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
    <section id="portfolio" className="py-20 md:py-32 relative bg-[#0B0B1E]">
      {/* Subtle background effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-[#9b87f5]">Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto mb-6"></div>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Here's a collection of my work, certifications, and the technologies I work with.
          </p>
        </div>

        {/* Modern Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2">
            <div className="flex space-x-2">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSubSection(item.id)}
                  className={`
                    relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                    ${activeSubSection === item.id
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/80'
                    }
                  `}
                >
                  {/* Active indicator */}
                  {activeSubSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#9b87f5] rounded-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                  
                  {/* Tab label */}
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  
                  {/* Hover effect for inactive tabs */}
                  {activeSubSection !== item.id && (
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeSubSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ModernProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {activeSubSection === 'certifications' && (
          <div className="space-y-8">
            {!imagesLoaded && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#9b87f5]"></div>
                <span className="ml-3 text-white/70">Loading certificates...</span>
              </div>
            )}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#9b87f5] transition-colors duration-300 line-clamp-2">
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
          </div>
        )}

        {activeSubSection === 'techstack' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {techStackData.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={techStackVisible ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.02,
                    }
                  } : {}}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6 aspect-square transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-[1.05] flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center flex-grow">
                      <img
                        src={tech.logoSrc}
                        alt={`${tech.name} logo`}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110 mb-3"
                      />
                      <span className="text-xs md:text-sm text-white/70 font-medium text-center group-hover:text-white/90 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
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
