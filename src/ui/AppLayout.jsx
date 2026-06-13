import {Outlet} from "react-router-dom";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";

function AppLayout() {
    return (
        <div className={' grid grid-cols-[13rem_1fr] grid-rows-[5rem_1fr] *:p-4 '}>
            <Header/>
            <SideBar/>
            <Outlet/>
        </div>
    );
}

export default AppLayout;