"use client";

import { useState, useEffect } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { Bookmark, MoreHorizontal, Share2, Heart, MessageSquare, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ScreenProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  onOpen: (src: string, alt: string) => void;
  blurStats?: boolean;
}

const Screen = ({ src, alt, caption, className = "", onOpen, blurStats }: ScreenProps) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <div
      className="relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white border border-slate-100/80"
      onClick={() => onOpen(src, alt)}
    >
      <img src={src} alt={alt} className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-300" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5" /> Powiększ
        </span>
      </div>
      {blurStats && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm pointer-events-none" aria-hidden="true" />
      )}
    </div>
    {caption && <p className="text-xs sm:text-sm text-slate-500 italic px-1">{caption}</p>}
  </div>
);

const LessonExample = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const open = (src: string, alt: string) => setLightbox({ src, alt });

  const slides = [
    {
      id: "avanzar",
      tag: "01 · Zdjęcie z przystanku w Alicante",
      caption: "Poniedziałkowa lekcja ze zdjęcia zrobionego na przystanku w Alicante.",
    },
    {
      id: "complicado",
      tag: "02 · Analiza fragmentu rolki",
      caption: "Wybrany fragment cudzej rolki z Instagrama, rozebrany na części pierwsze.",
    },
    {
      id: "book-audio",
      tag: "03 · Zdjęcie z książki + nagrania audio",
      caption: "Czasem z nagraniem audio od nativów, żebyś usłyszała naturalne brzmienie.",
    },
    {
      id: "la-cague",
      tag: "04 · Żywy, dosadny hiszpański",
      caption: "Prawdziwy hiszpański bywa dosadny. W Klubie uczę też takiego bez cenzury.",
    },
  ];

  // Automatyczne przesuwanie slajdów w lewo co 5 sekund (pauzowane po najechaniu myszką)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        {/* Opinia wprowadzająca ze screena z zakreśleniami */}
        <div className="mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3 bg-white/80 backdrop-blur-xs px-3.5 py-1 rounded-full text-xs font-bold text-slate-700 border border-slate-200/80 shadow-2xs">
            <span>💬</span>
            <span>Głos klubowiczki o formacie lekcji w Klubie</span>
          </div>
          
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white hover:scale-[1.01] transition-transform duration-300">
            <img 
              src="/testimonials/overwhelm_review_highlighted.jpg" 
              alt="Opinia klubowiczki: w necie wszystkiego jest sporo, a proste rzeczy łatwiej się zapamiętuje" 
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Nagłówek sekcji */}
        <div className="text-center mb-10">
          <p className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Przykład z Klubu</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-snug mb-2" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Tak wygląda jedna lekcja
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium">
            To nie jest słówko dnia. To rozbiór na czynniki pierwsze.
          </p>
        </div>

        {/* Karuzela przesuwana w lewo */}
        <div
          className="relative overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >

            {/* SLAJD 1: Post AVANZAR */}
            <div className="w-full shrink-0 px-1">
              <div className="bg-white rounded-3xl shadow-md border border-slate-200/80 p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="/photo_mug.jpg"
                      alt="Agata Piątek"
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-slate-900 text-sm sm:text-base">Agata Piatek</span>
                        <span className="bg-[#FF5A1F] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                          Administrador
                        </span>
                        <span className="text-xs text-slate-400">3 ago</span>
                      </div>
                      <p className="text-xs text-slate-400">Ogarnij Hiszpański</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Bookmark className="w-4 h-4" />
                    <Share2 className="w-4 h-4" />
                    <MoreHorizontal className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  AVANZAR = awansować? 🤔
                </h3>

                <div
                  className="mb-5 rounded-2xl overflow-hidden cursor-zoom-in group relative border border-slate-100 shadow-xs"
                  onClick={() => open("/lessons/avanzar.png", "Wytłumaczenie lekcji o słowie avanzar z plakatu")}
                >
                  <img
                    src="/lessons/avanzar.png"
                    alt="Wytłumaczenie lekcji o słowie avanzar"
                    className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" /> Powiększ analizę lekcji
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /></span>
                  <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> 0 comentarios</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic text-center mt-3 px-2">
                📍 {slides[0].caption}
              </p>
            </div>

            {/* SLAJD 2: Rolka COMPLICADO */}
            <div className="w-full shrink-0 px-1">
              <div className="bg-white rounded-3xl shadow-md border border-slate-200/80 p-5 sm:p-7">
                <div className="inline-block bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {slides[1].tag}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Screen
                    src="/lessons/complicado-reel.png"
                    alt="Fragment rolki z Instagrama o słowie complicado"
                    caption="Fragment wideo z Instagrama"
                    onOpen={open}
                  />
                  <Screen
                    src="/lessons/complicado.png"
                    alt="Wytłumaczenie i analiza rolki o słowie complicado"
                    caption="Rozbicie konstrukcji na części"
                    onOpen={open}
                  />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic text-center mt-3 px-2">
                🎬 {slides[1].caption}
              </p>
            </div>

            {/* SLAJD 3: Książka + Audio */}
            <div className="w-full shrink-0 px-1">
              <div className="bg-white rounded-3xl shadow-md border border-slate-200/80 p-5 sm:p-7">
                <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {slides[2].tag}
                </div>
                <Screen
                  src="/lessons/book-audio.jpg"
                  alt="Lekcja ze zdjęcia książki z nagraniami audio do odsłuchania"
                  onOpen={open}
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic text-center mt-3 px-2">
                🎧 {slides[2].caption}
              </p>
            </div>

            {/* SLAJD 4: LA CAGUÉ */}
            <div className="w-full shrink-0 px-1">
              <div className="bg-white rounded-3xl shadow-md border border-slate-200/80 p-5 sm:p-7">
                <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {slides[3].tag}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Screen
                    src="/lessons/la-cague.png"
                    alt="Post z analizą wyrażenia la cagué na Instagramie"
                    caption="Post z żywym językiem"
                    blurStats={true}
                    onOpen={open}
                  />
                  <Screen
                    src="/lessons/la-cague-text.png"
                    alt="Wytłumaczenie i analiza wyrażenia la cagué"
                    caption="Praktyczne wyjaśnienie i kontekst"
                    onOpen={open}
                  />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic text-center mt-3 px-2">
                💬 {slides[3].caption}
              </p>
            </div>

          </div>
        </div>

        {/* Wyśrodkowany pasek sterowania pod karuzelą */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <div className="inline-flex items-center gap-4 bg-white px-5 py-2.5 rounded-full border border-slate-200/90 shadow-md">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 shadow-2xs"
              aria-label="Poprzednia lekcja"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 px-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-primary shadow-xs"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Przejdź do przykładu ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 shadow-2xs"
              aria-label="Następna lekcja"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-400">
            💡 Slajdy przesuwają się automatycznie · Kliknij w dowolną lekcję, aby ją powiększyć
          </p>
        </div>

      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
};

export default LessonExample;
