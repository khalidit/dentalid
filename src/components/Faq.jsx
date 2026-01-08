import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqData = [
    {
      question: "Quelle est l'adresse de Dr Hauda MARZAK ?",
      answer:
        "L'adresse de Dr Hauda MARZAK est 2 Cours du Luzard, 77420 Champs-sur-Marne",
    },
    {
      question: "Quels sont les horaires d'ouverture du cabinet?",
      answer: (
        <div className="space-y-2">
          <p className="font-medium text-slate-900 text-sm sm:text-base">
            Le cabinet Dentalid est ouvert :
          </p>
          <ul className="space-y-1 ml-2 sm:ml-4 text-sm sm:text-base">
            <li>
              • <strong>Lundi :</strong>09h00 - 19h30
            </li>
            <li>
              • <strong>Mardi :</strong>09h00 - 19h30
            </li>
            <li>
              • <strong>Mercredi :</strong>09h00 - 19h30
            </li>
            <li>
              • <strong>Jeudi :</strong>09h00 - 19h30
            </li>
            <li>
              • <strong>Vendredi :</strong>09h00 - 19h30
            </li>
            <li>
              • <strong>Samedi :</strong>09h00 - 14h00
            </li>
            <li>
              • <strong>Dimanche :</strong>Fermé
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "Quels sont les moyens de paiement acceptés par Dr Hauda MARZAK ?",
      answer:
        "Dr Hauda MARZAK accepte les moyens de paiements suivants : chèques, espèces et carte bancaire. Pour les traitements importants, des solutions de paiement échelonné peuvent être étudiées.",
    },
    {
      question: "Est-ce que Dr Hauda MARZAK accepte la carte Vitale ?",
      answer:
        "Oui, Dr Hauda MARZAK accepte la carte Vitale. Les soins sont remboursés par la Sécurité Sociale selon les tarifs conventionnés, et nous acceptons la plupart des mutuelles en tiers payant.",
    },
    {
      question: "Quelles sont les langues parlées par Dr Hauda MARZAK ?",
      answer:
        "Dr Hauda MARZAK parle français. Le cabinet peut également accueillir des patients parlant d'autres langues selon les besoins.",
    },
    {
      question: "Est-ce que Dr Hauda MARZAK accepte des nouveaux patients ?",
      answer:
        "Oui, Dr Hauda MARZAK accepte des nouveaux patients. N'hésitez pas à prendre rendez-vous en appelant le 01-64-68-59-59 ou en envoyant un email à cabinet.drmk@gmail.com.",
    },
  ];

  return (
    <section
      className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-emerald-50/40"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-7 h-7 text-emerald-600" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-slate-900 text-center">
              Questions Fréquentes
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes concernant
            notre cabinet dentaire à Champs-sur-Marne.
          </p>
        </div>

        <div className="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-emerald-100/60">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-emerald-100/60"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 text-left hover:bg-emerald-50/60 transition-colors">
                  <span className="text-base sm:text-lg font-semibold text-slate-900 pr-2 leading-tight">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4">
                  <div className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {typeof faq.answer === "string" ? faq.answer : faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
