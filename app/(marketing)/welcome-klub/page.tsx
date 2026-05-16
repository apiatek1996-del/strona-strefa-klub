"use client";

import { CheckCircle2, Laptop, Phone, ArrowRight, MessageSquare, Mail } from "lucide-react";

export default function WelcomeKlubPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6 animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-lora), serif' }}>
            ¡Bienvenida al Club!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Właśnie dołączyłaś do Klubu Hiszpańskiego. Cieszę się, że będziemy wspólnie szlifować Twój hiszpański!
          </p>
        </div>

        {/* Primary Action Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-12 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Krok 1: Odbierz swój dostęp do Circle
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Klub Hiszpański tętni życiem na platformie Circle. Kliknij poniższy przycisk, aby dołączyć do naszej klubowej przestrzeni.
          </p>
          
          <a 
            href="https://ogarnij-hiszpanski.circle.so/join?invitation_token=c8db05f03dc57b2334f0da9c1a6b601e244f7520-86b7b533-3360-4f3b-b778-899510a7aa0e"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white text-xl font-bold px-10 py-6 rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all group"
          >
            WCHODZĘ DO KLUBU <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="mt-6 text-sm text-slate-400">
            *Link otworzy się w nowym oknie. Jeśli masz już konto na Circle, po prostu się zaloguj.
          </p>
        </div>

        {/* Instructions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Laptop className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Dostęp na komputerze</h3>
            <ul className="space-y-4 text-slate-600 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="font-bold text-accent">1.</span>
                <span>Kliknij przycisk powyżej i zaloguj się do platformy.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">2.</span>
                <span>Znajdź sekcję <strong className="text-slate-800">Klub Hiszpański</strong> w menu po lewej.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">3.</span>
                <span>Przejrzyj historię lekcji i zacznij od najnowszego wpisu!</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="text-secondary-dark w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Dostęp na telefonie</h3>
            <ul className="space-y-4 text-slate-600 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="font-bold text-secondary-dark">1.</span>
                <span>Zainstaluj aplikację <strong className="text-slate-800">Circle Communities</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-dark">2.</span>
                <span>Otwórz link do Klubu na telefonie, aby aktywować dostęp.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-dark">3.</span>
                <span>Włącz powiadomienia, żeby nie przegapić codziennych słówek!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-slate-100/50 rounded-3xl p-8 text-center border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" /> Potrzebujesz pomocy?
          </h3>
          <p className="text-slate-600 mb-6">
            Jeśli masz problem z wejściem do Klubu, napisz do mnie:
          </p>
          <a 
            href="mailto:kontakt@ohiszpanski.pl" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <Mail className="w-4 h-4" /> kontakt@ohiszpanski.pl
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Strefa Hiszpański. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  );
}
