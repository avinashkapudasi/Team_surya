import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Sparkles, Music, Palette, Utensils, Camera, 
  Gift, Sparkle, Calendar, User, Building, Landmark 
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ContactCTA from '../components/home/ContactCTA';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services | Team Surya';
  }, []);

  const services = [
    {
      id: 'weddings',
      title: 'Wedding Planning',
      description: 'Comprehensive wedding planning with meticulous attention to traditional ceremonies, family customs, and cultural significance.',
      icon: <Heart className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Pre-wedding ceremonies (Mehndi, Sangeet, Haldi)',
        'Wedding ceremony planning and execution',
        'Traditional mandap and stage setup',
        'Family ritual coordination',
        'Vendor management',
        'Guest experience planning'
      ]
    },
    {
      id: 'ceremonies',
      title: 'Traditional Ceremonies',
      description: 'Authentic organization of various cultural and religious ceremonies with proper ritual items and knowledgeable guidance.',
      icon: <Sparkles className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/7275854/pexels-photo-7275854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Naming ceremonies',
        'House warming (Griha Pravesh)',
        'Engagement ceremonies',
        'Anniversary celebrations',
        'Religious festivals',
        'Milestone celebrations'
      ]
    },
    {
      id: 'entertainment',
      title: 'Cultural Performances',
      description: 'Curated entertainment featuring classical and folk artists, musicians, and performers to enhance your event with cultural richness.',
      icon: <Music className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/2167755/pexels-photo-2167755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Classical dance performances',
        'Live music ensembles',
        'Folk dance troupes',
        'Fusion performances',
        'Interactive cultural experiences',
        'Traditional instrument players'
      ]
    },
    {
      id: 'decor',
      title: 'Event Decoration',
      description: 'Stunning decoration services featuring traditional Indian elements, contemporary design, and immersive thematic environments.',
      icon: <Palette className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Mandap and stage design',
        'Floral arrangements with traditional marigold',
        'Entrance and pathway decoration',
        'Themed venue transformation',
        'Lighting design',
        'Traditional and contemporary elements'
      ]
    },
    {
      id: 'catering',
      title: 'Catering Services',
      description: 'Authentic Indian cuisine featuring regional specialties, fusion options, and personalized menu planning for your event.',
      icon: <Utensils className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Multi-regional Indian cuisine',
        'Traditional feast (Bhoj) arrangements',
        'Vegetarian and non-vegetarian options',
        'Street food stations',
        'Dessert selections',
        'Beverage services'
      ]
    },
    {
      id: 'photography',
      title: 'Photography & Film',
      description: 'Cinematic storytelling and artistic photography to capture your event\'s emotions, details, and cultural significance.',
      icon: <Camera className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Candid photography',
        'Traditional ceremony documentation',
        'Cinematic films',
        'Same-day edits',
        'Aerial photography',
        'Photo booths with cultural props'
      ]
    },
    {
      id: 'favors',
      title: 'Traditional Favors',
      description: 'Curated gift selections featuring artisanal and traditional items that reflect Indian culture and heritage.',
      icon: <Gift className="h-10 w-10 text-primary-500" />,
      image: '/favours.jpg',
      features: [
        'Customized wedding favors',
        'Traditional gift baskets',
        'Artisanal handcrafted items',
        'Regional specialties',
        'Festival-themed giveaways',
        'Personalized cultural mementos'
      ]
    },
    {
      id: 'destination',
      title: 'Destination Events',
      description: 'Planning and execution of destination weddings and events at historic and culturally significant venues across India.',
      icon: <Landmark className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Palace and heritage venue selection',
        'Multi-day event planning',
        'Guest accommodation and transport',
        'Local cultural experiences',
        'Destination-specific themes',
        'Logistics management'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Culturally themed corporate events with professional management and seamless execution for memorable business functions.',
      icon: <Building className="h-10 w-10 text-primary-500" />,
      image: 'https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Corporate Diwali celebrations',
        'Cultural team-building activities',
        'Indian-themed product launches',
        'Traditional award ceremonies',
        'Conference cultural programming',
        'Business dinner experiences'
      ]
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl leading-relaxed">
              Comprehensive event planning and management services for authentic Indian celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Celebration Services" 
            subtitle="From traditional weddings to corporate events, we offer a comprehensive range of services to create authentic and memorable Indian celebrations."
          />

          {/* Service categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {['Weddings', 'Cultural Events', 'Corporate Functions'].map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-display font-semibold text-accent-800 mb-2">{category}</h3>
                <div className="h-1 w-16 bg-primary-500 mx-auto" />
              </motion.div>
            ))}
          </div>

          {/* Detailed service listings */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-display font-bold text-accent-800 ml-4">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="text-xl font-display font-semibold text-accent-800 mb-4">
                      What We Offer
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Sparkle className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -${index % 2 === 0 ? 'top' : 'bottom'}-6 -${index % 2 === 0 ? 'right' : 'left'}-6 h-32 w-32 bg-primary-500/10 rounded-full -z-10`}></div>
                  <div className={`absolute -${index % 2 === 0 ? 'bottom' : 'top'}-6 -${index % 2 === 0 ? 'left' : 'right'}-6 h-24 w-24 bg-accent-500/10 rounded-full -z-10`}></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Process" 
            subtitle="How we work with you to create extraordinary celebrations from concept to execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <User className="h-10 w-10 text-primary-500" />,
                title: '1. Consultation',
                description: 'We begin with a detailed consultation to understand your vision, preferences, budget, and cultural requirements.'
              },
              {
                icon: <Sparkle className="h-10 w-10 text-primary-500" />,
                title: '2. Concept',
                description: 'Our team develops a customized concept and detailed plan tailored to your event needs and cultural traditions.'
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary-500" />,
                title: '3. Coordination',
                description: 'We handle all logistics, vendor management, and scheduling to ensure seamless preparation.'
              },
              {
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                title: '4. Celebration',
                description: 'On the day of your event, we manage every detail so you can fully immerse yourself in the celebration.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-accent-800 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default ServicesPage;