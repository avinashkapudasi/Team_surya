import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/80 via-accent-900/70 to-accent-800/60" />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-10 h-24 w-24 rounded-full bg-primary-500/20 backdrop-blur-sm hidden lg:block"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-10 h-16 w-16 rounded-full bg-tertiary-500/20 backdrop-blur-sm hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display font-bold leading-tight mb-6">
              Creating Magical <span className="text-primary-400">Indian</span> Celebrations
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              From traditional weddings to grand cultural events, Team Surya transforms your special moments into unforgettable memories with authentic Indian traditions and modern elegance.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              to="/services" 
              size="lg" 
              icon={<ChevronRight size={20} />}
            >
              Explore Our Services
            </Button>
            <Button 
              to="/contact" 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 active:bg-white/20"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <div className="h-10 w-px bg-white/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;