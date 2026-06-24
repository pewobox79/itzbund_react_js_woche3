import styles from '../../styles/Navigation.module.css'
import { NavLink } from "react-router"

const NavItem = ({ label, href }) => {

    //const customClassName = `${styles.inActive} ${fontChange ? styles.isActive: ""}`
    //const tailwindBsp = `flex flex-col item-center text-${fontChange ? "xl" : "lg"}`

    //const customClassEquivalent = styles.inActive + " " + fontChange ? styles.isActive : ""

    return <NavLink
        to={href}
        className={({ isActive }) => `${styles.inActive} ${isActive ? styles.isActive : ""}`}>
        {label}
    </NavLink>
}

export default NavItem

/*
return <li className={styles.listItem}>
        <a 
            href={href} 
            className={customClassName}>{label}</a>
    </li>
*/