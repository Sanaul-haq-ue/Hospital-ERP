import "../../assets/css/Permissions.css"

export default function Permissions() {
    return (
        <>
            <div className="container-fluid px-3 px-md-4">

                {/* <!-- Page Header --> */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
                    <div>
                        <h2 className="page-heading">Permissions</h2>
                        <p className="page-subtext">Control what each role can view, create, edit, and delete.</p>
                    </div>
                    <div className="d-flex align-items-end gap-2 flex-shrink-0">
                        <button type="button" className="theme-toggle-btn" id="theme-toggle" aria-label="Toggle dark mode">
                            <span className="material-symbols-outlined" id="theme-toggle-icon" aria-hidden="true">dark_mode</span>
                        </button>
                        <div style={{ minWidth: '220px' }}>
                            <label for="role-select" className="role-select-label">Select Role</label>
                            <select className="form-select form-select-brand" id="role-select">
                                <option>Admin</option>
                                <option>Doctor</option>
                                <option selected>Receptionist</option>
                                <option>HR</option>
                                <option>Accountant</option>
                                <option>Patient</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* <!-- Matrix Card --> */}
                <div className="matrix-card">

                    {/* <!-- Toolbar --> */}
                    <div className="matrix-toolbar">
                        <div className="d-flex gap-2">
                            <button type="button" className="btn-toolbar-link btn-toolbar-link-primary" id="selectAllBtn">Select All</button>
                            <button type="button" className="btn-toolbar-link btn-toolbar-link-muted" id="clearAllBtn">Clear All</button>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <span className="matrix-legend"><span className="legend-dot legend-dot-granted"></span>Granted</span>
                            <span className="matrix-legend"><span className="legend-dot legend-dot-denied"></span>Denied</span>
                        </div>
                    </div>

                    {/* <!-- Table --> */}
                    <div className="matrix-scroll">
                        <table className="matrix-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '25%' }}>Module</th>
                                    <th className="text-center" style={{ width: '18.75%' }}>View</th>
                                    <th className="text-center" style={{ width: '18.75%' }}>Create</th>
                                    <th className="text-center" style={{ width: '18.75%' }}>Edit</th>
                                    <th className="text-center" style={{ width: '18.75%' }}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Dashboard --> */}
                                <tr>
                                    <td>
                                        <span className="module-cell"><span className="material-symbols-outlined" aria-hidden="true">dashboard</span>Dashboard</span>
                                    </td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" checked /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" disabled /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" disabled /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" disabled /></td>
                                </tr>

                                {/* <!-- Users --> */}
                                <tr className="row-alt">
                                    <td>
                                        <span className="module-cell"><span className="material-symbols-outlined" aria-hidden="true">group</span>Users</span>
                                    </td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" checked /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                </tr>

                                {/* <!-- Roles --> */}
                                <tr>
                                    <td>
                                        <span className="module-cell"><span className="material-symbols-outlined" aria-hidden="true">rule</span>Roles</span>
                                    </td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                </tr>

                                {/* <!-- Patients: advanced own/all permissions --> */}
                                <tr className="row-advanced">
                                    <td className="align-top">
                                        <span className="module-cell module-cell-accent"><span className="material-symbols-outlined" aria-hidden="true">person</span>Patients</span>
                                        <span className="module-subtext">Advanced permissions</span>
                                    </td>
                                    <td className="matrix-check-cell align-top">
                                        <div className="matrix-check-group">
                                            <label className="matrix-sub-check"><input type="checkbox" className="form-check-brand" checked /> View All</label>
                                            <label className="matrix-sub-check"><input type="checkbox" className="form-check-brand" checked /> View Own</label>
                                        </div>
                                    </td>
                                    <td className="matrix-check-cell align-top"><input type="checkbox" className="form-check-brand" checked /></td>
                                    <td className="matrix-check-cell align-top">
                                        <div className="matrix-check-group">
                                            <label className="matrix-sub-check"><input type="checkbox" className="form-check-brand" /> Edit All</label>
                                            <label className="matrix-sub-check"><input type="checkbox" className="form-check-brand" checked /> Edit Own</label>
                                        </div>
                                    </td>
                                    <td className="matrix-check-cell align-top"><input type="checkbox" className="form-check-brand" /></td>
                                </tr>

                                {/* <!-- Appointments --> */}
                                <tr>
                                    <td>
                                        <span className="module-cell"><span className="material-symbols-outlined" aria-hidden="true">event</span>Appointments</span>
                                    </td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" checked /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" checked /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" checked /></td>
                                    <td className="matrix-check-cell"><input type="checkbox" className="form-check-brand" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Actions Footer --> */}
                    <div className="matrix-footer">
                        <button type="button" className="btn btn-brand-outline">Cancel</button>
                        <button type="button" className="btn btn-brand-primary" id="saveBtn">
                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">save</span>
                            Save Permissions
                        </button>
                    </div>
                </div>

            </div>

            {/* <!-- Toast Container --> */}
            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1080 }} id="toastContainer" aria-live="polite" aria-atomic="true"></div>

        </>
    )
}
