import '../../assets/css/LeaveBalance.css'

export default function LeaveBalance() {
    return (
        <>
            <main className="lb-scope flex-grow-1 p-3 p-md-4">
                <div className="lb-content d-flex flex-column gap-4">

                    {/* <!-- ================= PAGE HEADER ================= --> */}
                    <section className="row g-3 align-items-lg-end">
                        <div className="col-12 col-lg">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb lb-breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#">Leave Management</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Leave Balance</li>
                                </ol>
                            </nav>
                            <h1 className="text-headline-lg lb-title m-0">Leave Balance</h1>
                            <p className="text-body-md text-on-surface-variant-tok m-0">Monitor medical staff annual allocations, track accrued leaves, and manage quota adjustments.</p>
                        </div>

                        <div className="col-12 col-lg-auto">
                            <div className="d-flex flex-column flex-sm-row flex-wrap gap-2">
                                <div className="input-group lb-year-select">
                                    <span className="input-group-text"><span className="material-symbols-outlined lb-icon-md">calendar_today</span></span>
                                    <select className="form-select" aria-label="Leave year">
                                        <option value="2024">Leave Year: 2024</option>
                                        <option value="2025" selected>Leave Year: 2025 (Current)</option>
                                        <option value="2026">Leave Year: 2026</option>
                                        <option value="2027">Leave Year: 2027</option>
                                    </select>
                                </div>
                                <button type="button" className="btn lb-btn-light justify-content-center">
                                    <span className="material-symbols-outlined lb-icon-md">download</span><span>Export Data</span>
                                </button>
                                <button type="button" className="btn btn-brand-primary d-inline-flex align-items-center justify-content-center gap-2 fw-medium" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal">
                                    <span className="material-symbols-outlined lb-icon-md">add_circle</span><span>Adjust Balance</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= KPI CARDS ================= --> */}
                    <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3">
                        <div className="col">
                            <div className="card lb-card lb-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="lb-kpi-label">Total Employees</span>
                                        <span className="lb-icon-chip lb-tone-primary-strong"><span className="material-symbols-outlined lb-icon-md">group</span></span>
                                    </div>
                                    <div className="text-headline-md lb-text-strong">248</div>
                                    <div className="text-label-md text-on-surface-variant-tok mt-1"><span className="text-secondary-tok fw-medium">All Cadres</span> • Clinical &amp; Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lb-card lb-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="lb-kpi-label">Available Leave</span>
                                        <span className="lb-icon-chip lb-tone-secondary"><span className="material-symbols-outlined lb-icon-md">verified_user</span></span>
                                    </div>
                                    <div className="text-headline-md lb-text-strong">216</div>
                                    <div className="text-label-md text-secondary-tok fw-medium mt-1 d-flex align-items-center gap-1">
                                        <span className="material-symbols-outlined lb-icon-2xs">check_circle</span><span>87.1% active leave reserves</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lb-card lb-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="lb-kpi-label">Hospital Entitlement</span>
                                        <span className="lb-icon-chip lb-tone-primary-strong"><span className="material-symbols-outlined lb-icon-md">event_available</span></span>
                                    </div>
                                    <div className="text-headline-md lb-text-strong">5,952 <span className="text-body-sm text-on-surface-variant-tok fw-normal">Days</span></div>
                                    <div className="text-label-md text-on-surface-variant-tok mt-1">Hospital-wide allocation (2025)</div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lb-card lb-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="lb-kpi-label">Total Leave Used</span>
                                        <span className="lb-icon-chip lb-tone-primary-strong"><span className="material-symbols-outlined lb-icon-md">event_busy</span></span>
                                    </div>
                                    <div className="text-headline-md lb-text-strong">2,418 <span className="text-body-sm text-on-surface-variant-tok fw-normal">Days</span></div>
                                    <div className="text-label-md text-primary-tok fw-medium mt-1">40.6% utilized year-to-date</div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card lb-card lb-card-hover-error shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="lb-kpi-label">Exhausted Balance</span>
                                        <span className="lb-icon-chip lb-tone-error"><span className="material-symbols-outlined lb-icon-md">warning</span></span>
                                    </div>
                                    <div className="text-headline-md text-error-tok">14 <span className="text-body-sm text-on-surface-variant-tok fw-normal">Staff</span></div>
                                    <div className="text-label-md text-error-tok fw-medium mt-1 d-flex align-items-center gap-1">
                                        <span className="material-symbols-outlined lb-icon-2xs">error_outline</span><span>Critical quota alert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= ANALYTICS ================= --> */}
                    <section className="row g-4">

                        {/* <!-- Overall utilization --> */}
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card lb-card shadow-sm h-100">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <h2 className="text-headline-sm m-0">Overall Hospital Utilization</h2>
                                            <span className="lb-pill lb-tone-neutral text-primary-tok">FY 2025</span>
                                        </div>
                                        <p className="text-body-sm text-on-surface-variant-tok mb-3">Comparison of total days entitled versus booked and remaining active balances.</p>

                                        <div className="d-flex justify-content-between text-body-sm mb-2">
                                            <span className="fw-medium lb-text-strong">Total Progress</span>
                                            <span className="fw-semibold text-primary-tok">40.6% Used</span>
                                        </div>
                                        <div className="progress-stacked lb-progress lb-progress-lg lb-progress-stack" role="group" aria-label="Utilization breakdown">
                                            <div className="progress lb-pct-40-6" role="progressbar" aria-label="Used" aria-valuenow="40.6" aria-valuemin="0" aria-valuemax="100" title="Used: 2,418 Days"><div className="progress-bar lb-fill-primary"></div></div>
                                            <div className="progress lb-pct-5-4" role="progressbar" aria-label="Pending" aria-valuenow="5.4" aria-valuemin="0" aria-valuemax="100" title="Pending: 320 Days"><div className="progress-bar lb-fill-variant"></div></div>
                                            <div className="progress lb-pct-54" role="progressbar" aria-label="Remaining" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" title="Remaining: 3,214 Days"><div className="progress-bar lb-fill-secondary-container"></div></div>
                                        </div>

                                        <div className="row g-2 text-center mt-3 pt-3 lb-divider-top">
                                            <div className="col-4">
                                                <div className="lb-panel-soft h-100 p-2">
                                                    <div className="text-label-md text-outline-tok">Entitled</div>
                                                    <div className="fw-bold lb-text-strong">5,952 d</div>
                                                    <div className="text-label-md text-outline-tok">100% pool</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="rounded-3 lb-tone-primary h-100 p-2">
                                                    <div className="text-label-md fw-medium">Used Days</div>
                                                    <div className="fw-bold">2,418 d</div>
                                                    <div className="text-label-md fw-medium">40.6% burn</div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="rounded-3 lb-tone-secondary h-100 p-2">
                                                    <div className="text-label-md fw-medium">Remaining</div>
                                                    <div className="fw-bold">3,534 d</div>
                                                    <div className="text-label-md fw-medium">59.4% reserve</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 pt-3 lb-divider-top d-flex flex-wrap align-items-center justify-content-between gap-2 text-label-md text-on-surface-variant-tok">
                                        <span>Audit verified: Today at 08:30 AM</span>
                                        <a href="#" className="text-primary-tok fw-semibold d-inline-flex align-items-center gap-1">
                                            <span>View Full Audit</span><span className="material-symbols-outlined lb-icon-2xs">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Leave type breakdown --> */}
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="card lb-card shadow-sm h-100">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <h2 className="text-headline-sm m-0">Leave Type Breakdown</h2>
                                            <span className="material-symbols-outlined text-outline-tok">pie_chart</span>
                                        </div>
                                        <p className="text-body-sm text-on-surface-variant-tok mb-3">Hospital quota consumption segmented by leave category.</p>

                                        <div className="d-flex flex-column gap-3">
                                            <div>
                                                <div className="d-flex flex-wrap justify-content-between gap-1 text-body-sm fw-medium mb-1">
                                                    <span className="d-flex align-items-center gap-2 lb-text-strong"><span className="lb-dot lb-dot-primary"></span>Annual Leave (AL)</span>
                                                    <span className="lb-text-strong">1,420 / 3,120 d <span className="text-outline-tok text-label-md fw-normal">(45.5%)</span></span>
                                                </div>
                                                <div className="progress lb-progress" role="progressbar" aria-label="Annual leave" aria-valuenow="45.5" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-primary lb-pct-45-5"></div></div>
                                            </div>
                                            <div>
                                                <div className="d-flex flex-wrap justify-content-between gap-1 text-body-sm fw-medium mb-1">
                                                    <span className="d-flex align-items-center gap-2 lb-text-strong"><span className="lb-dot lb-dot-secondary"></span>Sick Leave (SL)</span>
                                                    <span className="lb-text-strong">432 / 1,488 d <span className="text-outline-tok text-label-md fw-normal">(29.0%)</span></span>
                                                </div>
                                                <div className="progress lb-progress" role="progressbar" aria-label="Sick leave" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-secondary lb-pct-29"></div></div>
                                            </div>
                                            <div>
                                                <div className="d-flex flex-wrap justify-content-between gap-1 text-body-sm fw-medium mb-1">
                                                    <span className="d-flex align-items-center gap-2 lb-text-strong"><span className="lb-dot lb-dot-tertiary"></span>Casual Leave (CL)</span>
                                                    <span className="lb-text-strong">312 / 620 d <span className="text-outline-tok text-label-md fw-normal">(50.3%)</span></span>
                                                </div>
                                                <div className="progress lb-progress" role="progressbar" aria-label="Casual leave" aria-valuenow="50.3" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-tertiary lb-pct-50-3"></div></div>
                                            </div>
                                            <div>
                                                <div className="d-flex flex-wrap justify-content-between gap-1 text-body-sm fw-medium mb-1">
                                                    <span className="d-flex align-items-center gap-2 lb-text-strong"><span className="lb-dot lb-dot-primary-container"></span>Maternity / Paternity</span>
                                                    <span className="lb-text-strong">180 / 480 d <span className="text-outline-tok text-label-md fw-normal">(37.5%)</span></span>
                                                </div>
                                                <div className="progress lb-progress" role="progressbar" aria-label="Maternity and paternity leave" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-primary-container lb-pct-37-5"></div></div>
                                            </div>
                                            <div>
                                                <div className="d-flex flex-wrap justify-content-between gap-1 text-body-sm fw-medium mb-1">
                                                    <span className="d-flex align-items-center gap-2 lb-text-strong"><span className="lb-dot lb-dot-outline"></span>Special Study / Research</span>
                                                    <span className="lb-text-strong">74 / 244 d <span className="text-outline-tok text-label-md fw-normal">(30.3%)</span></span>
                                                </div>
                                                <div className="progress lb-progress" role="progressbar" aria-label="Special study leave" aria-valuenow="30.3" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-outline lb-pct-30-3"></div></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 d-flex justify-content-between text-label-md text-outline-tok">
                                        <span>Standard accrual rate applies</span>
                                        <span className="text-primary-tok fw-medium">Policy v4.2</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Department slice --> */}
                        <div className="col-12 col-xl-4">
                            <div className="card lb-card shadow-sm h-100">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <h2 className="text-headline-sm m-0">Department Slice</h2>
                                            <span className="material-symbols-outlined text-outline-tok">filter_list</span>
                                        </div>
                                        <p className="text-body-sm text-on-surface-variant-tok mb-3">Quick comparative analytics across hospital divisions.</p>

                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            <button type="button" className="lb-chip active">All (248)</button>
                                            <button type="button" className="lb-chip">Cardiology (42)</button>
                                            <button type="button" className="lb-chip">ICU (56)</button>
                                            <button type="button" className="lb-chip">Pediatrics (38)</button>
                                            <button type="button" className="lb-chip">Pharmacy (24)</button>
                                            <button type="button" className="lb-chip">Surgery (48)</button>
                                        </div>

                                        <div className="d-flex flex-column gap-2">
                                            <div className="lb-panel d-flex align-items-center justify-content-between gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="lb-dot lb-dot-sm lb-dot-error"></span>
                                                    <div>
                                                        <div className="text-body-sm fw-semibold lb-text-strong">ICU &amp; Critical Care</div>
                                                        <div className="text-label-md text-on-surface-variant-tok">56 Medical Officers</div>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <div className="text-body-sm fw-bold text-error-tok">64.2% Used</div>
                                                    <div className="text-label-md text-outline-tok">High coverage load</div>
                                                </div>
                                            </div>
                                            <div className="lb-panel d-flex align-items-center justify-content-between gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="lb-dot lb-dot-sm lb-dot-secondary"></span>
                                                    <div>
                                                        <div className="text-body-sm fw-semibold lb-text-strong">Cardiology</div>
                                                        <div className="text-label-md text-on-surface-variant-tok">42 Medical Officers</div>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <div className="text-body-sm fw-bold text-secondary-tok">38.1% Used</div>
                                                    <div className="text-label-md text-outline-tok">Healthy reserve</div>
                                                </div>
                                            </div>
                                            <div className="lb-panel d-flex align-items-center justify-content-between gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="lb-dot lb-dot-sm lb-dot-primary"></span>
                                                    <div>
                                                        <div className="text-body-sm fw-semibold lb-text-strong">Pediatrics</div>
                                                        <div className="text-label-md text-on-surface-variant-tok">38 Medical Officers</div>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <div className="text-body-sm fw-bold text-primary-tok">42.8% Used</div>
                                                    <div className="text-label-md text-outline-tok">Normal rota</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" className="lb-dashed-btn mt-3">+ Generate Departmental Rota Forecast</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= FILTERS ================= --> */}
                    <section className="card lb-card shadow-sm">
                        <div className="card-body">
                            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 mb-3 pb-3 lb-divider-bottom">
                                <div className="d-flex flex-wrap align-items-center gap-2">
                                    <span className="material-symbols-outlined text-primary-tok">tune</span>
                                    <h2 className="text-headline-sm m-0">Filter Records</h2>
                                    <span className="lb-pill lb-pill-sm lb-tone-neutral fw-medium">Multi-Parameter Search</span>
                                </div>
                                <button type="button" className="lb-link-btn">
                                    <span className="material-symbols-outlined lb-icon-xs">restart_alt</span><span>Reset All Filters</span>
                                </button>
                            </div>

                            <form className="row g-3">
                                <div className="col-12 col-md-6 col-xl-4">
                                    <label className="lb-label" htmlFor="fltEmployee">Search Employee</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><span className="material-symbols-outlined lb-icon-md">person_search</span></span>
                                        <input id="fltEmployee" type="text" className="form-control" placeholder="e.g. EMP-1042 or Dr. Marcus..." value="Dr. Marcus Vance" />
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="lb-label" htmlFor="fltDept">Department</label>
                                    <select id="fltDept" className="form-select">
                                        <option value="">All Departments</option>
                                        <option value="Cardiology" selected>Cardiology</option>
                                        <option value="ICU">ICU &amp; Critical Care</option>
                                        <option value="Pediatrics">Pediatrics</option>
                                        <option value="Surgery">Surgery</option>
                                        <option value="Radiology">Radiology &amp; MRI</option>
                                        <option value="Pathology">Clinical Pathology</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="lb-label" htmlFor="fltDesig">Designation</label>
                                    <select id="fltDesig" className="form-select">
                                        <option value="">All Designations</option>
                                        <option value="Consultant">Consultant</option>
                                        <option value="Senior Registrar" selected>Senior Registrar</option>
                                        <option value="Head Nurse">Head Nurse</option>
                                        <option value="Pharmacist">Lead Pharmacist</option>
                                        <option value="Lab Director">Lab Director</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="lb-label" htmlFor="fltType">Leave Type</label>
                                    <select id="fltType" className="form-select">
                                        <option value="">All Types</option>
                                        <option value="Annual">Annual Leave</option>
                                        <option value="Casual">Casual Leave</option>
                                        <option value="Sick">Sick Leave</option>
                                        <option value="Maternity">Maternity Leave</option>
                                        <option value="Study">Special Study Leave</option>
                                    </select>
                                </div>

                                <div className="col-6 col-md-3 col-xl-2">
                                    <label className="lb-label" htmlFor="fltStatus">Balance Status</label>
                                    <select id="fltStatus" className="form-select">
                                        <option value="">All Statuses</option>
                                        <option value="Healthy">Healthy / Available</option>
                                        <option value="Low">Low Balance (&lt; 3 d)</option>
                                        <option value="Exhausted">Exhausted (0 d)</option>
                                        <option value="Overdrawn">Overdrawn</option>
                                    </select>
                                </div>

                                <div className="col-12 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 pt-2">
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <span className="text-label-md text-on-surface-variant-tok">Active Filters:</span>
                                        <span className="lb-chip-removable">Year: 2025 <button type="button" aria-label="Remove year filter"><span className="material-symbols-outlined lb-icon-2xs">close</span></button></span>
                                        <span className="lb-chip-removable">Dept: Cardiology <button type="button" aria-label="Remove department filter"><span className="material-symbols-outlined lb-icon-2xs">close</span></button></span>
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row gap-2">
                                        <button type="button" className="btn btn-outline-secondary-custom btn-sm">Reset</button>
                                        <button type="button" className="btn btn-brand-primary btn-sm d-inline-flex align-items-center justify-content-center gap-1">
                                            <span className="material-symbols-outlined lb-icon-xs">filter_alt</span><span>Filter Records</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>

                    {/* <!-- ================= STAFF TABLE ================= --> */}
                    <section className="card lb-card shadow-sm overflow-hidden">
                        <div className="card-header lb-card-header-bar px-3 px-md-4 py-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                            <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3">
                                <h2 className="text-headline-sm m-0">Staff Leave Balances</h2>
                                <span className="lb-pill lb-tone-secondary text-label-md">248 Total Records</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 text-label-md">
                                <label className="text-on-surface-variant-tok" htmlFor="rowsPerPage">Rows per page:</label>
                                <select id="rowsPerPage" className="form-select form-select-sm w-auto">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </select>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover lb-table lb-table-wide">
                                <thead>
                                    <tr>
                                        <th scope="col">Employee ID</th>
                                        <th scope="col">Employee Name</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Leave Type</th>
                                        <th scope="col" className="text-end">Entitled</th>
                                        <th scope="col" className="text-end">C/F</th>
                                        <th scope="col" className="text-end">Adj (+/-)</th>
                                        <th scope="col" className="text-end">Used</th>
                                        <th scope="col" className="text-end">Pending</th>
                                        <th scope="col" className="lb-col-status">Remaining &amp; Status</th>
                                        <th scope="col" className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="lb-row-highlight">
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1042</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-primary">MV</span>
                                                <div><div className="fw-semibold lb-text-strong">Dr. Marcus Vance, MD</div><div className="text-label-md text-outline-tok">Cardiology Dept</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">Cardiology</td>
                                        <td className="text-on-surface-variant-tok">Senior Registrar</td>
                                        <td><span className="lb-tag lb-tone-neutral text-primary-tok">Annual Leave</span></td>
                                        <td className="text-end font-mono">24</td>
                                        <td className="text-end font-mono fw-medium text-secondary-tok">+4</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">14</td>
                                        <td className="text-end font-mono text-outline-tok">2</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span>12 Days</span><span className="lb-pill lb-pill-sm lb-tone-tertiary">Healthy</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="50% used" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-primary lb-pct-50"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1188</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-secondary">SJ</span>
                                                <div><div className="fw-semibold lb-text-strong">Nurse Sarah Jenkins, RN</div><div className="text-label-md text-outline-tok">Critical Care Team</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">ICU &amp; Critical Care</td>
                                        <td className="text-on-surface-variant-tok">Head Nurse</td>
                                        <td><span className="lb-tag lb-tone-neutral text-secondary-tok">Sick Leave</span></td>
                                        <td className="text-end font-mono">14</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono fw-medium text-secondary-tok">+2</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">13</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span className="text-error-tok">3 Days</span><span className="lb-pill lb-pill-sm lb-tone-error">Low Balance</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="81% used" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-error lb-pct-81"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1304</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-neutral">DC</span>
                                                <div><div className="fw-semibold lb-text-strong">David Chen, PharmD</div><div className="text-label-md text-outline-tok">Clinical Dispensary</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">Central Pharmacy</td>
                                        <td className="text-on-surface-variant-tok">Lead Pharmacist</td>
                                        <td><span className="lb-tag lb-tone-neutral text-tertiary-tok">Casual Leave</span></td>
                                        <td className="text-end font-mono">10</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono fw-medium text-error-tok">-1</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">9</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span className="text-error-tok">0 Days</span><span className="lb-pill lb-pill-sm lb-tone-error">Exhausted</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="100% used" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-error lb-pct-100"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1420</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-primary">AP</span>
                                                <div><div className="fw-semibold lb-text-strong">Dr. Anita Patel</div><div className="text-label-md text-outline-tok">Neonatal Unit</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">Pediatrics</td>
                                        <td className="text-on-surface-variant-tok">Consultant Pediatrician</td>
                                        <td><span className="lb-tag lb-tone-neutral text-primary-tok">Annual Leave</span></td>
                                        <td className="text-end font-mono">24</td>
                                        <td className="text-end font-mono fw-medium text-secondary-tok">+2</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">18</td>
                                        <td className="text-end font-mono text-outline-tok">3</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span>5 Days</span><span className="lb-pill lb-pill-sm lb-tone-tertiary">Healthy</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="75% used" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-primary lb-pct-75"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1502</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-secondary">KZ</span>
                                                <div><div className="fw-semibold lb-text-strong">Dr. Kevin Zhang</div><div className="text-label-md text-outline-tok">Surgical Theater</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">Anesthesiology</td>
                                        <td className="text-on-surface-variant-tok">Resident Anesthesiologist</td>
                                        <td><span className="lb-tag lb-tone-neutral text-primary-tok">Annual Leave</span></td>
                                        <td className="text-end font-mono">20</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">10</td>
                                        <td className="text-end font-mono text-outline-tok">1</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span>9 Days</span><span className="lb-pill lb-pill-sm lb-tone-tertiary">Healthy</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="50% used" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-primary lb-pct-50"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1621</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-neutral">LW</span>
                                                <div><div className="fw-semibold lb-text-strong">Linda Wu, RTR</div><div className="text-label-md text-outline-tok">Diagnostic Imaging</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">Radiology &amp; MRI</td>
                                        <td className="text-on-surface-variant-tok">Senior Radiographer</td>
                                        <td><span className="lb-tag lb-tone-neutral text-tertiary-tok">Casual Leave</span></td>
                                        <td className="text-end font-mono">10</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">10</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span className="text-error-tok">0 Days</span><span className="lb-pill lb-pill-sm lb-tone-error">Exhausted</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="100% used" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-error lb-pct-100"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="font-mono fw-medium text-primary-tok">EMP-1740</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="lb-avatar lb-tone-primary">CB</span>
                                                <div><div className="fw-semibold lb-text-strong">Dr. Claire Bennett</div><div className="text-label-md text-outline-tok">Histopathology Lab</div></div>
                                            </div>
                                        </td>
                                        <td className="fw-medium">Clinical Pathology</td>
                                        <td className="text-on-surface-variant-tok">Lab Director</td>
                                        <td><span className="lb-tag lb-tone-neutral text-secondary-tok">Sick Leave</span></td>
                                        <td className="text-end font-mono">14</td>
                                        <td className="text-end font-mono fw-medium text-secondary-tok">+2</td>
                                        <td className="text-end font-mono fw-medium text-secondary-tok">+1</td>
                                        <td className="text-end font-mono fw-medium text-primary-tok">4</td>
                                        <td className="text-end font-mono text-outline-tok">0</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between gap-2 text-body-sm fw-semibold mb-1">
                                                <span>13 Days</span><span className="lb-pill lb-pill-sm lb-tone-tertiary">Healthy</span>
                                            </div>
                                            <div className="progress lb-progress lb-progress-sm" role="progressbar" aria-label="25% used" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar lb-fill-primary lb-pct-25"></div></div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-inline-flex align-items-center gap-1">
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#details-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lb-icon-sm">visibility</span></button>
                                                <button type="button" className="icon-btn lb-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal" title="Quick Adjust" aria-label="Quick adjust"><span className="material-symbols-outlined lb-icon-sm">tune</span></button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="card-footer px-3 px-md-4 py-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                            <div className="text-body-sm text-on-surface-variant-tok text-center text-md-start">
                                Showing <span className="fw-semibold lb-text-strong">1</span> to <span className="fw-semibold lb-text-strong">7</span> of <span className="fw-semibold lb-text-strong">248</span> records
                            </div>
                            <nav aria-label="Table pagination">
                                <ul className="pagination pagination-sm lb-pagination mb-0">
                                    <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
                                    <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item disabled"><span className="page-link">...</span></li>
                                    <li className="page-item"><a className="page-link" href="#">36</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    {/* <!-- ================= EMPTY STATE ================= --> */}
                    <section className="lb-empty p-4 p-md-5 text-center">
                        <div className="mx-auto d-flex flex-column align-items-center gap-3">
                            <span className="lb-empty-icon"><span className="material-symbols-outlined lb-icon-lg">search_off</span></span>
                            <h3 className="text-headline-sm m-0">No Personnel Records Matching Filters</h3>
                            <p className="text-body-sm text-on-surface-variant-tok m-0 col-12 col-md-8 col-lg-6">
                                No staff members found matching the specified parameters for Leave Year 2025. Verify employee ID or clear active department filters.
                            </p>
                            <button type="button" className="btn lb-btn-soft d-inline-flex align-items-center gap-2 text-body-sm">
                                <span className="material-symbols-outlined lb-icon-xs">clear_all</span><span>Reset Search Criteria</span>
                            </button>
                        </div>
                    </section>

                </div>
            </main>

            {/* <!-- ======================================================== --> */}
            {/* <!-- OFFCANVAS: EMPLOYEE BALANCE DETAILS                      --> */}
            {/* <!-- ======================================================== --> */}
            <div className="offcanvas offcanvas-end lb-scope lb-offcanvas" tabindex="-1" id="details-drawer" aria-labelledby="details-drawer-label">
                <div className="offcanvas-header p-3 p-md-4">
                    <div className="d-flex align-items-center gap-3">
                        <span className="lb-avatar lb-avatar-lg">MV</span>
                        <div>
                            <div className="d-flex flex-wrap align-items-center gap-2">
                                <h2 className="text-headline-sm m-0" id="details-drawer-label">Dr. Marcus Vance, MD</h2>
                                <span className="lb-pill lb-pill-sm lb-tone-secondary">Active</span>
                            </div>
                            <div className="text-label-md text-on-surface-variant-tok">EMP-1042 • Cardiology • Senior Registrar</div>
                        </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-3 p-md-4 d-flex flex-column gap-4">

                    <div className="lb-panel-lg">
                        <div className="row g-3 text-body-sm">
                            <div className="col-6 col-sm-3"><div className="text-label-md text-outline-tok">Date of Joining</div><div className="fw-semibold lb-text-strong">12 Jan 2021</div></div>
                            <div className="col-6 col-sm-3"><div className="text-label-md text-outline-tok">Contract Type</div><div className="fw-semibold lb-text-strong">Full-Time Perm</div></div>
                            <div className="col-6 col-sm-3"><div className="text-label-md text-outline-tok">Rota Tier</div><div className="fw-semibold lb-text-strong">Tier-1 Call</div></div>
                            <div className="col-6 col-sm-3"><div className="text-label-md text-outline-tok">Current FY Period</div><div className="fw-semibold text-primary-tok">2025 Calendar</div></div>
                        </div>
                    </div>

                    <div>
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                            <h3 className="text-headline-sm m-0">Leave Entitlement Quota (2025)</h3>
                            <button type="button" className="lb-link-btn" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal">
                                <span className="material-symbols-outlined lb-icon-2xs">add</span><span>Manual Credit</span>
                            </button>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <div className="lb-card-plain h-100">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="fw-semibold text-body-md lb-text-strong">Annual Leave</span>
                                        <span className="lb-tag lb-tag-fixed lb-tone-primary">12 Days Left</span>
                                    </div>
                                    <div className="row g-2 pt-2 lb-divider-top text-label-md text-on-surface-variant-tok">
                                        <div className="col-4">Entitled: <b className="lb-text-strong">24</b></div>
                                        <div className="col-4">C/F: <b className="text-secondary-tok">+4</b></div>
                                        <div className="col-4">Adj: <b className="lb-text-strong">0</b></div>
                                        <div className="col-4">Used: <b className="text-primary-tok fw-medium">14</b></div>
                                        <div className="col-4">Pending: <b className="text-outline-tok">2</b></div>
                                        <div className="col-4">Total: <b className="lb-text-strong">28</b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="lb-card-plain h-100">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="fw-semibold text-body-md lb-text-strong">Casual Leave</span>
                                        <span className="lb-tag lb-tag-fixed lb-tone-tertiary">6 Days Left</span>
                                    </div>
                                    <div className="row g-2 pt-2 lb-divider-top text-label-md text-on-surface-variant-tok">
                                        <div className="col-4">Entitled: <b className="lb-text-strong">10</b></div>
                                        <div className="col-4">C/F: <b className="text-outline-tok">0</b></div>
                                        <div className="col-4">Adj: <b className="lb-text-strong">0</b></div>
                                        <div className="col-4">Used: <b className="text-primary-tok fw-medium">4</b></div>
                                        <div className="col-4">Pending: <b className="text-outline-tok">0</b></div>
                                        <div className="col-4">Total: <b className="lb-text-strong">10</b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="lb-card-plain h-100">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="fw-semibold text-body-md lb-text-strong">Sick Leave</span>
                                        <span className="lb-tag lb-tag-fixed lb-tone-secondary">11 Days Left</span>
                                    </div>
                                    <div className="row g-2 pt-2 lb-divider-top text-label-md text-on-surface-variant-tok">
                                        <div className="col-4">Entitled: <b className="lb-text-strong">14</b></div>
                                        <div className="col-4">C/F: <b className="text-outline-tok">0</b></div>
                                        <div className="col-4">Adj: <b className="lb-text-strong">0</b></div>
                                        <div className="col-4">Used: <b className="text-primary-tok fw-medium">3</b></div>
                                        <div className="col-4">Pending: <b className="text-outline-tok">0</b></div>
                                        <div className="col-4">Total: <b className="lb-text-strong">14</b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="lb-card-plain h-100">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <span className="fw-semibold text-body-md lb-text-strong">Special Study Leave</span>
                                        <span className="lb-tag lb-tag-fixed lb-tone-primary">7 Days Left</span>
                                    </div>
                                    <div className="row g-2 pt-2 lb-divider-top text-label-md text-on-surface-variant-tok">
                                        <div className="col-4">Entitled: <b className="lb-text-strong">7</b></div>
                                        <div className="col-4">C/F: <b className="text-outline-tok">0</b></div>
                                        <div className="col-4">Adj: <b className="text-secondary-tok fw-medium">+2</b></div>
                                        <div className="col-4">Used: <b className="text-primary-tok fw-medium">2</b></div>
                                        <div className="col-4">Pending: <b className="text-outline-tok">0</b></div>
                                        <div className="col-4">Total: <b className="lb-text-strong">9</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-headline-sm mb-3">Leave Transaction Ledger</h3>
                        <div className="card lb-card shadow-sm overflow-hidden">
                            <div className="table-responsive">
                                <table className="table lb-table lb-table-compact lb-table-mid">
                                    <thead>
                                        <tr>
                                            <th scope="col">Txn ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Action</th>
                                            <th scope="col" className="text-end">Change</th>
                                            <th scope="col" className="text-end">Balance</th>
                                            <th scope="col">Updated By</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="font-mono text-primary-tok">TX-8921</td><td className="text-label-md">14 Feb 2025</td><td>Annual</td>
                                            <td><span className="text-label-md fw-semibold text-error-tok">Leave Deduction</span></td>
                                            <td className="text-end font-mono fw-medium text-error-tok">-4.0 d</td><td className="text-end font-mono fw-semibold">12.0 d</td>
                                            <td className="text-label-md text-on-surface-variant-tok">Admin System</td>
                                        </tr>
                                        <tr>
                                            <td className="font-mono text-primary-tok">TX-8802</td><td className="text-label-md">28 Jan 2025</td><td>Study</td>
                                            <td><span className="text-label-md fw-semibold text-secondary-tok">Manual Adjustment</span></td>
                                            <td className="text-end font-mono fw-medium text-secondary-tok">+2.0 d</td><td className="text-end font-mono fw-semibold">7.0 d</td>
                                            <td className="text-label-md text-on-surface-variant-tok">Dr. E. Rostova</td>
                                        </tr>
                                        <tr>
                                            <td className="font-mono text-primary-tok">TX-8650</td><td className="text-label-md">10 Jan 2025</td><td>Annual</td>
                                            <td><span className="text-label-md fw-semibold text-primary-tok">Leave Deduction</span></td>
                                            <td className="text-end font-mono fw-medium text-error-tok">-10.0 d</td><td className="text-end font-mono fw-semibold">16.0 d</td>
                                            <td className="text-label-md text-on-surface-variant-tok">Rota Director</td>
                                        </tr>
                                        <tr>
                                            <td className="font-mono text-primary-tok">TX-8411</td><td className="text-label-md">01 Jan 2025</td><td>Annual</td>
                                            <td><span className="text-label-md fw-semibold text-secondary-tok">Carry Forward</span></td>
                                            <td className="text-end font-mono fw-medium text-secondary-tok">+4.0 d</td><td className="text-end font-mono fw-semibold">28.0 d</td>
                                            <td className="text-label-md text-on-surface-variant-tok">HR Batch Exec</td>
                                        </tr>
                                        <tr>
                                            <td className="font-mono text-primary-tok">TX-8400</td><td className="text-label-md">01 Jan 2025</td><td>Annual</td>
                                            <td><span className="text-label-md fw-semibold lb-text-strong">Initial Allocation</span></td>
                                            <td className="text-end font-mono fw-medium text-primary-tok">+24.0 d</td><td className="text-end font-mono fw-semibold">24.0 d</td>
                                            <td className="text-label-md text-on-surface-variant-tok">System Policy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lb-offcanvas-footer d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center justify-content-sm-between gap-2">
                    <button type="button" className="btn btn-outline-secondary-custom btn-sm">Print Statement</button>
                    <div className="d-flex flex-column flex-sm-row gap-2">
                        <button type="button" className="btn btn-outline-secondary-custom btn-sm" data-bs-dismiss="offcanvas">Close</button>
                        <button type="button" className="btn btn-brand-primary btn-sm" data-bs-toggle="modal" data-bs-target="#adjust-balance-modal">Adjust Balance</button>
                    </div>
                </div>
            </div>

            {/* <!-- ======================================================== --> */}
            {/* <!-- MODAL: ADJUST BALANCE                                    --> */}
            {/* <!-- ======================================================== --> */}
            <div className="modal fade lb-scope lb-modal" id="adjust-balance-modal" tabindex="-1" aria-labelledby="adjust-balance-label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
                    <div className="modal-content shadow">
                        <div className="modal-header px-3 px-md-4 py-3">
                            <div className="d-flex align-items-center gap-2">
                                <span className="lb-icon-chip lb-chip-solid"><span className="material-symbols-outlined lb-icon-sm">tune</span></span>
                                <div>
                                    <h3 className="modal-title text-headline-sm" id="adjust-balance-label">Adjust Leave Balance</h3>
                                    <p className="text-label-md text-on-surface-variant-tok m-0">Record administrative credit or debit manual adjustments</p>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body px-3 px-md-4 py-3">
                            <form className="row g-3 text-body-sm" id="adjust-form">
                                <div className="col-12">
                                    <label className="lb-label" htmlFor="adjEmployee">Select Employee</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><span className="material-symbols-outlined lb-icon-md">person</span></span>
                                        <input id="adjEmployee" type="text" className="form-control" value="Dr. Marcus Vance (EMP-1042) - Cardiology" />
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="lb-label" htmlFor="adjYear">Leave Year</label>
                                    <select id="adjYear" className="form-select">
                                        <option value="2025" selected>2025</option>
                                        <option value="2024">2024</option>
                                        <option value="2026">2026</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label className="lb-label" htmlFor="adjType">Leave Type</label>
                                    <select id="adjType" className="form-select">
                                        <option value="Annual">Annual Leave</option>
                                        <option value="Sick">Sick Leave</option>
                                        <option value="Casual">Casual Leave</option>
                                        <option value="Compensatory" selected>Compensatory Off</option>
                                        <option value="Study">Special Study Leave</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <span className="lb-label">Adjustment Action</span>
                                    <div className="lb-toggle">
                                        <div>
                                            <input type="radio" className="btn-check" name="adj_type" id="adjAdd" autocomplete="off" checked />
                                            <label className="btn lb-toggle-label w-100" htmlFor="adjAdd"><span className="material-symbols-outlined lb-icon-xs">add</span><span>Add Days (+)</span></label>
                                        </div>
                                        <div>
                                            <input type="radio" className="btn-check" name="adj_type" id="adjDeduct" autocomplete="off" />
                                            <label className="btn lb-toggle-label w-100" htmlFor="adjDeduct"><span className="material-symbols-outlined lb-icon-xs">remove</span><span>Deduct Days (-)</span></label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="lb-label" htmlFor="adjDays">Number of Days</label>
                                    <input id="adjDays" type="number" className="form-control font-mono" step="0.5" value="2.0" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label className="lb-label" htmlFor="adjDate">Effective Date</label>
                                    <input id="adjDate" type="date" className="form-control" value="2025-02-18" />
                                </div>

                                <div className="col-12">
                                    <label className="lb-label" htmlFor="adjReason">Reason / Clinical Administrative Justification</label>
                                    <textarea id="adjReason" className="form-control" rows="3" placeholder="Provide reason for quota adjustment...">Approved compensatory credit for weekend on-call surgical coverage during emergency rota surge.</textarea>
                                </div>

                                <div className="col-12">
                                    <div className="lb-panel-soft d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-1 text-label-md">
                                        <span className="text-on-surface-variant-tok">Authorized Sign-off:</span>
                                        <span className="fw-semibold text-primary-tok">Dr. Elena Rostova (HR Chief &amp; Medical Admin)</span>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer px-3 px-md-4 py-3 d-flex flex-column-reverse flex-sm-row justify-content-sm-end gap-2">
                            <button type="button" className="btn btn-outline-secondary-custom btn-sm" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-brand-primary btn-sm d-inline-flex align-items-center justify-content-center gap-1" data-bs-dismiss="modal">
                                <span className="material-symbols-outlined lb-icon-xs">check</span><span>Save Adjustment</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
