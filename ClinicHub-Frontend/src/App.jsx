import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/dashboard/Dashboard'
import DashboardDoctor from './pages/dashboard/DashboardDoctor'

import DoctorManage from './pages/doctor/DoctorManage'
import Department from './pages/doctor/Department'
import Specialization from './pages/doctor/Specialization'
import SubSpecialization from './pages/doctor/SubSpecialization'

import AppointmentsManage from './pages/appointments/AppointmentsManage'
import AppointmentCreate from './pages/appointments/AppointmentCreate'
import CheckIn from './pages/appointments/CheckIn'

import Consultation from './pages/patientCare/Consultation'

import Patient from './pages/patientCare/Patient'
import DoctorSchedule from './pages/patientCare/DoctorSchedule'
import Queue from './pages/patientCare/Queue'

import UsersManagement from './pages/administration/UsersManagement'
import Roles from './pages/administration/Roles'
import Permissions from './pages/administration/Permissions'
import Activity from './pages/administration/Activity'

import Login from './pages/loginRegister/Login'

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard-doctor" element={<DashboardDoctor />} />

            <Route path="/consultation" element={<Consultation />} />

            <Route path="/doctor/manage" element={<DoctorManage />} />
            <Route path="/doctor/department" element={<Department />} />
            <Route path="/doctor/specialization" element={<Specialization />} />
            <Route path="/doctor/sub-specialization" element={<SubSpecialization />} />

            <Route path="/appointment/manage" element={<AppointmentsManage />} />
            <Route path="/appointment-create" element={<AppointmentCreate />} />
            <Route path="/appointment/check-in" element={<CheckIn />} />

            <Route path="/patient-care/patients" element={<Patient />} />
            <Route path="/patient-care/doctor-schedule" element={<DoctorSchedule />} />
            <Route path="/patient-care/queue" element={<Queue />} />

            <Route path="/administration/users" element={<UsersManagement />} />
            <Route path="/administration/roles" element={<Roles />} />
            <Route path="/administration/permissions" element={<Permissions />} />
            <Route path="/administration/activity" element={<Activity />} />

          </Route>
        </Route>


      </Routes>
    </BrowserRouter>

  )
}

export default App