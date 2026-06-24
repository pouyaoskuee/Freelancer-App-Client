import AppLayout from "../../ui/AppLayout.jsx";
import {HiCollection, HiHome} from "react-icons/hi";
import CustomNavLink from "../../ui/SideBar.jsx";

function OwnerLayout() {
    return (
        <AppLayout>
            <aside className={'bg-secondary-0 row-span-full h-screen '} >
                <ul className={'space-y-1 '}>
                    <li><CustomNavLink to={'dashboard'}><HiHome/> خانه</CustomNavLink></li>
                    <li><CustomNavLink to={'projects'}><HiCollection/> پروژه ها</CustomNavLink></li>
                </ul>
            </aside>
        </AppLayout>

    );
}

export default OwnerLayout;