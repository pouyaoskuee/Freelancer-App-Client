import {Outlet} from "react-router-dom";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";

function AppLayout() {
    return (
        <div className={' grid grid-cols-[10rem_minmax(10rem,1fr)] grid-rows-[5rem_1fr] *:p-4 '}>
            <Header/>
            <SideBar/>
            <div className={'bg-secondary-100 h-full'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;