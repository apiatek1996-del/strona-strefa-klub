const PainPoints = () => {
  return (
    <section id="dlaczego-my" className="bg-background-alt py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-normal text-slate-900 mb-8">
            Myślałam, że to tylko takie gadanie...
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              „Częsty kontakt z językiem", „zanurzenie się w hiszpańskim" — brzmi jak kolejny marketing bullshit, prawda? Ja też tak myślałam.
            </p>
            <p>
              Miałam 8 lat nauki za sobą i dalej mówiłam… trochę jak robot. Wiedziałam, że „trzeba więcej kontaktu z językiem", ale co to konkretnie znaczy? Duolingo codziennie? Włączanie hiszpańskich filmów w tle?
            </p>
            <p className="font-bold text-xl text-primary mt-8 mb-4">A potem coś kliknęło...</p>
            <p>
              To nie jest o tym, żeby mieć więcej kontaktu. To o tym, żeby ten kontakt był <strong className="text-slate-900">ŚWIADOMY</strong>.
            </p>
            <p>
              Różnica między słuchaniem hiszpańskiego w tle a świadomą pracą z tym, co słyszysz, to przepaść. Między oglądaniem Netflixa z napisami a wyciąganiem z tego konkretnych konstrukcji — to dwa różne światy.
            </p>
            
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl my-8">
              <h3 className="font-bold text-xl text-slate-900 mb-2">Świadomy kontakt = prawdziwa zmiana</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Po latach pracy z setkami członków Klubu widzę: Ci, którzy robią 20 minut świadomego kontaktu dziennie, wyprzedzają tych, którzy siedzą na kursie 3 godziny w weekend.
              </p>
            </div>

            <p className="font-bold text-slate-900">Ale żeby ten kontakt był świadomy, potrzebujesz:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Konkretnych narzędzi do pracy z materiałami</li>
              <li>Systemu, który pokazuje, NA CO zwracać uwagę</li>
              <li>Środowiska, które trzyma Cię w rytmie</li>
            </ul>
            <p className="font-bold text-xl text-primary mt-6">
              Dlatego powstała Strefa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
