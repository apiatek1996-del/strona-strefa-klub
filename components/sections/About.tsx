"use client";

const About = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-10 items-start">
          
          {/* Header */}
          <div className="lg:col-start-1 lg:col-end-2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-900 text-center lg:text-left" style={{ fontFamily: 'var(--font-lora), serif' }}>
              Cześć, jestem Agata!
            </h2>
          </div>

          {/* Image */}
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2">
            <div className="relative mx-auto lg:mx-0">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-3 translate-x-2 translate-y-2" />
              
              <div className="relative aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                <img 
                  src="/main-photo.png" 
                  alt="Agata - Twoja mentorka" 
                  className="w-full h-full object-cover object-top"
                />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white">
                  <p className="font-bold text-slate-800 text-sm">Zaufanie to dowody:</p>
                  <ul className="text-sm text-slate-600 mt-2 space-y-1">
                    <li>🎓 Magister filologii hiszpańskiej</li>
                    <li>🧠 9 lat doświadczenia w nauczaniu</li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-3 inline-block shrink-0 rounded-sm shadow-sm" viewBox="0 0 750 500">
                        <rect width="750" height="500" fill="#c60b1e"/>
                        <rect width="750" height="250" y="125" fill="#ffc400"/>
                      </svg>
                      5 lat życia w Hiszpanii
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text */}
          <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 mt-8 lg:mt-0">
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Skończyłam magisterkę z filologii hiszpańskiej i mam ponad 9 lat doświadczenia w nauczaniu. Dziś mieszkam w Hiszpanii i czuję się tu jak w domu.
              </p>
              <p className="font-bold text-slate-900">
                Moja droga to nie była miłość od pierwszego wejrzenia:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">💔</span>
                  <span><strong>Nienawiść po licencjacie</strong> — nudne podręczniki i wkuwanie tabelek prawie zabiły moją pasję do języka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🗣️</span>
                  <span><strong>8 lat do pierwszej swobodnej rozmowy</strong> — w szkole i na studiach nie uczą żywego języka. Sama zaczęłam mówić naprawdę swobodnie dopiero po ośmiu latach.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🙈</span>
                  <span><strong>Erasmusowy wstyd</strong> — chciałam powiedzieć kilka miłych słów o wykładzie, ale przed całą salą ze stresu nie potrafiłam nic wydukać. Musiałam dokończyć po angielsku.</span>
                </li>
              </ul>
              <p>
                Uczyłam się do egzaminów. A nie do rozmowy, do wyrażania siebie i tego, co czuję.
              </p>
              <p className="font-bold text-slate-900 bg-orange-50 p-4 rounded-xl border border-orange-100">
                Dlatego teraz uczę tak, jak uczę.
              </p>
              <p>
                Nie przygotowuję do matury. Nie daję korepetycji. Nie prowadzę do certyfikatu. Wyławiam żywy hiszpański z tego, co dzieje się wokół mnie każdego dnia — i podaję go w gotowej formie osobom, które nie mają czasu robić tego same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
