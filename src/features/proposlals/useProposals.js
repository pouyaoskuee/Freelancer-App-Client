import {useQuery} from "@tanstack/react-query";
import {getProposalsApi} from "../../services/proposalsService.js";

export function useProposals(){
    const {data , isPending} = useQuery({
        queryKey: ['proposals'],
        queryFn: getProposalsApi
    })

    const {proposals} = data || {}

    return {proposals , isPending}
}