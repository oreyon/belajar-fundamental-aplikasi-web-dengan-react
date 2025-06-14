import { Route, Routes } from "react-router-dom";
import Navigation from "../../components/views/UseContextView/Navigation";
import HomePage from "./HomePage";
import TutorialPage from "./Tutorial";
import CommunityPage from "./CommunityPage";
import { useMemo, useState } from "react";
import LocaleContext from "../../contexts/LocaleContext";


/**
 * @todos
 * 1. Buatlah fitur ubah bahasa dengan memanfaatkan Context.
 * 2. Pastikan Anda menggunakan fitur Hooks dalam memanfaatkan Context.
 *
 * Catatan:
 *  - Manfaatkan tombol yang berada di pojok kanan navigasi untuk mengubah bahasa.
 *  - Seluruh konten yang ditampilkan diambil dari utils -> content.js
 */


const UseContextAppPage = () => {
  const [locale, setLocale] = useState<'id' | 'en'>('id');

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === 'id' ? 'en' : 'id';
    });
  }


  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale
    }
  },[locale])

   return (
    <>
    <LocaleContext.Provider value={localeContextValue}>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </main>
      </LocaleContext.Provider>
    </>
  );
}
export default UseContextAppPage