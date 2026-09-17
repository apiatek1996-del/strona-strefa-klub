"use client";

import { Pencil } from "lucide-react";

const Solution = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lewa kolumna: Zdjęcie Agaty z pracy + Karta z przykładem */}
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            {/* Zdjęcie */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-slate-200 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/photo_desk1.jpg"
                alt="Agata wyławia żywy hiszpański"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-2xs">
                📍 Alicante, Hiszpania
              </div>
            </div>

            {/* Karta z przykładem kulturowym */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs relative">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Przykład z życia</p>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-slate-400 text-sm line-through">
                  <span>❌</span>
                  <span>¿Podrías pasarme la sal, por favor?</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                  <span>✅</span>
                  <span className="text-primary font-mono">Pásame la sal.</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                I to nie jest niegrzeczne — bo rozkazy w hiszpańskim to chleb powszedni. My kulturowo wyrażamy szacunek przez zwiększanie dystansu: „czy mógłby Pan proszę…”. W Hiszpanii jest odwrotnie. Tryb rozkazujący i mówienie na „ty” to sposób na powiedzenie: <em>szanuję Cię jak własną rodzinę, więc tak właśnie będę się do Ciebie zwracać</em>.
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Treść */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200/80 shadow-2xs">
              <Pencil className="w-4 h-4 text-primary" />
              <span>Co robię za Ciebie</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-[1.15] mb-2" style={{ fontFamily: 'var(--font-lora), serif' }}>
                Nie musisz pauzować serialu ani siedzieć ze słownikiem.
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-primary">Ja robię selekcję. Ty dostajesz gotowe.</p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Mieszkam w Hiszpanii od 5 lat i codziennie wyławiam żywy język z miejsc, do których być może nie masz bezpośredniego dostępu:
            </p>

            <div className="space-y-3">
              {[
                { title: "Wiadomości od nativów", desc: "tak jak zostały napisane — ze skrótami i literówkami" },
                { title: "Fragmenty rolek i wywiadów", desc: "w naturalnym, szybkim tempie mówienia" },
                { title: "Rozmowy z ulicy", desc: "u lekarza, na targu, w kawiarni czy od sąsiadów" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong className="text-slate-900">{item.title}</strong> — {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <span className="inline-block bg-primary/10 text-primary font-bold text-sm sm:text-base px-4 py-2 rounded-xl">
                Ponad 400 takich wpisów czeka już w środku. Codziennie dochodzi kolejny.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
