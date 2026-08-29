"use client";

import { useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";

const Offer = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const currentElements = [
    {
      id: "daily",
      title: "Codzienne wyrażenie, od poniedziałku do piątku",
      desc: "Z dogłębną analizą — nie tylko usłyszysz o nowym słówku czy konstrukcji, ale dokładnie będziesz wiedzieć, kiedy możesz jej użyć"
    },
    {
      id: "archive",
      title: "Archiwum ponad 400 wpisów",
      desc: "Od pierwszego dnia masz dostęp do wszystkiego, co powstało do tej pory"
    },
    {
      id: "street",
      title: `„Zasłyszane na ulicy"`,
      desc: "Co ciekawsze fragmenty rozmów, które słyszę w Hiszpanii i relacjonuję Wam na bieżąco",
      hasImage: true
    },
    {
      id: "cheatsheets",
      title: "Ściągawki do pobrania",
      desc: "Gramatyka wytłumaczona logicznie, nie definicjami"
    },
    {
      id: "forum",
      title: "Forum i tandem językowy",
      desc: "Znajdziesz tam osobę do ćwiczenia hiszpańskiego"
    },
    {
      id: "questions",
      title: "Możliwość zadawania pytań",
      desc: "Pod każdym postem — odpowiadam osobiście"
    },
  ];

  const futureElements = [
    { title: "Krótkie podcasty na kilku poziomach", desc: "Do słuchania w drodze" },
    { title: "Karty pracy do znanych seriali", desc: "Do pracy z każdym odcinkiem" },
    { title: "Kursy gramatyczne", desc: "Ogarnij podstawy · czasy przeszłe · subjuntivo · wymowa" }
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        <div className="max-w-2xl mb-14">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Co dostajesz</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-snug">
            Wszystko w jednym miejscu
          </h2>
          <p className="text-slate-500 mt-3">W telefonie albo na komputerze, jak wolisz.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-16 items-start">
          {currentElements.map((el) => (
            <div key={el.id} className="flex items-start gap-4">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5 w-5 h-5" />
              <div className="w-full">
                <span className="font-semibold text-slate-800 block">{el.title}</span>
                <span className="text-slate-500 text-sm block">{el.desc}</span>

                {el.hasImage && (
                  <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                      {/* Post z rolką/grafiką */}
                      <div
                        className="relative cursor-zoom-in rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-100 bg-slate-900"
                        onClick={() => setLightbox({
                          src: "/lessons/la-cague.png",
                          alt: "Post z analizą wyrażenia la cagué na Instagramie"
                        })}
                      >
                        <img
                          src="/lessons/la-cague.png"
                          alt="Post z analizą wyrażenia la cagué na Instagramie"
                          className="w-full h-auto block"
                        />
                        {/* Zamazanie paska lajków i komentarzy */}
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/80 backdrop-blur-md" aria-hidden="true" />
                      </div>

                      {/* Wytłumaczenie */}
                      <div
                        className="relative cursor-zoom-in rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-100 bg-white"
                        onClick={() => setLightbox({
                          src: "/lessons/la-cague-text.png",
                          alt: "Wytłumaczenie wyrażenia la cagué"
                        })}
                      >
                        <img
                          src="/lessons/la-cague-text.png"
                          alt="Wytłumaczenie wyrażenia la cagué"
                          className="w-full h-auto block"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 italic mt-2">
                      Prawdziwy hiszpański bywa dosadny. Uczę też takiego.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-10">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-slate-400" />
            <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Wchodzi wkrótce — w tej samej cenie</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {futureElements.map((el, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold shrink-0">+</span>
                <div>
                  <span className="font-semibold text-slate-700 block text-sm">{el.title}</span>
                  <span className="text-slate-400 text-sm">{el.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
};

export default Offer;
