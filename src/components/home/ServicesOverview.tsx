import { Sparkles, Palette, Music, Utensils, Camera, Calendar } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../common/ServiceCard';
import Button from '../common/Button';

const services = [
  {
    title: 'Wedding Planning',
    description: 'Traditional Indian wedding planning with meticulous attention to customs, rituals, and family preferences.',
    icon: <Sparkles size={24} />,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Event Decoration',
    description: 'Stunning traditional and contemporary décor featuring marigold arrangements, mandaps, drapes, and lighting.',
    icon: <Palette size={24} />,
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Cultural Performances',
    description: 'Classical music, dance performances, and entertainment that showcase rich Indian cultural heritage.',
    icon: <Music size={24} />,
    image: 'https://images.pexels.com/photos/2167755/pexels-photo-2167755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Catering Services',
    description: 'Authentic Indian cuisine with regional specialties, fusion options, and personalized menu planning.',
    icon: <Utensils size={24} />,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Photography & Film',
    description: 'Cinematic storytelling and artistic photography to capture your event\'s emotions and details.',
    icon: <Camera size={24} />,
    image: 'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Corporate Events',
    description: 'Culturally themed corporate events with professional management and seamless execution.',
    icon: <Calendar size={24} />,
    image: 'https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Celebration Services"
          subtitle="Discover our comprehensive range of services designed to create authentic and memorable Indian celebrations."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/services" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;