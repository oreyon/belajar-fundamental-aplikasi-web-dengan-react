import { FaMoon, FaSun } from "react-icons/fa6"
import ThemeContext from "../../contexts/ThemeContext"
import { useContext } from "react"


const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    /**
     * 
    <ThemeConsumer>
    {({ theme, toggleTheme}) => { // <--- can refactor like code in row
    return <button aria-label={"theme"} type={"button"} onClick={toggleTheme}>{theme === 'light' ? <FaMoon/> : <FaSun/>}</button>;
    }}
    </ThemeConsumer>
    */
   <button aria-label={"theme"} type={"button"} onClick={toggleTheme}>{theme === 'light' ? <FaMoon/> : <FaSun/>}</button>
  )
}

export default ToggleTheme