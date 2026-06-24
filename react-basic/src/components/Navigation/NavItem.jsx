import { useState } from "react"
import styles from '../../styles/Navigation.module.css'

const NavItem = ({uid, label, href}) => {
    const [fontChange, setFontChange] = useState(false)

    function handleFontChange() {
        setFontChange(!fontChange)
        console.log("innerhalb der function", fontChange)

    }
    const customClassName = `${styles.inActive} ${fontChange ? styles.isActive: ""}`
    //const tailwindBsp = `flex flex-col item-center text-${fontChange ? "xl" : "lg"}`

    //const customClassEquivalent = styles.inActive + " " + fontChange ? styles.isActive : ""
    console.log("ausserhalb der funktion", fontChange)
    return <li className={styles.listItem} onClick={handleFontChange}>
        <a 
            href={href} 
            className={customClassName}>{label}</a>
    </li>
}

export default NavItem