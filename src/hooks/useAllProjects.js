import {useQuery} from "@tanstack/react-query";
import {getAllProjectsApi} from "../services/projectService.js";

export function  useAllProjects( ){
    const {isPending , data} = useQuery({
        queryFn:getAllProjectsApi,
        queryKey:['all-projects'],
    })

    const {projects} = data || {}

    return { projects , isPending}
}