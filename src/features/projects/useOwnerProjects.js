import {useQuery} from "@tanstack/react-query";
import {getProjectsApi} from "../../services/projectService.js";

export default function useOwnerProjects() {
    const {data , isPending} = useQuery({
        queryKey: ['owner-projects'],
        queryFn: getProjectsApi,
    })

    const {projects} = data || {}

    return {projects , isPending}
}