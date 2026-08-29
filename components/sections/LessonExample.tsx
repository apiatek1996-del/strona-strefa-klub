"use client";

import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { Bookmark, MoreHorizontal, Share2, Heart, MessageSquare } from "lucide-react";

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
      className="relative cursor-zoom-in rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white border border-slate-100/80"
      onClick={() => onOpen(src, alt)}
    >
      <img src={src} alt={alt} className="w-full h-auto block" />
      {blurStats && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm" aria-hidden="true" />
      )}
    </div>
    {caption && <p className="text-sm text-slate-400 italic px-1">{caption}</p>}
  </div>
);

const LessonExample = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const open = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">

        {/* Nagłówek */}
        <div className="mb-10">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Przykład z platformy</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-snug mb-2">
            Tak wygląda jedna lekcja
          </h2>
          <p className="text-xl text-slate-500 font-medium">To nie jest słówko dnia. To rozbiór.</p>
        </div>

        {/* Tekst wprowadzający */}
        <div className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
          <p>
            Idę na przystanek w Alicante. Wisi plakat: <span className="font-semibold text-slate-800">AVANCEMOS MÁS RÁPIDO QUE EL ALZHEIMER</span>. Robię zdjęcie. W poniedziałek jest z tego lekcja.
          </p>
        </div>

        {/* Screen A: Post AVANZAR */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 p-5 sm:p-7 transition-shadow hover:shadow-lg">
            
            {/* Header posta */}
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
                <button className="flex items-center gap-1 text-xs hover:text-slate-600 transition-colors p-1">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 text-xs hover:text-slate-600 transition-colors p-1 hidden sm:flex">
                  <Share2 className="w-4 h-4" />
                  <span>Compartir</span>
                </button>
                <button className="text-slate-400 hover:text-slate-600 p-1">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tytuł wpisu */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              AVANZAR
            </h3>

            {/* Zdjęcie plakatu z przystanku */}
            <div
              className="relative cursor-zoom-in rounded-xl overflow-hidden mb-6 bg-slate-950 shadow-sm border border-slate-100 max-h-[500px] flex items-center justify-center"
              onClick={() => open("/lessons/avanzar-poster.jpg", "Plakat ze słowem AVANZAR z przystanku w Alicante")}
            >
              <img
                src="/lessons/avanzar-poster.jpg"
                alt="Plakat ze słowem AVANZAR z przystanku w Alicante"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            {/* Treść lekcji */}
            <div className="space-y-4 text-slate-700 text-[15px] sm:text-base leading-relaxed">
              <p>O słówku AVANZAR słów kilka.</p>
              
              <p>
                Mogłoby się wydawać, że sprawa jest prosta: AWANS każdy wie czym jest (po polsku oczywiście). No to AVANZAR - AWANSOWAĆ / piąć się po szczeblach kariery i tyle.
              </p>
              
              <p className="font-semibold text-slate-900">
                Ale, ale, ale, ale...<br />
                NIE TYLKO.
              </p>

              <p>
                Hiszpanie mają mniej słów, ale które mają więcej znaczeń. Stąd <strong>AVANZAR</strong> przetłumaczymy również na <strong>POSTĘPOWAĆ, IŚĆ/POSUWAĆ SIĘ NA PRZÓD, ROZWIJAĆ SIĘ</strong>, i pewnie jeszcze kilka innych by się znalazło ale te na razie myślę, że w zupełności wystarczą żeby dać wam pogląd — <em>para que os hagáis una idea</em> — na to jak ten czasownik może działać.
              </p>

              <p>
                Na zdjęciu — plakat z przystanku, mówiący: <em>bądźmy szybsi / idźmy szybciej / rozwijajmy się szybciej niż alzheimer</em>.
              </p>

              <p>
                Z dodatkową grą słowną, zabawą słówkiem <strong>AVANZAR</strong> — bo tak jak my możemy <strong>AVANZAR — IŚĆ DO PRZODU / ROZWIJAĆ SIĘ</strong> w dobrym tego słowa znaczeniu, tak samo choroba może <strong>AVANZAR — POSTĘPOWAĆ / ROZWIJAĆ SIĘ</strong> w złym tego słowa znaczeniu.
              </p>

              <p className="pt-2">
                Tyle na dziś ❤️<br />
                <span className="italic text-slate-500">Un saludo chixs!</span>
              </p>
            </div>

            {/* Footer posta */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 hover:text-slate-600 cursor-pointer">
                  <Heart className="w-4 h-4 text-slate-400" />
                </span>
                <span className="flex items-center gap-1.5 hover:text-slate-600 cursor-pointer">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  <span>0 comentarios</span>
                </span>
              </div>
            </div>

          </div>
          <p className="text-sm text-slate-400 italic px-1 mt-3">
            Poniedziałkowa lekcja ze zdjęcia zrobionego na przystanku w Alicante.
          </p>
        </div>

        {/* Screen B: Rolka + Tłumaczenie rolki */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screen
              src="/lessons/complicado-reel.png"
              alt="Fragment rolki z Instagrama o słowie complicado"
              onOpen={open}
            />
            <Screen
              src="/lessons/complicado.png"
              alt="Wytłumaczenie i analiza rolki o słowie complicado"
              onOpen={open}
            />
          </div>
          <p className="text-sm text-slate-400 italic px-1 mt-3">
            Wybrany fragment cudzej rolki, rozebrany na części.
          </p>
        </div>

        {/* Screen C: Książka + nagrania audio */}
        <div className="mb-10">
          <Screen
            src="/lessons/book-audio.jpg"
            alt="Lekcja ze zdjęcia książki z nagraniami audio do odsłuchania"
            caption="Czasem z nagraniem, żebyś usłyszała, jak to brzmi."
            onOpen={open}
          />
        </div>

        {/* Screen D: Post LA CAGUÉ + Wytłumaczenie */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Screen
              src="/lessons/la-cague.png"
              alt="Post z analizą wyrażenia la cagué na Instagramie"
              blurStats={true}
              onOpen={open}
            />
            <Screen
              src="/lessons/la-cague-text.png"
              alt="Wytłumaczenie i analiza wyrażenia la cagué"
              onOpen={open}
            />
          </div>
          <p className="text-sm text-slate-400 italic px-1 mt-3">
            Prawdziwy hiszpański bywa dosadny. Uczę też takiego.
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
