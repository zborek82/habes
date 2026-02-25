import { motion } from 'framer-motion';
import { Building2, Home, Truck, Wrench, PaintBucket, HardHat } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Services() {
  const services = [
    {
      icon: <Building2 size={48} />,
      title: 'Budownictwo Przemysłowe',
      description: 'Realizujemy kompleksowe inwestycje przemysłowe, w tym hale produkcyjne, magazynowe oraz centra logistyczne. Stosujemy nowoczesne technologie zapewniające trwałość i funkcjonalność.',
      features: ['Hale stalowe i żelbetowe', 'Obiekty magazynowe', 'Centra logistyczne', 'Zakłady produkcyjne']
    },
    {
      icon: <Home size={48} />,
      title: 'Budownictwo Mieszkaniowe',
      description: 'Budujemy nowoczesne osiedla mieszkaniowe oraz domy jednorodzinne. Dbamy o każdy detal, łącząc estetykę z najwyższymi standardami wykonania.',
      features: ['Osiedla wielorodzinne', 'Domy jednorodzinne', 'Apartamentowce', 'Rewitalizacje kamienic']
    },
    {
      icon: <Truck size={48} />,
      title: 'Infrastruktura Drogowa',
      description: 'Wykonujemy drogi dojazdowe, place manewrowe, parkingi oraz chodniki. Posiadamy własny park maszynowy pozwalający na sprawną realizację prac ziemnych.',
      features: ['Drogi i parkingi', 'Place manewrowe', 'Roboty ziemne', 'Sieci zewnętrzne']
    },
    {
      icon: <Wrench size={48} />,
      title: 'Generalne Wykonawstwo',
      description: 'Przejmujemy pełną odpowiedzialność za proces budowlany. Od projektu, przez uzyskanie pozwoleń, aż po oddanie kluczy inwestorowi.',
      features: ['Nadzór budowlany', 'Koordynacja podwykonawców', 'Optymalizacja kosztów', 'Odbiory techniczne']
    },
    {
      icon: <PaintBucket size={48} />,
      title: 'Renowacje i Modernizacje',
      description: 'Przywracamy blask starym budynkom oraz dostosowujemy obiekty do nowych funkcji. Specjalizujemy się w termomodernizacjach i przebudowach.',
      features: ['Termomodernizacje', 'Przebudowy wnętrz', 'Adaptacje poddaszy', 'Remonty elewacji']
    },
    {
      icon: <HardHat size={48} />,
      title: 'Usługi Projektowe',
      description: 'Współpracujemy z doświadczonymi architektami i konstruktorami, oferując kompleksowe usługi projektowe dostosowane do indywidualnych potrzeb.',
      features: ['Projekty budowlane', 'Wizualizacje 3D', 'Kosztorysowanie', 'Doradztwo techniczne']
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-zinc-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src={IMAGES.SERVICES_BG} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nasze Usługi</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Oferujemy szeroki wachlarz usług budowlanych, dostosowanych do wymagań najbardziej wymagających inwestorów.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 border border-white/5 p-8 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="text-blue-500 mb-6 p-4 bg-white/5 inline-block rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Masz pytania dotyczące oferty?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić szczegóły Twojej inwestycji. Nasi eksperci chętnie doradzą najlepsze rozwiązania.
          </p>
          <a href="/kontakt" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </div>
  );
}
