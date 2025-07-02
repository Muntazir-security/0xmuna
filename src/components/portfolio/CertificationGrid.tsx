import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CertificationCardSkeleton } from "@/components/ui/loading-skeleton";

interface Certification {
  id: number;
  title: string;
  issuingBody: string;
  imageSrc: string;
}

interface CertificationGridProps {
  certificationsData: Certification[];
  onImageClick: (imageSrc: string) => void;
}

const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}> = ({ src, alt, className, onLoad, onError }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-white/10 rounded-lg" />
      )}
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-lg">
          <span className="text-white/60 text-sm">Failed to load</span>
        </div>
      )}
    </div>
  );
};

const CertificationGrid: React.FC<CertificationGridProps> = ({ 
  certificationsData, 
  onImageClick 
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (loadedCount >= certificationsData.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount, certificationsData.length]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  if (!imagesLoaded) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <CertificationCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 opacity-100">
      {certificationsData.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          onClick={() => onImageClick(cert.imageSrc)}
          className="group cursor-pointer"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:scale-[1.02] h-full flex flex-col">
            <div className="aspect-video overflow-hidden border-b border-white/10 bg-white/5">
              <OptimizedImage
                src={cert.imageSrc}
                alt={`${cert.title} Certificate`}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                onLoad={handleImageLoad}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h4>
              <p className="text-sm text-white/70 mt-auto">
                {cert.issuingBody}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CertificationGrid;