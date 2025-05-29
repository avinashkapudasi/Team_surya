import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import GalleryImage from '../components/common/GalleryImage';
import ContactCTA from '../components/home/ContactCTA';

// Gallery images data
const galleryData = [
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
  },
  {
    image: 'https://images.pexels.com/photos/4551003/pexels-photo-4551003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Haldi Ceremony',
    category: 'Wedding'
  },
  {
    image: 'https://images.pexels.com/photos/6487074/pexels-photo-6487074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Sangeet Night',
    category: 'Entertainment'
  },
  {
    image: 'https://images.pexels.com/photos/1484015/pexels-photo-1484015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Diwali Corporate Celebration',
    category: 'Corporate'
  },
  {
    image: 'https://images.pexels.com/photos/1309902/pexels-photo-1309902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Wedding Reception Venue',
    category: 'Decoration'
  },
  {
    image: 'https://images.pexels.com/photos/8389935/pexels-photo-8389935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Traditional Bridal Look',
    category: 'Photography'
  },
  {
    image: 'https://images.pexels.com/photos/8350920/pexels-photo-8350920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Mehndi Ceremony',
    category: 'Wedding'
  },
  {
    image: 'https://images.pexels.com/photos/7275854/pexels-photo-7275854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'House Warming Ceremony',
    category: 'Traditional'
  },
  {
    image: 'https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Event Bar Setup',
    category: 'Catering'
  },
  {
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Music Performance',
    category: 'Entertainment'
  }
];

const GalleryPage = () => {
  useEffect(() => {
    document.title = 'Gallery | Team Surya';
  }, []);

  const [filter, setFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Get unique categories
  const categories = ['All', ...new Set(galleryData.map(item => item.category))];
  
  // Filter gallery items
  const filteredGallery = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-texture bg-fixed bg-cover bg-center relative">
        <div className="absolute inset-0 bg-accent-900/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl leading-relaxed">
              Explore our portfolio of stunning events and celebrations that showcase our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Event Highlights" 
            subtitle="Browse through our collection of magical moments from various celebrations we've created."
          />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

// Add AnimatePresence to make exit animations work
const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default GalleryPage;