import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {logOutApi} from "../../services/authService.js";

export function useLogOut() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isPending , mutate} = useMutation({
        mutationFn:logOutApi,
        mutationKey: ['logOut'],

        onSuccess: () => {
            queryClient.removeQueries()
            navigate('/' , {replace: true})
        }
    })
    return {isPending , mutate}
}