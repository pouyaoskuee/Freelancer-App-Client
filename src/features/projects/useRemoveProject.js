import {useMutation, useQueryClient} from "@tanstack/react-query";
import {removeProjectsApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export function useRemoveProject() {
    const queryClient = useQueryClient()
    const {mutate , isPending} = useMutation({
        mutationKey: 'remove-project',
        mutationFn: removeProjectsApi,
        onSuccess: ()=>{
            toast.success('با موفقیت حذف شد')
            queryClient.invalidateQueries({
                queryKey: ['owner-projects'],
            })
        },
        onError: error => toast.error(error.message)
    })

    return {mutate , isPending}



}