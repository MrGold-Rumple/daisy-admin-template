import axios from "axios"

// API 基础地址，从环境变量获取
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8080/api/v1/system"

// 创建 axios 实例
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

// 请求拦截器
apiClient.interceptors.request.use(
    (config) => {
        // 添加 token
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        
        // 显示加载指示器
        document.body.classList.add("loading-indicator")
        
        return config
    },
    (error) => {
        document.body.classList.remove("loading-indicator")
        return Promise.reject(error)
    }
)

// 响应拦截器
apiClient.interceptors.response.use(
    (response) => {
        document.body.classList.remove("loading-indicator")
        return response
    },
    (error) => {
        document.body.classList.remove("loading-indicator")
        
        // 处理常见错误
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 未授权，清除 token 并跳转登录
                    localStorage.clear()
                    window.location.href = "/login"
                    break
                case 403:
                    console.error("没有权限访问该资源")
                    break
                case 404:
                    console.error("请求的资源不存在")
                    break
                case 500:
                    console.error("服务器内部错误")
                    break
                default:
                    console.error(`请求错误: ${error.response.status}`)
            }
        } else if (error.request) {
            console.error("网络错误，请检查网络连接")
        } else {
            console.error("请求配置错误:", error.message)
        }
        
        return Promise.reject(error)
    }
)

export { API_BASE_URL }
export default apiClient
