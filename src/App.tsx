import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
            <Leaf className="text-green-700" size={32} />
            <span className="text-2xl font-bold text-green-900">Oro dei Principi di Butera</span>
          </div>

          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`absolute top-full left-0 right-0 bg-white border-b md:static md:border-0 md:flex md:items-center md:gap-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-gray-900 hover:text-green-700">Home</button>
            <button onClick={() => navigateTo('about')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-gray-900 hover:text-green-700">Chi Siamo</button>
            <button onClick={() => navigateTo('production')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-gray-900 hover:text-green-700">Produzione</button>
            <button onClick={() => navigateTo('products')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-gray-900 hover:text-green-700">Prodotti</button>
            <button onClick={() => navigateTo('recipes')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-gray-900 hover:text-green-700">Ricette</button>
            <button onClick={() => navigateTo('visits')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-gray-900 hover:text-green-700">Visite</button>
            <button onClick={() => navigateTo('contact')} className="block w-full text-left px-4 py-2 md:px-0 md:py-0 font-semibold text-white bg-green-700 hover:bg-green-800 md:rounded-lg">Contatti</button>
          </div>
        </nav>
      </header>

      {currentPage === 'home' && (
        <div>
          <section className="relative h-96 md:h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://i.ytimg.com/vi/UZe4UCLaJc4/maxresdefault.jpg)'}}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full flex items-center justify-center text-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Oro dei principi di butera</h1>
                <p className="text-xl md:text-2xl text-white mb-8">Tradizione, qualità e sostenibilità dal 1918</p>
                <button onClick={() => navigateTo('products')} className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                  Scopri i Nostri Prodotti
                </button>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-white to-amber-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-fadeInUp">Perché Sceglierci</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="animate-fadeInUp bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-amber-400">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">100% Biologico</h3>
                  <p className="text-gray-700">Coltivato senza pesticidi, certificato biologico. Rispettiamo la natura e offriamo il massimo della qualità.</p>
                </div>
                <div className="animate-fadeInUp bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-orange-400" style={{animationDelay: '0.1s'}}>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Frantoio Proprio</h3>
                  <p className="text-gray-700">Dal raccolto alla bottiglia, tutto avviene nella nostra azienda per garantire freschezza e autenticità.</p>
                </div>
                <div className="animate-fadeInUp bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-yellow-400" style={{animationDelay: '0.2s'}}>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Tradizione Siciliana</h3>
                  <p className="text-gray-700">40 anni di esperienza e metodi tramandate da generazione in generazione per l'olio perfetto.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-green-900 mb-12 animate-fadeInUp">Prodotti in Primo Piano</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="animate-fadeInUp bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-200">
                  <img src="https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Classico" className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Classico</h3>
                  <p className="text-gray-700 mb-4">L'olio extravergine più versatile, perfetto per ogni piatto della cucina italiana.</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">€24,99</p>
                  <button onClick={() => navigateTo('products')} className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                    Scopri
                  </button>
                </div>
                <div className="animate-fadeInUp bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-200" style={{animationDelay: '0.1s'}}>
                  <img src="https://images.pexels.com/photos/2789791/pexels-photo-2789791.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Biologico" className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Premium Biologico</h3>
                  <p className="text-gray-700 mb-4">La nostra selezione più pregiata, con un sapore intenso e profumo inconfondibile.</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">€34,99</p>
                  <button onClick={() => navigateTo('products')} className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                    Scopri
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Visita la Nostra Azienda</h2>
              <p className="text-xl mb-8 animate-fadeInUp" style={{animationDelay: '0.1s'}}>Scopri il processo di produzione e assaggia il nostro olio direttamente dal nostro frantoio storico.</p>
              <button onClick={() => navigateTo('visits')} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Prenota una Visita
              </button>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'about' && (
        <div>
          <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-green-900 mb-6">La Nostra Storia</h1>
              <p className="text-xl text-gray-700">Dal 1918, la famiglia Tinnirello coltiva ulivi nel cuore della Sicilia con passione e dedizione.</p>
            </div>
          </section>
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img src="https://images.pexels.com/photos/2635317/pexels-photo-2635317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Famiglia" className="rounded-lg shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-6">La Famiglia Tinnirello</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">Tutto iniziò nel 1918 quando nonnno Annibale decise di coltivare ulivi nei terreni. Con dedizione e amore per la terra, ha creato un'azienda agricola che oggi è gestita dalla seconda e terza generazione della famiglia.</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">Oggi, continuiamo la tradizione con metodi ancora più sostenibili, mantenendo il rispetto per la natura e la qualità che hanno sempre caratterizzato l'Oro dei principi di butera.</p>
                  <p className="text-gray-700 leading-relaxed">La nostra missione è portare sulle tavole italiane un olio extravergine autentico, che rappresenti i valori della Sicilia: tradizione, qualità e sostenibilità.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'production' && (
        <div>
          <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-green-900 mb-6">Il Processo di Produzione</h1>
              <p className="text-xl text-gray-700">Dal terreno alla bottiglia, ogni step è curato con attenzione.</p>
            </div>
          </section>
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Coltivazione" className="rounded-lg shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">1. Coltivazione Sostenibile</h2>
                  <p className="text-gray-700 leading-relaxed">I nostri uliveti sono coltivati biologicamente, senza l'uso di pesticidi o fertilizzanti sintetici. Seguiamo i ritmi della natura, preservando la biodiversità e la salute del suolo.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">2. Raccolta Manuale</h2>
                  <p className="text-gray-700 leading-relaxed">Le olive vengono raccolte a mano nel periodo ottimale, tra ottobre e novembre, quando raggiungono la perfetta maturazione. Questo metodo delicato preserva la qualità del frutto.</p>
                </div>
                <img src="https://images.pexels.com/photos/5632616/pexels-photo-5632616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Raccolta" className="rounded-lg shadow-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src="https://images.pexels.com/photos/3962284/pexels-photo-3962284.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Frantoio" className="rounded-lg shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">3. Molitura a Freddo</h2>
                  <p className="text-gray-700 leading-relaxed">Nel nostro frantoio moderno, le olive vengono molite a freddo entro 4 ore dalla raccolta. Questo processo preserva tutti i nutrienti, gli aromi e le proprietà benefiche dell'olio.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">4. Estrazione e Decantazione</h2>
                  <p className="text-gray-700 leading-relaxed">L'olio viene estratto naturalmente, senza aggiunta di sostanze chimiche. Successivamente, lasciamo riposare il prodotto in tini di acciaio inox per una decantazione naturale.</p>
                </div>
                <img src="https://images.pexels.com/photos/5632603/pexels-photo-5632603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Decantazione" className="rounded-lg shadow-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imbottigliamento" className="rounded-lg shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">5. Imbottigliamento e Conservazione</h2>
                  <p className="text-gray-700 leading-relaxed">L'olio viene imbottigliato in bottiglie scure di vetro per preservare la qualità e proteggerlo dalla luce. Conserviamo tutto in condizioni ideali fino alla consegna.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'products' && (
        <div>
          <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-green-900 mb-6 animate-fadeInUp">I Nostri Prodotti</h1>
              <p className="text-xl text-gray-700 animate-fadeInUp" style={{animationDelay: '0.1s'}}>Una selezione di oli extravergini per ogni occasione e palato.</p>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'Classico', price: '€24,99', desc: 'L\'olio più versatile', img: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Premium Biologico', price: '€34,99', desc: 'Sapore intenso', img: 'https://images.pexels.com/photos/2789791/pexels-photo-2789791.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Raffinato', price: '€19,99', desc: 'Delicato e leggero', img: 'https://images.pexels.com/photos/3962288/pexels-photo-3962288.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Monovarietale', price: '€44,99', desc: 'Selezione esclusiva', img: 'https://images.pexels.com/photos/3962289/pexels-photo-3962289.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((product, i) => (
                  <div key={i} className="animate-fadeInUp bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-200" style={{animationDelay: `${i * 0.1}s`}}>
                    <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-4">{product.desc}</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">{product.price}</p>
                    <button className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold w-full shadow-md hover:shadow-lg">
                      Aggiungi al Carrello
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'recipes' && (
        <div>
          <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-green-900 mb-6">Ricette e Consigli</h1>
              <p className="text-xl text-gray-700">Scopri come utilizzare al meglio il nostro olio in cucina.</p>
            </div>
          </section>
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src="https://images.pexels.com/photos/5910852/pexels-photo-5910852.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bruschetta" className="rounded-lg shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Bruschetta Toscana</h3>
                  <p className="text-gray-700 mb-4">Pane tostato, pomodori freschi, aglio e il nostro olio extravergine. Un classico intramontabile.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Pasta e Fagioli</h3>
                  <p className="text-gray-700 mb-4">Un piatto povero reso sublime dal nostro olio a crudo per esaltare tutti i sapori autentici.</p>
                </div>
                <img src="https://images.pexels.com/photos/5732502/pexels-photo-5732502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pasta" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'visits' && (
        <div>
          <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-green-900 mb-6 animate-fadeInUp">Visite e Esperienze</h1>
              <p className="text-xl text-gray-700 animate-fadeInUp" style={{animationDelay: '0.1s'}}>Vieni a scoprire come nascono i nostri oli e assaggia la magia della Sicilia.</p>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="animate-fadeInUp bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Visita Guidata</h3>
                  <p className="text-gray-700 mb-6">Scopri i nostri uliveti e il processo di produzione con una guida esperta.</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">€25/persona</p>
                  <button className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold w-full shadow-md hover:shadow-lg">
                    Prenota
                  </button>
                </div>
                <div className="animate-fadeInUp bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-200" style={{animationDelay: '0.1s'}}>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Degustazione</h3>
                  <p className="text-gray-700 mb-6">Assaggia le varietà di olio con pane tostato e prodotti locali.</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">€35/persona</p>
                  <button className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold w-full shadow-md hover:shadow-lg">
                    Prenota
                  </button>
                </div>
                <div className="animate-fadeInUp bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200" style={{animationDelay: '0.2s'}}>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Corso di Cucina</h3>
                  <p className="text-gray-700 mb-6">Impara a usare l'olio in ricette tradizionali Siciliane.</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">€80/persona</p>
                  <button className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold w-full shadow-md hover:shadow-lg">
                    Prenota
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'contact' && <Contact />}

      <footer className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fadeInUp">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Leaf size={20} className="text-amber-400 animate-shimmer" />
                Oro dei Principi di Butera
              </h4>
              <p className="text-sm text-green-100">Extra vergine biologico dal 1918.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Prodotti</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><button onClick={() => navigateTo('products')} className="hover:text-white">Classico</button></li>
                <li><button onClick={() => navigateTo('products')} className="hover:text-white">Premium</button></li>
                <li><button onClick={() => navigateTo('products')} className="hover:text-white">Monovarietale</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Azienda</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li><button onClick={() => navigateTo('about')} className="hover:text-white">Chi Siamo</button></li>
                <li><button onClick={() => navigateTo('production')} className="hover:text-white">Produzione</button></li>
                <li><button onClick={() => navigateTo('visits')} className="hover:text-white">Visite</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contatti</h4>
              <ul className="space-y-2 text-sm text-green-100">
                <li>+39 123 456 7890</li>
                <li>info@olioterranostra.it</li>
                <li>Via degli Ulivi, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 pt-8 text-center text-sm text-green-100">
            <p>&copy; 2024 Oro dei Principi di Butera. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
