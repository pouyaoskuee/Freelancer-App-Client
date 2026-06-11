import {useQuery} from "@tanstack/react-query";
import {getUser} from "../../services/authService.js";

export default function useUser(){
    return useQuery({
        queryKey: ["get_user"],
        queryFn: getUser,
        retry: false
    })
}