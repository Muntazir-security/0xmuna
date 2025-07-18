import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const workExperience = [
  {
    id: 1,
    title: "IT Engineer",
    institution: "Neotek",
    location: "Dammam, Saudi Arabia",
    dateRange: "June 2025 - Present",
    type: "Full-time",
    responsibilities: [
      "Design and implement secure network infrastructures with built-in security controls and monitoring capabilities.",
      "Conduct security assessments of IT systems and infrastructure to identify vulnerabilities and implement remediation strategies.",
    ],
  },
  {
    id: 2,
    title: "Security Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Jan 2024 - April 2024",
    type: "Part-time",
    responsibilities: [
      "Conducted vulnerability assessments and penetration testing on university lab devices.",
      "Identified and resolved two critical vulnerabilities, preventing potential disruptions.",
      "Compiled detailed reports documenting findings and suggested remediation actions.",
    ],
  },
  {
    id: 3,
    title: "IT Intern - LAB Security Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Sep 2023 - Jan 2024",
    type: "Internship",
    responsibilities: [
      "Conducted penetration testing on APU technology lab environment.",
      "Collaborated with teams to deeply understand products for precise documentation.",
      "Provided suggestions and improvements within APU technology lab environment.",
    ],
  },
  {
    id: 4,
    title: "Security Operations Center (SOC) Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Apr 2023 - July 2023",
    type: "Part-time",
    responsibilities: [
      "Monitored event logs across networks, systems, and devices for unusual activity.",
      "Reviewed and categorized security alerts and potential threats.",
      "Experienced with SIEM (MSSGard), including content creation and reporting.",
    ],
  },
];

const educationHistory = [
  {
    id: 1,
    degree: "B.Sc. of Computer Science Specializing in Cyber Security",
    institution: "De Montfort University",
    location: "Leicester, UK",
    dateRange: "Sep 2021 - Aug 2024",
    grade: "Second Class Honours",
    isDualDegree: true,
    note: "Dual-awarded with Asia Pacific University"
  },
  {
    id: 2,
    degree: "B.Sc. of Computer Science Specializing in Cyber Security",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Sep 2021 - Aug 2024",
    grade: "Second Class Honours",
    isDualDegree: true,
    note: "Dual-awarded with De Montfort University"
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "New World International School",
    location: "Al Khobar, Saudi Arabia",
    dateRange: "Sep 2014 - June 2021",
    grade: "Distinction",
    isDualDegree: false
  },
];

