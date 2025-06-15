
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Shield, Building2, GraduationCap, Database as DatabaseIcon,
  ShoppingCart, CheckSquare, Car, Home, Briefcase
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  tags: string[];
  category: string;
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  image?: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const iconMap: { [key: string]: React.ElementType } = {
    Shield, Building2, GraduationCap, DatabaseIcon, ShoppingCart, CheckSquare, Car, Home, Briefcase
  };

  const projectsData = [
    {
      id: 1,
      title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN",
      description: "Designed and implemented an advanced anomaly detection system to protect Software-Defined Networks (SDN) from DDoS attacks.",
      iconName: "Shield",
      tags: ["Software-Defined Networking (SDN)", "DDoS Mitigation", "Network Security", "Statistical Analysis"],
      category: "Network Security",
      features: [
        "Real-time traffic analysis and monitoring",
        "Statistical anomaly detection algorithms",
        "Automated threat response system",
        "SDN controller integration",
        "Performance metrics dashboard"
      ],
      overview: "This project addresses the critical security vulnerabilities in Software-Defined Networks by implementing a comprehensive DDoS mitigation system. The solution uses advanced statistical analysis to detect and prevent TCP SYN flooding attacks in real-time.",
      problem: "Software-Defined Networks are increasingly vulnerable to DDoS attacks, particularly TCP SYN flooding, which can overwhelm network resources and disrupt service availability. Traditional security measures often fail to provide adequate protection in SDN environments.",
      solution: "Developed a multi-layered defense system that combines real-time traffic monitoring, statistical anomaly detection, and automated response mechanisms. The system integrates seamlessly with SDN controllers to provide immediate threat mitigation."
    },
    {
      id: 2,
      title: "SABB Bank Management System",
      description: "Developed a Python-based banking system with multi-level authentication and secure transaction handling.",
      iconName: "Building2",
      tags: ["Python", "CLI", "File I/O", "User Authentication"],
      category: "Financial Software",
      features: [
        "Multi-level user authentication",
        "Secure transaction processing",
        "Account management system",
        "Transaction history tracking",
        "Fraud detection mechanisms"
      ],
      overview: "A comprehensive banking management system built in Python, featuring robust security measures and efficient transaction handling for financial institutions.",
      problem: "Traditional banking systems often lack proper security measures and efficient transaction processing capabilities, making them vulnerable to fraud and operational inefficiencies.",
      solution: "Implemented a secure, CLI-based banking system with multi-level authentication, encrypted data storage, and comprehensive transaction monitoring to ensure both security and operational efficiency."
    },
    {
      id: 3,
      title: "University Information Management System",
      description: "Created a recommendation engine for the Malaysian Ministry of Higher Education to evaluate university rankings.",
      iconName: "GraduationCap",
      tags: ["Data Structures", "Algorithms", "User Authentication", "Data Analysis"],
      category: "Educational Technology",
      features: [
        "University ranking algorithms",
        "Data analysis and visualization",
        "User-specific interfaces",
        "Performance metrics tracking",
        "Recommendation engine"
      ],
      overview: "An intelligent system designed to assist the Malaysian Ministry of Higher Education in evaluating and ranking universities based on multiple criteria and performance indicators.",
      problem: "Manual evaluation of university performance is time-consuming and prone to bias, making it difficult to maintain consistent and fair ranking systems.",
      solution: "Developed an automated recommendation engine that uses data-driven algorithms to evaluate universities based on multiple criteria, providing objective and consistent ranking results."
    },
    {
      id: 4,
      title: "APU e-Bookstore Database Management System",
      description: "A robust database system for APU's e-Bookstore, streamlining book management and order processing.",
      iconName: "DatabaseIcon",
      tags: ["Database Design", "SQL", "ERD Modeling", "Normalization"],
      category: "Database Systems",
      features: [
        "Normalized database design",
        "Inventory management",
        "Order processing system",
        "Customer management",
        "Reporting and analytics"
      ],
      overview: "A comprehensive database management system designed specifically for APU's e-Bookstore operations, featuring optimized data structures and efficient query processing.",
      problem: "Managing book inventory, customer orders, and sales data manually leads to inefficiencies, errors, and poor customer experience.",
      solution: "Designed and implemented a fully normalized database system with optimized queries, automated inventory tracking, and streamlined order processing workflows."
    },
    {
      id: 5,
      title: "Minimart Management System",
      description: "An Assembly Language application providing essential tools for minimart operations.",
      iconName: "ShoppingCart",
      tags: ["Assembly Language", "Low-level Programming", "Inventory Management"],
      category: "Retail Management",
      features: [
        "Low-level system programming",
        "Inventory tracking",
        "Sales processing",
        "Performance optimization",
        "Hardware integration"
      ],
      overview: "A high-performance minimart management system built in Assembly Language, demonstrating expertise in low-level programming and system optimization.",
      problem: "Standard retail management software often has unnecessary overhead and may not perform optimally on older or resource-constrained hardware.",
      solution: "Developed a lightweight, highly optimized system using Assembly Language to maximize performance and minimize resource usage while providing essential retail management features."
    },
    {
      id: 6,
      title: "Personal Task Management System",
      description: "A CLI-based task management solution in C, enabling efficient organization and tracking of tasks.",
      iconName: "CheckSquare",
      tags: ["C", "CLI", "File I/O", "Task Management"],
      category: "Productivity Tools",
      features: [
        "Command-line interface",
        "Priority-based scheduling",
        "Task categorization",
        "Progress tracking",
        "File-based storage"
      ],
      overview: "A lightweight, efficient task management system built in C, designed for users who prefer command-line interfaces and need robust task organization capabilities.",
      problem: "Many task management applications are bloated with unnecessary features and require significant system resources, making them unsuitable for minimalist workflows.",
      solution: "Created a streamlined, CLI-based task management system that focuses on core functionality while maintaining high performance and minimal resource usage."
    }
  ];

  const project = projectsData.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const portfolioElement = document.getElementById('portfolio');
                if (portfolioElement) {
                  portfolioElement.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.iconName] || Briefcase;

  const handleBackToPortfolio = () => {
    navigate('/');
    setTimeout(() => {
      const portfolioElement = document.getElementById('portfolio');
      if (portfolioElement) {
        portfolioElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-[#0B0B1E] via-[#1a1a3e] to-[#0B0B1E] pt-24 pb-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239b87f5" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10 mb-8 group"
              onClick={handleBackToPortfolio}
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
            
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <motion.div 
                className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#6366f1]/20 via-[#9b87f5]/20 to-[#a855f7]/20 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconComponent className="w-12 h-12 lg:w-16 lg:h-16 text-[#9b87f5]" />
              </motion.div>
              
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#6366f1]/20 to-[#9b87f5]/20 text-[#9b87f5] rounded-full text-sm font-medium border border-[#9b87f5]/20">
                      {project.category}
                    </span>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      2024
                    </div>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-8 space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Overview Card */}
            <Card className="group bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9b87f5]/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#6366f1] to-[#9b87f5] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">Project Overview</h2>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">{project.overview}</p>
              </CardContent>
            </Card>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group bg-gradient-to-br from-red-500/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-red-500/20 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white">Challenge</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">{project.problem}</p>
                </CardContent>
              </Card>
              
              <Card className="group bg-gradient-to-br from-green-500/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-green-500/20 hover:border-green-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white">Solution</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="group bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9b87f5]/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#6366f1] to-[#9b87f5] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">Key Features</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#9b87f5]/30 transition-all duration-300 hover:bg-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-[#6366f1] to-[#9b87f5] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Technologies */}
            <Card className="bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Tag className="w-5 h-5 text-[#9b87f5]" />
                  <h3 className="text-lg font-bold text-white">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={tag} 
                      className="px-4 py-2 bg-gradient-to-r from-[#9b87f5]/10 to-[#6366f1]/10 text-[#9b87f5] rounded-full text-sm border border-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Actions */}
            <Card className="bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                  <User className="w-5 h-5 text-[#9b87f5]" />
                  Project Links
                </h3>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-[#6366f1] to-[#9b87f5] text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#9b87f5]/25 group">
                    <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    View Live Demo
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group">
                    <Github className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                    View Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
