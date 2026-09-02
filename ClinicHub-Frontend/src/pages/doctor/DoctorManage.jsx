import "../../assets/css/DoctorManage.css"

export default function DoctorManage() {

    return (
        <>
            <div>
                {/* <!-- Page header --> */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-md mb-lg">
                    <div style={{ maxWidth: "640px" }}>
                        <h2 className="text-headline-lg-mobile text-on-surface-tok mb-2">Doctors Directory</h2>
                        <p className="text-body-lg text-on-surface-variant-tok mb-0" style={{ lineHeight: "1.6" }}>
                            Manage doctors, their professional information, specializations, schedules, and consultation details across the facility.
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-sm flex-shrink-0">
                        <button className="btn-tok btn-outline-tok" type="button">
                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span> Export
                        </button>
                        <button className="btn-tok btn-primary-tok" type="button" data-bs-toggle="modal" data-bs-target="#addEditModal" onclick="prepareAddDoctor()">
                            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>add</span> Add Doctor
                        </button>
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
                                    <th>Doctor Profile</th>
                                    <th>Department &amp; Spec.</th>
                                    <th>Experience</th>
                                    <th className="text-end">Fee</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Row 1 --> */}
                                <tr>
                                    <td className="text-data-mono text-on-surface-variant-tok">#1024</td>
                                    <td>
                                        <div className="doctor-profile-cell" data-bs-toggle="modal" data-bs-target="#viewModal" onclick="loadDoctorProfile('robert-chen')">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4FEhJgn5_UqF6aIs_poNRuoh6BPb61QiE6jThqGrZfDXEmhOE7FOC70Z93xfXS-1Any_OggGQSPy7HRgQd_z0WKLdHFqEGJLJCo2-aBJoLg0ZU1tdgkqVPWeviQ0UUh-oV7JvCe2UTXRN5acpZoPrKLj_w66o6MSQJilLM-AT71EHzqTFys58n1K2h2KKPMWo36nHVhUNl0pVw2-LEvXc8cF58fj7lVifjZREwvPRjRJ2bBytrxVM" alt="Dr. Robert Chen" />
                                            <div>
                                                <div className="doctor-name">Dr. Robert Chen</div>
                                                <div className="doctor-contact">r.chen@clinichub.com &bull; +1 555-0198</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-body-md text-on-surface-tok">Cardiology</div>
                                        <div className="text-label-md text-on-surface-variant-tok mt-1">Interventional Cardiologist</div>
                                    </td>
                                    <td className="text-body-md text-on-surface-tok">15 Years</td>
                                    <td className="text-data-mono text-on-surface-tok text-end">$250</td>
                                    <td>
                                        <span className="badge-status badge-active"><span className="dot"></span>Active</span>
                                    </td>
                                    <td className="text-center">
                                        <div className="row-actions">
                                            <button className="icon-btn" title="View Profile" data-bs-toggle="modal" data-bs-target="#viewModal" onclick="loadDoctorProfile('robert-chen')"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>visibility</span></button>
                                            <button className="icon-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#addEditModal" onclick="prepareEditDoctor('robert-chen')"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>edit</span></button>
                                            <button className="icon-btn" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteConfirmModal" onclick="prepareDeleteDoctor('Dr. Robert Chen')"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                                {/* <!-- Row 2 --> */}
                                <tr>
                                    <td className="text-data-mono text-on-surface-variant-tok">#1025</td>
                                    <td>
                                        <div className="doctor-profile-cell" data-bs-toggle="modal" data-bs-target="#viewModal" onclick="loadDoctorProfile('elena-rodriguez')">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4oP4wP1VaAJ7xs_BKG1rICg7NlJxaYG3jNKMEppPxtoHtCknhPhSKQOVHriy5GzKcMHuvg7BJVl1UZ9iVYUXXN0-RZbRAN7TFqm7NPHBXRs-ub8XhDhVG_-a9hoB8wI3pU68Vot-_cT9iLTWec1sI1XlMfnIe7L4yzYwlALsis9L_P9e9ThU21dRiQW-w64C5uJnypc3l1VkOPhdDRPJ_EYU-w-u12kFvCma6M21dYqF4EDfpHCkH" alt="Dr. Elena Rodriguez" />
                                            <div>
                                                <div className="doctor-name">Dr. Elena Rodriguez</div>
                                                <div className="doctor-contact">e.rodriguez@clinichub.com &bull; +1 555-0211</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-body-md text-on-surface-tok">Pediatrics</div>
                                        <div className="text-label-md text-on-surface-variant-tok mt-1">Neonatal Care</div>
                                    </td>
                                    <td className="text-body-md text-on-surface-tok">8 Years</td>
                                    <td className="text-data-mono text-on-surface-tok text-end">$150</td>
                                    <td>
                                        <span className="badge-status badge-active"><span className="dot"></span>Active</span>
                                    </td>
                                    <td className="text-center">
                                        <div className="row-actions">
                                            <button className="icon-btn" title="View Profile" data-bs-toggle="modal" data-bs-target="#viewModal" onclick="loadDoctorProfile('elena-rodriguez')"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>visibility</span></button>
                                            <button className="icon-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#addEditModal" onclick="prepareEditDoctor('elena-rodriguez')"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>edit</span></button>
                                            <button className="icon-btn" title="Delete" data-bs-toggle="modal" data-bs-target="#deleteConfirmModal" onclick="prepareDeleteDoctor('Dr. Elena Rodriguez')"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div className="table-footer mt-auto">
                        <span className="text-body-sm text-on-surface-variant-tok">Showing 1 to 2 of 24 entries</span>
                        <div className="d-flex align-items-center gap-1">
                            <button className="page-btn" disabled><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chevron_left</span></button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn"><span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chevron_right</span></button>
                        </div>
                    </div>
                </div>
            </div>


            {/* ADD / EDIT DOCTOR MODAL (Bootstrap modal) */}
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
                            <form className="d-flex flex-column gap-xl mx-auto" style={{ maxWidth: "960px" }} id="doctorForm" onsubmit="return false;">

                                {/* <!-- Section 1: Basic Info --> */}
                                <section className="form-section accent-primary">
                                    <h4 className="form-section-title"><span className="material-symbols-outlined text-primary-tok" style={{ fontSize: "20px" }}>person</span>Basic Information</h4>
                                    <div className="row g-lg">
                                        <div className="col-12 col-md-3 d-flex flex-column align-items-center gap-3">
                                            <div className="photo-upload" id="photoUpload">
                                                <span className="material-symbols-outlined" style={{ fontSize: "32px", marginBottom: "4px" }}>add_a_photo</span>
                                                <span className="text-label-md text-center px-2" style={{ fontSize: "10px" }}>Upload Photo</span>
                                                <img alt="Preview" className="d-none" id="photoPreview" src="" />
                                                <input type="file" accept="image/*" className="d-none" id="photoInput" />
                                            </div>
                                            <span className="text-on-surface-variant-tok text-center" style={{ fontSize: "11px" }}>JPG, PNG max 2MB</span>
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <div className="row g-md">
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Full Name <span className="required-star">*</span></label>
                                                    <input type="text" className="form-control-tok" id="fullName" placeholder="e.g. Dr. Jane Smith" required />
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Gender <span className="required-star">*</span></label>
                                                    <select className="form-select-tok" id="gender" required>
                                                        <option value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Date of Birth</label>
                                                    <input type="date" className="form-control-tok" />
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Phone Number <span className="required-star">*</span></label>
                                                    <input type="tel" className="form-control-tok" id="phone" placeholder="+1 (555) 000-0000" required />
                                                </div>
                                                <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Email Address <span className="required-star">*</span></label>
                                                    <input type="email" className="form-control-tok" id="email" placeholder="doctor@clinichub.com" required />
                                                </div>
                                                <div className="col-12 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Address</label>
                                                    <input type="text" className="form-control-tok" placeholder="Full Address" />
                                                </div>
                                                <div className="col-12 d-flex flex-column gap-1">
                                                    <label className="form-label-tok">Bio</label>
                                                    <textarea className="form-control-tok" style={{ minHeight: "80px" }} placeholder="Short professional bio..."></textarea>
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
                                            <select className="form-select-tok" id="deptSelect" onchange="updateSpecializations()" required>
                                                <option value="">Select Department</option>
                                                <option value="medicine">Medicine</option>
                                                <option value="surgery">Surgery</option>
                                                <option value="pediatrics">Pediatrics</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Specialization <span className="required-star">*</span></label>
                                            <select className="form-select-tok" id="specSelect" onchange="updateSubSpecializations()" disabled required>
                                                <option value="">Select Dept First</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Sub-specialization</label>
                                            <select className="form-select-tok" id="subSpecSelect" disabled>
                                                <option value="">Select Specialization First</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Designation <span className="required-star">*</span></label>
                                            <input type="text" className="form-control-tok" placeholder="e.g. Senior Consultant" required />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Qualification</label>
                                            <input type="text" className="form-control-tok" placeholder="e.g. MBBS, MD" />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Experience (Years) <span className="required-star">*</span></label>
                                            <input type="number" min="0" className="form-control-tok" placeholder="e.g. 10" required />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">BMDC / License Reg. No <span className="required-star">*</span></label>
                                            <input type="text" className="form-control-tok" placeholder="REG-123456" required />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Previous Workplace</label>
                                            <input type="text" className="form-control-tok" placeholder="Previous Hospital/Clinic" />
                                        </div>
                                        <div className="col-12 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Memberships</label>
                                            <input type="text" className="form-control-tok" placeholder="e.g. AMA, ACP (comma separated)" />
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 3: Consultation Info --> */}
                                <section className="form-section accent-tertiary">
                                    <h4 className="form-section-title"><span className="material-symbols-outlined text-tertiary-tok" style={{ fontSize: "20px" }}>local_hospital</span>Consultation Information</h4>
                                    <div className="row g-md">
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Consultation Fee ($) <span className="required-star">*</span></label>
                                            <input type="number" min="0" className="form-control-tok" placeholder="250" required />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Follow-up Fee ($)</label>
                                            <input type="number" min="0" className="form-control-tok" placeholder="150" />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Avg. Duration (mins) <span className="required-star">*</span></label>
                                            <select className="form-select-tok" required>
                                                <option value="15">15 mins</option>
                                                <option value="20">20 mins</option>
                                                <option value="30" selected>30 mins</option>
                                                <option value="45">45 mins</option>
                                                <option value="60">60 mins</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Room / Cabin No.</label>
                                            <input type="text" className="form-control-tok" placeholder="e.g. 302" />
                                        </div>
                                        <div className="col-12 d-flex flex-column gap-1">
                                            <label className="form-label-tok">Consultation Type <span className="required-star">*</span></label>
                                            <select className="form-select-tok" required>
                                                <option value="both">In-person &amp; Online</option>
                                                <option value="in-person">In-person Only</option>
                                                <option value="online">Online Only</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 4: Education (multi-entry) --> */}
                                <section className="form-section accent-primary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md">
                                        <h4 className="form-section-title mb-0"><span className="material-symbols-outlined" style={{ fontSize: "20px", color: "var(--on-primary-fixed-variant)" }}>school</span>Education</h4>
                                        <button className="btn-tok btn-text-tok" type="button" onclick="addMultiEntry('educationList','education')">
                                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>add</span> Add Education
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column gap-sm" id="educationList">
                                        <div className="multi-entry-row">
                                            <input type="text" placeholder="Degree (e.g. MBBS)" className="form-control-tok" style={{ gridColumn: "span 3" }} />
                                            <input type="text" placeholder="Institution" className="form-control-tok" style={{ gridColumn: "span 4" }} />
                                            <input type="text" placeholder="Year (e.g. 2010)" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <input type="text" placeholder="Description" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <button type="button" className="multi-entry-remove" style={{ gridColumn: "span 1" }} onclick="this.closest('.multi-entry-row').remove()"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 5: Experience (multi-entry) --> */}
                                <section className="form-section accent-secondary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md">
                                        <h4 className="form-section-title mb-0"><span className="material-symbols-outlined" style={{ fontSize: "20px", color: "var(--on-secondary-fixed-variant)" }}>history</span>Experience</h4>
                                        <button className="btn-tok btn-text-tok" type="button" style={{ color: "var(--secondary)" }} onclick="addMultiEntry('experienceList','experience')">
                                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>add</span> Add Experience
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column gap-sm" id="experienceList">
                                        <div className="multi-entry-row">
                                            <input type="text" placeholder="Hospital/Clinic" className="form-control-tok" style={{ gridColumn: "span 3" }} />
                                            <input type="text" placeholder="Position" className="form-control-tok" style={{ gridColumn: "span 3" }} />
                                            <input type="date" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <div style={{ gridColumn: "span 3" }} className="d-flex flex-column gap-1">
                                                <input type="date" placeholder="End Date" className="form-control-tok" />
                                                <label className="d-flex align-items-center gap-2 text-label-md text-on-surface-variant-tok">
                                                    <input type="checkbox" onchange="this.parentElement.previousElementSibling.disabled=this.checked" /> Currently Working
                                                </label>
                                            </div>
                                            <button type="button" className="multi-entry-remove" style={{ gridColumn: "span 1" }} onclick="this.closest('.multi-entry-row').remove()"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 6: Schedule (multi-entry) --> */}
                                <section className="form-section accent-tertiary-fixed">
                                    <div className="d-flex align-items-center justify-content-between mb-md">
                                        <h4 className="form-section-title mb-0"><span className="material-symbols-outlined" style={{ fontSize: "20px", color: "var(--on-tertiary-fixed-variant)" }}>calendar_month</span>Schedule</h4>
                                        <button className="btn-tok btn-text-tok" type="button" style={{ color: "var(--tertiary)" }} onclick="addMultiEntry('scheduleList','schedule')">
                                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>add</span> Add Schedule
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column gap-sm" id="scheduleList">
                                        <div className="multi-entry-row">
                                            <select className="form-select-tok" style={{ gridColumn: "span 2" }}>
                                                <option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option>
                                            </select>
                                            <input type="time" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <input type="time" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <input type="text" placeholder="Room" className="form-control-tok" style={{ gridColumn: "span 2" }} />
                                            <select className="form-select-tok" style={{ gridColumn: "span 3" }}>
                                                <option>Active</option><option>Inactive</option>
                                            </select>
                                            <button type="button" className="multi-entry-remove" style={{ gridColumn: "span 1" }} onclick="this.closest('.multi-entry-row').remove()"><span className="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </div>
                                </section>

                            </form>
                        </div>

                        <div className="modal-footer-tok">
                            <button type="button" className="btn-tok btn-outline-tok" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn-tok btn-primary-tok" id="saveDoctorBtn" onclick="saveDoctor()">Save Doctor</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* VIEW DOCTOR MODAL */}
            <div className="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modal-content-tok" style={{ maxHeight: "90vh" }}>

                        <div className="profile-header">
                            <button type="button" className="modal-close-btn position-absolute" style={{ top: "16px", right: "16px", zIndex: 2 }} data-bs-dismiss="modal" aria-label="Close">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <img id="viewDoctorPhoto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4FEhJgn5_UqF6aIs_poNRuoh6BPb61QiE6jThqGrZfDXEmhOE7FOC70Z93xfXS-1Any_OggGQSPy7HRgQd_z0WKLdHFqEGJLJCo2-aBJoLg0ZU1tdgkqVPWeviQ0UUh-oV7JvCe2UTXRN5acpZoPrKLj_w66o6MSQJilLM-AT71EHzqTFys58n1K2h2KKPMWo36nHVhUNl0pVw2-LEvXc8cF58fj7lVifjZREwvPRjRJ2bBytrxVM" alt="Profile" />
                            <div className="flex-grow-1 mt-2 mt-sm-0">
                                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-center gap-2 mb-1">
                                    <h3 className="text-headline-lg text-on-surface-tok mb-0" id="viewDoctorName">Dr. Robert Chen</h3>
                                    <span className="badge-status badge-active"><span className="dot"></span>Active</span>
                                </div>
                                <p className="text-headline-sm text-primary-tok mb-2" id="viewDoctorTitle">Senior Interventional Cardiologist</p>
                                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-3 text-body-md text-on-surface-variant-tok">
                                    <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>local_hospital</span><span id="viewDoctorDept">Medicine &gt; Cardiology</span></span>
                                    <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span><span id="viewDoctorEmail">r.chen@clinichub.com</span></span>
                                    <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: "16px" }}>call</span><span id="viewDoctorPhone">+1 555-0198</span></span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body-tok bg-background-tok">
                            <div className="row g-lg" style={{ maxWidth: "900px", margin: "0 auto" }}>
                                {/* <!-- Left column --> */}
                                <div className="col-12 col-md-4 d-flex flex-column gap-lg">
                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Consultation</h4>
                                        <div className="d-flex flex-column">
                                            <div className="detail-row"><span className="text-on-surface-variant-tok">Fee</span><span className="fw-semibold text-data-mono">$250</span></div>
                                            <div className="detail-row"><span className="text-on-surface-variant-tok">Follow-up</span><span className="fw-semibold text-data-mono">$150</span></div>
                                            <div className="detail-row"><span className="text-on-surface-variant-tok">Duration</span><span className="fw-semibold">30 mins</span></div>
                                            <div className="detail-row"><span className="text-on-surface-variant-tok">Room</span><span className="fw-semibold">302</span></div>
                                            <div className="detail-row"><span className="text-on-surface-variant-tok">Type</span><span className="fw-semibold">In-person &amp; Online</span></div>
                                        </div>
                                    </div>
                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Professional</h4>
                                        <div className="d-flex flex-column gap-3">
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Qualification</span><span className="fw-semibold">MBBS, MD (Cardiology), FACC</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>BMDC Reg. No</span><span className="fw-semibold text-data-mono">REG-874291</span></div>
                                            <div><span className="text-on-surface-variant-tok d-block" style={{ fontSize: "13px" }}>Experience</span><span className="fw-semibold">15 Years</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Right column --> */}
                                <div className="col-12 col-md-8 d-flex flex-column gap-lg">
                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok" style={{ borderBottom: "none", marginBottom: "8px", paddingBottom: 0 }}>About</h4>
                                        <p className="text-body-md text-on-surface-variant-tok mb-0" style={{ lineHeight: "1.6" }}>
                                            Dr. Robert Chen is a leading interventional cardiologist with over 15 years of experience in complex coronary interventions. He specializes in minimally invasive procedures and has a strong focus on preventative cardiovascular care.
                                        </p>
                                    </div>

                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Experience &amp; Education</h4>
                                        <div className="timeline">
                                            <div className="timeline-item current">
                                                <span className="timeline-dot"></span>
                                                <div className="text-body-md fw-semibold text-on-surface-tok">Senior Consultant, Cardiology</div>
                                                <div className="text-body-sm text-primary-tok">ClinicHub Medical Center &bull; 2018 - Present</div>
                                            </div>
                                            <div className="timeline-item">
                                                <span className="timeline-dot"></span>
                                                <div className="text-body-md fw-semibold text-on-surface-tok">Attending Cardiologist</div>
                                                <div className="text-body-sm text-on-surface-variant-tok">Metro General Hospital &bull; 2012 - 2018</div>
                                            </div>
                                            <div className="timeline-item">
                                                <span className="timeline-dot"></span>
                                                <div className="text-body-md fw-semibold text-on-surface-tok">MD in Cardiology</div>
                                                <div className="text-body-sm text-on-surface-variant-tok">Johns Hopkins University &bull; 2010</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detail-card">
                                        <h4 className="text-headline-sm text-on-surface-tok">Weekly Schedule</h4>
                                        <table className="schedule-table">
                                            <thead><tr><th>Day</th><th>Time</th><th>Room</th></tr></thead>
                                            <tbody>
                                                <tr><td className="fw-medium">Monday</td><td className="text-data-mono">09:00 AM - 01:00 PM</td><td>302</td></tr>
                                                <tr><td className="fw-medium">Wednesday</td><td className="text-data-mono">10:00 AM - 02:00 PM</td><td>302</td></tr>
                                                <tr><td className="fw-medium">Friday</td><td className="text-data-mono">09:00 AM - 12:00 PM</td><td>302</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer-tok">
                            <button type="button" className="btn-tok btn-outline-tok" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn-tok btn-primary-tok" id="viewToEditBtn">
                                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>edit</span> Edit Doctor
                            </button>
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
                            <h3 className="text-headline-md text-on-surface-tok mb-2" id="deleteConfirmTitle">Delete Doctor?</h3>
                            <p className="text-body-md text-on-surface-variant-tok mb-0">
                                Are you sure you want to delete <strong id="deleteDoctorName">this doctor</strong>? This action cannot be undone.
                            </p>
                        </div>
                        <div className="modal-footer-tok justify-content-center">
                            <button type="button" className="btn-tok btn-outline-tok flex-fill" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn-tok btn-danger-tok flex-fill" onclick="confirmDelete()">Delete Doctor</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
