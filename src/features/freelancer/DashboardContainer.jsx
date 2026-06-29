import DashboardHeader from "../../ui/DashboardHeader.jsx";
import DashboardStats from "./DashboardStats.jsx";
import Loading from "../../ui/Loading.jsx";
import {useProposals} from "../proposlals/useProposals.js";

function DashboardContainer() {
    const {isPending , proposals} = useProposals()
    if (isPending) return <Loading />
    return (
        <div>
            <DashboardHeader/>
            <DashboardStats proposals={proposals}/>
        </div>
    );
}

export default DashboardContainer;