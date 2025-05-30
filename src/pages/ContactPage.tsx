import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  Send 
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
// import Button from '../components/common/Button';


const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | Team Surya';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
              Contact Us
            </h1>
            <p className="text-xl leading-relaxed">
              Let's discuss how we can create your perfect celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact information section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                alignment="left"
              />
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-50 border border-primary-200 text-primary-800 rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Send className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for contacting Team Surya. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Your contact number"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Event Date (if known)
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Type*
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">Select an event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday">Birthday Celebration</option>
                      <option value="Religious Ceremony">Religious Ceremony</option>
                      <option value="Cultural Performance">Cultural Performance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Tell us about your event requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-display font-bold text-accent-800 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-accent-800 mb-1">Phone</h3>
                      <a href="tel:+919550200217" className="text-gray-600 hover:text-primary-500 transition-colors">
                        +91 95502 00217
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-accent-800 mb-1">Email</h3>
                      <a href="mailto:teamsurya08@gmail.com" className="text-gray-600 hover:text-primary-500 transition-colors break-all">
                        teamsurya08@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-accent-800 mb-1">Office Location</h3>
                      <p className="text-gray-600">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-accent-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-bold text-accent-800 mb-6">
                  Follow Us
                </h2>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
                  >
                    <Instagram />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
                  >
                    <Facebook />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
                  >
                    <Youtube />
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-accent-800 mb-4">
                  Looking for a Quote?
                </h2>
                <p className="text-gray-600 mb-6">
                  Contact us today for a personalized quote for your upcoming event. We offer customized packages to suit various budgets and requirements.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="/CEO.jpg" 
                      alt="Surya Dharanish Perumalla" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Surya Dharanish Perumalla</p>
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section (placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Find Us" 
            subtitle="Our office is conveniently located in Hyderabad, serving clients throughout India."
          />
          
          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden relative">
            {/* This would be replaced with an actual map integration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Map integration would be added here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;