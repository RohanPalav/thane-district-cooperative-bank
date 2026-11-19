import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("thane-bank-language");
    return savedLanguage === "mr" ? "mr" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (!["en", "mr"].includes(newLanguage)) return;

    localStorage.setItem("thane-bank-language", newLanguage);
    setLanguage(newLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
      t: (key) => translations[language][key] ?? key,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
