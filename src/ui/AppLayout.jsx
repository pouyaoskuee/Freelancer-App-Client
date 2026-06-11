import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <div className={' grid grid-cols-2 grid-rows-2'}>
            <div className={'bg-red-100 '}>app header </div>
            <div className={'bg-red-500 row-span-full h-screen'}>app sidebar</div>
            <div className={'bg-red-800 overflow-y-auto '}>
                <div><Outlet/></div>
            </div>
        </div>
    );
}

export default AppLayout;