import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, quote, rating, image }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 -left-4 h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
        <Quote size={20} />
      </div>
      
      {/* Content */}
      <div className="mb-6">
        <p className="text-gray-600 italic leading-relaxed">"{quote}"</p>
      </div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-primary-500" : "text-gray-300"} 
            fill={i < rating ? "currentColor" : "none"} 
          />
        ))}
      </div>
      
      {/* Author */}
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-display font-semibold text-accent-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;