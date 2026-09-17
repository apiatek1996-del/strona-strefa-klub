"use client";

import { Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";

const PainPoints = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lewa kolumna: Problem */}
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
            <div className="flex flex-wrap gap-2">
              {["Netflix", "YouTube", "Instagram", "Podcasty", "Duolingo", "Książki"].map((tag, i) => (
                <span key={i} className="bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
              <p>
                Kontakt z językiem masz. Tylko że po godzinie serialu nie zostaje Ci z tego nic konkretnego. Bo żeby coś wyciągnąć, musiałabyś co chwilę pauzować, sprawdzać w słowniku i robić notatki.
              </p>
              <p className="font-semibold text-slate-900">
                A nie po to włączasz serial o 22:00. Chcesz odpocząć, a nie prowadzić badania językowe po całym dniu.
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Rozwiązanie (pozytywna karta ulgi) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFF8F2] rounded-3xl p-7 sm:p-9 border border-orange-100/90 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-2xs border border-orange-100 mb-5">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Rozwiązanie
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                Zamiast szumu — 1 konkretne wyrażenie dziennie podane na tacy.
              </h3>

              <div className="bg-white rounded-2xl p-4 border border-orange-100/80 flex items-center gap-3 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-slate-800 font-semibold text-sm leading-snug">
                  Twoje 10 minut idzie na naukę, nie na szukanie materiałów.
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
