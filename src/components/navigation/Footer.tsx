import { Link } from 'react-router-dom';
import {  Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-20 w-20"
                />
              <span className="text-2xl font-display font-bold">
                Team <span className="text-primary-500">Surya</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming your special moments into unforgettable memories with authentic Indian traditions and modern elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-primary-500 transition-colors" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 border-b border-primary-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-500 transition-colors flex items-center"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 border-b border-primary-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Wedding Planning',
                'Traditional Ceremonies',
                'Event Decoration',
                'Cultural Performances',
                'Catering Services',
                'Photography & Videography'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-primary-500 transition-colors flex items-center"
                  >
                    <span className="text-primary-500 mr-2">•</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 border-b border-primary-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+919550200217" className="text-gray-300 hover:text-primary-500 transition-colors">
                  +91 95502 00217
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:teamsurya08@gmail.com" className="text-gray-300 hover:text-primary-500 transition-colors break-all">
                  teamsurya08@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Andhra Pradesh, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Team Surya. All Rights Reserved.</p>
          <p className="mt-2">
            CEO: Surya Dharanish Perumalla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;