import { FaMoon, FaSun } from "react-icons/fa6"
import { ThemeConsumer } from "../../contexts/ThemeContext"


const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme}) => {
        return <button aria-label={"theme"} type={"button"} onClick={toggleTheme}>{theme === 'light' ? <FaMoon/> : <FaSun/>}</button>;
      }}

    </ThemeConsumer>
  )
}

export default ToggleTheme