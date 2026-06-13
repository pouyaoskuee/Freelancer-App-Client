import http from "./httpService.js";

export  function getProjectsApi() {
    http.get('/project/owner-projects').then(({data})=> data.data)
}