"use client";

const About = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-100">
              <img 
                src="/photo_mug.jpg" 
                alt="Agata - Twoja mentorka" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Simple credentials card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md">
              <ul className="text-sm text-slate-600 space-y-1">
                <li>🎓 Magistra filologii hiszpańskiej</li>
                <li>🧠 9 lat doświadczenia w nauczaniu</li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-3 shrink-0 rounded-sm" viewBox="0 0 750 500">
                    <rect width="750" height="500" fill="#c60b1e"/>
                    <rect width="750" height="250" y="125" fill="#ffc400"/>
                  </svg>
                  5 lat życia w Hiszpanii
                </li>
              </ul>
            </div>
          </div>
          
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-snug">
              Cześć, jestem Agata!
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Skończyłam magisterkę z filologii hiszpańskiej i mam ponad 9 lat doświadczenia w nauczaniu. Dziś mieszkam w Hiszpanii i czuję się tu jak w domu.
              </p>
              <p className="font-semibold text-slate-800">Moja droga to nie była miłość od pierwszego wejrzenia:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0">💔</span>
                  <span><strong className="text-slate-800">Nienawiść po licencjacie</strong> — nudne podręczniki i wkuwanie tabelek prawie zabiły moją pasję do języka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🗣️</span>
                  <span><strong className="text-slate-800">8 lat do pierwszej swobodnej rozmowy</strong> — w szkole i na studiach nie uczą żywego języka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🙈</span>
                  <span><strong className="text-slate-800">Erasmusowy wstyd</strong> — przed całą salą ze stresu nie potrafiłam nic wydukać. Musiałam dokończyć po angielsku.</span>
                </li>
              </ul>
              <p>
                Dlatego teraz uczę tak, jak uczę. Wyławiam żywy hiszpański z codzienności i podaję go w gotowej formie osobom, które nie mają czasu robić tego same.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
