import React from "react";
import { ChevronDown } from "lucide-react";
import { languageOptions, type Language } from "@/i18n/translations";
import { useI18n } from "@/i18n";

type LanguageSwitcherProps = {
  className?: string;
  fullWidth?: boolean;
};

export function LanguageSwitcher({
  className,
  fullWidth = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage, t, isRtl } = useI18n();
  const [isOpen, setIsOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const selectId = React.useId();

  const flagsByCode: Record<Language, string> = {
    fr: "/flags/fr.svg",
    en: "/flags/gb.svg",
    ar: "/flags/ma.svg",
    de: "/flags/de.svg",
    es: "/flags/es.svg",
    it: "/flags/it.svg",
    zh: "/flags/cn.svg",
  };

  const currentOption =
    languageOptions.find((option) => option.code === language) ??
    languageOptions[0];

  const menuAlignClass = isRtl ? "right-0 text-right" : "left-0 text-left";
  const itemDirectionClass = isRtl ? "flex-row-reverse" : "flex-row";
  const buttonJustifyClass = fullWidth ? "w-full justify-between" : "w-auto";
  const groupDirectionClass = isRtl ? "flex-row-reverse" : "flex-row";
  const menuWidthClass = fullWidth ? "w-full" : "w-56";

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const wrapperClassName = ["relative flex items-center", fullWidth ? "w-full" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName} ref={wrapperRef}>
      <label htmlFor={selectId} className="sr-only">
        {t.language.label}
      </label>
      <button
        id={selectId}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-100/70 bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-200 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-100 ${buttonJustifyClass}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.language.label}
      >
        <span className={`flex items-center gap-2 ${groupDirectionClass}`}>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-emerald-100/60">
            <img
              src={flagsByCode[currentOption.code]}
              alt=""
              aria-hidden="true"
              className="h-4 w-6 rounded-sm object-cover"
            />
          </span>
          <span>{currentOption.label}</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-emerald-700 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full mt-2 rounded-2xl border border-emerald-100/70 bg-white/95 p-2 shadow-xl backdrop-blur ${menuAlignClass} ${menuWidthClass}`}
          role="listbox"
          aria-label={t.language.label}
        >
          {languageOptions.map((option) => {
            const isActive = option.code === language;
            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLanguage(option.code as Language);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${itemDirectionClass} ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-emerald-50/60"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-emerald-100/60">
                  <img
                    src={flagsByCode[option.code as Language]}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-6 rounded-sm object-cover"
                  />
                </span>
                <span className="flex-1">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
