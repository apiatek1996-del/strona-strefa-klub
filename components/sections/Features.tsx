"use client";

import { CalendarClock, Smartphone, Radio, Check, Sparkles, TrendingUp } from "lucide-react";

const Features = () => {
  const filary = [
    {
      num: "01",
      title: "Mikrodawki zamiast maratonów",
      description: "10 minut rano w autobusie robi więcej niż 3 godziny w niedzielę. Twój mózg utrwala język przez powtarzalny kontakt, nie przez jedno długie posiedzenie raz w tygodniu — po którym i tak przez sześć dni nie wracasz do tematu.",
      icon: <CalendarClock className="w-6 h-6 text-primary" />,
      tag: "Częsty kontakt"
    },
    {
      num: "02",
      title: "Bez zeszytu i bez siadania",
      description: "Cała Strefa działa z telefonu. W kolejce, w autobusie, przy kawie. Nie potrzebujesz biurka, ciszy ani „trybu skupienia” — bo gdybyś na to czekała, nie zrobiłabyś tego ani razu w tym miesiącu.",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      tag: "Wygoda"
    },
    {
      num: "03",
      title: "Uczysz się tego, co usłyszysz w tym tygodniu",
      description: "Podręcznik idzie po kolei: rozdział 4, rozdział 5. Życie nie idzie po kolei. Ja daję Ci to, co Hiszpanie mówią teraz — więc w ciągu kilku dni usłyszysz to na ulicy albo w rolce.",
      icon: <Radio className="w-6 h-6 text-primary" />,
      tag: "Prawdziwe życie"
    }
  ];

  const timelineSteps = [
    {
      time: "Po 2 tygodniach",
      stage: "Rozpoznanie",
      emoji: "💡",
      text: "Rozpoznajesz i rozumiesz w rolce wyrażenie, o którym czytałaś w poniedziałek.",
      accent: "bg-amber-50 text-amber-700 border-amber-200/80"
    },
    {
      time: "Po miesiącu",
      stage: "Samodzielność",
      emoji: "🔍",
      text: "Zaczynasz wyłapywać te wyrażenia sama — w rolkach, filmach i rozmowach. Bo już wiesz, czego szukać.",
      accent: "bg-orange-50 text-orange-700 border-orange-200/80"
    },
    {
      time: "Po 3 miesiącach",
      stage: "Naturalność",
      emoji: "🗣️",
      text: "Mówisz coś do koleżanki i słyszysz:",
      quote: "„Oye, hablas mucho mejor.”",
      accent: "bg-emerald-50 text-emerald-800 border-emerald-200/80"
    }
  ];

  return (
    <section id="korzysci" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Nagłówek w stylu estetycznego banera */}
        <div className="bg-[#FFF5EB] rounded-3xl p-6 sm:p-10 mb-12 border border-orange-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2">Metoda codziennego zanurzenia</p>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-slate-900" style={{ fontFamily: 'var(--font-lora), serif' }}>
              3 filary, które robią robotę
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-orange-100 shadow-2xs">
            ✨ Prosto · Skutecznie · Codziennie
          </div>
        </div>

        {/* 3 karty filarów */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {filary.map((filar, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center border border-orange-100/60">
                    {filar.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    Filar {filar.num}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                    {filar.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {filar.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {filar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Graficzna OŚ CZASU (Timeline) */}
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-12 border border-slate-200/80 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-bold text-primary border border-slate-200/80 mb-2 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Twoja transformacja</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900" style={{ fontFamily: 'var(--font-lora), serif' }}>
                Co się zmienia z czasem:
              </h3>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Systematyczny kontakt 10 min dziennie buduje trwałe odruchy w mózgu.
            </p>
          </div>

          {/* Oś czasu - układ graficzny */}
          <div className="relative">
            
            {/* Pozioma linia łącząca na desktopie */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-emerald-500 rounded-full z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex flex-col">
                  
                  {/* Węzeł na osi czasu */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200/80 shadow-md flex items-center justify-center text-2xl shrink-0">
                      {step.emoji}
                    </div>
                    <div className="md:hidden flex-1 h-0.5 bg-slate-200" />
                  </div>

                  {/* Karta etapu na osi */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${step.accent}`}>
                          Krok 0{i + 1}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {step.time}
                      </h4>

                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                        {step.text}
                      </p>
                    </div>

                    {step.quote && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="inline-block bg-emerald-50 text-emerald-700 font-bold font-mono text-sm sm:text-base px-3 py-1.5 rounded-xl border border-emerald-100">
                          {step.quote}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
