import { useCallback, useEffect, useState } from "react";
import api from "../../api/axios";
import { toast } from 'react-toastify';
import { hasPermission } from "../../utils/permissions";
import "../../assets/css/Employee.css"
import Avatar from "../../assets/Img/Avatar.png";

export default function Employee() {
    const [educationEntries, setEducationEntries] = useState([0]);
    const [experienceEntries, setExperienceEntries] = useState([0]);
    const [photoPreview, setPhotoPreview] = useState("");
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [loadingEmployees, setLoadingEmployees] = useState(true);
    const [employeeLoadError, setEmployeeLoadError] = useState("");
    const [errors, setErrors] = useState({});
    const [departments, setDepartments] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [selectedShiftId, setSelectedShiftId] = useState("");
    const [departmentSearch, setDepartmentSearch] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedDepartmentId, setSelectedDepartmentId] = useState("");
    const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
    const [departmentLoadError, setDepartmentLoadError] = useState("");
    const currentUserId = (() => {
        try {
            return JSON.parse(localStorage.getItem("user") || "null")?.id ?? "";
        } catch {
            return "";
        }
    })();
    const addEntry = (setEntries) => setEntries((entries) => [...entries, Date.now() + Math.random()]);

    const fetchEmployees = useCallback(async () => {
        setLoadingEmployees(true);
        try {
            const response = await api.get("/employees");
            setEmployees(response.data);
            setEmployeeLoadError("");
        } catch (error) {
            const message = error.response?.data?.message || "Could not load employees.";
            setEmployeeLoadError(message);
            toast.error(message);
        } finally {
            setLoadingEmployees(false);
        }
    }, []);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await api.get("/dept");
                setDepartments(response.data.filter((department) => Number(department.is_active) === 1));
                setDepartmentLoadError("");
            } catch (error) {
                const message = error.response?.data?.message || "Could not load departments.";
                setDepartmentLoadError(message);
                toast.error(message);
            }
        };

        const fetchShifts = async () => {
            try {
                const response = await api.get("/shifts/employee-options");
                setShifts(response.data);
            } catch (error) {
                toast.error(error.response?.data?.message || "Could not load active shifts.");
            }
        };

        fetchDepartments();
        fetchShifts();
        fetchEmployees();
    }, [fetchEmployees]);

    const visibleDepartments = departments.filter((department) =>
        `${department.department_code} ${department.name}`.toLowerCase().includes(departmentSearch.trim().toLowerCase())
    );

    const handlePhotoChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!["image/jpeg", "image/png"].includes(file.type)) {
            const message = "Profile photo must be a JPG, JPEG, or PNG image.";
            setErrors((current) => ({ ...current, profile_photo: [message] }));
            setPhotoPreview("");
            toast.error(message);
            event.target.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            const message = "Profile photo must not exceed 2 MB.";
            setErrors((current) => ({ ...current, profile_photo: [message] }));
            setPhotoPreview("");
            toast.error(message);
            event.target.value = "";
            return;
        }

        setErrors((current) => {
            const next = { ...current };
            delete next.profile_photo;
            return next;
        });

        const reader = new FileReader();
        reader.onload = () => setPhotoPreview(reader.result);
        reader.onerror = () => {
            const message = "Could not read the selected profile photo.";
            setErrors((current) => ({ ...current, profile_photo: [message] }));
            toast.error(message);
        };
        reader.readAsDataURL(file);
    };

    const handleDocumentChange = (event) => {
        const { name, files } = event.target;
        const file = files?.[0];
        if (!file) return;

        if (file.type !== "application/pdf") {
            const message = "Only PDF files are allowed.";
            setErrors((current) => ({ ...current, [name]: [message] }));
            toast.error(message);
            event.target.value = "";
            return;
        }

        if (file.size > 100 * 1024) {
            const message = "Document size must not exceed 100 KB.";
            setErrors((current) => ({ ...current, [name]: [message] }));
            toast.error(message);
            event.target.value = "";
            return;
        }

        setErrors((current) => {
            const next = { ...current };
            delete next[name];
            return next;
        });
    };

    const getFieldError = (field) => {
        const error = errors[field];
        return Array.isArray(error) ? error[0] : error;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form).entries());
        if (!formData.is_doctor) formData.is_doctor = "0";
        const requiredFields = [
            ["name", "Full name is required."],
            ["gender", "Gender is required."],
            ["email", "Email is required."],
            ["phone", "Phone number is required."],
            ["shift_id", "Please select a shift."],
            ["dept_id", "Please select a department."],
            ["designation", "Designation is required."],
            ["experience_years", "Experience years is required."],
        ];

        const missingField = requiredFields.find(([field]) => !String(formData[field] ?? "").trim());
        if (missingField) {
            const [field, message] = missingField;
            setErrors({ [field]: [message] });
            toast.error(message);
            form.querySelector(field === "dept_id" ? "#deptSelectButton" : `[name="${field}"]`)?.focus();
            return;
        }

        setSaving(true);
        setErrors({});
        try {
            const data = new FormData(form);
            if (!data.has('is_doctor')) data.set('is_doctor', '0');
            const response = await api.post("/employees/store", data);
            form.reset();
            form.querySelectorAll('input[name$="[end_date]"]').forEach((input) => { input.disabled = false; });
            setPhotoPreview("");
            setSelectedShiftId("");
            setEducationEntries([0]);
            setExperienceEntries([0]);
            setErrors({});
            await fetchEmployees();
            window.bootstrap?.Modal.getInstance(document.getElementById("addEditModal"))?.hide();
            toast.success(`${response.data.message} Employee ID: ${response.data.employee.employee_code}`);
        } catch (error) {
            const validationErrors = error.response?.data?.errors;
            if (validationErrors) {
                setErrors(validationErrors);
            }
            const firstValidationError = validationErrors ? Object.values(validationErrors).flat()[0] : null;
            toast.error(firstValidationError || error.response?.data?.message || "Could not save employee. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();
        if (!selectedEmployee) return;
        const form = event.currentTarget;
        const data = new FormData(form);
        data.set('dept_id', selectedDepartmentId);
        data.set('shift_id', selectedShiftId);
        if (!data.has('is_doctor')) data.set('is_doctor', '0');
        setSaving(true);
        setErrors({});
        try {
            const response = await api.post(`/employees/update/${selectedEmployee.id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
            await fetchEmployees();
            window.bootstrap?.Modal.getInstance(document.getElementById('editEmployeeModal'))?.hide();
            toast.success(response.data.message || 'Employee updated successfully.');
        } catch (error) {
            const validationErrors = error.response?.data?.errors;
            if (validationErrors) setErrors(validationErrors);
            toast.error(validationErrors ? Object.values(validationErrors).flat()[0] : error.response?.data?.message || 'Could not update employee. Please try again.');
        } finally { setSaving(false); }
    };

    const handleDeleteEmployee = async () => {
        if (!selectedEmployee || deleting) return;

        setDeleting(true);
        try {
            const response = await api.delete(`/employees/delete/${selectedEmployee.id}`);
            await fetchEmployees();
            window.bootstrap?.Modal.getInstance(document.getElementById("deleteConfirmModal"))?.hide();
            toast.success(response.data.message || "Employee deleted successfully.");
            setSelectedEmployee(null);
        } catch (error) {
            toast.error(error.response?.data?.message || "Could not delete employee. Please try again.");
        } finally {
            setDeleting(false);
        }
    };

    return (
        <>
            <div>
                {/* <!-- Page header --> */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-md mb-lg">
                    <div style={{ maxWidth: "640px" }}>
                        <h2 className="text-headline-lg-mobile text-on-surface-tok mb-2">Employee Directory</h2>
                        <p className="text-body-lg text-on-surface-variant-tok mb-0" style={{ lineHeight: "1.6" }}>
                            Manage employee information, professional details, and documents across the facility.
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-sm flex-shrink-0">
                        {hasPermission("employee.create") && (
                            <button className="btn-tok btn-primary-tok" type="button" data-bs-toggle="modal" data-bs-target="#addEditModal" onClick={() => {
                                setPhotoPreview("");
                                setSelectedShiftId("");
                                setSelectedDepartment("");
                                setSelectedDepartmentId("");
                                setDepartmentSearch("");
                                setDepartmentDropdownOpen(false);
                                setErrors({});
                            }}>
                                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>add</span> Add Employee
                            </button>
                        )}
                    </div>
                </div>

                {/* <!-- Filters bar --> */}
                <div className="surface-card p-md mb-lg">
                    <div className="filters-bar">
                        <div className="filters-search">
                            <div className="search-wrap">
                                <span className="material-symbols-outlined">search</span>
                                <input type="text" className="search-input" placeholder="Search by name, ID, or phone..." />
                            </div>
                        </div>
                        <div className="filters-selects">
                            <select className="form-select-tok select-tok">
                                <option value="">All Departments</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="pediatrics">Pediatrics</option>
                                <option value="orthopedics">Orthopedics</option>
                            </select>
                            <select className="form-select-tok select-tok">
                                <option value="">Specialization</option>
                                <option value="surgeon">Surgeon</option>
                                <option value="consultant">Consultant</option>
                                <option value="physician">Physician</option>
                            </select>
                            <select className="form-select-tok select-tok">
                                <option value="">Status: All</option>
                                <option value="active">Active</option>
                                <option value="on-leave">On Leave</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <button className="btn-tok btn-text-tok" type="button">
                                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>filter_list</span> More Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Data table --> */}
                <div className="surface-card d-flex flex-column" style={{ minHeight: "500px", overflow: "hidden" }}>
                    <div className="table-wrap">
                        <table className="doctors-table">
                            <thead>
                                <tr>
                                    <th style={{ width: "64px" }}>ID</th>
                                    <th>Employee Profile</th>
                                    <th>Department &amp; Designation</th>
                                    <th>Experience</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loadingEmployees ? (
                                    <tr><td colSpan="5" className="text-center py-4">Loading employees...</td></tr>
                                ) : employeeLoadError ? (
                                    <tr><td colSpan="5" className="text-center py-4 text-danger">{employeeLoadError}</td></tr>
                                ) : employees.length === 0 ? (
                                    <tr><td colSpan="5" className="text-center py-4">No employees saved yet.</td></tr>
                                ) : employees.map((employee) => {
                                    const imageUrl = employee.profile_photo_path
                                        ? `${api.defaults.baseURL.replace(/\/api\/?$/, "")}/assets/user/img/${encodeURIComponent(employee.profile_photo_path)}`
                                        : null;
                                    return <tr key={employee.id}>
                                        <td className="text-data-mono text-on-surface-variant-tok">{employee.employee_code}</td>
                                        <td>
                                            <div className="doctor-profile-cell">
                                                {imageUrl ? <img src={imageUrl} alt={employee.full_name} />
                                                    :
                                                    <span className="material-symbols-outlined">
                                                        <img src={Avatar} alt="Default employee profile" />
                                                    </span>
                                                }
                                                <div>
                                                    <div className="doctor-name">{employee.full_name}</div>
                                                    <div className="doctor-contact">{employee.email} &bull; {employee.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-body-md text-on-surface-tok">
                                                {employee.department ? `${employee.department.name}` : "—"}
                                            </div>
                                            <div className="text-label-md text-on-surface-variant-tok mt-1">{employee.designation}</div>
                                        </td>
                                        <td className="text-body-md text-on-surface-tok">{employee.experience_years} Years</td>
                                        <td className="text-center">
                                            <div className="row-actions">
                                                <button type="button" className="icon-btn" title="View Employee" aria-label={`View ${employee.full_name}`} data-bs-toggle="modal" data-bs-target="#viewModal" onClick={() => setSelectedEmployee(employee)}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>visibility</span>
                                                </button>
                                                {hasPermission("employee.edit") && (
                                                    <button type="button" className="icon-btn" title="Edit Employee" aria-label={`Edit ${employee.full_name}`} data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => { setSelectedEmployee(employee); setPhotoPreview(employee.profile_photo_path ? `${api.defaults.baseURL.replace(/\/api\/?$/, "")}/assets/user/img/${encodeURIComponent(employee.profile_photo_path)}` : ""); setSelectedDepartment(employee.department ? `${employee.department.department_code} - ${employee.department.name}` : ""); setSelectedDepartmentId(String(employee.dept_id || "")); setSelectedShiftId(String(employee.shift_id || "")); setEducationEntries((employee.educations || []).map((item) => item.id)); if (!employee.educations?.length) setEducationEntries([0]); setExperienceEntries((employee.experiences || []).map((item) => item.id)); if (!employee.experiences?.length) setExperienceEntries([0]); setErrors({}); }}>
                                                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>edit</span>
                                                    </button>
                                                )}
                                                {hasPermission("employee.delete") && (
                                                    <button type="button" className="icon-btn" title="Delete Employee" aria-label={`Delete ${employee.full_name}`} data-bs-toggle="modal" data-bs-target="#deleteConfirmModal" onClick={() => setSelectedEmployee(employee)}>
                                                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>delete</span>
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>;
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="table-footer mt-auto">
                        <span className="text-body-sm text-on-surface-variant-tok">{employees.length} employee{employees.length === 1 ? "" : "s"}</span>
                    </div>
                </div>
            </div>


            {/* ADD Employee MODAL */}
            <div className="modal fade" id="addEditModal" tabindex="-1" aria-labelledby="addEditModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content modal-content-tok" style={{ maxHeight: "90vh" }}>
                        <div className="modal-header-tok">
                            <h3 className="text-headline-md text-on-surface-tok mb-0" id="addEditModalTitle">Add New Doctor</h3>
                            <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="modal-body-tok">
                            <form className="d-flex flex-column gap-xl mx-auto" style={{ maxWidth: "960px" }} id="doctorForm" onSubmit={handleSubmit} noValidate onChange={(event) => {
                                const field = event.target.name?.split("[")[0];
                                if (field && event.target.type !== "file" && errors[field]) {
                                    setErrors((current) => {
                                        const next = { ...current };
                                        delete next[field];
                                        return next;
                                    });
                                }
                            }}>
                                <input type="hidden" name="created_by" value={currentUserId} />
                                {/* <!-- Section 1: Basic Info --> */}
                                <section className="form-section accent-primary">
                                    <h4 className="form-section-title"><span className="material-symbols-outlined text-primary-tok" style={{ fontSize: "20px" }}>person</span>Basic Information</h4>
                                    <div className="row g-lg">
                                        <div className="col-12 col-md-3 d-flex flex-column align-items-center gap-3">
                                            <label className="photo-upload" id="photoUpload" htmlFor="photoInput" aria-label="Upload profile photo">
                                                {!photoPreview && <>
                                                    <span className="material-symbols-outlined" style={{ fontSize: "32px", marginBottom: "4px" }}>add_a_photo</span>
                                                    <span className="text-label-md text-center px-2" style={{ fontSize: "10px" }}>Upload Photo</span>
                                                </>}
                                                {photoPreview && <img alt="Selected profile preview" id="photoPreview" src={photoPreview} />}
                                                <input type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" className="d-none" id="photoInput" name="profile_photo" onChange={handlePhotoChange} />
                                            </label>
                                            <span className="text-on-surface-variant-tok text-center" style={{ fontSize: "11px" }}>JPG, PNG max 2MB</span>
                                            {getFieldError("profile_photo") && <small className="text-danger text-center" role="alert">{getFieldError("profile_photo")}</small>}
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <div className="row g-md">
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Full Name <span className="required-star">*</span></label>
                                                    <input type="text" className="form-control-tok" id="fullName" name="name" placeholder="e.g. Dr. Jane Smith" required />
                                                    {getFieldError("name") && <small className="text-danger" role="alert">{getFieldError("name")}</small>}
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Gender <span className="required-star">*</span></label>
                                                    <select className="form-select-tok" id="gender" name="gender" required>
                                                        <option value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    {getFieldError("gender") && <small className="text-danger" role="alert">{getFieldError("gender")}</small>}
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Phone Number <span className="required-star">*</span></label>
                                                    <input type="tel" className="form-control-tok" id="phone" name="phone" placeholder="01........." required />
                                                    {getFieldError("phone") && <small className="text-danger" role="alert">{getFieldError("phone")}</small>}
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Date of Birth</label>
                                                    <input type="date" className="form-control-tok" name="date_of_birth" />
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Email Address <span className="required-star">*</span></label>
                                                    <input type="email" className="form-control-tok" id="email" name="email" placeholder="doctor@clinichub.com" required />
                                                    {getFieldError("email") && <small className="text-danger" role="alert">{getFieldError("email")}</small>}
                                                </div>
                                                <div className="col-12 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Address</label>
                                                    <input type="text" className="form-control-tok" name="address" placeholder="Full Address" />
                                                </div>
                                                <div className="col-12 col-sm-4 d-flex flex-column gap-1">
                                                    <label className="form-label-tok" htmlFor="city">City</label>
                                                    <input type="text" className="form-control-tok" id="city" name="city" placeholder="City" />
                                                </div>
                                                <div className="col-12 col-sm-4 d-flex flex-column gap-1">
                                                    <label className="form-label-tok" htmlFor="district">District</label>
                                                    <input type="text" className="form-control-tok" id="district" name="district" placeholder="District" />
                                                </div>
                                                <div className="col-12 col-sm-4 d-flex flex-column gap-1">
                                                    <label className="form-label-tok" htmlFor="zipCode">ZIP Code</label>
                                                    <input type="text" className="form-control-tok" id="zipCode" name="zip_code" placeholder="ZIP Code" autoComplete="postal-code" />
                                                </div>
                                                <div className="col-12 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Bio</label>
                                                    <textarea className="form-control-tok" name="bio" style={{ minHeight: "80px" }} placeholder="Short professional bio..."></textarea>
                                                </div>

                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <div className="d-flex align-items-center gap-3 mt-2">
                                                        <span className="form-label-tok mb-0">Is this Doctor?</span>
                                                        <label className="d-flex align-items-center gap-2 text-body-md text-on-surface-tok mb-0">
                                                            <input type="checkbox" id="isDoctor" name="is_doctor" value="1" /> Yes
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 2: Professional Info --> */}
                                <section className="form-section accent-secondary">
                                    <h4 className="form-section-title"><span className="material-symbols-outlined text-secondary-tok" style={{ fontSize: "20px" }}>work</span>Professional Details</h4>
                                    <div className="row g-md">
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Department <span className="required-star">*</span></label>
                                            <input type="hidden" id="deptSelect" name="dept_id" value={selectedDepartmentId} />
                                            <div className="position-relative">
                                                <button
                                                    type="button"
                                                    id="deptSelectButton"
                                                    className="form-select-tok w-100 text-start d-flex align-items-center justify-content-between"
                                                    aria-haspopup="listbox"
                                                    aria-expanded={departmentDropdownOpen}
                                                    aria-required="true"
                                                    onClick={() => setDepartmentDropdownOpen((open) => !open)}
                                                >
                                                    <span className={selectedDepartment ? "text-on-surface-tok" : "text-on-surface-variant-tok"}>
                                                        {selectedDepartment || "Select Department"}
                                                    </span>
                                                    <span className="material-symbols-outlined" aria-hidden="true">arrow_drop_down</span>
                                                </button>
                                                {departmentDropdownOpen && <div
                                                    className="position-absolute w-100 bg-white border rounded shadow-sm"
                                                    style={{ top: "100%", left: 0, zIndex: 20, maxHeight: "280px", overflowY: "auto" }}
                                                >
                                                    <div className="p-2">
                                                        <input
                                                            type="search"
                                                            className="form-control-tok"
                                                            placeholder="Search code or department name"
                                                            aria-label="Search departments by code or name"
                                                            value={departmentSearch}
                                                            autoFocus
                                                            onChange={(event) => setDepartmentSearch(event.target.value)}
                                                        />
                                                    </div>
                                                    <div role="listbox" aria-label="Active departments">
                                                        {visibleDepartments.map((department) => {
                                                            const value = `${department.department_code} - ${department.name}`;
                                                            return <button
                                                                type="button"
                                                                role="option"
                                                                aria-selected={selectedDepartment === value}
                                                                key={department.id}
                                                                className="w-100 text-start border-0 bg-white px-3 py-2"
                                                                onClick={() => {
                                                                    setSelectedDepartment(value);
                                                                    setSelectedDepartmentId(String(department.id));
                                                                    setDepartmentSearch("");
                                                                    setDepartmentDropdownOpen(false);
                                                                    setErrors((current) => ({ ...current, dept_id: undefined }));
                                                                }}
                                                            >
                                                                {value}
                                                            </button>;
                                                        })}
                                                        {visibleDepartments.length === 0 && <div className="px-3 py-2 text-on-surface-variant-tok">No matching active departments.</div>}
                                                    </div>
                                                </div>}
                                            </div>
                                            {getFieldError("dept_id") && <small className="text-danger" role="alert">{getFieldError("dept_id")}</small>}
                                            {departmentLoadError && <small className="text-danger" role="alert">{departmentLoadError}</small>}
                                            {!departmentLoadError && departments.length === 0 && <small className="text-on-surface-variant-tok">No active departments available.</small>}
                                        </div>
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok" htmlFor="ssDeptFilter">Shift<span className="required-star">*</span></label>
                                            <select className="ss-filter-select" id="ssDeptFilter" name="shift_id" value={selectedShiftId} onChange={(event) => {
                                                setSelectedShiftId(event.target.value);
                                                setErrors((current) => ({ ...current, shift_id: undefined }));
                                            }}>
                                                <option value="" disabled>Select Shift</option>
                                                {shifts.map((shift) => <option key={shift.id} value={shift.id}>{shift.shift_name}</option>)}
                                            </select>
                                            {getFieldError("shift_id") && <small className="text-danger" role="alert">{getFieldError("shift_id")}</small>}
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Designation <span className="required-star">*</span></label>
                                            <input type="text" className="form-control-tok" name="designation" placeholder="e.g. Senior Consultant" required />
                                            {getFieldError("designation") && <small className="text-danger" role="alert">{getFieldError("designation")}</small>}
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Qualification</label>
                                            <input type="text" className="form-control-tok" name="qualification" placeholder="e.g. MBBS, MD" />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Experience (Years) <span className="required-star">*</span></label>
                                            <input type="number" min="0" name="experience_years" className="form-control-tok" placeholder="e.g. 10" required />
                                            {getFieldError("experience_years") && <small className="text-danger" role="alert">{getFieldError("experience_years")}</small>}
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Previous Workplace</label>
                                            <input type="text" className="form-control-tok" name="previous_workplace" placeholder="Previous Hospital/Clinic" />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">BMDC / License Reg. No <span className="required-star">*</span></label>
                                            <input type="text" className="form-control-tok" name="license_number" placeholder="REG-123456" required />
                                        </div>
                                        
                                        <div className="col-12 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Memberships</label>
                                            <input type="text" className="form-control-tok" name="memberships" placeholder="e.g. AMA, ACP (comma separated)" />
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 3: Education (multi-entry) --> */}
                                <section className="form-section accent-primary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md">
                                        <h4 className="form-section-title mb-0"><span className="material-symbols-outlined" style={{ fontSize: "20px", color: "var(--on-primary-fixed-variant)" }}>school</span>Education</h4>
                                        <button className="btn-tok btn-text-tok" type="button" onClick={() => addEntry(setEducationEntries)}>
                                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>add</span> Add Education
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column gap-sm" id="educationList">
                                        {educationEntries.map((entry, index) => <div className="multi-entry-row" key={entry}>
                                            <input type="text" name={`education[${index}][degree]`} placeholder="Degree (e.g. MBBS)" className="form-control-tok" style={{ gridColumn: "span 3" }} />
                                            <input type="text" name={`education[${index}][institution]`} placeholder="Institution" className="form-control-tok" style={{ gridColumn: "span 4" }} />
                                            <input type="text" name={`education[${index}][year]`} placeholder="Year (e.g. 2010)" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <input type="text" name={`education[${index}][description]`} placeholder="Description" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <button type="button" className="multi-entry-remove" style={{ gridColumn: "span 1" }} onClick={() => setEducationEntries((entries) => entries.filter((item) => item !== entry))}><span className="material-symbols-outlined">delete</span></button>
                                        </div>)}
                                    </div>
                                </section>

                                {/* <!-- Section 4: Experience (multi-entry) --> */}
                                <section className="form-section accent-secondary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md">
                                        <h4 className="form-section-title mb-0"><span className="material-symbols-outlined" style={{ fontSize: "20px", color: "var(--on-secondary-fixed-variant)" }}>history</span>Experience</h4>
                                        <button className="btn-tok btn-text-tok" type="button" style={{ color: "var(--secondary)" }} onClick={() => addEntry(setExperienceEntries)}>
                                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>add</span> Add Experience
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column gap-sm" id="experienceList">
                                        {experienceEntries.map((entry, index) => <div className="multi-entry-row" key={entry}>
                                            <input type="text" name={`experience[${index}][workplace]`} placeholder="Hospital/Clinic" className="form-control-tok" style={{ gridColumn: "span 3" }} />
                                            <input type="text" name={`experience[${index}][position]`} placeholder="Position" className="form-control-tok" style={{ gridColumn: "span 3" }} />
                                            <input type="date" name={`experience[${index}][start_date]`} className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <div style={{ gridColumn: "span 3" }} className="d-flex flex-column gap-1">
                                                <input type="date" name={`experience[${index}][end_date]`} placeholder="End Date" className="form-control-tok" />
                                                <label className="d-flex align-items-center gap-2 text-label-md text-on-surface-variant-tok">
                                                    <input type="checkbox" name={`experience[${index}][currently_working]`} value="1" onChange={(event) => { event.currentTarget.closest(".multi-entry-row").querySelector(`input[name="experience[${index}][end_date]"]`).disabled = event.currentTarget.checked; }} /> Currently Working
                                                </label>
                                            </div>
                                            <button type="button" className="multi-entry-remove" style={{ gridColumn: "span 1" }} onClick={() => setExperienceEntries((entries) => entries.filter((item) => item !== entry))}><span className="material-symbols-outlined">delete</span></button>
                                        </div>)}
                                    </div>
                                </section>

                                {/* Section 5: Employee documents */}
                                <section className="form-section accent-primary-fixed">
                                    <h4 className="form-section-title"><span className="material-symbols-outlined text-primary-tok" style={{ fontSize: "20px" }}>description</span>Documents</h4>
                                    <div className="row g-md">
                                        <div className="col-12 col-md-4 d-flex flex-column gap-1">
                                            <label className="form-label-tok" htmlFor="cvUpload">CV / Resume</label>
                                            <input type="file" id="cvUpload" name="cv_document" accept=".pdf,application/pdf" className="form-control-tok" onChange={handleDocumentChange} />
                                            {getFieldError("cv_document") && <small className="text-danger" role="alert">{getFieldError("cv_document")}</small>}
                                            <small className="text-on-surface-variant-tok">PDF files only, max 100 KB</small>
                                        </div>
                                        <div className="col-12 col-md-4 d-flex flex-column gap-1">
                                            <label className="form-label-tok" htmlFor="nidUpload">NID</label>
                                            <input type="file" id="nidUpload" name="nid_document" accept=".pdf,application/pdf" className="form-control-tok" onChange={handleDocumentChange} />
                                            {getFieldError("nid_document") && <small className="text-danger" role="alert">{getFieldError("nid_document")}</small>}
                                            <small className="text-on-surface-variant-tok">PDF files only, max 100 KB</small>
                                        </div>
                                        <div className="col-12 col-md-4 d-flex flex-column gap-1">
                                            <label className="form-label-tok" htmlFor="otherDocumentUpload">Other Document</label>
                                            <input type="file" id="otherDocumentUpload" name="other_document" accept=".pdf,application/pdf" className="form-control-tok" onChange={handleDocumentChange} />
                                            {getFieldError("other_document") && <small className="text-danger" role="alert">{getFieldError("other_document")}</small>}
                                            <small className="text-on-surface-variant-tok">PDF files only, max 100 KB</small>
                                        </div>
                                    </div>
                                </section>

                            </form>
                        </div>

                        <div className="modal-footer-tok">
                            <button type="button" className="btn-tok btn-outline-tok" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" form="doctorForm" className="btn-tok btn-primary-tok" id="saveEmployeeBtn" disabled={saving}>{saving ? "Saving..." : "Save Employee"}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* EDIT Employee MODAL */}
            <div className="modal fade" id="editEmployeeModal" tabIndex="-1" aria-labelledby="editEmployeeModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content modal-content-tok" style={{ maxHeight: "90vh" }}>
                        <div className="modal-header-tok"><h3 className="text-headline-md text-on-surface-tok mb-0" id="editEmployeeModalTitle">Edit Employee</h3><button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close"><span className="material-symbols-outlined">close</span></button></div>
                        <div className="modal-body-tok">
                            {selectedEmployee && <form key={selectedEmployee.id} className="d-flex flex-column gap-xl mx-auto" style={{ maxWidth: "960px" }} id="editEmployeeForm" onSubmit={handleEditSubmit} noValidate>
                                <section className="form-section accent-primary"><h4 className="form-section-title">Basic Information</h4><div className="row g-md">
                                    <div className="col-12 col-md-3 d-flex flex-column align-items-center gap-3">
                                        <label className="photo-upload" htmlFor="editPhotoInput">{photoPreview ?
                                            <img alt="Selected profile preview" src={photoPreview} /> : <span className="material-symbols-outlined">add_a_photo</span>}
                                            <input type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" className="d-none" id="editPhotoInput" name="profile_photo" onChange={handlePhotoChange} />
                                        </label><small>JPG, PNG max 2MB</small>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <div className="row g-md">
                                            {[['name', 'Full Name', selectedEmployee.full_name],
                                            ['phone', 'Phone Number', selectedEmployee.phone],
                                            ['email', 'Email Address', selectedEmployee.email],
                                            ['date_of_birth', 'Date of Birth', selectedEmployee.date_of_birth?.slice(0, 10)],
                                            ['address', 'Address', selectedEmployee.address],
                                            ['city', 'City', selectedEmployee.city],
                                            ['district', 'District', selectedEmployee.district],
                                            ['zip_code', 'ZIP Code', selectedEmployee.zip_code],
                                            ['bio', 'Bio', selectedEmployee.bio]].map(([name, label, value]) =>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1" key={name}>
                                                    <label className="form-label-tok">{label}</label>
                                                    {name === 'bio' ? <textarea className="form-control-tok" name={name} defaultValue={value || ''} /> :
                                                        <input className="form-control-tok" name={name} type={name === 'date_of_birth' ? 'date' : 'text'} defaultValue={value || ''} />}
                                                </div>
                                            )}
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label className="form-label-tok">Gender</label>
                                                <select className="form-select-tok" name="gender" defaultValue={selectedEmployee.gender}>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <div className="d-flex align-items-center gap-3 mt-2">
                                                    <span className="form-label-tok mb-0">Is this Doctor?</span>
                                                    <label className="d-flex align-items-center gap-2 text-body-md text-on-surface-tok mb-0">
                                                        <input type="checkbox" id="editIsDoctor" name="is_doctor" value="1" defaultChecked={Number(selectedEmployee.is_doctor) === 1} /> Yes
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </section>
                                <section className="form-section accent-secondary">
                                    <h4 className="form-section-title">Professional Details</h4>
                                    <div className="row g-md">
                                        <div className="col-12 col-md-6">
                                            <label className="form-label-tok">Department</label>
                                            <input type="hidden" name="dept_id" value={selectedDepartmentId} />
                                            <div className="position-relative">
                                                <button type="button" className="form-select-tok w-100 text-start" onClick={() => setDepartmentDropdownOpen((open) => !open)}>{selectedDepartment || 'Select Department'}
                                                </button>{departmentDropdownOpen &&
                                                    <div className="position-absolute w-100 bg-white border rounded shadow-sm" style={{ zIndex: 20, maxHeight: 240, overflowY: 'auto' }}>{visibleDepartments.map((dept) =>
                                                        <button type="button" className="d-block w-100 text-start border-0 bg-white p-2" key={dept.id} onClick={() => { setSelectedDepartment(`${dept.department_code} - ${dept.name}`); setSelectedDepartmentId(String(dept.id)); setDepartmentDropdownOpen(false); }}>{dept.department_code} - {dept.name}
                                                        </button>
                                                    )}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok" htmlFor="editEmployeeShift">Shift <span className="required-star">*</span></label>
                                            <select className="form-select-tok" id="editEmployeeShift" name="shift_id" value={selectedShiftId} aria-invalid={Boolean(getFieldError("shift_id"))} onChange={(event) => {
                                                setSelectedShiftId(event.target.value);
                                                setErrors((current) => ({ ...current, shift_id: undefined }));
                                            }}>
                                                <option value="">Select Shift</option>
                                                {selectedEmployee?.shift_id && !shifts.some((shift) => String(shift.id) === String(selectedEmployee.shift_id)) && <option value={selectedEmployee.shift_id}>{selectedEmployee.shift?.shift_name || "Inactive shift"}</option>}
                                                {shifts.map((shift) => <option key={shift.id} value={shift.id}>{shift.shift_name}</option>)}
                                            </select>
                                            {getFieldError("shift_id") && <small className="text-danger" role="alert">{getFieldError("shift_id")}</small>}
                                        </div>
                                        {[
                                            ['designation', 'Designation'],
                                            ['qualification', 'Qualification'],
                                            ['experience_years', 'Experience (Years)'],
                                            ['license_number', 'BMDC / License Reg. No'],
                                            ['previous_workplace', 'Previous Workplace'],
                                            ['memberships', 'Memberships']].map(([name, label]) =>
                                                <div className="col-12 col-md-6 d-flex flex-column gap-1" key={name}>
                                                    <label className="form-label-tok">{label}</label>
                                                    <input className="form-control-tok" name={name} defaultValue={selectedEmployee[name] ?? ''} type={name === 'experience_years' ? 'number' : 'text'} />
                                                </div>
                                            )}
                                    </div></section>
                                <section className="form-section accent-primary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md"><h4 className="form-section-title mb-0">Education</h4><button className="btn-tok btn-text-tok" type="button" onClick={() => addEntry(setEducationEntries)}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span> Add Education</button></div>
                                    <div className="d-flex flex-column gap-sm">{educationEntries.map((entry, index) => { const item = selectedEmployee.educations?.find((record) => record.id === entry); return <div className="multi-entry-row employee-edit-education-row" key={entry}><input className="form-control-tok" name={`education[${index}][degree]`} defaultValue={item?.degree || ''} placeholder="Degree (e.g. MBBS)" /><input className="form-control-tok" name={`education[${index}][institution]`} defaultValue={item?.institution || ''} placeholder="Institution" /><input className="form-control-tok" name={`education[${index}][year]`} defaultValue={item?.year || ''} placeholder="Year" /><input className="form-control-tok" name={`education[${index}][description]`} defaultValue={item?.description || ''} placeholder="Description" /><button type="button" className="multi-entry-remove" onClick={() => setEducationEntries((entries) => entries.filter((row) => row !== entry))}><span className="material-symbols-outlined">delete</span></button></div>; })}{educationEntries.length === 0 && <input type="hidden" name="education[0][degree]" value="" />}</div>
                                </section>
                                <section className="form-section accent-secondary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md"><h4 className="form-section-title mb-0">Experience</h4><button className="btn-tok btn-text-tok" type="button" style={{ color: 'var(--secondary)' }} onClick={() => addEntry(setExperienceEntries)}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span> Add Experience</button></div>
                                    <div className="d-flex flex-column gap-sm">{experienceEntries.map((entry, index) => { const item = selectedEmployee.experiences?.find((record) => record.id === entry); return <div className="multi-entry-row employee-edit-experience-row" key={entry}><input className="form-control-tok" name={`experience[${index}][workplace]`} defaultValue={item?.workplace || ''} placeholder="Hospital / Clinic" /><input className="form-control-tok" name={`experience[${index}][position]`} defaultValue={item?.position || ''} placeholder="Position" /><input className="form-control-tok" type="date" name={`experience[${index}][start_date]`} defaultValue={item?.start_date?.slice(0, 10) || ''} /><div className="d-flex flex-column gap-1"><input className="form-control-tok" type="date" name={`experience[${index}][end_date]`} defaultValue={item?.end_date?.slice(0, 10) || ''} placeholder="End date" /><label className="d-flex align-items-center gap-2 text-label-md text-on-surface-variant-tok"><input type="hidden" name={`experience[${index}][currently_working]`} value="0" /><input type="checkbox" name={`experience[${index}][currently_working]`} value="1" defaultChecked={Boolean(item?.currently_working)} /> Currently working</label></div><button type="button" className="multi-entry-remove" onClick={() => setExperienceEntries((entries) => entries.filter((row) => row !== entry))}><span className="material-symbols-outlined">delete</span></button></div>; })}{experienceEntries.length === 0 && <input type="hidden" name="experience[0][workplace]" value="" />}</div>
                                </section>
                                <section className="form-section accent-primary-fixed">
                                    <h4 className="form-section-title"><span className="material-symbols-outlined text-primary-tok" style={{ fontSize: "20px" }}>description</span>Documents</h4>
                                    <div className="row g-md">
                                        {[
                                            ["cv_document", "CV / Resume", "cv_path"],
                                            ["nid_document", "NID", "nid_path"],
                                            ["other_document", "Other Document", "other_document_path"],
                                        ].map(([inputName, label, pathName]) => (
                                            <div className="col-12 col-md-4 d-flex flex-column gap-1" key={inputName}>
                                                <label className="form-label-tok" htmlFor={`edit-${inputName}`}>{label}</label>
                                                <input type="file" id={`edit-${inputName}`} name={inputName} accept=".pdf,application/pdf" className="form-control-tok" onChange={handleDocumentChange} />
                                                {selectedEmployee[pathName] ? <small className="text-on-surface-variant-tok">Current file: {selectedEmployee[pathName]}. Upload a new PDF to replace it.</small> : <small className="text-on-surface-variant-tok">No file uploaded. PDF files only, max 100 KB.</small>}
                                                {getFieldError(inputName) && <small className="text-danger" role="alert">{getFieldError(inputName)}</small>}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </form>}
                        </div>
                        <div className="modal-footer-tok"><button type="button" className="btn-tok btn-outline-tok" data-bs-dismiss="modal">Cancel</button><button type="submit" form="editEmployeeForm" className="btn-tok btn-primary-tok" disabled={saving}>{saving ? 'Saving...' : 'Update Employee'}</button></div>
                    </div>
                </div>
            </div>

            {/* VIEW Employee MODAL */}
            <div className="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modal-content-tok" style={{ maxHeight: "90vh" }}>

                        <div className="profile-header">
                            <button type="button" className="modal-close-btn position-absolute" style={{ top: "16px", right: "16px", zIndex: 2 }} data-bs-dismiss="modal" aria-label="Close">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            {selectedEmployee?.profile_photo_path ? <img src={`${api.defaults.baseURL.replace(/\/api\/?$/, "")}/assets/user/img/${encodeURIComponent(selectedEmployee.profile_photo_path)}`} alt={selectedEmployee.full_name} />
                                :
                                <div className="profile-photo-placeholder">
                                    <img src={Avatar} alt="Default employee profile" />
                                </div>
                            }
                            <div className="flex-grow-1 mt-2 mt-sm-0">
                                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-center gap-2 mb-1">
                                    <h3 className="text-headline-lg text-on-surface-tok mb-0" id="viewModalTitle">{selectedEmployee?.full_name || "Employee"}</h3>
                                </div>
                                <p className="text-headline-sm text-primary-tok mb-2">{selectedEmployee?.designation || "—"} <span className="text-on-surface-variant-tok">({selectedEmployee?.employee_code || "—"})</span></p>
                                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-3 text-body-md text-on-surface-variant-tok">
                                    <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>local_hospital</span>{(() => { const path = []; let department = selectedEmployee?.department; while (department) { path.unshift(department.name); department = department.parent; } return path.join(" - ") || "—"; })()}</span>
                                    <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>{selectedEmployee?.email || "—"}</span>
                                    <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>call</span>{selectedEmployee?.phone || "—"}</span>
                                </div>
                                <div className="text-body-sm text-on-surface-variant-tok mt-3">{[selectedEmployee?.address, selectedEmployee?.city, selectedEmployee?.district, selectedEmployee?.zip_code].filter(Boolean).join(", ") || "Address not provided"}</div>
                            </div>
                        </div>

                        <div className="modal-body-tok bg-background-tok">
                            <div className="row g-lg" style={{ maxWidth: "900px", margin: "0 auto" }}>
                                {/* <!-- Left column --> */}
                                <div className="col-12 col-md-4 d-flex flex-column gap-lg">
                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Professional</h4>
                                        <div className="d-flex flex-column gap-3">
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Last Qualification</span><span className="fw-semibold">{selectedEmployee?.qualification || "—"}</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Shift</span><span className="fw-semibold">{selectedEmployee?.shift?.shift_name || "—"}</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Experience</span><span className="fw-semibold">{selectedEmployee?.experience_years ?? 0} Years</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Previous Workplace</span><span className="fw-semibold">{selectedEmployee?.previous_workplace || "—"}</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Doctor</span><span className="fw-semibold">{Number(selectedEmployee?.is_doctor) === 1 ? "Yes" : "No"}</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>License Number</span><span className="fw-semibold text-data-mono">{selectedEmployee?.license_number || "—"}</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Memberships</span><span className="fw-semibold">{selectedEmployee?.memberships || "—"}</span></div>
                                        </div>
                                    </div>
                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Documents</h4>
                                        <div className="d-flex flex-column gap-3">
                                            {[
                                                ["CV / Resume", selectedEmployee?.cv_path],
                                                ["NID", selectedEmployee?.nid_path],
                                                ["Other Document", selectedEmployee?.other_document_path],
                                            ].map(([label, fileName]) => (
                                                <div key={label} className="d-flex align-items-center justify-content-between gap-2">
                                                    <div className="d-flex flex-column">
                                                        <span className="text-on-surface-variant-tok" style={{ fontSize: "13px" }}>{label}</span>
                                                        <span className="fw-semibold">{fileName ? "Available" : "Not found"}</span>
                                                    </div>
                                                    {fileName && <a
                                                        className="btn-tok btn-outline-tok d-inline-flex align-items-center gap-1"
                                                        style={{ padding: "6px 10px", fontSize: "12px", textDecoration: "none" }}
                                                        href={`${api.defaults.baseURL.replace(/\/api\/?$/, "")}/assets/user/document/${encodeURIComponent(fileName)}`}
                                                        download={fileName}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={`Download ${label}`}
                                                    >
                                                        <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>download</span>
                                                        Download
                                                    </a>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Right column --> */}
                                <div className="col-12 col-md-8 d-flex flex-column gap-lg">
                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok" style={{ borderBottom: "none", marginBottom: "8px", paddingBottom: 0 }}>Bio</h4>
                                        <p className="text-body-md text-on-surface-variant-tok mb-0" style={{ lineHeight: "1.6" }}>{selectedEmployee?.bio || "No biography provided."}</p>

                                    </div>

                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Experience</h4>
                                        <div className="timeline">
                                            {(selectedEmployee?.experiences || []).map((item) => <div className="timeline-item" key={`experience-${item.id}`}><span className="timeline-dot"></span><div className="text-body-md fw-semibold text-on-surface-tok">{item.position || "Position not specified"}</div><div className="text-body-sm text-primary-tok">{item.workplace || "Workplace not specified"} &bull; {item.start_date || "—"} - {item.currently_working ? "Present" : item.end_date || "—"}</div></div>)}
                                            {!selectedEmployee?.experiences?.length && <p className="text-body-sm text-on-surface-variant-tok mb-0">No experience records.</p>}
                                        </div>
                                    </div>

                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Education</h4>
                                        <div className="timeline">
                                            {(selectedEmployee?.educations || []).map((item) => <div className="timeline-item" key={`education-${item.id}`}><span className="timeline-dot"></span><div className="text-body-md fw-semibold text-on-surface-tok">{item.degree || "Degree not specified"}</div><div className="text-body-sm text-on-surface-variant-tok">{item.institution || "Institution not specified"} &bull; {item.year || "—"}</div>{item.description && <div className="text-body-sm text-on-surface-variant-tok">{item.description}</div>}</div>)}
                                            {!selectedEmployee?.educations?.length && <p className="text-body-sm text-on-surface-variant-tok mb-0">No education records.</p>}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* DELETE CONFIRMATION MODAL */}
            <div className="modal fade" id="deleteConfirmModal" tabindex="-1" aria-labelledby="deleteConfirmTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal-content-tok">
                        <div className="p-lg text-center">
                            <div className="delete-icon-wrap">
                                <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>delete_forever</span>
                            </div>
                            <h3 className="text-headline-md text-on-surface-tok mb-2" id="deleteConfirmTitle">Delete Employee?</h3>
                            <p className="text-body-md text-on-surface-variant-tok mb-0">
                                Are you sure you want to delete <strong>{selectedEmployee?.full_name || "this employee"}</strong>? This will move the employee to the deleted records.
                            </p>
                        </div>
                        <div className="modal-footer-tok justify-content-center">
                            <button type="button" className="btn-tok btn-outline-tok flex-fill" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn-tok btn-danger-tok flex-fill" onClick={handleDeleteEmployee} disabled={deleting}>
                                {deleting ? "Deleting…" : "Delete Employee"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
