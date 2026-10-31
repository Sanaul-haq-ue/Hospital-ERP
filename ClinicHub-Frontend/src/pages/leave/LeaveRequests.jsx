import '../../assets/css/LeaveRequests.css'

export default function LeaveRequests() {
    return (
        <>
            <main className="page-canvas" id="main-content">

                {/* <!-- 1. BREADCRUMB & PAGE HEADER --> */}
                <section className="mb-4">
                    <div className="row align-items-center gy-3">
                        <div className="col-12 col-md">
                            <nav className="page-breadcrumb" aria-label="Breadcrumb">
                                <a href="#">Dashboard</a>
                                <span className="bc-sep" aria-hidden="true">/</span>
                                <a href="#">Staff &amp; Leave</a>
                                <span className="bc-sep" aria-hidden="true">/</span>
                                <span className="bc-current" aria-current="page">My Leave Requests</span>
                            </nav>
                            <h1 className="page-title">My Leave Requests</h1>
                            <p className="page-subtitle">View, track, and manage your leave applications and departmental rota clearance.</p>
                        </div>
                        <div className="col-12 col-md-auto">
                            <div className="d-flex align-items-center gap-2">
                                <button className="btn-outline-surface" onclick="exportHistoryCSV()">
                                    <span className="material-symbols-outlined">file_download</span>
                                    <span>Export History</span>
                                </button>
                                <button className="btn-primary-action" onclick="openApplyModal()">
                                    <span className="material-symbols-outlined">add</span>
                                    <span>Apply for Leave</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- 2. KPI METRIC CARDS --> */}
                <section aria-label="Leave Metrics Summary" className="mb-4">
                    <div className="row g-3">

                        {/* <!-- Total Requests --> */}
                        <div className="col-6 col-md-4 col-lg">
                            <div className="metric-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="metric-label">Total Requests</span>
                                    <div className="metric-icon-box metric-icon--primary">
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                </div>
                                <p className="metric-value">14</p>
                                <p className="metric-sub mb-0">Fiscal Year 2025</p>
                            </div>
                        </div>

                        {/* <!-- Pending Review --> */}
                        <div className="col-6 col-md-4 col-lg">
                            <div className="metric-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="metric-label">Pending Review</span>
                                    <div className="metric-icon-box metric-icon--amber">
                                        <span className="material-symbols-outlined">hourglass_top</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <p className="metric-value mb-0">2</p>
                                    <span className="badge-metric badge-metric--amber">In Review</span>
                                </div>
                                <p className="metric-sub mt-1 mb-0">Awaiting HOD / HR approval</p>
                            </div>
                        </div>

                        {/* <!-- Approved --> */}
                        <div className="col-6 col-md-4 col-lg">
                            <div className="metric-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="metric-label">Approved</span>
                                    <div className="metric-icon-box metric-icon--emerald">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <p className="metric-value mb-0">9</p>
                                    <span className="badge-metric badge-metric--emerald">Confirmed</span>
                                </div>
                                <p className="metric-sub mt-1 mb-0">Active on clinical rota</p>
                            </div>
                        </div>

                        {/* <!-- Rejected --> */}
                        <div className="col-6 col-md-4 col-lg">
                            <div className="metric-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="metric-label">Rejected</span>
                                    <div className="metric-icon-box metric-icon--rose">
                                        <span className="material-symbols-outlined">cancel</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <p className="metric-value mb-0">2</p>
                                    <span className="badge-metric badge-metric--rose">Declined</span>
                                </div>
                                <p className="metric-sub mt-1 mb-0">View notes to re-apply</p>
                            </div>
                        </div>

                        {/* <!-- Cancelled --> */}
                        <div className="col-6 col-md-4 col-lg">
                            <div className="metric-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="metric-label">Cancelled</span>
                                    <div className="metric-icon-box metric-icon--slate">
                                        <span className="material-symbols-outlined">do_not_disturb_on</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline gap-2">
                                    <p className="metric-value mb-0">1</p>
                                    <span className="badge-metric badge-metric--slate">Withdrawn</span>
                                </div>
                                <p className="metric-sub mt-1 mb-0">Voluntarily cancelled</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* <!-- 3. GUIDELINES BANNER --> */}
                <section className="guidelines-banner mb-4">
                    <div className="row align-items-center gy-3">
                        <div className="col-12 col-sm">
                            <div className="d-flex align-items-start gap-3">
                                <div className="guidelines-icon mt-1">
                                    <span className="material-symbols-outlined">info</span>
                                </div>
                                <div>
                                    <p className="guidelines-title">Cardiology Department Shift Coverage Note</p>
                                    <p className="guidelines-text mb-0">All leave applications exceeding 2 consecutive days require a
                                        designated locum endorsement (Ward 4B / Coronary Care Unit). Approved requests
                                        automatically sync with your Hospital Epic rota.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <a className="link-policy" href="#">
                                <span>Hospital Leave Policy</span>
                                <span className="material-symbols-outlined">arrow_outward</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <!-- 4. DATA TABLE --> */}
                <section className="table-card mb-4">

                    {/* <!-- Table header & filter bar --> */}
                    <div className="table-header-bar">
                        {/* <!-- Title row --> */}
                        <div className="row align-items-center gy-2 mb-3">
                            <div className="col">
                                <div className="d-flex align-items-center gap-2">
                                    <h2 className="table-section-title">My Leave History</h2>
                                    <span className="badge-count">14 Applications</span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button className="btn-reset-filters" onclick="resetFilters()">
                                    <span className="material-symbols-outlined">restart_alt</span>
                                    <span>Reset Filters</span>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Filter inputs --> */}
                        <div className="row g-2">
                            {/* <!-- Search --> */}
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="filter-input-wrap">
                                    <span className="material-symbols-outlined filter-icon">search</span>
                                    <input className="filter-input filter-input--icon" id="searchInput"
                                        placeholder="Search by ID, reason, or locum..." type="text" aria-label="Search leave records" />
                                </div>
                            </div>
                            {/* <!-- Leave Type --> */}
                            <div className="col-12 col-sm-6 col-lg-2">
                                <select className="filter-select" aria-label="Filter by leave type">
                                    <option value="">All Types</option>
                                    <option value="annual">Annual Leave</option>
                                    <option value="sick">Sick Leave</option>
                                    <option value="casual">Casual Leave</option>
                                    <option value="study">Study/Research Leave</option>
                                    <option value="hourly">Hourly Pass</option>
                                </select>
                            </div>
                            {/* <!-- Status --> */}
                            <div className="col-12 col-sm-6 col-lg-2">
                                <select className="filter-select" aria-label="Filter by status">
                                    <option value="">All Statuses</option>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            {/* <!-- Year --> */}
                            <div className="col-12 col-sm-6 col-lg-2">
                                <select className="filter-select" aria-label="Filter by year">
                                    <option value="2025">Year 2025</option>
                                    <option value="2024">Year 2024</option>
                                    <option value="2023">Year 2023</option>
                                </select>
                            </div>
                            {/* <!-- Date Range --> */}
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="filter-input-wrap">
                                    <span className="material-symbols-outlined filter-icon">calendar_today</span>
                                    <input className="filter-input filter-input--icon" placeholder="Date Range" type="text" aria-label="Filter by date range" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Scrollable table --> */}
                    <div className="table-responsive-custom">
                        <table className="data-table" aria-label="Leave application history">
                            <thead>
                                <tr>
                                    <th scope="col">Application ID</th>
                                    <th scope="col">Leave Type</th>
                                    <th scope="col">Applied Date</th>
                                    <th scope="col">From Date</th>
                                    <th scope="col">To Date</th>
                                    <th scope="col">Duration Type</th>
                                    <th scope="col" className="text-end">Leave Days</th>
                                    <th scope="col" className="text-center">Status</th>
                                    <th scope="col" className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* <!-- Row 1: Pending Annual Leave --> */}
                                <tr>
                                    <td>
                                        <button className="td-app-id-btn" onclick="openDrawer('LV-2025-094')">LV-2025-094</button>
                                    </td>
                                    <td>
                                        <span className="badge-leave badge-leave--annual">
                                            <span className="badge-leave-dot"></span>Annual Leave
                                        </span>
                                    </td>
                                    <td className="td-date">Apr 02, 2025</td>
                                    <td className="td-date-bold">Apr 15, 2025</td>
                                    <td className="td-date-bold">Apr 20, 2025</td>
                                    <td className="td-type-label">Full Day</td>
                                    <td className="td-days text-end">5 Days</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--pending">
                                            <span className="material-symbols-outlined">schedule</span>Pending
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <div className="d-flex align-items-center justify-content-end gap-1">
                                            <button className="btn-tbl-view" onclick="openDrawer('LV-2025-094')" title="View details">
                                                <span className="material-symbols-outlined">visibility</span>Details
                                            </button>
                                            <button className="btn-tbl-cancel"
                                                onclick="openCancelModal('LV-2025-094','Annual Leave','Apr 15 - Apr 20, 2025')">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                {/* <!-- Row 2: Pending Casual Leave --> */}
                                <tr>
                                    <td>
                                        <button className="td-app-id-btn" onclick="openDrawer('LV-2025-089')">LV-2025-089</button>
                                    </td>
                                    <td>
                                        <span className="badge-leave badge-leave--casual">
                                            <span className="badge-leave-dot"></span>Casual Leave
                                        </span>
                                    </td>
                                    <td className="td-date">Mar 28, 2025</td>
                                    <td className="td-date-bold">Apr 04, 2025</td>
                                    <td className="td-date-bold">Apr 04, 2025</td>
                                    <td className="td-type-label">Half Day (PM)</td>
                                    <td className="td-days text-end">0.5 Day</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--pending">
                                            <span className="material-symbols-outlined">schedule</span>Pending
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <div className="d-flex align-items-center justify-content-end gap-1">
                                            <button className="btn-tbl-view" onclick="openDrawer('LV-2025-089')">
                                                <span className="material-symbols-outlined">visibility</span>Details
                                            </button>
                                            <button className="btn-tbl-cancel"
                                                onclick="openCancelModal('LV-2025-089','Casual Leave','Apr 04, 2025')">Cancel</button>
                                        </div>
                                    </td>
                                </tr>

                                {/* <!-- Row 3: Approved Sick Leave --> */}
                                <tr>
                                    <td>
                                        <button className="td-app-id-btn" onclick="openDrawer('LV-2025-072')">LV-2025-072</button>
                                    </td>
                                    <td>
                                        <span className="badge-leave badge-leave--sick">
                                            <span className="badge-leave-dot"></span>Sick Leave
                                        </span>
                                    </td>
                                    <td className="td-date">Mar 14, 2025</td>
                                    <td className="td-date-bold">Mar 15, 2025</td>
                                    <td className="td-date-bold">Mar 17, 2025</td>
                                    <td className="td-type-label">Full Day</td>
                                    <td className="td-days text-end">3 Days</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--approved">
                                            <span className="material-symbols-outlined">check</span>Approved
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <button className="btn-tbl-view" onclick="openDrawer('LV-2025-072')">
                                            <span className="material-symbols-outlined">visibility</span>Details
                                        </button>
                                    </td>
                                </tr>

                                {/* <!-- Row 4: Approved Special Study Leave --> */}
                                <tr>
                                    <td>
                                        <button className="td-app-id-btn" onclick="openDrawer('LV-2025-061')">LV-2025-061</button>
                                    </td>
                                    <td>
                                        <span className="badge-leave badge-leave--study">
                                            <span className="badge-leave-dot"></span>Special Study Leave
                                        </span>
                                    </td>
                                    <td className="td-date">Feb 20, 2025</td>
                                    <td className="td-date-bold">Mar 01, 2025</td>
                                    <td className="td-date-bold">Mar 03, 2025</td>
                                    <td className="td-type-label">Full Day</td>
                                    <td className="td-days text-end">3 Days</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--approved">
                                            <span className="material-symbols-outlined">check</span>Approved
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <button className="btn-tbl-view" onclick="openDrawer('LV-2025-061')">
                                            <span className="material-symbols-outlined">visibility</span>Details
                                        </button>
                                    </td>
                                </tr>

                                {/* <!-- Row 5: Rejected Casual Leave --> */}
                                <tr>
                                    <td>
                                        <button className="td-app-id-btn" onclick="openDrawer('LV-2025-045')">LV-2025-045</button>
                                    </td>
                                    <td>
                                        <span className="badge-leave badge-leave--casual">
                                            <span className="badge-leave-dot"></span>Casual Leave
                                        </span>
                                    </td>
                                    <td className="td-date">Feb 05, 2025</td>
                                    <td className="td-date-bold">Feb 10, 2025</td>
                                    <td className="td-date-bold">Feb 11, 2025</td>
                                    <td className="td-type-label">Full Day</td>
                                    <td className="td-days text-end">2 Days</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--rejected">
                                            <span className="material-symbols-outlined">close</span>Rejected
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <div className="d-flex align-items-center justify-content-end gap-1">
                                            <button className="btn-tbl-view" onclick="openDrawer('LV-2025-045')">
                                                <span className="material-symbols-outlined">visibility</span>Details
                                            </button>
                                            <button className="btn-tbl-reapply" onclick="openApplyModal()">Re-apply</button>
                                        </div>
                                    </td>
                                </tr>

                                {/* <!-- Row 6: Cancelled Annual Leave --> */}
                                <tr>
                                    <td><span className="td-muted-id">LV-2025-031</span></td>
                                    <td>
                                        <span className="badge-leave badge-leave--cancelled">
                                            <span className="badge-leave-dot"></span>Annual Leave
                                        </span>
                                    </td>
                                    <td className="td-date">Jan 18, 2025</td>
                                    <td className="td-date">Jan 24, 2025</td>
                                    <td className="td-date">Jan 28, 2025</td>
                                    <td className="td-type-label">Full Day</td>
                                    <td className="td-days text-end">4 Days</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--cancelled">
                                            <span className="material-symbols-outlined">block</span>Cancelled
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <button className="btn-tbl-view" onclick="openDrawer('LV-2025-031')">
                                            <span className="material-symbols-outlined">visibility</span>Details
                                        </button>
                                    </td>
                                </tr>

                                {/* <!-- Row 7: Approved Hourly Pass --> */}
                                <tr>
                                    <td>
                                        <button className="td-app-id-btn" onclick="openDrawer('LV-2025-012')">LV-2025-012</button>
                                    </td>
                                    <td>
                                        <span className="badge-leave badge-leave--hourly">
                                            <span className="badge-leave-dot"></span>Hourly Pass
                                        </span>
                                    </td>
                                    <td className="td-date">Jan 08, 2025</td>
                                    <td className="td-date-bold">Jan 10, 2025</td>
                                    <td className="td-date-bold">Jan 10, 2025</td>
                                    <td className="td-type-label">Hourly (14:00 - 18:00)</td>
                                    <td className="td-days text-end">4 Hours</td>
                                    <td className="text-center">
                                        <span className="badge-status badge-status--approved">
                                            <span className="material-symbols-outlined">check</span>Approved
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <button className="btn-tbl-view" onclick="openDrawer('LV-2025-012')">
                                            <span className="material-symbols-outlined">visibility</span>Details
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="table-pagination">
                        <div className="row align-items-center gy-2">
                            <div className="col-12 col-sm">
                                <p className="pagination-info mb-0">
                                    Showing <strong>1</strong> to <strong>7</strong> of <strong>14</strong> records
                                </p>
                            </div>
                            <div className="col-12 col-sm-auto">
                                <div className="d-flex align-items-center gap-1">
                                    <button className="btn-page" disabled>Previous</button>
                                    <button className="btn-page-num active" aria-current="page">1</button>
                                    <button className="btn-page-num">2</button>
                                    <button className="btn-page">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* <!-- 5. WORKFLOW INFO & RECENT ACTIVITY --> */}
                <section aria-label="Workflow and activity">
                    <div className="row g-4">

                        {/* <!-- Workflow Card 1 --> */}
                        <div className="col-12 col-lg-4">
                            <div className="workflow-card">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="workflow-icon workflow-icon--amber">
                                        <span className="material-symbols-outlined">hourglass_top</span>
                                    </div>
                                    <div>
                                        <p className="workflow-card-title">Pending Requests</p>
                                        <p className="workflow-card-sub mb-0">Stage 1 &amp; 2 Clearances</p>
                                    </div>
                                </div>
                                <p className="workflow-card-body">
                                    Pending applications are sequentially routed to your Head of Cardiology (Dr. Sarah Lin)
                                    before final Medical Director &amp; HR sign-off. You can cancel without penalty while pending.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Workflow Card 2 --> */}
                        <div className="col-12 col-lg-4">
                            <div className="workflow-card">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="workflow-icon workflow-icon--emerald">
                                        <span className="material-symbols-outlined">event_repeat</span>
                                    </div>
                                    <div>
                                        <p className="workflow-card-title">Hospital Rota Sync</p>
                                        <p className="workflow-card-sub mb-0">Real-time Automation</p>
                                    </div>
                                </div>
                                <p className="workflow-card-body">
                                    Once fully approved, ClinicHub ERP automatically synchronizes your leave dates with the
                                    emergency on-call schedule and reassigns clinic patient rounds to your designated locum.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Recent Status Activity --> */}
                        <div className="col-12 col-lg-4">
                            <div className="workflow-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p className="workflow-card-title mb-0">Recent Status Updates</p>
                                    <span className="badge-live-feed">Live Feed</span>
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="activity-dot activity-dot--amber"></span>
                                        <div className="activity-event-text">
                                            <span className="activity-event-name">LV-2025-094</span> endorsed by HOD Dr. Sarah Lin.
                                            <span className="activity-event-time">Apr 02, 2:30 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="activity-dot activity-dot--emerald"></span>
                                        <div className="activity-event-text">
                                            <span className="activity-event-name">LV-2025-072</span> confirmed by HR Medical Registrar.
                                            <span className="activity-event-time">Mar 15, 11:20 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}
