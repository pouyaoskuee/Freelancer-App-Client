import useOwnerProjects from "./useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";

function ProjectTable() {
    const {projects , isPending} =  useOwnerProjects()

    if (isPending) return <Loading />
    if (projects.length < 1) return <Empty resourceName={'پرژه'}/>
    return (
        <div className="project-table">
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>عنوان پرژه</th>
                    <th>دسته بندی</th>
                    <th>بودجه</th>
                    <th>ددلاین</th>
                    <th>تگ ها</th>
                    <th>فریلنسر</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody className={''}>
                {projects.map((project , index) => (
                    <tr key={project.id}>
                        <td>{index+1}</td>
                        <td>{project.title}</td>
                        <td>{project.category.title}</td>
                        <td>{project.budget}</td>
                        <td>{project.deadline}</td>
                        <td><div className={'flex flex-wrap max-w-[200px] gap-x-4 gap-y-1 '}>{project.tags.map((tag, index)=>(<span className={'budge--secondary'} key={index}>{tag}</span>))}</div></td>
                        <td>{project.freelancer?.name}</td>
                        <td>{project.status==='OPEN'?'باز': 'بسته'}</td>
                        <td>....</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectTable;