import {NavLink} from "react-router-dom";

function SideBar() {
    return (
        <div className={'bg-red-500 row-span-full h-screen '} >
            <ul>
                <li><NavLink to={'/owner/dashboard'}> خانه </NavLink> </li>
                <li><NavLink to={'/owner/projects'}> پروژه ها </NavLink></li>
            </ul>
        </div>
    );
}

export default SideBar;