import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Grazie per il messaggio! Ti contatteremo presto.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-green-900 mb-6">Contatti</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Raccontaci di te e scopri come collaborare con noi
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Phone className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Telefono</h3>
              <p className="text-gray-700 mb-1">+39 123 456 7890</p>
              <p className="text-sm text-gray-600">Lun-Sab 09:00 - 18:00</p>
            </div>

            <div className="bg-amber-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Mail className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Email</h3>
              <p className="text-gray-700 mb-1">info@orodeiprincipidibutera.it</p>
              <p className="text-sm text-gray-600">Risposta entro 24 ore</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin className="text-blue-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Indirizzo</h3>
              <p className="text-gray-700 text-sm">
                Via degli Ulivi, 123<br />
                12345 Città (PR)<br />
                Italia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Scrivici</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      placeholder="tua@email.it"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="Es. Richiesta visita, Ordine, Domanda su prodotti..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Scrivi il tuo messaggio qui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Invia Messaggio
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-6">Orari di Apertura</h3>
                <div className="bg-green-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-gray-900">Lunedì - Venerdì</span>
                    <span className="text-gray-700">09:00 - 18:00</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-gray-900">Sabato</span>
                    <span className="text-gray-700">10:00 - 16:00</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-gray-900">Domenica</span>
                    <span className="text-gray-700">Chiuso</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-gray-900">Giorni Festivi</span>
                    <span className="text-gray-700">Su appuntamento</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-6">Come Raggiungerci</h3>
                <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">In Auto</h4>
                      <p className="text-gray-700 text-sm">
                        Uscita autostrada A1, seguire le indicazioni per 15 km. Parcheggio gratuito disponibile.
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-blue-200"></div>
                  <div className="flex gap-3">
                    <Clock className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tempi di Percorrenza</h4>
                      <p className="text-gray-700 text-sm">
                        Da Firenze: 1 ora | Da Siena: 45 min | Da Pisa: 90 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-6">Domande Frequenti</h3>
                <div className="space-y-4">
                  <details className="bg-amber-50 rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-gray-900 flex items-center justify-between">
                      Quanto costa una visita?
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-700 mt-3 text-sm">
                      I prezzi variano da €20 a €80 a persona a seconda dell'esperienza. Consulta la pagina Visite per i dettagli.
                    </p>
                  </details>

                  <details className="bg-amber-50 rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-gray-900 flex items-center justify-between">
                      Posso acquistare direttamente presso l'azienda?
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-700 mt-3 text-sm">
                      Sì, è possibile acquistare direttamente presso la nostra sede. Contattaci per verificare la disponibilità.
                    </p>
                  </details>

                  <details className="bg-amber-50 rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-gray-900 flex items-center justify-between">
                      Offrite spedizioni all'estero?
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-700 mt-3 text-sm">
                      Sì, spediamo in tutta Europa. Contattaci per un preventivo personalizzato.
                    </p>
                  </details>

                  <details className="bg-amber-50 rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-gray-900 flex items-center justify-between">
                      L'olio è adatto ai celiaci?
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-700 mt-3 text-sm">
                      Sì, l'olio extravergine è naturalmente privo di glutine. Contattaci per ulteriori informazioni sulla lavorazione.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Seguici sui Social</h2>
          <p className="text-xl text-green-100 mb-8">
            Rimani aggiornato sulle novità, ricette e dietro le quinte della nostra azienda
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Newsletter</h3>
          <p className="text-lg text-gray-700 mb-6">
            Iscriviti per ricevere offerte esclusive, ricette e novità direttamente nella tua inbox
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
