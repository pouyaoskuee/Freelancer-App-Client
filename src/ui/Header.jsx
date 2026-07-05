import useUser from "../features/authentication/useUser.js";
import HeaderMenu from "./HeaderMenu.jsx";
import UserAvatar from "../features/authentication/UserAvatar.jsx";
import NavBarMenu from "./NavBarMenu.jsx";

function Header() {
    const {isLoading} =useUser()

    return (
        <header className={` bg-secondary-0 text-secondary-900  px-2 border-secondary-100 flex justify-between items-center gap-2 sm:border-r-2 ${isLoading ? 'blur-sm opacity-50' : ''}`}>
            <div className={'flex items-center gap-3 sm:flex-row-reverse'}>
                <NavBarMenu/>
                <img src={'/logo/Deadlancer.png'} alt={'logo'} className={'size-20'}/>
            </div>
            <div className={'flex items-center justify-center gap-4'}>
                <UserAvatar />
                <HeaderMenu />
            </div>
        </header>
    );
}

export default Header;
