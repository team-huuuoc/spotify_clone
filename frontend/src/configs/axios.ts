import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
interface FailedRequests{
    resolve: (value: AxiosResponse) => void;
    reject: (value: AxiosError) => void;
    config: AxiosRequestConfig;
    error: AxiosError;
}
const axiosInstance = axios.create({
    baseURL:  "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
})

let failedRequests: FailedRequests[] = [];
let isTokenRefreshing = false;
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const status = error.response?.status;
        const originalRequestConfig = error.config!;;
        if (status !== 401){
            return Promise.reject(error);
        }
        if (isTokenRefreshing){
            return new Promise((resolve, reject) => {
                failedRequests.push({
                    resolve,
                    reject,
                    config: originalRequestConfig,
                    error: error
                })
            })
        }
        isTokenRefreshing = true;
        try {
            const response = await axiosInstance.post("/login", {
                refreshToken: JSON.parse(localStorage.getItem("refreshToken") ?? "")
            })
            const { accessToken = null , refreshToken = null} = response?.data ?? {}
            if (!accessToken || !refreshToken){
                throw new Error("Đã xảy ra lỗi khi làm mới mã thông báo truy cập của bạn")
            }
            window.localStorage.setItem("accessToken", accessToken)
            window.localStorage.setItem("refreshToken", refreshToken)
            failedRequests.forEach(({resolve, reject, config}) => {
                axiosInstance(config)
                    .then((response) => resolve(response))
                    .catch((error) => reject(error))
            })
        } catch (_error: unknown) {
            console.error(_error);
            failedRequests.forEach(({reject,  error}) =>{
                reject(error)
            })
            localStorage.setItem("accessToken", "")
            localStorage.setItem("refreshToken", "")
            return Promise.reject(error);
        }finally {
            failedRequests = [];
            isTokenRefreshing = false
        }
        return  axiosInstance(originalRequestConfig)

    }
)
export default axiosInstance;