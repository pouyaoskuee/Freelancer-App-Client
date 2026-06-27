import ProjectsHeader from "./project/projectsHeader.jsx";
import ProjectsTable from "./project/projectsTable.jsx";

function SubmittedProjects() {
    return (
        <div className={'overflow-auto '}>
            <ProjectsHeader/>
            <ProjectsTable/>
        </div>
    );
}

export default SubmittedProjects;