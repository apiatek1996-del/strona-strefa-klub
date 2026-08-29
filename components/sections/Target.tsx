const Target = () => {
  return (
    <section className="bg-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <div className="relative w-32 h-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/strefa_mockup_v4.png" 
              alt="Mockup" 
              className="w-full h-auto drop-shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-normal text-slate-900" style={{ fontFamily: 'var(--font-lora), serif' }}>
            STREFA HISZPAŃSKI
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Dla kogo TAK */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
              <span className="flex w-8 h-8 rounded-full bg-green-100 text-green-600 items-center justify-center text-sm">✓</span>
              To jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-5">
              {[
                'Masz zapisane rolki, screeny i list\u0119 seriali \u201edo ogl\u0105dania po hiszpa\u0144sku\u201d, do kt\u00f3rych nigdy nie wracasz',
                "Uczysz się już hiszpańskiego — na kursie, z lektorem albo sama — i czujesz, że sam kurs to za mało",
                "Rozumiesz każde słowo z osobna, a całe zdanie i tak nie ma sensu. Albo odwrotnie — rozumiesz kontekst, ale sama nie wiesz, dlaczego tak jest",
                "W kawiarni mówisz ¿Puedo pedir la cuenta? i słyszysz, że brzmi to nienaturalnie — tylko nie wiesz, jak inaczej",
                "Chcesz mieć kontakt z hiszpańskim częściej niż raz w tygodniu na zajęciach",
                "Masz 10 minut dziennie i chcesz zrobić coś dla swojego hiszpańskiego, zamiast przescrollować je bez większej wartości",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-700 leading-relaxed">
                  <span className="text-green-500 font-bold shrink-0 mt-0.5">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dla kogo NIE */}
          <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-200 opacity-90">
            <h3 className="text-2xl font-bold text-slate-700 mb-8 pb-4 border-b border-slate-200 flex items-center gap-3">
              <span className="flex w-8 h-8 rounded-full bg-red-100 text-red-500 items-center justify-center text-sm">✕</span>
              To nie jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-5">
              {[
                "Zaczynasz od zera. Potrzebujesz najpierw podstaw",
                "Szukasz metody na płynny hiszpański w miesiąc bez wysiłku",
                "Chcesz kurs z planem krok po kroku do przerobienia — to nie jest kurs",
                "Nie masz tych 10 minut dziennie, żeby poświęcić je na hiszpański",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 leading-relaxed">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Target;
