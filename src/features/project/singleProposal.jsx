import Select from "../../ui/Select.jsx";
import {useForm} from "react-hook-form";
import ButtonPrimary from "../../ui/ButtonPrimary.jsx";
import {useChangeProposalStatus} from "./useChangeProposalStatus.js";
import {useQueryClient} from "@tanstack/react-query";

function SingleProposal({id , onClose}) {
    const {register , handleSubmit } = useForm()
    const {mutate , isPending} = useChangeProposalStatus()
    const queryClient = useQueryClient();

    const options = [
        {
            label:'رد شده',
            value: 0
        },
        {
            label:'در انتظار تایید',
            value: 1
        },
        {
            label:'تایید شده',
            value: 2
        },
    ]

    function onSubmit(status) {
        mutate({id ,status} , {
            onSuccess: res => {
                queryClient.invalidateQueries({queryKey:['owner-project']})
                onClose()
            }
        })

    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Select register={register} id={'status'} options={options}  />
            <ButtonPrimary label={'تایید'} isLoading={isPending} />
        </form>
    );
}

export default SingleProposal;