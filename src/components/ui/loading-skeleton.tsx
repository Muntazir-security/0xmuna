import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "circular" | "rectangular";
  animation?: "pulse" | "wave" | "none";
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className, 
  variant = "default",
  animation = "pulse"
}) => {
  const baseClasses = "bg-white/10";
  
  const variantClasses = {
    default: "rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-none"
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-pulse-slow",
    none: ""
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
    />
  );
};

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <Skeleton className="w-12 h-12 rounded-xl" variant="rectangular" />
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>
      
      <div className="space-y-4">
        <Skeleton className="w-3/4 h-6" />
        <div className="space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-4/6 h-4" />
        </div>
        
        <div className="space-y-2">
          <Skeleton className="w-20 h-3" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="w-16 h-6 rounded-md" />
            <Skeleton className="w-20 h-6 rounded-md" />
            <Skeleton className="w-12 h-6 rounded-md" />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export const CertificationCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center group cursor-pointer">
      <div className="mb-4 flex justify-center">
        <Skeleton className="w-16 h-16 rounded-lg" variant="rectangular" />
      </div>
      <Skeleton className="w-3/4 h-5 mx-auto mb-2" />
      <Skeleton className="w-1/2 h-4 mx-auto" />
    </div>
  );
};

export const TechStackSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center group cursor-pointer">
      <div className="mb-3 flex justify-center">
        <Skeleton className="w-12 h-12" variant="circular" />
      </div>
      <Skeleton className="w-2/3 h-4 mx-auto" />
    </div>
  );
};

export const ContactFormSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <Skeleton className="w-32 h-8 mb-6" />
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-full h-10 rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-full h-10 rounded-md" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-full h-10 rounded-md" />
        </div>
        
        <div className="space-y-2">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-full h-32 rounded-md" />
        </div>
        
        <Skeleton className="w-full h-12 rounded-md" />
      </div>
    </div>
  );
};

export const PageLoadingSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      {/* Navigation Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B1E]/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Skeleton className="w-32 h-6" />
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-20 h-8 rounded-full" />
                ))}
              </div>
              <Skeleton className="w-9 h-9 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-24 pb-12 px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
            <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <Skeleton className="w-48 h-8 mx-auto lg:mx-0 rounded-full" />
                <div className="space-y-4">
                  <Skeleton className="w-3/4 h-16 mx-auto lg:mx-0" />
                  <Skeleton className="w-1/2 h-12 mx-auto lg:mx-0" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="w-2/3 h-6 mx-auto lg:mx-0" />
                  <Skeleton className="w-full h-5 mx-auto lg:mx-0" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Skeleton className="w-80 h-48 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 