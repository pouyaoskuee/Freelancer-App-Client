import {useQuery} from "@tanstack/react-query";
import {getProjectApi} from "../../services/projectService.js";
import {useParams} from "react-router-dom";

export function useProject() {
    const { id} = useParams()
    const{isPending , data } = useQuery({
        queryFn:()=> getProjectApi(id),
        queryKey:['owner-project' , id],
        retry:false
    })


    const {project} = data || {}
    return {project , isPending}
}