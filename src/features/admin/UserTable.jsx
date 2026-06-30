import {useAllUsers} from "./useAllUsers.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import {useState} from "react";
import {MdAssignmentAdd} from "react-icons/md";
import Modal from "../../ui/Modal.jsx";
import ChangeUserStatus from "./ChangeUserStatus.jsx";

function UserTable() {
    const {users, isPending} = useAllUsers()

    if (isPending) return <Loading/>
    if (users.length < 1) return <Empty resourceName={'کاربران '}/>
    return (
        <table className={'w-full'}>
            <thead>
            <tr className={'*:text-start *:px-4 *:py-2 *:text-nowrap'}>
                <th>#</th>
                <th>نام</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </tr>
            </thead>
            <tbody className={'bg-secondary-0 *:border-2 *:border-secondary-100'}>
            {users.map((user, index) => (<TableRow user={user} index={index} key={user._id}/>))}
            </tbody>
        </table>
    )
}

export default UserTable;



function TableRow({user , index}) {
    const [openModal, setOpenModal] = useState(false)
    const [userId, setUserId] = useState()



    const statusStyle = [
        {
            label:'در شده',
            className:'budge--error'
        },
        {
            label:'در انتظار تایید',
            className:'budge--secondary'
        },
        {
            label:'تایید شده',
            className:'budge--success'
        },
    ]
    return (
        <tr className={'*:px-4 *:py-2'} key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>
            <td>
                <div
                    className={`budge ${statusStyle[user.status].className}`}>{statusStyle[user.status].label}</div>
            </td>
            <td>
                <div className={'flex pr-2'}>
                    <MdAssignmentAdd onClick={() => {
                        setOpenModal(true)
                        setUserId(user._id)
                    }
                    } className={'text-primary-900 size-5'}/>
                    <Modal open={openModal} title={`تغییر وضعیت کاربر `} onClose={() => setOpenModal(false)}>
                        <ChangeUserStatus onClose={() => setOpenModal(false)} userId={userId}/>
                    </Modal>
                </div>
            </td>
        </tr>
    )
}