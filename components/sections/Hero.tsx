"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-secondary pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden relative">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xs px-4 py-2 text-sm font-semibold text-slate-900 mb-6 border border-white/90 shadow-2xs">
              <svg className="w-5 h-5" viewBox="0 0 750 500">
                <rect width="750" height="500" fill="#c60b1e"/>
                <rect width="750" height="250" y="125" fill="#ffc400"/>
                <path d="M145,150 a45,65 0 1,0 90,0 a45,65 0 1,0 -90,0" fill="#c60b1e" transform="translate(45,0) scale(0.6)"/>
              </svg>
              Ekosystem do samodzielnej nauki
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-black tracking-tight mb-6 leading-[1.1]" style={{ fontFamily: 'var(--font-lora), serif' }}>
              Oglądasz hiszpański serial i nie wiesz, na co dokładnie masz zwrócić uwagę
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-800 font-handwriting italic mb-8">
              Ja wiem. Codziennie wybieram i serwuję Ci porcję żywego i przydatnego hiszpańskiego 🇪🇸 prosto na Twój telefon
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link 
                href="#cennik"
                className="inline-flex items-center justify-center text-center rounded-full bg-[#FFC529] border-2 border-slate-900 px-8 py-4 text-lg font-bold text-slate-950 transition-all hover:bg-[#FFD043] hover:-translate-y-1 shadow-md group"
              >
                SPRAWDŹ 7 DNI ZA DARMO
                <ArrowRight className="ml-2 w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-slate-700 text-sm font-medium">
                <span>+ bonus 15 promptów AI</span>
              </div>
            </div>
          </div>

          {/* Image area with Mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-4 lg:mt-0 min-h-[250px] sm:min-h-[400px]">
            <div className="relative w-full max-w-lg">
              {/* Mockup Platformy */}
              <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/strefa_mockup_v4.png" 
                  alt="Strefa Hiszpański Platforma" 
                  className="w-full h-auto drop-shadow-2xl rounded-2xl"
                />
              </div>

              {/* Decorative sticker */}
              <div className="absolute -top-6 -left-6 z-30 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 rotate-12 hidden sm:block">
                <p className="text-xs font-black text-primary uppercase tracking-tighter">Ponad 400 wpisów w środku!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
