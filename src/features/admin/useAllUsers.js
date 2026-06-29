import {useQuery} from "@tanstack/react-query";
import {getAllUsersApi} from "../../services/authService.js";

export function useAllUsers() {
    const {isPending , data} = useQuery({
        queryFn:getAllUsersApi,
        queryKey: ['all-users'],
    })

    const {users} = data || {}

    return{users , isPending}
}