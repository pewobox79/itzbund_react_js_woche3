import Navigation from "./Navigation/Navigation"
import { memo } from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import LogoutFeature from "../features/LogoutFeature"

const Header = () => {
console.log("header renders")

    return <header>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Navigation />
            <LogoutFeature/>
            <ThemeSwitcher />
            
        </div>
    </header>
}

export default memo(Header)