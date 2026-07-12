import ProjectsTable from "../features/projects/ProjectsTable.jsx";

function Projects() {
    return (
        <div>
            <h1 className={'text-center font-semibold mb-10 text-base sm:text-xl'}>پروژه های شما</h1>
            <ProjectsTable/>
        </div>
    );
}

export default Projects;