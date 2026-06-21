import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editProjectApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export function useEditProject() {

    const queryClient = useQueryClient()

    const {mutate:editing , isPending:isEditing} = useMutation({
        mutationFn: editProjectApi,
        mutationKey: 'edit-Project',
        onSuccess: (data)=> {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ['owner-projects']
            })
        },
        onError: (error)=> {
            toast.error(error.response.message);
        }
    })
    return {editing , isEditing};

}