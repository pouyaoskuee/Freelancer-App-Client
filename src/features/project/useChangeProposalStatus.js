import {useMutation} from "@tanstack/react-query";
import {changeProposalStatusApi} from "../../services/proposalsService.js";
import toast from "react-hot-toast";

export function useChangeProposalStatus() {

    const {isPending , mutate} =useMutation({
        mutationFn:changeProposalStatusApi,
        mutationKey: ['proposal-status'],
        onSuccess:(data)=> {
            toast.success(data.message);
        },
        onError:(error)=> {
            toast.error(error.response.data.message);
        }
    })
    return {mutate , isPending}
}