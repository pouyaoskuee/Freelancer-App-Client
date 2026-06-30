import {useMutation} from "@tanstack/react-query";
import {userStatusApi} from "../../services/authService.js";
import toast from "react-hot-toast";

export function useChangeUserStatus(){
    const {isPending , mutate} = useMutation({
        mutationFn:userStatusApi,
        mutationType:['user-status'],
        onSuccess:(data)=>{
            toast.success(data.message)
        },
        onError:(error)=>{
            toast.error(error.response.data.message)
        }
    })

    return { isPending, mutate }

}