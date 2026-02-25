import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Header */}
      <div className="bg-zinc-900 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Kontakt</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami, aby omówić szczegóły współpracy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Dane Kontaktowe</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Adres</h3>
                  <p className="text-gray-400 leading-relaxed">
                    ul. Południowa 8/1<br />
                    39-207 Brzeźnica<br />
                    Polska
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Telefon</h3>
                  <p className="text-gray-400 mb-1">Biuro: <a href="tel:146817465" className="hover:text-white transition-colors">14 681 74 65</a></p>
                  <p className="text-gray-400">Kom: <a href="tel:+48500000000" className="hover:text-white transition-colors">+48 500 000 000</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:biuro@habes.pl" className="hover:text-white transition-colors">biuro@habes.pl</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Godziny Otwarcia</h3>
                  <p className="text-gray-400">Poniedziałek - Piątek: 8:00 - 16:00</p>
                  <p className="text-gray-400">Sobota - Niedziela: Zamknięte</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 md:p-10 border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Napisz do nas</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Imię i Nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Temat</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Wycena projektu..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Wiadomość</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Treść wiadomości..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold uppercase tracking-wider py-4 hover:bg-blue-700 transition-colors duration-300"
              >
                Wyślij Wiadomość
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 h-[400px] w-full bg-zinc-900 border border-white/5 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.977465683224!2d21.36544831571217!3d50.07682997942544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d7b7b7b7b7b7b%3A0x0!2sPo%C5%82udniowa%208%2F1%2C%2039-207%20Brze%C5%BAnica!5e0!3m2!1spl!2spl!4v1629876543210!5m2!1spl!2spl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
