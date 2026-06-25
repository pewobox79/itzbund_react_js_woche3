import { Outlet } from "react-router"

const ProtectedLayout =()=>{

    return <div style={{border: "2px solid red"}}>
        <h2>Protected layout</h2>
        <Outlet/>
    </div>
}

export default ProtectedLayout