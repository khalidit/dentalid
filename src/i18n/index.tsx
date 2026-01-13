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

const getLanguageFromLocale = (locale: string): Language | null => {
  const normalized = locale.trim().replace(/_/g, "-").toLowerCase();
  if (!normalized) {
    return null;
  }

  const language = normalized.split("-")[0];
  return isSupportedLanguage(language) ? language : null;
};

const getLocaleCandidates = (): string[] => {
  if (typeof navigator === "undefined") {
    return [];
  }

  const locales = new Set<string>();

  if (Array.isArray(navigator.languages)) {
    navigator.languages.forEach((locale) => {
      if (locale) {
        locales.add(locale);
      }
    });
  }

  if (navigator.language) {
    locales.add(navigator.language);
  }

  const resolvedLocale = Intl.DateTimeFormat().resolvedOptions().locale;
  if (resolvedLocale) {
    locales.add(resolvedLocale);
  }

  return Array.from(locales);
};

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isSupportedLanguage(stored)) {
    return stored;
  }

  const locales = getLocaleCandidates();
  for (const locale of locales) {
    const candidate = getLanguageFromLocale(locale);
    if (candidate) {
      return candidate;
    }
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
