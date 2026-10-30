import "../../assets/css/DoctorAppointmentConfiguration.css";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/axios";
import { hasPermission } from "../../utils/permissions";

const emptyForm = {
    doctor_id: "",
    appointment_type_id: "",
    duration: "30",
    price: "",
    status: true,
    notes: "",
};

const validateConfigurationForm = (values) => {
    const nextErrors = {};
    const duration = Number(values.duration);
    const price = Number(values.price);

    if (!values.doctor_id) nextErrors.doctor_id = ["Doctor is required."];
    if (!values.appointment_type_id) nextErrors.appointment_type_id = ["Appointment type is required."];
    if (
        !values.duration.trim()
        || !Number.isInteger(duration)
        || duration < 5
        || duration > 180
        || duration % 5 !== 0
    ) {
        nextErrors.duration = ["Duration must be a whole number from 5 to 180 minutes in 5-minute increments."];
    }
    if (
        !values.price.trim()
        || !/^\d+(\.\d{1,2})?$/.test(values.price)
        || !Number.isFinite(price)
        || price < 0
        || price > 99999999.99
    ) {
        nextErrors.price = ["Enter a non-negative price with no more than 2 decimal places."];
    }

    return nextErrors;
};

export default function DoctorAppointmentConfiguration() {
    const [doctors, setDoctors] = useState([]);
    const [appointmentTypes, setAppointmentTypes] = useState([]);
    const [configurations, setConfigurations] = useState([]);
    const [configurationError, setConfigurationError] = useState("");
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [editingConfiguration, setEditingConfiguration] = useState(null);
    const [editForm, setEditForm] = useState(emptyForm);
    const [editErrors, setEditErrors] = useState({});
    const [editSaving, setEditSaving] = useState(false);
    const [loadingConfigurations, setLoadingConfigurations] = useState(true);
    const [loadingDoctors, setLoadingDoctors] = useState(true);
    const [loadingAppointmentTypes, setLoadingAppointmentTypes] = useState(true);
    const [saving, setSaving] = useState(false);

    const fetchConfigurations = useCallback(() => api.get("/configurations"), []);

    useEffect(() => {
        let isMounted = true;

        fetchConfigurations()
            .then((response) => {
                if (isMounted) {
                    setConfigurations(response.data);
                    setConfigurationError("");
                }
            })
            .catch((error) => {
                if (isMounted) {
                    const message = error.response?.data?.message || "Could not load configurations.";
                    setConfigurationError(message);
                    toast.error(message);
                }
            })
            .finally(() => {
                if (isMounted) setLoadingConfigurations(false);
            });

        api.get("/employees")
            .then((response) => {
                if (isMounted) {
                    setDoctors(response.data.filter((employee) => employee.is_doctor));
                }
            })
            .catch((error) => {
                if (isMounted) {
                    toast.error(error.response?.data?.message || "Could not load doctors.");
                }
            })
            .finally(() => {
                if (isMounted) setLoadingDoctors(false);
            });

        api.get("/appointment-types")
            .then((response) => {
                if (isMounted) {
                    setAppointmentTypes(response.data.filter((type) => type.is_active));
                }
            })
            .catch((error) => {
                if (isMounted) {
                    toast.error(error.response?.data?.message || "Could not load appointment types.");
                }
            })
            .finally(() => {
                if (isMounted) setLoadingAppointmentTypes(false);
            });

        return () => {
            isMounted = false;
        };
    }, [fetchConfigurations]);

    const refreshConfigurations = () => {
        setLoadingConfigurations(true);
        setConfigurationError("");
        fetchConfigurations()
            .then((response) => {
                setConfigurations(response.data);
                setConfigurationError("");
            })
            .catch((error) => {
                const message = error.response?.data?.message || "Could not load configurations.";
                setConfigurationError(message);
                toast.error(message);
            })
            .finally(() => setLoadingConfigurations(false));
    };

    const updateField = (field, value) => {
        setForm((current) => ({ ...current, [field]: value }));
        setErrors((current) => {
            const next = { ...current };
            delete next[field];
            return next;
        });
    };

    const updateEditField = (field, value) => {
        setEditForm((current) => ({ ...current, [field]: value }));
        setEditErrors((current) => {
            const next = { ...current };
            delete next[field];
            return next;
        });
    };

    const resetForm = () => {
        setForm(emptyForm);
        setErrors({});
    };

    const closeAddModal = () => {
        window.bootstrap?.Modal.getInstance(document.getElementById("addModal"))?.hide();
    };

    const handleCreate = async (event) => {
        event.preventDefault();
        const validationErrors = validateConfigurationForm(form);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setSaving(true);
        try {
            const response = await api.post("/configurations/store", {
                ...form,
                doctor_id: Number(form.doctor_id),
                appointment_type_id: Number(form.appointment_type_id),
                duration: Number(form.duration),
                price: Number(form.price),
                notes: form.notes.trim() || null,
            });
            const createdConfiguration = response.data.configuration;
            setConfigurations((current) => [createdConfiguration, ...current]);
            closeAddModal();
            resetForm();
            toast.success(response.data.message || "Configuration created successfully.");
        } catch (error) {
            const validationErrors = error.response?.data?.errors;
            if (error.response?.status === 422 && validationErrors) {
                setErrors(validationErrors);
                toast.error(Object.values(validationErrors).flat()[0] || "Please correct the highlighted fields.");
            } else {
                toast.error(error.response?.data?.message || "Could not create configuration.");
            }
        } finally {
            setSaving(false);
        }
    };

    const openEditModal = (configuration) => {
        setEditingConfiguration(configuration);
        setEditForm({
            doctor_id: String(configuration.doctor_id),
            appointment_type_id: String(configuration.appointment_type_id),
            duration: String(configuration.duration),
            price: String(configuration.price),
            status: Boolean(configuration.status),
            notes: configuration.notes || "",
        });
        setEditErrors({});
    };

    const closeEditModal = () => {
        window.bootstrap?.Modal.getInstance(document.getElementById("editModal"))?.hide();
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (!editingConfiguration) return;

        const validationErrors = validateConfigurationForm(editForm);
        setEditErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setEditSaving(true);
        try {
            const response = await api.post(`/configurations/update/${editingConfiguration.id}`, {
                ...editForm,
                doctor_id: Number(editForm.doctor_id),
                appointment_type_id: Number(editForm.appointment_type_id),
                duration: Number(editForm.duration),
                price: Number(editForm.price),
                notes: editForm.notes.trim() || null,
            });
            const updatedConfiguration = response.data.configuration;
            setConfigurations((current) => current.map((configuration) => (
                configuration.id === updatedConfiguration.id ? updatedConfiguration : configuration
            )));
            closeEditModal();
            setEditingConfiguration(null);
            toast.success(response.data.message || "Configuration updated successfully.");
        } catch (error) {
            const validationErrorsFromApi = error.response?.data?.errors;
            if (error.response?.status === 422 && validationErrorsFromApi) {
                setEditErrors(validationErrorsFromApi);
                toast.error(Object.values(validationErrorsFromApi).flat()[0] || "Please correct the highlighted fields.");
            } else {
                toast.error(error.response?.data?.message || "Could not update configuration.");
            }
        } finally {
            setEditSaving(false);
        }
    };

    return (
        <>

            {/* <!-- Page header --> */}
            <header className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-lg">
                <div>
                    <h2 className="sp-title">Doctor Appointment Configuration</h2>
                    <p className="sp-subtitle">Configure and manage doctor-specific appointment types, durations, and pricing in BDT.</p>
                </div>
                {hasPermission("dac.create") && (
                    <button type="button" className="sp-btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        <span className="material-symbols-outlined" aria-hidden="true">add</span>
                        Add New Configuration
                    </button>
                )}
            </header>

            {/* <!-- Existing configurations table --> */}
            <section className="ac-card overflow-hidden">
                <div className="ac-card-header p-3 p-md-4">
                    <div className="row g-3 align-items-xl-center">
                        <div className="col-12 col-xl">
                            <h3 className="text-headline-sm m-0">Existing Doctor Configurations</h3>
                            <p className="text-body-sm text-on-surface-variant-tok m-0">Active price tiers, service slots, and doctor-level scheduling rules.</p>
                        </div>

                        <div className="col-12 col-xl-auto">
                            <div className="row g-2">
                                <div className="col-12 col-sm-6 col-xl-auto">
                                    <div className="input-group">
                                        <span className="input-group-text ac-addon ac-addon-muted">
                                            <span className="material-symbols-outlined ac-icon-md">filter_list</span>
                                        </span>
                                        <input type="text" className="form-control ac-control ac-control-muted ac-control-sm" placeholder="Filter records..." />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-auto">
                                    <select className="form-select ac-control ac-control-muted ac-control-sm" aria-label="Filter by doctor">
                                        <option value="all">All Doctors</option>
                                        <option value="chen">Dr. Robert Chen (Cardiology)</option>
                                        <option value="hossain">Dr. Nusrat Hossain (Pediatrics)</option>
                                        <option value="akter">Dr. Shamsur Akter (Neurology)</option>
                                        <option value="patel">Dr. Priya Patel (Endocrinology)</option>
                                    </select>
                                </div>
                                <div className="col-9 col-sm-6 col-xl-auto">
                                    <select className="form-select ac-control ac-control-muted ac-control-sm" aria-label="Filter by type">
                                        <option value="all">All Types</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="followup">Follow-up</option>
                                        <option value="emergency">Emergency</option>
                                        <option value="second_opinion">Second Opinion</option>
                                    </select>
                                </div>
                                <div className="col-3 col-sm-6 col-xl-auto">
                                    <button type="button" className="btn btn-outline-secondary-custom w-100 d-inline-flex align-items-center justify-content-center py-1" title="Refresh table" aria-label="Refresh table" onClick={refreshConfigurations}>
                                        <span className="material-symbols-outlined ac-icon-lg">refresh</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover ac-table">
                        <thead>
                            <tr>
                                <th scope="col">Doctor Name &amp; Specialization</th>
                                <th scope="col">Appointment Type</th>
                                <th scope="col">Duration</th>
                                <th scope="col" className="text-end">Price in BDT</th>
                                <th scope="col" className="text-center">Status</th>
                                <th scope="col" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loadingConfigurations ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-on-surface-variant-tok">
                                        Loading configurations...
                                    </td>
                                </tr>
                            ) : configurationError && configurations.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-on-surface-variant-tok">
                                        {configurationError}
                                    </td>
                                </tr>
                            ) : configurations.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-on-surface-variant-tok">
                                        No configurations have been added yet.
                                    </td>
                                </tr>
                            ) : configurations.map((configuration) => (
                                <tr key={configuration.id}>
                                    <td>
                                        <div className="fw-medium">{configuration.doctor?.full_name}</div>
                                        <div className="ac-text-xs text-on-surface-variant-tok">{configuration.doctor?.designation}</div>
                                    </td>
                                    <td><span className="ac-pill ac-pill-primary"><span className="ac-pill-dot"></span>{configuration.appointment_type?.name}</span></td>
                                    <td className="ac-mono">{configuration.duration} mins</td>
                                    <td className="ac-mono fw-semibold text-end">৳ {Number(configuration.price).toLocaleString("en-BD", { maximumFractionDigits: 2 })}</td>
                                    <td className="text-center">
                                        <span className={`ac-pill ${configuration.status ? "ac-pill-active" : "ac-pill-muted"}`}>
                                            {configuration.status ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <div className="d-inline-flex align-items-center gap-1">
                                            {hasPermission("dac.edit") && (
                                                <button type="button" className="icon-btn" title="Edit" aria-label={`Edit configuration for ${configuration.doctor?.full_name}`} data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => openEditModal(configuration)}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>edit</span>
                                                </button>
                                            )}
                                            {hasPermission("dac.delete") && (
                                                <button type="button" className="icon-btn" title="Delete Configurations" aria-label="Delete configurations" data-bs-toggle="modal" data-bs-target="#deleteConfirmModal">
                                                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>delete</span>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* <!-- Pagination --> */}
                <div className="ac-table-footer px-3 px-md-4 py-3 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 text-label-md text-on-surface-variant-tok">
                    <span>Showing <strong className="ac-text-on-surface">1 - 5</strong> of <strong className="ac-text-on-surface">18</strong> doctor pricing configurations</span>
                    <nav aria-label="Table pagination">
                        <ul className="pagination pagination-sm ac-pagination mb-0 flex-wrap justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </section>


            {/* <!-- Add New configurations Modal --> */}
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="addModalLabel">Add New Configurations</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="sp-toast-form" onSubmit={handleCreate} noValidate>
                            <div className="modal-body d-flex flex-column gap-md">
                                {/* <!-- Doctor --> */}
                                <div className="col-12">
                                    <label htmlFor="configurationDoctor" className="form-label text-label-md fw-medium">
                                        Doctor Selection <span className="text-error-tok">*</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text ac-addon">
                                            <span className="material-symbols-outlined ac-icon-xl text-primary-tok">person_search</span>
                                        </span>
                                        <select
                                            id="configurationDoctor"
                                            className={`form-select ac-control ${errors.doctor_id ? "is-invalid" : ""}`}
                                            value={form.doctor_id}
                                            onChange={(event) => updateField("doctor_id", event.target.value)}
                                            disabled={loadingDoctors}
                                            aria-invalid={Boolean(errors.doctor_id)}
                                        >
                                            <option value="">
                                                {loadingDoctors ? "Loading doctors..." : doctors.length ? "Select a doctor" : "No doctors available"}
                                            </option>
                                            {doctors.map((doctor) => (
                                                <option key={doctor.id} value={doctor.id}>
                                                    {doctor.full_name} — {doctor.designation}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.doctor_id && <div className="invalid-feedback d-block">{errors.doctor_id[0]}</div>}
                                </div>

                                {/* <!-- Type --> */}
                                <div className="col-12">
                                    <label htmlFor="configurationAppointmentType" className="form-label text-label-md fw-medium">
                                        Appointment Type <span className="text-error-tok">*</span>
                                    </label>
                                    <select
                                        id="configurationAppointmentType"
                                        className={`form-select ac-control ${errors.appointment_type_id ? "is-invalid" : ""}`}
                                        value={form.appointment_type_id}
                                        onChange={(event) => updateField("appointment_type_id", event.target.value)}
                                        disabled={loadingAppointmentTypes}
                                        aria-invalid={Boolean(errors.appointment_type_id)}
                                    >
                                        <option value="">
                                            {loadingAppointmentTypes ? "Loading appointment types..." : appointmentTypes.length ? "Select an appointment type" : "No active appointment types available"}
                                        </option>
                                        {appointmentTypes.map((type) => (
                                            <option key={type.id} value={type.id}>{type.name}</option>
                                        ))}
                                    </select>
                                    {errors.appointment_type_id && <div className="invalid-feedback d-block">{errors.appointment_type_id[0]}</div>}
                                </div>

                                {/* <!-- Duration --> */}
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="configurationDuration" className="form-label text-label-md fw-medium">
                                        Appointment Duration <span className="text-error-tok">*</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text ac-addon">
                                            <span className="material-symbols-outlined ac-icon-lg">schedule</span>
                                        </span>
                                        <input
                                            id="configurationDuration"
                                            type="number"
                                            className={`form-control ac-control ${errors.duration ? "is-invalid" : ""}`}
                                            min="5"
                                            max="180"
                                            step="5"
                                            value={form.duration}
                                            onChange={(event) => updateField("duration", event.target.value)}
                                            aria-invalid={Boolean(errors.duration)}
                                        />
                                        <span className="input-group-text ac-addon text-label-md">mins</span>
                                    </div>
                                    <div className="form-text ac-text-xs">Standard slots: 15, 30, 45, or 60 mins</div>
                                    {errors.duration && <div className="invalid-feedback d-block">{errors.duration[0]}</div>}
                                </div>

                                {/* <!-- Price --> */}
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="configurationPrice" className="form-label text-label-md fw-medium">
                                        Appointment Price (BDT) <span className="text-error-tok">*</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text ac-addon fw-semibold">৳</span>
                                        <input
                                            id="configurationPrice"
                                            type="number"
                                            className={`form-control ac-control ac-price-input ${errors.price ? "is-invalid" : ""}`}
                                            min="0"
                                            max="99999999.99"
                                            step="0.01"
                                            value={form.price}
                                            onChange={(event) => updateField("price", event.target.value)}
                                            placeholder="Enter fee in BDT (৳)"
                                            aria-invalid={Boolean(errors.price)}
                                        />
                                        <span className="input-group-text ac-addon ac-addon-muted text-label-md">BDT</span>
                                    </div>
                                    <div className="form-text ac-text-xs">Hospital VAT &amp; Service Tax inclusive</div>
                                    {errors.price && <div className="invalid-feedback d-block">{errors.price[0]}</div>}
                                </div>

                                {/* <!-- Status --> */}
                                <div className="col-12">
                                    <div className="ac-switch-panel d-flex align-items-center justify-content-between gap-3">
                                        <div>
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <span className="text-body-md fw-medium">Configuration Status</span>
                                                <span className={`ac-pill ${form.status ? "ac-pill-active" : "ac-pill-muted"}`}>
                                                    {form.status ? "Active" : "Inactive"}
                                                </span>
                                            </div>
                                            <p className="ac-text-xs text-on-surface-variant-tok mt-1 mb-0">
                                                Enable this service type for online and reception booking
                                            </p>
                                        </div>
                                        <div className="form-check form-switch ac-switch m-0 p-0 flex-shrink-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="configStatus"
                                                checked={form.status}
                                                onChange={(event) => updateField("status", event.target.checked)}
                                                aria-label="Configuration status"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Notes --> */}
                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <label htmlFor="appointmentNotes" className="form-label text-label-md fw-medium m-0">Notes / Policy Remarks</label>
                                        <span className="ac-text-xs text-on-surface-variant-tok">Optional</span>
                                    </div>
                                    <textarea
                                        id="appointmentNotes"
                                        className="form-control ac-control text-body-sm"
                                        rows="3"
                                        maxLength="5000"
                                        value={form.notes}
                                        onChange={(event) => updateField("notes", event.target.value)}
                                        placeholder="Add administrative notes, preparation instructions, or billing remarks (e.g. ECG reports to be verified prior to entry)..."
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn sp-btn-primary" disabled={saving}>
                                    {saving ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Edit configurations Modal --> */}
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content sp-modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="editModalLabel">Edit Configurations</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="sp-toast-form" onSubmit={handleUpdate} noValidate>
                            <div className="modal-body d-flex flex-column gap-md">
                                <div className="col-12">
                                    <label htmlFor="editConfigurationDoctor" className="form-label text-label-md fw-medium">
                                        Doctor Selection <span className="text-error-tok">*</span>
                                    </label>
                                    <select
                                        id="editConfigurationDoctor"
                                        className={`form-select ac-control ${editErrors.doctor_id ? "is-invalid" : ""}`}
                                        value={editForm.doctor_id}
                                        onChange={(event) => updateEditField("doctor_id", event.target.value)}
                                        disabled={loadingDoctors}
                                        aria-invalid={Boolean(editErrors.doctor_id)}
                                    >
                                        <option value="">Select a doctor</option>
                                        {doctors.map((doctor) => (
                                            <option key={doctor.id} value={doctor.id}>{doctor.full_name} — {doctor.designation}</option>
                                        ))}
                                    </select>
                                    {editErrors.doctor_id && <div className="invalid-feedback d-block">{editErrors.doctor_id[0]}</div>}
                                </div>

                                <div className="col-12">
                                    <label htmlFor="editAppointmentType" className="form-label text-label-md fw-medium">
                                        Appointment Type <span className="text-error-tok">*</span>
                                    </label>
                                    <select
                                        id="editAppointmentType"
                                        className={`form-select ac-control ${editErrors.appointment_type_id ? "is-invalid" : ""}`}
                                        value={editForm.appointment_type_id}
                                        onChange={(event) => updateEditField("appointment_type_id", event.target.value)}
                                        disabled={loadingAppointmentTypes}
                                        aria-invalid={Boolean(editErrors.appointment_type_id)}
                                    >
                                        <option value="">Select an appointment type</option>
                                        {editingConfiguration
                                            && !appointmentTypes.some((type) => String(type.id) === editForm.appointment_type_id)
                                            && (
                                                <option value={editForm.appointment_type_id}>
                                                    {editingConfiguration.appointment_type?.name || "Current appointment type"} (currently unavailable)
                                                </option>
                                            )}
                                        {appointmentTypes.map((type) => (
                                            <option key={type.id} value={type.id}>{type.name}</option>
                                        ))}
                                    </select>
                                    {editErrors.appointment_type_id && <div className="invalid-feedback d-block">{editErrors.appointment_type_id[0]}</div>}
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label htmlFor="editAppointmentDuration" className="form-label text-label-md fw-medium">
                                        Appointment Duration <span className="text-error-tok">*</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text ac-addon">
                                            <span className="material-symbols-outlined ac-icon-lg">schedule</span>
                                        </span>
                                        <input
                                            id="editAppointmentDuration"
                                            type="number"
                                            className={`form-control ac-control ${editErrors.duration ? "is-invalid" : ""}`}
                                            min="5"
                                            max="180"
                                            step="5"
                                            value={editForm.duration}
                                            onChange={(event) => updateEditField("duration", event.target.value)}
                                            aria-invalid={Boolean(editErrors.duration)}
                                        />
                                        <span className="input-group-text ac-addon text-label-md">mins</span>
                                    </div>
                                    <div className="form-text ac-text-xs">Standard slots: 15, 30, 45, or 60 mins</div>
                                    {editErrors.duration && <div className="invalid-feedback d-block">{editErrors.duration[0]}</div>}
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label htmlFor="editAppointmentPrice" className="form-label text-label-md fw-medium">
                                        Appointment Price (BDT) <span className="text-error-tok">*</span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text ac-addon fw-semibold">৳</span>
                                        <input
                                            id="editAppointmentPrice"
                                            type="number"
                                            className={`form-control ac-control ac-price-input ${editErrors.price ? "is-invalid" : ""}`}
                                            min="0"
                                            max="99999999.99"
                                            step="0.01"
                                            value={editForm.price}
                                            onChange={(event) => updateEditField("price", event.target.value)}
                                            aria-invalid={Boolean(editErrors.price)}
                                        />
                                        <span className="input-group-text ac-addon ac-addon-muted text-label-md">BDT</span>
                                    </div>
                                    <div className="form-text ac-text-xs">Hospital VAT &amp; Service Tax inclusive</div>
                                    {editErrors.price && <div className="invalid-feedback d-block">{editErrors.price[0]}</div>}
                                </div>

                                <div className="col-12">
                                    <div className="ac-switch-panel d-flex align-items-center justify-content-between gap-3">
                                        <div>
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <span className="text-body-md fw-medium">Configuration Status</span>
                                                <span className={`ac-pill ${editForm.status ? "ac-pill-active" : "ac-pill-muted"}`}>
                                                    {editForm.status ? "Active" : "Inactive"}
                                                </span>
                                            </div>
                                            <p className="ac-text-xs text-on-surface-variant-tok mt-1 mb-0">
                                                Enable this service type for online and reception booking
                                            </p>
                                        </div>
                                        <div className="form-check form-switch ac-switch m-0 p-0 flex-shrink-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="editConfigurationStatus"
                                                checked={editForm.status}
                                                onChange={(event) => updateEditField("status", event.target.checked)}
                                                aria-label="Configuration status"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <label htmlFor="editAppointmentNotes" className="form-label text-label-md fw-medium m-0">Notes / Policy Remarks</label>
                                        <span className="ac-text-xs text-on-surface-variant-tok">Optional</span>
                                    </div>
                                    <textarea
                                        id="editAppointmentNotes"
                                        className="form-control ac-control text-body-sm"
                                        rows="3"
                                        maxLength="5000"
                                        value={editForm.notes}
                                        onChange={(event) => updateEditField("notes", event.target.value)}
                                        placeholder="Add administrative notes, preparation instructions, or billing remarks..."
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" disabled={editSaving}>Cancel</button>
                                <button type="submit" className="btn sp-btn-primary" disabled={editSaving || !editingConfiguration}>
                                    {editSaving ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </>
    )
}
