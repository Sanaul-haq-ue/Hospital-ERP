import "../../assets/css/Activity.css"

export default function Activity() {
    return (
        <>
            <div className="container-fluid px-3 px-md-4">

                {/* <!-- Page Header --> */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3 mb-4">
                    <div>
                        <h2 className="page-heading">User Activity</h2>
                        <p className="page-subtext">Monitor user login activity and important account actions.</p>
                    </div>
                    <button type="button" className="theme-toggle-btn flex-shrink-0" id="theme-toggle" aria-label="Toggle dark mode">
                        <span className="material-symbols-outlined" id="theme-toggle-icon" aria-hidden="true">dark_mode</span>
                    </button>
                </div>

                {/* <!-- Filters --> */}
                <div className="filter-card mb-4">
                    <div className="row g-3 align-items-end">
                        <div className="col-12 col-md-4 col-lg-3">
                            <label for="search-user" className="filter-label">Search user</label>
                            <div className="filter-input-wrap">
                                <span className="material-symbols-outlined" aria-hidden="true">search</span>
                                <input type="text" className="form-control form-control-brand has-icon" id="search-user" placeholder="Name or email"/>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2">
                            <label for="filter-role" className="filter-label">Role</label>
                            <select className="form-select form-select-brand" id="filter-role">
                                <option value="">All Roles</option>
                                <option value="admin">Admin</option>
                                <option value="doctor">Doctor</option>
                                <option value="receptionist">Receptionist</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-2 col-lg-2">
                            <label for="filter-activity" className="filter-label">Activity Type</label>
                            <select className="form-select form-select-brand" id="filter-activity">
                                <option value="">All Activities</option>
                                <option value="login">Login</option>
                                <option value="logout">Logout</option>
                                <option value="created">Created</option>
                                <option value="updated">Updated</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <label for="filter-dates" className="filter-label">Date Range</label>
                            <div className="filter-input-wrap">
                                <span className="material-symbols-outlined" aria-hidden="true">calendar_today</span>
                                <input type="text" className="form-control form-control-brand has-icon" id="filter-dates" placeholder="Select dates" value="20 Aug - 26 Aug"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <button type="button" className="btn btn-brand-primary w-100">
                                <span className="material-symbols-outlined fs-sm" aria-hidden="true">filter_list</span>
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Data Table --> */}
                <div className="table-card">
                    <div className="table-scroll">
                        <table className="activity-table">
                            <thead>
                                <tr>
                                    <th style={{ Width: '50px' }}>#</th>
                                    <th style={{ minWidth: '200px' }}>User</th>
                                    <th>Role</th>
                                    <th style={{ minWidth: '230px' }}>Activity</th>
                                    <th>IP Address</th>
                                    <th>Date &amp; Time</th>
                                    <th>Status</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Row 1 --> */}
                                <tr>
                                    <td className="row-index">1</td>
                                    <td>
                                        <div className="user-cell">
                                            <span className="user-avatar-fallback avatar-primary">RA</span>
                                            <div>
                                                <span className="user-name d-block">Dr. Rahim Ahmed</span>
                                                <span className="user-email">rahim.a@clinichub.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="badge-role">Doctor</span></td>
                                    <td>
                                        <div className="activity-cell">
                                            <span className="material-symbols-outlined icon-login" aria-hidden="true">login</span>
                                            <span className="activity-text">User logged into the system</span>
                                        </div>
                                    </td>
                                    <td className="mono-cell">192.168.1.104</td>
                                    <td className="mono-cell">26 Aug 2026, 09:15 AM</td>
                                    <td><span className="badge-status badge-status-success">Success</span></td>
                                    <td className="action-cell">
                                        <button type="button" className="btn-view" title="View details" data-bs-toggle="modal" data-bs-target="#detailModal">
                                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                        </button>
                                    </td>
                                </tr>

                                {/* <!-- Row 2 --> */}
                                <tr className="row-alt">
                                    <td className="row-index">2</td>
                                    <td>
                                        <div className="user-cell">
                                            <span className="user-avatar-fallback avatar-secondary">SJ</span>
                                            <div>
                                                <span className="user-name d-block">Sarah Jenkins</span>
                                                <span className="user-email">s.jenkins@clinichub.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="badge-role">Admin</span></td>
                                    <td>
                                        <div className="activity-cell">
                                            <span className="material-symbols-outlined icon-update" aria-hidden="true">manage_accounts</span>
                                            <span className="activity-text">Updated role for Mark Doe to 'Nurse'</span>
                                        </div>
                                    </td>
                                    <td className="mono-cell">10.0.0.45</td>
                                    <td className="mono-cell">25 Aug 2026, 14:30 PM</td>
                                    <td><span className="badge-status badge-status-success">Success</span></td>
                                    <td className="action-cell">
                                        <button type="button" className="btn-view" title="View details" data-bs-toggle="modal" data-bs-target="#detailModal">
                                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                        </button>
                                    </td>
                                </tr>

                                {/* <!-- Row 3 --> */}
                                <tr>
                                    <td className="row-index">3</td>
                                    <td>
                                        <div className="user-cell">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcoZNTLYN_w7W_z4dFX6oseSuhDRSHz_yuUe4odjpES0yjL8LlgSA-PeMvwVnYSuqkat3hOTcLfF3MqeIeHCz47DRzmk8bExe6mHvE1GJSdop-0ucwVLtMibGWbDVhtrsOj0J_todjx-Qtgji6Zh3fXkc70afYGMwDVtLcASsjYPSKi4BI2nezTj4Uc_xYapXk0QQEEabIrdqfhlfdUAFINBKG-wx8pX-TF2PCyu8vcXd7iMaJlKJV" alt="Liam Chen" className="user-avatar"/>
                                                <div>
                                                    <span className="user-name d-block">Liam Chen</span>
                                                    <span className="user-email">l.chen@clinichub.com</span>
                                                </div>
                                        </div>
                                    </td>
                                    <td><span className="badge-role">Receptionist</span></td>
                                    <td>
                                        <div className="activity-cell">
                                            <span className="material-symbols-outlined icon-fail" aria-hidden="true">block</span>
                                            <span className="activity-text">Failed login attempt (Invalid Password)</span>
                                        </div>
                                    </td>
                                    <td className="mono-cell">192.168.1.205</td>
                                    <td className="mono-cell">25 Aug 2026, 08:05 AM</td>
                                    <td><span className="badge-status badge-status-failed">Failed</span></td>
                                    <td className="action-cell">
                                        <button type="button" className="btn-view" title="View details" data-bs-toggle="modal" data-bs-target="#detailModal">
                                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                        </button>
                                    </td>
                                </tr>

                                {/* <!-- Row 4 --> */}
                                <tr className="row-alt">
                                    <td className="row-index">4</td>
                                    <td>
                                        <div className="user-cell">
                                            <span className="user-avatar-fallback avatar-primary">RA</span>
                                            <div>
                                                <span className="user-name d-block">Dr. Rahim Ahmed</span>
                                                <span className="user-email">rahim.a@clinichub.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="badge-role">Doctor</span></td>
                                    <td>
                                        <div className="activity-cell">
                                            <span className="material-symbols-outlined icon-create" aria-hidden="true">edit_document</span>
                                            <span className="activity-text">Created patient record for ID #4599</span>
                                        </div>
                                    </td>
                                    <td className="mono-cell">192.168.1.104</td>
                                    <td className="mono-cell">24 Aug 2026, 16:45 PM</td>
                                    <td><span className="badge-status badge-status-success">Success</span></td>
                                    <td className="action-cell">
                                        <button type="button" className="btn-view" title="View details" data-bs-toggle="modal" data-bs-target="#detailModal">
                                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="table-footer">
                        <span className="results-count">Showing <strong>1</strong> to <strong>10</strong> of <strong>142</strong> entries</span>
                        <nav aria-label="Activity pagination">
                            <div className="d-flex align-items-center pagination-brand">
                                <button type="button" className="page-btn" disabled aria-label="Previous page">
                                    <span className="material-symbols-outlined fs-sm" aria-hidden="true">chevron_left</span>
                                </button>
                                <button type="button" className="page-btn active">1</button>
                                <button type="button" className="page-btn">2</button>
                                <button type="button" className="page-btn">3</button>
                                <span className="pagination-ellipsis">&hellip;</span>
                                <button type="button" className="page-btn" aria-label="Next page">
                                    <span className="material-symbols-outlined fs-sm" aria-hidden="true">chevron_right</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>

            {/* <!-- Activity Detail Modal --> */}
            <div className="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modal-content-brand">
                        <div className="modal-header modal-header-brand">
                            <h3 className="modal-title" id="detailModalLabel">Activity Details</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">

                            {/* <!-- User context --> */}
                            <div className="detail-user-row">
                                <span className="detail-user-avatar">RA</span>
                                <div className="flex-grow-1">
                                    <div className="detail-user-name">Dr. Rahim Ahmed</div>
                                    <div className="detail-user-meta">Doctor &bull; rahim.a@clinichub.com</div>
                                </div>
                                <span className="badge-status badge-status-success">Success</span>
                            </div>

                            {/* <!-- Structured data grid --> */}
                            <div className="row g-2">
                                <div className="col-12">
                                    <div className="detail-info-box">
                                        <div className="detail-info-label">Activity Description</div>
                                        <div className="detail-desc-row">
                                            <span className="material-symbols-outlined" aria-hidden="true">login</span>
                                            <span className="detail-desc-text">User logged into the system securely. Session token generated successfully.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="detail-info-box">
                                        <div className="detail-info-label"><span className="material-symbols-outlined" aria-hidden="true">schedule</span>Date &amp; Time</div>
                                        <div className="detail-info-value mono">26 Aug 2026, 09:15 AM</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="detail-info-box">
                                        <div className="detail-info-label"><span className="material-symbols-outlined" aria-hidden="true">router</span>IP Address</div>
                                        <div className="detail-info-value mono">192.168.1.104 (Internal)</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="detail-info-box">
                                        <div className="detail-info-label"><span className="material-symbols-outlined" aria-hidden="true">devices</span>Device</div>
                                        <div className="detail-info-value">MacBook Pro 16"</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="detail-info-box">
                                        <div className="detail-info-label"><span className="material-symbols-outlined" aria-hidden="true">public</span>Browser</div>
                                        <div className="detail-info-value">Chrome 120.0.0 (macOS)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer modal-footer-brand justify-content-end">
                            <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
