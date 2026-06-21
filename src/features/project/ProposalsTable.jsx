import Empty from "../../ui/Empty.jsx";
import {truncateText} from "../../utils/truncateText.js";

function ProposalsTable({proposals}) {
    if (!proposals.length) return <Empty resourceName={'درخواستی برای پرژه '}/>

    return (
        <table className={'w-full'}>
            <thead>
            <tr className={'*:text-start *:px-4 *:py-2 *:text-nowrap'}>
                <td>#</td>
                <td>فریلنسر</td>
                <td>توضیحات</td>
                <td>زمان تحویل</td>
                <td>هزینه</td>
                <td>وضعیت</td>
                <td>عملیات</td>
            </tr>
            </thead>
            <tbody className={'bg-secondary-0 *:border-2 *:border-secondary-100'} >
            {proposals.map((proposal , index) => (
                <tr className={'*:px-4 *:py-2'} key={proposal._id}>
                    <td>{index+1}</td>
                    <td>{proposal.user.name}</td>
                    <td>{truncateText(proposal.description , 30)}</td>
                    <td>{proposal.duration} روز</td>
                    <td>{proposal.price}</td>
                    <td>{proposal.status}</td>
                    <td>{'ama'}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ProposalsTable;