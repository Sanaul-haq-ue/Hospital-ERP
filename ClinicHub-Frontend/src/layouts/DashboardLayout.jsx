import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function DashboardLayout() {

    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('isDark')
        return saved === 'true'
    })

    const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        const saved = localStorage.getItem('sidebarCollapsed')
        return saved === 'true'
    })

    // Whenever isDark changes, save it
    useEffect(() => {
        localStorage.setItem('isDark', isDark)
    }, [isDark])

    // Whenever sidebarCollapsed changes, save it
    useEffect(() => {
        localStorage.setItem('sidebarCollapsed', sidebarCollapsed)
    }, [sidebarCollapsed])

    const toggleDarkMode = () => setIsDark(prev => !prev)
    const toggleSidebar = () => setSidebarCollapsed(prev => !prev)

    return (
        <div data-theme={isDark ? 'dark' : 'light'}>
            <Navbar collapsed={sidebarCollapsed} />

            <div className={`main-wrapper ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`} id="main-content">
                <Header
                    isDark={isDark}
                    toggleDarkMode={toggleDarkMode}
                    sidebarCollapsed={sidebarCollapsed}
                    toggleSidebar={toggleSidebar}
                />
                <main className="main-canvas">
                    <Outlet  />
                </main>

            </div>
        </div>
    )
}