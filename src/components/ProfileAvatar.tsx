import { useState, useRef, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

interface ProfileAvatarProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  variants?: Variants;
  className?: string;
}

export function ProfileAvatar({
  src,
  alt,
  fallbackSrc = 'https://avatars.githubusercontent.com/u/83838865?v=4',
  variants,
  className = ''
}: ProfileAvatarProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    // If the image was already cached by the browser, mark it loaded immediately
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <motion.div
      variants={variants}
      className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full shrink-0 overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-slate-900/80 z-30 aspect-square ${className}`}
    >
      {/* Loading Skeleton / Shimmer */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      >
        <div className="w-full h-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-slate-800/80" />
      </div>

      {/* Smooth Blur-up Image with Fallback */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
        }`}
      />
    </motion.div>
  );
}
