"use client";

import { Check, X, Users2 } from "lucide-react";

const StrefaTarget = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200/80 shadow-xs mb-3">
            <Users2 className="w-4 h-4 text-primary" />
            <span>Kwalifikacja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Czy Strefa Hiszpański jest dla Ciebie?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Sprawdź szczerze, czy to miejsce, w którym rozwiniesz swój hiszpański bez presji i chaosu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Karta TAK */}
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
                "Brakuje Ci systematyczności i chcesz mieć gotowy rytm na każdy dzień tygodnia (bez myślenia „czego się dziś uczyć?”)",
                "Znasz już podstawy (od A1+ wzwyż, bez górnej granicy) i chcesz uporządkować czasy przeszłe, subjuntivo czy wymowę w jednym miejscu",
                "Uczysz się hiszpańskiego i czujesz, że podręcznik nie uczy tego, jak Hiszpanie mówią na ulicy i w serialach",
                "Chcesz mieć gdzie zadać pytanie, przećwiczyć wymowę z feedbackiem i znaleźć partnera do rozmów w Tandem",
                "Masz 10 minut dziennie przy kawie i chcesz wykorzystać je sensownie zamiast scrollować bez celu",
                "Chcesz poczuć się pewnie i bezpiecznie w hiszpańskim, we wspierającej społeczności",
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

          {/* Karta NIE */}
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
                "Zaczynasz absolutnie od zera (potrzebujesz najpierw podstawowych słówek i pierwszych zdań)",
                "Szukasz magicznej metody na płynny hiszpański w miesiąc bez żadnego zaangażowania",
                "Nie masz ani 10 minut dziennie, żeby zajrzeć do Strefy choćby kilka razy w tygodniu",
                "Wolisz uczyć się w całkowitej izolacji z papierowego podręcznika, bez kontaktu z żywym językiem",
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
                Jestem z Tobą szczera: Strefa daje Ci system, 4 kursy, żywy język i moje wsparcie — ale potrzebuje Twoich 10 minut dziennie.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrefaTarget;
