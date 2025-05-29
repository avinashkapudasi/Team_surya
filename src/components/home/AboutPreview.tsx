import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const AboutPreview = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section with decorative elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Surya Dharanish Perumalla - CEO" 
                className="w-full h-auto"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-accent-900/80 to-transparent">
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Heart className="text-primary-500 mr-2" size={20} />
                  <span className="text-white font-medium">Passionate about traditions</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 h-48 w-48 bg-primary-500/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-accent-500/10 rounded-full -z-10"></div>
          </motion.div>
          
          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="The Vision Behind Team Surya"
              alignment="left"
            />
            
            <div className="space-y-4 text-gray-700">
              <p>
                Led by <span className="font-semibold text-accent-800">Surya Dharanish Perumalla</span>, Team Surya was founded with a passion for preserving and celebrating the rich cultural heritage of India through exceptional event management.
              </p>
              <p>
                Our team combines deep knowledge of traditional ceremonies with contemporary event planning expertise to create celebrations that honor cultural roots while embracing modern elegance.
              </p>
              <p>
                With meticulous attention to detail and personalized service, we've orchestrated hundreds of successful events, from intimate traditional ceremonies to grand wedding celebrations throughout India.
              </p>
              
              {/* Signature */}
              <div className="pt-4">
                <div className="font-display text-accent-800 text-lg font-semibold">Surya Dharanish Perumalla</div>
                <div className="text-gray-500">Founder & CEO</div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button to="/about" variant="outline">
                Read Our Full Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;