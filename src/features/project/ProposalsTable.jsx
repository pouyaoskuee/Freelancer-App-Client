import Empty from "../../ui/Empty.jsx";
import {truncateText} from "../../utils/truncateText.js";
import {useState} from "react";
import Modal from "../../ui/Modal.jsx";
import SingleProposal from "./singleProposal.jsx";
import Loading from "../../ui/Loading.jsx";
import {toPersianNumbersWithComma} from "../../utils/toPersianNumber.js";

function ProposalsTable({proposals , isPending , role = 'owner'}) {

    const [openProposal, setOpenProposal] = useState(false)
    const [proposalId, setProposalId] = useState()

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
    if (!proposals?.length) return <Empty resourceName={'درخواستی برای پرژه '}/>
    if (isPending) return <Loading/>

    return (
        <>
            <Modal title={`جزعیات پیشنهاد شماره ${''}`} open={openProposal} onClose={()=>setOpenProposal(false)}><SingleProposal id={proposalId} onClose={()=>setOpenProposal(false)}/></Modal>
            <table className={'w-full'}>
                <thead>
                <tr className={'*:text-start *:px-4 *:py-2 *:text-nowrap'}>
                    <td>#</td>
                    {role === 'owner' && (<td>فریلنسر</td>)}
                    <td>توضیحات</td>
                    <td>زمان تحویل</td>
                    <td>هزینه</td>
                    <td>وضعیت</td>
                    {role === 'owner' && (<td>عملیات</td>)}

                </tr>
                </thead>
                <tbody className={'bg-secondary-0 *:border-2 *:border-secondary-100'} >
                {proposals.map((proposal , index) => (
                    <tr className={'*:px-4 *:py-2'} key={proposal._id}>
                        <td>{index+1}</td>
                        {role === 'owner' && (<td>{proposal.user.name}</td>)}
                        <td>{truncateText(proposal.description , 30)}</td>
                        <td>{proposal.duration} روز</td>
                        <td>{toPersianNumbersWithComma(proposal.price)}</td>
                        <td><div className={`budge ${statusStyle[proposal.status].className}`}>{statusStyle[proposal.status].label}</div></td>
                        {role === 'owner' && (
                            <td>
                                <button onClick={()=> {
                                    setOpenProposal(true)
                                    setProposalId(proposal._id)
                                }}>
                                    جزعیات پیشنهاد
                                </button>
                            </td>)}

                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default ProposalsTable;