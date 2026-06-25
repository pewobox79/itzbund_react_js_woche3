import Navigation from "./Navigation/Navigation"
import { memo } from "react"
import ThemeSwitcher from "./ThemeSwitcher"
const Header = () => {
console.log("header renders")
    return <header>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Navigation />
            <ThemeSwitcher />
        </div>
    </header>
}

export default memo(Header)