import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X as XIcon } from 'lucide-react';

interface ImageLightboxProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
            src={selectedImage}
            alt="Selected Certificate - Full View"
            className="block max-w-full max-h-[calc(80vh-1rem)] object-contain rounded-md"
            loading="eager"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 md:w-10 md:h-10"
            onClick={onClose}
          >
            <XIcon className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;