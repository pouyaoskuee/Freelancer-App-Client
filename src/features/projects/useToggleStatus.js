import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toggleProjectStatusApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export function useToggleProjectStatus() {

    const queryClint = useQueryClient()

    const { mutate , isPending} = useMutation({
        mutationFn: toggleProjectStatusApi,
        mutationKey: ['toggle-Project-Status'],
        onSuccess: (data)=>{
            toast.success(data.message);

            queryClint.invalidateQueries({
                query: ['owner-projects']
            })

        },
        onError:(error)=>{
            toast.error(error.response.data.message);
        }
    })
    return {isPending , mutate};
}