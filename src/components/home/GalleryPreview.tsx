import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import GalleryImage from '../common/GalleryImage';
import Button from '../common/Button';

const galleryImages = [
  {
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Traditional Wedding Ceremony',
    category: 'Wedding'
  },
  {
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Colorful Mandap Decoration',
    category: 'Decoration'
  },
  {
    image: 'https://images.pexels.com/photos/2167755/pexels-photo-2167755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Classical Dance Performance',
    category: 'Entertainment'
  },
  {
    image: 'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Couple Portrait Session',
    category: 'Photography'
  },
  {
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Traditional Feast Arrangement',
    category: 'Catering'
  },
  {
    image: 'https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Corporate Cultural Event',
    category: 'Corporate'
  }
];

const GalleryPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-texture bg-cover bg-fixed bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-accent-900/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Our Event Gallery" 
          subtitle="Browse through our portfolio of stunning events and celebrations we've had the privilege to create."
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                zIndex: hoveredIndex === index ? 10 : 1,
                transition: 'z-index 0.3s'
              }}
            >
              <GalleryImage
                image={item.image}
                title={item.title}
                category={item.category}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            to="/gallery" 
            variant="outline" 
            className="text-white border-white hover:bg-white/10 active:bg-white/20"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;