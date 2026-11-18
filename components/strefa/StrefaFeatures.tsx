"use client";

import { CalendarClock, GraduationCap, ShieldCheck, TrendingUp } from "lucide-react";

const StrefaFeatures = () => {
  const filary = [
    {
      num: "01",
      title: "Systematyczność zamiast zrywów",
      description: "10 minut dziennie z gotowym rytuałem dnia robi więcej niż 3 godziny raz w miesiącu. W poniedziałek dostajesz plan tygodnia na maila, a weekend masz na spokojne nadrabianie.",
      icon: <CalendarClock className="w-6 h-6 text-primary" />,
      tag: "Codzienny rytm",
    },
    {
      num: "02",
      title: "4 kursy i żywy język w jednym miejscu",
      description: "Kiedy potrzebujesz uporządkować gramatykę lub wymowę — otwierasz kurs (Podstawy, Czasy przeszłe, Subjuntivo, Wymowa) albo ściągawkę. Na co dzień chłoniesz naturalny hiszpański z Analizujemy Nativów.",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      tag: "Komplet w jednym miejscu",
    },
    {
      num: "03",
      title: "Bezpieczna przestrzeń z feedbackiem",
      description: "Nie uczysz się w próżni. W rytuałach i w Pregúntame oznaczasz @Agata Piątek i dostajesz konkretny feedback do swojej wymowy lub odpowiedzi, a w Tandem znajdziesz osobę do rozmów.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      tag: "Pewność i wsparcie",
    },
  ];

  const timelineSteps = [
    {
      time: "Po 2 tygodniach",
      stage: "Rytm",
      emoji: "💡",
      text: "Wchodzisz w swój rytm: 10 minut przy porannej kawie staje się nawykiem, a z serialu albo rolki wyłapujesz wyrażenie z poniedziałkowej analizy.",
      accent: "bg-amber-50 text-amber-700 border-amber-200/80",
    },
    {
      time: "Po miesiącu",
      stage: "Pewność",
      emoji: "🔍",
      text: "Czasy przeszłe i wymowa przestają być zgadywanką, bo wiesz, gdzie po nie sięgnąć i od razu ćwiczysz je w rytuałach.",
      accent: "bg-orange-50 text-orange-700 border-orange-200/80",
    },
    {
      time: "Po 3 miesiącach",
      stage: "Naturalność",
      emoji: "🗣️",
      text: "Mówisz coś do znajomego Hiszpana i słyszysz:",
      quote: "„Oye, hablas mucho mejor.”",
      accent: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    },
  ];

  return (
    <section id="korzysci" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="bg-[#FFF5EB] rounded-3xl p-6 sm:p-10 mb-12 border border-orange-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2">Dlaczego Strefa działa</p>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-slate-900" style={{ fontFamily: 'var(--font-lora), serif' }}>
              3 filary Twojej pewności w hiszpańskim
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-orange-100 shadow-2xs">
            ✨ System · Kursy · Żywy język
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {filary.map((filar, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center border border-orange-100/60">
                    {filar.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    Filar {filar.num}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                    {filar.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {filar.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  {filar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Oś czasu */}
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-12 border border-slate-200/80 relative overflow-hidden max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-bold text-primary border border-slate-200/80 mb-2 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Twoja transformacja</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900" style={{ fontFamily: 'var(--font-lora), serif' }}>
                Co się zmienia z czasem:
              </h3>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Systematyczny kontakt 10 min dziennie plus uporządkowane kursy budują spokój w mówieniu.
            </p>
          </div>

          <div className="relative pl-2 sm:pl-4 space-y-6 sm:space-y-8">
            <div className="absolute top-6 bottom-6 left-[27px] sm:left-[35px] w-1 bg-gradient-to-b from-amber-300 via-orange-400 to-emerald-500 rounded-full z-0" />

            {timelineSteps.map((step, i) => (
              <div key={i} className="relative z-10 flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-slate-200/90 shadow-md flex items-center justify-center text-xl sm:text-2xl shrink-0">
                  {step.emoji}
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex-1 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {step.time}
                    </h4>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${step.accent}`}>
                      Krok 0{i + 1}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.text}
                  </p>

                  {step.quote && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <span className="inline-block bg-emerald-50 text-emerald-700 font-bold font-mono text-sm sm:text-base px-3 py-1.5 rounded-xl border border-emerald-100">
                        {step.quote}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StrefaFeatures;
