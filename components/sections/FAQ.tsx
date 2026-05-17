"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Dla jakiego poziomu przeznaczona jest platforma?",
      answer: "Strefa Hiszpański jest idealna dla osób na poziomie od A1+ (znających absolutne podstawy) do B2. Moduły są podzielone tak, by każdy znalazł odpowiednie wyzwania dla siebie."
    },
    {
      question: "Czy mogę zrezygnować w dowolnym momencie?",
      answer: "Tak, oczywiście! Subskrypcja jest odnawiana co miesiąc. Możesz anulować ją jednym kliknięciem w panelu użytkownika, bez żadnych pytań."
    },
    {
      question: "Czy Strefa zastępuje kurs językowy?",
      answer: "Nie. Strefa to nie jest klasyczny kurs „od lekcji 1 do 20”. To ekosystem do codziennej nauki, który ma uzupełnić Twoją wiedzę, dać Ci kontakt z żywym językiem i pomóc przełamać barierę w mówieniu. Jeśli potrzebujesz podstaw od zera (A0), zacznij od kursu podstawowego, a potem dołącz do nas!"
    },
    {
      question: "Czy potrzebuję dodatkowych podręczników?",
      answer: "Nie! Platforma zawiera wszystko, czego potrzebujesz: materiały wideo, audio, interaktywne ćwiczenia słownictwa i transkrypcje. Uczymy się z materiałów autentycznych."
    },
    {
      question: "Ile czasu dziennie muszę poświęcić na naukę?",
      answer: "Nasza metoda zakłada systematyczność. Sugerujemy minimum 15-20 minut dziennie. Krótkie codzienne sesje przynoszą znacznie lepsze efekty niż jednorazowe, kilkugodzinne siedzenie nad książkami."
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
