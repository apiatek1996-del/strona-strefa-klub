"use client";

import { Clock, TrendingUp } from "lucide-react";

const Solution = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-900 mb-6">
            Robisz dokładnie na odwrót
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Myślisz: <br/>
            <strong className="text-primary font-heading text-2xl mt-2 block">„muszę wygospodarować 2 godziny i porządnie usiąść do hiszpańskiego”.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Ania */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                <Clock />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">A potem...</h3>
            </div>
            <ul className="space-y-3 text-slate-600 mb-6 font-medium">
              <li className="flex gap-2"><span>❌</span> cały tydzień nic</li>
              <li className="flex gap-2"><span>❌</span> w weekend wielki plan, żeby „w końcu posiedzieć nad hiszpańskim jak należy”</li>
              <li className="flex gap-2"><span>❌</span> podręcznik otwarty na stronie 47</li>
              <li className="flex gap-2"><span>❌</span> i po 40 minutach zmęczenie albo frustracja</li>
            </ul>
            <div className="mt-auto pt-6 border-t border-slate-200">
              <p className="text-red-500 font-bold">
                Efekt? Po miesiącu masz poczucie, że dalej stoisz w miejscu.
              </p>
            </div>
          </div>

          {/* Kasia */}
          <div className="bg-primary-light rounded-3xl p-8 border border-orange-100 flex flex-col shadow-sm relative group">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md z-20">
              Metoda Strefy
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <TrendingUp />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">W Strefie...</h3>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                Codziennie rano w tramwaju odpalasz telefon na 10 minut:
              </p>
              <ul className="space-y-3 text-slate-700 mb-8 font-medium">
                <li className="flex gap-2"><span>✅</span> słuchasz podcastu</li>
                <li className="flex gap-2"><span>✅</span> czytasz analizę jednego wyrażenia</li>
                <li className="flex gap-2"><span>✅</span> albo zapisujesz sobie konstrukcję z serialu</li>
              </ul>
            </div>

            {/* Agata Photo in a nice circle/bubble OUTSIDE the frame */}
            <div className="absolute -bottom-10 -right-10 w-28 h-28 sm:w-36 sm:h-36 z-20 group-hover:scale-110 transition-transform duration-500">
               <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-primary">
                 <img 
                   src="/Ogarnij Hiszpański.jpg" 
                   alt="Agata" 
                   className="w-full h-full object-cover" 
                 />
               </div>
               {/* Decorative badge */}
               <div className="absolute -top-4 left-0 bg-secondary text-white text-[12px] font-black px-3 py-1 rounded-lg shadow-lg -rotate-12">
                 HOLA!
               </div>
            </div>

            <div className="mt-auto pt-6 border-t border-orange-200 relative z-10">
              <p className="text-primary font-bold pr-12 sm:pr-16">
                I właśnie dlatego po miesiącu dużo swobodniej używasz języka — mimo że wcale nie spędziłaś nad nim dużo czasu.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-heading font-bold text-slate-800 max-w-3xl mx-auto">
            Bo nie intensywność jednego posiedzenia robi największą różnicę. <br className="hidden md:block" />
            <span className="text-primary mt-2 block">Tylko częsty kontakt z językiem i regularne wracanie do niego.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Solution;
