"use client";

import { CheckCircle2, Clock } from "lucide-react";

const Offer = () => {
  const currentElements = [
    {
      title: "Klub Hiszpański Todos los Días",
      desc: "Codziennie nowe wyrażenie z prawdziwego życia"
    },
    {
      title: "Podcasty",
      desc: "Odcinki na różnych poziomach z materiałem do pracy"
    },
    {
      title: "Ściągawki gramatyczne",
      desc: "Jasne i konkretne tłumaczenia"
    },
    {
      title: "Wyzwania tygodniowe",
      desc: "Konkretne zadania motywujące do działania"
    },
    {
      title: "Forum społeczności",
      desc: "Miejsce na pytania, wymianę doświadczeń"
    },
    {
      title: "Polecajki językowe i wskazówki",
      desc: "Jak uczyć się efektywniej"
    },
    {
      title: "Forum kulturalne",
      desc: ""
    }
  ];

  const futureElements = [
    {
      title: "Karty pracy do seriali",
      desc: "Przewodnik po najpopularniejszych serialach hiszpańskich"
    },
    {
      title: "Live Q&A",
      desc: "Miesięczne spotkania z pytaniami i odpowiedziami"
    },
    {
      title: "Dostęp do kursów gramatycznych",
      desc: "Ogarnij podstawy, ogarnij czasy przeszłe, ogarnij subjuntivo, mów jak hiszpan kurs a wymowie hiszpańskiej"
    }
  ];

  return (
    <section className="bg-emerald-800 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-white mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Co dostajesz <span className="bg-primary px-6 py-1 rounded-full inline-block text-white">w Strefie</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl mb-12 border border-white/50 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentElements.map((el, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="text-primary shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-slate-800 text-lg block mb-1">{el.title}</span>
                  {el.desc && <span className="text-slate-600 text-sm block">{el.desc}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden border border-white/50">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-slate-800 mb-2 flex flex-col uppercase">
                <span className="text-primary text-sm tracking-[0.2em] mb-1">DODATKOWO:</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Strefa rośnie razem z Tobą
                </span>
              </h3>
              <p className="text-slate-600 mb-6 text-sm font-medium">
                Dołączając dzisiaj, zyskujesz gwarancję dostępu do wszystkich nadchodzących nowości w obecnej cenie (jako darmowe aktualizacje):
              </p>
              <ul className="space-y-4">
                {futureElements.map((el, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-white/50 border border-slate-100">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">+</div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-1">{el.title}</span>
                        <span className="text-slate-500 text-sm block">{el.desc}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Agata holding materials */}
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative min-h-[200px] flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/10 rounded-2xl rotate-3 translate-x-2 translate-y-2" />
                <img 
                  src="/avatar.jpg" 
                  alt="Agata z laptopem" 
                  className="relative z-10 w-full h-auto mix-blend-multiply" 
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200/60 text-center">
            <p className="text-slate-600 font-medium">Łączna wartość materiałów:</p>
            <p className="text-3xl md:text-4xl font-black text-slate-900 mt-2">1100+ zł <span className="text-xl font-bold text-slate-600">miesięcznie</span></p>
            <div className="mt-4">
              <span className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-sm">
                A Ty dostajesz to wszystko za jedyne <span className="text-emerald-600 font-extrabold text-lg md:text-xl">87 zł</span> / miesięcznie!
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;
