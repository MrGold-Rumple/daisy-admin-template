import { themeChange } from 'theme-change'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BellIcon  from '@heroicons/react/24/outline/BellIcon'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { openRightDrawer } from '../features/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'
import { Link } from 'react-router-dom'
import type { RootState } from '../types'

// 主题颜色定义（从 index.css 中的 OKLCH 转换而来）
const THEME_COLORS = {
    // Light themes
    light: { primary: '#570df8', secondary: '#f000b8', accent: '#37cdbe', neutral: '#3d4451' },
    cupcake: { primary: '#5fcdcb', secondary: '#f5a0c4', accent: '#f5b961', neutral: '#4a3f4d' },
    cyberpunk: { primary: '#ff00ff', secondary: '#00ffff', accent: '#fff700', neutral: '#171717' },
    retro: { primary: '#ef4444', secondary: '#9d38d6', accent: '#36c9b0', neutral: '#3e363e' },
    silk: { primary: '#4d6bfe', secondary: '#a78bfa', accent: '#fbbf24', neutral: '#1c1c1c' },
    caramellatte: { primary: '#000000', secondary: '#8f6022', accent: '#d4a373', neutral: '#8b5a2b' },
    nord: { primary: '#5e7c9a', secondary: '#7eb8e2', accent: '#a3d4e6', neutral: '#4c566a' },
    lemonade: { primary: '#84cc16', secondary: '#facc15', accent: '#a3e635', neutral: '#3e3e3e' },
    autumn: { primary: '#c2410c', secondary: '#ea580c', accent: '#f59e0b', neutral: '#78716c' },
    // Dark themes
    dark: { primary: '#a991f8', secondary: '#f000b8', accent: '#37cdbe', neutral: '#2a2e37' },
    dracula: { primary: '#ff79c6', secondary: '#bd93f9', accent: '#8be9fd', neutral: '#282a36' },
    synthwave: { primary: '#ff75b1', secondary: '#e03071', accent: '#f9c22e', neutral: '#1a1033' },
    abyss: { primary: '#00ffc8', secondary: '#6b7fff', accent: '#ff7f50', neutral: '#10111a' },
    sunset: { primary: '#e8915c', secondary: '#f04c4c', accent: '#b87bec', neutral: '#1e1e2e' },
    dim: { primary: '#e6d8ac', secondary: '#d49a64', accent: '#c8a463', neutral: '#242627' },
    night: { primary: '#38bdf8', secondary: '#ec4899', accent: '#6ee7b7', neutral: '#111827' },
    coffee: { primary: '#db9254', secondary: '#5d8a9a', accent: '#7d9bb8', neutral: '#1a1512' },
    forest: { primary: '#22c55e', secondary: '#ea580c', accent: '#f59e0b', neutral: '#0f1a0f' },
} as const

// 渲染色卡组件
const ColorSwatch = ({ theme }: { theme: keyof typeof THEME_COLORS }) => {
    const colors = THEME_COLORS[theme]
    if (!colors) return null
    return (
        <span className="flex overflow-hidden rounded">
            <span className="w-2 h-5" style={{ backgroundColor: colors.primary }}></span>
            <span className="w-2 h-5" style={{ backgroundColor: colors.secondary }}></span>
            <span className="w-2 h-5" style={{ backgroundColor: colors.accent }}></span>
            <span className="w-2 h-5" style={{ backgroundColor: colors.neutral }}></span>
        </span>
    )
}


