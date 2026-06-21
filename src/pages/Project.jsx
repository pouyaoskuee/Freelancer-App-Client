import {useProject} from "../features/project/useProject.js";
import Loading from "../ui/Loading.jsx";
import ProjectHeader from "../features/project/ProjectHeader.jsx";
import ProposalsTable from "../features/project/ProposalsTable.jsx";

function Project() {
    const {isPending , project} = useProject()

    if (isPending) return (<Loading/>)
    return (
        <div className={'overflow-auto '}>
            <ProjectHeader project={project}/>
            <ProposalsTable proposals={project.proposals}/>
        </div>
    );
}

export default Project;