import { navData } from "../../static/navData"
import NavItem from "./NavItem"
import styles from '../../styles/Navigation.module.css'

const Navigation = () => {

    console.log("styles", styles)
    const ListElements = navData.map((item) => {
        return <NavItem 
        key={`nav_list_item_${item.uid}`}
        {...item}/>
    })
    return <nav className={styles.navWrapper}>
        <ul>
            {ListElements}
        </ul>
    </nav>
}

export default Navigation