import StatBox from "../../ui/StatBox.jsx";
import {HiCollection, HiOutlineViewGrid} from "react-icons/hi";
import {HiCurrencyDollar} from "react-icons/hi2";

function DashboardStats({proposals}) {

    const numOfProposals = proposals.length
    const numOfAcceptedProposals = proposals.filter(proposal => proposal.status === 2);
    console.log(numOfAcceptedProposals)
    const totalEarned = numOfAcceptedProposals.reduce((acc , curr)=> acc + curr.price , 0)


    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-2 lg:grid-cols-3 ">
            <StatBox icon={<HiOutlineViewGrid size={50}/>} count={numOfProposals} label={'همه درخواست ها'} color={'primary'}/>
            <StatBox icon={<HiCurrencyDollar  size={50}/>} count={numOfAcceptedProposals.length} label={'درخواست های واگذاری شده'} color={'green'}/>
            <StatBox icon={<HiCollection  size={50}/>} count={totalEarned} label={'کل درآمد'} color={'secondary'}/>
        </div>
    );
}

export default DashboardStats;