import {useQuery} from "@tanstack/react-query";
import {getAllProjectsApi} from "../services/projectService.js";
import {useLocation} from "react-router-dom";
import queryString from 'query-string';

export function  useAllProjects( ){

    const {search} = useLocation()

    const queryObj = queryString.parse(search);


    const {isPending , data} = useQuery({
        queryFn:()=>  getAllProjectsApi(search),
        queryKey:['all-projects' , queryObj],
    })

    const {projects} = data || {}

    return { projects , isPending}
}