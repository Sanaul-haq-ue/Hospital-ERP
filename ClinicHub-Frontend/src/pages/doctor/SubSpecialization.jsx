import "../../assets/css/SubSpecialization.css"

export default function SubSpecialization() {

    return (
        <>
            <div className="container-fluid ss-container d-flex flex-column gap-lg">

                {/* <!-- Page Header --> */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
                    <div>
                        <h2 className="ss-title">Sub-specializations</h2>
                        <p className="ss-subtitle">Manage sub-specializations under medical specializations.</p>
                    </div>
                    <button type="button" className="ss-btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        <span className="material-symbols-outlined">add</span>
                        Add Sub-specialization
                    </button>
                </div>

                {/* <!-- Filters & Search Toolbar --> */}
                <div className="ss-filters">
                    <div className="row g-md align-items-end">
                        <div className="col-12 col-md-4">
                            <label className="ss-filter-label" for="ssSearch">Search</label>
                            <div className="ss-search-wrap">
                                <span className="material-symbols-outlined">search</span>
                                <input className="ss-search-input" id="ssSearch" placeholder="Search by name..." type="text" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <label className="ss-filter-label" for="ssDeptFilter">Department</label>
                            <select className="ss-filter-select" id="ssDeptFilter">
                                <option value="">All Departments</option>
                                <option value="medicine">Medicine</option>
                                <option value="surgery">Surgery</option>
                                <option value="paediatrics">Paediatrics</option>
                            </select>
                        </div>
                        <div className="col-6 col-md-3">
                            <label className="ss-filter-label" for="ssStatusFilter">Status</label>
                            <select className="ss-filter-select" id="ssStatusFilter">
                                <option value="">All Statuses</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-2">
                            <button type="button" className="ss-btn-reset">Reset</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Data Table --> */}
                <div className="ss-table-card">
                    <div className="table-responsive">
                        <table className="table ss-table">
                            <thead>
                                <tr>
                                    <th className="ss-col-index">#</th>
                                    <th>Sub-specialization Name</th>
                                    <th>Specialization</th>
                                    <th>Department</th>
                                    <th className="d-none d-lg-table-cell">Description</th>
                                    <th>Status</th>
                                    <th className="d-none d-md-table-cell">Created Date</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="ss-mono">1</td>
                                    <td className="fw-medium">Interventional Cardiology</td>
                                    <td className="text-body-md text-on-surface-variant-tok">Cardiology</td>
                                    <td className="text-body-md text-on-surface-variant-tok">Medicine</td>
                                    <td className="d-none d-lg-table-cell ss-desc-cell">Advanced heart procedures</td>
                                    <td><span className="ss-pill ss-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell ss-mono">Oct 12, 2023</td>
                                    <td className="text-end">
                                        <div className="ss-row-actions">
                                            <button type="button" className="ss-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="ss-action-btn ss-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ss-mono">2</td>
                                    <td className="fw-medium">Laparoscopic Surgery</td>
                                    <td className="text-body-md text-on-surface-variant-tok">General Surgery</td>
                                    <td className="text-body-md text-on-surface-variant-tok">Surgery</td>
                                    <td className="d-none d-lg-table-cell ss-desc-cell">Minimally invasive surgery</td>
                                    <td><span className="ss-pill ss-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell ss-mono">Nov 05, 2023</td>
                                    <td className="text-end">
                                        <div className="ss-row-actions">
                                            <button type="button" className="ss-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="ss-action-btn ss-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ss-mono">3</td>
                                    <td className="fw-medium">Neonatology</td>
                                    <td className="text-body-md text-on-surface-variant-tok">Paediatrics</td>
                                    <td className="text-body-md text-on-surface-variant-tok">Paediatrics</td>
                                    <td className="d-none d-lg-table-cell ss-desc-cell">Newborn care</td>
                                    <td><span className="ss-pill ss-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell ss-mono">Jan 20, 2024</td>
                                    <td className="text-end">
                                        <div className="ss-row-actions">
                                            <button type="button" className="ss-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="ss-action-btn ss-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="ss-table-footer">
                        <span className="ss-table-footer-note">Showing 1 to 3 of 12 entries</span>
                        <div className="d-flex align-items-center gap-xs">
                            <button type="button" className="ss-page-btn" disabled aria-label="Previous page">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button type="button" className="ss-page-btn active">1</button>
                            <button type="button" className="ss-page-btn">2</button>
                            <button type="button" className="ss-page-btn">3</button>
                            <span className="ss-page-ellipsis">...</span>
                            <button type="button" className="ss-page-btn" aria-label="Next page">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Add Sub-specialization Modal --> */}
            <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content ss-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="addModalLabel">Add Sub-specialization</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="ss-toast-form" data-toast-message="Sub-specialization added successfully" data-toast-type="success">
                            <div className="modal-body d-flex flex-column gap-md">
                                <div>
                                    <label className="ss-form-label" for="addDepartment">Department <span className="ss-required">*</span></label>
                                    <select className="form-select ss-form-control" id="addDepartment" required>
                                        <option value="">Select Department</option>
                                        <option value="medicine">Medicine</option>
                                        <option value="surgery">Surgery</option>
                                        <option value="paediatrics">Paediatrics</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="ss-form-label" for="addSpecialization">Specialization <span className="ss-required">*</span></label>
                                    <select className="form-select ss-form-control" id="addSpecialization" disabled required>
                                        <option value="">Select Department first</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="ss-form-label" for="addName">Sub-specialization Name <span className="ss-required">*</span></label>
                                    <input className="form-control ss-form-control" id="addName" placeholder="e.g., Interventional Cardiology" required type="text" />
                                </div>
                                <div>
                                    <label className="ss-form-label" for="addDescription">Description (Optional)</label>
                                    <textarea className="form-control ss-form-control" id="addDescription" placeholder="Brief description..." rows="3"></textarea>
                                </div>
                                <div className="ss-status-row">
                                    <span className="ss-status-label">Status Active</span>
                                    <div className="form-check form-switch mb-0">
                                        <input className="form-check-input ss-switch" type="checkbox" role="switch" id="addStatusSwitch" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn ss-btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Edit Sub-specialization Modal (simplified, mirrors source) --> */}
            <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content ss-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="editModalLabel">Edit Sub-specialization</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="ss-toast-form" data-toast-message="Changes saved" data-toast-type="success">
                            <div className="modal-body d-flex flex-column gap-md">
                                <div>
                                    <label className="ss-form-label" for="editName">Sub-specialization Name</label>
                                    <input className="form-control ss-form-control" id="editName" type="text" value="Interventional Cardiology" />
                                </div>
                                {/* <!-- Other fields omitted for brevity, identical to add modal --> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn ss-btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Delete Confirmation Modal --> */}
            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content ss-modal-content">
                        <div className="modal-body text-center py-lg">
                            <div className="ss-modal-icon">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <h3 className="fs-5 mb-2" id="deleteModalLabel">Delete Sub-specialization?</h3>
                            <p className="text-body-md text-on-surface-variant-tok mb-0">This action cannot be undone. All associated records may be affected.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary flex-fill" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger flex-fill ss-toast-trigger" data-bs-dismiss="modal" data-toast-message="Deleted successfully" data-toast-type="error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Toast Notification --> */}
            <div className="toast-container position-fixed bottom-0 end-0 p-lg ss-toast-container">
                <div id="actionToast" className="toast ss-toast align-items-center border-0" role="status" aria-live="polite" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body d-flex align-items-center gap-sm">
                            <span className="material-symbols-outlined" id="actionToastIcon">check_circle</span>
                            <span id="actionToastMessage">Done.</span>
                        </div>
                        <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>
    )
}
