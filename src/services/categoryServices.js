import http from "./httpService.js";

export function getAllCategories() {
    return http.get(`/category/list`).then(({data}) => data.data)
}