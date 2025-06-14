import PropTypes from "prop-types";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi"
import { Link } from "react-router-dom"
import LanguageContext from "../../contexts/LanguageContext";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

type PropTypes = {
  name: string;
  onLogout: () => void;
}

const Navigation = (props: PropTypes) => {
  const { name, onLogout } = props;
  const { language, toggleLanguage} = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  return (
    <nav aria-label={"navigation"} className={"navigation"}>
      <ul>
        <li>
          <button aria-label={"toggle language"} type={"button"} onClick={toggleLanguage}>
            {language === 'id' ? 'EN' : 'ID'}
          </button>
        </li>
        <li>
          <button aria-label={"theme"} type={"button"} onClick={toggleTheme}>{theme === 'light' ? <FaMoon/> : <FaSun/>}</button>
        </li>
        <li><Link to={"/"}><FiHome/></Link></li>
        <li><Link to={"/add"}><FiPlusCircle/></Link></li>
        <li><button aria-label={"logout"} type={"button"} onClick={onLogout}>{name} <FiLogOut/></button></li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
}


export default Navigation