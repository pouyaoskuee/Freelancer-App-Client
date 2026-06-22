import http from "./httpService.js";

export function changeProposalStatusApi({id, status}) {
    console.log(id)
    console.log(status)
    return http.patch(`/proposal/${id}` , status).then(({data})=> data.data)
}