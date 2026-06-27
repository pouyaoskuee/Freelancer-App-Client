import http from "./httpService.js";

export function getProjectsApi() {
   return http.get('/project/owner-projects').then(({data})=> data.data)
}

export function removeProjectsApi(projectId) {
    return http.delete(`/project/${projectId}`).then(({data})=> data.data)
}

export function addProjectApi(project) {
    return http.post(`/project/add`, project).then(({data})=> data.data)
}

export function editProjectApi({_id , newProject}) {
    return http.patch(`/project/update/${_id}`, newProject).then(({data})=> data.data)
}

export function toggleProjectStatusApi({status, _id}) {
    return http.patch(`/project/${_id}`, status).then(({data})=> data.data)
}

export function getProjectApi(id) {
    return http.get(`/project/${id}`).then(({data})=> data.data)
}

export function getAllProjectsApi() {
    return http.get(`/project/list`).then(({data})=> data.data)
}
