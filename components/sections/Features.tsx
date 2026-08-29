import { CalendarClock, Smartphone, Radio } from "lucide-react";

const Features = () => {
  const filary = [
    {
      icon: <CalendarClock className="h-8 w-8 text-white" />,
      title: "Mikrodawki zamiast maratonów",
      description: "10 minut rano w metrze robi więcej niż 3 godziny w niedzielę. Twój mózg utrwala język przez powtarzalny kontakt, nie przez jedno długie posiedzenie raz w tygodniu — po którym i tak przez sześć dni nie wracasz do tematu."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Bez zeszytu i bez siadania",
      description: `Cała Strefa działa z telefonu. W kolejce, w metrze, przy kawie. Nie potrzebujesz biurka, ciszy ani „trybu skupienia" — bo gdybyś na to czekała, nie zrobiłabyś tego ani razu w tym miesiącu.`
    },
    {
      icon: <Radio className="h-8 w-8 text-white" />,
      title: "Uczysz się tego, co usłyszysz w tym tygodniu",
      description: "Podręcznik idzie po kolei: rozdział 4, rozdział 5. Życie nie idzie po kolei. Ja daję Ci to, co Hiszpanie mówią teraz — więc w ciągu kilku dni usłyszysz to na ulicy albo w rolce. I wtedy dopiero to się zapisuje. Nie z powtarzania, tylko z rozpoznania."
    }
  ];

  return (
    <section id="korzysci" className="bg-[#FFC53D] py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-bold tracking-wider uppercase mb-3">Codzienne zanurzenie</p>
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

        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">Co się zmienia</h3>
          {[
            { when: "Po dwóch tygodniach", text: "Rozpoznajesz i rozumiesz w rolce wyrażenie, o którym czytałaś w poniedziałek." },
            { when: "Po miesiącu", text: "Zaczynasz wyłapywać te wyrażenia sama — w rolkach, filmach i rozmowach. Bo już wiesz, czego szukać." },
            { when: "Po trzech miesiącach", text: <>Mówisz coś do koleżanki i słyszysz: <em>Oye, hablas mucho mejor.</em></> },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-orange-100">
              <span className="text-primary font-black text-sm uppercase tracking-widest shrink-0 w-36">{item.when}</span>
              <p className="text-slate-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
