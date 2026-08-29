const PainPoints = () => {
  return (
    <section id="dlaczego-my" className="bg-background-alt py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-normal text-slate-900 mb-8">
            Materiałów masz aż za dużo. Więc problem musi być inny.
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-900">
              Instagram. YouTube. Netflix. Podcasty. Aplikacje do nauki.
            </p>
            <p>
              Kontakt z językiem masz. Tylko że po godzinie serialu nie zostaje Ci z tego nic konkretnego. Bo żeby coś wyciągnąć, musiałabyś w trakcie wyłapać, że to zdanie warto zapamiętać, a tamto to przypadkowa konstrukcja, której nikt normalnie nie używa.
            </p>
            <p>
              Do tego pauza. Zeszyt. Słownik. I jeszcze wiedza, czy tak mówi cała Hiszpania, czy tylko jeden bohater z Sewilli.
            </p>
            <p className="font-bold text-slate-900">
              Więc tego nie robisz. I słusznie.
            </p>
            <p>
              Nie po to włączasz serial o 22:00, żeby prowadzić badania terenowe. Nie masz na to czasu, głowy ani — powiedzmy sobie szczerze — ochoty.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl my-8">
              <p className="text-lg text-slate-800 font-bold">
                Efekt? Po miesiącu „osłuchiwania się" mówisz dokładnie tak samo jak wcześniej.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
