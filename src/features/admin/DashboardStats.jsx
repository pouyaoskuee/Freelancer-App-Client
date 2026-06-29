import StatBox from "../../ui/StatBox.jsx";
import {HiCollection, HiOutlineViewGrid, HiUser} from "react-icons/hi";

function DashboardStats({proposals , projects , users}) {


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-2 lg:grid-cols-3 ">
            <StatBox icon={<HiUser size={50}/>} count={users?.length} label={'کاربران'} color={'primary'}/>
            <StatBox icon={<HiOutlineViewGrid  size={50}/>} count={projects?.length} label={'پروژه ها'} color={'green'}/>
            <StatBox icon={<HiCollection  size={50}/>} count={proposals?.length} label={'کل درخواست ها'} color={'olive'}/>
        </div>
    );
}

export default DashboardStats;