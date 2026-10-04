import { useState, useEffect } from "react";

import "../../assets/css/Department.css"
import api from '../../api/axios';
import { toast, ToastContainer } from 'react-toastify';
import { hasPermission } from "../../utils/permissions";

export default function Department() {
    const [department, setDepartment] = useState([]);
    const [name, setName] = useState("");
    const [short_description, setShort_description] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);


    const resetFrom = () => {
        setName("")
        setShort_description("")
        setIsActive(true)
    }

    // create Department function
    const handelSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setErrors({
                name: ["Department name is required."]
            });
            return;
        }

        setSaving(true);
        setErrors({});

        try {
            const payload = { name: name.trim(), short_description, is_active: isActive };
            console.log(payload)
            const response = await api.post('/store/dept', payload);

            setDepartment((prevDept) => [
                response.data,
                ...prevDept,
            ]);

            document.activeElement?.blur();
            window.bootstrap.Modal.getInstance(
                document.getElementById("addModal")
            )?.hide();

            toast.success(`"${response.data.name}" Department created successfully. `);

            resetFrom();

        } catch (err) {
            console.error('STATUS:', err.response?.status);
            console.error('DATA:', err.response?.data);
            if (err.response?.status === 422) {
                setErrors(err.response.data.errors);
                toast.error(err.response.data.message || 'Fix the error');
            } else {
                toast.error(err.response?.data?.message ||
                    "Something went wrong. Please try again.");
                console.error(err);
            }
        } finally {
            setSaving(false);
        }
    }



    return (
        <>
            <div className="container-fluid dp-container">

                {/* <!-- Page Header --> */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-md mb-lg">
                    <div>
                        <h2 className="dp-title">Departments</h2>
                        <p className="dp-subtitle">Manage medical departments in the clinic.</p>
                    </div>
                    <div className="d-flex align-items-center gap-md w-100 w-md-auto">
                        <label className="dp-search flex-grow-1 flex-md-grow-0" htmlFor="deptSearch">
                            <span className="material-symbols-outlined">search</span>
                            <input className="dp-search-input" id="deptSearch" placeholder="Search departments..." type="text" />
                        </label>
                        {hasPermission("dept.create") && (
                            <button type="button" className="dp-btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                                <span className="material-symbols-outlined">add</span>
                                Add Department
                            </button>
                        )}
                    </div>
                </div>

                {/* <!-- Department Table Card --> */}
                <div className="dp-table-card">
                    <div className="table-responsive">
                        <table className="table dp-table">
                            <thead>
                                <tr>
                                    <th className="dp-col-index">#</th>
                                    <th>Department Name</th>
                                    <th className="dp-col-desc">Description</th>
                                    <th>Status</th>
                                    <th>Created Date</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="dp-mono">01</td>
                                    <td className="fw-medium">Medicine</td>
                                    <td className="text-body-md">General internal medicine and primary care unit.</td>
                                    <td><span className="dp-pill dp-pill-active">Active</span></td>
                                    <td className="dp-mono">Oct 12, 2023</td>
                                    <td className="text-end">
                                        <div className="dp-row-actions">
                                            <button type="button" className="dp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="dp-action-btn dp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="dp-mono">02</td>
                                    <td className="fw-medium">Surgery</td>
                                    <td className="text-body-md">General and specialized surgical operations.</td>
                                    <td><span className="dp-pill dp-pill-active">Active</span></td>
                                    <td className="dp-mono">Oct 15, 2023</td>
                                    <td className="text-end">
                                        <div className="dp-row-actions">
                                            <button type="button" className="dp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="dp-action-btn dp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="dp-mono">03</td>
                                    <td className="fw-medium">Paediatrics</td>
                                    <td className="text-body-md">Medical care of infants, children, and adolescents.</td>
                                    <td><span className="dp-pill dp-pill-active">Active</span></td>
                                    <td className="dp-mono">Nov 02, 2023</td>
                                    <td className="text-end">
                                        <div className="dp-row-actions">
                                            <button type="button" className="dp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="dp-action-btn dp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="dp-row-muted">
                                    <td className="dp-mono">04</td>
                                    <td className="fw-medium">Gynaecology</td>
                                    <td className="text-body-md">Women's reproductive health and maternal care.</td>
                                    <td><span className="dp-pill dp-pill-inactive">Inactive</span></td>
                                    <td className="dp-mono">Dec 10, 2023</td>
                                    <td className="text-end">
                                        <div className="dp-row-actions">
                                            <button type="button" className="dp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="dp-action-btn dp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="dp-mono">05</td>
                                    <td className="fw-medium">Orthopaedics</td>
                                    <td className="text-body-md">Conditions involving the musculoskeletal system.</td>
                                    <td><span className="dp-pill dp-pill-active">Active</span></td>
                                    <td className="dp-mono">Jan 05, 2024</td>
                                    <td className="text-end">
                                        <div className="dp-row-actions">
                                            <button type="button" className="dp-action-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button type="button" className="dp-action-btn dp-action-btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="dp-table-footer">
                        <span className="dp-table-footer-note">Showing 1 to 5 of 12 entries</span>
                        <div className="d-flex align-items-center gap-xs">
                            <button type="button" className="dp-page-btn" disabled aria-label="Previous page">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button type="button" className="dp-page-btn active">1</button>
                            <button type="button" className="dp-page-btn">2</button>
                            <button type="button" className="dp-page-btn">3</button>
                            <button type="button" className="dp-page-btn" aria-label="Next page">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Add Department Modal --> */}
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="addModalLabel">Add Department</h3>
                            <button type="button" onClick={resetFrom} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="dp-toast-form" data-toast-message="Department added successfully!">
                            <div className="modal-body d-flex flex-column gap-md">
                                <div>
                                    <label className="dp-form-label" htmlFor="addName">Department Name <span className="dp-required">*</span></label>
                                    <input className="form-control dp-form-control" value={name} onChange={(e) => setName(e.target.value)} id="addName" placeholder="e.g. Cardiology" required type="text" />
                                    {errors.name && (
                                        <div className="text-danger mt-1"> {errors.name[0]} </div>
                                    )}
                                </div>
                                <div>
                                    <label className="dp-form-label" htmlFor="addDescription">Description</label>
                                    <textarea className="form-control dp-form-control" value={short_description} onChange={(e) => setShort_description(e.target.value)} id="addDescription" placeholder="Brief description of the unit..." rows="3"></textarea>
                                    {errors.short_description && (
                                        <div className="text-danger mt-1"> {errors.short_description[0]} </div>
                                    )}
                                </div>
                                <div>
                                    <label className="dp-form-label" htmlFor="addStatus">Status</label>
                                    <select className="form-select dp-form-control" id="addStatus"
                                        value={isActive ? "1" : "0"}
                                        onChange={(e) => setIsActive(e.target.value === "1")}>

                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" onClick={handelSubmit} className="btn dp-btn-primary">
                                    {saving ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Edit Department Modal --> */}
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="editModalLabel">Edit Department</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="dp-toast-form" data-toast-message="Department updated successfully!">
                            <div className="modal-body d-flex flex-column gap-md">
                                <div>
                                    <label className="dp-form-label" htmlFor="editName">Department Name <span className="dp-required">*</span></label>
                                    <input className="form-control dp-form-control" id="editName" required type="text" value="Medicine" />
                                </div>
                                <div>
                                    <label className="dp-form-label" htmlFor="editDescription">Description</label>
                                    <textarea className="form-control dp-form-control" id="editDescription" rows="3">General internal medicine and primary care unit.</textarea>
                                </div>
                                <div>
                                    <label className="dp-form-label" htmlFor="editStatus">Status</label>
                                    <select className="form-select dp-form-control" id="editStatus">
                                        <option selected value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn dp-btn-primary">Update Department</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Delete Confirmation Modal --> */}
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body text-center py-lg">
                            <div className="dp-modal-icon">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <h3 className="modal-title fs-5 mb-2" id="deleteModalLabel">Delete Department?</h3>
                            <p className="text-body-md text-on-surface-variant-tok mb-lg">Are you sure you want to delete this department? This action cannot be undone.</p>
                            <div className="d-flex justify-content-center gap-sm">
                                <button type="button" className="btn btn-outline-secondary flex-grow-1" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger flex-grow-1 dp-toast-trigger" data-bs-dismiss="modal" data-toast-message="Department deleted.">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Toast Notification --> */}
            <div className="toast-container position-fixed bottom-0 end-0 p-lg dp-toast-container">
                <div id="actionToast" className="toast dp-toast align-items-center border-0" role="status" aria-live="polite" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body d-flex align-items-center gap-sm">
                            <span className="material-symbols-outlined">check_circle</span>
                            <span id="actionToastMessage">Done.</span>
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>
    )
}
