import { CalendarClock, MessageCircle, Users } from "lucide-react";

const Features = () => {
  const filary = [
    {
      icon: <CalendarClock className="h-8 w-8 text-white" />,
      title: "Mikrodawki zamiast maratonów",
      description: "15 minut codziennie > 3 godziny raz w tygodniu. Twój mózg potrzebuje częstych „przypominajek\", żeby język się utrwalał."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Prawdziwy język, nie podręcznikowy",
      description: "Wsiąkanie w to, czego naprawdę używają Hispanohablantes. Żaden Hiszpan nie powie „¿Podrías pasarme la sal, por favor?\" przy rodzinnym obiedzie. Powie: „Pásame la sal\". W Strefie codziennie dostajesz takie perełki — wyrażenia, które sprawiają, że przestajesz brzmieć jak robot."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Społeczność, która trzyma w grze",
      description: "Nie uczysz się w próżni. Kiedy w piątek wieczór zastanawiasz się „może dziś odpuszczę\", a widzisz że Ania właśnie odpowiedziała na pytanie pod postem — wracasz. Bo nie robisz tego sama."
    }
  ];

  return (
    <section id="korzysci" className="bg-[#FFC53D] py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-bold tracking-wider uppercase mb-3">Metoda „codziennego zanurzenia"</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-900 mb-6">
            3 filary, które robią robotę
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filary.map((filar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-sm">
                {filar.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-4 leading-snug" style={{ fontFamily: 'var(--font-lora), serif' }}>Filar {index + 1}: {filar.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {filar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto space-y-8 text-center text-lg md:text-xl leading-relaxed">
          <p className="text-slate-700">
            <span className="text-primary font-bold block mb-1">Po kilku tygodniach:</span>
            Oglądasz "La Casa de Papel" i nagle łapiesz żart, którego miesiąc temu byś nie zrozumiała.
          </p>
          <p className="text-slate-700">
            <span className="text-primary font-bold block mb-1">Po 2 miesiącach:</span>
            Twoja hiszpańska koleżanka z pracy mówi: <em>"Oye, hablas mucho mejor"</em> (słuchaj, mówisz dużo lepiej).
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
