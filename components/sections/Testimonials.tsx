"use client";

import React, { useState } from "react";

interface ScreenshotItem {
  src: string;
  alt: string;
}

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots: ScreenshotItem[] = [
    {
      src: "/testimonials/clean_zlota_taca.jpg",
      alt: "Opinia: Treści zaserwowane na złotej tacy z wytłumaczeniem to bomba!",
    },
    {
      src: "/testimonials/clean_pewnosc_codziennie.jpg",
      alt: "Opinia: Na co dzień czuję się pewniej czytając, słuchając, mówiąc i pisząc",
    },
    {
      src: "/testimonials/clean_warto_placic.jpg",
      alt: "Opinia: Polecam spróbować nawet na miesiąc, tu serio jest motywacja, warto zapłacić",
    },
    {
      src: "/testimonials/clean_przypominajka.jpg",
      alt: "Opinia: Podoba mi się forma przypominania: hejka, tu hiszpański!",
    },
    {
      src: "/testimonials/clean_gosia_insta.jpg",
      alt: "Opinia (Gosia): Super alternatywa do Instagrama, skondensowane i wiadomo czego się uczyć",
    },
    {
      src: "/testimonials/clean_rzeczy_z_zycia.jpg",
      alt: "Opinia: Cenne są rzeczy z życia, pokazuje że ten hiszpański naprawdę żyje",
    },
    {
      src: "/testimonials/clean_opcja_premium.jpg",
      alt: "Opinia: Rano wstaję i sprawdzam czy coś jest, opcję premium najdroższą poproszę!",
    },
    {
      src: "/testimonials/clean_ig_review.jpg",
      alt: "Opinia z Instagrama: Mieszkam w Hiszpanii i zawsze znajduję nowe wyrażenia",
    },
    {
      src: "/testimonials/clean_bez_ksiazek.jpg",
      alt: "Opinia: Żadnych zbędnych zdań z książek, potrafisz autentycznie zaciekawić",
    },
    {
      src: "/testimonials/clean_jedyny_kanal.jpg",
      alt: "Opinia: Jedyny kanał do którego cały czas zaglądam, ten klub ma duży potencjał",
    },
    {
      src: "/testimonials/clean_lepiej_niz_insta.jpg",
      alt: "Opinia: Z wiadomościami działa to dużo lepiej niż posty na insta",
    },
    {
      src: "/testimonials/clean_t11_nadrobilam.jpg",
      alt: "Opinia: Fajnie tak każdego dnia coś poczytać i odsłuchać",
    },
    {
      src: "/testimonials/clean_t1_nie_wyobrazam.jpg",
      alt: "Opinia: Ja nie wyobrażam sobie nie zostać na kanale",
    },
  ];

  return (
    <section id="opinie" className="bg-[#FAF3EB] py-20 lg:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-800 mb-6"
            style={{ fontFamily: "var(--font-lora), serif" }}
          >
            Co mówią członkowie <span className="text-primary">Klubu?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Prawdziwe, nieedytowane zrzuty ekranu od osób, które są w Klubie każdego dnia.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-orange-100 text-sm text-slate-600 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center">
              i
            </span>
            <span>
              Część opinii pochodzi z czasu, gdy Klub startował na Telegramie (obecnie działamy na dedykowanej platformie!)
            </span>
          </div>
        </div>

        {/* Masonry grid with pure cropped screenshot cards */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {screenshots.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-200/80 bg-white transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.015] group-hover:border-primary/30">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                
                {/* Subtle zoom indicator on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs text-white p-2 rounded-full shadow">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2 shadow-2xl">
            <img
              src={selectedImage}
              alt="Powiększona opinia"
              className="max-h-[82vh] w-auto mx-auto object-contain rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-xl font-bold transition-colors"
              aria-label="Zamknij podgląd"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
