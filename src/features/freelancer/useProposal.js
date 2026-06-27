import {useMutation} from "@tanstack/react-query";
import {addProposalApi} from "../../services/proposalsService.js";
import toast from "react-hot-toast";

export function useProposal(){
    const { isPending , mutate } = useMutation({
        mutationFn: addProposalApi,
        mutationKey: ['add-proposal'],
        onSuccess: (data)=> {
            toast.success(data.message);
        },
        onError: (err)=> {
            toast.error(err.response.data.message);
        }
    })

    return {isPending , mutate }

}