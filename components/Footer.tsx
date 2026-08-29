import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#050810] pt-20 pb-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Kolumna 1: Agata Piątek */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#D946EF] tracking-tight">
              Agata Piątek
            </h3>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
              EKSPERTKA OD HISZPAŃSKIEGO DLA POLAKÓW W HISZPANII
            </p>
            <div className="inline-block bg-[#2E1065]/60 border border-[#7E22CE]/40 px-4 py-2 rounded-xl text-xs sm:text-sm text-[#E9D5FF]">
              Magistra filologii hiszpańskiej, 9 lat doświadczenia w nauczaniu
            </div>
          </div>

          {/* Kolumna 2: Misja / Opis */}
          <div className="md:col-span-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Mieszkam w Hiszpanii i pomagam Polakom przejść od <em>&quot;Hola, buenos días&quot;</em> do swobodnych rozmów przy kawie bez stresu.
            </p>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div className="md:col-span-3 space-y-2 md:text-right">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              SKONTAKTUJ SIĘ
            </h4>
            <a 
              href="mailto:kontakt@ohiszpanski.pl" 
              className="inline-block text-[#FF5A1F] hover:text-[#FF7A45] font-bold text-base sm:text-lg transition-colors"
            >
              kontakt@ohiszpanski.pl
            </a>
          </div>

        </div>

        {/* Dolny pasek */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Agata Piątek · Strefa Hiszpański</p>
          <div className="flex gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-slate-300 transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-slate-300 transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
