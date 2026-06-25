import { useContext } from "react"
import { UserContext } from "../context/userContext"

function Footer() {
    console.log("footer renders")
    const user = useContext(UserContext)
    console.log(user)
    return <footer>
        <h3>das ist der Footer {user.user.username}</h3>
    </footer>
}

export default Footer