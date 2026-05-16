import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-primary-light border-b border-orange-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-heading tracking-tight text-slate-900">
            <span className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center text-primary">
              <MessageCircle size={28} className="md:w-8 md:h-8" />
            </span>
            Strefa Hiszpański
          </Link>
        </div>

        <div className="flex">
          <Link 
            href="#cennik"
            className="rounded-full bg-primary px-5 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-bold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg active:scale-95"
          >
            Dołącz teraz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
