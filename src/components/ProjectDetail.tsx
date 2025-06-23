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
  iconName: string;
  tags: string[];
  category: string;
  features: string[];
  overview: string;
  problem: string;
  solution: string;
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

  // SVG pattern for background
  const dotPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239b87f5' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  const projectsData: Project[] = [
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
    <div 
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        color: 'white'
      }}
    >
      {/* Header Section */}
      <div className="relative pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Button 
              variant="outline" 
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              onClick={handleBackToPortfolio}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-start gap-6 mb-6">
                              <div className="bg-cyan-400/20 p-4 rounded-xl border border-cyan-400/30">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm font-medium border border-white/20 mb-3">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 bg-white/10 text-white/70 rounded-lg text-sm border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-white/80 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Problem & Solution */}
            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
                <p className="text-white/80 leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-white/80 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 sticky top-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <Button
                  onClick={handleBackToPortfolio}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 py-3 rounded-xl transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
