import PropTypes from "prop-types";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi"
import { Link } from "react-router-dom"

type PropTypes = {
  name: string;
  onLogout: () => void;
}

const Navigation = (props: PropTypes) => {
  const { name, onLogout } = props;
  

  return (
  <nav aria-label={"navigation"} className={"navigation"}>
    <ul>
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