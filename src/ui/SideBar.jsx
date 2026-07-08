import {NavLink} from "react-router-dom";

function CustomNavLink({to , children}) {
    const className = 'flex items-center gap-2 p-1 sm:p-2 rounded-xl hover:bg-primary-100/50 hover:text-primary-900 dark:hover:bg-primary-200 text-xs sm:text-lg';
    return (
        <NavLink  className={({isActive})=>isActive?`${className}  bg-primary-300/50 dark:bg-primary-50 text-primary-800 `:`${className}`} to={to}>{children}</NavLink>
    )
}

export default CustomNavLink;