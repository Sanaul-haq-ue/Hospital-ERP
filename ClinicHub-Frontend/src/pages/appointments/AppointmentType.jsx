import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/axios";
import "../../assets/css/AppointmentType.css";
import { hasPermission } from "../../utils/permissions";

const emptyForm = { name: "", description: "", is_active: true };

const validationMessage = (errors) => (
    errors ? Object.values(errors).flat()[0] : null
);

export default function AppointmentType() {
    const [appointmentTypes, setAppointmentTypes] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [editingType, setEditingType] = useState(null);
    const [errors, setErrors] = useState({});
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        let isMounted = true;
        api.get("/appointment-types")
            .then((response) => {
                if (isMounted) setAppointmentTypes(response.data);
            })
            .catch((error) => {
                if (isMounted) toast.error(error.response?.data?.message || "Could not load appointment types.");
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredTypes = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();
        return appointmentTypes.filter((type) => {
            const matchesSearch = !normalizedSearch
                || type.name.toLowerCase().includes(normalizedSearch)
                || (type.description || "").toLowerCase().includes(normalizedSearch);
            const matchesStatus = statusFilter === "all"
                || (statusFilter === "active" ? type.is_active : !type.is_active);
            return matchesSearch && matchesStatus;
        });
    }, [appointmentTypes, search, statusFilter]);

    const resetForm = () => {
        setForm(emptyForm);
        setEditingType(null);
        setErrors({});
    };

    const updateField = (field, value) => {
        setForm((current) => ({ ...current, [field]: value }));
        setErrors((current) => {
            const next = { ...current };
            delete next[field];
            return next;
        });
    };

    const closeModal = (id) => {
        window.bootstrap?.Modal.getInstance(document.getElementById(id))?.hide();
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        const name = form.name.trim();
        if (!name) {
            const message = "Appointment type name is required.";
            setErrors({ name: [message] });
            toast.error(message);
            return;
        }

        setSaving(true);
        setErrors({});
        try {
            const response = await api.post("/appointment-types", {
                ...form,
                name,
                description: form.description.trim() || null,
            });
            setAppointmentTypes((current) => [...current, response.data].sort((a, b) => a.name.localeCompare(b.name)));
            closeModal("addModal");
            resetForm();
            toast.success(`"${response.data.name}" appointment type created successfully.`);
        } catch (error) {
            const validationErrors = error.response?.data?.errors;
            if (validationErrors) setErrors(validationErrors);
            toast.error(validationMessage(validationErrors) || error.response?.data?.message || "Could not create appointment type.");
        } finally {
            setSaving(false);
        }
    };

    const openEdit = (type) => {
        setEditingType(type);
        setForm({
            name: type.name,
            description: type.description || "",
            is_active: Boolean(type.is_active),
        });
        setErrors({});
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (!editingType) return;

        const name = form.name.trim();
        if (!name) {
            const message = "Appointment type name is required.";
            setErrors({ name: [message] });
            toast.error(message);
            return;
        }

        setSaving(true);
        setErrors({});
        try {
            const response = await api.put(`/appointment-types/${editingType.id}`, {
                ...form,
                name,
                description: form.description.trim() || null,
            });
            setAppointmentTypes((current) => current
                .map((type) => type.id === response.data.id ? response.data : type)
                .sort((a, b) => a.name.localeCompare(b.name)));
            closeModal("editModal");
            resetForm();
            toast.success(`"${response.data.name}" appointment type updated successfully.`);
        } catch (error) {
            const validationErrors = error.response?.data?.errors;
            if (validationErrors) setErrors(validationErrors);
            toast.error(validationMessage(validationErrors) || error.response?.data?.message || "Could not update appointment type.");
        } finally {
            setSaving(false);
        }
    };

    const getFieldError = (field) => {
        const error = errors[field];
        return Array.isArray(error) ? error[0] : error;
    };

    const renderFormFields = (prefix) => (
        <div className="modal-body d-flex flex-column gap-md">
            <div>
                <label className="sp-form-label" htmlFor={`${prefix}Name`}>Appointment Type Name *</label>
                <input
                    className="form-control sp-form-control"
                    id={`${prefix}Name`}
                    maxLength={150}
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={Boolean(getFieldError("name"))}
                    aria-describedby={getFieldError("name") ? `${prefix}NameError` : undefined}
                    required
                />
                {getFieldError("name") && <small className="text-danger" id={`${prefix}NameError`} role="alert">{getFieldError("name")}</small>}
            </div>
            <div>
                <label className="sp-form-label" htmlFor={`${prefix}Description`}>Description</label>
                <textarea
                    className="form-control sp-form-control"
                    id={`${prefix}Description`}
                    rows="3"
                    maxLength={1000}
                    value={form.description}
                    onChange={(event) => updateField("description", event.target.value)}
                />
                {getFieldError("description") && <small className="text-danger" role="alert">{getFieldError("description")}</small>}
            </div>
            <div className="sp-switch-row">
                <label className="sp-switch-label" htmlFor={`${prefix}Status`}>Status (Active)</label>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input sp-switch"
                        type="checkbox"
                        role="switch"
                        id={`${prefix}Status`}
                        checked={form.is_active}
                        onChange={(event) => updateField("is_active", event.target.checked)}
                    />
                </div>
                {getFieldError("is_active") && <small className="text-danger" role="alert">{getFieldError("is_active")}</small>}
            </div>
        </div>
    );

    return (
        <div className="container-fluid sp-container appointment-types-page">
            <header className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-lg">
                <div>
                    <h2 className="sp-title">Appointment Types</h2>
                    <p className="sp-subtitle">Manage the types of appointments patients can book.</p>
                </div>
                {hasPermission("appointmentType.create") && (
                    <button
                        type="button"
                        className="sp-btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                        onClick={resetForm}
                    >
                        <span className="material-symbols-outlined" aria-hidden="true">add</span>
                        Add Appointment Type
                    </button>
                )}
            </header>

            <section className="sp-filters" aria-label="Appointment type filters">
                <div className="row g-md align-items-end">
                    <div className="col-12 col-md-6">
                        <label className="sp-filter-label" htmlFor="filterType">Search appointment types</label>
                        <input
                            className="sp-filter-select"
                            id="filterType"
                            type="search"
                            placeholder="Search name or description"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="sp-filter-label" htmlFor="filterStatus">Status</label>
                        <select
                            className="sp-filter-select"
                            id="filterStatus"
                            value={statusFilter}
                            onChange={(event) => setStatusFilter(event.target.value)}
                        >
                            <option value="all">All Statuses</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="col-12 col-md-2">
                        <button type="button" className="sp-btn-outline w-100" onClick={() => { setSearch(""); setStatusFilter("all"); }}>
                            Clear filters
                        </button>
                    </div>
                </div>
            </section>

            <section className="sp-table-card appointment-type-table-card" aria-label="Appointment types">
                <div className="table-responsive">
                    <table className="table sp-table appointment-type-table">
                        <thead>
                            <tr>
                                <th className="sp-col-index">#</th>
                                <th>Appointment Type</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="5" className="text-center py-4">Loading appointment types...</td></tr>
                            ) : filteredTypes.length === 0 ? (
                                <tr><td colSpan="5" className="text-center py-4">No appointment types found.</td></tr>
                            ) : filteredTypes.map((type, index) => (
                                <tr key={type.id}>
                                    <td className="sp-mono">{String(index + 1).padStart(2, "0")}</td>
                                    <td className="fw-medium">{type.name}</td>
                                    <td className="sp-desc-cell">{type.description || "-"}</td>
                                    <td>
                                        <span className={`sp-pill ${type.is_active ? "sp-pill-active" : "sp-pill-inactive"}`}>
                                            {type.is_active ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="text-end">
                                        <div className="sp-row-actions">
                                            {hasPermission("appointmentType.edit") && (
                                                <button
                                                    type="button"
                                                    className="sp-action-btn"
                                                    title={`Edit ${type.name}`}
                                                    aria-label={`Edit ${type.name}`}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#editModal"
                                                    onClick={() => openEdit(type)}
                                                >
                                                    <span className="material-symbols-outlined" aria-hidden="true">edit</span>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <footer className="sp-table-footer">
                    <div className="sp-table-footer-note">
                        Showing <strong>{filteredTypes.length}</strong> of <strong>{appointmentTypes.length}</strong> appointment types
                    </div>
                </footer>
            </section>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="addModalLabel">Add Appointment Type</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form onSubmit={handleCreate}>
                            {renderFormFields("add")}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn sp-btn-primary" disabled={saving}>{saving ? "Saving..." : "Save"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="editModalLabel">Edit Appointment Type</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form onSubmit={handleUpdate}>
                            {renderFormFields("edit")}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn sp-btn-primary" disabled={saving || !editingType}>
                                    {saving ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
