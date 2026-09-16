import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function Header({ isDark, toggleDarkMode, sidebarCollapsed, toggleSidebar }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            const stored = localStorage.getItem('user')
            if (stored) {
                setUser(JSON.parse(stored))
            }
        } catch (e) {
            setUser(null)
        }
    }, [])

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await api.post('/logout');
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login', { state: { loggedOut: true } });
        }
    }


    return (
        <>
            {/* <!-- ===== Mobile header ===== --> */}
            <header className="mobile-header">
                <div className="mobile-brand">
                    <button className="icon-btn"><span className="material-symbols-outlined">menu</span></button>
                    <h2>ClinicHub</h2>
                </div>
                <div className="d-flex align-items-center gap-sm">
                    <button className="icon-btn"><span className="material-symbols-outlined">search</span></button>
                    <button className="icon-btn" onClick={toggleDarkMode}>
                        <span className="material-symbols-outlined theme-toggle-icon">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <button className="icon-btn"><span className="material-symbols-outlined">notifications</span></button>
                    <button className="icon-btn"><span className="material-symbols-outlined">apps</span></button>
                    <img className="avatar" alt="User profile"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwYYvEZYDdYxWFm2Q-MGGbCooqFGFPcI3JJgs6eIlW3oZtzOfcOLfi8Y7cLia0LL49lujoC9JXXshsjDIUebvvmeBPIKg4ePtlEpFRe3q4_vAYNr_Yf3wycKTtiyT6nyghQ34cB9ndSATgmIOjfxzzysQEvwLJSdCHQz9eCMOcJk0RWIC0EGJ_Pog4-1uFseDuqqG1JC6dfCzszQOBzgCKmj0CrSgXW2oD3SLzpmY2CtxDRxE_zJ0O" />
                </div>
            </header>

            {/* <!-- ===== Desktop header ===== --> */}
            <header className="desktop-header">
                <div className="d-flex align-items-center flex-grow-1 gap-md">
                    <button className="icon-btn" id="sidebar-toggle" onClick={toggleSidebar}>
                        <span className="material-symbols-outlined">
                            {sidebarCollapsed ? 'chevron_right' : 'menu'}
                        </span>
                    </button>
                    <div className="search-wrap">
                        <span className="material-symbols-outlined">search</span>
                        <input type="text" className="search-input" placeholder="Search patients, doctors, or ID..." />
                    </div>
                </div>

                <div className="d-flex align-items-center gap-md">
                    <button className="icon-btn" onClick={toggleDarkMode}>
                        <span className="material-symbols-outlined theme-toggle-icon">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    {/* <!-- Notifications --> */}
                    <div className="dropdown-wrap">
                        <button className="icon-btn" id="notif-button" style={{ position: 'relative' }}>
                            <span className="material-symbols-outlined">notifications</span>
                            <span style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', background: 'var(--error)', borderRadius: '50%' }}></span>
                        </button>
                        <div className="dropdown-menu-custom notif-dropdown" id="notification-dropdown">
                            <div className="notif-head">
                                <h3>Notifications</h3>
                                <button className="link-btn">Mark all as read</button>
                            </div>
                            <div className="notif-body">
                                <div className="notif-item">
                                    <p><strong>New Patient Reg:</strong> Sarah Connor</p>
                                    <p className="time">10 mins ago</p>
                                </div>
                                <div className="notif-item">
                                    <p><strong>Appt Completed:</strong> John Doe</p>
                                    <p className="time">25 mins ago</p>
                                </div>
                                <div className="notif-item" style={{ borderBottom: 'none' }}>
                                    <p><strong>Appt Cancelled:</strong> Emily Chen</p>
                                    <p className="time">1 hour ago</p>
                                </div>
                            </div>
                            <div className="notif-foot">
                                <button className="link-btn" style={{ width: '100%' }}>View all notifications</button>
                            </div>
                        </div>
                    </div>

                    <button className="icon-btn"><span className="material-symbols-outlined">apps</span></button>
                    <div className="divider-v"></div>

                    {/* <!-- Profile --> */}
                    <div className="profile-group">
                        <button className="profile-trigger">
                            <img className="avatar" style={{ marginLeft: 0 }} alt="Account Switcher"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMbDtdmzo27ud1S5ivt5Rk2p_R2pJOEkSg2euUR9EG1hk3xlG1KjmRG313wlBSG8OO9M09Y-8crRmSCUGoticLWdDQxGZxWZAuWUTAcGAyBtYEn_xkQ-qZH4cmEyI-IsQpxdsaZ5HDer8ES_GWE-wL6qRqy79iEZqp4Ir1RzHEJXE8-Vut822mbpp2-OIVh7-iH1etNcr_0bYhfSvnDSX_w6Joo1pc2sl0FMBg9Xbdg_kzc8zX8PoW" />
                            <span className="material-symbols-outlined text-outline-tok">expand_more</span>
                        </button>
                        <div className="dropdown-menu-custom profile-menu">
                            <a style={{ alignItems: 'center', fontSize: '16px', fontWeight: '600', color: 'red' }}><span>{user?.name || 'Undefine'}</span></a>
                            <a href="#"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person</span><span>Profile</span></a>
                            <a href="#"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span><span>Settings</span></a>
                            <div className="menu-div"></div>
                            <a href="#" className="logout" onClick={handleLogout}><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span><span>Logout</span></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}