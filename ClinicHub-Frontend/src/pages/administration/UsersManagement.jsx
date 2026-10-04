import { useEffect, useRef, useState } from "react";
import api from '../../api/axios';
import { API_URL } from "../../api/config";
import { toast, ToastContainer } from 'react-toastify';
import "../../assets/css/UsersManagement.css"
import { hasPermission } from "../../utils/permissions";

export default function UsersManagement() {

  const [roles, setRoles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    role_id: "",
    username: "",
    password: "",
    zip_code: "",
    city: "",
    country: "",
    profile_photo: null,
    nid_document: "",
    passport_document: "",
  });

  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  // edit
  const [editingUser, setEditingUser] = useState(null);
  const [editSaving, setEditSaving] = useState(false);

  const openViewModal = (user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setSelectedUser(null);
  };

  const copyToClipboard = (text, label) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${label} copied to clipboard`);
    });
  };

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);

      const response = await api.get("/user-view");

      setUsers(response.data);
    } catch (err) {
      console.error("Failed to load users:", err);

      toast.error(
        err.response?.data?.message ||
        "Failed to load users."
      );
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await api.get("/roles");

      setRoles(response.data);
    } catch (err) {
      console.error("Failed to load roles:", err);
      toast.error("Failed to load roles.");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        profile_photo: ["Please select a JPG or PNG image."],
      }));

      e.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        profile_photo: ["Profile photo must be less than 2MB."],
      }));

      e.target.value = "";
      return;
    }

    // Remove only the profile photo error
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.profile_photo;
      return newErrors;
    });

    setFormData((prev) => ({
      ...prev,
      profile_photo: file,
    }));

    setProfilePhoto(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDocumentChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        [name]: ["Only PDF files are allowed."],
      }));

      e.target.value = "";
      return;
    }

    if (file.size > 100 * 1024) {
      setErrors((prev) => ({
        ...prev,
        [name]: ["Document size must not exceed 100 KB."],
      }));

      e.target.value = "";
      return;
    }

    // Clear previous error
    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.first_name.trim()) {
      setErrors({
        first_name: ["First name is required."]
      });
      return;
    }
    if (!formData.email.trim()) {
      setErrors({
        email: ["Email is required."]
      });
      return;
    }
    if (!formData.phone.trim()) {
      setErrors({
        phone: ["Phone number is required."]
      });
      return;
    }
    if (!formData.role_id) {
      setErrors({
        role_id: ["Role is required."]
      });
      return;
    }
    if (!formData.username.trim()) {
      setErrors({
        username: ["Username is required."]
      });
      return;
    }
    if (!formData.password.trim()) {
      setErrors({
        password: ["Password is required."]
      });
      return;
    }

    setSaving(true);
    setErrors({});

    try {
      const data = new FormData();

      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);

      data.append("role_id", formData.role_id);
      data.append("username", formData.username);
      data.append("password", formData.password);

      data.append("zip_code", formData.zip_code);
      data.append("city", formData.city);
      data.append("country", formData.country);

      if (formData.profile_photo) {
        data.append("profile_photo", formData.profile_photo);
      }
      if (formData.nid_document) {
        data.append("nid_document", formData.nid_document);
      }
      if (formData.passport_document) {
        data.append("passport_document", formData.passport_document);
      }

      console.log(data);

      const response = await api.post("/register", data);

      // Close modal
      document.activeElement?.blur();

      window.bootstrap.Modal.getInstance(
        document.getElementById("addUserModal")
      )?.hide();

      toast.success(
        response.data.message || "User created successfully."
      );

      setUsers((prevUsers) => [
        response.data.user,
        ...prevUsers,
      ]);

      // Reset form if you already have resetForm()
      resetForm();

      // await fetchUsers();

    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);

        toast.error(
          err.response.data.message || "Please fix the errors."
        );
      } else {
        toast.error(
          err.response?.data?.message ||
          "Something went wrong. Please try again."
        );

        console.error(err);
      }
    } finally {
      setSaving(false);
    }

  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!formData.first_name.trim()) {
      setErrors({ first_name: ["First name is required."] });
      return;
    }

    if (!formData.email.trim()) {
      setErrors({ email: ["Email is required."] });
      return;
    }

    if (!formData.phone.trim()) {
      setErrors({ phone: ["Phone number is required."] });
      return;
    }

    if (!formData.role_id) {
      setErrors({ role_id: ["Role is required."] });
      return;
    }

    if (!formData.username.trim()) {
      setErrors({ username: ["Username is required."] });
      return;
    }

    setEditSaving(true);
    setErrors({});

    try {
      const data = new FormData();

      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("role_id", formData.role_id);
      data.append("username", formData.username);
      data.append("zip_code", formData.zip_code);
      data.append("city", formData.city);
      data.append("country", formData.country);

      if (formData.profile_photo) {
        data.append("profile_photo", formData.profile_photo);
      }

      if (formData.nid_document) {
        data.append("nid_document", formData.nid_document);
      }

      if (formData.passport_document) {
        data.append("passport_document", formData.passport_document);
      }

      data.append("_method", "PUT");

      const response = await api.post(
        `/user-update/${editingUser.id}`,
        data
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUser.id
            ? response.data.user
            : user
        )
      );

      toast.success(
        response.data.message || "User updated successfully."
      );

      document.activeElement?.blur();

      window.bootstrap.Modal.getInstance(
        document.getElementById("editUserModal")
      )?.hide();

      setEditingUser(null);
      resetForm();

    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);

        toast.error(
          err.response.data.message || "Please fix the errors."
        );
      } else {
        toast.error(
          err.response?.data?.message ||
          "Something went wrong. Please try again."
        );

        console.error(err);
      }
    } finally {
      setEditSaving(false);
    }
  };

  const resetForm = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      role_id: "",
      username: "",
      password: "",
      zip_code: "",
      city: "",
      country: "",
      profile_photo: null,
      nid_document: "",
      passport_document: "",
    });

    setErrors({});
    setProfilePhoto(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);

    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
      role_id: user.role_id || user.role?.id || "",
      username: user.username || "",
      password: "",
      zip_code: user.zip_code || "",
      city: user.city || "",
      country: user.country || "",
      profile_photo: null,
      nid_document: null,
      passport_document: null,
    });

    setErrors({});
  };

  const handleDeactivate = async () => {
    if (!selectedUser) return;

    try {
      const response = await api.put(
        `/user-deactivate/${selectedUser.id}`
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUser.id
            ? response.data.user
            : user
        )
      );

      toast.success(
        response.data.message || "User deactivated successfully."
      );

      setSelectedUser(null);

      window.bootstrap.Modal.getInstance(
        document.getElementById("deactivateUserModal")
      )?.hide();

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Failed to deactivate user."
      );

      console.error(err);
    }
  };



  return (
    <>
      <div className="container-fluid px-3 px-md-4">

        {/* <!-- Page Header --> */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3 mb-4">
          <div>
            <h1 className="page-heading">Users</h1>
            <p className="page-subtext">Manage system users, their roles, access status, and account information.</p>
          </div>
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            {hasPermission("users.create") && (
              <button type="button" className="btn btn-brand-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
                <span className="material-symbols-outlined fs-sm" aria-hidden="true">add</span>
                Add User
              </button>
            )}
          </div>
        </div>

        {/* <!-- Filter Area --> */}
        <div className="filter-card mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-4">
              <label htmlFor="search-users" className="filter-label">Search</label>
              <div className="filter-input-wrap">
                <span className="material-symbols-outlined" aria-hidden="true">search</span>
                <input type="text" className="form-control form-control-brand" id="search-users" placeholder="Name, email, phone..." />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <label htmlFor="filter-role" className="filter-label">Role</label>
              <select className="form-select form-select-brand" id="filter-role">
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="receptionist">Receptionist</option>
              </select>
            </div>
            <div className="col-6 col-md-3">
              <label htmlFor="filter-status" className="filter-label">Status</label>
              <select className="form-select form-select-brand" id="filter-status">
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div className="col-12 col-md-2">
              <button type="button" className="btn btn-brand-outline w-100">Clear Filters</button>
            </div>
          </div>
        </div>

        {/* <!-- Users Table --> */}
        <div className="table-card">
          <div className="table-scroll">
            <table className="users-table">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: '48px' }}>#</th>
                  <th>User</th>
                  <th>Contact</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-end">Last Login</th>
                  <th className="text-center" style={{ width: '96px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- Row 1: Admin --> */}
                {loadingUsers ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">Loading users...</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">No users found.</td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user.id}>

                      {/* Serial */}
                      <td className="text-center text-body-sm">{index + 1}</td>

                      {/* Name */}
                      <td>
                        <div className="d-flex align-items-center gap-2">

                          {user.profile_photo ? (
                            <img src={`${API_URL}/assets/user/img/${user.profile_photo}`} alt={`${user.first_name} ${user.last_name || ""}`} className="user-avatar" />
                          ) : (
                            <div className="user-avatar d-flex align-items-center justify-content-center">
                              <span className="material-symbols-outlined">person</span>
                            </div>
                          )}

                          <span className="user-name text-truncate" style={{ maxWidth: "150px" }}>
                            {user.first_name} {user.last_name && ` ${user.last_name}`}
                          </span>

                        </div>
                      </td>

                      {/* Email + Phone */}
                      <td>
                        {user.email && (
                          <span className="user-email text-truncate d-inline-block" style={{ maxWidth: "180px" }} >
                            {user.email}
                          </span>
                        )}

                        {user.phone && (
                          <span className="user-phone"> {user.phone} </span>
                        )}
                      </td>

                      {/* Role */}
                      <td>
                        {user.role?.name && (
                          <span className="badge-role badge-role-admin"> {user.role.name} </span>
                        )}
                      </td>

                      {/* Status */}
                      <td>
                        {Number(user.is_active) === 1 ? (
                          <span className="badge-status badge-status-active">
                            <span className="status-dot"></span> Active </span>
                        ) : (
                          <span className="badge-status badge-status-inactive">
                            <span className="status-dot"></span>
                            Inactive
                          </span>
                        )}
                      </td>

                      {/* Last Login */}
                      <td className="last-login-cell">
                        {/* {user.last_login_at
                          ? new Date(user.last_login_at).toLocaleString()
                          : "Never"} */}

                        Yesterday, 16:20
                      </td>

                      {/* Actions */}
                      <td>
                        <div className="d-flex align-items-center justify-content-center gap-1">

                          <button type="button" className="btn-icon-ghost" title="View" onClick={() => openViewModal(user)}>
                            <span className="material-symbols-outlined fs-sm"> visibility </span>
                          </button>
                          {hasPermission("users.edit") && (
                            <button type="button" className="btn-icon-ghost" title="Edit" data-bs-toggle="modal" data-bs-target="#editUserModal" onClick={() => handleEditClick(user)}>
                              <span className="material-symbols-outlined fs-sm">edit</span>
                            </button>
                          )}
                          {hasPermission("users.delete") && (
                          <button type="button" className="btn-icon-ghost danger" title="Deactivate" data-bs-toggle="modal" data-bs-target="#deactivateUserModal" onClick={() => setSelectedUser(user)}>
                            <span className="material-symbols-outlined fs-sm" aria-hidden="true">block</span>
                          </button>
                          )}

                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* <!-- Pagination --> */}
          <div className="table-footer">
            <span className="results-count">Showing 1-3 of 42 users</span>
            <nav aria-label="Users pagination">
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


      {/* <!-- Add User Modal --> */}
      <div className="modal fade" id="addUserModal" tabIndex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content modal-content-brand">
            <div className="modal-header modal-header-brand">
              <h2 className="modal-title" id="addUserModalLabel">Add New User</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="addUserForm" noValidate onSubmit={handleSubmit}>

                {Object.values(errors).some(
                  (error) => Array.isArray(error) && error.length > 0
                ) && (
                    <div className="alert alert-danger mb-3">
                      Please fix the following errors before submitting the form.
                    </div>
                  )}

                <h3 className="section-eyebrow">Basic Information</h3>
                <div className="row g-3 mb-2">

                  <div className="col-12 d-flex align-items-center gap-3 mb-2">
                    <div className="avatar-upload" role="button" tabIndex="0"
                      aria-label="Upload profile photo" onClick={() => fileInputRef.current?.click()} >
                      {profilePhoto ? (
                        <img src={profilePhoto} alt="Profile preview" className="profile-photo-preview" />
                      ) : (
                        <span className="material-symbols-outlined" aria-hidden="true"> add_a_photo </span>
                      )}
                    </div>
                    <div>
                      <p className="form-label-brand mb-1">Profile Photo</p>
                      <p className="text-body-sm text-on-surface-variant-tok mb-0"> JPG, PNG or GIF. Max size 2MB. </p>
                      <input ref={fileInputRef} type="file" accept="image/jpeg,image/png" onChange={handlePhotoChange} hidden />
                      {errors.profile_photo && (
                        <div className="invalid-feedback d-block"> {errors.profile_photo[0]}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-fname" className="form-label form-label-brand">First Name *</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="form-control form-select-brand" id="add-fname" required />
                    {errors.first_name && (
                      <div className="invalid-feedback d-block">{errors.first_name[0]}</div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="add-lname" className="form-label form-label-brand">Last Name *</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="form-control form-select-brand" id="add-lname" required />

                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="add-email" className="form-label form-label-brand">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-select-brand" id="add-email" required />
                    {errors.email && (
                      <div className="invalid-feedback d-block">{errors.email[0]}</div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="add-phone" className="form-label form-label-brand">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control form-select-brand" id="add-phone" />
                    {errors.phone && (
                      <div className="invalid-feedback d-block">{errors.phone[0]}</div>
                    )}
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="col-12">
                      <label htmlFor="add-address" className="form-label form-label-brand"> Address </label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control form-select-brand" id="add-address" />
                    </div>
                  </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'var(--outline-variant)' }} />

                <h3 className="section-eyebrow">Account Settings</h3>
                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-role" className="form-label form-label-brand">System Role *</label>
                    <select name="role_id" className="form-select form-select-brand" id="add-role" required
                      value={formData.role_id} onChange={handleChange} >

                      <option value="" disabled>Select a role</option>
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}

                    </select>
                    {errors.role_id && (
                      <div className="invalid-feedback d-block">{errors.role_id[0]}</div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="add-username" className="form-label form-label-brand"> Username * </label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control form-select-brand" id="add-username" placeholder="Enter username" required autoComplete="username" />
                    {errors.username && (
                      <div className="invalid-feedback d-block">{errors.username[0]}</div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="add-pass" className="form-label form-label-brand"> Password *</label>

                    <div className="position-relative">
                      <input type={showPassword ? "text" : "password"}
                        className="form-control form-select-brand pe-5" id="add-pass" required
                        name="password" value={formData.password} onChange={handleChange} />
                      {errors.password && (
                        <div className="invalid-feedback d-block">{errors.password[0]}</div>
                      )}

                      <button type="button" className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} >
                        <span className="material-symbols-outlined">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>

                    </div>
                  </div>

                </div>

                {/* <!-- Additional Information --> */}

                <hr className="my-4" style={{ borderColor: 'var(--outline-variant)' }} />

                <h3 className="section-eyebrow">Additional Information</h3>
                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-zip-code" className="form-label form-label-brand">ZIP Code</label>
                    <input type="tel" name="zip_code" value={formData.zip_code} onChange={handleChange} className="form-control form-select-bran" id="add-zip-code" />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-city" className="form-label form-label-brand">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control form-select-brand" id="add-city" />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-country" className="form-label form-label-brand"> Country </label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control form-select-brand" id="add-country" />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-nid" className="form-label form-label-brand">NID Document</label>
                    <input type="file" name="nid_document" onChange={handleDocumentChange} className="form-control form-select-brand" id="add-nid" accept="application/pdf,.pdf" />
                    <p className="text-body-sm text-on-surface-variant-tok mt-1 mb-0"> PDF only. Maximum size 100 KB. </p>
                    {errors.nid_document && (
                      <div className="invalid-feedback d-block">{errors.nid_document[0]}</div>
                    )}
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="add-passport" className="form-label form-label-brand">Passport Document</label>
                    <input type="file" name="passport_document" onChange={handleDocumentChange} className="form-control form-select-brand" id="add-passport" accept="application/pdf,.pdf" />
                    <p className="text-body-sm text-on-surface-variant-tok mt-1 mb-0">PDF only. Maximum size 100 KB.</p>
                    {errors.passport_document && (
                      <div className="invalid-feedback d-block">{errors.passport_document[0]}</div>
                    )}
                  </div>

                </div>
              </form>
            </div>
            <div className="modal-footer modal-footer-brand">
              <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" form="addUserForm" className="btn btn-brand-primary" id="submitAddUserBtn">
                {saving ? "Saving..." : "Save User"}
              </button>
            </div>
          </div>
        </div>
      </div >

      {/* <!-- View User Modal (Profile Card Style) --> */}
      {showViewModal && selectedUser && (
        <div className="modal-overlay-custom" id="viewUserModal" role="dialog" aria-labelledby="viewUserModalLabel" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) closeViewModal(); }}>
          <div className="view-modal-card modal-content-custom">

            {/* Modal Head */}
            <div className="modal-header modal-header-custom">
              <div className="d-flex align-items-center gap-2">
                <span className="icon-chip-primary">
                  <span className="material-symbols-outlined fs-4">account_box</span>
                </span>
                <div>
                  <h2 className="h5 mb-0 modal-title-custom" id="viewUserModalLabel">User Profile &amp; Details</h2>
                  <p className="small text-muted mb-0">System authentication, contact record and identity files</p>
                </div>
              </div>
              <button type="button" className="btn-close-custom" aria-label="Close modal" onClick={closeViewModal}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body modal-body-custom d-flex flex-column gap-4">

              {/* Top Profile Summary Card */}
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 p-3 summary-card-custom">
                <div className="d-flex align-items-center gap-3">
                  <div className="position-relative flex-shrink-0">
                    {selectedUser.profile_photo ? (
                      <img
                        src={`${API_URL}/assets/user/img/${selectedUser.profile_photo}`}
                        alt={`${selectedUser.first_name} ${selectedUser.last_name || ""}`}
                        className="avatar-img-custom"
                      />
                    ) : (
                      <div className="avatar-img-custom d-flex align-items-center justify-content-center" style={{ background: 'var(--surface-container)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--outline)' }}>person</span>
                      </div>
                    )}
                    <span className="status-dot-badge">
                      <span className="status-dot"></span>
                    </span>
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <h3 className="h5 mb-0 fw-semibold">
                        {selectedUser.first_name} {selectedUser.last_name || ''}
                      </h3>
                      {selectedUser.role?.name && (
                        <span className="badge role-badge-custom">{selectedUser.role.name}</span>
                      )}
                    </div>
                    <span className="text-muted small font-mono">{selectedUser.email || '-'}</span>
                    <div className="d-flex align-items-center gap-2 mt-1 flex-wrap">
                      <span className="text-muted d-none d-sm-inline">•</span>
                      <span className="small text-muted font-mono">
                        Last login: {selectedUser.last_login_at ? new Date(selectedUser.last_login_at).toLocaleString() : 'Never'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row flex-sm-column align-items-end gap-2 border-top border-sm-top-0 pt-2 pt-sm-0">
                  <span className="text-uppercase small text-muted fw-medium">
                    Account Status
                  </span>

                  {Number(selectedUser.is_active) === 1 ? (
                    <span className="badge status-tag-custom status-active">
                      <span className="status-dot"></span>
                      Active
                    </span>
                  ) : (
                    <span className="badge status-tag-custom status-inactive">
                      <span className="status-dot"></span>
                      Inactive
                    </span>
                  )}
                </div>
              </div>

              {/* Section: Personal & Contact Information */}
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary-tok fs-5">person</span>
                  <h4 className="section-label-custom mb-0">Personal &amp; Contact Information</h4>
                </div>
                <div className="info-panel-custom">
                  <div className="row g-3">
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">Full Name</span>
                      <span className="fw-medium">
                        {selectedUser.first_name} {selectedUser.last_name || ''}
                      </span>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">Email Address</span>
                      <span className="font-mono">{selectedUser.email || '-'}</span>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">Phone Number</span>
                      <span className="font-mono">{selectedUser.phone || '-'}</span>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">Street Address</span>
                      <span>{selectedUser.address || '-'}</span>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">City</span>
                      <span>{selectedUser.city || '-'}</span>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">Zip Code</span>
                      <span className="font-mono">{selectedUser.zip_code || '-'}</span>
                    </div>
                    <div className="col-12 d-flex flex-column gap-1">
                      <span className="small text-muted">Country</span>
                      <span>{selectedUser.country || '-'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Access & Security Credentials */}
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary-tok fs-5">lock</span>
                  <h4 className="section-label-custom mb-0">Access &amp; Security Credentials</h4>
                </div>
                <div className="info-panel-custom">
                  <div className="row g-3">
                    <div className="col-12 col-md-6 d-flex flex-column gap-1">
                      <span className="small text-muted">Username</span>
                      <div className="d-flex align-items-center justify-content-between px-3 py-2 field-pill-custom">
                        <span className="font-mono fw-medium">{selectedUser.username || '-'}</span>
                        <button
                          type="button"
                          className="btn-icon-custom"
                          title="Copy username"
                          onClick={() => copyToClipboard(selectedUser.username, 'Username')}
                        >
                          <span className="material-symbols-outlined fs-6">content_copy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Identification Documents */}
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined text-primary-tok fs-5">folder_shared</span>
                    <h4 className="section-label-custom mb-0">Identification Documents</h4>
                  </div>
                  <span className="small text-muted">
                    {[selectedUser.nid_document, selectedUser.passport_document].filter(Boolean).length} Document(s)
                  </span>
                </div>
                <div className="row g-3">
                  {/* NID Document Card */}
                  <div className="col-12 col-md-6">
                    <div className="doc-card-custom d-flex flex-column justify-content-between h-100 p-3">
                      <div>
                        <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <div className="doc-icon-chip doc-icon-chip-primary">
                              <span className="material-symbols-outlined fs-4">badge</span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="fw-medium small">National ID (NID)</span>

                            </div>
                          </div>
                          <span className={`badge ${selectedUser.nid_document ? 'verified-badge-custom' : 'bg-secondary'}`}>
                            {selectedUser.nid_document ? (
                              <><span className="material-symbols-outlined fs-6">check_circle</span> Verified</>
                            ) : 'Not uploaded'}
                          </span>
                        </div>
                        <div className="small text-muted font-mono">
                          {selectedUser.nid_document ? 'Format: PDF' : 'No document on file'} <br />
                          <span className="small font-mono text-muted">
                            {selectedUser.nid_document || 'Not uploaded'}
                          </span>
                        </div>
                      </div>
                      {selectedUser.nid_document && (
                        <div className="pt-3 mt-2 border-top d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <span className="small text-muted d-flex align-items-center gap-1">
                            <span className="material-symbols-outlined fs-6">lock</span> Encrypted Storage
                          </span>
                          <a
                            href={`${API_URL}/assets/user/document/${selectedUser.nid_document}`}
                            download target="_blank" rel="noopener noreferrer" className="btn btn-doc-primary btn-sm d-inline-flex align-items-center gap-1"
                          >
                            <span className="material-symbols-outlined fs-6">download</span> Download NID
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Passport Document Card */}
                  <div className="col-12 col-md-6">
                    <div className="doc-card-custom d-flex flex-column justify-content-between h-100 p-3">
                      <div>
                        <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <div className="doc-icon-chip doc-icon-chip-secondary">
                              <span className="material-symbols-outlined fs-4">menu_book</span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="fw-medium small">Passport Document</span>

                            </div>
                          </div>
                          <span className={`badge ${selectedUser.passport_document ? 'verified-badge-custom' : 'bg-secondary'}`}>
                            {selectedUser.passport_document ? (
                              <><span className="material-symbols-outlined fs-6">check_circle</span> Verified</>
                            ) : 'Not uploaded'}
                          </span>
                        </div>
                        <div className="small text-muted font-mono">
                          {selectedUser.passport_document ? 'Format: PDF' : 'No document on file'} <br />
                          <span className="small font-mono text-muted">
                            {selectedUser.passport_document || 'Not uploaded'}
                          </span>
                        </div>
                      </div>
                      {selectedUser.passport_document && (
                        <div className="pt-3 mt-2 border-top d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <span className="small text-muted d-flex align-items-center gap-1">
                            <span className="material-symbols-outlined fs-6">lock</span> Biometric Stored
                          </span>
                          <a
                            href={`${API_URL}/assets/user/document/${selectedUser.passport_document}`} download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-doc-secondary btn-sm d-inline-flex align-items-center gap-1"
                          >
                            <span className="material-symbols-outlined fs-6">download</span> Download Passport
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="modal-footer modal-footer-custom d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div className="small font-mono text-muted">
                User ID: <span className="fw-semibold text-body">
                  {selectedUser.id ? `USR-${String(selectedUser.id).padStart(3, '0')}` : 'USR-001'}
                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                {/* <button type="button" className="btn btn-outline-secondary-custom" onClick={closeViewModal}>Close</button>
                <button
                  type="button"
                  className="btn btn-brand-primary d-inline-flex align-items-center gap-1"
                  onClick={() => { toast.info(`Edit mode opened for ${selectedUser.first_name || ''}`); closeViewModal(); }}
                >
                  <span className="material-symbols-outlined fs-6">edit</span> Edit User
                </button> */}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Edit User Modal */}
      <div className="modal fade" id="editUserModal" tabIndex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content modal-content-brand">

            <div className="modal-header modal-header-brand">
              <h2 className="modal-title" id="editUserModalLabel">Edit User</h2>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">

              {Object.values(errors).some((error) => Array.isArray(error) && error.length > 0) && (
                <div className="alert alert-danger mb-3">
                  Please fix the following errors before submitting the form.
                </div>
              )}

              <form id="editUserForm" noValidate onSubmit={handleUpdate}>

                {/* Basic Information */}
                <h3 className="section-eyebrow">Basic Information</h3>

                <div className="row g-3 mb-2">

                  {/* Profile Photo */}
                  <div className="col-12 d-flex align-items-center gap-3 mb-2">

                    <div className="avatar-upload">
                      {editingUser?.profile_photo ? (
                        <img src={`${API_URL}/assets/user/img/${editingUser.profile_photo}`} alt={`${editingUser.first_name} ${editingUser.last_name || ""}`} className="profile-photo-preview" />
                      ) : (
                        <span className="material-symbols-outlined" aria-hidden="true">
                          account_circle
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="form-label-brand mb-1">Profile Photo</p>

                      <p className="text-body-sm text-on-surface-variant-tok mb-0">
                        Select a new photo only if you want to change it.
                      </p>

                      <input type="file" name="profile_photo" accept="image/jpeg,image/png" className="form-control form-select-brand mt-2" onChange={(e) => setFormData((prev) => ({ ...prev, profile_photo: e.target.files[0] || null }))} />

                      {errors.profile_photo && (
                        <div className="invalid-feedback d-block">{errors.profile_photo[0]}</div>
                      )}
                    </div>

                  </div>

                  {/* First Name */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-fname" className="form-label form-label-brand">First Name *</label>

                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="form-control form-select-brand" id="edit-fname" />

                    {errors.first_name && (
                      <div className="invalid-feedback d-block">{errors.first_name[0]}</div>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-lname" className="form-label form-label-brand">Last Name *</label>

                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="form-control form-select-brand" id="edit-lname" />

                    {errors.last_name && (
                      <div className="invalid-feedback d-block">{errors.last_name[0]}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-email" className="form-label form-label-brand">Email Address *</label>

                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-select-brand" id="edit-email" />

                    {errors.email && (
                      <div className="invalid-feedback d-block">{errors.email[0]}</div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-phone" className="form-label form-label-brand">Phone Number</label>

                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control form-select-brand" id="edit-phone" />

                    {errors.phone && (
                      <div className="invalid-feedback d-block">{errors.phone[0]}</div>
                    )}
                  </div>

                  {/* Address */}
                  <div className="col-12">
                    <label htmlFor="edit-address" className="form-label form-label-brand">Address</label>

                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control form-select-brand" id="edit-address" />

                    {errors.address && (
                      <div className="invalid-feedback d-block">{errors.address[0]}</div>
                    )}
                  </div>

                </div>

                <hr className="my-4" style={{ borderColor: "var(--outline-variant)" }} />

                {/* Account Settings */}
                <h3 className="section-eyebrow">Account Settings</h3>

                <div className="row g-3">

                  {/* Role */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-role" className="form-label form-label-brand">System Role *</label>

                    <select name="role_id" className="form-select form-select-brand" id="edit-role" value={formData.role_id} onChange={handleChange}>
                      <option value="" disabled>Select a role</option>

                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </select>

                    {errors.role_id && (
                      <div className="invalid-feedback d-block">{errors.role_id[0]}</div>
                    )}
                  </div>

                  {/* Username */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-username" className="form-label form-label-brand">Username *</label>

                    <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control form-select-brand" id="edit-username" />

                    {errors.username && (
                      <div className="invalid-feedback d-block">{errors.username[0]}</div>
                    )}
                  </div>

                </div>

                <hr className="my-4" style={{ borderColor: "var(--outline-variant)" }} />

                {/* Additional Information */}
                <h3 className="section-eyebrow">Additional Information</h3>

                <div className="row g-3">

                  {/* ZIP Code */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-zip-code" className="form-label form-label-brand">ZIP Code</label>

                    <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} className="form-control form-select-brand" id="edit-zip-code" />

                    {errors.zip_code && (
                      <div className="invalid-feedback d-block">{errors.zip_code[0]}</div>
                    )}
                  </div>

                  {/* City */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-city" className="form-label form-label-brand">City</label>

                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control form-select-brand" id="edit-city" />

                    {errors.city && (
                      <div className="invalid-feedback d-block">{errors.city[0]}</div>
                    )}
                  </div>

                  {/* Country */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-country" className="form-label form-label-brand">Country</label>

                    <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control form-select-brand" id="edit-country" />

                    {errors.country && (
                      <div className="invalid-feedback d-block">{errors.country[0]}</div>
                    )}
                  </div>

                  {/* NID Document */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-nid" className="form-label form-label-brand">NID Document</label>

                    <input type="file" name="nid_document" className="form-control form-select-brand" id="edit-nid" accept="application/pdf,.pdf" onChange={(e) => setFormData((prev) => ({ ...prev, nid_document: e.target.files[0] || null }))} />

                    <p className="text-body-sm text-on-surface-variant-tok mt-1 mb-0">
                      Leave empty to keep the existing document.
                    </p>

                    {errors.nid_document && (
                      <div className="invalid-feedback d-block">{errors.nid_document[0]}</div>
                    )}
                  </div>

                  {/* Passport Document */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="edit-passport" className="form-label form-label-brand">Passport Document</label>

                    <input type="file" name="passport_document" className="form-control form-select-brand" id="edit-passport" accept="application/pdf,.pdf" onChange={(e) => setFormData((prev) => ({ ...prev, passport_document: e.target.files[0] || null }))} />

                    <p className="text-body-sm text-on-surface-variant-tok mt-1 mb-0">
                      Leave empty to keep the existing document.
                    </p>

                    {errors.passport_document && (
                      <div className="invalid-feedback d-block">{errors.passport_document[0]}</div>
                    )}
                  </div>

                </div>

              </form>
            </div>

            <div className="modal-footer modal-footer-brand">

              <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">
                Cancel
              </button>

              <button type="submit" form="editUserForm" className="btn btn-brand-primary">
                {editSaving ? "Updating..." : "Update User"}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* <!-- Deactivate Confirmation Modal --> */}
      <div className="modal fade" id="deactivateUserModal" tabIndex="-1" aria-labelledby="deactivateUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content modal-content-brand text-center p-2">
            <div className="modal-body">
              <div className="warning-icon-wrap">
                <span className="material-symbols-outlined" aria-hidden="true">warning</span>
              </div>
              <h2 className="text-headline-sm mb-2 text-on-background-tok" id="deactivateUserModalLabel">Deactivate User?</h2>
              <p className="text-on-surface-variant-tok mb-4">
                Are you sure you want to deactivate{" "}
                <span className="fw-semibold text-on-background-tok">
                  {selectedUser
                    ? `${selectedUser.first_name} ${selectedUser.last_name || ""}`
                    : "this user"}
                </span>
                ? They will no longer be able to access the system.
              </p>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-brand-outline flex-fill" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-brand-danger flex-fill" id="confirmDeactivateBtn" onClick={handleDeactivate}>Deactivate</button>
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