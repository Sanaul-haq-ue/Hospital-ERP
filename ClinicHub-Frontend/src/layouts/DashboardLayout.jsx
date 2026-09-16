import { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function DashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const hasShownToast = useRef(false);

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

    useEffect(() => {
        if (location.state?.loggedIn && !hasShownToast.current) {
            hasShownToast.current = true;
            toast.success('Login successful');
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);


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
                    <Outlet />
                </main>

            </div>
        </div>
    )
}