import { useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  image: string;
  title: string;
  category: string;
}

const GalleryImage = ({ image, title, category }: GalleryImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-pointer group"
      whileHover={{ 
        z: 10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D card effect */}
      <motion.div
        className="relative h-72 md:h-80 w-full"
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          z: isHovered ? 10 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image with zoom effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)' 
          }}
        />
        
        {/* Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-accent-900 via-accent-900/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`} />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300" style={{ transform: isHovered ? 'translateY(0)' : 'translateY(20px)' }}>
          <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">{category}</span>
            <h3 className="text-white text-xl font-display font-semibold mt-1">{title}</h3>
          </div>
        </div>
        
        {/* Floating elements (visible on hover) */}
        {isHovered && (
          <>
            <motion.div 
              className="absolute top-5 right-5 h-10 w-10 rounded-full bg-primary-500/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div 
              className="absolute bottom-20 left-4 h-6 w-6 rounded-full bg-accent-500/30 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default GalleryImage;