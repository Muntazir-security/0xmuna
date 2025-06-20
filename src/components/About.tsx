import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const workExperience = [
  {
    id: 1,
    title: "Security Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Jan 2024 - April 2024",
    type: "Part-time",
    responsibilities: [
      "Conducted vulnerability assessments and penetration testing on university lab devices.",
      "Identified and resolved two critical vulnerabilities, preventing potential disruptions.",
      "Formulated strategic recommendations to mitigate identified vulnerabilities.",
      "Compiled detailed reports documenting findings and suggested remediation actions.",
    ],
  },
  {
    id: 2,
    title: "IT Intern - LAB Security Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Sep 2023 - Jan 2024",
    type: "Internship",
    responsibilities: [
      "Collaborated with teams to deeply understand products for precise documentation.",
      "Wrote easy-to-understand user interface text, online help, and developer guides.",
      "Conducted penetration testing on APU technology lab environment.",
      "Provided suggestion and improvement within APU technology lab environment.",
    ],
  },
  {
    id: 3,
    title: "Security Operations Center (SOC) Analyst",
    institution: "Asia Pacific University of Technology & Innovation",
    location: "Kuala Lumpur, Malaysia",
    dateRange: "Apr 2023 - July 2023",
    type: "Part-time",
    responsibilities: [
      "Monitored event logs across networks, systems, and devices for unusual activity.",
      "Reviewed and categorized security alerts and potential threats.",
      "Conducted active monitoring and collaborated with team leads and SOC Manager.",
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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-[#0B0B1E]">
      {/* Subtle background effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl"></div>
      
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full p-1">
                  <div className="w-full h-full bg-black/40 rounded-full p-2 backdrop-blur-xl border border-white/20">
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
              About <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mb-8"></div>

            <div className="space-y-6">
              <p className="text-white/85 leading-relaxed text-lg">
                I'm Syed Muntazir Mehdi, a <span className="text-white font-medium">Cybersecurity Graduate</span> with hands-on experience 
                in vulnerability assessment, SOC operations, and penetration testing. 
                I hold a dual-awarded B.Sc. (Hons) in Cybersecurity from both <span className="text-white font-medium">Asia Pacific University (Malaysia)</span> and <span className="text-white font-medium">De Montfort University (UK)</span>.
              </p>
              
              <p className="text-white/85 leading-relaxed text-lg">
                Throughout my academic and professional journey, I've worked on securing real-world systems, identifying <span className="text-white font-medium">critical vulnerabilities</span>, 
                and deploying effective mitigation strategies. 
                My focus areas include <span className="text-white font-medium">Network Defense</span>, <span className="text-white font-medium">Ethical Hacking</span>, <span className="text-white font-medium">SIEM analysis</span>,
                and building proactive security measures across infrastructures.
              </p>

              <p className="text-white/85 leading-relaxed text-lg">
                I'm passionate about staying ahead of threats, learning new tools, and turning security knowledge into practical solutions. 
                Whether I'm writing automation scripts, monitoring logs, or breaking down attack vectors — I approach cybersecurity with a <span className="text-white font-medium">problem-solver's 
                mindset</span> and a defender's responsibility.
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
                className="group relative overflow-hidden bg-transparent border-2 border-[#9b87f5] text-white hover:bg-[#9b87f5] px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(155,135,245,0.4)] transform transition-all duration-300 ease-in-out hover:scale-[1.02]"
              >
                <a
                  href="/assets/documents/Muntazir Mehdi CV.pdf"
                  download="Muntazir_Mehdi_CV.pdf"
                  className="flex items-center justify-center relative z-10 group-hover:text-white transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <Download className="w-5 h-5 mr-3 relative z-10 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold">Download Resume</span>
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
              Work <span className="text-[#9b87f5]">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6366f1] to-[#a855f7] transform -translate-x-1/2 hidden md:block opacity-30"></div>

            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                className="mb-16 md:flex items-start relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className={`relative ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    {/* Enhanced timeline marker */}
                    <div
                      className={`absolute top-6 w-6 h-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full border-4 border-[#0B0B1E] hidden md:block shadow-lg ${
                        index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                      }`}
                      style={{ zIndex: 2 }}
                    >
                      <Briefcase className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Mobile timeline */}
                    <div className="absolute left-0 top-6 bottom-0 ml-3 w-0.5 bg-gradient-to-b from-[#6366f1] to-[#a855f7] md:hidden opacity-50"></div>
                    <div className="absolute left-0 top-6 w-6 h-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full md:hidden">
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
              Edu<span className="text-[#9b87f5]">cation</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6366f1] to-[#a855f7] transform -translate-x-1/2 hidden md:block opacity-30"></div>

            {educationHistory.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="mb-16 md:flex items-start relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className={`relative ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    {/* Timeline marker */}
                    <div
                      className={`absolute top-6 w-6 h-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full border-4 border-[#0B0B1E] hidden md:block shadow-lg ${
                        index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                      }`}
                    >
                      <GraduationCap className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Mobile timeline */}
                    <div className="absolute left-0 top-6 bottom-0 ml-3 w-0.5 bg-gradient-to-b from-[#6366f1] to-[#a855f7] md:hidden opacity-50"></div>
                    <div className="absolute left-0 top-6 w-6 h-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full md:hidden">
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
