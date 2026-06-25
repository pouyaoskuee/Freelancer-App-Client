import http from "./httpService.js";

export function changeProposalStatusApi({id, status}) {
    return http.patch(`/proposal/${id}` , status).then(({data})=> data.data)
}

export function getProposalsApi() {
    return http.get(`/proposal/list`).then(({data})=> data.data)
}