function Header(){

    const dispatch = useDispatch()
    const {noOfNotifications, pageTitle} = useSelector((state: RootState) => state.header)
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))
    const [userEmail] = useState(localStorage.getItem("userEmail") || "U")

    // 获取用户首字母
    const userInitial = userEmail.charAt(0).toUpperCase()

    useEffect(() => {
        themeChange(false)
        if(currentTheme === null){
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
                setCurrentTheme("dark")
            }else{
                setCurrentTheme("light")
            }
        }
        // 👆 false parameter is required for react project
      }, [])


    // Opening right sidebar for notification
    const openNotification = () => {
        dispatch(openRightDrawer({header : "Notifications", bodyType : RIGHT_DRAWER_TYPES.NOTIFICATION}))
    }


    function logoutUser(){
        localStorage.clear();
        window.location.href = '/'
    }

    return(
        // navbar fixed  flex-none justify-between bg-base-300  z-10 shadow-md
        
        <>
            <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">


                {/* Menu toogle for mobile view or small screen */}
                <div className="flex-1">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <Bars3Icon className="h-5 inline-block w-5"/></label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>

                

            <div className="flex-none ">

                {/* Theme selection dropdown */}
                <div className="dropdown dropdown-end mr-2">
                    <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </label>
                    <div tabIndex={0} className="dropdown-content z-[100] p-4 shadow-xl bg-base-200 rounded-box">
                        <div className="flex gap-8">
                            {/* Light - 左列 */}
                            <div className="flex flex-col gap-2">
                                <span className="text-base font-bold mb-1 text-center">Light</span>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="light" data-act-class="active"><span>Default</span><ColorSwatch theme="light" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="cupcake" data-act-class="active"><span>Cupcake</span><ColorSwatch theme="cupcake" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="cyberpunk" data-act-class="active"><span>Cyberpunk</span><ColorSwatch theme="cyberpunk" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="retro" data-act-class="active"><span>Retro</span><ColorSwatch theme="retro" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="silk" data-act-class="active"><span>Silk</span><ColorSwatch theme="silk" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="caramellatte" data-act-class="active"><span>Caramel</span><ColorSwatch theme="caramellatte" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="nord" data-act-class="active"><span>Nord</span><ColorSwatch theme="nord" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="lemonade" data-act-class="active"><span>Lemonade</span><ColorSwatch theme="lemonade" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="autumn" data-act-class="active"><span>Autumn</span><ColorSwatch theme="autumn" /></button>
                            </div>
                            {/* Dark - 右列 */}
                            <div className="flex flex-col gap-2">
                                <span className="text-base font-bold mb-1 text-center">Dark</span>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="dark" data-act-class="active"><span>Dark</span><ColorSwatch theme="dark" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="dracula" data-act-class="active"><span>Dracula</span><ColorSwatch theme="dracula" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="synthwave" data-act-class="active"><span>Synthwave</span><ColorSwatch theme="synthwave" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="abyss" data-act-class="active"><span>Abyss</span><ColorSwatch theme="abyss" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="sunset" data-act-class="active"><span>Sunset</span><ColorSwatch theme="sunset" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="dim" data-act-class="active"><span>Dim</span><ColorSwatch theme="dim" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="night" data-act-class="active"><span>Night</span><ColorSwatch theme="night" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="coffee" data-act-class="active"><span>Coffee</span><ColorSwatch theme="coffee" /></button>
                                <button className="btn btn-ghost btn-sm justify-between" data-set-theme="forest" data-act-class="active"><span>Forest</span><ColorSwatch theme="forest" /></button>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Light and dark theme selection toggle */}
            <label className="swap mr-2">
                <input type="checkbox"/>
                <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-5 h-5 "+(currentTheme === "dark" || currentTheme === "dracula" || currentTheme === "synthwave" || currentTheme === "abyss" || currentTheme === "sunset" || currentTheme === "dim" || currentTheme === "night" || currentTheme === "coffee" || currentTheme === "forest" ? "swap-on" : "swap-off")}/>
                <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-5 h-5 "+(currentTheme === "light" || currentTheme === "cupcake" || currentTheme === "cyberpunk" || currentTheme === "retro" || currentTheme === "silk" || currentTheme === "caramellatte" || currentTheme === "nord" || currentTheme === "lemonade" || currentTheme === "autumn" ? "swap-on" : "swap-off")} />
            </label>


                {/* Notification icon */}
                <button className="btn btn-ghost ml-4  btn-circle" onClick={() => openNotification()}>
                    <div className="indicator">
                        <BellIcon className="h-6 w-6"/>
                        {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null }
                    </div>
                </button>


                {/* Profile icon, opening menu on click */}
                <div className="dropdown dropdown-end ml-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                        <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                            <span className="text-lg font-semibold">{userInitial}</span>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="justify-between">
                        <Link to={'/app/settings-profile'}>
                            Profile Settings
                            <span className="badge">New</span>
                            </Link>
                        </li>
                        <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li>
                        <div className="divider mt-0 mb-0"></div>
                        <li><a onClick={logoutUser}>Logout</a></li>
                    </ul>
                </div>
            </div>
            </div>

        </>
    )
}

export default Header