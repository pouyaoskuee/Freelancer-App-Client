import {useMutation, useQueryClient} from "@tanstack/react-query";
import createProject from "./CreateProject.jsx";
import toast from "react-hot-toast";
import {addProjectApi} from "../../services/projectService.js";

export function useCreateProject() {
    const queryClient = useQueryClient()

    const {isPending:isCreating, mutate:creating} = useMutation({
        mutationFn: addProjectApi,
        onSuccess: (res) => {
            toast.success(res.message)

            queryClient.invalidateQueries({
                query: ['owner-projects'],
            })
        },
        onError:(err) => {
            console.log(err.response.data)
            toast.error(err.response.data.message)
        }
    })

    return { isCreating , creating}
}