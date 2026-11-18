"use client";

import { LayoutGrid, Mail, CalendarDays, MessageCircleHeart } from "lucide-react";

const rituales = [
  { emoji: "🌞", day: "Lunes", name: "¿Qué tal tu finde?", desc: "Opowiadasz o weekendzie i ćwiczysz czasy przeszłe." },
  { emoji: "🗣️", day: "Martes", name: "Martes de pronunciación", desc: "Słuchasz, nagrywasz się i dostajesz feedback do wymowy." },
  { emoji: "💡", day: "Miércoles", name: "Trucos", desc: "Jeden trik, jak uczyć się skuteczniej, i zadanie, żeby go wypróbować." },
  { emoji: "⭐", day: "Jueves", name: "Polecajka", desc: "Serial, podcast albo konto, z którym hiszpański wchodzi sam." },
  { emoji: "🏆", day: "Viernes", name: "Viernes de logros", desc: "Chwalisz się swoim językowym sukcesem tygodnia." },
  { emoji: "🍀", day: "Weekend", name: "Nadrabianie", desc: "Spokojnie wracasz do tego, na co nie starczyło czasu w tygodniu." },
];

const courses = [
  {
    num: "01",
    title: "Podstawy (full pakiet)",
    desc: "Kompletne fundamenty, żeby poukładać bazę i nie mieć dziur na starcie.",
  },
  {
    num: "02",
    title: "Czasy przeszłe",
    desc: "Jasne zasady, kiedy którego czasu użyć — bez zgadywania przy opowiadaniu historii.",
  },
  {
    num: "03",
    title: "Subjuntivo",
    desc: "Logicznie wytłumaczone, żeby przestało straszyć i zaczęło działać w rozmowie.",
  },
  {
    num: "04",
    title: "Wymowa",
    desc: "Jeden kurs z trzema modułami: Kurs Podstawy, Mów jak Hiszpan oraz Dlaczego hispanohablantes mówią…",
  },
];

const spaces = [
  {
    emoji: "🏛️",
    title: "La Plaza (społeczność)",
    items: [
      "Tu zacznij — szybki start po dołączeniu",
      "Anuncios — ogłoszenia i ważne nowości",
      "Plan tygodnia — przypięty stały plan + grafika z rozkładem jazdy",
      "Preséntate + Tandem — poznaj innych i znajdź partnera do rozmów",
      "Pregúntame — miejsce na Twoje pytania o język do mnie",
    ],
  },
  {
    emoji: "📚",
    title: "Baza wiedzy",
    items: [
      "Materiały do pobrania — gotowe ściągawki (np. gramatyczne), które masz zawsze pod ręką",
      "Webinary — nagrania spotkań tematycznych do obejrzenia w każdej chwili",
    ],
  },
];

const extras = [
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    title: "Mail w poniedziałek rano",
    desc: "Dostajesz plan tygodnia i zajawki analiz — zaczynasz tydzień bez szukania.",
  },
  {
    icon: <CalendarDays className="w-5 h-5 text-primary" />,
    title: "Wydarzenia na żywo",
    desc: "Np. konwersacje — ogłaszane jako Events w Circle i w Anuncios.",
  },
  {
    icon: <MessageCircleHeart className="w-5 h-5 text-primary" />,
    title: "Bezpośredni kontakt ze mną",
    desc: "W rytuałach i w Pregúntame daję Ci feedback (oznaczasz @Agata Piątek, żeby sprawdzić odpowiedź).",
  },
];

const StrefaInside = () => {
  return (
    <section id="co-w-srodku" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Nagłówek */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <LayoutGrid className="w-4 h-4 text-primary" />
            <span>Co jest w środku</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight" style={{ fontFamily: "var(--font-lora), serif" }}>
            Wszystko, co dostajesz w <span className="text-primary">Strefie Hiszpański</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Strefa działa na platformie Circle i jest otwarta cały czas — dołączasz w dowolnym momencie i od razu korzystasz z całego systemu.
          </p>
        </div>

        {/* 1. Rituales (systematyczność) */}
        <div className="bg-slate-50 rounded-3xl p-7 sm:p-10 border border-slate-200/80 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-1">🗓️ Rituales · Systematyczność</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900" style={{ fontFamily: "var(--font-lora), serif" }}>
                Każdy dzień tygodnia ma swój rytuał
              </h3>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Koniec z pytaniem „czego się dziś uczyć?”. Rytm prowadzi Cię za rękę przez cały tydzień.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rituales.map((r) => (
              <div key={r.day} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{r.emoji}</span>
                  <span className="text-xs font-bold text-primary bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full">
                    {r.day}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{r.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 4 Kursy */}
        <div className="bg-[#FFF5EB] rounded-3xl p-7 sm:p-10 border border-orange-100 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-1">🎓 4 pełne kursy w cenie</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900" style={{ fontFamily: "var(--font-lora), serif" }}>
                Uporządkowana gramatyka i wymowa, kiedy ich potrzebujesz
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((c) => (
              <div key={c.num} className="bg-white rounded-2xl p-6 border border-orange-100/80 shadow-2xs flex items-start gap-4">
                <span className="text-xs font-black text-primary bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-lg shrink-0 mt-0.5">
                  {c.num}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{c.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Analizujemy Nativów */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-primary/20 mb-8 flex flex-col md:flex-row md:items-center gap-6 shadow-xs">
          <div className="text-5xl shrink-0">🎬</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900" style={{ fontFamily: "var(--font-lora), serif" }}>
                Analizujemy Nativów
              </h3>
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Codziennie
              </span>
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Codziennie nowa analiza tego, jak naprawdę mówią Hiszpanie: konstrukcje, słówka i wyrażenia, których nie ma w podręcznikach — ze screenów, cytatów, filmików czy kart w kawiarni. Do części wpisów dorzucam nagranie głosowe z wyjaśnieniem.
            </p>
          </div>
        </div>

        {/* 4. La Plaza & Baza wiedzy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {spaces.map((s) => (
            <div key={s.title} className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/60 flex items-center justify-center text-xl">
                  {s.emoji}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 5. Dodatkowo */}
        <div className="rounded-3xl border-2 border-dashed border-orange-200 p-7 sm:p-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Dodatkowo w Strefie</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extras.map((e) => (
              <div key={e.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  {e.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{e.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StrefaInside;
