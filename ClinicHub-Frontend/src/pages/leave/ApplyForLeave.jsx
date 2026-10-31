import '../../assets/css/ApplyForLeave.css'

export default function ApplyForLeave() {
    return (
        <>
            <main className="al-scope flex-grow-1 p-3 p-md-4 p-lg-4">
                <div className="al-content d-flex flex-column gap-4">

                    {/* <!-- ================= PAGE HEADER ================= --> */}
                    <section className="row g-3 align-items-md-center">
                        <div className="col-12 col-md">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb al-breadcrumb mb-2">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#">Leave Management</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Apply for Leave</li>
                                </ol>
                            </nav>
                            <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3">
                                <h1 className="text-headline-lg al-title m-0">Apply for Leave</h1>
                                <span className="al-pill al-pill-primary">
                                    <span className="al-pulse-dot"></span>
                                    Employee Self-Service / HR Mode Switch
                                </span>
                            </div>
                            <p className="text-body-md text-on-surface-variant-tok al-max-prose mt-1 mb-0">
                                Submit planned time-off requests, clinical cover declarations, and medical leave documentation under the hospital's unified operational roster guidelines.
                            </p>
                        </div>

                        <div className="col-12 col-md-auto">
                            <div className="al-segment" role="group" aria-label="Application mode">
                                <button type="button" id="mode-self" className="active" aria-pressed="true">
                                    <span className="material-symbols-outlined">person</span>
                                    <span>Self-Service</span>
                                </button>
                                <button type="button" id="mode-hr" aria-pressed="false">
                                    <span className="material-symbols-outlined">manage_accounts</span>
                                    <span>HR On Behalf</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= EMPLOYEE HERO ================= --> */}
                    <section className="card al-card shadow-sm">
                        <div className="card-body p-3 p-md-4">
                            <div className="row g-3 g-lg-4 align-items-lg-center">
                                <div className="col-12 col-lg">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="position-relative flex-shrink-0">
                                            <img className="al-avatar-lg" alt="Dr. Marcus Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXBLK9YJSZKwadbk86TBrLZkusZtH2CTXvFtRFOtp31k6ojD2jhjxx4bs-HVMU_exjWxqyUOUEG-rRMCyr4VM09pE2EAuNydLFMaxzw_9RI4hvNW94am8HN_hVyazDr0UJJsNvprndOjcCPLXmERvjwvfai6zq93_bJgXtHOF1aTg0bnxHGPOALdn7mmhKoJP3lstJkqnCjOdnwXZHuVHcKBpaiS33EnBY0pv4sDs" />
                                                <span className="al-status-dot" title="Active on Duty"></span>
                                        </div>
                                        <div className="al-min-w-0">
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <h2 className="h5 fw-semibold m-0 al-text-strong">Dr. Marcus Vance, MD</h2>
                                                <span className="al-pill al-pill-primary border-0">EMP-1042</span>
                                                <span className="al-pill al-pill-secondary">Cardiology Department</span>
                                                <span className="al-pill al-pill-tertiary"><span className="al-dot"></span> Active / On Duty</span>
                                            </div>
                                            <div className="d-flex flex-wrap column-gap-4 row-gap-1 mt-2 small text-on-surface-variant-tok">
                                                <span className="d-inline-flex align-items-center gap-1"><span className="material-symbols-outlined al-icon-sm al-text-outline">medical_services</span> Senior Registrar (Cat-A)</span>
                                                <span className="d-inline-flex align-items-center gap-1"><span className="material-symbols-outlined al-icon-sm al-text-outline">schedule</span> Full-Time Clinical Staff</span>
                                                <span className="d-inline-flex align-items-center gap-1"><span className="material-symbols-outlined al-icon-sm al-text-outline">supervised_user_circle</span> Supervisor: Dr. Sarah Lin (Chief of Surgery)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4 col-xl-3">
                                    <div className="al-hero-divider">
                                        <label className="form-label text-label-md al-text-outline mb-1" for="targetClinician">Switch Target Clinician</label>
                                        <div className="input-group input-group-sm">
                                            <span className="input-group-text"><span className="material-symbols-outlined al-icon-md">badge</span></span>
                                            <input id="targetClinician" type="text" className="form-control font-mono" placeholder="Search doctor ID or name..." value="Marcus Vance (EMP-1042)"/>
                                                <button type="button" className="btn btn-outline-secondary" aria-label="Open clinician list">
                                                    <span className="material-symbols-outlined al-icon-md">expand_more</span>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= BALANCE CARDS ================= --> */}
                    <section className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
                        <div className="col">
                            <div className="card al-card al-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="al-kpi-label">Annual Leave</span>
                                        <span className="al-icon-chip al-chip-primary"><span className="material-symbols-outlined al-icon-md">flight_takeoff</span></span>
                                    </div>
                                    <div className="d-flex align-items-baseline justify-content-between gap-2 mb-1">
                                        <span className="fs-3 fw-bold al-text-strong">10 <span className="small fw-normal al-text-outline">Days Left</span></span>
                                        <span className="font-mono small text-on-surface-variant-tok fw-medium">14 / 24 Used</span>
                                    </div>
                                    <div className="progress al-progress mt-2" role="progressbar" aria-label="Annual leave used" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar al-fill-primary al-pct-58"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2 al-text-2xs al-text-outline">
                                        <span>58% utilized</span>
                                        <span className="al-text-primary fw-medium">Valid thru Dec 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card al-card al-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="al-kpi-label">Casual Leave</span>
                                        <span className="al-icon-chip al-chip-neutral"><span className="material-symbols-outlined al-icon-md">event_available</span></span>
                                    </div>
                                    <div className="d-flex align-items-baseline justify-content-between gap-2 mb-1">
                                        <span className="fs-3 fw-bold al-text-strong">6 <span className="small fw-normal al-text-outline">Days Left</span></span>
                                        <span className="font-mono small text-on-surface-variant-tok fw-medium">4 / 10 Used</span>
                                    </div>
                                    <div className="progress al-progress mt-2" role="progressbar" aria-label="Casual leave used" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar al-fill-secondary al-pct-40"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2 al-text-2xs al-text-outline">
                                        <span>40% utilized</span>
                                        <span className="al-text-secondary fw-medium">Short notice eligible</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card al-card al-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="al-kpi-label">Sick Leave</span>
                                        <span className="al-icon-chip al-chip-tertiary"><span className="material-symbols-outlined al-icon-md">healing</span></span>
                                    </div>
                                    <div className="d-flex align-items-baseline justify-content-between gap-2 mb-1">
                                        <span className="fs-3 fw-bold al-text-strong">11 <span className="small fw-normal al-text-outline">Days Left</span></span>
                                        <span className="font-mono small text-on-surface-variant-tok fw-medium">3 / 14 Used</span>
                                    </div>
                                    <div className="progress al-progress mt-2" role="progressbar" aria-label="Sick leave used" aria-valuenow="21" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar al-fill-tertiary al-pct-21"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2 al-text-2xs al-text-outline">
                                        <span>21% utilized</span>
                                        <span className="al-text-tertiary fw-medium">Medical proof &gt; 2 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card al-card al-card-hover shadow-sm h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="al-kpi-label">Unpaid Leave</span>
                                        <span className="al-icon-chip al-chip-muted"><span className="material-symbols-outlined al-icon-md">hourglass_empty</span></span>
                                    </div>
                                    <div className="d-flex align-items-baseline justify-content-between gap-2 mb-1">
                                        <span className="fs-3 fw-bold al-text-strong">0 <span className="small fw-normal al-text-outline">Deducted</span></span>
                                        <span className="al-pill al-pill-neutral">Accrual-Free</span>
                                    </div>
                                    <div className="progress al-progress mt-2" role="progressbar" aria-label="Unpaid leave used" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar al-fill-outline al-pct-0"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2 al-text-2xs al-text-outline">
                                        <span>Requires HOD Approval</span>
                                        <span className="fw-medium">Special Category</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- ================= FORM + SIDE PANELS ================= --> */}
                    <div className="row g-4">

                        {/* <!-- Form column --> */}
                        <div className="col-12 col-lg-8">
                            <form id="leave-form" action="#" method="post" className="d-flex flex-column gap-4">

                                {/* <!-- Section 1 --> */}
                                <section className="card al-card shadow-sm">
                                    <div className="card-body p-3 p-md-4">
                                        <div className="al-card-section-head d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="al-step font-mono">1</span>
                                                <h3 className="h6 fw-semibold m-0 al-text-strong">Leave Specifications</h3>
                                            </div>
                                            <span className="al-pill al-pill-primary border-0">Primary Details</span>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <label className="al-label" for="leaveTypeSelect">Leave Classification <span className="al-text-error">*</span></label>
                                                <select className="form-select" id="leaveTypeSelect">
                                                    <option value="Annual Leave" selected>Annual Leave (Planned Vacation / Respite)</option>
                                                    <option value="Sick Leave">Sick Leave (Medical Absence)</option>
                                                    <option value="Casual Leave">Casual Leave (Short Personal Matter)</option>
                                                    <option value="Paternity/Maternity">Paternity / Maternity Leave</option>
                                                    <option value="Bereavement">Compassionate / Bereavement</option>
                                                    <option value="Unpaid Leave">Unpaid Leave (Special Clearance)</option>
                                                </select>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <span className="al-label">Available Balance in Selected Category</span>
                                                <div className="al-balance-box">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="material-symbols-outlined al-icon-md al-text-primary">check_circle</span>
                                                        <span className="small fw-bold al-text-primary" id="balancePill">10 Days Available</span>
                                                    </div>
                                                    <span className="text-label-md al-text-outline">Out of 24 Total</span>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <label className="al-label" for="startDateInput">Start Date <span className="al-text-error">*</span></label>
                                                <input className="form-control font-mono" id="startDateInput" type="date" value="2025-04-03"/>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <label className="al-label" for="endDateInput">End Date <span className="al-text-error">*</span></label>
                                                <input className="form-control font-mono" id="endDateInput" type="date" value="2025-04-09"/>
                                            </div>
                                        </div>

                                        {/* <!-- Duration scheme --> */}
                                        <div className="al-divider-top mt-4 pt-3">
                                            <span className="al-label mb-2">Duration Scheme <span className="al-text-error">*</span></span>
                                            <div className="row g-2 al-max-md">
                                                <div className="col-12 col-sm-4">
                                                    <input type="radio" className="btn-check" name="durationType" id="durFull" value="full" autocomplete="off" checked/>
                                                        <label className="btn al-choice w-100" for="durFull">Full Day(s)</label>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <input type="radio" className="btn-check" name="durationType" id="durHalf" value="half" autocomplete="off"/>
                                                        <label className="btn al-choice w-100" for="durHalf">Half Day</label>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <input type="radio" className="btn-check" name="durationType" id="durHourly" value="hourly" autocomplete="off"/>
                                                        <label className="btn al-choice w-100" for="durHourly">Hourly Pass</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Granular shift --> */}
                                        <div className="al-panel-soft mt-3 d-flex flex-column flex-xl-row flex-xl-wrap align-items-xl-center gap-2 gap-xl-3 small">
                                            <span className="text-label-md fw-semibold al-text-strong d-flex align-items-center gap-1">
                                                <span className="material-symbols-outlined al-icon-sm al-text-primary">tune</span> Granular Shift Option:
                                            </span>
                                            <div className="d-flex flex-wrap gap-2">
                                                <button type="button" className="btn al-shift-btn">Morning Shift (08:00 - 14:00)</button>
                                                <button type="button" className="btn al-shift-btn">Afternoon Shift (14:00 - 20:00)</button>
                                            </div>
                                            <span className="font-mono al-text-outline">Default: Full Roster Exclusion</span>
                                        </div>

                                        {/* <!-- Calculated duration --> */}
                                        <div className="al-panel-highlight mt-4 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <span className="al-icon-chip al-icon-chip-lg al-chip-solid"><span className="material-symbols-outlined al-icon-lg">date_range</span></span>
                                                <div>
                                                    <p className="text-label-md text-on-surface-variant-tok m-0">Calculated Clinical Duty Deduction</p>
                                                    <p className="fw-bold al-text-primary m-0">Total Duration: 5 Working Days (40 Scheduled Hours)</p>
                                                </div>
                                            </div>
                                            <span className="al-info-tag font-mono fw-semibold al-text-primary align-self-start align-self-sm-auto">2 Weekend / Off-Duty Excluded</span>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 2 --> */}
                                <section className="card al-card shadow-sm">
                                    <div className="card-body p-3 p-md-4">
                                        <div className="al-card-section-head d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="al-step font-mono">2</span>
                                                <h3 className="h6 fw-semibold m-0 al-text-strong">Justification &amp; Emergency Contacts</h3>
                                            </div>
                                            <span className="small fw-medium al-text-outline">Clinical Coverage</span>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-1 mb-1">
                                                    <label className="al-label m-0" for="leaveReason">Reason for Leave / Clinical Handover Context <span className="al-text-error">*</span></label>
                                                    <span className="al-text-2xs al-text-outline">182 / 500 characters</span>
                                                </div>
                                                <textarea className="form-control" id="leaveReason" rows="3" placeholder="Specify the reason for leave, designated handover physician for acute wards, and locum coverage arrangements...">Annual family recess scheduled. Primary ward rounds and inpatient triage covered by Dr. Liam Gallagher (Registrar-Cardiology) via mutual rota swap approved by Department Head.</textarea>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="al-label" for="contactPhone">Contact Number During Absence <span className="al-text-error">*</span></label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><span className="material-symbols-outlined al-icon-lg">call</span></span>
                                                    <input className="form-control font-mono" id="contactPhone" type="tel" value="+1 (555) 438-9201"/>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="al-label" for="contactAlt">Alternate Communication / Travel Address <span className="al-label-muted fw-normal">(Optional)</span></label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><span className="material-symbols-outlined al-icon-lg">home_pin</span></span>
                                                    <input className="form-control" id="contactAlt" type="text" placeholder="e.g. 742 Evergreen Terrace, Springfield (In-State)"/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <span className="al-label">Supporting Documents <span className="al-label-muted fw-normal">(Mandatory for Sick Leave &gt; 2 Days or Paternity)</span></span>
                                                <label className="al-dropzone" for="supportingDoc">
                                                    <input type="file" id="supportingDoc" className="visually-hidden"/>
                                                        <span className="al-dropzone-icon"><span className="material-symbols-outlined">cloud_upload</span></span>
                                                        <span className="d-block small fw-medium al-text-strong">
                                                            <span className="al-link">Click to upload document</span> or drag &amp; drop file here
                                                        </span>
                                                        <span className="d-block text-label-md al-text-outline mt-1">PDF, JPG, or PNG files up to 10MB (Medical Cert, Conference Invitation, Rota swap form)</span>
                                                </label>

                                                <div className="al-file-row mt-2">
                                                    <div className="d-flex flex-wrap align-items-center gap-2 al-min-w-0">
                                                        <span className="material-symbols-outlined al-icon-lg al-text-primary">description</span>
                                                        <span className="fw-medium al-text-strong text-break">rota-swap-acknowledgement-signed.pdf</span>
                                                        <span className="al-text-outline font-mono">(1.4 MB)</span>
                                                    </div>
                                                    <button type="button" className="al-icon-remove flex-shrink-0" title="Remove attachment" aria-label="Remove attachment">
                                                        <span className="material-symbols-outlined al-icon-md">close</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Section 3 --> */}
                                <section className="card al-card shadow-sm">
                                    <div className="card-body p-3 p-md-4">
                                        <div className="al-card-section-head d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="al-step font-mono">3</span>
                                                <h3 className="h6 fw-semibold m-0 al-text-strong">Timeline &amp; Compliance Sign-off</h3>
                                            </div>
                                            <span className="al-pill al-pill-tertiary">Regulatory Lock</span>
                                        </div>

                                        <div className="row g-3 mb-3">
                                            <div className="col-12 col-md-6">
                                                <div className="al-info-box h-100">
                                                    <span className="d-block al-text-2xs al-text-outline fw-semibold al-uppercase">Application Filing Date</span>
                                                    <div className="d-flex flex-wrap align-items-center gap-2 mt-1">
                                                        <span className="material-symbols-outlined al-icon-md al-text-primary">event_note</span>
                                                        <span className="font-mono small fw-semibold al-text-strong">April 02, 2025</span>
                                                        <span className="al-info-tag ms-auto">Auto-filled</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="al-info-box h-100">
                                                    <span className="d-block al-text-2xs al-text-outline fw-semibold al-uppercase">Expected Return to Service</span>
                                                    <div className="d-flex flex-wrap align-items-center gap-2 mt-1">
                                                        <span className="material-symbols-outlined al-icon-md al-text-tertiary">assignment_turned_in</span>
                                                        <span className="font-mono small fw-semibold al-text-strong">April 10, 2025 (08:00 AM)</span>
                                                        <span className="al-info-tag ms-auto">Calculated</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="al-ack">
                                            <div className="form-check d-flex align-items-start gap-2 ps-0">
                                                <input className="form-check-input mt-1 ms-0 flex-shrink-0" type="checkbox" id="ackCheck" checked />
                                                    <label className="form-check-label small al-text-strong" for="ackCheck">
                                                        I hereby confirm that all information provided is accurate and complies strictly with the hospital clinical staff regulations. I have coordinated emergency patient handover with my departmental locum supervisor and ensure continuous cell contact readiness for acute alerts.
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* <!-- Actions --> */}
                                <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-lg-between gap-3">
                                    <div className="d-flex flex-column flex-sm-row gap-2">
                                        <button type="button" className="btn al-btn-light">Cancel</button>
                                        <button type="reset" className="btn al-btn-light">Reset Form</button>
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row gap-2">
                                        <button type="button" className="btn al-btn-outline-primary d-inline-flex align-items-center justify-content-center gap-2">
                                            <span className="material-symbols-outlined al-icon-md">save</span><span>Save as Draft</span>
                                        </button>
                                        <button type="submit" className="btn btn-brand-primary d-inline-flex align-items-center justify-content-center gap-2 fw-semibold px-4">
                                            <span className="material-symbols-outlined al-icon-lg">send</span><span>Submit Application</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* <!-- Side column --> */}
                        <div className="col-12 col-lg-4 align-self-lg-start sticky-lg-top al-sticky">
                            <div className="row g-3">

                                {/* <!-- Live ticket --> */}
                                <div className="col-12 col-md-6 col-lg-12">
                                    <div className="card al-card shadow-sm h-100">
                                        <div className="card-body">
                                            <div className="al-card-section-head d-flex align-items-center justify-content-between pb-3 mb-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="material-symbols-outlined al-icon-lg al-text-primary">preview</span>
                                                    <h4 className="small fw-bold m-0 al-text-strong">Live Application Ticket</h4>
                                                </div>
                                                <span className="al-pill al-pill-primary border-0 al-text-2xs fw-semibold al-uppercase">Draft</span>
                                            </div>

                                            <div className="d-flex flex-column gap-3 small">
                                                <div>
                                                    <span className="al-ticket-label">Applicant Physician</span>
                                                    <p className="fw-semibold al-text-strong m-0">Dr. Marcus Vance (Cardiology)</p>
                                                </div>

                                                <div className="al-ticket-row row g-2">
                                                    <div className="col-6">
                                                        <span className="al-ticket-label">Leave Scheme</span>
                                                        <span className="al-pill-tag mt-1">Annual Leave</span>
                                                    </div>
                                                    <div className="col-6">
                                                        <span className="al-ticket-label">Net Working Time</span>
                                                        <p className="font-mono fw-bold al-text-strong mt-1 mb-0">5 Days (40 hrs)</p>
                                                    </div>
                                                </div>

                                                <div className="al-ticket-row">
                                                    <span className="al-ticket-label">Period Requested</span>
                                                    <p className="font-mono fw-medium al-text-strong mt-1 mb-0">Apr 03, 2025 → Apr 09, 2025</p>
                                                </div>

                                                <div className="al-ticket-row">
                                                    <span className="al-ticket-label">Designated Shift Locum</span>
                                                    <div className="d-flex align-items-center gap-2 mt-1">
                                                        <span className="al-dot"></span>
                                                        <span className="fw-medium al-text-strong">Dr. Liam Gallagher (Cardiology)</span>
                                                    </div>
                                                </div>

                                                <div className="al-ticket-row">
                                                    <span className="al-ticket-label">Reason Snippet</span>
                                                    <p className="text-on-surface-variant-tok fst-italic mt-1 mb-0 al-clamp-2">"Annual family recess scheduled. Primary ward rounds and inpatient triage covered..."</p>
                                                </div>

                                                <div className="al-ticket-row">
                                                    <span className="al-ticket-label al-uppercase fw-semibold mb-2">Approval Pipeline</span>
                                                    <div className="d-flex flex-column gap-2 al-text-2xs">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="al-step-sm">1</span>
                                                            <span className="al-text-strong fw-medium">Cardiology Head (Dr. Sarah Lin)</span>
                                                            <span className="ms-auto al-text-outline">Pending</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="al-step-sm al-step-sm-muted">2</span>
                                                            <span className="al-text-outline">HR Chief Officer (Dr. Rostova)</span>
                                                            <span className="ms-auto al-text-outline">Queued</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Policies --> */}
                                <div className="col-12 col-md-6 col-lg-12">
                                    <div className="card al-card shadow-sm h-100">
                                        <div className="card-body">
                                            <div className="al-card-section-head d-flex align-items-center gap-2 pb-3 mb-3">
                                                <span className="material-symbols-outlined al-icon-lg al-text-primary">policy</span>
                                                <h4 className="small fw-bold m-0 al-text-strong">Leave Policies &amp; Regulations</h4>
                                            </div>
                                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 text-label-md text-on-surface-variant-tok">
                                                <li className="d-flex align-items-start gap-2">
                                                    <span className="material-symbols-outlined al-icon-md al-text-primary flex-shrink-0">info</span>
                                                    <span><strong>Notice Period:</strong> Minimum 5 working days advance notice required for planned annual vacation.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-2">
                                                    <span className="material-symbols-outlined al-icon-md al-text-primary flex-shrink-0">medical_information</span>
                                                    <span><strong>Medical Certificate:</strong> Mandatory physician attestation required for sick absences exceeding 2 consecutive clinical shifts.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-2">
                                                    <span className="material-symbols-outlined al-icon-md al-text-primary flex-shrink-0">supervised_user_circle</span>
                                                    <span><strong>Ward Locum Coverage:</strong> Acute clinical departments require an active locum sign-off prior to HOD sign-off.</span>
                                                </li>
                                                <li className="d-flex align-items-start gap-2">
                                                    <span className="material-symbols-outlined al-icon-md al-text-primary flex-shrink-0">phone_in_talk</span>
                                                    <span><strong>Standby Reachability:</strong> Registered physicians must provide active emergency contact for catastrophic code-red protocols.</span>
                                                </li>
                                            </ul>
                                            <div className="al-divider-top mt-3 pt-3">
                                                <a href="#" className="al-link small d-inline-flex align-items-center gap-1">
                                                    <span>Read Full Hospital HR Leave By-laws</span>
                                                    <span className="material-symbols-outlined al-icon-sm">open_in_new</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Checklist --> */}
                                <div className="col-12">
                                    <div className="al-checklist-box">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <span className="material-symbols-outlined al-icon-lg al-text-tertiary">verified</span>
                                            <p className="text-label-md fw-bold al-text-strong m-0">Auto-Validation Checklist</p>
                                        </div>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0 text-label-md text-on-surface-variant-tok">
                                            <li className="d-flex align-items-center gap-2"><span className="material-symbols-outlined al-icon-sm al-text-tertiary">check</span><span>Sufficient annual quota balance (10 remaining)</span></li>
                                            <li className="d-flex align-items-center gap-2"><span className="material-symbols-outlined al-icon-sm al-text-tertiary">check</span><span>Meets 5-day minimum notice requirement</span></li>
                                            <li className="d-flex align-items-center gap-2"><span className="material-symbols-outlined al-icon-sm al-text-tertiary">check</span><span>Locum coverage noted in handover field</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* <!-- Page footer --> */}
            <footer className="al-scope px-3 px-md-4 py-3 al-divider-top text-center text-sm-start small al-text-outline d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
                <p className="m-0">© 2025 ClinicHub Hospital ERP System. All Rights Reserved. Clinical Compliance v4.12</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a className="al-text-outline" href="#">Privacy Policy</a>
                    <a className="al-text-outline" href="#">Staff Ethics Charter</a>
                    <a className="al-text-outline" href="#">IT Support: ext #4400</a>
                </div>
            </footer>
        </>
    )
}
