
/**
 * @notes
 * Manfaatkan tombol pada komponen ini untuk mengubah nilai context
 */

import { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../../../contexts/LocaleContext";


const Navigation = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{locale === 'id' ? 'Beranda' : 'Home'}</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorial</Link>
        </li>
        <li>
          <Link to="/community">{locale === 'id' ? 'Komunitas' : 'Community'}</Link>
        </li>
      </ul>
      <button type={"button"} onClick={toggleLocale}>{locale === 'id' ? 'English' : 'Indonesia'}</button>
    </nav>
  );
}
export default Navigation