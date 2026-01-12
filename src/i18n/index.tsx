import React from "react";
import {
  defaultLanguage,
  isRtlLanguage,
  isSupportedLanguage,
  translations,
  type Language,
  type Translation,
} from "./translations";

const STORAGE_KEY = "dentalid.language";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  isRtl: boolean;
};

const I18nContext = React.createContext<I18nContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isSupportedLanguage(stored)) {
    return stored;
  }

  return defaultLanguage;
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>(getInitialLanguage);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRtlLanguage(language) ? "rtl" : "ltr";
  }, [language]);

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
      isRtl: isRtlLanguage(language),
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
}
