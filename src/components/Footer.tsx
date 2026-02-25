import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          
          {/* Brand Column - Wider */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex flex-col group">
              <span className="text-3xl font-bold tracking-tighter text-white">HABES</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-medium mt-1">Construction</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Budujemy przyszłość z precyzją i pasją. Lider w branży budowlanej, dostarczający innowacyjne rozwiązania dla przemysłu i infrastruktury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Firma</h3>
            <ul className="space-y-4">
              {['O Nas', 'Kariera', 'Aktualności', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Sektory</h3>
            <ul className="space-y-4">
              {['Przemysł', 'Mieszkaniowe', 'Infrastruktura', 'Edukacja', 'Rządowe'].map((item) => (
                <li key={item}>
                  <Link to="/uslugi" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Kontakt</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="text-blue-500 mt-1 mr-4" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  ul. Południowa 8/1<br />39-207 Brzeźnica
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-500 mr-4" size={18} />
                <a href="tel:146817465" className="text-gray-400 hover:text-white transition-colors text-sm">
                  14 681 74 65
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-500 mr-4" size={18} />
                <a href="mailto:biuro@habes.pl" className="text-gray-400 hover:text-white transition-colors text-sm">
                  biuro@habes.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} HABES Construction.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-wider transition-colors">Prywatność</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-wider transition-colors">Regulamin</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-wider transition-colors">Mapa Strony</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
