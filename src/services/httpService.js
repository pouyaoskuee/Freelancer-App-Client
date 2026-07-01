import axios from "axios";

const BASE_URL = "https://worklancer.runflare.run/api/"

const  app = axios.create({
    baseURL: BASE_URL ,
    withCredentials: true
})

app.interceptors.request.use(
    response => response,
    error => Promise.reject(error)
)
app.interceptors.response.use(
    response => response,
    async error => {
        const originalConfig = error.config;
        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const {data} = await axios.get(`${BASE_URL}/user/refresh-token`, {withCredentials: true})
                if (data) return app(originalConfig)


            }catch (error) {
                return Promise.reject(error)
            }
        }
        return Promise.reject(error);
    }
)

const http= {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export default http;
