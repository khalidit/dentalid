import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n";

export function Faq() {
  const { t, isRtl } = useI18n();
  const faqData = t.faq.items;
  const textAlignClass = isRtl ? "text-right" : "text-left";
  const listIndentClass = isRtl ? "mr-2 sm:mr-4" : "ml-2 sm:ml-4";

  const renderFaqAnswer = (answer) => {
    if (typeof answer === "string") {
      return answer;
    }

    if (answer?.type === "hours") {
      return (
        <div className="space-y-2">
          <p className="font-medium text-slate-900 text-sm sm:text-base">
            {t.faq.hoursIntro}
          </p>
          <ul
            className={`space-y-1 ${listIndentClass} text-sm sm:text-base`}
          >
            {t.hours.days.map((day) => (
              <li key={day.label}>
                • <strong>{day.label}:</strong> {day.time}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

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
              {t.faq.title}
            </h2>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            {t.faq.subtitle}
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
                <AccordionTrigger
                  className={`px-4 sm:px-6 py-4 ${textAlignClass} hover:bg-emerald-50/60 transition-colors`}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 pr-2 leading-tight">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4">
                  <div
                    className={`text-sm sm:text-base text-slate-600 leading-relaxed ${textAlignClass}`}
                  >
                    {renderFaqAnswer(faq.answer)}
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
