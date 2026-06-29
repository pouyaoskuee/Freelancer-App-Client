import DashboardHeader from "../../ui/DashboardHeader.jsx";
import DashboardStats from "./DashboardStats.jsx";
import useOwnerProjects from "../projects/useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";

function DashboardContainer() {
    const {isPending , projects} = useOwnerProjects()
    if (isPending) return <Loading />
    return (
        <div>
            <DashboardHeader/>
            <DashboardStats projects={projects}/>
        </div>
    );
}

export default DashboardContainer;