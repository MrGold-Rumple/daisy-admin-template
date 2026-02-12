import apiClient, { API_BASE_URL } from "./api"

const initializeApp = () => {
    
    // API 基础地址已在 api.tsx 中配置
    // 可通过 API_BASE_URL 常量访问
    console.log("API Base URL:", API_BASE_URL)


    if (import.meta.env.DEV) {
        // dev code



    } else {
        // Prod build code



        // Removing console.log from prod
        console.log = () => {};


        // init analytics here
    }

}

export default initializeApp