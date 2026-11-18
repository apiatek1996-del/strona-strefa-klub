"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const StrefaFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Kiedy mogę dołączyć do Strefy Hiszpański?",
      answer: "W dowolnym momencie. Strefa działa na Circle i jest otwarta cały czas — nie ma okienek sprzedażowych ani czekania na nowy nabór. Dołączasz dziś i od razu masz dostęp do rytuałów, kursów, bazy wiedzy i archiwum ponad 250 analiz."
    },
    {
      question: "Dla jakiego poziomu jest Strefa?",
      answer: "Od A1+ wzwyż — bez górnej granicy. Jeśli znasz absolutne podstawy (potrafisz przeczytać proste zdanie i kojarzysz podstawowe czasy), będziesz miała z czego korzystać od pierwszego dnia, niezależnie od tego, czy jesteś po podstawach, czy na wyższym poziomie. W środku masz też kurs Podstawy (full pakiet), żeby spokojnie domknąć ewentualne braki."
    },
    {
      question: "Czym Strefa różni się od zwykłego kursu wideo?",
      answer: "Zwykły kurs kończysz (albo porzucasz w połowie) i zostajesz sama. W Strefie masz jednocześnie 4 pełne kursy (Podstawy, Czasy przeszłe, Subjuntivo, Wymowa) ORAZ codzienny system, który pilnuje Twojej systematyczności: rytuały dnia, codzienne analizy nativów, wydarzenia na żywo i bezpośredni feedback ode mnie."
    },
    {
      question: "Jak wygląda tydzień w Strefie?",
      answer: "W poniedziałek rano dostajesz maila z planem tygodnia. Codziennie pojawia się nowa analiza w Analizujemy Nativów, a każdy dzień ma swój rytuał: w poniedziałek opowiadasz o weekendzie, we wtorek ćwiczysz wymowę z feedbackiem, w środę dostajesz trik do nauki, w czwartek polecajkę, a w piątek chwalisz się sukcesem tygodnia. Weekend jest na nadrabianie."
    },
    {
      question: "Czy naprawdę dostaję feedback od Ciebie?",
      answer: "Tak. W rytuałach (np. we wtorek przy wymowie) i w przestrzeni Pregúntame na La Plaza odpowiadam osobiście. Wystarczy, że oznaczysz @Agata Piątek, a sprawdzę Twoją odpowiedź lub nagranie."
    },
    {
      question: "Ile czasu potrzebuję?",
      answer: "To zależy, ile czasu chcesz poświęcić na naukę — materiały są, a ścieżka jest przygotowana. Jeśli przerabiasz któryś z kursów, to większe zobowiązanie, żeby przyniósł efekty i poukładał wiedzę. Jeśli wchodzisz po codzienną analizę albo rytuał dnia, 10 minut w kolejce do lekarza czy przy kawie w zupełności wystarczy."
    },
    {
      question: "Czy dawny Klub HTD / Todos los días to teraz Strefa?",
      answer: "Tak, cała społeczność przeszła pod jedną nazwę: Strefa Hiszpański. Codzienne analizy żywego języka zostały, a do tego doszły cotygodniowe rytuały, 4 pełne kursy, baza wiedzy i La Plaza."
    },
    {
      question: "Czy mogę zrezygnować w dowolnym momencie?",
      answer: "Tak, jednym kliknięciem w ustawieniach. Bez wypowiedzenia, bez pytań, bez tłumaczenia się. Pierwsze 7 dni jest za darmo, więc spokojnie sprawdzisz wszystko od środka, zanim cokolwiek zapłacisz."
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

export default StrefaFAQ;
