import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router"
import { ThemeContext } from "../context/themeContext"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { UserContext } from "../context/userContext"


const MainLayout = () => {

    const { value } = useLocalStorage("itzb_user")
    console.log("mainlayout renders")
    const [changed, setChanged] = useState(false)
    const [themeStyle, setThemeStyle] = useState("dark")
    const [user, setUser] = useState(value)

    return <ThemeContext value={{ themeStyle, setThemeStyle }}>
        <UserContext value={{user, setUser}}>
            <Header changed={changed} />
            <button onClick={() => setChanged(!changed)}>change</button>
            <main>
                <Outlet />
            </main>
            <Footer />
        </UserContext>
    </ThemeContext>
}

export default MainLayout