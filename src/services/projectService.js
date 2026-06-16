import http from "./httpService.js";

export function getProjectsApi() {
   return http.get('/project/owner-projects').then(({data})=> data.data)
}

export function removeProjectsApi(projectId) {
    return http.delete(`/project/${projectId}`).then(({data})=> data.data)
}