import { createContext } from "react";

interface LocaleContextType {
  locale: 'id' | 'en';
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'id',
  toggleLocale: () => {}
});

export default LocaleContext;