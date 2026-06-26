import ProposalsTable from "../features/project/ProposalsTable.jsx";
import {useProposals} from "../features/proposlals/useProposals.js";

function Proposals() {
    const {proposals , isPending} = useProposals();
    console.log(proposals);
    return (
        <div>
            <h1 className={'text-secondary-700 font-black '}>پروپوزال های شما</h1>
            <ProposalsTable proposals={proposals} isPending={isPending} />
        </div>
    );
}

export default Proposals;