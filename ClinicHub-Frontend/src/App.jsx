import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import Dashboard from './pages/dashboard/Dashboard'
import DashboardDoctor from './pages/dashboard/DashboardDoctor'

import Specialization from './pages/doctor/Specialization'
import SubSpecialization from './pages/doctor/SubSpecialization'

import AppointmentsManage from './pages/appointments/AppointmentsManage'
import AppointmentCreate from './pages/appointments/AppointmentCreate'
import CheckIn from './pages/appointments/CheckIn'

import Consultation from './pages/patientCare/Consultation'

import Patient from './pages/patientCare/Patient'
import DoctorSchedule from './pages/patientCare/DoctorSchedule'
import Queue from './pages/patientCare/Queue'

import Employee from './pages/hr/Employee'
import Department from './pages/hr/Department'

import UsersManagement from './pages/administration/UsersManagement'
import Roles from './pages/administration/Roles'
import Permissions from './pages/administration/Permissions'
import Activity from './pages/administration/Activity'

import Login from './pages/loginRegister/Login'
import NotFound from './pages/errors/NotFound'

import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import PermissionRoute from "./components/auth/PermissionRoute";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route element={<PermissionRoute permission="dashboard.view" />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route element={<PermissionRoute permission="doctor_dashboard.view" />}>
              <Route path="/dashboard-doctor" element={<DashboardDoctor />} />
            </Route>

            <Route path="/consultation" element={<Consultation />} />

            <Route path="/doctor/specialization" element={<Specialization />} />
            <Route path="/doctor/sub-specialization" element={<SubSpecialization />} />

            <Route path="/appointment/manage" element={<AppointmentsManage />} />
            <Route path="/appointment-create" element={<AppointmentCreate />} />
            <Route path="/appointment/check-in" element={<CheckIn />} />

            <Route path="/patient-care/patients" element={<Patient />} />
            <Route path="/patient-care/doctor-schedule" element={<DoctorSchedule />} />
            <Route path="/patient-care/queue" element={<Queue />} />
            
            <Route element={<PermissionRoute permission="employees.view" />}>
              <Route path="/hr/employees" element={<Employee />} />
            </Route>
            <Route element={<PermissionRoute permission="dept.view" />}>
              <Route path="/hr/department" element={<Department />} />
            </Route>

            <Route element={<PermissionRoute permission="users.view" />}>
              <Route path="/administration/users" element={<UsersManagement />} />
            </Route>
            <Route element={<PermissionRoute permission="roles.view" />}>
              <Route path="/administration/roles" element={<Roles />} />
            </Route>
            <Route element={<PermissionRoute permission="permission.view" />}>
              <Route path="/administration/permissions" element={<Permissions />} />
            </Route>
            <Route path="/administration/activity" element={<Activity />} />

          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter >

  )
}

export default App