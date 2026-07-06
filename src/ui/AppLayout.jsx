import {Outlet} from "react-router-dom";
import NavigateList from "./NavigateList.jsx";
import {useEffect, useState} from "react";

function AppLayout() {
    const [sideBar, setSideBar] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            setSideBar(false)
        },1000)
    },[])

    return (
        <div className={` bg-secondary-100 grid grid-cols-[0rem_minmax(10rem,1fr)] transition-all duration-1000 *:p-0 *:transition-all *:duration-1000 ${sideBar && 'grid-cols-[10rem_minmax(10rem,1fr)]! *:p-4 ' } grid-rows-[5rem_1fr] gap-15 `}>
            <aside className={' overflow-auto bg-secondary-0 row-span-full h-screen relative '} >
                <NavigateList/>
                <div onClick={()=>setSideBar((prevState)=>!prevState)} className={`fixed top-1/2 right-0 transition-all duration-1000 ${sideBar && 'right-35'} `}>icon</div>
            </aside>


            <div className={'h-full'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;