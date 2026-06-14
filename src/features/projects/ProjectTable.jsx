import useOwnerProjects from "./useOwnerProjects.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import {truncateText} from "../../utils/truncateText.js";
import {toLocalDateShort} from "../../utils/toLocalDateShort.js";
import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";
import {TbPencilMinus} from "react-icons/tb";
import {HiOutlineTrash} from "react-icons/hi";
import Modal from "../../ui/Modal.jsx";
import {useState} from "react";

function ProjectTable() {
    const {projects , isPending} =  useOwnerProjects()
    const [openEdit, setOpenEdit] = useState(false);
    if (isPending) return <Loading />
    if (projects.length < 1) return <Empty resourceName={'پرژه'}/>
    return (
        <div>
            <table className={'w-full'}>
            <Modal open={openEdit} title={'edit your project'} children={'Edit project informationEdit project informationEdit project informationEdit project information'} onClose={() => setOpenEdit(false)} />
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
                {projects.map((project , index) => (
                    <tr className={'*:px-4 *:py-2'} key={project.id}>
                        <td>{index+1}</td>
                        <td>{truncateText(project.title , 30)}</td>
                        <td>{project.category.title}</td>
                        <td>{toPersianNumbersWithComma(project.budget)}</td>
                        <td>{toLocalDateShort(project.deadline)}</td>
                        <td><div className={'flex flex-wrap max-w-[200px] gap-x-4 gap-y-1 '}>{project.tags.map((tag, index)=>(<span className={'budge budge--secondary'} key={index}>{tag}</span>))}</div></td>
                        <td>{project.freelancer?.name}</td>
                        <td>{project.status==='OPEN'?<p className={' budge budge--success text-center'}>باز</p>:<p className={' budge budge--error text-center'}>بسته</p>}</td>
                        <td className={' space-x-2 text-nowrap'}>
                            <button onClick={()=>setOpenEdit(true)}><TbPencilMinus className={'size-5 text-primary-900'} /></button>
                            <button><HiOutlineTrash className={'size-5 text-error'} /></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectTable;