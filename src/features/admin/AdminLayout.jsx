import AppLayout from "../../ui/AppLayout.jsx";
import CustomNavLink from "../../ui/SideBar.jsx";
import {HiCollection, HiHome, HiInbox, HiUser} from "react-icons/hi";

function AdminLayout() {
    return (
        <AppLayout>
            <aside className={'bg-secondary-0 row-span-full h-screen '} >
                <ul className={'space-y-1 '}>
                    <li><CustomNavLink to={'dashboard'}><HiHome/> خانه</CustomNavLink></li>
                    <li><CustomNavLink to={'users'}><HiUser/>کاربران</CustomNavLink></li>
                    <li><CustomNavLink to={'projects'}><HiCollection/> پروژه ها</CustomNavLink></li>
                    <li><CustomNavLink to={'proposals'}><HiInbox/>درخواست ها</CustomNavLink></li>
                </ul>
            </aside>
        </AppLayout>
    );
}

export default AdminLayout;