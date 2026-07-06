import useUser from "./useUser.js";
import Loading from "../../ui/Loading.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import NavigateList from "../../ui/NavigateList.jsx";

function UserAvatar() {
    const {isLoading , user} =useUser()
    const navigate = useNavigate();
    const [modal, setModal] = useState(false)

    if(isLoading) return <Loading/>

    if (!user) return <div className={'cursor-pointer'} onClick={()=> navigate('/auth')}>ورود/ثبت نام</div>;

    return (
        <div onClick={()=>setModal((prev)=>!prev)} className={'flex items-center justify-center gap-2 relative cursor-pointer '}>
            <img
                className={' size-8 rounded-full'}
                src="/user.jpg"
                alt="userAvatar"/>
            <span className={'hidden sm:block '}>{user?.name}</span>
            <div className={`bg-secondary-100 absolute top-11 -right-20 sm:right-0 opacity-0  max-h-0 rounded-md  transition-all duration-300 ${modal && 'opacity-100 max-h-dvh w-[12rem]' }  `}>
                <NavigateList/>
            </div>
        </div>
    );
}

export default UserAvatar;
