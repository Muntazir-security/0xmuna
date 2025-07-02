import { useState, useEffect } from 'react';

interface UseImagePreloaderOptions {
  imageUrls: string[];
  priority?: boolean;
}

export const useImagePreloader = ({ imageUrls, priority = false }: UseImagePreloaderOptions) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    const loadImage = (url: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        // Optimize loading attributes
        if (priority) {
          img.loading = 'eager';
          img.fetchPriority = 'high';
        } else {
          img.loading = 'lazy';
          img.fetchPriority = 'low';
        }
        
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    };

    const loadAllImages = async () => {
      try {
        const results = await Promise.allSettled(
          imageUrls.map(url => loadImage(url))
        );

        const loaded = new Set<string>();
        let hasErrors = false;

        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            loaded.add(result.value);
          } else {
            hasErrors = true;
            console.warn(`Failed to load image: ${imageUrls[index]}`);
          }
        });

        setLoadedImages(loaded);
        setHasError(hasErrors);
        setIsLoading(false);
      } catch (error) {
        console.error('Image preloading failed:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadAllImages();
  }, [imageUrls, priority]);

  return {
    loadedImages,
    isLoading,
    hasError,
    isImageLoaded: (url: string) => loadedImages.has(url),
    totalImages: imageUrls.length,
    loadedCount: loadedImages.size
  };
};