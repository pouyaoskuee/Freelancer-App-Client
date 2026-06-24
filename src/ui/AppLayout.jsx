import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

function AppLayout({children}) {
    return (
        <div className={' bg-secondary-0 grid grid-cols-[10rem_minmax(10rem,1fr)] grid-rows-[5rem_1fr] *:p-4 '}>
            <Header/>
            {children}
            <div className={'bg-secondary-100 h-full'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;