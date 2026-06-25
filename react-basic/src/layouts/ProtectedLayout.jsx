import { Navigate, Outlet } from "react-router"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

const ProtectedLayout =()=>{

    console.log("protected layout renders")

    const user = useContext(UserContext)
    console.log("user context", user )

    //=> <Navigate/> renders a complete component which includes the redirect logic
    if(!user.loggedIn){
        return <Navigate to={"/login"}/>
    }
    return <div style={{border: "2px solid red"}}>
        <h2>Protected layout</h2>
        <Outlet/>
    </div>
}

export default ProtectedLayout