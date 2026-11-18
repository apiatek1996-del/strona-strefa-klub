import type { Metadata } from "next";
import StrefaNavbar from "@/components/strefa/StrefaNavbar";
import StrefaFooter from "@/components/strefa/StrefaFooter";

export const metadata: Metadata = {
  title: "Strefa Hiszpański | Poczuj się pewnie i bezpiecznie w hiszpańskim – Agata Piątek",
  description:
    "Systematyczna nauka hiszpańskiego na Circle: codzienne rytuały z feedbackiem, 4 pełne kursy oraz codzienne analizy naturalnego hiszpańskiego.",
};

export default function StrefaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <StrefaNavbar />
      <main className="flex-grow">{children}</main>
      <StrefaFooter />
    </div>
  );
}
