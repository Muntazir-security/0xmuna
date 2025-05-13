
import React from "react";

export const PageBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0B1E]">
      {/* Top-left orb */}
      <div 
        className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#6366f1]/10 blur-3xl animate-pulse-slow"
        style={{ animationDuration: '8s' }}
      />
      
      {/* Bottom-right orb */}
      <div 
        className="absolute -bottom-40 -right-40 h-[25rem] w-[25rem] rounded-full bg-[#a855f7]/10 blur-3xl animate-pulse-slow"
        style={{ animationDuration: '12s' }}
      />
      
      {/* Center orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-[#9b87f5]/10 blur-2xl animate-spin-slower"
        style={{ animationDuration: '30s' }}
      />
    </div>
  );
};

export default PageBackground;
