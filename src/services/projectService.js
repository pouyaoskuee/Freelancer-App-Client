import http from "./httpService.js";

export function getProjectsApi() {
   return http.get('/project/owner-projects').then(({data})=> data.data)
}