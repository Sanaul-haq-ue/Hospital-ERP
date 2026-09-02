import "../../assets/css/Roles.css"

export default function Roles() {
    return (
        <>
            <div className="container-fluid px-3 px-md-4">

                {/* <!-- Page Header --> */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
                    <div>
                        <h2 className="page-heading">Roles</h2>
                        <p className="page-subtext">Create and manage user roles and their access levels.</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-shrink-0">
                        <button type="button" className="theme-toggle-btn" id="theme-toggle" aria-label="Toggle dark mode">
                            <span className="material-symbols-outlined" id="theme-toggle-icon" aria-hidden="true">dark_mode</span>
                        </button>
                        <button type="button" className="btn btn-brand-primary" data-bs-toggle="modal" data-bs-target="#addEditModal" data-modal-title="Add New Role">
                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">add</span>
                            Add Role
                        </button>
                    </div>
                </div>

                {/* <!-- Role Cards Grid --> */}
                <div className="row g-3">

                    {/* <!-- Role Card 1: Admin --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="role-card">
                            <span className="role-card-accent role-card-accent-primary"></span>
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="role-card-icon role-card-icon-primary">
                                        <span className="material-symbols-outlined" aria-hidden="true">admin_panel_settings</span>
                                    </span>
                                    <div>
                                        <h3 className="role-card-title">Admin</h3>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <span className="role-card-badge">Active</span>
                                            <span className="role-card-id">#1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="role-card-actions">
                                    <button type="button" className="btn-icon-ghost" aria-label="View" data-bs-toggle="modal" data-bs-target="#viewModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost" aria-label="Edit" data-bs-toggle="modal" data-bs-target="#addEditModal" data-modal-title="Edit Role">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost danger" aria-label="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">delete</span>
                                    </button>
                                </div>
                            </div>
                            <p className="role-card-desc">Full system access including user management, billing, and system configuration.</p>
                            <div className="role-card-footer">
                                <span className="role-card-users"><span className="material-symbols-outlined fs-xs" aria-hidden="true">group</span><strong>3</strong>&nbsp;Users</span>
                                <span className="role-card-date"><span className="material-symbols-outlined fs-xs" aria-hidden="true">calendar_today</span>Oct 10, 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Role Card 2: Doctor --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="role-card">
                            <span className="role-card-accent role-card-accent-secondary"></span>
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="role-card-icon role-card-icon-secondary">
                                        <span className="material-symbols-outlined" aria-hidden="true">stethoscope</span>
                                    </span>
                                    <div>
                                        <h3 className="role-card-title">Doctor</h3>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <span className="role-card-badge">Active</span>
                                            <span className="role-card-id">#2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="role-card-actions">
                                    <button type="button" className="btn-icon-ghost" aria-label="View" data-bs-toggle="modal" data-bs-target="#viewModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost" aria-label="Edit" data-bs-toggle="modal" data-bs-target="#addEditModal" data-modal-title="Edit Role">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost danger" aria-label="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">delete</span>
                                    </button>
                                </div>
                            </div>
                            <p className="role-card-desc">Clinical access restricted to patient records, prescriptions, and appointment management.</p>
                            <div className="role-card-footer">
                                <span className="role-card-users"><span className="material-symbols-outlined fs-xs" aria-hidden="true">group</span><strong>15</strong>&nbsp;Users</span>
                                <span className="role-card-date"><span className="material-symbols-outlined fs-xs" aria-hidden="true">calendar_today</span>Oct 12, 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Role Card 3: Receptionist --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="role-card">
                            <span className="role-card-accent role-card-accent-tertiary"></span>
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="role-card-icon role-card-icon-tertiary">
                                        <span className="material-symbols-outlined" aria-hidden="true">support_agent</span>
                                    </span>
                                    <div>
                                        <h3 className="role-card-title">Receptionist</h3>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <span className="role-card-badge">Active</span>
                                            <span className="role-card-id">#3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="role-card-actions">
                                    <button type="button" className="btn-icon-ghost" aria-label="View" data-bs-toggle="modal" data-bs-target="#viewModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost" aria-label="Edit" data-bs-toggle="modal" data-bs-target="#addEditModal" data-modal-title="Edit Role">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost danger" aria-label="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">delete</span>
                                    </button>
                                </div>
                            </div>
                            <p className="role-card-desc">Appointment and basic patient demographic management.</p>
                            <div className="role-card-footer">
                                <span className="role-card-users"><span className="material-symbols-outlined fs-xs" aria-hidden="true">group</span><strong>8</strong>&nbsp;Users</span>
                                <span className="role-card-date"><span className="material-symbols-outlined fs-xs" aria-hidden="true">calendar_today</span>Oct 15, 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Role Card 4: Accountant --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="role-card">
                            <span className="role-card-accent role-card-accent-tint"></span>
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="role-card-icon role-card-icon-tint">
                                        <span className="material-symbols-outlined" aria-hidden="true">payments</span>
                                    </span>
                                    <div>
                                        <h3 className="role-card-title">Accountant</h3>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <span className="role-card-badge">Active</span>
                                            <span className="role-card-id">#4</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="role-card-actions">
                                    <button type="button" className="btn-icon-ghost" aria-label="View" data-bs-toggle="modal" data-bs-target="#viewModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost" aria-label="Edit" data-bs-toggle="modal" data-bs-target="#addEditModal" data-modal-title="Edit Role">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                                    </button>
                                    <button type="button" className="btn-icon-ghost danger" aria-label="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">delete</span>
                                    </button>
                                </div>
                            </div>
                            <p className="role-card-desc">Financial and billing access, invoicing, and reporting.</p>
                            <div className="role-card-footer">
                                <span className="role-card-users"><span className="material-symbols-outlined fs-xs" aria-hidden="true">group</span><strong>2</strong>&nbsp;Users</span>
                                <span className="role-card-date"><span className="material-symbols-outlined fs-xs" aria-hidden="true">calendar_today</span>Nov 01, 2023</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* <!-- Add/Edit Role Modal --> */}
            <div className="modal fade" id="addEditModal" tabindex="-1" aria-labelledby="addEditModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-content-brand">
                        <div className="modal-header modal-header-brand">
                            <h3 className="modal-title" id="addEditModalLabel">Add New Role</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div>
                                <label for="role-name" className="form-label form-label-brand">Role Name <span className="text-error-tok">*</span></label>
                                <input type="text" className="form-control form-control-brand" id="role-name" placeholder="e.g., Nurse" />
                            </div>
                            <div>
                                <label for="role-desc" className="form-label form-label-brand">Description</label>
                                <textarea className="form-control form-control-brand" id="role-desc" rows="3" placeholder="Briefly describe the purpose of this role..."></textarea>
                            </div>
                            <div className="status-row">
                                <div>
                                    <span className="status-row-title">Status</span>
                                    <span className="status-row-desc">Active roles can be assigned to users.</span>
                                </div>
                                <div className="form-check form-switch form-switch-brand mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="role-status-toggle" checked />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer modal-footer-brand">
                            <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-brand-primary" id="saveRoleBtn">Save Role</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- View Role Modal --> */}
            <div className="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modal-content-brand">
                        <div className="modal-header modal-header-brand">
                            <div className="d-flex align-items-center gap-2">
                                <h3 className="modal-title mb-0" id="viewModalLabel">Role Details</h3>
                                <span className="view-modal-status-badge">Active</span>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div>
                                <h4 className="role-card-title">Doctor</h4>
                                <p className="text-on-surface-variant-tok mt-1 mb-0">Clinical access restricted to patient records, prescriptions, and appointment management.</p>
                            </div>

                            <div className="view-modal-stats">
                                <div>
                                    <span className="view-modal-stat-label">Total Users</span>
                                    <span className="view-modal-stat-value">15</span>
                                </div>
                                <div>
                                    <span className="view-modal-stat-label">Created On</span>
                                    <span className="view-modal-stat-value mono">Oct 12, 2023</span>
                                </div>
                            </div>

                            <div>
                                <h5 className="permissions-heading">Permissions Summary</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="permission-chip"><span className="material-symbols-outlined" aria-hidden="true">group</span>Users (Read)</span>
                                    <span className="permission-chip"><span className="material-symbols-outlined" aria-hidden="true">medical_services</span>Doctors (Read)</span>
                                    <span className="permission-chip permission-chip-active"><span className="material-symbols-outlined" aria-hidden="true">person</span>Patients (Write)</span>
                                    <span className="permission-chip permission-chip-active"><span className="material-symbols-outlined" aria-hidden="true">event</span>Appointments (Write)</span>
                                    <span className="permission-chip permission-chip-none"><span className="material-symbols-outlined" aria-hidden="true">payments</span>Billing (None)</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer modal-footer-brand justify-content-between">
                            <button type="button" className="btn btn-brand-outline d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#addEditModal" data-modal-title="Edit Role">
                                <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                                Edit Role
                            </button>
                            <button type="button" className="btn btn-brand-subtle" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Delete Confirmation Modal --> */}
            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content modal-content-brand text-center">
                        <div className="modal-body p-4">
                            <div className="warning-icon-wrap">
                                <span className="material-symbols-outlined" aria-hidden="true">warning</span>
                            </div>
                            <h3 className="role-card-title mb-2" id="deleteModalLabel">Delete Role?</h3>
                            <p className="text-on-surface-variant-tok mb-3">Are you sure you want to delete this role? This action cannot be undone.</p>

                            <div className="delete-warning-note mb-4">
                                <span className="material-symbols-outlined" aria-hidden="true">info</span>
                                <p>This role is currently assigned to <strong className="text-on-background-tok">15 users</strong> and cannot be deleted until those users are reassigned.</p>
                            </div>

                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-brand-outline flex-fill" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-brand-danger flex-fill" disabled>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Toast Container --> */}
            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1080 }} id="toastContainer" aria-live="polite" aria-atomic="true"></div>


        </>
    )
}
