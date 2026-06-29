import useUser from "./useUser.js";
import {useLocation} from "react-router-dom";

export function useAuthorize() {
    const {user , isLoading} = useUser()
    const {pathname} = useLocation()

    let isAuthenticated = false
    if (user) isAuthenticated = true


    const roles = {
        admin: "ADMIN",
        freelancer: "FREELANCER",
        owner: "OWNER",
    }


    let isAuthorized = false
    const desiredRole =  pathname.split('/').at(1)
    if (Object.keys(roles).includes(desiredRole)) {
        if (user && user.role===roles[desiredRole]) isAuthorized = true
    }

    // if (!isLoading){
    //     console.log(user)
    //     console.log(desiredRole)
    //     console.log(user?.role)
    //     console.log(isAuthorized , isAuthenticated )
    // }


    return {isAuthenticated , isAuthorized , isLoading }
}