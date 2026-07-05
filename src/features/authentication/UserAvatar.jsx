import useUser from "./useUser.js";
import Loading from "../../ui/Loading.jsx";
import {useNavigate} from "react-router-dom";

function UserAvatar() {
    const {isLoading , user} =useUser()
    const navigate = useNavigate();

    if(isLoading) return <Loading/>

    if (!user) return <div onClick={()=> navigate('/auth')}>ورود/ثبت نام</div>;

    return (
        <div className={'flex items-center justify-center gap-2'}>
            <img
                className={' size-8 rounded-full'}
                src="/user.jpg"
                alt="userAvatar"/>
            <span>{user?.name}</span>
        </div>
    );
}

export default UserAvatar;