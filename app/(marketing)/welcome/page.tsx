"use client";

import { CheckCircle2, Laptop, Phone, ArrowRight, ExternalLink, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
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
            ¡Bienvenida a la Strefa!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Twoja płatność przebiegła pomyślnie. Cieszę się, że jesteś z nami! Oto jak zacząć swoją przygodę z hiszpańskim.
          </p>
        </div>

        {/* Primary Action Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 mb-12 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Krok 1: Odbierz swój dostęp do Circle
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Nasza społeczność i wszystkie materiały czekają na Ciebie na platformie Circle. Kliknij poniższy przycisk, aby dołączyć do grupy.
          </p>
          
          <a 
            href="https://ogarnij-hiszpanski.circle.so/join?invitation_token=af01c46e89077553be953e409ad428599b5a392e-29b5d3e1-1497-4e5a-b213-183e66713ee4"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white text-xl font-bold px-10 py-6 rounded-full shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all group"
          >
            DOŁĄCZ DO SPOŁECZNOŚCI <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="mt-6 text-sm text-slate-400">
            *Link otworzy się w nowym oknie. Jeśli masz już konto na Circle, po prostu się zaloguj.
          </p>
        </div>

        {/* Instructions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Desktop Instruction */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Laptop className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Instrukcja na komputer</h3>
            <ul className="space-y-4 text-slate-600 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="font-bold text-accent">1.</span>
                <span>Kliknij przycisk powyżej i załóż konto (lub zaloguj się).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">2.</span>
                <span>Uzupełnij swój profil – dodaj zdjęcie i napisz kilka słów o sobie.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">3.</span>
                <span>Zacznij od kanału <strong className="text-slate-800">#Witamy</strong> i przywitaj się z nami!</span>
              </li>
            </ul>
          </div>

          {/* Mobile Instruction */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="text-secondary-dark w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Instrukcja na telefon</h3>
            <ul className="space-y-4 text-slate-600 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="font-bold text-secondary-dark">1.</span>
                <span>Pobierz aplikację <strong className="text-slate-800">Circle Communities</strong> z App Store lub Google Play.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-dark">2.</span>
                <span>Otwórz link zaproszenia na telefonie i zaloguj się w aplikacji.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-secondary-dark">3.</span>
                <span>Włącz powiadomienia, aby nie przegapić codziennych lekcji!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-slate-100/50 rounded-3xl p-8 text-center border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" /> Masz problem z dostępem?
          </h3>
          <p className="text-slate-600 mb-6">
            Nie martw się! Jeśli coś nie działa lub potrzebujesz pomocy, napisz do mnie bezpośrednio:
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
