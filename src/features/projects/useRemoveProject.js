import {useMutation, useQueryClient} from "@tanstack/react-query";
import {removeProjectsApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export function useRemoveProject() {
    const queryClient = useQueryClient()
    const {mutate , isPending } = useMutation({
        mutationKey: ['remove-project'],
        mutationFn: removeProjectsApi,
        onSuccess: (data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ['owner-projects'],
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.data?.message)
        }

    })
    return {mutate , isPending}



}