import '../../assets/css/LeaveDashboard.css'

export default function LeaveDashboard() {
    return (
        <>
            <main className="lm-page flex-grow-1 p-3 p-md-4">
                <div className="lm-content d-flex flex-column gap-4">

                    {/* <!-- ================= PAGE HEADER ================= --> */}
                    <section className="row g-3 align-items-xl-center">
                        <div className="col-12 col-xl">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb lm-breadcrumb text-label-md">
                                    <li className="breadcrumb-item"><a href="#">HR Management</a></li>
                                    <li className="breadcrumb-item"><a href="#">Staff Operations</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Leave Management Dashboard</li>
                                </ol>
                            </nav>
                            <h1 className="text-headline-lg lm-title m-0">Leave Management Dashboard</h1>
                            <p className="text-body-md text-on-surface-variant-tok m-0">Monitor medical staff attendance, pending departmental leave requests, and hospital-wide roster balance.</p>
                        </div>

                        <div className="col-12 col-xl-auto">
                            <div className="d-flex flex-wrap gap-2">
                                <button type="button" className="btn btn-brand-primary d-inline-flex align-items-center gap-2 text-body-md fw-medium">
                                    <span className="material-symbols-outlined lm-icon-lg">add</span>
                                    <span>Apply for Leave</span>
                                </button>
                                <button type="button" className="btn lm-btn-light text-body-sm">
                                    <span className="material-symbols-outlined lm-icon-md">visibility</span>
                                    <span>View Applications</span>
                                </button>
                                <button type="button" className="btn lm-btn-light text-body-sm">
                                    <span className="material-symbols-outlined lm-icon-md">tune</span>
                                    <span>Manage Leave Types</span>
                                </button>
                                <button type="button" className="btn lm-btn-light text-body-sm">
                                    <span className="material-symbols-outlined lm-icon-md">account_balance_wallet</span>
                                    <span>View Leave Balance</span>
                                </button>
                                <button type="button" className="btn lm-btn-light text-body-sm">
                                    <span className="material-symbols-outlined lm-icon-md">file_download</span>
                                    <span>Export Report</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= KPI CARDS ================= --> */}
                    <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3">
                        <div className="col">
                            <div className="lm-card lm-card-hover p-3 p-md-4 h-100">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <span className="lm-kpi-label">Total Employees</span>
                                    <div className="lm-kpi-icon lm-kpi-icon-primary"><span className="material-symbols-outlined lm-icon-lg">groups</span></div>
                                </div>
                                <div className="text-headline-lg">248</div>
                                <div className="d-flex align-items-center gap-1 mt-2 text-label-md text-tertiary-tok">
                                    <span className="material-symbols-outlined lm-icon-sm">check_circle</span>
                                    <span>All registered staff</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="lm-card lm-card-hover p-3 p-md-4 h-100">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <span className="lm-kpi-label">On Leave Today</span>
                                    <div className="lm-kpi-icon lm-kpi-icon-secondary"><span className="material-symbols-outlined lm-icon-lg">event_busy</span></div>
                                </div>
                                <div className="text-headline-lg">14</div>
                                <div className="d-flex align-items-center gap-2 mt-2 text-label-md text-on-surface-variant-tok">
                                    <span className="lm-dot lm-dot-secondary"></span>
                                    <span>5.6% of clinical force</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="lm-card lm-card-hover p-3 p-md-4 h-100">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <span className="lm-kpi-label">Pending Review</span>
                                    <div className="lm-kpi-icon lm-kpi-icon-amber"><span className="material-symbols-outlined lm-icon-lg">pending_actions</span></div>
                                </div>
                                <div className="text-headline-lg">8</div>
                                <div className="d-flex align-items-center gap-1 mt-2 text-label-md lm-text-amber">
                                    <span className="material-symbols-outlined lm-icon-sm">hourglass_top</span>
                                    <span>Awaiting Dept Head</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="lm-card lm-card-hover p-3 p-md-4 h-100">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <span className="lm-kpi-label">Approved (March)</span>
                                    <div className="lm-kpi-icon lm-kpi-icon-emerald"><span className="material-symbols-outlined lm-icon-lg">task_alt</span></div>
                                </div>
                                <div className="text-headline-lg">36</div>
                                <div className="d-flex align-items-center gap-1 mt-2 text-label-md text-tertiary-tok">
                                    <span className="material-symbols-outlined lm-icon-sm">trending_up</span>
                                    <span>+4% vs last month</span>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="lm-card lm-card-hover p-3 p-md-4 h-100">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <span className="lm-kpi-label">Upcoming (14d)</span>
                                    <div className="lm-kpi-icon lm-kpi-icon-primary"><span className="material-symbols-outlined lm-icon-lg">date_range</span></div>
                                </div>
                                <div className="text-headline-lg">19</div>
                                <div className="d-flex align-items-center gap-1 mt-2 text-label-md text-on-surface-variant-tok">
                                    <span className="material-symbols-outlined lm-icon-sm">event_repeat</span>
                                    <span>Scheduled rosters safe</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= ANALYTICS ================= --> */}
                    <section className="row g-4">

                        {/* <!-- Status breakdown --> */}
                        <div className="col-12 col-md-6 col-xl-4 order-1">
                            <div className="lm-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="lm-card-head d-flex align-items-center justify-content-between pb-3">
                                        <h2 className="text-headline-sm m-0">Status Breakdown</h2>
                                        <span className="text-label-md text-on-surface-variant-tok">Current Cycle</span>
                                    </div>

                                    <div className="d-flex flex-column gap-3 mt-4">
                                        <div>
                                            <div className="d-flex justify-content-between align-items-center text-body-sm mb-2">
                                                <span className="d-flex align-items-center gap-2 fw-medium"><span className="lm-dot lm-dot-lg lm-dot-amber"></span>Pending Review</span>
                                                <span className="fw-semibold">8 <span className="text-on-surface-variant-tok fw-normal lm-text-xs">(16%)</span></span>
                                            </div>
                                            <div className="progress lm-progress" role="progressbar" aria-label="Pending" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-amber lm-pct-16"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between align-items-center text-body-sm mb-2">
                                                <span className="d-flex align-items-center gap-2 fw-medium"><span className="lm-dot lm-dot-lg lm-dot-emerald"></span>Approved Requests</span>
                                                <span className="fw-semibold">36 <span className="text-on-surface-variant-tok fw-normal lm-text-xs">(72%)</span></span>
                                            </div>
                                            <div className="progress lm-progress" role="progressbar" aria-label="Approved" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-emerald lm-pct-72"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between align-items-center text-body-sm mb-2">
                                                <span className="d-flex align-items-center gap-2 fw-medium"><span className="lm-dot lm-dot-lg lm-dot-error"></span>Rejected / Conflicted</span>
                                                <span className="fw-semibold">4 <span className="text-on-surface-variant-tok fw-normal lm-text-xs">(8%)</span></span>
                                            </div>
                                            <div className="progress lm-progress" role="progressbar" aria-label="Rejected" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-error lm-pct-8"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between align-items-center text-body-sm mb-2">
                                                <span className="d-flex align-items-center gap-2 fw-medium"><span className="lm-dot lm-dot-lg lm-dot-outline"></span>Cancelled by Staff</span>
                                                <span className="fw-semibold">2 <span className="text-on-surface-variant-tok fw-normal lm-text-xs">(4%)</span></span>
                                            </div>
                                            <div className="progress lm-progress" role="progressbar" aria-label="Cancelled" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-outline lm-pct-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lm-card-foot pt-3 mt-4 d-flex align-items-center justify-content-between text-label-md">
                                    <span className="text-on-surface-variant-tok">Total Applications Logged:</span>
                                    <span className="fw-bold lm-text-on-surface text-body-md">50 Leaves</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Monthly trends --> */}
                        <div className="col-12 col-xl-5 order-3 order-xl-2">
                            <div className="lm-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="lm-card-head d-flex align-items-center justify-content-between gap-2 pb-3">
                                        <div>
                                            <h2 className="text-headline-sm m-0">Monthly Leave Trends</h2>
                                            <p className="text-label-md text-on-surface-variant-tok m-0">Approvals vs Rejections &amp; Pendings (Last 6 Months)</p>
                                        </div>
                                        <div className="d-none d-sm-flex align-items-center gap-3 text-label-md">
                                            <span className="d-flex align-items-center gap-1"><span className="lm-legend-sq lm-bar-approved"></span>Appr.</span>
                                            <span className="d-flex align-items-center gap-1"><span className="lm-legend-sq lm-bar-pending"></span>Pend.</span>
                                            <span className="d-flex align-items-center gap-1"><span className="lm-legend-sq lm-bar-rejected"></span>Rej.</span>
                                        </div>
                                    </div>

                                    <div className="lm-chart mt-3">
                                        <div className="lm-chart-col">
                                            <div className="lm-chart-bars">
                                                <div className="lm-bar lm-bar-approved lm-h-60" title="Oct Approved: 24"></div>
                                                <div className="lm-bar lm-bar-pending lm-h-15" title="Oct Pending: 6"></div>
                                                <div className="lm-bar lm-bar-rejected lm-h-8" title="Oct Rejected: 3"></div>
                                            </div>
                                            <span className="text-label-md text-on-surface-variant-tok">Oct</span>
                                        </div>
                                        <div className="lm-chart-col">
                                            <div className="lm-chart-bars">
                                                <div className="lm-bar lm-bar-approved lm-h-75" title="Nov Approved: 30"></div>
                                                <div className="lm-bar lm-bar-pending lm-h-20" title="Nov Pending: 8"></div>
                                                <div className="lm-bar lm-bar-rejected lm-h-5" title="Nov Rejected: 2"></div>
                                            </div>
                                            <span className="text-label-md text-on-surface-variant-tok">Nov</span>
                                        </div>
                                        <div className="lm-chart-col">
                                            <div className="lm-chart-bars">
                                                <div className="lm-bar lm-bar-approved lm-h-95" title="Dec Approved: 42 (Holidays)"></div>
                                                <div className="lm-bar lm-bar-pending lm-h-25" title="Dec Pending: 10"></div>
                                                <div className="lm-bar lm-bar-rejected lm-h-12" title="Dec Rejected: 5"></div>
                                            </div>
                                            <span className="text-label-md lm-chart-label-active">Dec</span>
                                        </div>
                                        <div className="lm-chart-col">
                                            <div className="lm-chart-bars">
                                                <div className="lm-bar lm-bar-approved lm-h-55" title="Jan Approved: 22"></div>
                                                <div className="lm-bar lm-bar-pending lm-h-12" title="Jan Pending: 5"></div>
                                                <div className="lm-bar lm-bar-rejected lm-h-10" title="Jan Rejected: 4"></div>
                                            </div>
                                            <span className="text-label-md text-on-surface-variant-tok">Jan</span>
                                        </div>
                                        <div className="lm-chart-col">
                                            <div className="lm-chart-bars">
                                                <div className="lm-bar lm-bar-approved lm-h-70" title="Feb Approved: 28"></div>
                                                <div className="lm-bar lm-bar-pending lm-h-18" title="Feb Pending: 7"></div>
                                                <div className="lm-bar lm-bar-rejected lm-h-8" title="Feb Rejected: 3"></div>
                                            </div>
                                            <span className="text-label-md text-on-surface-variant-tok">Feb</span>
                                        </div>
                                        <div className="lm-chart-col">
                                            <div className="lm-chart-bars">
                                                <div className="lm-bar lm-bar-approved lm-h-88" title="Mar Approved: 36"></div>
                                                <div className="lm-bar lm-bar-pending lm-h-22" title="Mar Pending: 8"></div>
                                                <div className="lm-bar lm-bar-rejected lm-h-10" title="Mar Rejected: 4"></div>
                                            </div>
                                            <span className="text-label-md lm-chart-label-active">Mar</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lm-card-foot pt-3 mt-4 d-flex flex-wrap align-items-center justify-content-between gap-2 text-label-md text-on-surface-variant-tok">
                                    <span>Average Approval Rate: <strong className="lm-text-on-surface">82.4%</strong></span>
                                    <a href="#" className="text-primary-tok">Detailed Analytics</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Leave type share --> */}
                        <div className="col-12 col-md-6 col-xl-3 order-2 order-xl-3">
                            <div className="lm-card p-3 p-md-4 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="lm-card-head d-flex align-items-center justify-content-between pb-3">
                                        <h2 className="text-headline-sm m-0">Leave Type Share</h2>
                                        <span className="text-label-md text-on-surface-variant-tok">FY 2025</span>
                                    </div>

                                    <div className="d-flex flex-column gap-3 mt-4">
                                        <div>
                                            <div className="d-flex justify-content-between text-body-sm mb-1">
                                                <span className="fw-medium">Annual Leave</span><span className="fw-semibold text-primary-tok">42%</span>
                                            </div>
                                            <div className="progress lm-progress lm-progress-sm" role="progressbar" aria-label="Annual leave" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-primary lm-pct-42"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between text-body-sm mb-1">
                                                <span className="fw-medium">Sick Leave</span><span className="fw-semibold text-secondary-tok">28%</span>
                                            </div>
                                            <div className="progress lm-progress lm-progress-sm" role="progressbar" aria-label="Sick leave" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-secondary lm-pct-28"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between text-body-sm mb-1">
                                                <span className="fw-medium">Casual Leave</span><span className="fw-semibold text-tertiary-tok">18%</span>
                                            </div>
                                            <div className="progress lm-progress lm-progress-sm" role="progressbar" aria-label="Casual leave" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-tertiary lm-pct-18"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between text-body-sm mb-1">
                                                <span className="fw-medium">Unpaid Leave</span><span className="fw-semibold text-on-surface-variant-tok">8%</span>
                                            </div>
                                            <div className="progress lm-progress lm-progress-sm" role="progressbar" aria-label="Unpaid leave" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-outline lm-pct-8"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between text-body-sm mb-1">
                                                <span className="fw-medium">Maternity / Special</span><span className="fw-semibold lm-text-purple">4%</span>
                                            </div>
                                            <div className="progress lm-progress lm-progress-sm" role="progressbar" aria-label="Maternity leave" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar lm-fill-purple lm-pct-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lm-card-foot pt-3 mt-4 d-flex align-items-center justify-content-between text-label-md text-on-surface-variant-tok">
                                    <span>Quota Compliance</span>
                                    <span className="text-tertiary-tok fw-semibold d-flex align-items-center gap-1">
                                        <span className="material-symbols-outlined lm-icon-xs">verified</span> 98% Normal
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= TODAY'S AVAILABILITY ================= --> */}
                    <section className="lm-card overflow-hidden">
                        <div className="lm-section-head p-3 p-md-4">
                            <div className="row g-3 align-items-sm-center">
                                <div className="col-12 col-sm">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="lm-icon-chip-error"><span className="material-symbols-outlined lm-icon-lg">person_off</span></div>
                                        <div>
                                            <h2 className="text-headline-sm m-0">Today's Employee Availability &amp; Out of Office</h2>
                                            <p className="text-label-md text-on-surface-variant-tok m-0">14 staff members currently unavailable for shift deployment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-auto d-flex align-items-center gap-2">
                                    <span className="lm-pill lm-pill-date">March 28, 2025 (Today)</span>
                                    <button type="button" className="btn lm-btn-link text-body-sm">Filter Shift</button>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover lm-table lm-table-wide">
                                <thead>
                                    <tr>
                                        <th scope="col">Emp ID</th>
                                        <th scope="col">Employee Name</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Leave Type</th>
                                        <th scope="col">Leave Period</th>
                                        <th scope="col" className="text-end">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="lm-mono text-on-surface-variant-tok fw-medium">EMP-1042</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <img className="lm-avatar" alt="Dr. Marcus Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT24HZ-FAb90hK5cMhovKa6B7tfGjTNWoJogjsI7OJNXvwtDJMZehaJBftgjDT2uU9ovUlOFe_etRNNF9JPb6Is-tQDnSQy3hQzsBMOxV0nCSbVaNTomt90NMnZ4CsujSVyMf-VRwkMzmPc3hHRHb84XJ9INa3mvTZFYbW7SPJ1A4iYvaRrQhWMJKJOCAinUghvwWtvDRiobzGvDWO0dQxeC0330S5N_Wvngr4ox4"/>
                                                    <div>
                                                        <span className="fw-medium d-block">Dr. Marcus Vance</span>
                                                        <span className="text-label-md text-on-surface-variant-tok">marcus.v@clinichub.org</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="d-inline-flex align-items-center gap-2"><span className="lm-dot lm-dot-red"></span>Cardiology</span></td>
                                        <td className="text-on-surface-variant-tok">Senior Registrar</td>
                                        <td><span className="lm-pill lm-pill-sick">Sick Leave</span></td>
                                        <td className="lm-mono text-body-sm text-on-surface-variant-tok">Mar 28 - Mar 30</td>
                                        <td className="text-end"><span className="lm-pill lm-pill-leave"><span className="lm-dot lm-dot-error"></span>On Leave</span></td>
                                    </tr>
                                    <tr>
                                        <td className="lm-mono text-on-surface-variant-tok fw-medium">EMP-1188</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <img className="lm-avatar" alt="Nurse Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1ZpXjEj6kGycKJY8Nmmxa9VlSz9PBVWIY2mGXJSLMPa4fOP0xc0o4e1FECJFoUdz6zaQY28oz94JqkhoXtLcPQZRcsOqwClQvEYKSrmwkNENltdjzAsdmZfquAnPnrkTLJoM1a5weXPF0IfBY04QwK3Q4Z0mrODT3kGIKBGPIgkumV9c4vQum7irNhmNiJMypsuhohNt-ht6rQSEnueLWNIG5Gb5G1XhgtrlrO4"/>
                                                    <div>
                                                        <span className="fw-medium d-block">Nurse Sarah Jenkins</span>
                                                        <span className="text-label-md text-on-surface-variant-tok">sarah.j@clinichub.org</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="d-inline-flex align-items-center gap-2"><span className="lm-dot lm-dot-blue"></span>ICU / Critical Care</span></td>
                                        <td className="text-on-surface-variant-tok">Head Nurse</td>
                                        <td><span className="lm-pill lm-pill-annual">Annual Leave</span></td>
                                        <td className="lm-mono text-body-sm text-on-surface-variant-tok">Mar 25 - Apr 02</td>
                                        <td className="text-end"><span className="lm-pill lm-pill-leave"><span className="lm-dot lm-dot-error"></span>Out of Office</span></td>
                                    </tr>
                                    <tr>
                                        <td className="lm-mono text-on-surface-variant-tok fw-medium">EMP-1304</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <img className="lm-avatar" alt="David Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfO4cbInK9kweYXhXI_thdbfgekRjVi0_GMSfpy3GT19EBXzsjaEmIi2UeLYbGh4it4vaCfssY8aLTmtIBQY7pyYkCN19Pwh7YhHDdpK8X_LUiJJJmvRdgeOQPcMEjMR4V7_mmwH-aEGCbB1F1Z-knK0DUwiBaqUzE8SFgouREtDD_LIg3rmKQyunPR47BXVa3GU8JT0pfwaLm115T3oWRTtysj-CHJ4gxLMbfiOI"/>
                                                    <div>
                                                        <span className="fw-medium d-block">David Chen</span>
                                                        <span className="text-label-md text-on-surface-variant-tok">d.chen@clinichub.org</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="d-inline-flex align-items-center gap-2"><span className="lm-dot lm-dot-teal"></span>Central Pharmacy</span></td>
                                        <td className="text-on-surface-variant-tok">Lead Pharmacist</td>
                                        <td><span className="lm-pill lm-pill-casual">Casual Leave</span></td>
                                        <td className="lm-mono text-body-sm text-on-surface-variant-tok">Mar 28 - Mar 29</td>
                                        <td className="text-end"><span className="lm-pill lm-pill-leave"><span className="lm-dot lm-dot-error"></span>On Leave</span></td>
                                    </tr>
                                    <tr>
                                        <td className="lm-mono text-on-surface-variant-tok fw-medium">EMP-1420</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <img className="lm-avatar" alt="Dr. Anita Patel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_JDk4OT9kpQMR6Pd2w0swbUlVtOJ6g0tlzv8wPScPiBE0Sdd9gdHuK1Tzebg9dPHQTfocmn7tdR_UQBNOrnQlzo3ftqm0Jj5Sf9zEHlPApapd-rWsAHREzkweiTw_fzbdsjtxu9MPtxYyKGpAnZXXuCHy5C_ig8P0H0ZVjbo2Xa1CHraSGfDnhCOtsCh-WKaTlhhxAjfLssIGumtp4Gk0eek82llGzrSQGdlJdI"/>
                                                    <div>
                                                        <span className="fw-medium d-block">Dr. Anita Patel</span>
                                                        <span className="text-label-md text-on-surface-variant-tok">anita.p@clinichub.org</span>
                                                    </div>
                                            </div>
                                        </td>
                                        <td><span className="d-inline-flex align-items-center gap-2"><span className="lm-dot lm-dot-amber-light"></span>Pediatrics</span></td>
                                        <td className="text-on-surface-variant-tok">Consultant Pediatrician</td>
                                        <td><span className="lm-pill lm-pill-sick">Sick Leave</span></td>
                                        <td className="lm-mono text-body-sm text-on-surface-variant-tok">Mar 28 - Mar 31</td>
                                        <td className="text-end"><span className="lm-pill lm-pill-leave"><span className="lm-dot lm-dot-error"></span>Out of Office</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* <!-- ================= UPCOMING + RECENT ================= --> */}
                    <div className="row g-4">

                        {/* <!-- Upcoming approved leaves --> */}
                        <section className="col-12 col-xl-5">
                            <div className="lm-card overflow-hidden h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="lm-section-head p-3 p-md-4 d-flex align-items-center justify-content-between gap-2">
                                        <div>
                                            <h2 className="text-headline-sm m-0">Upcoming Approved Leaves</h2>
                                            <p className="text-label-md text-on-surface-variant-tok m-0">Next 14 days hospital roster outlook</p>
                                        </div>
                                        <button type="button" className="btn lm-btn-link text-body-sm flex-shrink-0">View All (19)</button>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-hover lm-table lm-table-compact lm-table-narrow">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Employee</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Dates</th>
                                                    <th scope="col" className="text-end">Days</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><div className="fw-medium">Dr. Aris Thorne</div><div className="lm-text-xs text-on-surface-variant-tok">Neurology</div></td>
                                                    <td><span className="lm-pill lm-pill-annual">Annual</span></td>
                                                    <td className="lm-mono lm-text-xs">Apr 01 - Apr 06</td>
                                                    <td className="text-end fw-semibold">5 Days</td>
                                                </tr>
                                                <tr>
                                                    <td><div className="fw-medium">Rachel Green, RN</div><div className="lm-text-xs text-on-surface-variant-tok">Emergency Care</div></td>
                                                    <td><span className="lm-pill lm-pill-casual">Casual</span></td>
                                                    <td className="lm-mono lm-text-xs">Apr 03 - Apr 05</td>
                                                    <td className="text-end fw-semibold">2 Days</td>
                                                </tr>
                                                <tr>
                                                    <td><div className="fw-medium">Dr. Samuel Ortiz</div><div className="lm-text-xs text-on-surface-variant-tok">Orthopedics</div></td>
                                                    <td><span className="lm-pill lm-pill-annual">Annual</span></td>
                                                    <td className="lm-mono lm-text-xs">Apr 07 - Apr 14</td>
                                                    <td className="text-end fw-semibold">7 Days</td>
                                                </tr>
                                                <tr>
                                                    <td><div className="fw-medium">Linda Wu, Tech</div><div className="lm-text-xs text-on-surface-variant-tok">Radiology &amp; MRI</div></td>
                                                    <td><span className="lm-pill lm-pill-sick">Sick</span></td>
                                                    <td className="lm-mono lm-text-xs">Apr 02 - Apr 03</td>
                                                    <td className="text-end fw-semibold">1 Day</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="lm-card-foot-soft p-3 d-flex align-items-center justify-content-between text-label-md text-on-surface-variant-tok">
                                    <span>Roster Coverage Status:</span>
                                    <span className="lm-text-emerald fw-semibold d-flex align-items-center gap-2">
                                        <span className="lm-dot lm-dot-emerald"></span> Optimal Coverage
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* <!-- Recent applications --> */}
                        <section className="col-12 col-xl-7">
                            <div className="lm-card overflow-hidden h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="lm-section-head p-3 p-md-4">
                                        <div className="row g-2 align-items-sm-center">
                                            <div className="col-12 col-sm">
                                                <h2 className="text-headline-sm m-0">Recent Leave Applications</h2>
                                                <p className="text-label-md text-on-surface-variant-tok m-0">Review, approve or adjust incoming staff requests</p>
                                            </div>
                                            <div className="col-12 col-sm-auto">
                                                <div className="lm-segment" role="group" aria-label="Filter applications">
                                                    <button type="button" className="active">All (8)</button>
                                                    <button type="button">Pending</button>
                                                    <button type="button">Processed</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-hover lm-table lm-table-compact lm-table-mid">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Employee</th>
                                                    <th scope="col">Leave Type</th>
                                                    <th scope="col">Applied</th>
                                                    <th scope="col">Period</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col" className="text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><div className="fw-medium">Dr. Claire Bennett</div><div className="lm-text-xs text-on-surface-variant-tok">Pathology Lab</div></td>
                                                    <td className="fw-medium">Sick Leave</td>
                                                    <td className="lm-mono lm-text-xs text-on-surface-variant-tok">Mar 27</td>
                                                    <td className="lm-mono lm-text-xs">Mar 30 - Apr 01</td>
                                                    <td><span className="lm-pill lm-pill-pending">Pending</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex align-items-center gap-1">
                                                            <button type="button" className="icon-btn lm-icon-btn-sm lm-act-approve" title="Approve" aria-label="Approve"><span className="material-symbols-outlined lm-icon-md">check_circle</span></button>
                                                            <button type="button" className="icon-btn lm-icon-btn-sm lm-act-reject" title="Reject" aria-label="Reject"><span className="material-symbols-outlined lm-icon-md">cancel</span></button>
                                                            <button type="button" className="icon-btn lm-icon-btn-sm" title="View details" aria-label="View details"><span className="material-symbols-outlined lm-icon-md">open_in_new</span></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><div className="fw-medium">James Wilson, RN</div><div className="lm-text-xs text-on-surface-variant-tok">Oncology Ward</div></td>
                                                    <td className="fw-medium">Annual Leave</td>
                                                    <td className="lm-mono lm-text-xs text-on-surface-variant-tok">Mar 26</td>
                                                    <td className="lm-mono lm-text-xs">Apr 10 - Apr 15</td>
                                                    <td><span className="lm-pill lm-pill-approved">Approved</span></td>
                                                    <td className="text-end">
                                                        <button type="button" className="icon-btn lm-icon-btn-sm" title="View details" aria-label="View details"><span className="material-symbols-outlined lm-icon-md">visibility</span></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><div className="fw-medium">Dr. Kevin Zhang</div><div className="lm-text-xs text-on-surface-variant-tok">Anesthesiology</div></td>
                                                    <td className="fw-medium">Casual Leave</td>
                                                    <td className="lm-mono lm-text-xs text-on-surface-variant-tok">Mar 27</td>
                                                    <td className="lm-mono lm-text-xs">Apr 04 - Apr 05</td>
                                                    <td><span className="lm-pill lm-pill-pending">Pending</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex align-items-center gap-1">
                                                            <button type="button" className="icon-btn lm-icon-btn-sm lm-act-approve" title="Approve" aria-label="Approve"><span className="material-symbols-outlined lm-icon-md">check_circle</span></button>
                                                            <button type="button" className="icon-btn lm-icon-btn-sm lm-act-reject" title="Reject" aria-label="Reject"><span className="material-symbols-outlined lm-icon-md">cancel</span></button>
                                                            <button type="button" className="icon-btn lm-icon-btn-sm" title="View details" aria-label="View details"><span className="material-symbols-outlined lm-icon-md">open_in_new</span></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><div className="fw-medium">Maria Santos</div><div className="lm-text-xs text-on-surface-variant-tok">Surgical Tech</div></td>
                                                    <td className="fw-medium">Casual Leave</td>
                                                    <td className="lm-mono lm-text-xs text-on-surface-variant-tok">Mar 25</td>
                                                    <td className="lm-mono lm-text-xs">Mar 29 (1 Day)</td>
                                                    <td><span className="lm-pill lm-pill-rejected">Rejected</span></td>
                                                    <td className="text-end">
                                                        <button type="button" className="icon-btn lm-icon-btn-sm" title="View conflict notes" aria-label="View conflict notes"><span className="material-symbols-outlined lm-icon-md">info</span></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="lm-card-foot-soft p-3 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 text-label-md text-on-surface-variant-tok">
                                    <span>Showing 4 of 8 pending requests</span>
                                    <button type="button" className="btn lm-btn-link text-label-md fw-semibold">Batch Process Applications</button>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </main>
        </>
    )
}
