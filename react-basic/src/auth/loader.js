import { redirect } from "react-router";
import { isAuthenticated } from "./auth";

export function protectedLoader (){

    const isAuth = isAuthenticated()

    if(!isAuth){
        throw redirect("/login") // => SSR redirect on react-router server
    }

    return true // => erlaubt zugriff auf das ProtectedLayout
}