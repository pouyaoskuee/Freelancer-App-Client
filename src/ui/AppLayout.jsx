import {Outlet} from "react-router-dom";
import NavigateList from "./NavigateList.jsx";
import {useEffect, useState} from "react";
import {HiOutlineChevronLeft} from "react-icons/hi";

function AppLayout() {
    const [sideBar, setSideBar] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setSideBar(true)
        },500)
        setTimeout(()=>{
            setSideBar(false)
        },2000)
    },[])

    return (
        <div className={` grid transition-all duration-1000 ease-out ${sideBar ? ' grid-cols-[7rem_minmax(10rem,1fr)]  sm:grid-cols-[13rem_minmax(10rem,1fr)]':'grid-cols-[0rem_minmax(10rem,1fr)]' } grid-rows-[5rem_1fr] `}>
            <aside className={` *:transition-all *:duration-1000 *:ease-out overflow-auto bg-secondary-0 row-span-full h-screen  ${sideBar ? 'p-2 sm:p-5':'p-0'} `} >
                <NavigateList/>
                <div onClick={()=>setSideBar((prevState)=>!prevState)} className={` size-8 flex items-center justify-center rounded-full bg-secondary-0 fixed top-1/2 -right-2 transition-all duration-1000 ${sideBar && ' right-19 rotate-180 sm:right-44'} `}>
                    <HiOutlineChevronLeft size={'25'}/>
                </div>
            </aside>
            <div className={' bg-secondary-100 h-dvh overflow-auto p-2 sm:p-6'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;