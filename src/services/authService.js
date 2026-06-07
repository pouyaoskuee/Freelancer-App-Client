import http from "./httpService.js";

export function getOtp(data){
    return http.get('user/get-otp' , data)
}



export function checkOtp(data){
    return http.get('user/check-otp' , data)
}