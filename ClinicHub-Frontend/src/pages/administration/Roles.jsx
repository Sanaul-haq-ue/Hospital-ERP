import { useState, useEffect } from "react";

import "../../assets/css/Roles.css"
import api from '../../api/axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Roles() {
    const [roles, setRoles] = useState([]);
    const [name, setName] = useState("");
    const [short_description, setShort_description] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);
    const [editingRole, setEditingRole] = useState(null);

    useEffect(() => {
        api.get('/roles')
            .then((res) => setRoles(res.data))
            .catch((err) => console.error(err));
    }, []);

    const resetFrom = () => {
        setName("")
        setShort_description("")
        setIsActive(true)
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setErrors({
                name: ["Role name is required."]
            });
            return;
        }

        setSaving(true);
        setErrors({});

        try {
            const payload = { name: name.trim(), short_description, is_active: isActive };
            const response = await api.post('/store-role', payload);

            document.activeElement?.blur();
            window.bootstrap.Modal.getInstance(
                document.getElementById("addModal")
            )?.hide();

            toast.success(`"${response.data.name}" role created successfully. `);

            resetFrom();

        } catch (err) {
            if (err.response?.status === 422) {
                setErrors(err.response.data.errors);
                toast.error(err.response.data.message || 'Fix the error');
            } else {
                toast.error("Something went wrong. Please try again.");
                console.error(err);
            }
        } finally {
            setSaving(false);
        }
    }

    const handelEdit = (role) => {
        setEditingRole(role);
        setName(role.name);
        setShort_description(role.short_description || "");
        setIsActive(role.is_active);
        setErrors({});
    }

    const handelUpdate = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setErrors({
                name: ["Role name is required."]
            })
            return;
        }

        setSaving(true)
        setErrors({});

        try {

            const payload = { name: name.trim(), short_description, is_active: isActive };

            console.log("Update Role ID:", editingRole.id);
            console.log("Update Payload:", payload);

            const response = await api.put(`/update-role/${editingRole.id}`, payload);

            setRoles((prevRole) => prevRole.map((role) => role.id === editingRole.id ? response.data : role));

            document.activeElement?.blur();
            window.bootstrap.Modal.getInstance(
                document.getElementById('editModal')
            )?.hide();

            toast.success(`"${response.data.name}" Role updated successfully`);

            resetFrom();
            setEditingRole(null);
        } catch (err) {
            if (err.response?.status === 422) {
                setErrors(err.response.data.errors);
                toast.error(err.response.data.message || "Fix the issue");
            } else {
                console.error(err);
                toast.error("Something Went wrong");
            }
        } finally {
            setSaving(false)
        }

    }

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
                        <button type="button" className="btn btn-brand-primary" data-bs-toggle="modal" data-bs-target="#addModal" data-modal-title="Add New Role">
                            <span className="material-symbols-outlined fs-sm" onClick={resetFrom}>add</span>
                            Add Role
                        </button>
                    </div>
                </div>

                {/* <!-- Role Cards Grid --> */}
                <div className="row g-3">
                    {roles.map((role) => (
                        // -- Role Card
                        <div key={role.id} className="col-12 col-md-6 col-lg-4" >
                            <div className="role-card">
                                <span className="role-card-accent role-card-accent-primary"></span>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="role-card-icon role-card-icon-primary">
                                            <span className="material-symbols-outlined" aria-hidden="true">admin_panel_settings</span>
                                        </span>
                                        <div>
                                            <h3 className="role-card-title">{role.name}</h3>
                                            <div className="d-flex align-items-center gap-2 mt-1">
                                                <span className="role-card-badge">{role.is_active ? 'Active' : "InActive"}</span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="role-card-actions">
                                        <button type="button" onClick={() => handelEdit(role)} className="btn-icon-ghost" aria-label="Edit" data-bs-toggle="modal" data-bs-target="#editModal" data-modal-title="Edit Role">
                                            <span className="material-symbols-outlined fs-sm">edit</span>
                                        </button>
                                    </div>
                                </div>
                                <p className="role-card-desc">{role.short_description || 'no Description yet'}</p>
                                <div className="role-card-footer">
                                    <span className="role-card-users"><span className="material-symbols-outlined fs-xs" aria-hidden="true">group</span><strong>3</strong>&nbsp;Users</span>
                                    <span className="role-card-date"><span className="material-symbols-outlined fs-xs" aria-hidden="true">calendar_today</span>Oct 10, 2023</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >


            {/* -- Add Role Modal -- */}
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-content-brand">
                        <div className="modal-header modal-header-brand">
                            <h3 className="modal-title" id="addModalLabel">Add New Role</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div>
                                <label htmlFor="role-name" className="form-label form-label-brand">Role Name <span className="text-error-tok">*</span></label>
                                <input type="text" className="form-control form-control-brand" id="role-name" placeholder="e.g., Nurse"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && (
                                    <div className="text-danger mt-1">
                                        {errors.name[0]}
                                    </div>
                                )}                           </div>
                            <div>
                                <label htmlFor="role-desc" className="form-label form-label-brand">Short Description</label>
                                <textarea className="form-control form-control-brand" id="role-desc" rows="3" placeholder="Briefly describe the purpose of this role..."
                                    value={short_description} onChange={(e) => setShort_description(e.target.value)}
                                ></textarea>
                                {errors.short_description && (
                                    <div className="text-danger mt-1">
                                        {errors.short_description[0]}
                                    </div>
                                )}
                            </div>
                            <div className="status-row">
                                <div>
                                    <span className="status-row-title">Status</span>
                                    <span className="status-row-desc">
                                        {isActive
                                            ? "Active roles can be assigned to users."
                                            : "Inactive roles cannot be assigned to users."}
                                    </span>
                                </div>

                                <div className="form-check form-switch form-switch-brand mb-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="role-status-toggle"
                                        checked={isActive}
                                        onChange={(e) => setIsActive(e.target.checked)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer modal-footer-brand">
                            <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-brand-primary" id="saveRoleBtn"
                                onClick={handelSubmit}
                            >{saving ? 'Saving' : 'Save Role'}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* -- Edt Role Modal -- */}
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-content-brand">
                        <div className="modal-header modal-header-brand">
                            <h3 className="modal-title" id="editModalLabel">Edit Role</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            <div>
                                <label htmlFor="role-name" className="form-label form-label-brand">Role Name <span className="text-error-tok">*</span></label>
                                <input type="text" className="form-control form-control-brand" id="role-name" placeholder="e.g., Nurse"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && (
                                    <div className="text-danger mt-1">
                                        {errors.name[0]}
                                    </div>
                                )}                           </div>
                            <div>
                                <label htmlFor="role-desc" className="form-label form-label-brand">Short Description</label>
                                <textarea className="form-control form-control-brand" id="role-desc" rows="3" placeholder="Briefly describe the purpose of this role..."
                                    value={short_description} onChange={(e) => setShort_description(e.target.value)}
                                ></textarea>
                                {errors.short_description && (
                                    <div className="text-danger mt-1">
                                        {errors.short_description[0]}
                                    </div>
                                )}
                            </div>
                            <div className="status-row">
                                <div>
                                    <span className="status-row-title">Status</span>
                                    <span className="status-row-desc">
                                        {isActive
                                            ? "Active roles can be assigned to users."
                                            : "Inactive roles cannot be assigned to users."}
                                    </span>
                                </div>

                                <div className="form-check form-switch form-switch-brand mb-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="edit-role-status-toggle"
                                        checked={isActive}
                                        onChange={(e) => setIsActive(e.target.checked)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer modal-footer-brand">
                            <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-brand-primary" id="saveRoleBtn"
                                onClick={handelUpdate}
                            >{saving ? 'Updating' : 'Update'}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Toast Container --> */}
            < ToastContainer position="top-right" autoClose={3000} />

        </>
    )
}
