import Loading from "../../../ui/Loading.jsx";
import Empty from "../../../ui/Empty.jsx";
import {truncateText} from "../../../utils/truncateText.js";
import {toPersianNumbersWithComma} from "../../../utils/toPersianNumber.js";
import {toLocalDateShort} from "../../../utils/toLocalDateShort.js";
import {useAllProjects} from "../../../hooks/useAllProjects.js";
import {MdAssignmentAdd} from "react-icons/md";
import {useState} from "react";
import Modal from "../../../ui/Modal.jsx";
import CreateProposal from "../../proposlals/CreateProposal.jsx";

function ProjectsTable() {
    const {projects, isPending} = useAllProjects()

    if (isPending) return <Loading/>
    if (projects.length < 1) return <Empty resourceName={'پروژه'}/>
    return (
            <table className={'w-full'}>
                <thead>
                <tr className={'*:text-start *:px-4 *:py-2 *:text-nowrap'}>
                    <th>#</th>
                    <th>عنوان پرژه</th>
                    <th>بودجه</th>
                    <th>ددلاین</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody className={'bg-secondary-0 *:border-2 *:border-secondary-100'}>
                {projects.map((project, index) => (<TableRow project={project} index={index} key={project._id}/>))}
                </tbody>
            </table>
    )
}
export default ProjectsTable;




function TableRow({project , index}) {
    const [openModal, setOpenModal] = useState(false)
    const [projectId, setProjectId] = useState()



    const statusStyle = {
    CLOSED:{
        label:'بسته',
        className: 'budge--error'
    },
    OPEN:{
        label:'باز',
        className: 'budge--success'
    }
}
    return (
        <tr className={'*:px-4 *:py-2'} key={project._id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>
                <div
                    className={`budge ${statusStyle[project.status].className}`}>{statusStyle[project.status].label}</div>
            </td>
            <td>
                <div className={'flex pr-2'}>
                    <MdAssignmentAdd onClick={() => {
                        setOpenModal(true)
                        setProjectId(project._id)
                    }
                    } className={'text-primary-900 size-5'}/>
                    <Modal open={openModal} title={project.title} onClose={() => setOpenModal(false)}>
                        <CreateProposal onClose={() => setOpenModal(false)} projectId={projectId}/>
                    </Modal>
                </div>
            </td>
        </tr>
    )
}