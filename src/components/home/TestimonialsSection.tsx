import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import TestimonialCard from '../common/TestimonialCard';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    quote: 'Team Surya made our wedding dreams come true. Every detail from the mandap to the smallest decorations was perfect. They understood our vision and executed it flawlessly.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Rahul Mehta',
    role: 'Corporate Client',
    quote: 'Our Diwali corporate event was spectacular. The cultural performances and traditional décor impressed our international guests and created an authentic experience.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Ananya Patel',
    role: 'Event Host',
    quote: 'From the initial planning to the execution, Team Surya\'s attention to detail was exceptional. The traditional dancers they arranged were the highlight of our celebration.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Vikram Singh',
    role: 'Groom',
    quote: 'Surya and his team created a magical wedding experience that honored both our families\' traditions while adding modern touches. Our guests are still talking about it!',
    rating: 5,
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Meera Reddy',
    role: 'Birthday Celebration',
    quote: 'Team Surya transformed our simple idea into an elaborate 60th birthday celebration with traditional South Indian elements. The attention to cultural details was impressive.',
    rating: 4,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Calculate visible testimonials based on screen size and current index
  const getVisibleTestimonials = () => {
    // For simplicity, we'll just use a static approach here
    // In a real app, you might want to use a hook to detect screen size
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Hear from our wonderful clients about their experiences with Team Surya's event management services."
        />
        
        <div className="relative">
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard 
                    name={testimonial.name}
                    role={testimonial.role}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                    image={testimonial.image}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-accent-500 hover:text-primary-500 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-accent-500 hover:text-primary-500 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;