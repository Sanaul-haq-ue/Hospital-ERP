import '../../assets/css/LeaveApplications.css'

export default function LeaveApplications() {
    return (
        <>
            <main className="lv-scope flex-grow-1 p-3 p-md-4">
                <div className="lv-content d-flex flex-column gap-4">

                    {/* <!-- ================= PAGE HEADER ================= --> */}
                    <section className="row g-3 align-items-lg-center">
                        <div className="col-12 col-lg">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb lv-breadcrumb small mb-1">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#">Leave Management</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Leave Applications</li>
                                </ol>
                            </nav>
                            <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3">
                                <h1 className="h3 fw-bold mb-0 lv-title lv-text-strong">Leave Applications</h1>
                                <span className="badge lv-badge lv-tone-neutral">24 Active Today</span>
                            </div>
                            <p className="text-muted small mb-0 mt-1">Review, authorize, and submit leave requests for medical specialists, nurses, and administrative staff.</p>
                        </div>

                        <div className="col-12 col-lg-auto">
                            <div className="d-flex flex-wrap gap-2">
                                <button type="button" className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium">
                                    <i className="bi bi-download"></i> Export Report
                                </button>
                                <button type="button" className="btn btn-brand-primary btn-sm d-inline-flex align-items-center gap-2 fw-medium" data-bs-toggle="modal" data-bs-target="#addLeaveModal">
                                    <i className="bi bi-plus-lg"></i> Add Leave
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= KPI CARDS ================= --> */}
                    <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3">
                        <div className="col">
                            <div className="card lv-card lv-kpi h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className="lv-kpi-icon lv-tone-primary"><i className="bi bi-folder2-open"></i></div>
                                    <div>
                                        <div className="text-muted small fw-medium">Total Applications</div>
                                        <h4 className="fw-bold mb-0 lv-text-strong">142</h4>
                                        <small className="text-muted lv-text-xs">Current Fiscal Year</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lv-card lv-kpi lv-kpi-warning h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className="lv-kpi-icon lv-tone-warning"><i className="bi bi-hourglass-split"></i></div>
                                    <div>
                                        <div className="text-muted small fw-medium">Pending Review</div>
                                        <h4 className="fw-bold mb-0 lv-text-strong">18</h4>
                                        <small className="fw-semibold lv-text-xs lv-tone-warning bg-transparent"><i className="bi bi-clock"></i> 5 urgent requests</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lv-card lv-kpi lv-kpi-success h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className="lv-kpi-icon lv-tone-success"><i className="bi bi-check2-circle"></i></div>
                                    <div>
                                        <div className="text-muted small fw-medium">Approved</div>
                                        <h4 className="fw-bold mb-0 lv-text-strong">104</h4>
                                        <small className="fw-semibold lv-text-xs lv-tone-success bg-transparent"><i className="bi bi-arrow-up-short"></i> 73.2% approval rate</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lv-card lv-kpi lv-kpi-danger h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className="lv-kpi-icon lv-tone-danger"><i className="bi bi-x-circle"></i></div>
                                    <div>
                                        <div className="text-muted small fw-medium">Rejected</div>
                                        <h4 className="fw-bold mb-0 lv-text-strong">12</h4>
                                        <small className="fw-semibold lv-text-xs lv-tone-danger bg-transparent">8.4% conflict/denied</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lv-card lv-kpi h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className="lv-kpi-icon lv-tone-neutral"><i className="bi bi-slash-circle"></i></div>
                                    <div>
                                        <div className="text-muted small fw-medium">Cancelled</div>
                                        <h4 className="fw-bold mb-0 lv-text-strong">8</h4>
                                        <small className="text-muted lv-text-xs">Withdrawn by staff</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= FILTERS ================= --> */}
                    <section className="card lv-card shadow-sm">
                        <div className="card-body">
                            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 pb-2 lv-divider-bottom">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-funnel-fill text-primary-tok"></i>
                                    <span className="fw-semibold small lv-text-strong">Filter &amp; Search Applications</span>
                                </div>
                                <span className="badge lv-tone-neutral fw-normal">Showing 1-7 of 142 records</span>
                            </div>

                            <form className="row g-3">
                                <div className="col-12 col-md-6 col-xl-3">
                                    <label className="form-label small mb-1">Search Employee / ID</label>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text"><i className="bi bi-search"></i></span>
                                        <input type="text" className="form-control" placeholder="e.g. Dr. Robert or EMP-1042"/>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="form-label small mb-1">Department</label>
                                    <select className="form-select form-select-sm">
                                        <option selected>All Departments</option>
                                        <option>Cardiology</option>
                                        <option>Pediatrics</option>
                                        <option>Neurology</option>
                                        <option>ICU &amp; Critical Care</option>
                                        <option>Pathology &amp; Lab</option>
                                        <option>Anesthesiology</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="form-label small mb-1">Leave Type</label>
                                    <select className="form-select form-select-sm">
                                        <option selected>All Types</option>
                                        <option>Annual Leave</option>
                                        <option>Casual Leave</option>
                                        <option>Sick Leave</option>
                                        <option>Maternity / Paternity</option>
                                        <option>Unpaid Leave</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="form-label small mb-1">Status</label>
                                    <select className="form-select form-select-sm">
                                        <option selected>All Statuses</option>
                                        <option>Pending</option>
                                        <option>Approved</option>
                                        <option>Rejected</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-3 col-xl-1">
                                    <label className="form-label small mb-1">Source</label>
                                    <select className="form-select form-select-sm">
                                        <option selected>All</option>
                                        <option>Employee</option>
                                        <option>HR</option>
                                        <option>Admin</option>
                                    </select>
                                </div>

                                <div className="col-12 col-md-6 col-xl-2">
                                    <label className="form-label small mb-1">Date Range</label>
                                    <div className="input-group input-group-sm">
                                        <input type="date" className="form-control" value="2025-03-01" aria-label="From date"/>
                                            <input type="date" className="form-control" value="2025-04-15" aria-label="To date"/>
                                            </div>
                                    </div>

                                    <div className="col-12 d-flex flex-column flex-sm-row justify-content-sm-end align-items-stretch gap-2 pt-3 lv-divider-top">
                                        <button type="button" className="btn btn-sm btn-outline-secondary px-3">
                                            <i className="bi bi-arrow-counterclockwise me-1"></i> Reset
                                        </button>
                                        <button type="button" className="btn btn-sm btn-brand-primary px-3">
                                            <i className="bi bi-filter me-1"></i> Apply Filters
                                        </button>
                                    </div>
                            </form>
                        </div>
                    </section>

                    {/* <!-- ================= APPLICATIONS TABLE ================= --> */}
                    <section className="card lv-card shadow-sm overflow-hidden">
                        <div className="card-header py-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
                            <div className="d-flex flex-wrap align-items-center gap-2">
                                <h2 className="h6 mb-0 fw-bold lv-text-strong">Leave Requests Registry</h2>
                                <span className="badge rounded-pill lv-tone-primary">7 Active records</span>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-sort-down me-1"></i> Sort by: Latest Applied
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end small">
                                    <li><a className="dropdown-item" href="#">Latest Applied</a></li>
                                    <li><a className="dropdown-item" href="#">Earliest Start Date</a></li>
                                    <li><a className="dropdown-item" href="#">Employee Name (A-Z)</a></li>
                                    <li><a className="dropdown-item" href="#">Duration (Longest)</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover lv-table">
                                <thead>
                                    <tr>
                                        <th scope="col">App ID</th>
                                        <th scope="col">Employee</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Leave Type</th>
                                        <th scope="col">Leave Period</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Applied Date</th>
                                        <th scope="col">Source</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* <!-- 1: Pending --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-089</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="Dr. Robert Chen" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">Dr. Robert Chen, MD</div>
                                                        <small className="text-muted lv-mono">EMP-1042</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">Cardiovascular Sciences</span><div className="text-muted lv-text-xs">Senior Cardiologist</div></td>
                                        <td><span className="badge lv-badge lv-tone-primary"><i className="bi bi-airplane"></i> Annual Leave</span></td>
                                        <td><div className="fw-medium lv-text-strong">Apr 02 — Apr 08, 2025</div><small className="text-muted lv-text-xs">7 consecutive days</small></td>
                                        <td><span className="fw-semibold lv-text-strong">5 Working Days</span><div className="text-muted lv-text-xs">Full Day</div></td>
                                        <td><div className="lv-text-strong">Mar 28, 2025</div><small className="text-muted lv-text-xs">09:42 AM</small></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-person"></i> Employee</span></td>
                                        <td><span className="lv-status lv-status-pending"><i className="bi bi-clock-history"></i> Pending</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                                <button type="button" className="lv-action-btn" data-bs-toggle="modal" data-bs-target="#addLeaveModal" title="Edit Application" aria-label="Edit application"><i className="bi bi-pencil"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-approve" data-bs-toggle="modal" data-bs-target="#approvalModal" title="Approve Leave" aria-label="Approve leave"><i className="bi bi-check-lg"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-reject" data-bs-toggle="modal" data-bs-target="#rejectionModal" title="Reject Leave" aria-label="Reject leave"><i className="bi bi-x-lg"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 2: Approved --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-088</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="Sarah Jenkins" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">Nurse Sarah Jenkins</div>
                                                        <small className="text-muted lv-mono">EMP-1188</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">ICU &amp; Critical Care</span><div className="text-muted lv-text-xs">Head Clinical Nurse</div></td>
                                        <td><span className="badge lv-badge lv-tone-danger"><i className="bi bi-thermometer-half"></i> Sick Leave</span></td>
                                        <td><div className="fw-medium lv-text-strong">Mar 25 — Mar 27, 2025</div><small className="text-muted lv-text-xs">Medical certificate submitted</small></td>
                                        <td><span className="fw-semibold lv-text-strong">3 Days</span><div className="text-muted lv-text-xs">Full Day</div></td>
                                        <td><div className="lv-text-strong">Mar 24, 2025</div><small className="text-muted lv-text-xs">02:15 PM</small></td>
                                        <td><span className="badge lv-badge lv-tone-primary"><i className="bi bi-shield-check"></i> HR-Created</span></td>
                                        <td><span className="lv-status lv-status-approved"><i className="bi bi-check-circle-fill"></i> Approved</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-cancel" title="Cancel Leave" aria-label="Cancel leave"><i className="bi bi-slash-circle"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 3: Pending (hourly) --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-087</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="Dr. Anita Patel" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">Dr. Anita Patel</div>
                                                        <small className="text-muted lv-mono">EMP-1420</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">Pediatrics Department</span><div className="text-muted lv-text-xs">Consultant Pediatrician</div></td>
                                        <td><span className="badge lv-badge lv-tone-info"><i className="bi bi-clock"></i> Casual (Hourly)</span></td>
                                        <td><div className="fw-medium lv-text-strong">Apr 01, 2025</div><small className="text-muted lv-text-xs">10:00 AM — 02:00 PM</small></td>
                                        <td><span className="fw-semibold lv-text-strong">4 Hours</span><div className="text-muted lv-text-xs">Partial / Hourly</div></td>
                                        <td><div className="lv-text-strong">Mar 27, 2025</div><small className="text-muted lv-text-xs">04:30 PM</small></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-person"></i> Employee</span></td>
                                        <td><span className="lv-status lv-status-pending"><i className="bi bi-clock-history"></i> Pending</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                                <button type="button" className="lv-action-btn" data-bs-toggle="modal" data-bs-target="#addLeaveModal" title="Edit Application" aria-label="Edit application"><i className="bi bi-pencil"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-approve" data-bs-toggle="modal" data-bs-target="#approvalModal" title="Approve Leave" aria-label="Approve leave"><i className="bi bi-check-lg"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-reject" data-bs-toggle="modal" data-bs-target="#rejectionModal" title="Reject Leave" aria-label="Reject leave"><i className="bi bi-x-lg"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 4: Rejected --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-086</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="David Chen" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">David Chen</div>
                                                        <small className="text-muted lv-mono">EMP-1304</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">Central Pharmacy</span><div className="text-muted lv-text-xs">Lead Pharmacist</div></td>
                                        <td><span className="badge lv-badge lv-tone-warning"><i className="bi bi-calendar3"></i> Casual Leave</span></td>
                                        <td><div className="fw-medium lv-text-strong">Mar 28 — Mar 30, 2025</div><small className="text-muted lv-text-xs">Weekend coverage duty overlap</small></td>
                                        <td><span className="fw-semibold lv-text-strong">2 Days</span><div className="text-muted lv-text-xs">Half Day (Morning)</div></td>
                                        <td><div className="lv-text-strong">Mar 22, 2025</div><small className="text-muted lv-text-xs">11:05 AM</small></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-person"></i> Employee</span></td>
                                        <td><span className="lv-status lv-status-rejected"><i className="bi bi-x-circle-fill"></i> Rejected</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 5: Approved (paternity) --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-085</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="Dr. Kevin Zhang" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">Dr. Kevin Zhang</div>
                                                        <small className="text-muted lv-mono">EMP-1502</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">Anesthesiology Dept</span><div className="text-muted lv-text-xs">Resident Anesthesiologist</div></td>
                                        <td><span className="badge lv-badge lv-tone-primary"><i className="bi bi-heart"></i> Paternity Leave</span></td>
                                        <td><div className="fw-medium lv-text-strong">Apr 04 — Apr 15, 2025</div><small className="text-muted lv-text-xs">Scheduled parental leave</small></td>
                                        <td><span className="fw-semibold lv-text-strong">10 Working Days</span><div className="text-muted lv-text-xs">Full Day</div></td>
                                        <td><div className="lv-text-strong">Mar 21, 2025</div><small className="text-muted lv-text-xs">03:20 PM</small></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-shield-lock"></i> Admin</span></td>
                                        <td><span className="lv-status lv-status-approved"><i className="bi bi-check-circle-fill"></i> Approved</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-cancel" title="Cancel Leave" aria-label="Cancel leave"><i className="bi bi-slash-circle"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 6: Cancelled --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-084</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="Linda Wu" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">Linda Wu, RTR</div>
                                                        <small className="text-muted lv-mono">EMP-1621</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">Radiology &amp; MRI Imaging</span><div className="text-muted lv-text-xs">Senior Radiographer</div></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-slash-circle"></i> Unpaid Leave</span></td>
                                        <td><div className="fw-medium lv-text-strong">Mar 29, 2025</div><small className="text-muted lv-text-xs">Withdrawn voluntarily</small></td>
                                        <td><span className="fw-semibold lv-text-strong">1 Day</span><div className="text-muted lv-text-xs">Full Day</div></td>
                                        <td><div className="lv-text-strong">Mar 20, 2025</div><small className="text-muted lv-text-xs">10:14 AM</small></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-person"></i> Employee</span></td>
                                        <td><span className="lv-status lv-status-cancelled"><i className="bi bi-dash-circle"></i> Cancelled</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 7: Pending (half day) --> */}
                                    <tr>
                                        <td><span className="fw-semibold text-primary-tok lv-mono">LV-2025-083</span></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img className="lv-avatar" alt="Dr. Claire Bennett" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                                    <div>
                                                        <div className="fw-bold lv-text-strong">Dr. Claire Bennett</div>
                                                        <small className="text-muted lv-mono">EMP-1740</small>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="lv-text-strong">Clinical Pathology Lab</span><div className="text-muted lv-text-xs">Lab Director</div></td>
                                        <td><span className="badge lv-badge lv-tone-warning"><i className="bi bi-briefcase"></i> Casual Leave</span></td>
                                        <td><div className="fw-medium lv-text-strong">Mar 31, 2025</div><small className="text-muted lv-text-xs">12:30 PM — 05:30 PM</small></td>
                                        <td><span className="fw-semibold lv-text-strong">0.5 Days</span><div className="text-muted lv-text-xs">Half Day (Afternoon)</div></td>
                                        <td><div className="lv-text-strong">Mar 19, 2025</div><small className="text-muted lv-text-xs">08:50 AM</small></td>
                                        <td><span className="badge lv-badge lv-tone-neutral"><i className="bi bi-person"></i> Employee</span></td>
                                        <td><span className="lv-status lv-status-pending"><i className="bi bi-clock-history"></i> Pending</span></td>
                                        <td className="text-end">
                                            <div className="d-inline-flex gap-1">
                                                <button type="button" className="lv-action-btn" data-bs-toggle="offcanvas" data-bs-target="#viewDetailsDrawer" title="View Details" aria-label="View details"><i className="bi bi-eye"></i></button>
                                                <button type="button" className="lv-action-btn" data-bs-toggle="modal" data-bs-target="#addLeaveModal" title="Edit Application" aria-label="Edit application"><i className="bi bi-pencil"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-approve" data-bs-toggle="modal" data-bs-target="#approvalModal" title="Approve Leave" aria-label="Approve leave"><i className="bi bi-check-lg"></i></button>
                                                <button type="button" className="lv-action-btn lv-action-reject" data-bs-toggle="modal" data-bs-target="#rejectionModal" title="Reject Leave" aria-label="Reject leave"><i className="bi bi-x-lg"></i></button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="card-footer py-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
                            <div className="text-muted small text-center text-md-start">
                                Showing <span className="fw-semibold lv-text-strong">1</span> to <span className="fw-semibold lv-text-strong">7</span> of <span className="fw-semibold lv-text-strong">142</span> total applications
                            </div>
                            <nav aria-label="Table pagination">
                                <ul className="pagination pagination-sm lv-pagination mb-0">
                                    <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1"><i className="bi bi-chevron-left"></i> Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item disabled"><span className="page-link">...</span></li>
                                    <li className="page-item"><a className="page-link" href="#">15</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next <i className="bi bi-chevron-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    {/* <!-- ================= STATE VARIATIONS ================= --> */}
                    <section className="card lv-card shadow-sm">
                        <div className="card-header py-3 d-flex flex-wrap align-items-center justify-content-between gap-2">
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-palette text-primary-tok"></i>
                                <h2 className="h6 mb-0 fw-bold lv-text-strong">State Variations Design Specs</h2>
                            </div>
                            <span className="badge lv-tone-neutral fw-normal">Developer Reference</span>
                        </div>

                        <div className="card-body">
                            <ul className="nav nav-tabs lv-tabs flex-column flex-md-row nav-fill mb-3" id="stateTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active fw-medium small" id="loading-tab" data-bs-toggle="tab" data-bs-target="#loading-state" type="button" role="tab">
                                        <i className="bi bi-hourglass-split me-1"></i> Loading State UI
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-medium small" id="no-results-tab" data-bs-toggle="tab" data-bs-target="#no-results-state" type="button" role="tab">
                                        <i className="bi bi-search me-1"></i> Filter No-Results State
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-medium small" id="empty-tab" data-bs-toggle="tab" data-bs-target="#empty-state" type="button" role="tab">
                                        <i className="bi bi-inbox me-1"></i> Empty Registry State
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content lv-tab-content p-3 p-md-4" id="stateTabsContent">
                                <div className="tab-pane fade show active text-center py-4" id="loading-state" role="tabpanel">
                                    <div className="spinner-border text-primary lv-spinner-lg mb-3" role="status"><span className="visually-hidden">Loading...</span></div>
                                    <h3 className="h6 fw-bold lv-text-strong mb-1">Retrieving Leave Applications...</h3>
                                    <p className="text-muted small mb-0">Synchronizing clinical roster status, leave balances, and departmental quotas.</p>
                                </div>

                                <div className="tab-pane fade text-center py-4" id="no-results-state" role="tabpanel">
                                    <div className="lv-state-icon text-muted mb-3"><i className="bi bi-search fs-3"></i></div>
                                    <h3 className="h6 fw-bold lv-text-strong mb-1">No Matching Leave Applications Found</h3>
                                    <p className="text-muted small mb-3">No records match your selected filter criteria. Try adjusting the date range or status filter.</p>
                                    <button type="button" className="btn btn-sm btn-outline-primary px-3"><i className="bi bi-arrow-counterclockwise me-1"></i> Clear All Filters</button>
                                </div>

                                <div className="tab-pane fade text-center py-4" id="empty-state" role="tabpanel">
                                    <div className="lv-state-icon text-primary-tok mb-3"><i className="bi bi-calendar2-check fs-3"></i></div>
                                    <h3 className="h6 fw-bold lv-text-strong mb-1">No Leave Applications in Queue</h3>
                                    <p className="text-muted small mb-3">There are currently no leave requests submitted for this department or period.</p>
                                    <button type="button" className="btn btn-sm btn-brand-primary px-3" data-bs-toggle="modal" data-bs-target="#addLeaveModal"><i className="bi bi-plus-lg me-1"></i> Submit First Application</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            {/* <!-- ======================================================== --> */}
            {/* <!-- MODAL: ADD LEAVE APPLICATION                             --> */}
            {/* <!-- ======================================================== --> */}
            <div className="modal fade lv-scope lv-modal" id="addLeaveModal" tabindex="-1" aria-labelledby="addLeaveModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
                    <div className="modal-content shadow">
                        <div className="modal-header px-3 px-md-4 py-3">
                            <div className="d-flex align-items-center gap-2">
                                <div className="lv-icon-chip-sm"><i className="bi bi-file-earmark-plus"></i></div>
                                <div>
                                    <h5 className="modal-title fw-bold fs-6" id="addLeaveModalLabel">Create Leave Application (HR Initiated)</h5>
                                    <small className="text-muted lv-text-xs">Submit a verified leave request on behalf of a clinic employee</small>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body px-3 px-md-4 py-3">

                            {/* <!-- 1. Employee -->1\1 */}
                            <div className="mb-4">
                                <h6 className="lv-section-title"><i className="bi bi-person-bounding-box"></i> 1. Employee Identification</h6>
                                <div className="lv-panel-soft">
                                    <div className="row g-3">
                                        <div className="col-12 col-lg-6">
                                            <label className="form-label small mb-1 lv-label-strong">Select Employee <span className="text-danger">*</span></label>
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-text"><i className="bi bi-search"></i></span>
                                                <select className="form-select form-select-sm fw-medium">
                                                    <option selected>Dr. Robert Chen, MD — EMP-1042</option>
                                                    <option>Nurse Sarah Jenkins — EMP-1188</option>
                                                    <option>Dr. Anita Patel — EMP-1420</option>
                                                    <option>David Chen — EMP-1304</option>
                                                    <option>Dr. Kevin Zhang — EMP-1502</option>
                                                    <option>Linda Wu, RTR — EMP-1621</option>
                                                </select>
                                            </div>
                                            <small className="text-muted lv-text-xs">Search by name, specialist title, or registration badge</small>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-3">
                                            <label className="form-label small mb-1">Department</label>
                                            <input type="text" className="form-control form-control-sm" readonly value="Cardiovascular Sciences"/>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-3">
                                            <label className="form-label small mb-1">Designation</label>
                                            <input type="text" className="form-control form-control-sm" readonly value="Senior Cardiologist"/>
                                        </div>
                                    </div>

                                    <div className="mt-3 pt-2 lv-divider-top d-flex flex-column flex-sm-row flex-wrap align-items-sm-center justify-content-between gap-2">
                                        <span className="small text-muted"><i className="bi bi-info-circle text-primary-tok me-1"></i> Balance Quota:</span>
                                        <div className="d-flex flex-wrap gap-2">
                                            <span className="badge lv-badge lv-tone-success">Annual: 18 Days Rem.</span>
                                            <span className="badge lv-badge lv-tone-warning">Casual: 7 Days Rem.</span>
                                            <span className="badge lv-badge lv-tone-info">Sick: 12 Days Rem.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 2. Leave parameters --> */}
                            <div className="mb-4">
                                <h6 className="lv-section-title"><i className="bi bi-calendar-range"></i> 2. Leave Parameters &amp; Timing</h6>
                                <div className="lv-panel-soft">
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <label className="form-label small mb-1 lv-label-strong">Leave Type <span className="text-danger">*</span></label>
                                            <select className="form-select form-select-sm">
                                                <option selected>Annual Leave</option>
                                                <option>Casual Leave</option>
                                                <option>Sick Leave</option>
                                                <option>Maternity / Paternity Leave</option>
                                                <option>Special Emergency Leave</option>
                                                <option>Unpaid Leave</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <label className="form-label small mb-1 lv-label-strong">Duration Type <span className="text-danger">*</span></label>
                                            <select className="form-select form-select-sm" id="durationTypeSelect">
                                                <option selected>Full Day</option>
                                                <option>Half Day</option>
                                                <option>Hourly</option>
                                            </select>
                                        </div>
                                        <div className="col-6 col-lg-2">
                                            <label className="form-label small mb-1 lv-label-strong">Start Date <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control form-control-sm" value="2025-04-02"/>
                                        </div>
                                        <div className="col-6 col-lg-2">
                                            <label className="form-label small mb-1 lv-label-strong">End Date <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control form-control-sm" value="2025-04-08"/>
                                        </div>

                                        <div className="col-12 col-lg-6">
                                            <div className="lv-box h-100">
                                                <label className="form-label small fw-semibold mb-1">Half Day Session (If Applicable)</label>
                                                <div className="d-flex flex-column flex-sm-row gap-1 gap-sm-3">
                                                    <div className="form-check mb-0">
                                                        <input className="form-check-input" type="radio" name="halfDayRadio" id="sessionMorning" value="morning" checked/>
                                                            <label className="form-check-label small" htmlFor="sessionMorning">Morning (08:00 AM - 01:00 PM)</label>
                                                    </div>
                                                    <div className="form-check mb-0">
                                                        <input className="form-check-input" type="radio" name="halfDayRadio" id="sessionAfternoon" value="afternoon"/>
                                                            <label className="form-check-label small" htmlFor="sessionAfternoon">Afternoon (01:00 PM - 06:00 PM)</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-6">
                                            <div className="lv-box h-100">
                                                <label className="form-label small fw-semibold mb-1">Hourly Leave Window (If Applicable)</label>
                                                <div className="row g-2">
                                                    <div className="col-6"><input type="time" className="form-control form-control-sm" value="10:00" aria-label="Start time"/></div>
                                                    <div className="col-6"><input type="time" className="form-control form-control-sm" value="14:00" aria-label="End time"/></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label small mb-1 lv-label-strong">Reason / Description <span className="text-danger">*</span></label>
                                            <textarea className="form-control form-control-sm" rows="2" placeholder="Detail justification, planned handover, or clinical coverage notes..."></textarea>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label small mb-1 lv-label-strong">Supporting Document (Medical Slip, Travel Notice)</label>
                                            <input type="file" className="form-control form-control-sm"/>
                                                <small className="text-muted lv-text-xs">Acceptable formats: PDF, JPG, PNG (Max 10MB)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 3. Governance --> */}
                            <div>
                                <h6 className="lv-section-title"><i className="bi bi-shield-check"></i> 3. Administrative Governance &amp; Status</h6>
                                <div className="lv-panel-soft">
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <label className="form-label small mb-1">Application Source</label>
                                            <input type="text" className="form-control form-control-sm" readonly value="HR / Administration"/>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <label className="form-label small mb-1">Created By</label>
                                            <input type="text" className="form-control form-control-sm" readonly value="Dr. Elena Rostova (HR Head)"/>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <label className="form-label small mb-1 lv-label-strong">Initial Application Status</label>
                                            <select className="form-select form-select-sm">
                                                <option selected>Pending (Requires Dept Head review)</option>
                                                <option>Approved (Direct Executive Overwrite)</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small mb-1 lv-label-strong">HR Remarks &amp; Coverage Instructions</label>
                                            <input type="text" className="form-control form-control-sm" placeholder="Roster replacement assigned to Dr. Marcus Vance during this period."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer px-3 px-md-4 py-3 d-flex flex-column-reverse flex-sm-row justify-content-sm-between">
                            <button type="button" className="btn btn-sm btn-outline-secondary px-4 fw-medium" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-sm btn-brand-primary px-4 fw-semibold" data-bs-dismiss="modal">
                                <i className="bi bi-check-circle me-1"></i> Save Leave Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ======================================================== --> */}
            {/* <!-- OFFCANVAS: APPLICATION DETAILS                           --> */}
            {/* <!-- ======================================================== --> */}
            <div className="offcanvas offcanvas-end lv-scope lv-offcanvas" tabindex="-1" id="viewDetailsDrawer" aria-labelledby="viewDetailsDrawerLabel">
                <div className="offcanvas-header py-3 lv-divider-bottom">
                    <div className="d-flex align-items-center gap-2">
                        <div className="lv-icon-chip-sm"><i className="bi bi-clipboard2-check"></i></div>
                        <div>
                            <h5 className="offcanvas-title h6 fw-bold mb-0" id="viewDetailsDrawerLabel">Application Details</h5>
                            <span className="lv-mono small text-primary-tok fw-semibold">LV-2025-089</span>
                        </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-3 p-md-4">

                    {/* <!-- Status banner --> */}
                    <div className="lv-callout lv-tone-warning d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-hourglass-split fs-4"></i>
                            <div>
                                <div className="fw-bold small lv-callout-text">Application Pending Review</div>
                                <small className="text-muted lv-text-xs">Awaiting Department Head signature</small>
                            </div>
                        </div>
                        <span className="lv-status lv-status-pending">Pending</span>
                    </div>

                    {/* <!-- Employee --> */}
                    <div className="lv-panel shadow-sm mb-3">
                        <div className="d-flex align-items-center gap-3">
                            <img className="lv-avatar lv-avatar-lg" alt="Dr. Robert Chen" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
                                <div className="flex-grow-1">
                                    <h6 className="fw-bold mb-0 lv-text-strong">Dr. Robert Chen, MD</h6>
                                    <div className="text-primary-tok small fw-semibold">Senior Cardiologist</div>
                                    <div className="text-muted small lv-mono">EMP-1042 · Cardiovascular Dept</div>
                                </div>
                        </div>
                        <div className="row g-2 mt-2 pt-2 lv-divider-top small text-muted">
                            <div className="col-12 col-sm-6"><i className="bi bi-envelope me-1"></i> r.chen@clinichub.org</div>
                            <div className="col-12 col-sm-6"><i className="bi bi-telephone me-1"></i> +1 (555) 349-2104</div>
                        </div>
                    </div>

                    {/* <!-- Specification --> */}
                    <div className="lv-panel shadow-sm mb-3">
                        <h6 className="lv-panel-title mb-3">Leave Specification</h6>
                        <div className="row g-3 small">
                            <div className="col-6"><div className="text-muted">Leave Type:</div><div className="fw-semibold lv-text-strong">Annual Vacation Leave</div></div>
                            <div className="col-6"><div className="text-muted">Duration:</div><div className="fw-semibold lv-text-strong">5 Working Days (Full Day)</div></div>
                            <div className="col-6"><div className="text-muted">Start Date:</div><div className="fw-semibold lv-text-strong">April 02, 2025</div></div>
                            <div className="col-6"><div className="text-muted">End Date:</div><div className="fw-semibold lv-text-strong">April 08, 2025</div></div>
                            <div className="col-6"><div className="text-muted">Application Source:</div><div className="fw-semibold"><span className="badge lv-badge lv-tone-neutral">Employee Self-Service</span></div></div>
                            <div className="col-6"><div className="text-muted">Quota Impact:</div><div className="fw-semibold lv-tone-success bg-transparent">18 remaining → 13 after</div></div>
                        </div>
                    </div>

                    {/* <!-- Reason --> */}
                    <div className="lv-panel shadow-sm mb-3">
                        <h6 className="lv-panel-title mb-2">Employee Reason</h6>
                        <p className="small text-muted mb-0">"Attending the annual Cardiology Innovation Conference in Chicago followed by sanctioned annual family leave. OPD roster handed over to Dr. Marcus Vance."</p>
                    </div>

                    {/* <!-- Documents --> */}
                    <div className="lv-panel shadow-sm mb-3">
                        <h6 className="lv-panel-title mb-2">Supporting Documents</h6>
                        <div className="lv-panel-soft d-flex align-items-center justify-content-between gap-2 p-2">
                            <div className="d-flex align-items-center gap-2 lv-min-w-0">
                                <i className="bi bi-file-earmark-pdf fs-4 text-danger"></i>
                                <div className="lv-min-w-0">
                                    <div className="fw-semibold small lv-text-strong text-break">Conference_Invitation_Pass.pdf</div>
                                    <small className="text-muted lv-text-xs">1.4 MB · Uploaded Mar 28, 2025</small>
                                </div>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-primary py-1 px-2 flex-shrink-0" title="Download Document" aria-label="Download document"><i className="bi bi-download"></i></button>
                        </div>
                    </div>

                    {/* <!-- HR remarks --> */}
                    <div className="lv-panel shadow-sm mb-3">
                        <h6 className="lv-panel-title mb-2">HR Review Remarks</h6>
                        <p className="small text-muted mb-0">"Roster coverage confirmed. Duty swap verified with Cardiology head nurse. Awaiting clinical director final sign-off."</p>
                    </div>

                    {/* <!-- Timeline --> */}
                    <div className="lv-panel shadow-sm">
                        <h6 className="lv-panel-title mb-3">Workflow Timeline</h6>
                        <div className="lv-timeline small">
                            <div className="lv-timeline-item">
                                <span className="lv-timeline-dot lv-timeline-dot-success"></span>
                                <div className="fw-semibold lv-text-strong">Leave Application Created</div>
                                <div className="text-muted lv-text-xs">Applied Date: Mar 28, 2025 at 09:42 AM</div>
                                <div className="text-muted lv-text-xs">Created by: Dr. Robert Chen (Employee Self-Service)</div>
                            </div>
                            <div className="lv-timeline-item">
                                <span className="lv-timeline-dot"></span>
                                <div className="fw-semibold lv-text-strong">Department HR Screening</div>
                                <div className="text-muted lv-text-xs">Reviewed Date: Mar 28, 2025 at 11:15 AM</div>
                                <div className="text-muted lv-text-xs">Reviewed by: Nurse Sarah Jenkins (Staff Coordinator)</div>
                            </div>
                            <div className="lv-timeline-item">
                                <span className="lv-timeline-dot lv-timeline-dot-danger"></span>
                                <div className="fw-semibold lv-tone-warning bg-transparent">Final Authorization Pending</div>
                                <div className="text-muted lv-text-xs">Assigned to: Dr. Elena Rostova (Chief HR Officer)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lv-offcanvas-footer">
                    <button type="button" className="btn btn-sm btn-outline-danger w-50 fw-semibold" data-bs-toggle="modal" data-bs-target="#rejectionModal">
                        <i className="bi bi-x-circle me-1"></i> Reject
                    </button>
                    <button type="button" className="btn btn-sm btn-success w-50 fw-semibold text-white" data-bs-toggle="modal" data-bs-target="#approvalModal">
                        <i className="bi bi-check-circle me-1"></i> Approve
                    </button>
                </div>
            </div>

            {/* <!-- ======================================================== --> */}
            {/* <!-- MODAL: APPROVE                                           --> */}
            {/* <!-- ======================================================== -->\*/}
            <div className="modal fade lv-scope lv-modal" id="approvalModal" tabindex="-1" aria-labelledby="approvalModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        <div className="modal-header lv-modal-head-success py-3">
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-check2-circle fs-5 lv-tone-success bg-transparent"></i>
                                <h5 className="modal-title fw-bold fs-6" id="approvalModalLabel">Approve Leave Application</h5>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 p-md-4">
                            <p className="small text-muted mb-3">
                                Are you sure you want to approve the leave request <strong className="lv-text-strong">LV-2025-089</strong> for <strong className="lv-text-strong">Dr. Robert Chen, MD</strong>?
                            </p>
                            <div className="mb-3">
                                <label className="form-label small lv-label-strong">HR Remarks (Optional)</label>
                                <textarea className="form-control form-control-sm" rows="3" placeholder="Add administrative notes, roster handover confirmation, or return-to-work guidelines..."></textarea>
                            </div>
                            <div className="lv-callout lv-tone-neutral small text-muted mb-0">
                                <i className="bi bi-info-circle text-primary-tok me-1"></i> Notification will be sent to the employee and departmental duty roster coordinator automatically.
                            </div>
                        </div>
                        <div className="modal-footer py-2 px-3">
                            <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-sm btn-success text-white px-3 fw-semibold" data-bs-dismiss="modal"><i className="bi bi-check2"></i> Confirm Approval</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ======================================================== --> */}
            {/* <!-- MODAL: REJECT                                            --> */}
            {/* <!-- ======================================================== --> */}
            <div className="modal fade lv-scope lv-modal" id="rejectionModal" tabindex="-1" aria-labelledby="rejectionModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        <div className="modal-header lv-modal-head-danger py-3">
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-exclamation-triangle fs-5 lv-tone-danger bg-transparent"></i>
                                <h5 className="modal-title fw-bold fs-6" id="rejectionModalLabel">Reject Leave Application</h5>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 p-md-4">
                            <p className="small text-muted mb-3">
                                Please specify the formal reason for rejecting request <strong className="lv-text-strong">LV-2025-089</strong>.
                            </p>
                            <div className="mb-3">
                                <label className="form-label small lv-label-strong">Rejection Reason <span className="text-danger">*</span></label>
                                <select className="form-select form-select-sm mb-2">
                                    <option selected>Critical Clinical Staffing Shortage</option>
                                    <option>Direct Conflict with Mandatory Emergency Roster</option>
                                    <option>Insufficient Accrued Leave Balance</option>
                                    <option>Missing or Incomplete Supporting Medical Documentation</option>
                                    <option>Other Operational Conflict</option>
                                </select>
                                <textarea className="form-control form-control-sm" rows="3" placeholder="Provide detailed feedback for the applicant..."></textarea>
                            </div>
                            <div className="lv-callout lv-tone-danger small mb-0">
                                <i className="bi bi-shield-exclamation me-1"></i> A rejection notice with this feedback will be sent immediately to the applicant.
                            </div>
                        </div>
                        <div className="modal-footer py-2 px-3">
                            <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-sm btn-danger px-3 fw-semibold" data-bs-dismiss="modal"><i className="bi bi-x-circle"></i> Confirm Rejection</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
