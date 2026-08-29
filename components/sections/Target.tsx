"use client";

import { Check, X, Users2 } from "lucide-react";

const Target = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Nagłówek sekcji */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200/80 shadow-xs mb-3">
            <Users2 className="w-4 h-4 text-primary" />
            <span>Kwalifikacja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Czy Strefa jest dla Ciebie?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Sprawdź szczerze, czy to format, który przyniesie Ci realne efekty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Karta TAK (Dla Ciebie) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border-2 border-emerald-500/30 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                To jest dla Ciebie, jeśli:
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                `Masz zapisane rolki, screeny i listę seriali „do obejrzenia po hiszpańsku", do których nigdy nie wracasz`,
                "Uczysz się już hiszpańskiego — na kursie, z lektorem albo sama — i czujesz, że sam kurs to za mało",
                "Rozumiesz każde słowo z osobna, a całe zdanie i tak nie ma sensu. Albo odwrotnie — rozumiesz kontekst, ale sama nie wiesz, dlaczego tak jest",
                "W kawiarni mówisz ¿Puedo pedir la cuenta? i słyszysz, że brzmi to nienaturalnie — tylko nie wiesz, jak inaczej",
                "Chcesz mieć kontakt z hiszpańskim częściej niż raz w tygodniu na zajęciach",
                "Masz 10 minut dziennie i chcesz zrobić coś dla swojego hiszpańskiego, zamiast przescrollować je bez większej wartości",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-slate-700 leading-relaxed text-sm sm:text-base">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Karta NIE (Nie dla Ciebie) */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-xs rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200/60">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-700">
                To NIE jest dla Ciebie, jeśli:
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Zaczynasz od zera. Potrzebujesz najpierw podstaw",
                "Szukasz metody na płynny hiszpański w miesiąc bez wysiłku",
                "Chcesz kurs z planem krok po kroku do przerobienia — to nie jest kurs",
                "Nie masz tych 10 minut dziennie, żeby poświęcić je na hiszpański",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500 leading-relaxed text-sm sm:text-base">
                  <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <p className="text-xs text-slate-400 leading-relaxed">
                Jestem z Tobą szczera: Strefa ma uzupełniać Twoją naukę i dawać żywy kontakt z językiem, a nie obiecywać cuda bez zaangażowania.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Target;
