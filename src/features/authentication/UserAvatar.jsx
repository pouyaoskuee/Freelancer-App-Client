import useUser from "./useUser.js";

function UserAvatar() {
    const {isLoading , user} =useUser()

    console.log(user)

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