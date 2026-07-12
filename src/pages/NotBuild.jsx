import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useUser from "../features/authentication/useUser.js";

function NotBuild() {
    const navigate = useNavigate()
    const {user , isLoading} = useUser()
    useEffect(() => {
        if (!isLoading) {
            const path = (user.role).toLowerCase()
            if (user) navigate(`/${path}/dashboard`)
            else navigate('/auth')
        }
    }, []);
    return (
        <div></div>
    );
}

export default NotBuild;