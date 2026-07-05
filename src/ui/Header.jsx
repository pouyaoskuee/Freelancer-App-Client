import useUser from "../features/authentication/useUser.js";
import HeaderMenu from "./HeaderMenu.jsx";
import UserAvatar from "../features/authentication/UserAvatar.jsx";
import {NavLink} from "react-router-dom";
import Loading from "./Loading.jsx";

function Header() {
    const {isLoading , user} =useUser()


    return (
        <div className={` border-r-2 px-2 border-secondary-100 flex justify-between items-center gap-2${isLoading ? 'blur-sm opacity-50' : ''}`}>
            <div className={'flex items-center justify-center gap-4'}>
                <img src={'/logo/Deadlancer.png'} alt={'logo'} className={'size-20'}/>
                {isLoading ? <Loading/> :
                    <nav>
                        <ul className={'space-x-4'}>
                            <NavLink to={'/'}>همه پرژه ها</NavLink>
                            <NavLink className={`${user.role === 'OWNER' && 'hidden'}`} to={'/'}>
                                پروژه های مرتبط مهارت من </NavLink>
                            <NavLink className={`${user.role === 'FREELANCER' && 'hidden'}`} to={'/'}>
                                 پروژه های ایجاد شده من </NavLink>
                            <NavLink to={'/'}> آزمون ها</NavLink>
                            <NavLink to={'/'}> راهنما </NavLink>
                        </ul>
                    </nav>
                }
            </div>
            <div className={'flex items-center justify-center gap-4'}>
                <UserAvatar />
                <HeaderMenu />
            </div>
        </div>
    );
}

export default Header;
