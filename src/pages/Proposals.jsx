import ProposalsTable from "../features/project/ProposalsTable.jsx";
import {useProposals} from "../features/proposlals/useProposals.js";

function Proposals() {
    const {proposals , isPending} = useProposals();
    console.log(proposals);
    return (
        <div>
            <h1 className={'text-center font-semibold mb-10 text-base sm:text-xl'}>پروپوزال ها</h1>
            <ProposalsTable proposals={proposals} isPending={isPending} role={'freelancer'} />
        </div>
    );
}

export default Proposals;