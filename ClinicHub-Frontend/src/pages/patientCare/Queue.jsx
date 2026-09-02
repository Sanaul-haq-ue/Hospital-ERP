import "../../assets/css/Queue.css"

export default function Queue() {
    return (
        <>
            <main className="container-fluid p-3 p-md-4 p-lg-5">
                <div className="mx-auto max-w-page d-flex flex-column gap-4">

                    {/* <!-- Page Header --> */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3">
                        <div>
                            <div className="d-flex flex-wrap align-items-center gap-3 mb-1">
                                <h1 className="queue-title">Queue Management</h1>
                                <span className="live-badge">
                                    <span className="live-dot"></span>
                                    Live Queue
                                </span>
                            </div>
                            <p className="queue-subtitle">Manage today's checked-in patients and doctor queues.</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button type="button" className="theme-toggle-fab" id="themeToggleBtn" aria-label="Toggle dark mode">
                                <span className="material-symbols-outlined" id="themeToggleIcon">dark_mode</span>
                            </button>
                            <div className="date-chip">
                                <span className="material-symbols-outlined icon-lg">calendar_today</span>
                                26 August 2026
                            </div>
                        </div>
                    </div>

                    {/* <!-- Summary Cards --> */}
                    <div className="row g-3 g-md-4">
                        <div className="col-6 col-md-3">
                            <div className="summary-card">
                                <div className="summary-icon summary-icon-waiting">
                                    <span className="material-symbols-outlined">hourglass_empty</span>
                                </div>
                                <div>
                                    <p className="summary-label">Waiting</p>
                                    <p className="summary-value">08</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="summary-card">
                                <div className="summary-icon summary-icon-called">
                                    <span className="material-symbols-outlined">campaign</span>
                                </div>
                                <div>
                                    <p className="summary-label">Called</p>
                                    <p className="summary-value">01</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="summary-card">
                                <div className="summary-icon summary-icon-consult">
                                    <span className="material-symbols-outlined">stethoscope</span>
                                </div>
                                <div>
                                    <p className="summary-label">In Consultation</p>
                                    <p className="summary-value">03</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="summary-card">
                                <div className="summary-icon summary-icon-completed">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <p className="summary-label">Completed</p>
                                    <p className="summary-value">12</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Queue Controls --> */}
                    <div className="controls-card">
                        <div className="row g-3 align-items-end">
                            <div className="col-12 col-sm-4 col-lg-2">
                                <label className="form-label-queue" for="doctorFilter">Doctor</label>
                                <select className="form-select" id="doctorFilter">
                                    <option>All Doctors</option>
                                    <option>Dr. Ahmed Khan</option>
                                    <option>Dr. Sara Rahman</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 col-lg-2">
                                <label className="form-label-queue" for="dateFilter">Date</label>
                                <select className="form-select" id="dateFilter">
                                    <option>Today</option>
                                    <option>Yesterday</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-4 col-lg-2">
                                <label className="form-label-queue" for="statusFilter">Status</label>
                                <select className="form-select" id="statusFilter">
                                    <option>All</option>
                                    <option>Waiting</option>
                                    <option>Called</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-4">
                                <label className="form-label-queue" for="queueSearch">Search</label>
                                <div className="search-field-wrap">
                                    <span className="material-symbols-outlined">search</span>
                                    <input type="text" className="form-control" id="queueSearch" placeholder="Patient, ID, Queue No." />
                                </div>
                            </div>
                            <div className="col-12 col-lg-2">
                                <button type="button" className="btn btn-refresh w-100">
                                    <span className="material-symbols-outlined icon-lg">refresh</span>
                                    <span>Refresh</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Now Serving Hero --> */}
                    <div className="now-serving-hero">
                        <div className="now-serving-content d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
                            <div className="d-flex flex-column flex-sm-row align-items-center gap-3 gap-sm-4 text-center text-sm-start">
                                <div className="queue-number-tile">
                                    <span className="queue-number-label">Queue</span>
                                    <span className="queue-number-value">Q-008</span>
                                </div>
                                <div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start gap-3 mb-1">
                                        <span className="hero-status-badge">Called</span>
                                        <span className="hero-time-ago">
                                            <span className="material-symbols-outlined icon-sm">schedule</span>
                                            2 mins ago
                                        </span>
                                    </div>
                                    <h3 className="hero-patient-name">Md. Rahim</h3>
                                    <p className="hero-patient-meta">ID: P-000124 • Dr. Ahmed Khan (Cardiology)</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 w-100 w-md-auto">
                                <button type="button" className="btn btn-hero-start flex-fill flex-md-grow-0 d-inline-flex align-items-center justify-content-center gap-2">
                                    <span className="material-symbols-outlined">play_arrow</span>
                                    Start Consultation
                                </button>
                                <button type="button" className="btn btn-hero-skip flex-fill flex-md-grow-0 d-inline-flex align-items-center justify-content-center gap-2" data-bs-toggle="modal" data-bs-target="#skipPatientModal">
                                    <span className="material-symbols-outlined">skip_next</span>
                                    Skip
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Doctor Group: Dr. Ahmed Khan --> */}
                    <div className="doctor-group-card">
                        <div className="doctor-group-header">
                            <div className="d-flex align-items-center gap-3">
                                <img className="doctor-avatar" alt="Dr. Ahmed Khan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0oIC9bBOXfdVpK_YPMd2zYthzkh81sHT-gJc0JC_pKXqe0IZ6Ys2N1zEhIdaJ6uZfbGoq1fwXwp4itGeX6mcAKS-69Gu2Lsav_PN7iGFpKmgCBSeOsDmMPUfIVhVbEWU0qqXYss9APeG_4GfYAOxV0fqnYL8RZQk7IkjMJb37qfZB_zOVIEL30CokW6DozCf5aT0MQRE7OCuhb8xQyfroKBlYoC3--HvmV33_lhc5xp4sBon_-Q7-" />
                                <div>
                                    <p className="doctor-name">Dr. Ahmed Khan</p>
                                    <p className="doctor-specialty">Cardiology</p>
                                </div>
                            </div>
                            <div className="text-end">
                                <p className="doctor-waiting-label">Waiting</p>
                                <p className="doctor-waiting-count">4 Patients</p>
                            </div>
                        </div>

                        <div className="table-scroll-queue">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Queue No.</th>
                                        <th>Patient</th>
                                        <th>Time / Type</th>
                                        <th className="text-end">Wait Time</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- Row 1: Called --> */}
                                    <tr className="row-called">
                                        <td><span className="queue-no">Q-008</span></td>
                                        <td>
                                            <div className="patient-row-cell">
                                                <div className="avatar-initials accent">MR</div>
                                                <div>
                                                    <p className="queue-patient-name">Md. Rahim</p>
                                                    <p className="queue-patient-id">P-000124</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>10:00 AM</span>
                                            <span className="type-tag type-tag-followup d-block type-tag-wrap">Follow-up</span>
                                        </td>
                                        <td className="text-end"><span className="wait-time">-</span></td>
                                        <td className="text-center"><span className="status-pill status-pill-called">Called</span></td>
                                        <td className="text-end">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <button type="button" className="icon-btn-queue" title="View Details">
                                                    <span className="material-symbols-outlined icon-sm">visibility</span>
                                                </button>
                                                <button type="button" className="btn btn-queue-start">Start</button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- Row 2: Waiting --> */}
                                    <tr>
                                        <td><span className="queue-no muted">Q-009</span></td>
                                        <td>
                                            <div className="patient-row-cell">
                                                <div className="avatar-initials">FA</div>
                                                <div>
                                                    <p className="queue-patient-name">Fatima Ali</p>
                                                    <p className="queue-patient-id">P-000188</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>10:15 AM</span>
                                            <span className="type-tag type-tag-new d-block type-tag-wrap">New</span>
                                        </td>
                                        <td className="text-end"><span className="wait-time urgent">12 min</span></td>
                                        <td className="text-center"><span className="status-pill status-pill-waiting">Waiting</span></td>
                                        <td className="text-end">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <button type="button" className="icon-btn-queue" title="View Details">
                                                    <span className="material-symbols-outlined icon-sm">visibility</span>
                                                </button>
                                                <button type="button" className="btn btn-queue-call">Call</button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- Row 3: Waiting --> */}
                                    <tr>
                                        <td><span className="queue-no muted">Q-010</span></td>
                                        <td>
                                            <div className="patient-row-cell">
                                                <div className="avatar-initials">SK</div>
                                                <div>
                                                    <p className="queue-patient-name">Syed Kamal</p>
                                                    <p className="queue-patient-id">P-000201</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>10:30 AM</span>
                                            <span className="type-tag type-tag-followup d-block type-tag-wrap">Follow-up</span>
                                        </td>
                                        <td className="text-end"><span className="wait-time">5 min</span></td>
                                        <td className="text-center"><span className="status-pill status-pill-waiting">Waiting</span></td>
                                        <td className="text-end">
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <button type="button" className="icon-btn-queue" title="View Details">
                                                    <span className="material-symbols-outlined icon-sm">visibility</span>
                                                </button>
                                                <button type="button" className="btn btn-queue-call">Call</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <!-- Doctor Group: Dr. Sara Rahman (Collapsed Example) --> */}
                    <div className="doctor-group-card collapsed-preview">
                        <div className="doctor-group-header header-flat">
                            <div className="d-flex align-items-center gap-3">
                                <img className="doctor-avatar" alt="Dr. Sara Rahman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsjL1lwlv6VfH2odPiZNkI-25SX0S5QdxqPxh7BsLe2zo9Boic7_IUNvBDt8goFOv0LrDP_eQ2SqOygwDBZsSlkFss81EQ-lavEwBGWjsoc15NEmum9i0W0cglv7gBaAPyeEgt0mfc0cej3LWAXgs3TVEqJwkZ8lfxrEIeiydpK9w8tQsTqJopWBqgIK65VgQqUm4dFHb_gXUJW-46ATOsJW6nGkZYXhRljpkrqAQW69hE1AXZ6Mvn" />
                                <div>
                                    <p className="doctor-name">Dr. Sara Rahman</p>
                                    <p className="doctor-specialty">Neurology</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="text-end d-none d-sm-block">
                                    <p className="doctor-waiting-label">Waiting</p>
                                    <p className="doctor-waiting-count muted">2 Patients</p>
                                </div>
                                <button type="button" className="icon-btn-queue" aria-label="Expand">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>


            {/* <!-- ============ Skip Patient Modal ============ --> */}
            <div className="modal fade queue-page" id="skipPatientModal" tabindex="-1" aria-labelledby="skipPatientModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="skipPatientModalLabel">Skip Patient</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div className="skip-warning-box">
                                <p className="mb-0">You are about to skip <strong>Q-008 (Md. Rahim)</strong>.</p>
                            </div>
                            <div>
                                <label className="skip-reason-label" for="skipReason">Reason for skipping</label>
                                <textarea className="form-control" id="skipReason" rows="4" placeholder="e.g., Patient not present in waiting area..."></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-clinic-ghost" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-clinic-danger">Confirm Skip</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
