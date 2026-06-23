import { navData } from "../../static/navData"
import NavItem from "./NavItem"

const Navigation = () => {

    const ListElements = navData.map((item) => {
        return <NavItem 
        key={`nav_list_item_${item.uid}`} 
        {...item}/>
    })
    return <nav>
        <ul>
            {ListElements}
        </ul>
    </nav>
}

export default Navigation