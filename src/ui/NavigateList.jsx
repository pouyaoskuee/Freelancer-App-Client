import CustomNavLink from "./SideBar.jsx";
import {HiCollection, HiHome, HiInbox, HiUser} from "react-icons/hi";
import useUser from "../features/authentication/useUser.js";

function NavigateList() {
    const {user} = useUser()


    if (user?.role==='OWNER') return (
        <ul className={'space-y-1'}>
            <li><CustomNavLink to={`/owner/dashboard`}><HiHome/> خانه</CustomNavLink></li>
            <li><CustomNavLink to={'/owner/projects'}><HiCollection/> پروژه ها</CustomNavLink></li>
        </ul>
    )

    if (user?.role==='FREELANCER') return (
        <ul className={'space-y-1 '}>
            <li><CustomNavLink to={'/freelancer/dashboard'}><HiHome/> خانه</CustomNavLink></li>
            <li><CustomNavLink to={'/freelancer/projects'}><HiCollection/> پروژه ها</CustomNavLink></li>
            <li><CustomNavLink to={'/freelancer/proposals'}><HiInbox/>درخواست ها</CustomNavLink></li>
        </ul>
    )

    return (
        <ul className={'space-y-1'}>
            <li><CustomNavLink to={'/admin/dashboard'}><HiHome/> خانه</CustomNavLink></li>
            <li><CustomNavLink to={'/admin/users'}><HiUser/>کاربران</CustomNavLink></li>
            <li><CustomNavLink to={'/admin/projects'}><HiCollection/> پروژه ها</CustomNavLink></li>
            <li><CustomNavLink to={'/admin/proposals'}><HiInbox/>درخواست ها</CustomNavLink></li>
        </ul>
    )
}

export default NavigateList