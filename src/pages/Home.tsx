import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const heroImages = [
    IMAGES.PROJECT_1,
    IMAGES.PROJECT_2,
    IMAGES.PROJECT_3,
    IMAGES.PROJECT_4,
    IMAGES.PROJECT_6,
    IMAGES.PROJECT_7
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const featuredProjects = [
    {
      id: 1,
      title: 'Nowoczesny budynek magazynowy',
      location: 'Kraków, PL',
      image: IMAGES.PROJECT_6,
      size: 'Duży'
    },
    {
      id: 2,
      title: 'Luksusowy Dom na Wzgórzu',
      location: 'Dębica, PL',
      image: IMAGES.PROJECT_2,
      size: 'Średni'
    },
    {
      id: 3,
      title: 'Rezydencja w stylu Skandynawskim',
      location: 'Tarnów, PL',
      image: IMAGES.PROJECT_3,
      size: 'Duży'
    },
    {
      id: 4,
      title: 'Nowoczesne Centrum Kultury',
      location: 'Warszawa, PL',
      image: IMAGES.PROJECT_7,
      size: 'Duży'
    },
  ];

  const markets = [
    'Lotnictwo', 'Edukacja', 'Rządowe', 'Ochrona Zdrowia', 
    'Infrastruktura', 'Przemysł', 'Mieszkaniowe', 'Nauka i Technologia'
  ];

  return (
    <div className="bg-zinc-950 text-white">
      {/* Hero Section - Clark Style: Full screen, bold text bottom left */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={heroImages[currentImageIndex]} 
              alt="Hero Background" 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full z-20 pb-20 md:pb-32 px-6 lg:px-12 max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 leading-[0.9]">
              BUDUJEMY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">DZIEDZICTWO</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
              Od ponad dekady kształtujemy krajobraz Polski, dostarczając obiekty, które służą pokoleniom.
            </p>
            <Link 
              to="/realizacje" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300"
            >
              Zobacz Nasze Prace <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section - "We Are Habes" */}
      <section className="py-32 px-6 lg:px-12 max-w-[1800px] mx-auto bg-zinc-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">O Nas</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Więcej niż beton <br /> i stal.
            </h3>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
              Jesteśmy polską firmą budowlaną o zasięgu ogólnokrajowym. Nasza siła tkwi w ludziach i innowacyjnym podejściu do inżynierii. Nie tylko wznosimy budynki – tworzymy przestrzenie, w których ludzie żyją, pracują i rozwijają się.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Nasza Misja</h4>
                <p className="text-gray-500">Dostarczać najwyższą jakość w terminie, dbając o bezpieczeństwo i środowisko.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Nasze Wartości</h4>
                <p className="text-gray-500">Uczciwość, precyzja, innowacja i partnerstwo na każdym etapie inwestycji.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Masonry/Grid Style */}
      <section className="py-0 bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Link to="/realizacje" key={project.id} className={`group relative h-[600px] overflow-hidden block ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                    {project.location}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="h-px w-full bg-white/30 mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="text-white font-medium uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
                    Zobacz Projekt <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-blue-600 py-16 text-center hover:bg-blue-700 transition-colors cursor-pointer group">
          <Link to="/realizacje" className="text-white text-2xl font-bold uppercase tracking-widest flex items-center justify-center">
            Zobacz Wszystkie Projekty <Plus className="ml-4 transform group-hover:rotate-90 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Markets / Expertise */}
      <section className="py-32 px-6 lg:px-12 max-w-[1800px] mx-auto bg-zinc-950">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Ekspertyza</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Sektory Rynku</h3>
          </div>
          <p className="text-gray-400 max-w-md mt-8 md:mt-0">
            Specjalizujemy się w szerokim spektrum budownictwa, od skomplikowanych obiektów przemysłowych po prestiżowe inwestycje mieszkaniowe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {markets.map((market, index) => (
            <Link 
              to="/uslugi" 
              key={index}
              className="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors duration-300 group flex flex-col justify-between h-64"
            >
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                {market}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Rok Założenia', value: '2008' },
              { label: 'Pracowników', value: '150+' },
              { label: 'Wartość Projektów', value: '500M+' },
              { label: 'Nagrody Branżowe', value: '12' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l-4 border-blue-600 pl-6">
                <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
