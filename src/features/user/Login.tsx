import {useState} from 'react'
import {Link} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import apiClient from '../../app/api'

function Login(){

    const INITIAL_LOGIN_OBJ = {
        username : "",
        password : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = async (e) =>{
        e.preventDefault()
        setErrorMessage("")

        if(loginObj.username.trim() === "")return setErrorMessage("用户名不能为空")
        if(loginObj.password.trim() === "")return setErrorMessage("密码不能为空")
        
        setLoading(true)
        try {
            // 调用登录接口
            const response = await apiClient.post('/login', {
                username: loginObj.username,
                password: loginObj.password
            })
            
            // 登录成功，保存 token 和用户信息
            const { token, user } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("userEmail", user?.email || loginObj.username)
            localStorage.setItem("userName", user?.name || loginObj.username)
            
            // 跳转到欢迎页
            window.location.href = '/app/welcome'
        } catch (error) {
            // 处理登录失败
            if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message)
            } else if (error.response?.status === 401) {
                setErrorMessage("用户名或密码错误")
            } else {
                setErrorMessage("登录失败，请检查网络连接")
            }
        } finally {
            setLoading(false)
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }

    return(
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">
                <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className=''>
                        <LandingIntro />
                </div>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>登录</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText type="text" defaultValue={loginObj.username} updateType="username" containerStyle="mt-4" labelTitle="用户名" updateFormValue={updateFormValue}/>

                            <InputText defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="密码" updateFormValue={updateFormValue}/>

                        </div>

                        <div className='text-right text-primary'><Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">忘记密码?</span></Link>
                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>登录</button>

                        <div className='text-center mt-4'>还没有账号? <Link to="/register"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">注册</span></Link></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login