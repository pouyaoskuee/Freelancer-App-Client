import useUser from "./useUser.js";
import Loading from "../../ui/Loading.jsx";

function UserAvatar() {
    const {isLoading , user} =useUser()

    if(isLoading) return <Loading/>

    return (
        <div className={'flex items-center justify-center gap-2'}>
            <img
                className={' size-8 rounded-full'}
                src="/user.jpg"
                alt="userAvatar"/>
            <span>{user.name}</span>
        </div>
    );
}

export default UserAvatar;