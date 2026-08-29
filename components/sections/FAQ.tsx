"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Dla jakiego poziomu jest Strefa?",
      answer: "Od A1+ do B2. Jeśli znasz absolutne podstawy — potrafisz przeczytać proste zdanie i rozpoznać czasy — będziesz miała z czego korzystać. Jeśli zaczynasz od zera, najpierw potrzebujesz kursu podstaw, a Strefa ma sens dopiero potem."
    },
    {
      question: "Czy Strefa zastępuje kurs językowy?",
      answer: "Nie. Kurs uczy Cię systemu — gramatyki, struktur, kolejności. Strefa daje Ci to, czego kurs nie da: żywy język, którym ludzie faktycznie mówią, i codzienny kontakt między zajęciami. To dwie różne rzeczy, które razem działają najlepiej."
    },
    {
      question: "Co dostaję jako bonus?",
      answer: `Poza codziennym wyrażeniem dostajesz: „Zasłyszane na ulicy" — co ciekawsze fragmenty rozmów, które słyszę w Hiszpanii i relacjonuję Wam na bieżąco; ściągawki do pobrania — gramatyka wytłumaczona logicznie, do wydrukowania albo trzymania w telefonie; 15 promptów do AI (wartość 97 zł) — gotowe instrukcje, dzięki którym ChatGPT staje się partnerem do ćwiczenia hiszpańskiego, a nie tylko tłumaczem; dostęp do forum — możesz znaleźć tam osobę do ćwiczenia, czyli tandem językowy; archiwum ponad 400 wpisów — masz do niego dostęp od pierwszego dnia. A wkrótce dochodzą podcasty, karty pracy do seriali i kursy gramatyczne — bez dopłaty, w tej samej cenie.`
    },
    {
      question: "Czy potrzebuję podręczników albo dodatkowych materiałów?",
      answer: "Nie. Wszystko jest w środku, gotowe. Ściągawki do pobrania, wyrażenia z wyjaśnieniem, archiwum. Nie musisz nic dokupować ani szukać."
    },
    {
      question: "Ile czasu dziennie muszę poświęcić?",
      answer: "10 minut wystarczy. Materiał wchodzi od poniedziałku do piątku, więc możesz to robić przy kawie albo w drodze. Jeśli któregoś dnia odpuścisz, nic nie przepada — wszystko zostaje w archiwum."
    },
    {
      question: "Czy mogę zrezygnować w dowolnym momencie?",
      answer: "Tak, jednym kliknięciem. Bez wypowiedzenia, bez pytań, bez tłumaczenia się. Pierwsze 3 dni są za darmo, więc możesz sprawdzić od środka, zanim cokolwiek zapłacisz."
    },
    {
      question: "Co jeśli mam pytanie do konkretnego wyrażenia?",
      answer: "Piszesz pod postem, odpowiadam osobiście. To jest część Strefy, nie dodatek."
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-normal text-slate-800 mb-6" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Masz pytania? <span className="text-primary">Tu znajdziesz odpowiedzi.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-primary shadow-md" : "border-slate-200"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold text-lg ${isOpen ? "text-primary" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-slate-400"}`} 
                    size={24} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
