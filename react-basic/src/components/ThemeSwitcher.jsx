import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

const ThemeSwitcher = () => {

    const theme = useContext(ThemeContext)

    function handleClick(e) {
        const { id } = e.target
        theme.setThemeStyle(id)
    }

    return <div>
        <button id="light" className="label-light" onClick={handleClick}>Light</button>
        <button id="dark" className="label-dark" onClick={handleClick}>Dark</button>
    </div>
}

export default ThemeSwitcher