const AboutMe: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 lg:py-32 relative scroll-section"
      style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(148, 163, 184, 0.05), transparent 30%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05), transparent 30%)',
      }}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Clean profile picture container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900/80 rounded-full p-2 backdrop-blur-xl border border-white/20">
                    <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/assets/images/profile.png"
                      alt="Muntazir Mehdi - Profile Picture"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mb-8"></div>

            <div className="space-y-6">
              <p className="text-white/85 leading-relaxed text-lg text-justify">
                As an IT Engineer at <span className="font-bold text-white">Neotek</span>, I apply my cybersecurity expertise to infrastructure development and management. My background in <span className="font-semibold text-cyan-300">penetration testing</span> and <span className="font-semibold text-cyan-300">security analysis</span> allows me to approach engineering challenges with a security-first mindset, ensuring the systems I build are inherently secure.
              </p>
              
              <p className="text-white/85 leading-relaxed text-lg text-justify">
                My dual-degree background from <span className="font-bold text-white">De Montfort University</span> and <span className="font-bold text-white">Asia Pacific University</span> provided me with a strong theoretical foundation in cybersecurity, which I continue to strengthen through hands-on experience in <span className="font-semibold text-cyan-300">SOC operations</span>, <span className="font-semibold text-cyan-300">vulnerability assessments</span>, and real-world <span className="font-semibold text-cyan-300">threat hunting</span>. I stay sharp by continuously learning through platforms like <span className="font-bold text-white">HackTheBox</span> & <span className="font-bold text-white">TryHackMe</span>, where I practice advanced penetration testing techniques.
              </p>

              <p className="text-white/85 leading-relaxed text-lg text-justify">
                Whether I'm designing secure network architectures, implementing robust security measures, or analyzing potential vulnerabilities, I remain deeply passionate about cybersecurity. My goal is to bridge the gap between security and engineering, creating technology solutions that are both functional and fortified against evolving threats.
              </p>
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transform transition-all duration-300 hover:scale-105"
              >
                <a
                  href="/assets/documents/Muntazir Mehdi CV.pdf"
                  download="Muntazir_Mehdi_CV.pdf"
                  className="flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-3 transition-transform duration-300" />
                  <span className="font-semibold">Download Resume</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Work <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 transform -translate-x-1/2 hidden md:block opacity-30"></div>

            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                className="mb-16 md:flex items-start relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className={`relative ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    {/* Enhanced timeline marker */}
                    <div
                      className={`absolute top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900 hidden md:block shadow-lg ${
                        index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                      }`}
                      style={{ zIndex: 2 }}
                    >
                      <Briefcase className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Mobile timeline */}
                    <div className="absolute left-0 top-6 bottom-0 ml-3 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 md:hidden opacity-50"></div>
                    <div className="absolute left-0 top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full md:hidden">
                      <Briefcase className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Enhanced job card with better date layout */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 ml-6 md:ml-0 relative group hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                      <div className="relative z-10">
                        {/* Job header with improved layout for date */}
                        <div className="mb-4">
                          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9b87f5] transition-colors duration-300">
                                {job.title}
                              </h3>
                              <p className="text-white/90 font-medium mb-1">{job.institution}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row xl:flex-col gap-2 xl:items-end">
                              <span className="inline-flex items-center px-3 py-1 bg-[#9b87f5]/20 text-[#9b87f5] text-sm font-medium rounded-full whitespace-nowrap">
                                <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                                {job.dateRange}
                              </span>
                              <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${
                                job.type === 'Part-time' ? 'bg-blue-500/20 text-blue-300' : 
                                job.type === 'Full-time' ? 'bg-green-500/20 text-green-300' : 
                                'bg-orange-500/20 text-orange-300'
                              }`}>
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-blue-300 text-sm mb-6">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-3">
                          {job.responsibilities.map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#9b87f5] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-white/80 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edu<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">cation</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 transform -translate-x-1/2 hidden md:block opacity-30"></div>

            {educationHistory.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="mb-16 md:flex items-start relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className={`relative ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    {/* Timeline marker */}
                    <div
                      className={`absolute top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900 hidden md:block shadow-lg ${
                        index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                      }`}
                    >
                      <GraduationCap className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Mobile timeline */}
                    <div className="absolute left-0 top-6 bottom-0 ml-3 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 md:hidden opacity-50"></div>
                    <div className="absolute left-0 top-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full md:hidden">
                      <GraduationCap className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Education card with improved date layout */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 ml-6 md:ml-0 relative group hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                      <div className="relative z-10">
                        <div className="mb-4">
                          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9b87f5] transition-colors duration-300">
                                {edu.degree}
                              </h3>
                              <p className="text-white/90 font-medium mb-1">{edu.institution}</p>
                              {edu.note && (
                                <p className="text-blue-300 text-sm mt-1">{edu.note}</p>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row xl:flex-col gap-2 xl:items-end">
                              <span className="inline-flex items-center px-3 py-1 bg-[#9b87f5]/20 text-[#9b87f5] text-sm font-medium rounded-full whitespace-nowrap">
                                <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                                {edu.dateRange}
                              </span>
                              {edu.grade && (
                                <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-full whitespace-nowrap">
                                  <Award className="w-3 h-3 mr-1 flex-shrink-0" />
                                  {edu.grade}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-blue-300 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
