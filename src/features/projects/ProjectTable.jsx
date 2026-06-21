import useOwnerProjects from "./useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import {truncateText} from "../../utils/truncateText.js";
import {toLocalDateShort} from "../../utils/toLocalDateShort.js";
import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";
import {TbPencilMinus} from "react-icons/tb";
import {HiOutlineTrash} from "react-icons/hi";
import Modal from "../../ui/Modal.jsx";
import {useEffect, useState} from "react";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import {useRemoveProject} from "./useRemoveProject.js";
import CreateProject from "./CreateProject.jsx";

function ProjectTable() {
    const {projects, isPending} = useOwnerProjects()
    const [openCreate, setOpenCreate] = useState(false);

    if (isPending) return <Loading/>
    if (projects.length < 1) return <Empty resourceName={'پرژه'}/>
    return (
        <div className={'overflow-auto '}>
            <div className={'flex justify-between items-center mb-8'}>
                <h2 className={'font-normal text-lg'}>پروژه های شما</h2>
                <button className={'btn btn--primary'} onClick={()=>setOpenCreate(true)}>ایجاد پرژه جدید</button>
                <Modal open={openCreate} onClose={()=>setOpenCreate(false)} title={'ایجاد پرژه جدید'} children={<CreateProject onClose={()=>setOpenCreate(false)}/>}></Modal>
            </div>
            <table className={'w-full'}>
                <thead>
                <tr className={'*:text-start *:px-4 *:py-2'}>
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
                <tbody className={'bg-secondary-0 *:border-2 *:border-secondary-100'}>
                {projects.map((project, index) => (<TableRow project={project} index={index} key={project._id}/>))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectTable;

function TableRow({project , index}){
    const [openEdit, setOpenEdit] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);
    const {isPending:removePending , mutate} = useRemoveProject()


    return (
        <tr className={'*:px-4 *:py-2'} key={project._id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>
                <div
                    className={'flex flex-wrap max-w-[200px] gap-x-4 gap-y-1 '}>
                    {project.tags.map((tag, index) => (
                        <span className={'budge budge--secondary'} key={index}>{tag}</span>))}
                </div>
            </td>
            <td>{project.freelancer?.name}</td>
            <td>{project.status === 'OPEN' ? <p className={' budge budge--success text-center'}>باز</p> :
                <p className={' budge budge--error text-center'}>بسته</p>}</td>
            <td className={' space-x-2 text-nowrap'}>
                <button
                    onClick={() => setOpenEdit(true)}
                ><TbPencilMinus
                    className={'size-5 text-primary-900'}
                />
                </button>

                <button
                    onClick={() => {
                        setOpenRemove(true)
                    } }
                ><HiOutlineTrash
                    className={'size-5 text-error'}
                />
                </button>
                <div className={''}>
                    <Modal
                        open={openEdit}
                        title={`ویرایش پرژه: ${project.title}`}
                        onClose={() => setOpenEdit(false)}
                    >
                        <CreateProject project={project} onClose={()=>setOpenEdit(false)}/>
                    </Modal>

                    <Modal
                        open={openRemove}
                        title={`حذف پرژه: ${project.title}`}
                        onClose={() => setOpenRemove(false)}
                    ><ConfirmDelete
                        disabled={removePending}
                        onConfirm={() => {
                            mutate(project._id)
                            setOpenRemove(false)
                        } }
                        resourceName={project.title}
                        onClose={() => setOpenRemove(false)}
                    />
                    </Modal>
                </div>
            </td>
        </tr>
    )
}