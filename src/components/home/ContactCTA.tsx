import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-accent-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1421837/pexels-photo-1421837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 h-40 w-40 rounded-full bg-primary-500/20 hidden lg:block"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-tertiary-500/30 hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Create Your Dream Celebration?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how Team Surya can bring your vision to life with authentic traditions and impeccable execution.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="tel:+919550200217" 
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-accent-500 rounded-full hover:bg-primary-50 transition-colors font-medium"
            >
              <Phone size={18} />
              +91 95502 00217
            </a>
            <a 
              href="mailto:teamsurya08@gmail.com" 
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-accent-500 rounded-full hover:bg-primary-50 transition-colors font-medium"
            >
              <Mail size={18} />
              teamsurya08@gmail.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              to="/contact" 
              size="lg" 
              className="bg-primary-500 hover:bg-primary-600 text-white"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;