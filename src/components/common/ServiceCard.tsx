import { useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard = ({ title, description, icon, image }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="rounded-xl overflow-hidden shadow-lg h-full bg-white group relative"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="h-48 overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{ 
            backgroundImage: `url(${image})`, 
            transform: isHovered ? 'scale(1.1)' : 'scale(1)' 
          }}
        />
        <div className="absolute inset-0 bg-accent-900/40" />
        
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 h-12 w-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-500">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-accent-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500" />
    </motion.div>
  );
};

export default ServiceCard;