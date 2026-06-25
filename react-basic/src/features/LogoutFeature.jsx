import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useNavigate } from "react-router"

const LogoutFeature =()=>{

    const navigate = useNavigate()
    const theme = useContext(ThemeContext)
    const { removeLocalStorage } = useLocalStorage("itzb_user")
    function handleLogout() {
        removeLocalStorage()
        navigate("/login") // => hook useNavigate handles in functions

    }
    
    return <button onClick={handleLogout} className={`label-${theme.themeStyle}`}>logout</button>
}
export default LogoutFeature