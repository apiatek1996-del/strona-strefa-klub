import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050810] pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* Left Side: About */}
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6" style={{ fontFamily: 'var(--font-lora), serif' }}>
              Agata Piątek — Ekspertka od Hiszpańskiego dla Polaków w Hiszpanii
            </h3>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-4">
              Mieszkam w Hiszpanii i pomagam Polakom przejść od <span className="text-primary italic font-handwriting">"Hola, buenos días"</span> do swobodnych rozmów przy kawie bez stresu.
            </p>
            <p className="text-slate-600 text-sm md:text-base">
              Magistra filologii hiszpańskiej, 8 lat doświadczenia w nauczaniu.
            </p>
          </div>

          {/* Right Side: Contact */}
          <div className="lg:text-right flex flex-col lg:items-end">
            <h4 className="text-white font-bold text-lg mb-6">Skontaktuj się</h4>
            <a 
              href="mailto:kontakt@ohiszpanski.pl" 
              className="inline-flex items-center gap-4 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 p-4 rounded-2xl transition-all group max-w-xs md:max-w-none"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-primary border border-slate-700">
                <Mail size={24} />
              </div>
              <div className="text-left pr-4">
                <span className="text-slate-400 text-lg font-medium group-hover:text-white transition-colors">kontakt@ohiszpanski.pl</span>
              </div>
              <ArrowUpRight size={20} className="text-slate-600 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">
            © 2026 Agata Piątek. RTG Twojego Hiszpańskiego.
          </p>
          <div className="flex gap-8">
            <Link href="/polityka-prywatnosci" className="text-slate-600 hover:text-white transition-colors text-sm">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="text-slate-600 hover:text-white transition-colors text-sm">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
