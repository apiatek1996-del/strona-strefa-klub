import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import LessonExample from "@/components/sections/LessonExample";
import Features from "@/components/sections/Features";
import Target from "@/components/sections/Target";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <Solution />
      <LessonExample />
      <Features />
      <Target />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA */}
      <section className="bg-secondary py-24 mt-12 rounded-t-[3rem] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-[60%] text-left">
              <p className="text-xl text-slate-800 font-bold mb-4">
                Wchodzisz na 10 minut przy kawie i wychodzisz z wyrażeniem, którego chcesz od razu użyć.
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-lora), serif' }}>
                A za trzy miesiące:
              </h2>
              
              <div className="bg-white/60 rounded-3xl p-8 shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Włączasz serial i łapiesz żart, który dziś by Ci uciekł.",
                    "Słyszysz rozmowę na ulicy i myślisz: o, to znam ze Strefy.",
                    "Rzucasz coś w rozmowie i sama się dziwisz, że tak Ci wyszło.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl mt-0.5">✨</span>
                      <p className="text-lg text-slate-800">{text}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-slate-700 text-base">
                  A dodatkowo ściągam z Ciebie ciężar szukania i pytanie „czego mam się uczyć?". Twoje 10 minut idzie na naukę, nie na wertowanie materiałów.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[40%] relative mt-12 md:mt-0 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Ozdobny blask w tle */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                
                {/* Twoje energetyczne zdjęcie w kole */}
                <div className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden z-10">
                  <img 
                    src="/Ogarnij Hiszpański.jpg" 
                    alt="Agata - Zapraszam Cię do Strefy!" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>

                {/* Plakietka - osobisty akcent */}
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
              Bez zobowiązań. Anulujesz jednym kliknięciem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
