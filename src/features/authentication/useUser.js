import {useQuery} from "@tanstack/react-query";
import {getUser} from "../../services/authService.js";

export default function useUser(){
    const {data , isLoading} =  useQuery({
        queryKey: ["get_user"],
        queryFn: getUser,
        retry: false
    })

    const {user} = data || {}

    return {user, isLoading}
}