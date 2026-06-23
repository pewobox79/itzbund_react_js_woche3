import Navigation from "./Navigation/Navigation"
import { memo } from "react"
const Header = () => {
    console.log("header rendered")
    return <header>
        <h1>das ist der Header</h1>
        <Navigation/>
    </header>
}

export default memo(Header)