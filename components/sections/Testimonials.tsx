import { Star } from "lucide-react";

const Testimonials = () => {
  // Punchy short screenshots
  const screenshotImages = [
    "/testimonials/t1.jpg",
    "/testimonials/t3.jpg",
    "/testimonials/t4.jpg",
    "/testimonials/t10.jpg",
    "/testimonials/t12.jpg",
    "/testimonials/t13.jpg",
    "/testimonials/t14.jpg",
  ];

  // Extracted "gold nuggets" from longer conversations
  const textTestimonials = [
    {
      text: "Takie małe dawki są najlepsze, bo szybko wchodzą do głowy i nie nudzą. Każdego dnia otwiera się nowe okienko i pojawia się nowa niespodzianka!",
      author: "Opinia z Klubu"
    },

    {
      text: "To jedyny kanał nadawczy do którego cały czas zaglądam. Ten klub autentycznie ma ogromny potencjał!",
      author: "Członek Klubu"
    },
    {
      text: "Kiedy mam do czynienia z hiszpańskim na co dzień, to czuję się pewniej czytając, słuchając, mówiąc i pisząc. Dla mnie ekstra!",
      author: "Kursantka"
    },
    {
      text: "Cenne są te rzeczy „z życia”, bo to pokazuje, że ten hiszpański naprawdę żyje i dużo fajnych rzeczy się w nim dzieje.",
      author: "Członkini Społeczności"
    },
  ];

  // Interleaved combined array for better visual flow
  const allTestimonials = [
    { type: 'text', content: textTestimonials[0] },
    { type: 'image', src: screenshotImages[0] },
    { type: 'text', content: textTestimonials[1] },
    { type: 'image', src: screenshotImages[1] },
    { type: 'text', content: textTestimonials[2] },
    { type: 'image', src: screenshotImages[2] },
    { type: 'text', content: textTestimonials[3] },
    { type: 'image', src: screenshotImages[3] },
    { type: 'image', src: screenshotImages[4] },
    { type: 'image', src: screenshotImages[5] },
    { type: 'image', src: screenshotImages[6] },
  ];

  return (
    <section id="opinie" className="bg-[#FAF3EB] py-20 lg:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-normal text-slate-800 mb-6" style={{ fontFamily: 'var(--font-lora), serif' }}>
            Co mówią członkowie <span className="text-primary">Klubu?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Prawdziwe głosy osób, które są w Strefie każdego dnia.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-100 text-sm text-slate-500 shadow-sm">
            <span className="text-primary font-bold">i</span>
            <span>Część opinii pochodzi z czasu, gdy Klub działał na Telegramie (zanim przenieśliśmy się na własną platformę!)</span>
          </div>
        </div>

        {/* Masonry grid with interleaved content */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {allTestimonials.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              {item.type === 'text' ? (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
                    "{item.content?.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-primary/30"></div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{item.content?.author}</span>
                  </div>
                </div>
              ) : (
                <img 
                  src={item.src} 
                  alt={`Opinia członka Klubu`} 
                  className="w-full h-auto rounded-2xl shadow-sm border border-orange-100 hover:scale-[1.01] transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
