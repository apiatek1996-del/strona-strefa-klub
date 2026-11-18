import StrefaHero from "@/components/strefa/StrefaHero";
import StrefaPainPoints from "@/components/strefa/StrefaPainPoints";
import StrefaSolution from "@/components/strefa/StrefaSolution";
import StrefaInside from "@/components/strefa/StrefaInside";
import StrefaLessonExample from "@/components/strefa/StrefaLessonExample";
import StrefaFeatures from "@/components/strefa/StrefaFeatures";
import StrefaTarget from "@/components/strefa/StrefaTarget";
import StrefaAbout from "@/components/strefa/StrefaAbout";
import StrefaPricing from "@/components/strefa/StrefaPricing";
import Testimonials from "@/components/sections/Testimonials";
import StrefaFAQ from "@/components/strefa/StrefaFAQ";

export default function StrefaPage() {
  return (
    <main className="min-h-screen">
      <StrefaHero />
      <StrefaPainPoints />
      <StrefaSolution />
      <StrefaInside />
      <StrefaLessonExample />
      <StrefaFeatures />
      <StrefaTarget />
      <StrefaAbout />
      <StrefaPricing />
      <Testimonials
        heading="Co mówią osoby, które uczą się w"
        highlight="Strefie i na moich kursach?"
        subtitle="Prawdziwe głosy kursantek i uczestników — zarówno o moim sposobie uczenia, jak i o codziennych analizach."
        note="Opinie pochodzą z moich kursów, lekcji oraz wcześniejszej społeczności (Klub HTD na Telegramie, dziś rozwijany jako Strefa na Circle)."
        extraImages={[
          {
            src: "/testimonials/teach2.jpg",
            alt: "Opinia kursantki: Po 2 kursach przeniosłam się do Malagi i codziennie mówię po hiszpańsku",
          },
          {
            src: "/testimonials/teach3.jpg",
            alt: "Opinia kursantki: Doskonały warsztat narzędzi dydaktycznych i mnóstwo ciekawych pomysłów",
          },
          {
            src: "/testimonials/teach4.jpg",
            alt: "Opinia kursantki: Zaczynałam od zera, a potem bez problemu dogadałam się mieszkając w Madrycie",
          },
          {
            src: "/testimonials/teach5.jpg",
            alt: "Opinia kursantki: Półgodzinna pogawędka z panią z Barcelony i pochwała, że dobrze mówię",
          },
        ]}
      />
      <StrefaFAQ />

      {/* Final CTA */}
      <section className="bg-secondary py-24 mt-12 rounded-t-[3rem] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-[60%] text-left">
              <p className="text-xl text-slate-800 font-bold mb-4">
                Wchodzisz na 10 minut przy kawie i od razu wiesz, co dziś zrobić — bez szukania i bez presji.
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-lora), serif' }}>
                A za trzy miesiące:
              </h2>
              
              <div className="bg-white/60 rounded-3xl p-8 shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Włączasz serial i łapiesz żart, który dziś by Ci uciekł.",
                    "Czujesz spokój przy czasach przeszłych i wymowie, bo masz je poukładane w kursach i przećwiczone w rytuałach.",
                    "Rzucasz naturalne wyrażenie w rozmowie i sama się dziwisz, że tak pewnie Ci wyszło.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl mt-0.5">✨</span>
                      <p className="text-lg text-slate-800">{text}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-slate-700 text-base">
                  Zdejmuję z Ciebie ciężar planowania i pytanie „czego mam się uczyć?”. Twoje 10 minut idzie na naukę, nie na wertowanie materiałów.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[40%] relative mt-12 md:mt-0 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden z-10">
                  <img 
                    src="/Ogarnij Hiszpański.jpg" 
                    alt="Agata - Zapraszam Cię do Strefy Hiszpański!" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>

                <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-2 rounded-2xl font-black rotate-12 shadow-lg z-20">
                  ¡HOLA!
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">            
            <a 
              href="#cennik"
              className="inline-flex items-center justify-center rounded-full bg-[#FFC529] border-2 border-slate-900 px-12 py-6 text-2xl font-black text-slate-950 shadow-xl transition-all hover:bg-[#FFD043] hover:-translate-y-2 hover:scale-105"
            >
              👉 SPRAWDŹ 7 DNI ZA DARMO
            </a>
            <p className="mt-4 text-slate-600 text-sm">
              Strefa jest otwarta cały czas · Bez zobowiązań · Anulujesz jednym kliknięciem
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
