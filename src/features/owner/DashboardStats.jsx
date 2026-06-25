import StatBox from "./StatBox.jsx";
import {HiCollection, HiOutlineViewGrid} from "react-icons/hi";
import {HiCurrencyDollar} from "react-icons/hi2";

function DashboardStats({projects}) {

    const numOfProjects = projects.length
    const numOfAcceptedProjects = projects.filter(project => project.status ===2).length
    const nomOfProposals = projects.reduce((acc , curr)=> acc + curr.proposals.length , 0)

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-2 lg:grid-cols-3 ">
            <StatBox icon={<HiOutlineViewGrid size={50}/>} count={numOfProjects} label={'همه پروژه ها'} color={'primary'}/>
            <StatBox icon={<HiCurrencyDollar  size={50}/>} count={numOfAcceptedProjects} label={'پروژه های واگذاری شده'} color={'green'}/>
            <StatBox icon={<HiCollection  size={50}/>} count={nomOfProposals} label={'درخواست ها'} color={'secondary'}/>
        </div>
    );
}

export default DashboardStats;