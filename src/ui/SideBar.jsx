import {NavLink} from "react-router-dom";
import {HiCollection, HiHome} from "react-icons/hi";

function SideBar() {
    return (
        <div className={'bg-white row-span-full h-screen '} >
            <ul className={'space-y-1 '}>
                <li><CustomNavLink to={'/owner/dashboard'}><HiHome/> خانه</CustomNavLink></li>
                <li><CustomNavLink to={'/owner/projects'}><HiCollection/> پروژه ها</CustomNavLink></li>
            </ul>
        </div>
    );
}

export default SideBar;


function CustomNavLink({to , children}) {
    const className = 'flex items-center gap-2 p-2 rounded-xl hover:bg-primary-100/50 hover:text-primary-900'
    return (
        <NavLink  className={({isActive})=>isActive?`${className}  bg-primary-300/50 text-primary-900 `:`${className}`} to={to}>{children}</NavLink>
    )
}