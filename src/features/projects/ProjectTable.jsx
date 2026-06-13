import useOwnerProjects from "./useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";

function ProjectTable() {
    const {projects , isPending} = useOwnerProjects()

    console.log(projects)
    console.log(isPending)
    return (
        isPending?<Loading/>:<div>

            hello

        </div>

    );
}

export default ProjectTable;