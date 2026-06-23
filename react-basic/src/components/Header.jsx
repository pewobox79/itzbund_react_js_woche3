import Navigation from "./Navigation/Navigation"
import { memo } from "react"
const Header = () => {
   
    return <header>
        <h1>das ist der Header</h1>
        <Navigation/>
    </header>
}

export default memo(Header)