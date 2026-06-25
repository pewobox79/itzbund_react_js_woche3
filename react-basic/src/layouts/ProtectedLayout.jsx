import { Navigate, Outlet } from "react-router"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ProtectedLayout =()=>{

    console.log("protected layout renders")

    const {value} = useLocalStorage("itzb_user", {loggedIn: false})

    if(!value.loggedIn){
        return <Navigate to={"/login"}/>
    }
    return <div style={{border: "2px solid red"}}>
        <h2>Protected layout</h2>
        <Outlet/>
    </div>
}

export default ProtectedLayout