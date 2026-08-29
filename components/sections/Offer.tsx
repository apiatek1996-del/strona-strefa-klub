"use client";

import { CheckCircle2, Clock } from "lucide-react";

const Offer = () => {
  const currentElements = [
    {
      title: "Codzienne wyrażenie, od poniedziałku do piątku",
      desc: "Z dogłębną analizą — nie tylko usłyszysz o nowym słówku czy konstrukcji, ale dokładnie będziesz wiedzieć, kiedy możesz jej użyć"
    },
    {
      title: "Archiwum ponad 400 wpisów",
      desc: "Od pierwszego dnia masz dostęp do wszystkiego, co powstało do tej pory"
    },
    {
      title: '\u201eZasłyszane na ulicy\u201d',
      desc: "Co ciekawsze fragmenty rozmów, które słyszę w Hiszpanii i relacjonuję Wam na bieżąco"
    },
    {
      title: "Ściągawki do pobrania",
      desc: "Gramatyka wytłumaczona logicznie, nie definicjami"
    },
    {
      title: "Forum",
      desc: "Znajdziesz tam osobę do ćwiczenia hiszpańskiego, czyli tandem językowy"
    },
    {
      title: "Możliwość zadawania pytań",
      desc: "Pod każdym postem — odpowiadam osobiście"
    },
  ];

  const futureElements = [
    {
      title: "Krótkie podcasty na kilku poziomach",
      desc: "Do słuchania w drodze"
    },
    {
      title: "Karty pracy do znanych seriali",
      desc: "Do pracy z każdym odcinkiem"
    },
    {
      title: "Kursy gramatyczne",
      desc: "Ogarnij podstawy · Ogarnij czasy przeszłe · Ogarnij subjuntivo · Mów jak Hiszpan (wymowa)"
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
            Wszystko w jednym miejscu — <span className="bg-primary px-6 py-1 rounded-full inline-block text-white">w Strefie</span>
          </h2>
          <p className="text-emerald-200 text-lg">W telefonie albo na komputerze, jak wolisz.</p>
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
          
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-2 flex flex-col uppercase">
              <span className="text-primary text-sm tracking-[0.2em] mb-1">WCHODZI WKRÓTCE:</span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Dostajesz w tej samej cenie
              </span>
            </h3>
            <p className="text-slate-600 mb-6 text-sm font-medium">
              Dołączając teraz, masz do nich dostęp bez dopłaty, kiedy się pojawią.
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
        </div>

      </div>
    </section>
  );
};

export default Offer;
