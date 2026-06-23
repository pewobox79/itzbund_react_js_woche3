import { useState } from "react"

const NavItem = ({uid, label, href}) => {

    console.log("element rendered", uid)
    const [fontChange, setFontChange] = useState(false)

    function handleFontChange() {
        setFontChange(!fontChange)
        console.log("innerhalb der function", fontChange)

    }
    
    console.log("ausserhalb der funktion", fontChange)
    return <li onClick={handleFontChange}>
        <a 
            href={href} 
            style={{ fontWeight: fontChange ? "bold" : "" }}>{label}</a>
    </li>
}

export default NavItem