import "../../assets/css/DashboardDoctor.css"

export default function DashboardDoctor() {
    return (
        <>
            <div className="container-fluid cm-container">

                <div className="row g-gutter">

                    {/* <!-- Welcome Section --> */}
                    <div className="col-12">
                        <section className="cm-card cm-welcome d-flex flex-column flex-md-row gap-lg align-items-center">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEsBoyK9wFLm6lQO8RFldHVKPuKHFwL9rXKFnusmOnkLGqd_rUd1K_Ucznd_akuvV7dEVw4bflFiqw-Zk-hlEUPKR5Ebnt3LnwpTf-n7ZaRhcsGBwsg3qKzKCOsVjvxYFDa5GmF9dYdMCY5Dc-6BfEJM1x0BJfhluS_kT8Tbzc6bnjZwfcb0PMIqVhvGctaduiGM8ONNn0QphA_mVOrmKMFUyLJAoltcoEEE9Wwv0Nweuq8nqisRGN"
                                className="cm-avatar-lg flex-shrink-0"
                                alt="Portrait of Dr. Sarah Ahmed, cardiologist" />
                            <div className="flex-grow-1 text-center text-md-start">
                                <h2 className="cm-welcome-title mb-2">Good Morning, Dr. Sarah Ahmed</h2>
                                <div className="d-flex flex-wrap gap-xs justify-content-center justify-content-md-start mb-sm">
                                    <span className="cm-badge cm-badge-primary">Cardiology</span>
                                    <span className="cm-badge cm-badge-secondary">Interventional Cardiology</span>
                                    <span className="cm-badge cm-badge-tertiary">Consultant Cardiologist</span>
                                </div>
                                <p className="cm-welcome-bio mx-auto mx-md-0 mb-0">
                                    Dedicated Consultant Cardiologist with over 15 years of experience in diagnosing and treating
                                    complex cardiovascular conditions. Specializing in interventional cardiology and advanced
                                    patient care protocols.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* <!-- Stat Cards --> */}
                    <div className="col-12">
                        <div className="row g-gutter">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="cm-stat-card">
                                    <div>
                                        <p className="cm-stat-label mb-0">Today's Appointments</p>
                                        <div className="d-flex align-items-end gap-sm">
                                            <span className="cm-stat-value">12</span>
                                            <span className="cm-stat-delta"><span className="material-symbols-outlined">arrow_upward</span>5%</span>
                                        </div>
                                    </div>
                                    <div className="cm-stat-icon cm-stat-icon-primary">
                                        <span className="material-symbols-outlined">event</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="cm-stat-card">
                                    <div>
                                        <p className="cm-stat-label mb-0">Total Patients</p>
                                        <div className="d-flex align-items-end gap-sm">
                                            <span className="cm-stat-value">1,450</span>
                                        </div>
                                    </div>
                                    <div className="cm-stat-icon cm-stat-icon-secondary">
                                        <span className="material-symbols-outlined">groups</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="cm-stat-card">
                                    <div>
                                        <p className="cm-stat-label mb-0">Pending Reports</p>
                                        <div className="d-flex align-items-end gap-sm">
                                            <span className="cm-stat-value">8</span>
                                        </div>
                                    </div>
                                    <div className="cm-stat-icon cm-stat-icon-error">
                                        <span className="material-symbols-outlined">assignment_late</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="cm-stat-card">
                                    <div>
                                        <p className="cm-stat-label mb-0">Completed Consultations</p>
                                        <div className="d-flex align-items-end gap-sm">
                                            <span className="cm-stat-value">115</span>
                                        </div>
                                    </div>
                                    <div className="cm-stat-icon cm-stat-icon-tertiary">
                                        <span className="material-symbols-outlined">fact_check</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Middle Section: Schedule & Table --> */}
                    <div className="col-12 col-lg-8">
                        <div className="d-flex flex-column gap-lg">

                            {/* <!-- Today's Schedule --> */}
                            <section className="cm-card p-md">
                                <div className="cm-card-header">
                                    <h3 className="cm-card-title">Today's Schedule</h3>
                                    <button type="button" className="cm-link-btn">View All</button>
                                </div>
                                <div className="cm-timeline">
                                    <div className="cm-timeline-item">
                                        <div className="cm-timeline-time">09:00 AM</div>
                                        <div className="cm-timeline-dot cm-timeline-dot-primary d-none d-sm-block"></div>
                                        <div className="cm-timeline-card">
                                            <div>
                                                <p className="cm-patient-name">John Doe</p>
                                                <p className="cm-patient-sub">Follow-up</p>
                                            </div>
                                            <span className="cm-badge cm-badge-tertiary align-self-start align-self-sm-auto">Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="cm-timeline-item">
                                        <div className="cm-timeline-time">10:00 AM</div>
                                        <div className="cm-timeline-dot cm-timeline-dot-secondary d-none d-sm-block"></div>
                                        <div className="cm-timeline-card">
                                            <div>
                                                <p className="cm-patient-name">Sarah Khan</p>
                                                <p className="cm-patient-sub">New Patient</p>
                                            </div>
                                            <span className="cm-badge cm-badge-tertiary align-self-start align-self-sm-auto">Confirmed</span>
                                        </div>
                                    </div>
                                    <div className="cm-timeline-item cm-timeline-item-muted">
                                        <div className="cm-timeline-time">11:30 AM</div>
                                        <div className="cm-timeline-dot cm-timeline-dot-muted d-none d-sm-block"></div>
                                        <div className="cm-timeline-card">
                                            <div>
                                                <p className="cm-patient-name">Ahmed Rahman</p>
                                                <p className="cm-patient-sub">Consultation</p>
                                            </div>
                                            <span className="cm-badge cm-badge-muted align-self-start align-self-sm-auto">Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* <!-- Upcoming Appointments Table --> */}
                            <section className="cm-card p-md">
                                <div className="cm-card-header">
                                    <h3 className="cm-card-title">Upcoming Appointments</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table cm-table">
                                        <thead>
                                            <tr>
                                                <th>Patient</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Type</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="fw-medium">Michael Chang</td>
                                                <td className="cm-mono">Oct 24, 2023</td>
                                                <td className="cm-mono">02:00 PM</td>
                                                <td>ECG Review</td>
                                                <td><span className="cm-status-pill cm-status-scheduled">Scheduled</span></td>
                                                <td className="text-end">
                                                    <button type="button" className="cm-row-action" title="View">
                                                        <span className="material-symbols-outlined cm-icon-sm">visibility</span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="fw-medium">Emily Davis</td>
                                                <td className="cm-mono">Oct 25, 2023</td>
                                                <td className="cm-mono">09:30 AM</td>
                                                <td>Initial Consult</td>
                                                <td><span className="cm-status-pill cm-status-scheduled">Scheduled</span></td>
                                                <td className="text-end">
                                                    <button type="button" className="cm-row-action" title="View">
                                                        <span className="material-symbols-outlined cm-icon-sm">visibility</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                        </div>
                    </div>

                    {/* <!-- Right Section: Info & Actions --> */}
                    <div className="col-12 col-lg-4">
                        <div className="d-flex flex-column gap-lg">

                            {/* <!-- Doctor Info Card --> */}
                            <section className="cm-info-card">
                                <h3 className="cm-info-title">Doctor Information</h3>
                                <ul className="cm-info-list">
                                    <li>
                                        <span className="cm-info-label">Qualification</span>
                                        <span className="cm-info-value">MBBS, MD (Cardiology)</span>
                                    </li>
                                    <li>
                                        <span className="cm-info-label">BMDC Reg</span>
                                        <span className="cm-mono">A-12345</span>
                                    </li>
                                    <li>
                                        <span className="cm-info-label">Experience</span>
                                        <span className="cm-info-value">15+ Years</span>
                                    </li>
                                    <li>
                                        <span className="cm-info-label">Consultation Fee</span>
                                        <span className="cm-mono">$150</span>
                                    </li>
                                    <li>
                                        <span className="cm-info-label">Room No.</span>
                                        <span className="cm-mono">402 (4th Floor)</span>
                                    </li>
                                </ul>
                            </section>

                            {/* <!-- Quick Actions --> */}
                            <section className="cm-card p-md">
                                <div className="cm-card-header">
                                    <h3 className="cm-card-title">Quick Actions</h3>
                                </div>
                                <div className="row g-sm">
                                    <div className="col-6">
                                        <button type="button" className="cm-quick-action cm-quick-action-primary" data-bs-toggle="modal" data-bs-target="#addAppointmentModal">
                                            <span className="material-symbols-outlined">add_circle</span>
                                            Add Appointment
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="cm-quick-action">
                                            <span className="material-symbols-outlined">group</span>
                                            View Patients
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="cm-quick-action">
                                            <span className="material-symbols-outlined">edit_calendar</span>
                                            Update Schedule
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="cm-quick-action">
                                            <span className="material-symbols-outlined">prescriptions</span>
                                            Create Rx
                                        </button>
                                    </div>
                                </div>
                            </section>

                            {/* <!-- Notifications Feed --> */}
                            <section className="cm-card p-md flex-grow-1">
                                <div className="cm-card-header">
                                    <h3 className="cm-card-title">Recent Notifications</h3>
                                    <span className="cm-notif-badge">3</span>
                                </div>
                                <ul className="list-unstyled d-flex flex-column gap-sm mb-0">
                                    <li className="cm-notif-item">
                                        <span className="cm-notif-icon cm-notif-icon-secondary">
                                            <span className="material-symbols-outlined">bookmark_added</span>
                                        </span>
                                        <div>
                                            <p className="cm-notif-title">New booking confirmed</p>
                                            <p className="cm-notif-meta">Patient: Alex Johnson • 10m ago</p>
                                        </div>
                                    </li>
                                    <li className="cm-notif-item">
                                        <span className="cm-notif-icon cm-notif-icon-error">
                                            <span className="material-symbols-outlined">event_busy</span>
                                        </span>
                                        <div>
                                            <p className="cm-notif-title">Appointment cancelled</p>
                                            <p className="cm-notif-meta">Patient: Mary Smith • 1h ago</p>
                                        </div>
                                    </li>
                                    <li className="cm-notif-item">
                                        <span className="cm-notif-icon cm-notif-icon-primary">
                                            <span className="material-symbols-outlined">forum</span>
                                        </span>
                                        <div>
                                            <p className="cm-notif-title">Follow-up request</p>
                                            <p className="cm-notif-meta">Patient: Robert Lee • 2h ago</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                        </div>
                    </div>

                </div>
            </div>


            {/* <!-- Add Appointment Modal (Bootstrap modal — no popup existed in source markup, so a
     minimal one is provided to back the "Add Appointment" quick action). --> */}
            <div className="modal fade" id="addAppointmentModal" tabindex="-1" aria-labelledby="addAppointmentModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addAppointmentModalLabel">Add Appointment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="patientName" className="form-label">Patient Name</label>
                                    <input type="text" className="form-control" id="patientName" placeholder="Enter patient name" />
                                </div>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <label for="apptDate" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="apptDate" />
                                    </div>
                                    <div className="col-6">
                                        <label for="apptTime" className="form-label">Time</label>
                                        <input type="time" className="form-control" id="apptTime" />
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label for="apptType" className="form-label">Appointment Type</label>
                                    <select className="form-select" id="apptType">
                                        <option>Follow-up</option>
                                        <option>New Patient</option>
                                        <option>Consultation</option>
                                        <option>ECG Review</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Save Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
