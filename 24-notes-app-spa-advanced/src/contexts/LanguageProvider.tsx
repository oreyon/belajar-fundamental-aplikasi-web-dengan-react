import { useCallback, useMemo, useState, type ReactNode } from "react";
import LanguageContext, { type Language } from "./LanguageContext";

interface PropTypes {
  children: ReactNode;
}

const LanguageProvider = (props: PropTypes) => {
  const { children } = props;
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("locale") as Language) || "id"
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLanguage:Language) => {
      const newLanguage = prevLanguage === "id" ? "en" : "id";
      localStorage.setItem("locale", newLanguage);
      return newLanguage;
    })
  }, []);

  const value = useMemo(() => ({
    language,
    toggleLanguage,
  }), [language, toggleLanguage]);


  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider