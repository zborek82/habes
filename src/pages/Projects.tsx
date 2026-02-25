import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Projects() {
  const [filter, setFilter] = useState('Wszystkie');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ['Wszystkie', 'Przemysłowe', 'Mieszkaniowe', 'Infrastruktura', 'Użyteczności Publicznej'];

  const projects = [
    {
      id: 1,
      title: 'Betonowa Willa Minimalistyczna',
      category: 'Mieszkaniowe',
      image: IMAGES.PROJECT_1,
      constructionImage: IMAGES.PROJECT_1_CONSTRUCTION,
      location: 'Rzeszów',
      year: '2023'
    },
    {
      id: 2,
      title: 'Luksusowy Dom na Wzgórzu',
      category: 'Mieszkaniowe',
      image: IMAGES.PROJECT_2,
      location: 'Dębica',
      year: '2022'
    },
    {
      id: 3,
      title: 'Rezydencja w stylu Skandynawskim',
      category: 'Mieszkaniowe',
      image: IMAGES.PROJECT_3,
      location: 'Tarnów',
      year: '2023'
    },
    {
      id: 4,
      title: 'Eko-Dom z Zielonym Dachem',
      category: 'Mieszkaniowe',
      image: IMAGES.PROJECT_4,
      location: 'Mielec',
      year: '2021'
    },
    {
      id: 5,
      title: 'Szklany Biurowiec (w budowie)',
      category: 'Przemysłowe',
      image: IMAGES.PROJECT_5,
      location: 'Stalowa Wola',
      year: '2022'
    },
    {
      id: 6,
      title: 'Nowoczesny budynek magazynowy',
      category: 'Przemysłowe',
      image: IMAGES.PROJECT_6,
      location: 'Kraków',
      year: '2023'
    },
    {
      id: 7,
      title: 'Nowoczesne Centrum Kultury',
      category: 'Użyteczności Publicznej',
      image: IMAGES.PROJECT_7,
      location: 'Warszawa',
      year: '2024'
    },
  ];

  const filteredProjects = filter === 'Wszystkie' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Header */}
      <div className="bg-zinc-900 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nasze Realizacje</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Przegląd wybranych inwestycji zrealizowanych przez firmę Habes.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex items-center text-gray-400 mr-4">
            <Filter size={20} className="mr-2" />
            <span className="uppercase text-sm font-bold tracking-wider">Filtruj:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm font-medium uppercase tracking-wider border transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] bg-zinc-900 overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                    <div>
                      <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              onClick={() => setSelectedProject(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col bg-zinc-900 border border-white/10 rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-grow overflow-hidden bg-black flex items-center justify-center gap-4 p-4">
                 <div className="flex flex-col md:flex-row gap-4 w-full h-full items-center justify-center">
                   <div className="relative group flex-1 h-full flex items-center justify-center">
                     <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} - Gotowy`}
                      className="max-w-full max-h-[75vh] object-contain"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-white text-xs uppercase tracking-wider rounded">Gotowy</div>
                   </div>
                   
                   {/* @ts-ignore */}
                   {selectedProject.constructionImage && (
                     <div className="relative group flex-1 h-full flex items-center justify-center">
                       <img
                        /* @ts-ignore */
                        src={selectedProject.constructionImage}
                        alt={`${selectedProject.title} - Budowa`}
                        className="max-w-full max-h-[75vh] object-contain"
                       />
                      <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-white text-xs uppercase tracking-wider rounded">W Budowie</div>
                     </div>
                   )}
                 </div>
              </div>
              
              <div className="p-8 bg-zinc-900 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-1 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedProject.location}</p>
                </div>
                <div className="text-right hidden md:block">
                  <span className="block text-gray-500 text-xs uppercase tracking-widest mb-1">Rok Realizacji</span>
                  <span className="text-xl font-bold text-white">{selectedProject.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
