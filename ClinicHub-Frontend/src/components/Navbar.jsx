import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import api from '../api/axios';
import { hasPermission } from "../utils/permissions";

export default function Navbar({ collapsed }) {
    const location = useLocation();
    const navigate = useNavigate();

    const isChildActive = location.pathname.startsWith("/doctor");
    const isAdminActive = location.pathname.startsWith("/administration");
    const isFinanceActive = location.pathname.startsWith("/finance");
    const isPatientCareActive = location.pathname.startsWith("/patient-care");
    const isHrActive = location.pathname.startsWith("/hr");
    const isAppointmentActive = location.pathname.startsWith("/appointment");

    const [open, setOpen] = useState(isChildActive);
    const [adminOpen, setAdminOpen] = useState(isAdminActive);
    const [financeOpen, setFinanceOpen] = useState(isFinanceActive);
    const [patientCareOpen, setPatientCareOpen] = useState(isPatientCareActive);
    const [hrOpen, setHrOpen] = useState(isHrActive);
    const [appointmentOpen, setappointmentOpen] = useState(isAppointmentActive);

    const contentRef = useRef(null);
    const adminContentRef = useRef(null);
    const financeContentRef = useRef(null);
    const patientCareContentRef = useRef(null);
    const hrContentRef = useRef(null);
    const appointmentContentRef = useRef(null);

    useEffect(() => {
        setOpen(isChildActive);
        setAdminOpen(isAdminActive);
        setFinanceOpen(isFinanceActive);
        setPatientCareOpen(isPatientCareActive);
        setHrOpen(isHrActive);
        setappointmentOpen(isAppointmentActive);
    }, [
        isChildActive,
        isAdminActive,
        isFinanceActive,
        isPatientCareActive,
        isHrActive,
        isAppointmentActive
    ]);


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
        <nav className={`sidebar ${collapsed ? 'collapsed' : ''}`} id="sidebar" aria-label="Main Navigation">
            <div className="sidebar-brand">
                <div className="sidebar-logo">
                    <span className="material-symbols-outlined" data-weight="fill">medical_services</span>
                </div>
                <div>
                    <h1>Clinic</h1>
                    <p>Medical ERP</p>
                </div>
            </div>

            {/* <button className="btn-add-appt">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                Add Appointment
            </button> */}

            <NavLink to="/appointment-create"
                className={({ isActive }) => `btn-add-appt nav-link-item ${isActive ? "active" : ""}`}
            >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                <span className="text-label-md">Add Appointment</span>
            </NavLink>

            <div className="nav-links">
                {hasPermission("dashboard.view") && (
                    <NavLink to="/" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
                        <span className="material-symbols-outlined" data-weight="fill">dashboard</span>
                        <span className="text-label-md">Dashboard</span>
                    </NavLink>
                )}
                {hasPermission("doctor_dashboard.view") && (
                    <NavLink to="/dashboard-doctor" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
                        <span className="material-symbols-outlined" data-weight="fill">dashboard</span>
                        <span className="text-label-md">Doctor Dashboard</span>
                    </NavLink>
                )}

                <div className="nav-group">
                    <button
                        type="button"
                        className={`nav-link-toggle w-100 ${isChildActive ? "active" : ""}`}
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        <span className="material-symbols-outlined">medical_services</span>
                        <span className="text-label-md flex-grow-1">Doctors</span>
                        <span className={`material-symbols-outlined chevron ${open ? "rotated" : ""}`}>
                            expand_more
                        </span>
                    </button>

                    <div className="nav-submenu-wrap"
                        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight ?? 300}px` : "0px", }} >

                        <div className="nav-submenu" ref={contentRef}>
                            <NavLink to="/doctor/manage" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                Doctor Manage
                            </NavLink>
                            <NavLink to="/doctor/specialization" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                Specialization
                            </NavLink>
                            <NavLink to="/doctor/sub-specialization" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                Sub-specialization
                            </NavLink>
                        </div>
                    </div>
                </div>

                <NavLink to="/consultation" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
                    <span className="material-symbols-outlined">event</span>
                    <span className="text-label-md">Consultation</span>
                </NavLink>

                <div className="nav-group">
                    <button
                        type="button"
                        className={`nav-link-toggle w-100 ${isHrActive ? "active" : ""}`}
                        onClick={() => setappointmentOpen(!appointmentOpen)}
                        aria-expanded={appointmentOpen}
                    >
                        <span className="material-symbols-outlined">event</span>
                        <span className="text-label-md flex-grow-1"> Appointments </span>
                        <span className={`material-symbols-outlined chevron ${appointmentOpen ? "rotated" : ""}`} >
                            expand_more
                        </span>
                    </button>

                    <div className="nav-submenu-wrap" style={{ maxHeight: appointmentOpen ? `${appointmentContentRef.current?.scrollHeight ?? 300}px` : "0px", }} >
                        <div className="nav-submenu" ref={appointmentContentRef}>

                            <NavLink to="/appointment/manage" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Appointments Manage
                            </NavLink>
                            <NavLink to="/appointment/check-in" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Check - In
                            </NavLink>

                        </div>
                    </div>
                </div>

                <div className="nav-group">
                    <button
                        type="button"
                        className={`nav-link-toggle w-100 ${isPatientCareActive ? "active" : ""}`}
                        onClick={() => setPatientCareOpen(!patientCareOpen)}
                        aria-expanded={patientCareOpen}
                    >
                        <span className="material-symbols-outlined">group</span>
                        <span className="text-label-md flex-grow-1">
                            Patient Care
                        </span>
                        <span className={`material-symbols-outlined chevron ${patientCareOpen ? "rotated" : ""}`} >
                            expand_more
                        </span>
                    </button>

                    <div className="nav-submenu-wrap"
                        style={{ maxHeight: patientCareOpen ? `${patientCareContentRef.current?.scrollHeight ?? 300}px` : "0px", }} >

                        <div className="nav-submenu" ref={patientCareContentRef} >
                            <NavLink to="/patient-care/patients" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Patients Management
                            </NavLink>
                            <NavLink to="/patient-care/doctor-schedule" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Doctor Schedule
                            </NavLink>
                            <NavLink to="/patient-care/queue" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Queue
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="nav-group">
                    <button
                        type="button"
                        className={`nav-link-toggle w-100 ${isFinanceActive ? "active" : ""}`}
                        onClick={() => setFinanceOpen(!financeOpen)}
                        aria-expanded={financeOpen}
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-label-md flex-grow-1"> Finance </span>
                        <span className={`material-symbols-outlined chevron ${financeOpen ? "rotated" : ""}`} > expand_more </span>
                    </button>

                    <div className="nav-submenu-wrap" style={{ maxHeight: financeOpen ? `${financeContentRef.current?.scrollHeight ?? 300}px` : "0px", }} >
                        <div className="nav-submenu" ref={financeContentRef}>

                            <NavLink to="/finance/billing" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Billing
                            </NavLink>

                            <NavLink to="/finance/payments" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Payments
                            </NavLink>
                            <NavLink to="/finance/expenses" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Expenses
                            </NavLink>
                            <NavLink to="/finance/payments" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Reports
                            </NavLink>

                        </div>
                    </div>
                </div>

                <div className="nav-group">
                    <button
                        type="button"
                        className={`nav-link-toggle w-100 ${isHrActive ? "active" : ""}`}
                        onClick={() => setHrOpen(!hrOpen)}
                        aria-expanded={hrOpen}
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-label-md flex-grow-1"> HR </span>
                        <span className={`material-symbols-outlined chevron ${hrOpen ? "rotated" : ""}`} >
                            expand_more
                        </span>
                    </button>

                    <div className="nav-submenu-wrap" style={{ maxHeight: hrOpen ? `${hrContentRef.current?.scrollHeight ?? 300}px` : "0px", }} >
                        <div className="nav-submenu" ref={hrContentRef}>
                            {hasPermission("employees.view") && (
                                <NavLink to="/hr/employees" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                    Employees
                                </NavLink>
                            )}
                            {hasPermission("dept.view") && (
                                <NavLink to="/hr/department" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                    Department
                                </NavLink>
                            )}
                            <NavLink to="/hr/attendance" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Attendance
                            </NavLink>
                            <NavLink to="/hr/leave" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Leave
                            </NavLink>
                            <NavLink to="/hr/payroll" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`} >
                                Payroll
                            </NavLink>

                        </div>
                    </div>
                </div>

                <div className="nav-group">
                    <button type="button" className={`nav-link-toggle w-100 ${isAdminActive ? "active" : ""}`}
                        onClick={() => setAdminOpen(!adminOpen)} aria-expanded={adminOpen} >

                        <span className="material-symbols-outlined">event</span>
                        <span className="text-label-md flex-grow-1"> Administration </span>
                        <span className={`material-symbols-outlined chevron ${adminOpen ? "rotated" : ""}`} > expand_more </span>
                    </button>

                    <div className="nav-submenu-wrap" style={{ maxHeight: adminOpen ? `${adminContentRef.current?.scrollHeight ?? 300}px` : "0px", }} >
                        <div className="nav-submenu" ref={adminContentRef}>
                            {hasPermission("users.view") && (
                                <NavLink to="/administration/users" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                    Users
                                </NavLink>
                            )}
                            {hasPermission("roles.view") && (
                                <NavLink to="/administration/roles" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                    Roles
                                </NavLink>
                            )}
                            {hasPermission("permission.view") && (
                                <NavLink to="/administration/permissions" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                    Permissions
                                </NavLink>
                            )}
                            <NavLink to="/administration/activity" className={({ isActive }) => `nav-sublink ${isActive ? "active" : ""}`}>
                                User Activity
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-footer">
                {/* <a href="#" className="nav-link-item">
                    <span className="material-symbols-outlined">help</span>
                    <span className="text-label-md">Support</span>
                </a> */}
                <a href="#" className="nav-link-item logout" onClick={handleLogout}>
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text-label-md">Logout</span>
                </a>
            </div>
        </nav>
    )
}