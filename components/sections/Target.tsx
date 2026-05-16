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
              Jest dla Ciebie, jeśli...
            </h3>
            <ul className="space-y-5">
              {[
                "Już się uczysz hiszpańskiego (na kursie, z lektorem albo samodzielnie), ale czujesz, że to za mało",
                "Masz zapisane rolki, screeny z Instagrama i listę seriali do obejrzenia — ale w końcu chcesz z tego skorzystać",
                "Wieczorem myślisz: „Boże, znowu dzisiaj nie zajrzałam do hiszpańskiego\" — i tak codziennie",
                "W kawiarni mówisz „Puedo pedir la cuenta?\" i wiesz, że brzmi nienaturalnie — nie jak native speaker",
                "Oglądasz serial, rozumiesz wszystkie słowa, ale całe zdanie nadal nie ma sensu",
                "Chcesz mieć kontakt z hiszpańskim częściej niż raz w tygodniu na zajęciach",
                "Masz 10–30 minut dziennie i chcesz je wykorzystać mądrze zamiast scrollować telefon"
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
              NIE jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-5">
              {[
                "Jesteś dopiero zaczynasz i miałxś na razie 2 lekcje. Potrzebujesz podstaw od A1",
                "Szukasz magicznej metody na naukę w miesiąc bez wysiłku",
                "Chcesz kolejny kurs do „przerobienia\" z planem krok po kroku",
                "Nie masz 10 minut dziennie na kontakt z językiem"
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
