"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="cennik" className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-900 mb-6" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Twoja inwestycja w siebie
          </h2>
          <p className="text-slate-600 text-lg">Wybierz opcję, która najlepiej pasuje do Twojego tempa nauki.</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`font-semibold text-sm transition-colors ${!annual ? "text-slate-900" : "text-slate-400"}`}>Miesięcznie</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${annual ? "bg-primary" : "bg-slate-300"}`}
            aria-label="Przełącz na rozliczenie roczne"
          >
            <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${annual ? "translate-x-7" : "translate-x-0"}`} />
          </button>
          <span className={`font-semibold text-sm transition-colors ${annual ? "text-slate-900" : "text-slate-400"}`}>
            Rocznie
            <span className="ml-2 bg-emerald-100 text-emerald-700 text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">3 mies. gratis!</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Option 1: Klub Hiszpański */}
          <div className="relative rounded-[2rem] bg-slate-50 p-8 md:p-10 border-2 border-slate-100 shadow-sm transition-all hover:shadow-md flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Klub Hiszpański</h3>
              <p className="text-slate-500 font-medium italic">Codzienna dawka żywego języka</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-black text-slate-900">59</span>
                <span className="text-xl font-bold text-slate-900">zł</span>
                <span className="text-slate-500 font-medium ml-1">/ miesięcznie</span>
              </div>
              
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm mb-6">
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &quot;Zamiast chaosu na Instagramie, dostajesz wyselekcjonowane perełki jak <span className="font-bold">Llego en nada</span> prosto na telefon. Mniej treści, więcej efektów.&quot;
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">Codzienna porcja wyrażeń (systematyczność!)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">Dostęp do historii (ponad 400 lekcji)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">Wspierająca społeczność i czat w aplikacji</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">Możliwość zadawania pytań pod postami</span>
              </li>
              <li className="flex items-start gap-3 mt-2 opacity-60">
                <span className="text-slate-500 text-[13px] leading-relaxed">
                  ❌ brak ściągawek, podcastów, materiałów do pobrania i kursów (w niedalekiej przyszłości)
                </span>
              </li>
            </ul>

            <Link 
              href="https://ogarnij-hiszpanski.circle.so/checkout/klub-hiszpanski-todos-los-dias-oficial"
              className="block w-full rounded-full py-4 text-center font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all mt-auto"
            >
              Wybieram Klub (59 zł)
            </Link>
          </div>

          {/* Option 2: Cała Strefa */}
          <div className="relative rounded-[2rem] bg-primary-light p-8 md:p-10 shadow-2xl border-2 border-primary z-10 flex flex-col md:scale-105">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white font-bold px-6 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-lg whitespace-nowrap">
              Najlepszy wybór • Rekomendujemy
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-slate-900">Cała Strefa</h3>
                <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">Full Access</span>
              </div>
              <p className="text-slate-600 font-medium italic">Pełny ekosystem do samodzielnej nauki</p>
            </div>
            
            <div className="mb-8">
              {annual ? (
                /* Annual pricing */
                <div>
                  <div className="flex items-baseline gap-1 flex-wrap mb-1">
                    <span className="text-6xl font-black text-slate-900">783</span>
                    <span className="text-2xl font-bold text-slate-900">zł</span>
                    <span className="text-slate-600 font-medium ml-1">/ rok</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-4">
                    czyli tylko <span className="font-bold text-primary">65 zł/mies.</span>
                    <span className="ml-2 line-through text-slate-400">zamiast 1044 zł</span>
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 mb-6 flex items-center gap-2">
                    <span className="text-emerald-600 text-xl">🎁</span>
                    <p className="text-emerald-800 text-sm font-bold">3 miesiące gratis! Oszczędzasz 261 zł</p>
                  </div>
                </div>
              ) : (
                /* Monthly pricing */
                <div>
                  <div className="flex items-baseline gap-1 flex-wrap mb-4">
                    <span className="text-2xl font-bold text-slate-400 line-through mr-2">137 zł</span>
                    <span className="text-6xl font-black text-slate-900">87</span>
                    <span className="text-2xl font-bold text-slate-900">zł</span>
                    <span className="text-slate-600 font-medium ml-1">/ miesięcznie</span>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-orange-100 shadow-sm mb-6">
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">
                      Idealne jeśli chcesz nie tylko &quot;otaczać się&quot; językiem, ale też zrozumieć logikę (ściągawki) i słuchać nativów (podcasty).
                    </p>
                  </div>
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-900 font-bold text-sm sm:text-base">Wszystko co zawiera Klub Hiszpański</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">Podcasty na różnych poziomach (transkrypcje)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">Jasne ściągawki gramatyczne</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base">Wyzwania tygodniowe i forum społeczności</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔥</span>
                  <span className="text-slate-900 font-bold text-sm">BONUS: 15 promptów do AI (97 zł)</span>
                </div>
              </li>
            </ul>

            <Link 
              href={annual
                ? "https://ogarnij-hiszpanski.circle.so/checkout/strefa-hiszpanski-roczna"
                : "https://ogarnij-hiszpanski.circle.so/checkout/strefa-hiszpanski"
              }
              className="block w-full rounded-full py-5 text-center text-lg font-bold bg-primary text-white shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all mt-auto"
            >
              {annual ? "Dołączam do Strefy (783 zł / rok)" : "Dołączam do Strefy (87 zł)"}
            </Link>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-slate-50 px-8 py-6 rounded-[2rem] border border-slate-100">
            <p className="text-slate-700 font-bold flex items-center gap-2 text-lg">
              <span className="text-emerald-500">✓</span> Pierwsze 3 dni ZA DARMO!
            </p>
            <p className="text-slate-500 text-sm max-w-md">
              Dla obu opcji masz 3 dni na sprawdzenie platformy od środka. Jeśli nie poczujesz chemii – anulujesz jednym kliknięciem bez kosztów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
