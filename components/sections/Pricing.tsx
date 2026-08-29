"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <section id="cennik" className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-900 mb-4" style={{ fontFamily: 'var(--font-lora), serif' }}>
            59 zł miesięcznie
          </h2>
          <p className="text-slate-600 text-lg">
            Za 59 zł dostajesz 20 wpisów miesięcznie (plus bonusy). Policz sobie, ile to za jeden.
          </p>
        </div>

        <div className="relative rounded-[2rem] bg-primary-light p-8 md:p-12 shadow-2xl border-2 border-primary">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white font-bold px-6 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-lg whitespace-nowrap">
            Pierwsze 7 dni za darmo
          </div>

          {/* Mały sticker z mockupem platformy */}
          <div className="absolute -top-10 -right-4 sm:-right-8 z-20 w-24 sm:w-32 rotate-12 hover:rotate-3 transition-transform duration-300 pointer-events-none drop-shadow-xl">
            <img 
              src="/strefa_mockup_v4.png" 
              alt="Strefa Hiszpański w telefonie" 
              className="w-full h-auto"
            />
          </div>

          <div className="mb-8 mt-4">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-7xl font-black text-slate-900">59</span>
              <span className="text-2xl font-bold text-slate-900">zł</span>
              <span className="text-slate-500 font-medium ml-1">/ miesięcznie</span>
            </div>
            <p className="text-slate-600 text-sm italic">
              Sprawdzasz od środka. Nie poczujesz chemii — anulujesz jednym kliknięciem, bez kosztów. No hard feelings.
            </p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Codzienne wyrażenie od poniedziałku do piątku z dogłębną analizą",
              "Archiwum ponad 400 wpisów — dostęp od pierwszego dnia",
              '„Zasłyszane na ulicy” — fragmenty prawdziwych rozmów z Hiszpanii',
              "Ściągawki do pobrania — gramatyka wytłumaczona logicznie",
              "Forum i tandem językowy",
              "Możliwość zadawania pytań pod każdym postem",
              { bold: true, text: "🔥 BONUS: 15 promptów AI do ćwiczenia hiszpańskiego (wartość 97 zł)" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {typeof item === "string" ? (
                  <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                ) : (
                  <span className="text-slate-900 font-bold text-sm sm:text-base">{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="https://ogarnij-hiszpanski.circle.so/checkout/strefa-hiszpanski"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq('track', 'InitiateCheckout', {
                  content_name: 'Strefa Hiszpański',
                  value: 59.00,
                  currency: 'PLN'
                });
              }
            }}
            className="flex items-center justify-center gap-2 w-full rounded-full py-5 text-center text-lg font-bold bg-[#FFC529] border-2 border-slate-900 text-slate-950 shadow-md hover:bg-[#FFD043] hover:-translate-y-1 transition-all"
          >
            DOŁĄCZAM DO STREFY
            <ArrowRight className="w-5 h-5 text-slate-900" />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            ✓ Bez zobowiązań &nbsp;·&nbsp; ✓ Anulujesz jednym kliknięciem &nbsp;·&nbsp; ✓ Bez pytań
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
