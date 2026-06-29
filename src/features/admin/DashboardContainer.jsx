import DashboardHeader from "../../ui/DashboardHeader.jsx";
import DashboardStats from "./DashboardStats.jsx";
import Loading from "../../ui/Loading.jsx";
import {useProposals} from "../proposlals/useProposals.js";
import {useAllProjects} from "../../hooks/useAllProjects.js";
import {useAllUsers} from "./useAllUsers.js";

function DashboardContainer() {
    const {isPending:proposalLoading , proposals} = useProposals()
    const { isPending:projectLoading , projects} = useAllProjects()
    const {isPending:usersLoading , users} = useAllUsers()
    if (proposalLoading || projectLoading || usersLoading ) return <Loading />
    return (
        <div>
            <DashboardHeader/>
            <DashboardStats proposals={proposals} projects={projects} users={users}   />
        </div>
    );
}

export default DashboardContainer;