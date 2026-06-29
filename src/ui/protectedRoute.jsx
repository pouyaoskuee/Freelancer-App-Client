import {useAuthorize} from "../features/authentication/useAuthorize.js";
import Loading from "./Loading.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

   const {isLoading , isAuthorized, isAuthenticated} = useAuthorize()


    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) navigate('/')
            if (!isAuthorized) navigate('/not-access')
        }
    } , [isAuthorized , isAuthenticated])


    if (isLoading) return <div className={'flex justify-center items-center h-screen w-screen'}><Loading /></div>

    return children
}

export default ProtectedRoute;