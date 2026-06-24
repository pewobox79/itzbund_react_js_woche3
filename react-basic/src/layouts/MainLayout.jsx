import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router"

const MainLayout = () => {

    const [changed, setChanged] = useState(false)

    console.log("changed", changed)
    return <>
        <Header changed={changed}/>
        <button onClick={()=> setChanged(!changed)}>change</button>
        <main>
            <Outlet/>
        </main>
        <Footer />
    </>
}

export default MainLayout