"use client";

const Solution = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">

          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-normal text-slate-900 mb-2">
            Ja to robię z ołówkiem w ręku.
          </h2>
          <p className="text-2xl font-bold text-primary mb-8">Ty dostajesz gotowe.</p>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Mieszkam w Hiszpanii pięć lat i wyławianie żywego języka to moja praca, zajawka i codzienność.
            </p>
            <p>
              I nie chodzi tylko o seriale. Najwięcej wyciągam z rzeczy, do których być może nie masz dostępu:
            </p>

            <ul className="space-y-4 my-6">
              {[
                { emoji: "💬", text: "wiadomości od nativów — dokładnie tak, jak zostały napisane, ze skrótami i literówkami" },
                { emoji: "🎬", text: "fragmentów rolek i wywiadów — normalne tempo mówienia, nie to do nauki" },
                { emoji: "🗣️", text: "moich własnych i tych podsłuchanych rozmów — to, co usłyszałam wczoraj u lekarza, na targu, od koleżanki mojej teściowej" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <p>
              Do Strefy trafia tylko to, co przeszło selekcję: naprawdę się powtarza i realnie zmienia brzmienie zdania.
            </p>
            <p>
              A potem opowiadam Ci o tym tak, jak zrobiłaby to koleżanka, która mieszka tu od lat i przypadkiem jest filolożką: co to znaczy, kiedy tego użyć, czego nie mów, bo brzmi dziwnie, i skąd ta konstrukcja się w ogóle wzięła.
            </p>

            <div className="bg-secondary/20 border border-secondary/40 rounded-2xl p-6 my-4">
              <p className="font-bold text-slate-800 mb-3">Przykład:</p>
              <p className="text-slate-700">
                Żaden Hiszpan nie powie przy rodzinnym obiedzie{" "}
                <span className="font-mono font-bold text-primary">¿Podrías pasarme la sal, por favor?</span>{" "}
                Powie:{" "}
                <span className="font-mono font-bold text-primary">Pásame la sal.</span>
              </p>
              <p className="text-slate-600 mt-3 text-base">
                I to nie jest niegrzeczne — bo rozkazy w hiszpańskim to chleb powszedni. My kulturowo wyrażamy szacunek przez zwiększanie dystansu: „czy mógłby Pan proszę…". W Hiszpanii jest odwrotnie. Tryb rozkazujący i mówienie na „ty" to sposób na powiedzenie: szanuję Cię jak własną rodzinę, więc tak właśnie będę się do Ciebie zwracać.
              </p>
              <p className="text-slate-500 mt-3 text-sm italic">
                Tego nie ma w tabelce z gramatyką. A bez tego brzmisz uprzejmie po polsku i dziwnie po hiszpańsku.
              </p>
            </div>

            <p className="font-bold text-xl text-primary">
              Ponad 400 takich rzeczy już czeka w środku. Codziennie dochodzi kolejna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
