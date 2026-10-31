import '../../assets/css/LeaveTypes.css'

export default function LeaveTypes() {
    return (
        <>

            <main className="lt-scope flex-grow-1 p-3 p-md-4">
                <div className="lt-content d-flex flex-column gap-4">

                    {/* <!-- ================= PAGE HEADER ================= --> */}
                    <section className="row g-3 align-items-xl-center">
                        <div className="col-12 col-xl">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb lt-breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#">Leave Management</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Leave Types &amp; Policies</li>
                                </ol>
                            </nav>
                            <h1 className="text-headline-md lt-title m-0">Leave Types &amp; Policies</h1>
                            <p className="text-body-md text-on-surface-variant-tok lt-max-prose mt-1 mb-0">
                                Configure standardized hospital leave classifications, entitlement quotas, accrual rules, and compliance policies across medical cadres.
                            </p>
                        </div>

                        <div className="col-12 col-xl-auto">
                            <div className="d-flex flex-column flex-sm-row flex-wrap gap-2">
                                <button type="button" className="btn lt-btn-light justify-content-center" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer">
                                    <span className="material-symbols-outlined lt-icon-sm">verified_user</span><span>Export Governance Rules</span>
                                </button>
                                <button type="button" className="btn lt-btn-outline-primary justify-content-center" id="btnNewPolicy" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer">
                                    <span className="material-symbols-outlined lt-icon-sm">policy</span><span>+ New Policy</span>
                                </button>
                                <button type="button" className="btn btn-brand-primary d-inline-flex align-items-center justify-content-center gap-2 text-label-md" data-bs-toggle="modal" data-bs-target="#leave-type-modal">
                                    <span className="material-symbols-outlined lt-icon-sm">add</span><span>+ Add Leave Type</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= TABS ================= --> */}
                    <ul className="nav nav-tabs lt-tabs" id="ltTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="tab-btn-types" data-bs-toggle="tab" data-bs-target="#tab-types" type="button" role="tab" aria-controls="tab-types" aria-selected="true">
                                <span className="material-symbols-outlined lt-icon-md">category</span>
                                <span>Leave Types</span>
                                <span className="lt-pill lt-pill-count">8 Categories</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="tab-btn-policies" data-bs-toggle="tab" data-bs-target="#tab-policies" type="button" role="tab" aria-controls="tab-policies" aria-selected="false">
                                <span className="material-symbols-outlined lt-icon-md">gavel</span>
                                <span>Leave Policies</span>
                                <span className="lt-pill lt-pill-count">12 Governance Sets</span>
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content">

                        {/* <!-- ================= TAB 1: LEAVE TYPES ================= --> */}
                        <section className="tab-pane fade show active" id="tab-types" role="tabpanel" aria-labelledby="tab-btn-types" tabindex="0">
                            <div className="d-flex flex-column gap-4">

                                {/* <!-- KPI cards --> */}
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Total Leave Types</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">8</h3>
                                                        <span className="lt-text-xs fw-semibold text-tertiary-tok">All Rosters</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Regular, statutory, and clinical</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-neutral text-primary-tok"><span className="material-symbols-outlined lt-icon-lg">medical_services</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Active Leave Types</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">7</h3>
                                                        <span className="lt-text-xs fw-semibold text-secondary-tok">87.5% Active</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Open for roster allocations</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-secondary-soft"><span className="material-symbols-outlined lt-icon-lg">check_circle</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Paid Leave Types</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">6</h3>
                                                        <span className="lt-text-xs fw-semibold text-primary-tok">Funded</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Clinical &amp; administrative leave</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-primary"><span className="material-symbols-outlined lt-icon-lg">payments</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Unpaid Leave Types</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">2</h3>
                                                        <span className="lt-text-xs fw-semibold text-outline-tok">Exclusions</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Loss of pay &amp; study sabbaticals</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-variant"><span className="material-symbols-outlined lt-icon-lg">money_off</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Filters --> */}
                                <div className="card lt-card shadow-sm">
                                    <div className="card-body">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text"><span className="material-symbols-outlined lt-icon-sm">search</span></span>
                                                    <input type="text" className="form-control" placeholder="Filter name or code (e.g. AL, SL)..." aria-label="Filter leave types" />
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-xl-auto">
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text">Category</span>
                                                    <select className="form-select" aria-label="Category filter">
                                                        <option>All Categories</option>
                                                        <option>Regular</option>
                                                        <option>Special</option>
                                                        <option>Unpaid</option>
                                                        <option>Compensatory</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-xl-auto">
                                                <div className="input-group input-group-sm">
                                                    <span className="input-group-text">Status</span>
                                                    <select className="form-select" aria-label="Status filter">
                                                        <option>All Status</option>
                                                        <option>Active Only</option>
                                                        <option>Inactive Only</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-xl d-flex align-items-center justify-content-end gap-2">
                                                <span className="text-label-md text-outline-tok">Showing 8 entries</span>
                                                <button type="button" className="btn btn-sm lt-btn-light px-2" title="Refresh" aria-label="Refresh">
                                                    <span className="material-symbols-outlined lt-icon-sm">refresh</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Types table --> */}
                                <div className="card lt-card shadow-sm overflow-hidden">
                                    <div className="table-responsive">
                                        <table className="table table-hover lt-table lt-table-types">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Leave Type &amp; Category</th>
                                                    <th scope="col" className="text-center">Code</th>
                                                    <th scope="col">Medical Classification</th>
                                                    <th scope="col" className="text-center">Paid Status</th>
                                                    <th scope="col" className="text-end">Annual Entitlement</th>
                                                    <th scope="col" className="text-end">Max Consecutive</th>
                                                    <th scope="col">Supporting Document</th>
                                                    <th scope="col" className="text-center">Status</th>
                                                    <th scope="col" className="text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-01</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Annual Leave</span><span className="lt-pill lt-tone-primary">Regular</span></div></td>
                                                    <td className="text-center"><span className="lt-code">AL</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Standard accrued holiday for tenured clinical and support personnel.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">24 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">14 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-on-surface-variant-tok"><span className="material-symbols-outlined lt-icon-xs text-outline-tok">cancel</span><span>Not required</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-02</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Sick Leave</span><span className="lt-pill lt-tone-primary">Regular</span></div></td>
                                                    <td className="text-center"><span className="lt-code">SL</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Health recovery leave covering illness, minor surgery, and medical rest.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">14 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">7 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-secondary-tok fw-medium"><span className="material-symbols-outlined lt-icon-xs">check_circle</span><span>Yes (&gt;2 days)</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-03</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Casual Leave</span><span className="lt-pill lt-tone-primary">Regular</span></div></td>
                                                    <td className="text-center"><span className="lt-code">CL</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Unforeseen personal contingencies requiring short-term urgent absence.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">10 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">3 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-on-surface-variant-tok"><span className="material-symbols-outlined lt-icon-xs text-outline-tok">cancel</span><span>No</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-04</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Maternity Leave</span><span className="lt-pill lt-tone-secondary">Special</span></div></td>
                                                    <td className="text-center"><span className="lt-code">ML</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Statutory healthcare maternity protection with complete salary retention.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">180 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">180 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-primary-tok fw-medium"><span className="material-symbols-outlined lt-icon-xs">verified</span><span>Yes (Mandatory)</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-05</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Paternity Leave</span><span className="lt-pill lt-tone-secondary">Special</span></div></td>
                                                    <td className="text-center"><span className="lt-code">PL</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Parental bonding allotment for secondary caregivers upon childbirth.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">15 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">15 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-secondary-tok fw-medium"><span className="material-symbols-outlined lt-icon-xs">check_circle</span><span>Yes</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-06</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Unpaid Leave / Sabbatical</span><span className="lt-pill lt-tone-amber">Unpaid</span></div></td>
                                                    <td className="text-center"><span className="lt-code">UL</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Long-term academic research, fellowships, or personal extended leave.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-slate">Unpaid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">90 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">90 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 lt-text-strong fw-medium"><span className="material-symbols-outlined lt-icon-xs text-primary-tok">draw</span><span>HOD Sign-off</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-07</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Emergency Clinical Leave</span><span className="lt-pill lt-tone-error">Special</span></div></td>
                                                    <td className="text-center"><span className="lt-code">EL</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Immediate critical events, family emergencies, or unexpected trauma.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono fw-semibold lt-text-strong">5 Days</td>
                                                    <td className="text-end lt-mono lt-text-strong">3 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-on-surface-variant-tok"><span className="material-symbols-outlined lt-icon-xs text-outline-tok">history_edu</span><span>Post-hoc (48 hrs)</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-danger" title="Deactivate" aria-label="Deactivate"><span className="material-symbols-outlined lt-icon-sm">toggle_on</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">LT-08</td>
                                                    <td><div className="d-flex flex-wrap align-items-center gap-2"><span className="fw-semibold lt-text-strong">Compensatory Off</span><span className="lt-pill lt-tone-purple">Compensatory</span></div></td>
                                                    <td className="text-center"><span className="lt-code">CO</span></td>
                                                    <td className="lt-col-desc text-on-surface-variant-tok">Earned day-off accrued from extra emergency surgical weekend calls.</td>
                                                    <td className="text-center"><span className="lt-badge-box lt-tone-emerald">Paid</span></td>
                                                    <td className="text-end lt-mono text-outline-tok">Accrual-based</td>
                                                    <td className="text-end lt-mono lt-text-strong">2 Days</td>
                                                    <td><div className="d-flex align-items-center gap-1 text-on-surface-variant-tok"><span className="material-symbols-outlined lt-icon-xs text-outline-tok">assignment_turned_in</span><span>Duty Rota Log</span></div></td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-slate"><span className="lt-dot"></span> Inactive</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="modal" data-bs-target="#leave-type-modal" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Policy Rules" aria-label="View policy rules"><span className="material-symbols-outlined lt-icon-sm">rule</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm lt-act-secondary" title="Activate" aria-label="Activate"><span className="material-symbols-outlined lt-icon-sm">toggle_off</span></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="card-footer px-3 px-md-4 py-3 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 text-body-sm text-on-surface-variant-tok">
                                        <span>Showing 1 to 8 of 8 classifications</span>
                                        <nav aria-label="Leave types pagination">
                                            <ul className="pagination pagination-sm lt-pagination mb-0">
                                                <li className="page-item disabled"><span className="page-link">Previous</span></li>
                                                <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item disabled"><span className="page-link">Next</span></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <!-- ================= TAB 2: LEAVE POLICIES ================= --> */}
                        <section className="tab-pane fade" id="tab-policies" role="tabpanel" aria-labelledby="tab-btn-policies" tabindex="0">
                            <div className="d-flex flex-column gap-4">

                                <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Total Policies</p>
                                                    <div className="d-flex flex-wrap align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">12</h3>
                                                        <span className="lt-text-xs fw-semibold text-primary-tok">Hospital Standards</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Clinical, Nursing, Admin</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-neutral text-primary-tok"><span className="material-symbols-outlined lt-icon-lg">policy</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Active Policies</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">10</h3>
                                                        <span className="lt-text-xs fw-semibold text-secondary-tok">In Force</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Enforced in shift rosters</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-secondary-soft"><span className="material-symbols-outlined lt-icon-lg">task_alt</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Employees Covered</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value lt-text-strong m-0">248</h3>
                                                        <span className="lt-text-xs fw-semibold text-tertiary-tok">100% Roster</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Medical &amp; non-medical staff</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-tertiary"><span className="material-symbols-outlined lt-icon-lg">groups</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card lt-card shadow-sm h-100">
                                            <div className="card-body d-flex align-items-center justify-content-between gap-2">
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Policies Pending Review</p>
                                                    <div className="d-flex align-items-baseline gap-2 mt-1">
                                                        <h3 className="text-headline-md lt-kpi-value text-error-tok m-0">2</h3>
                                                        <span className="lt-text-xs fw-semibold text-error-tok">Q3 Audit</span>
                                                    </div>
                                                    <p className="lt-text-xs text-on-surface-variant-tok mt-1 mb-0">Due for Medical Board review</p>
                                                </div>
                                                <span className="lt-icon-chip lt-tone-error"><span className="material-symbols-outlined lt-icon-lg">pending_actions</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card lt-card shadow-sm overflow-hidden">
                                    <div className="table-responsive">
                                        <table className="table table-hover lt-table lt-table-policies">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Policy ID</th>
                                                    <th scope="col">Policy Governance Title</th>
                                                    <th scope="col">Leave Type</th>
                                                    <th scope="col">Applicable Cadre</th>
                                                    <th scope="col">Department Scope</th>
                                                    <th scope="col">Effective Validity</th>
                                                    <th scope="col" className="text-center">Status</th>
                                                    <th scope="col" className="text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">POL-2025-01</td>
                                                    <td className="lt-col-title"><div className="fw-semibold lt-text-strong">Senior Consultant Annual Recess Policy 2025</div><div className="lt-text-xs text-on-surface-variant-tok">Accrual at 2.0 days/mo with 5-day carry forward max</div></td>
                                                    <td><span className="lt-code lt-code-lg">Annual Leave (AL)</span></td>
                                                    <td><div className="d-flex flex-wrap gap-1"><span className="lt-pill lt-tone-primary">Senior Doctors</span><span className="lt-pill lt-tone-primary">Surgeons</span></div></td>
                                                    <td className="text-on-surface-variant-tok">Clinical Only</td>
                                                    <td className="lt-mono lt-text-xs">01 Jan 2025 – 31 Dec 2025</td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lt-icon-sm">visibility</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" title="Duplicate" aria-label="Duplicate"><span className="material-symbols-outlined lt-icon-sm">content_copy</span></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">POL-2025-02</td>
                                                    <td className="lt-col-title"><div className="fw-semibold lt-text-strong">Critical Care &amp; ICU Shift Locum Policy</div><div className="lt-text-xs text-on-surface-variant-tok">Strict mandatory replacement officer assignment required</div></td>
                                                    <td><span className="lt-code lt-code-lg">Emergency Leave (EL)</span></td>
                                                    <td><div className="d-flex flex-wrap gap-1"><span className="lt-pill lt-tone-primary">ICU Specialists</span><span className="lt-pill lt-tone-primary">ER Nurses</span></div></td>
                                                    <td className="text-on-surface-variant-tok">Emergency Dept</td>
                                                    <td className="lt-mono lt-text-xs">01 Jan 2025 – 31 Dec 2025</td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-teal"><span className="lt-dot"></span> Active</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lt-icon-sm">visibility</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" title="Duplicate" aria-label="Duplicate"><span className="material-symbols-outlined lt-icon-sm">content_copy</span></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="lt-mono fw-medium text-outline-tok">POL-2025-03</td>
                                                    <td className="lt-col-title"><div className="fw-semibold lt-text-strong">Junior Resident Mandatory Study &amp; Sick Protocol</div><div className="lt-text-xs text-on-surface-variant-tok">Requires Academic Supervisor &amp; Head of Department co-signature</div></td>
                                                    <td><span className="lt-code lt-code-lg">Sick Leave (SL)</span></td>
                                                    <td><div className="d-flex flex-wrap gap-1"><span className="lt-pill lt-tone-primary">Junior Residents</span><span className="lt-pill lt-tone-primary">Interns</span></div></td>
                                                    <td className="text-on-surface-variant-tok">All Clinical Depts</td>
                                                    <td className="lt-mono lt-text-xs">15 Feb 2025 – 15 Feb 2026</td>
                                                    <td className="text-center"><span className="lt-pill lt-pill-bordered lt-tone-amber"><span className="lt-dot"></span> Pending Review</span></td>
                                                    <td className="text-end">
                                                        <div className="d-inline-flex gap-1">
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" data-bs-toggle="offcanvas" data-bs-target="#policy-drawer" title="View Details" aria-label="View details"><span className="material-symbols-outlined lt-icon-sm">visibility</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" title="Edit" aria-label="Edit"><span className="material-symbols-outlined lt-icon-sm">edit</span></button>
                                                            <button type="button" className="icon-btn lt-icon-btn-sm" title="Duplicate" aria-label="Duplicate"><span className="material-symbols-outlined lt-icon-sm">content_copy</span></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <!-- ================= RESET BANNER ================= --> */}
                    <div className="lt-banner p-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2">
                        <div className="d-flex align-items-start align-items-sm-center gap-3">
                            <span className="material-symbols-outlined lt-icon-lg text-primary-tok">tune</span>
                            <div className="text-body-sm">
                                <span className="fw-semibold lt-text-strong">Standard Clinical Leave Matrix Enforced</span> —
                                <span className="text-on-surface-variant-tok">Rules auto-reconcile with state healthcare labor compliance and hospital accreditation boards.</span>
                            </div>
                        </div>
                        <button type="button" className="lt-link-btn flex-shrink-0">
                            <span>Reset Criteria</span><span className="material-symbols-outlined lt-icon-2xs">history</span>
                        </button>
                    </div>

                </div>
            </main>

            {/* <!-- ======================================================== --> */}
            {/* <!-- MODAL: ADD / EDIT LEAVE TYPE                             --> */}
            {/* <!-- ======================================================== --> */}
            <div className="modal fade lt-scope lt-modal" id="leave-type-modal" tabindex="-1" aria-labelledby="leave-type-label" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
                    <div className="modal-content shadow">
                        <div className="modal-header px-3 px-md-4 py-3">
                            <div className="d-flex align-items-center gap-2">
                                <span className="lt-icon-chip lt-icon-chip-sm lt-tone-primary"><span className="material-symbols-outlined lt-icon-md">library_add</span></span>
                                <div>
                                    <h2 className="modal-title text-headline-sm lh-sm" id="leave-type-label">Configure Leave Type</h2>
                                    <p className="text-label-md text-on-surface-variant-tok m-0">Define categorization, entitlement quota, and attachment rules</p>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body px-3 px-md-4 py-4">
                            <form id="leave-type-form" action="#" method="post">

                                {/* <!-- 1. Basic --> */}
                                <h3 className="lt-section-title"><span className="lt-step">1</span> Basic Classification</h3>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <label className="lt-label" htmlFor="ltName">Leave Type Name *</label>
                                        <input id="ltName" type="text" className="form-control" value="Annual Leave" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label className="lt-label" htmlFor="ltCode">Leave Code (Unique) *</label>
                                        <input id="ltCode" type="text" className="form-control lt-mono fw-medium" value="AL" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label className="lt-label" htmlFor="ltCategory">Leave Category *</label>
                                        <select id="ltCategory" className="form-select">
                                            <option selected>Regular</option>
                                            <option>Special</option>
                                            <option>Unpaid</option>
                                            <option>Compensatory</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <span className="lt-label">Status</span>
                                        <div className="form-check form-switch d-flex align-items-center gap-3 ps-0 pt-1">
                                            <input className="form-check-input ms-0 mt-0" type="checkbox" role="switch" id="ltStatus" checked />
                                            <label className="form-check-label text-body-sm fw-medium lt-text-strong" htmlFor="ltStatus">Active for allocations</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="lt-label" htmlFor="ltDesc">Clinical Description &amp; Scope</label>
                                        <textarea id="ltDesc" className="form-control" rows="2">Standard accrued holiday for tenured clinical and support personnel with clinical shift cover requirements.</textarea>
                                    </div>
                                </div>

                                <hr className="lt-section-rule" />

                                {/* <!-- 2. Entitlement --> */}
                                <h3 className="lt-section-title"><span className="lt-step">2</span> Entitlement &amp; Quotas</h3>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <span className="lt-label">Payment Compensation Type</span>
                                        <div className="d-flex flex-column flex-md-row gap-2 gap-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="paid_type" id="paidYes" checked />
                                                <label className="form-check-label text-body-sm fw-medium lt-text-strong" htmlFor="paidYes">Paid Leave (100% Base Remuneration)</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="paid_type" id="paidNo" />
                                                <label className="form-check-label text-body-sm fw-medium lt-text-strong" htmlFor="paidNo">Unpaid Leave (Loss of Pay)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-md-4">
                                        <label className="lt-label" htmlFor="ltEntitle">Annual Entitlement (Days)</label>
                                        <input id="ltEntitle" type="number" className="form-control lt-mono" value="24" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <label className="lt-label" htmlFor="ltConsec">Max Consecutive Days</label>
                                        <input id="ltConsec" type="number" className="form-control lt-mono" value="14" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <label className="lt-label" htmlFor="ltNotice">Min Advance Notice (Days)</label>
                                        <input id="ltNotice" type="number" className="form-control lt-mono" value="7" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <label className="lt-label" htmlFor="ltCarry">Carry Forward Allowed?</label>
                                        <select id="ltCarry" className="form-select">
                                            <option selected>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <label className="lt-label" htmlFor="ltCarryMax">Max Carry Forward (Days)</label>
                                        <input id="ltCarryMax" type="number" className="form-control lt-mono" value="5" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <label className="lt-label" htmlFor="ltExpiry">Expiry Period</label>
                                        <input id="ltExpiry" type="text" className="form-control" value="31 Dec / 12 Months" />
                                    </div>
                                </div>

                                <hr className="lt-section-rule" />

                                {/* <!-- 3. Governance --> */}
                                <h3 className="lt-section-title"><span className="lt-step">3</span> Governance, Half-Days &amp; Documentation</h3>
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <div className="lt-option-panel d-flex align-items-center justify-content-between gap-2 h-100">
                                            <div>
                                                <span className="text-body-sm fw-medium lt-text-strong d-block">Half-Day Application</span>
                                                <span className="lt-text-xs text-on-surface-variant-tok">Allow morning / evening clinic sessions</span>
                                            </div>
                                            <input className="form-check-input flex-shrink-0 m-0" type="checkbox" checked aria-label="Half-day application" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="lt-option-panel d-flex align-items-center justify-content-between gap-2 h-100">
                                            <div>
                                                <span className="text-body-sm fw-medium lt-text-strong d-block">Hourly Leave Split</span>
                                                <span className="lt-text-xs text-on-surface-variant-tok">Allow partial shift relief (e.g. 2 hrs)</span>
                                            </div>
                                            <input className="form-check-input flex-shrink-0 m-0" type="checkbox" aria-label="Hourly leave split" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="lt-option-panel d-flex align-items-center justify-content-between gap-2 h-100">
                                            <div>
                                                <span className="text-body-sm fw-medium lt-text-strong d-block">Supporting Document Mandate</span>
                                                <span className="lt-text-xs text-on-surface-variant-tok">Requires certificate, court or flight proof</span>
                                            </div>
                                            <input className="form-check-input flex-shrink-0 m-0" type="checkbox" aria-label="Supporting document mandate" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="lt-label" htmlFor="ltCadre">Applicable Medical Cadre</label>
                                        <select id="ltCadre" className="form-select">
                                            <option selected>All Cadres (Doctors, Nurses, Admin)</option>
                                            <option>Clinical Consultants Only</option>
                                            <option>Nursing Cadre Only</option>
                                            <option>Non-Clinical Staff</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer px-3 px-md-4 py-3 d-flex flex-column-reverse flex-sm-row justify-content-sm-between">
                            <button type="button" className="btn btn-sm btn-outline-secondary-custom" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-sm btn-brand-primary px-4" data-bs-dismiss="modal">Save Leave Type</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ======================================================== --> */}
            {/* <!-- OFFCANVAS: POLICY DETAILS                                --> */}
            {/* <!-- ======================================================== --> */}
            <div className="offcanvas offcanvas-end lt-scope lt-offcanvas" tabindex="-1" id="policy-drawer" aria-labelledby="policy-drawer-label">
                <div className="offcanvas-header p-3 p-md-4">
                    <div className="d-flex align-items-center gap-2">
                        <span className="lt-icon-chip lt-icon-chip-md lt-tone-secondary-soft"><span className="material-symbols-outlined lt-icon-md">verified_user</span></span>
                        <div>
                            <span className="text-label-md text-outline-tok lt-mono d-block">POL-2025-01</span>
                            <h2 className="text-headline-sm lh-sm m-0" id="policy-drawer-label">Governance Policy Details</h2>
                        </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-3 p-md-4 d-flex flex-column gap-4">

                    <div className="lt-panel">
                        <span className="text-label-md fw-semibold text-primary-tok lt-uppercase d-block">Policy Title</span>
                        <h3 className="h6 fw-semibold lt-text-strong mt-1 mb-0">Senior Consultant Annual Recess Policy 2025</h3>
                        <p className="text-body-sm text-on-surface-variant-tok mt-2 mb-0">
                            Establishes statutory vacation leave allowances, cross-departmental on-call locum cover requirements, and mandatory handover notes for clinical attending physicians.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-body-md fw-semibold lt-text-strong mb-2">Applicable Personnel &amp; Roster</h3>
                        <div className="d-flex flex-column gap-2 text-body-sm">
                            <div className="lt-row-panel d-flex flex-wrap justify-content-between gap-1">
                                <span className="lt-text-strong fw-medium">Cadres Covered</span><span className="text-primary-tok fw-medium">Senior Doctors, Head Surgeons</span>
                            </div>
                            <div className="lt-row-panel d-flex flex-wrap justify-content-between gap-1">
                                <span className="lt-text-strong fw-medium">Department Scope</span><span className="lt-text-strong">Clinical Departments Only</span>
                            </div>
                            <div className="lt-row-panel d-flex flex-wrap justify-content-between gap-1">
                                <span className="lt-text-strong fw-medium">Associated Leave Type</span><span className="lt-mono text-secondary-tok fw-semibold">Annual Leave (AL)</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-body-md fw-semibold lt-text-strong mb-2">Accrual &amp; Entitlement Method</h3>
                        <div className="row g-2 text-body-sm">
                            <div className="col-6"><div className="lt-stat-panel h-100"><span className="text-label-md text-on-surface-variant-tok d-block">Accrual Frequency</span><span className="fw-semibold lt-text-strong lt-mono">2.0 Days / Month</span></div></div>
                            <div className="col-6"><div className="lt-stat-panel h-100"><span className="text-label-md text-on-surface-variant-tok d-block">Annual Cap</span><span className="fw-semibold lt-text-strong lt-mono">24 Total Days</span></div></div>
                            <div className="col-6"><div className="lt-stat-panel h-100"><span className="text-label-md text-on-surface-variant-tok d-block">Max Carry Forward</span><span className="fw-semibold lt-text-strong lt-mono">5.0 Days</span></div></div>
                            <div className="col-6"><div className="lt-stat-panel h-100"><span className="text-label-md text-on-surface-variant-tok d-block">Notice Required</span><span className="fw-semibold lt-text-strong lt-mono">14 Days Prior</span></div></div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-body-md fw-semibold lt-text-strong mb-3">Multi-Level Approval Chain</h3>
                        <div className="lt-chain d-flex flex-column gap-3">
                            <div className="lt-chain-item">
                                <span className="lt-chain-badge">1</span>
                                <div className="flex-grow-1 text-body-sm">
                                    <p className="fw-semibold lt-text-strong m-0">Head of Department (HOD)</p>
                                    <p className="lt-text-xs text-on-surface-variant-tok m-0">Validates emergency duty rota replacement and surgeon coverage.</p>
                                </div>
                            </div>
                            <div className="lt-chain-item">
                                <span className="lt-chain-badge">2</span>
                                <div className="flex-grow-1 text-body-sm">
                                    <p className="fw-semibold lt-text-strong m-0">Medical Director</p>
                                    <p className="lt-text-xs text-on-surface-variant-tok m-0">Approves leaves exceeding 5 consecutive surgical days.</p>
                                </div>
                            </div>
                            <div className="lt-chain-item">
                                <span className="lt-chain-badge lt-chain-badge-final">3</span>
                                <div className="flex-grow-1 text-body-sm">
                                    <p className="fw-semibold lt-text-strong m-0">HR &amp; Payroll Operations</p>
                                    <p className="lt-text-xs text-on-surface-variant-tok m-0">Final automated reconciliation against statutory labor balance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lt-divider-top pt-3 lt-text-xs text-on-surface-variant-tok d-flex flex-column gap-1">
                        <div className="d-flex justify-content-between gap-2"><span>Created By:</span><span className="fw-medium lt-text-strong">Dr. Elena Rostova</span></div>
                        <div className="d-flex justify-content-between gap-2"><span>Last Updated:</span><span className="lt-mono lt-text-strong">12 Feb 2025, 09:42 UTC</span></div>
                        <div className="d-flex justify-content-between gap-2"><span>Effective Period:</span><span className="lt-mono lt-text-strong">01 Jan 2025 – 31 Dec 2025</span></div>
                    </div>
                </div>

                <div className="lt-offcanvas-footer d-flex flex-column flex-sm-row gap-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary-custom flex-fill" data-bs-dismiss="offcanvas">Close</button>
                    <button type="button" className="btn btn-sm btn-brand-primary flex-fill">Edit Governance Rules</button>
                </div>
            </div>
        </>
    )
}
