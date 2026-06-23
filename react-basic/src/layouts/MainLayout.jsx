import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const MainLayout = ({children}) => {

    console.log("mainlayout rendered")
    const [changed, setChanged] = useState(false)

    console.log("changed", changed)
    return <>
        <Header changed={changed}/>
        <button onClick={()=> setChanged(!changed)}>change</button>
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default MainLayout