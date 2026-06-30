import {useAuthorize} from "../features/authentication/useAuthorize.js";
import Loading from "./Loading.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";
import useUser from "../features/authentication/useUser.js";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

   const {isLoading , isAuthorized, isAuthenticated , verified} = useAuthorize()

    console.log(isAuthenticated)

    useEffect(() => {
        if(!isLoading){
            if (!isAuthenticated) navigate('/auth')
            else if (!verified){
                navigate('/')
                toast.error("حساب کاربری شما از سمت ادمین تایید نشده است")
            }
            else if (!isAuthorized) navigate('/not-access')
        }
    } , [isLoading ])


    if (isLoading) return <div className={'flex justify-center items-center h-screen w-screen'}><Loading /></div>

    return children
}

export default ProtectedRoute;