import StrefaNavbar from "@/components/strefa/StrefaNavbar";
import StrefaFooter from "@/components/strefa/StrefaFooter";
import StrefaPage from "@/app/strefa/page";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StrefaNavbar />
      <div className="flex-grow">
        <StrefaPage />
      </div>
      <StrefaFooter />
    </div>
  );
}
