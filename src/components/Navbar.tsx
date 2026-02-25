import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'O Nas', path: '/#o-nas' },
    { name: 'Sektory', path: '/uslugi' },
    { name: 'Projekty', path: '/realizacje' },
    { name: 'Kariera', path: '/kontakt' }, // Placeholder for career
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-zinc-950/95 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group z-50">
               <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white leading-none">HABES</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-medium mt-1">Construction</span>
               </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-bold uppercase tracking-widest text-white hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <button className="text-white hover:text-blue-500 transition-colors">
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white z-50 hover:text-blue-500 transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-zinc-950 z-40 flex items-center justify-center"
          >
            <div className="w-full max-w-md px-6">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center justify-between text-3xl font-bold text-white hover:text-blue-500 transition-colors border-b border-white/10 pb-4 group"
                    >
                      {link.name}
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
