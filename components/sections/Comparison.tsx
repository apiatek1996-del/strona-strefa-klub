import { CheckCircle2, XCircle } from "lucide-react";

const Comparison = () => {
  const comparisons = [
    {
      wrong: "Lista 100 kolokwializmów do „wykucia\"",
      right: "Codzienna porcja wyrażeń z prawdziwego życia",
      label: "Inne kursy"
    },
    {
      wrong: "Chaos i przesyt treści, nie wiadomo na czym się skupić",
      right: "Wyselekcjonowane materiały i spokój w głowie",
      label: "Konta na Instagramie"
    },
    {
      wrong: "Brak kontaktu, możliwości dopytania i przećwiczenia",
      right: "Wspierająca społeczność i pytania w aplikacji",
      label: "Inne kursy"
    },
    {
      wrong: "Darmowe treści „na zawsze\" = mniejsza motywacja",
      right: "Inwestujesz i korzystasz – lepsze efekty",
      label: "Darmowe treści"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-900 mb-6" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Dlaczego Klub to <span className="text-primary">nie jest</span> kolejny zwykły kurs?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Zamiast obiecywać złote góry, stawiamy na zasadę <strong>MNIEJ a CZĘŚCIEJ I Z GŁOWĄ</strong>.
          </p>
        </div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-2 gap-4 items-stretch"
            >
              {/* Wrong way */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 opacity-70">
                <XCircle className="text-red-400 shrink-0 h-6 w-6" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-1">{item.label}</span>
                  <p className="text-slate-500 line-through text-sm sm:text-base">{item.wrong}</p>
                </div>
              </div>

              {/* Right way - Klub */}
              <div className="bg-primary-light p-6 rounded-2xl border border-primary/20 flex items-center gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 bg-primary/10 rounded-bl-xl">
                  <CheckCircle2 className="text-primary h-4 w-4" />
                </div>
                <CheckCircle2 className="text-primary shrink-0 h-8 w-8" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-primary block mb-1">Klub HTD</span>
                  <p className="text-slate-900 font-bold text-sm sm:text-base">{item.right}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Prawdziwy hiszpański zaczyna się tam, gdzie kończą się podręczniki</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Prawdziwy hiszpański z życia zaczyna się na <span className="bg-secondary/30 px-2 py-0.5 rounded font-mono font-bold text-slate-800">LLEGO EN NADA</span> albo <span className="bg-secondary/30 px-2 py-0.5 rounded font-mono font-bold text-slate-800">ESTOY DONDE MARIA</span>. 
              To wyrażenia, które dosłownie ratują życie w rozmowie, a których nie znajdziesz na typowych kontach na Instagramie, bo nie są tak „klikalne" jak przekleństwa. 
              W Klubie skupiamy się na tym, co sprawi, że Twój hiszpański wskoczy na poziom ekspercki.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="text-primary font-bold">✓</span>
                <span className="text-slate-700 text-sm font-medium">Zasada mniej a częściej</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="text-primary font-bold">✓</span>
                <span className="text-slate-700 text-sm font-medium">Budowanie systematyczności</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="text-primary font-bold">✓</span>
                <span className="text-slate-700 text-sm font-medium">Wyselekcjonowane materiały</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
