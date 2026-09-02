import "../../assets/css/CheckIn.css"

export default function CheckIn() {
    return (
        <>
            <main className="container-fluid p-3 p-md-4 p-lg-5">
                <div className="mx-auto max-w-page d-flex flex-column gap-4">

                    {/* <!-- Page Header --> */}
                    <div className="d-flex justify-content-between align-items-start gap-3">
                        <div>
                            <h2 className="checkin-title">Patient Check-in</h2>
                            <p className="checkin-subtitle">Check in patients when they arrive for their scheduled appointments.</p>
                        </div>
                        <button type="button" className="theme-toggle-fab" id="themeToggleBtn" aria-label="Toggle dark mode">
                            <span className="material-symbols-outlined" id="themeToggleIcon">dark_mode</span>
                        </button>
                    </div>

                    {/* <!-- Summary Cards --> */}
                    <div className="row g-3">
                        <div className="col-6 col-xl-3">
                            <div className="summary-tile">
                                <span className="summary-tile-label">Today's Appointments</span>
                                <span className="summary-tile-value tone-primary">24</span>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3">
                            <div className="summary-tile">
                                <span className="summary-tile-label">Checked In</span>
                                <span className="summary-tile-value tone-tertiary">12</span>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3">
                            <div className="summary-tile">
                                <span className="summary-tile-label">Waiting</span>
                                <span className="summary-tile-value tone-primary-dim">8</span>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3">
                            <div className="summary-tile">
                                <span className="summary-tile-label">Not Arrived</span>
                                <span className="summary-tile-value tone-muted">4</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Search & Filters --> */}
                    <div className="filters-bar">
                        <div className="row g-2 align-items-center">
                            <div className="col-12 col-xl">
                                <div className="search-field-wrap">
                                    <span className="material-symbols-outlined">search</span>
                                    <input type="text" className="form-control" placeholder="Search by appointment ID, patient name or phone..." />
                                </div>
                            </div>
                            <div className="col-6 col-sm-3 col-xl-auto">
                                <select className="form-select filter-select w-100">
                                    <option>Date: Today</option>
                                    <option>Date: Tomorrow</option>
                                </select>
                            </div>
                            <div className="col-6 col-sm-3 col-xl-auto">
                                <select className="form-select filter-select w-100">
                                    <option>Doctor: All Doctors</option>
                                    <option>Dr. Ahmed Khan</option>
                                </select>
                            </div>
                            <div className="col-6 col-sm-3 col-xl-auto">
                                <select className="form-select filter-select w-100">
                                    <option>Status: Eligible</option>
                                    <option>Status: All</option>
                                </select>
                            </div>
                            <div className="col-6 col-sm-3 col-xl-auto">
                                <select className="form-select filter-select w-100">
                                    <option>Check-in: All</option>
                                    <option>Pending</option>
                                    <option>Checked In</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Appointment List Table --> */}
                    <div className="checkin-table-card">
                        <div className="table-scroll-checkin">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Appointment ID</th>
                                        <th>Patient</th>
                                        <th>Doctor</th>
                                        <th>Time</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Check-in Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- Row 1: Ready to Check-in --> */}
                                    <tr>
                                        <td className="appt-id">APT-000124</td>
                                        <td>
                                            <div className="patient-row-cell">
                                                <img className="patient-avatar-sm" alt="Md. Rahim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyi7XcuR8pgmWqB6TxhbnzVYmU0-fgp8pM0-G5o6qKSKcyXK03YAyKsI0EPJ5iROUSKDOdVenPNkI9lWh__Zbd6KqfOkWVAI51ayrygf16WrUtUCT3CJe4kemzdww5VPRMZtDmhJKqH06ASJo6wm7UAktbQ4z-bfeMX-Vlc4-lJbJpg9ZJ-5VEBiK5NM9CYHRtbsxHtEC1_E6iaUgIyqB9Y8yeXN4Dn1-A2j_eNdujxGYWJzt7jgFv" />
                                                <div>
                                                    <p className="checkin-patient-name">Md. Rahim</p>
                                                    <p className="checkin-patient-id">P-000124</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="doctor-name-cell">Dr. Ahmed Khan</p>
                                            <p className="doctor-specialty-cell">Cardiology</p>
                                        </td>
                                        <td className="text-nowrap">5:20 PM</td>
                                        <td><span className="type-pill type-pill-followup">Follow-up</span></td>
                                        <td><span className="status-pill-confirmed">Confirmed</span></td>
                                        <td>
                                            <span className="checkin-status-pending">
                                                <span className="dot"></span>
                                                Not Checked In
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <button type="button" className="icon-btn-checkin" title="View Details" data-bs-toggle="modal" data-bs-target="#detailsModal">
                                                    <span className="material-symbols-outlined icon-18">visibility</span>
                                                </button>
                                                <button type="button" className="btn-checkin-action" data-bs-toggle="modal" data-bs-target="#confirmModal">
                                                    <span className="material-symbols-outlined icon-18">how_to_reg</span>
                                                    Check In
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- Row 2: Already Checked In (Success State) --> */}
                                    <tr className="row-checked-in">
                                        <td className="appt-id">APT-000125</td>
                                        <td>
                                            <div className="patient-row-cell">
                                                <img className="patient-avatar-sm" alt="Sarah Connor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBy7JyPjFjXKE_QQRzSeXf0t0JpdCCUziiamivte4Jo4HeSnvmRrhy9TV_R9o33pgRUM6j5DfZkjdCKdbSkZorQLSKKNpCleGaaKsjYs1wquwYGVxBGnhavbiAWAv1JMyVMxScQYLsEEQH8dADw8RC41ndpw28arbhrgrB1gPPEVu7vg2jEYSolhWyDCUmd6TzmEh4RsyswVM3j30-zeEQFFZnKFmWbAV9mpFsbpaAJRUIVsX_UgED" />
                                                <div>
                                                    <p className="checkin-patient-name">Sarah Connor</p>
                                                    <p className="checkin-patient-id">P-000289</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="doctor-name-cell">Dr. Jane Smith</p>
                                            <p className="doctor-specialty-cell">Neurology</p>
                                        </td>
                                        <td className="text-nowrap">5:45 PM</td>
                                        <td><span className="type-pill type-pill-new">New</span></td>
                                        <td><span className="status-pill-confirmed">Confirmed</span></td>
                                        <td>
                                            <div className="d-flex flex-column gap-1">
                                                <span className="checkin-status-done">
                                                    <span className="material-symbols-outlined">check_circle</span>
                                                    Checked In 10:12 AM
                                                </span>
                                                <span className="checkin-queue-tag">Queue: Q-008</span>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <button type="button" className="icon-btn-checkin" title="View Details">
                                                    <span className="material-symbols-outlined icon-18">visibility</span>
                                                </button>
                                                <button type="button" className="btn-checkin-action is-disabled" disabled>
                                                    <span className="material-symbols-outlined icon-18">how_to_reg</span>
                                                    Checked In
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- Row 3: Not Arrived yet --> */}
                                    <tr>
                                        <td className="appt-id">APT-000126</td>
                                        <td>
                                            <div className="patient-row-cell">
                                                <div className="avatar-initials-checkin">JD</div>
                                                <div>
                                                    <p className="checkin-patient-name">John Doe</p>
                                                    <p className="checkin-patient-id">P-000412</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="doctor-name-cell">Dr. Ahmed Khan</p>
                                            <p className="doctor-specialty-cell">Cardiology</p>
                                        </td>
                                        <td className="text-nowrap">6:10 PM</td>
                                        <td><span className="type-pill type-pill-followup">Follow-up</span></td>
                                        <td><span className="status-pill-confirmed">Confirmed</span></td>
                                        <td>
                                            <span className="checkin-status-pending">
                                                <span className="dot"></span>
                                                Not Checked In
                                            </span>
                                        </td>
                                        <td className="text-end">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <button type="button" className="icon-btn-checkin" title="View Details">
                                                    <span className="material-symbols-outlined icon-18">visibility</span>
                                                </button>
                                                <button type="button" className="btn-checkin-action">
                                                    <span className="material-symbols-outlined icon-18">how_to_reg</span>
                                                    Check In
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>

            {/* <!-- ============ Confirm Check-in Modal ============ --> */}
            <div className="modal fade checkin-page" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="confirmModalLabel">Confirm Check-in</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div>
                                <span className="modal-field-label">Patient</span>
                                <div className="modal-patient-summary">
                                    <img className="modal-patient-avatar" alt="Md. Rahim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZniXlXRQu7g7wZe0jW81j-zOdz5aMwh3FYBh_C5ipmM_YIkdD91rBgaWw-OeDzv4QKHroKcz5vvWdMnT9G02r5M6h1PMKlzseGwUJ9EdCpoqmgoKo19Zb_l3xOFdwsRBdvXlhiz3Z2SgfJlRLrwDgAEmGFt0bS4qdQWKCck3AAWPYs9hFgyn7uf-50RLNUukZE8zw1b3kl6RovXb7p474LIT7dspC_REbS_O9BpU8fbJ4Z0aZvXq4" />
                                    <div>
                                        <p className="modal-field-value strong">Md. Rahim</p>
                                        <p className="modal-patient-meta">ID: P-000124 | APT: APT-000124</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 modal-dashed-divider">
                                <div className="col-6">
                                    <span className="modal-field-label">Doctor</span>
                                    <p className="modal-field-value strong">Dr. Ahmed Khan</p>
                                </div>
                                <div className="col-6">
                                    <span className="modal-field-label">Check-in Time</span>
                                    <p className="modal-field-value strong">Auto-generated</p>
                                </div>
                            </div>
                            <div className="modal-info-box">
                                <span className="material-symbols-outlined">info</span>
                                <p>The patient will be added to the waiting queue after check-in. This action will notify the doctor's chamber.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-clinic-ghost" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-clinic-primary d-inline-flex align-items-center gap-2" data-bs-dismiss="modal">
                                <span className="material-symbols-outlined icon-18">check</span>
                                Confirm Check-in
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ============ Appointment Details Modal ============ --> */}
            <div className="modal fade checkin-page" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h3 className="modal-title" id="detailsModalLabel">Appointment Details</h3>
                                <span className="modal-eyebrow">APT-000124</span>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-4">

                            {/* <!-- Patient Info --> */}
                            <div>
                                <h4 className="info-section-label">Patient Information</h4>
                                <div className="info-section-box row g-3">
                                    <div className="col-6">
                                        <span className="modal-field-label">Name</span>
                                        <p className="modal-field-value strong">Md. Rahim</p>
                                    </div>
                                    <div className="col-6">
                                        <span className="modal-field-label">Gender</span>
                                        <p className="modal-field-value">Male</p>
                                    </div>
                                    <div className="col-6">
                                        <span className="modal-field-label">Date of Birth</span>
                                        <p className="modal-field-value">12 March 1995</p>
                                    </div>
                                    <div className="col-6">
                                        <span className="modal-field-label">City</span>
                                        <p className="modal-field-value">Dhaka</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Doctor Info --> */}
                            <div>
                                <h4 className="info-section-label">Doctor Information</h4>
                                <div className="info-section-box row g-3">
                                    <div className="col-6">
                                        <span className="modal-field-label">Physician</span>
                                        <p className="modal-field-value strong">Dr. Ahmed Khan</p>
                                    </div>
                                    <div className="col-6">
                                        <span className="modal-field-label">Location</span>
                                        <p className="modal-field-value">Room: Chamber 02</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Reason --> */}
                            <div>
                                <h4 className="info-section-label">Appointment Reason</h4>
                                <div className="reason-box">
                                    <p>Chest pain and discomfort, requested follow-up after initial ECG.</p>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-clinic-ghost" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
