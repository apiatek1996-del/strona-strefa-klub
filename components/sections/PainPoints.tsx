"use client";

import { Tv, Sparkles, AlertCircle } from "lucide-react";

const PainPoints = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lewa kolumna: Tekst i problem */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-primary" />
              <span>Prawdziwy powód braku postępów</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-[1.15]" style={{ fontFamily: 'var(--font-lora), serif' }}>
              Materiałów masz aż za dużo. <br className="hidden sm:inline" />
              <span className="text-primary">Więc problem musi być inny.</span>
            </h2>

            {/* Pastylki materiałów */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Netflix", "YouTube", "Instagram", "Podcasty", "Duolingo", "Książki"].map((tag, i) => (
                <span key={i} className="bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
              <p>
                Kontakt z językiem masz. Tylko że po godzinie serialu nie zostaje Ci z tego nic konkretnego. Bo żeby coś wyciągnąć, musiałabyś w trakcie wyłapać, że to zdanie warto zapamiętać, a tamto to przypadkowa konstrukcja, której nikt normalnie nie używa.
              </p>
              <p>
                Do tego pauza. Zeszyt. Słownik. I jeszcze wiedza, czy tak mówi cała Hiszpania, czy tylko jeden bohater z Sewilli.
              </p>
              <p className="font-semibold text-slate-900">
                Więc tego nie robisz. I słusznie.
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Karta z puentą wizualną */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-xs border border-slate-100 mb-6">
                <Tv className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                O 22:00 chcesz odpocząć, nie skupiać się i wyszukiwać ciekawe wyrażenia po hiszpańsku
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Nie masz na to czasu, głowy ani — powiedzmy sobie szczerze — ochoty po całym dniu pracy.
              </p>

              <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Efekt?</p>
                <p className="text-slate-800 font-medium text-base sm:text-lg leading-snug">
                  Po miesiącu „osłuchiwania się” mówisz dokładnie tak samo jak wcześniej.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
