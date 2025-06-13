import { createContext } from "react";

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>(
  {
    language: 'en',
    toggleLanguage: () => {}
  }
);

export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;
export default LanguageContext;