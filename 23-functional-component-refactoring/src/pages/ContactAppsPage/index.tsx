import { useEffect, useState, useCallback, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getContacts, getUserLogged, putAccessToken } from "../../libs/api/contact.service";
import { type Contact } from "../../utils/dataContact";

import Navigation from "../../components/layouts/Navigation";
import HomePageWrapper from "./HomePage";
import AddPageContact from "./AddPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

import { LanguageProvider, type Language } from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

type AuthedUser = {
  id: string;
  email: string;
  name: string;
};

const ContactAppPage = () => {
  const [,setContacts] = useState<Contact[]>([]);
  const [authedUser, setAuthedUser] = useState<AuthedUser | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("locale") as Language) || "id"
  );

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === "id" ? "en" : "id";
      localStorage.setItem("locale", newLang);
      return newLang;
    });
  }, []);

  const languageContextValue = useMemo(() => ({
    language,
    toggleLanguage,
  }), [language, toggleLanguage]);

  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  const onLoginSuccess = async ({ accessToken }: { accessToken: string }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const handleLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };


  useEffect(() => {
    const initialize = async () => {
      try {
        const { data: user } = await getUserLogged();
        const contactsResponse = await getContacts();
        setAuthedUser(user);
        setContacts(contactsResponse.data || []);
      } catch (err) {
        setAuthedUser(null);
      } finally {
        setInitializing(false);
      }
    };
    initialize();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (initializing) return null;

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LanguageProvider value={languageContextValue}>
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>{language === "id" ? "Aplikasi Kontak" : "Contacts App"}</h1>
            {authedUser && <Navigation name={authedUser.name} onLogout={handleLogout} />}
          </header>

          <main>
            {authedUser === null ? (
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<HomePageWrapper />} />
                <Route path="/add" element={<AddPageContact />} />
              </Routes>
            )}
          </main>
        </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
};

export default ContactAppPage;
