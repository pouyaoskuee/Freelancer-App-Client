import useUser from "../features/authentication/useUser.js";
import HeaderMenu from "./HeaderMenu.jsx";
import UserAvatar from "../features/authentication/UserAvatar.jsx";

function Header() {
    const {isLoading} =useUser()

    return (
        <div className={`border-r-2 border-secondary-100 flex justify-end items-center gap-2${isLoading ? 'blur-sm opacity-50' : ''}`}>
            <UserAvatar />
            <HeaderMenu />
        </div>
    );
}

export default Header;