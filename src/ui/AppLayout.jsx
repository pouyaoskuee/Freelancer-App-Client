import {Outlet} from "react-router-dom";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";

function AppLayout() {
    return (
        <div className={' grid grid-cols-[15rem_1fr] grid-rows-2'}>
            <Header/>
            <SideBar/>
            <div className={'bg-red-800 overflow-y-auto '} >
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;