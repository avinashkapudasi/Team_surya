import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Flower } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white shadow-lg py-2' 
      : 'bg-transparent py-4'
  }`;

  const linkClasses = `relative px-3 py-2 text-lg font-medium transition-colors duration-300 hover:text-primary-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full`;

  const activeLinkClasses = `text-primary-500 after:w-full`;

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 z-10">
          {/* <Flower className="h-8 w-8 text-primary-500" /> */}
          <img src="logo.png" alt="Team Surya Logo" className="h-10 w-10" />
          <span className="text-2xl font-display font-bold text-accent-500">
            Team <span className="text-primary-500">Surya</span>
          </span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `${linkClasses} ${isActive ? activeLinkClasses : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="tel:+919550200217" 
            className="ml-4 px-6 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-300"
          >
            Call Us
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 p-2 text-accent-500 hover:text-primary-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-0 bg-white pt-20 px-4"
            >
              <nav className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-xl font-medium ${isActive ? 'text-primary-500' : 'text-accent-500'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a 
                  href="tel:+919550200217" 
                  className="mt-4 px-8 py-3 rounded-full bg-primary-500 text-white text-lg"
                >
                  Call Us
                </a>
              </nav>
              
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Flower className="h-4 w-4 mr-2 text-primary-500" />
                  <span>© 2025 Team Surya</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;