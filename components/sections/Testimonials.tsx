"use client";

import React from "react";

interface TextTestimonial {
  text: string;
  highlighted: string; // Key phrase to emphasize
  fullTextBefore: string;
  fullTextAfter: string;
  time: string;
  reaction?: string;
}

interface ImageTestimonial {
  src: string;
  alt: string;
}

type TestimonialItem = 
  | { type: "text"; content: TextTestimonial }
  | { type: "image"; content: ImageTestimonial };

const Testimonials = () => {
  const testimonials: TestimonialItem[] = [
    {
      type: "image",
      content: {
        src: "/testimonials/t_zlota_taca.jpg",
        alt: "Opinia członka Klubu: Treści zaserwowane na złotej tacy to bomba!",
      },
    },
    {
      type: "text",
      content: {
        fullTextBefore: "Holi! Mam bardzo pozytywne odczucia, naprawdę! ",
        highlighted: "Kiedy mam do czynienia z hiszpańskim na co dzień, to czuję się pewniej czytając, słuchając, mówiąc i pisząc",
        fullTextAfter: ", także dla mnie ekstra!",
        text: "",
        time: "09:15",
        reaction: "❤️",
      },
    },
    {
      type: "image",
      content: {
        src: "/testimonials/t_warto_placic.jpg",
        alt: "Opinia członka Klubu: Polecam spróbować nawet na miesiąc, warto!",
      },
    },
    {
      type: "text",
      content: {
        fullTextBefore: "Ogólnie bardzo podoba mi się forma codziennego przypominania o sobie w stylu: ",
        highlighted: "hejka, tu hiszpański, pamiętasz uczyć się nowych rzeczy codziennie i robić powtórki? 😂",
        fullTextAfter: "",
        text: "",
        time: "14:40",
        reaction: "🔥",
      },
    },
    {
      type: "image",
      content: {
        src: "/testimonials/ig_review.jpg",
        alt: "Opinia na Instagramie: mieszkam w Hiszpanii i zawsze znajduję nowe wyrażenia",
      },
    },
    {
      type: "text",
      content: {
        fullTextBefore: "Dla mnie zawsze cenne są takie rzeczy „z życia”, czyli np. jak było z tym sin permiso albo pegar albo en nada, bo ",
        highlighted: "to pokazuje, że ten hiszpański naprawdę żyje i dużo fajnych rzeczy się w nim dzieje",
        fullTextAfter: " 😀",
        text: "",
        time: "16:05",
        reaction: "✨",
      },
    },
    {
      type: "image",
      content: {
        src: "/testimonials/t11.jpg",
        alt: "Opinia członka Klubu: Fajnie tak każdego dnia coś poczytać/odsłuchać",
      },
    },
    {
      type: "text",
      content: {
        fullTextBefore: "Tematycznie też jest ciekawie, ",
        highlighted: "żadnych zbędnych zdań z książek",
        fullTextAfter: " oraz są takie rzeczy dodatkowe... Potrafisz zaciekawić, nawet ten temat z modą przyjemnie się analizowało, pomimo że to nie moja pasja! 👏",
        text: "",
        time: "17:43",
        reaction: "👏",
      },
    },
    {
      type: "image",
      content: {
        src: "/testimonials/t_lepiej_niz_insta.jpg",
        alt: "Opinia członka Klubu: Z wiadomościami działa to dużo lepiej niż posty na insta",
      },
    },
    {
      type: "text",
      content: {
        fullTextBefore: "Jeśli mam być szczery to nie wiem jak, ale faktycznie ",
        highlighted: "jest to jedyny kanał do którego cały czas zaglądam",
        fullTextAfter: ". Więc motywuje... ten klub autentycznie ma duży potencjał. A co do samego klubu: wad nie stwierdzono! 😃",
        text: "",
        time: "18:12",
        reaction: "❤️",
      },
    },
    {
      type: "image",
      content: {
        src: "/testimonials/t1.jpg",
        alt: "Opinia członka Klubu: Ja nie wyobrażam sobie nie zostać",
      },
    },
    {
      type: "text",
      content: {
        fullTextBefore: "Takie ",
        highlighted: "małe dawki są najlepsze, bo szybko wchodzą do głowy i nie nudzą",
        fullTextAfter: ". Każdego dnia nowa, konkretna porcja wiedzy, która nie przytłacza!",
        text: "",
        time: "11:24",
        reaction: "🔥",
      },
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
            Prawdziwe głosy osób, które są w Klubie każdego dnia.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-orange-100 text-sm text-slate-600 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center">
              i
            </span>
            <span>
              Część opinii pochodzi z czasu, gdy Klub startował na Telegramie (obecnie działamy na dedykowanej platformie!)
            </span>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              {item.type === "text" ? (
                /* Authentic Chat Bubble with Key Highlight */
                <div className="relative inline-block w-full pb-3">
                  <div className="bg-white/95 backdrop-blur-xs px-5 pt-4 pb-3 rounded-[22px] rounded-bl-[4px] shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-slate-100/90 hover:shadow-md transition-shadow">
                    <p className="text-slate-800 text-[15px] sm:text-[16px] leading-[1.5] font-normal tracking-normal">
                      {item.content.fullTextBefore}
                      <mark className="bg-[#FDE047]/80 text-slate-900 font-semibold px-1 py-0.5 rounded-xs decoration-clone shadow-[0_1px_1px_rgba(0,0,0,0.03)]">
                        {item.content.highlighted}
                      </mark>
                      {item.content.fullTextAfter}
                    </p>

                    <div className="flex justify-end mt-1.5">
                      <span className="text-[12px] text-slate-400 font-sans select-none">
                        {item.content.time}
                      </span>
                    </div>
                  </div>

                  {/* Reaction Bubble on corner */}
                  {item.content.reaction && (
                    <div className="absolute -bottom-1 left-3 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] rounded-full w-8 h-8 flex items-center justify-center border border-slate-100 select-none">
                      <span className="text-[14px]">{item.content.reaction}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative group overflow-hidden rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-slate-100/90 bg-white">
                  <img
                    src={item.content.src}
                    alt={item.content.alt}
                    className="w-full h-auto rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
