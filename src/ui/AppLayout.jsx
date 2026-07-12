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
        <div className={`flex flex-1 overflow-auto`}>
            <aside className={`transition-all duration-1000 ease-out bg-secondary-0 w-0  ${sideBar ? ' w-27 p-2 sm:w-53 sm:p-5':'p-0'} `} >
                <NavigateList/>
                <div onClick={()=>setSideBar((prevState)=>!prevState)} className={` size-8 flex items-center justify-center rounded-full bg-secondary-0 fixed top-1/2 -right-2 transition-all duration-1000 ease-out cursor-pointer ${sideBar && ' right-19 rotate-180 sm:right-44'} `}>
                    <HiOutlineChevronLeft size={'25'}/>
                </div>
            </aside>
            <div className={' bg-secondary-100 overflow-auto p-2 flex-1 sm:p-6'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;