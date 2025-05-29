import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ContactCTA from '../components/home/ContactCTA';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Team Surya';
  }, []);

  // Stats data
  const stats = [
    {
      icon: <Heart className="text-primary-500" size={24} />,
      value: '200+',
      label: 'Events Organized',
    },
    {
      icon: <Award className="text-primary-500\" size={24} />,
      value: '50+',
      label: 'Wedding Ceremonies',
    },
    {
      icon: <Users className="text-primary-500" size={24} />,
      value: '35+',
      label: 'Team Members',
    },
    {
      icon: <Clock className="text-primary-500\" size={24} />,
      value: '7+',
      label: 'Years of Experience',
    },
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
              Our Story
            </h1>
            <p className="text-xl leading-relaxed">
              Discover the passion and vision behind Team Surya's journey in creating authentic Indian celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our mission section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                title="Our Mission" 
                alignment="left"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  At Team Surya, our mission is to preserve and celebrate the rich cultural heritage of India through exceptional event management that honors traditions while embracing contemporary aesthetics.
                </p>
                <p>
                  We believe that every celebration should reflect the unique story, values, and cultural background of our clients, creating memorable experiences that resonate for generations.
                </p>
                <p>
                  Through meticulous planning, authentic cultural knowledge, and creative innovation, we strive to elevate each event into a transformative experience that connects people with their roots and each other.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3419711/pexels-photo-3419711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team Surya Mission" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-32 w-32 bg-primary-500/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-accent-500/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the CEO section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our CEO" 
            subtitle="The visionary leader behind Team Surya's commitment to excellence and cultural authenticity."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-display font-semibold text-accent-800 mb-4">
                Surya Dharanish Perumalla
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  With a background in traditional arts and modern event management, Surya Dharanish Perumalla founded Team Surya with a vision to create authentic Indian celebrations that honor cultural heritage while embracing contemporary trends.
                </p>
                <p>
                  His deep understanding of Indian traditions across different regions allows him to create events that authentically represent diverse cultural elements, from North Indian wedding ceremonies to South Indian classical performances.
                </p>
                <p>
                  "My greatest joy comes from seeing families connect with their cultural roots through celebrations that feel both timeless and fresh. Every event we create is an opportunity to preserve and pass on our rich heritage."
                </p>
                <div className="pt-4">
                  <div className="text-accent-800 font-medium">— Surya Dharanish Perumalla</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Surya Dharanish Perumalla - CEO" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent-900/80 to-transparent p-6">
                  <div className="text-white font-display font-semibold text-xl">Surya Dharanish Perumalla</div>
                  <div className="text-primary-300">Founder & CEO</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-primary-500/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-accent-500/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-white/80">
              Over the years, Team Surya has created countless memorable celebrations across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-display font-bold text-primary-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team values section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide every event we create and every client interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Authenticity',
                description: 'We honor traditions with deep respect and knowledge, ensuring every ritual and ceremony is conducted with cultural accuracy.',
                icon: '🪔'
              },
              {
                title: 'Creative Excellence',
                description: 'We blend traditional elements with contemporary design to create visually stunning and emotionally resonant experiences.',
                icon: '✨'
              },
              {
                title: 'Client-Centered Approach',
                description: 'We listen deeply to understand your vision, preferences, and family traditions to create truly personalized celebrations.',
                icon: '❤️'
              },
              {
                title: 'Meticulous Attention',
                description: 'From grand decorations to the smallest details, we ensure everything is executed with precision and care.',
                icon: '🔍'
              },
              {
                title: 'Seamless Execution',
                description: 'Our experienced team coordinates every aspect of your event so you can fully immerse yourself in the celebration.',
                icon: '🤝'
              },
              {
                title: 'Continuous Innovation',
                description: 'While honoring traditions, we continually explore new ideas, technologies, and trends to enhance your experience.',
                icon: '💡'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border-t-4 border-primary-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold text-accent-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default AboutPage;