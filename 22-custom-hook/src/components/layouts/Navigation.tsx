import PropTypes from "prop-types";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi"
import { Link } from "react-router-dom"
import { LanguageConsumer } from "../../contexts/LanguageContext";

type PropTypes = {
  name: string;
  onLogout: () => void;
}

const Navigation = (props: PropTypes) => {
  const { name, onLogout } = props;
  

  return (
  <LanguageConsumer>
    {({ language, toggleLanguage}) =>  {

      return (
    <nav aria-label={"navigation"} className={"navigation"}>
      <ul>
        <li>
          <button aria-label={"toggle language"} type={"button"} onClick={toggleLanguage}>
            {language === 'id' ? 'EN' : 'ID'}
          </button>
        </li>
        <li><Link to={"/"}><FiHome/></Link></li>
        <li><Link to={"/add"}><FiPlusCircle/></Link></li>
        <li><button aria-label={"logout"} type={"button"} onClick={onLogout}>{name} <FiLogOut/></button></li>
      </ul>
    </nav>
      )
    }}
  </LanguageConsumer>
  )
}

Navigation.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
}


export default Navigation