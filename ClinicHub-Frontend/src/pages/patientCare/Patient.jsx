import "../../assets/css/Patient.css"

export default function Patient() {
    return (
        <>
            <main className="container-fluid p-3 p-md-4 p-lg-5">
                <div className="mx-auto max-w-page">

                    {/* <!-- Page Header --> */}
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
                        <div>
                            <h1 className="page-title">Patients</h1>
                            <p className="page-subtitle">Manage patient information, registration details, and patient records.</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button type="button" className="theme-toggle-fab" id="themeToggleBtn" aria-label="Toggle dark mode">
                                <span className="material-symbols-outlined" id="themeToggleIcon">dark_mode</span>
                            </button>
                            <button type="button" className="btn btn-clinic-primary d-inline-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#addPatientModal">
                                <span className="material-symbols-outlined icon-18">add</span>
                                Add Patient
                            </button>
                        </div>
                    </div>

                    {/* <!-- Search & Filter Section --> */}
                    <section className="filter-card mb-4">
                        <div className="row g-3 align-items-end">
                            {/* <!-- Global Search --> */}
                            <div className="col-12 col-xl-4">
                                <label className="form-label-clinic" for="patientSearch">Search Patients</label>
                                <div className="search-input-wrap">
                                    <span className="material-symbols-outlined">search</span>
                                    <input type="text" className="form-control" id="patientSearch" placeholder="Search by patient name, Patient ID, phone or email" />
                                </div>
                            </div>

                            {/* <!-- Filters Cluster --> */}
                            <div className="col-6 col-md-3 col-xl-2">
                                <label className="form-label-clinic" for="genderFilter">Gender</label>
                                <select className="form-select" id="genderFilter">
                                    <option value="">All Genders</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <label className="form-label-clinic" for="bloodGroupFilter">Blood Group</label>
                                <select className="form-select" id="bloodGroupFilter">
                                    <option value="">All Groups</option>
                                    <option value="A+">A+</option>
                                    <option value="O+">O+</option>
                                    <option value="B+">B+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="A-">A-</option>
                                    <option value="O-">O-</option>
                                    <option value="B-">B-</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            <div className="col-6 col-md-3 col-xl-2">
                                <label className="form-label-clinic" for="statusFilter">Status</label>
                                <select className="form-select" id="statusFilter">
                                    <option value="">All Statuses</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            {/* <!-- Action Buttons --> */}
                            <div className="col-12 col-md-3 col-xl-2 d-flex gap-2">
                                <button type="button" className="btn btn-clinic-outline flex-fill">Clear</button>
                                <button type="button" className="btn btn-clinic-primary flex-fill">Search</button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Patient Table Section --> */}
                    <section className="table-card">
                        <div className="table-scroll">
                            <table className="table table-hover align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-center col-w-48">#</th>
                                        <th className="col-minw-220">Patient</th>
                                        <th className="col-minw-120">Patient ID</th>
                                        <th className="col-w-100">Gender</th>
                                        <th className="col-w-70">Age</th>
                                        <th className="col-minw-150">Phone</th>
                                        <th className="col-w-100">Blood Group</th>
                                        <th className="col-minw-130">Last Visit</th>
                                        <th className="col-w-110">Status</th>
                                        <th className="text-center col-w-130">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- Row 1 --> */}
                                    <tr>
                                        <td className="text-center data-mono text-secondary-tok">1</td>
                                        <td>
                                            <div className="patient-name-cell">
                                                <img className="patient-avatar" alt="Rahim Ahmed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgX9OXVSQ1nJyJ37P9N0pyjaFBJMcr2fhR-2GSBu3zAgN6_NiRWAYDoR5VQXBJW4Ctp9OtM-Qp8wCHqOY8haBa-DrutgmGXsfaOGXuhUDdr8GX7sQUiZvEb_BMyv4A98-YfUiWewusZd1vavTaCS7RFCYmSkjjapRG1C-8mghr30v8p0M9u_m59yqtwTzZ_saf5OF4Bq6M2bOrX8GP5s2KScsmz_1EYORiNi_5r8SFedx5dzms-Q5f" />
                                                <div className="d-flex flex-column">
                                                    <span className="patient-name">Rahim Ahmed</span>
                                                    <span className="patient-email" title="rahim@example.com">rahim@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="patient-id data-mono">P-000124</td>
                                        <td>Male</td>
                                        <td className="data-mono">34</td>
                                        <td className="data-mono">+1 234 567 890</td>
                                        <td><span className="badge-blood">O+</span></td>
                                        <td className="text-body-sm text-on-surface-variant-tok">24 Aug 2026</td>
                                        <td><span className="badge-status-active">Active</span></td>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center justify-content-center gap-1 row-actions">
                                                <button type="button" className="icon-btn-table" title="View Patient" data-bs-toggle="modal" data-bs-target="#viewPatientModal">
                                                    <span className="material-symbols-outlined icon-18">visibility</span>
                                                </button>
                                                <button type="button" className="icon-btn-table" title="Edit Patient">
                                                    <span className="material-symbols-outlined icon-18">edit</span>
                                                </button>
                                                <button type="button" className="icon-btn-table danger" title="Deactivate" data-bs-toggle="modal" data-bs-target="#deactivateModal">
                                                    <span className="material-symbols-outlined icon-18">block</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- Row 2 --> */}
                                    <tr>
                                        <td className="text-center data-mono text-secondary-tok">2</td>
                                        <td>
                                            <div className="patient-name-cell">
                                                <img className="patient-avatar" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHCtdjqgjNZN_F1Gj1dJq9iMWvfn5NZ76POzVMABa4oYx5jfIzJtz4H-n0eOH_47IDkPeBURMxCYGiMgab-DVmmD6i7SBqWuqsw72LM0-2kebFSGsfFR1btMsF3KRkyRwMAGHPPT6vgxaDNjvwQwistWMpqf7CgkcV4PEWkhqEwIXEfNUNpcIo1gSMb_t4CBrF3zZbktLbVTTA4B_t034KlG2polyjFcKro0x3d7FhHMOl7TzeB3R0" />
                                                <div className="d-flex flex-column">
                                                    <span className="patient-name">Sarah Jenkins</span>
                                                    <span className="patient-email" title="s.jenkins@example.com">s.jenkins@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="patient-id data-mono">P-000125</td>
                                        <td>Female</td>
                                        <td className="data-mono">28</td>
                                        <td className="data-mono">+1 987 654 321</td>
                                        <td><span className="badge-blood">A-</span></td>
                                        <td className="text-body-sm text-on-surface-variant-tok">25 Aug 2026</td>
                                        <td><span className="badge-status-active">Active</span></td>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center justify-content-center gap-1 row-actions">
                                                <button type="button" className="icon-btn-table" title="View Patient" data-bs-toggle="modal" data-bs-target="#viewPatientModal">
                                                    <span className="material-symbols-outlined icon-18">visibility</span>
                                                </button>
                                                <button type="button" className="icon-btn-table" title="Edit Patient">
                                                    <span className="material-symbols-outlined icon-18">edit</span>
                                                </button>
                                                <button type="button" className="icon-btn-table danger" title="Deactivate" data-bs-toggle="modal" data-bs-target="#deactivateModal">
                                                    <span className="material-symbols-outlined icon-18">block</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- Row 3 --> */}
                                    <tr>
                                        <td className="text-center data-mono text-secondary-tok">3</td>
                                        <td>
                                            <div className="patient-name-cell">
                                                <img className="patient-avatar" alt="Liam Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCtuHe6vBCYlstZdStCHawwtCikbsy-6ZA9sP883ALvNNkDhfY3UcmeuJQmqU-82vxvvwiu1wetnw43LoV-cQXKsRlMzOIdv76IlY3qRHodVuVmTkyHo7AmE8rNLCkuzVNP8yW6NUpHZLpxwa0RFufrSBREwW-f3B5mVxLcYh28wQ2wEGSyCyEzLzuuyMkOMDPWU91HdhLZawLmIiQUinjSLKotU5jdxkP4EfBjxzDu0W2lQIivx15" />
                                                <div className="d-flex flex-column">
                                                    <span className="patient-name">Liam Chen</span>
                                                    <span className="patient-email" title="l.chen@example.com">l.chen@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="patient-id data-mono">P-000126</td>
                                        <td>Male</td>
                                        <td className="data-mono">45</td>
                                        <td className="data-mono">+1 555 010 203</td>
                                        <td><span className="badge-blood">B+</span></td>
                                        <td className="text-body-sm text-on-surface-variant-tok">20 Aug 2026</td>
                                        <td><span className="badge-status-inactive">Inactive</span></td>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center justify-content-center gap-1 row-actions">
                                                <button type="button" className="icon-btn-table" title="View Patient" data-bs-toggle="modal" data-bs-target="#viewPatientModal">
                                                    <span className="material-symbols-outlined icon-18">visibility</span>
                                                </button>
                                                <button type="button" className="icon-btn-table" title="Edit Patient">
                                                    <span className="material-symbols-outlined icon-18">edit</span>
                                                </button>
                                                <button type="button" className="icon-btn-table" title="Reactivate">
                                                    <span className="material-symbols-outlined icon-18">refresh</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Pagination --> */}
                        <div className="table-footer d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
                            <span className="table-footer-text">
                                Showing <strong>1</strong> to <strong>10</strong> of <strong>142</strong> entries
                            </span>
                            <nav aria-label="Patients pagination">
                                <ul className="pagination pagination-sm mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous" tabindex="-1">
                                            <span className="material-symbols-outlined icon-18">chevron_left</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item disabled"><span className="page-link">...</span></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span className="material-symbols-outlined icon-18">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                </div>
            </main>


            {/* <!-- ============ Add Patient Modal ============ --> */}
            <div className="modal fade patients-page" id="addPatientModal" tabindex="-1" aria-labelledby="addPatientModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="addPatientModalLabel">Add Patient</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex flex-column gap-4">

                                {/* <!-- Basic Info --> */}
                                <section>
                                    <h3 className="form-section-label">Basic Information</h3>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-4">
                                            <label className="form-label-clinic">Patient Photo</label>
                                            <div className="photo-upload-drop">
                                                <span className="material-symbols-outlined">add_a_photo</span>
                                                <span>Upload Photo</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="row g-3">
                                                <div className="col-12 col-sm-6">
                                                    <label className="form-label-clinic" for="fullName">Full Name</label>
                                                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <label className="form-label-clinic" for="patientIdField">Patient ID</label>
                                                    <input type="text" className="form-control readonly-field" id="patientIdField" value="P-000127" readonly />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <label className="form-label-clinic" for="genderField">Gender</label>
                                                    <select className="form-select" id="genderField">
                                                        <option>Select Gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <label className="form-label-clinic" for="dobField">Date of Birth</label>
                                                    <input type="date" className="form-control" id="dobField" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Contact Info --> */}
                                <section>
                                    <h3 className="form-section-label">Contact Information</h3>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <label className="form-label-clinic" for="phoneField">Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneField" placeholder="+1 000 000 000" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label className="form-label-clinic" for="emailField">Email Address</label>
                                            <input type="email" className="form-control" id="emailField" placeholder="email@example.com" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label-clinic" for="addressField">Residential Address</label>
                                            <textarea className="form-control" id="addressField" rows="3" placeholder="Street address, Apartment, Suite"></textarea>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Medical Info --> */}
                                <section>
                                    <h3 className="form-section-label">Medical Information</h3>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <label className="form-label-clinic" for="bloodGroupField">Blood Group</label>
                                            <select className="form-select" id="bloodGroupField">
                                                <option>Select Group</option>
                                                <option>A+</option><option>O+</option><option>B+</option><option>AB+</option>
                                                <option>A-</option><option>O-</option><option>B-</option><option>AB-</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label className="form-label-clinic" for="allergiesField">Allergies</label>
                                            <input type="text" className="form-control" id="allergiesField" placeholder="e.g. Penicillin, Peanuts" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label-clinic" for="notesField">Medical Notes</label>
                                            <textarea className="form-control" id="notesField" rows="3" placeholder="Any additional medical history or notes"></textarea>
                                        </div>
                                    </div>
                                </section>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-clinic-ghost" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-clinic-primary">Save Patient</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ============ View Patient Modal ============ --> */}
            <div className="modal fade patients-page" id="viewPatientModal" tabindex="-1" aria-labelledby="viewPatientModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="d-flex gap-3">
                                <img className="view-patient-avatar" alt="Rahim Ahmed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_RdGaLNzcpA_32hvpgyQEhI8mo85q8cSXewmOI2qdJZgbMZcllua5MqVy6zVAODCO9zVh9v6cdvXp9YSFQ_j8KSRdQpihcK9oLdvPQ-D0khg5yhP8roR_KgS2xbCWmh4dLB9VuEIfeKiV9Q6nSCltkEoX-IgXC7DnfrLqQFsqExTEC_ksxitA94MuCcIASBTEC83RT7K8rq_SbZXso5Os4hLoaYoFNnwM-mq-DuMwU-bEaUoE0-dY" />
                                <div>
                                    <h2 className="modal-title" id="viewPatientModalLabel">Rahim Ahmed</h2>
                                    <div className="d-flex align-items-center gap-2 mt-1">
                                        <span className="patient-id data-mono">P-000124</span>
                                        <span className="badge-status-active">Active</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-3">
                                {/* <!-- Quick Stats --> */}
                                <div className="col-12">
                                    <div className="row g-3">
                                        <div className="col-6 col-md-3">
                                            <div className="stat-card">
                                                <p className="stat-label">Gender</p>
                                                <p className="stat-value">Male</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="stat-card">
                                                <p className="stat-label">Age</p>
                                                <p className="stat-value">34 Years</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="stat-card">
                                                <p className="stat-label">Blood Group</p>
                                                <p className="stat-value">O+</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="stat-card">
                                                <p className="stat-label">Phone</p>
                                                <p className="stat-value">+1 234 567 890</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Detailed Info --> */}
                                <div className="col-12 col-lg-8 d-flex flex-column gap-3">
                                    <div className="info-card">
                                        <h3 className="info-card-title">Personal &amp; Contact</h3>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <p className="info-field-label">Email</p>
                                                <p className="info-field-value">rahim@example.com</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="info-field-label">Nationality</p>
                                                <p className="info-field-value">American</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="info-field-label">Address</p>
                                                <p className="info-field-value">123 Medical Plaza, Suite 400, New York, NY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-card">
                                        <h3 className="info-card-title">Medical History</h3>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <p className="info-field-label">Allergies</p>
                                                <p className="info-field-value">None reported</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="info-field-label">Chronic Conditions</p>
                                                <p className="info-field-value">Hypertension</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="info-field-label">Notes</p>
                                                <p className="text-body-sm mb-0">Patient is regular with checkups. No major surgeries in the last 5 years.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="info-card h-100">
                                        <h3 className="info-card-title">Activity Summary</h3>
                                        <div className="activity-row">
                                            <span>Total Appointments</span>
                                            <span className="fw-bold">12</span>
                                        </div>
                                        <div className="activity-row">
                                            <span>Completed</span>
                                            <span className="fw-bold text-tertiary-tok">8</span>
                                        </div>
                                        <div className="activity-row">
                                            <span>Upcoming</span>
                                            <span className="fw-bold text-primary-tok">1</span>
                                        </div>
                                        <hr className="text-outline-tok" />
                                        <p className="info-field-label mb-0">Last Visit</p>
                                        <p className="stat-value">26 Aug 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-clinic-ghost" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-clinic-primary">Edit Patient</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ============ Deactivate Confirmation Modal ============ --> */}
            <div className="modal fade patients-page" id="deactivateModal" tabindex="-1" aria-labelledby="deactivateModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body text-center d-flex flex-column align-items-center gap-3 pt-4">
                            <div className="warning-icon-wrap">
                                <span className="material-symbols-outlined icon-32">warning</span>
                            </div>
                            <div>
                                <h2 className="modal-title mb-1" id="deactivateModalLabel">Deactivate Patient?</h2>
                                <p className="text-on-surface-variant-tok mb-0">This will mark the patient as inactive. They will no longer appear in active lists but their records will be preserved.</p>
                            </div>
                        </div>
                        <div className="modal-footer modal-footer-muted justify-content-end">
                            <button type="button" className="btn btn-clinic-ghost" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-clinic-danger">Deactivate</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
