import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function NotBuild() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/auth')
    }, []);
    return (
        <div></div>
    );
}

export default NotBuild;