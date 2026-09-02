import "../../assets/css/Specialization.css"

export default function Specializations() {

    return (
        <>
            <div className="container-fluid sp-container">

                {/* <!-- Header Section --> */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-lg">
                    <div>
                        <h2 className="sp-title">Specializations</h2>
                        <p className="sp-subtitle">Manage medical specializations and their departments.</p>
                    </div>
                    <button type="button" className="sp-btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        <span className="material-symbols-outlined">add</span>
                        Add Specialization
                    </button>
                </div>

                {/* <!-- Filters Section --> */}
                <div className="sp-filters">
                    <div className="row g-md align-items-end">
                        <div className="col-12 col-md-4">
                            <label className="sp-filter-label" for="filterDepartment">Department</label>
                            <select className="sp-filter-select" id="filterDepartment">
                                <option>All Departments</option>
                                <option>Medicine</option>
                                <option>Surgery</option>
                                <option>Paediatrics</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="sp-filter-label" for="filterStatus">Status</label>
                            <select className="sp-filter-select" id="filterStatus">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4">
                            <button type="button" className="sp-btn-outline">
                                <span className="material-symbols-outlined">filter_list</span>
                                More Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Data Table --> */}
                <div className="sp-table-card">
                    <div className="table-responsive">
                        <table className="table sp-table">
                            <thead>
                                <tr>
                                    <th className="sp-col-index">#</th>
                                    <th>Specialization Name</th>
                                    <th>Department</th>
                                    <th className="d-none d-sm-table-cell">Description</th>
                                    <th>Status</th>
                                    <th className="d-none d-md-table-cell">Created Date</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="sp-mono">01</td>
                                    <td className="fw-medium">Cardiology</td>
                                    <td className="text-body-sm">Medicine</td>
                                    <td className="d-none d-sm-table-cell sp-desc-cell">Advanced heart care</td>
                                    <td><span className="sp-pill sp-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell sp-mono">Oct 12, 2023</td>
                                    <td className="text-end">
                                        <div className="sp-row-actions">
                                            <button type="button" className="sp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="sp-action-btn sp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sp-mono">02</td>
                                    <td className="fw-medium">Gastroenterology</td>
                                    <td className="text-body-sm">Medicine</td>
                                    <td className="d-none d-sm-table-cell sp-desc-cell">Digestive system specialists</td>
                                    <td><span className="sp-pill sp-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell sp-mono">Oct 15, 2023</td>
                                    <td className="text-end">
                                        <div className="sp-row-actions">
                                            <button type="button" className="sp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="sp-action-btn sp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sp-mono">03</td>
                                    <td className="fw-medium">General Surgery</td>
                                    <td className="text-body-sm">Surgery</td>
                                    <td className="d-none d-sm-table-cell sp-desc-cell">Broad surgical procedures</td>
                                    <td><span className="sp-pill sp-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell sp-mono">Nov 05, 2023</td>
                                    <td className="text-end">
                                        <div className="sp-row-actions">
                                            <button type="button" className="sp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="sp-action-btn sp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sp-mono">04</td>
                                    <td className="fw-medium">Neonatology</td>
                                    <td className="text-body-sm">Paediatrics</td>
                                    <td className="d-none d-sm-table-cell sp-desc-cell">Specialized newborn care</td>
                                    <td><span className="sp-pill sp-pill-active">Active</span></td>
                                    <td className="d-none d-md-table-cell sp-mono">Jan 20, 2024</td>
                                    <td className="text-end">
                                        <div className="sp-row-actions">
                                            <button type="button" className="sp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="sp-action-btn sp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="sp-table-footer">
                        <div className="sp-table-footer-note">
                            Showing <strong>1</strong> to <strong>4</strong> of <strong>12</strong> results
                        </div>
                        <div className="d-flex gap-1">
                            <button type="button" className="sp-page-btn" disabled aria-label="Previous page">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button type="button" className="sp-page-btn active">1</button>
                            <button type="button" className="sp-page-btn">2</button>
                            <button type="button" className="sp-page-btn">3</button>
                            <button type="button" className="sp-page-btn" aria-label="Next page">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            {/* <!-- Add Specialization Modal --> */}
            <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="addModalLabel">Add Specialization</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="sp-toast-form" data-toast-title="Success" data-toast-message="Specialization added successfully." data-toast-type="success">
                            <div className="modal-body d-flex flex-column gap-md">
                                <div>
                                    <label className="sp-form-label" for="addDepartment">Department *</label>
                                    <select className="form-select sp-form-control" id="addDepartment" required>
                                        <option disabled selected value="">Select Department</option>
                                        <option>Medicine</option>
                                        <option>Surgery</option>
                                        <option>Paediatrics</option>
                                        <option>Gynaecology</option>
                                        <option>Orthopaedics</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="sp-form-label" for="addName">Specialization Name *</label>
                                    <input className="form-control sp-form-control" id="addName" placeholder="e.g. Cardiology" required type="text" />
                                </div>
                                <div>
                                    <label className="sp-form-label" for="addDescription">Description</label>
                                    <textarea className="form-control sp-form-control" id="addDescription" placeholder="Brief description..." rows="3"></textarea>
                                </div>
                                <div className="sp-switch-row">
                                    <label className="sp-switch-label" for="addStatusSwitch">Status (Active)</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input sp-switch" type="checkbox" role="switch" id="addStatusSwitch" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn sp-btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Edit Specialization Modal --> */}
            <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="editModalLabel">Edit Specialization</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="sp-toast-form" data-toast-title="Success" data-toast-message="Specialization updated successfully." data-toast-type="success">
                            <div className="modal-body d-flex flex-column gap-md">
                                <div>
                                    <label className="sp-form-label" for="editDepartment">Department *</label>
                                    <select className="form-select sp-form-control" id="editDepartment" required>
                                        <option>Medicine</option>
                                        <option>Surgery</option>
                                        <option>Paediatrics</option>
                                        <option>Gynaecology</option>
                                        <option>Orthopaedics</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="sp-form-label" for="editName">Specialization Name *</label>
                                    <input className="form-control sp-form-control" id="editName" required type="text" value="Cardiology" />
                                </div>
                                <div>
                                    <label className="sp-form-label" for="editDescription">Description</label>
                                    <textarea className="form-control sp-form-control" id="editDescription" rows="3">Advanced heart care</textarea>
                                </div>
                                <div className="sp-switch-row">
                                    <label className="sp-switch-label" for="editStatusSwitch">Status (Active)</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input sp-switch" type="checkbox" role="switch" id="editStatusSwitch" checked />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn sp-btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Delete Confirmation Modal --> */}
            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-body text-center py-lg">
                            <div className="sp-modal-icon">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <h3 className="fs-5 mb-2" id="deleteModalLabel">Delete Specialization?</h3>
                            <p className="text-body-sm text-on-surface-variant-tok mb-0">Are you sure you want to delete "Cardiology"? This action cannot be undone and may affect associated doctors.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger sp-toast-trigger" data-bs-dismiss="modal" data-toast-title="Deleted" data-toast-message="Specialization has been removed." data-toast-type="error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Toast Notification --> */}
            <div className="toast-container position-fixed bottom-0 end-0 p-lg sp-toast-container">
                <div id="actionToast" className="toast sp-toast align-items-start border-0" role="status" aria-live="polite" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body d-flex align-items-start gap-sm">
                            <span className="material-symbols-outlined" id="actionToastIcon">check_circle</span>
                            <div>
                                <p className="sp-toast-title" id="actionToastTitle">Success</p>
                                <p className="sp-toast-message" id="actionToastMessage">Done.</p>
                            </div>
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 mt-2" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>
    )
}