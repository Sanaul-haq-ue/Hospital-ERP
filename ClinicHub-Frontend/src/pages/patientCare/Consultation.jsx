import "../../assets/css/Consultation.css"

export default function Consultation() {
    return (
        <>
            {/* <!-- Page title bar (page content — not the removed top-nav shell) --> */}
            <div className="consult-topbar">
                <div className="consult-topbar-left">
                    <button type="button" className="back-btn" aria-label="Go back">
                        <span className="material-symbols-outlined icon-20">arrow_back</span>
                    </button>
                    <h1 className="consult-title">
                        Consultation
                        <span className="consult-id-badge">Q-012</span>
                    </h1>
                </div>
                <div className="consult-topbar-right">
                    <button type="button" className="theme-toggle-btn" id="themeToggle" title="Toggle dark mode" aria-label="Toggle dark mode">
                        <span className="material-symbols-outlined icon-18" id="themeToggleIcon">dark_mode</span>
                    </button>
                    <span className="status-pill">
                        <span className="material-symbols-outlined" data-weight="fill">vital_signs</span>
                        In Consultation
                    </span>
                    <button type="button" className="btn-clinical-primary">Complete Consultation</button>
                </div>
            </div>

            {/* <!-- Scrollable workspace --> */}
            <div className="consult-workspace">
                <div className="row g-lg">

                    {/* <!-- Main content column --> */}
                    <div className="col-12 col-xl-9 d-flex flex-column gap-4">

                        {/* <!-- Patient context bento --> */}
                        <div className="row g-3">
                            <div className="col-12 col-md-8">
                                <div className="patient-card">
                                    <div className="patient-avatar">
                                        <span className="material-symbols-outlined">person</span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h2 className="patient-name">
                                            Rahim Ahmed
                                            <span className="patient-mrn">(P-000124)</span>
                                        </h2>
                                        <div className="patient-meta">
                                            <span><span className="material-symbols-outlined">calendar_today</span> 35 Years</span>
                                            <span><span className="material-symbols-outlined">male</span> Male</span>
                                            <span><span className="material-symbols-outlined">bloodtype</span> B+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="appt-card">
                                    <div className="appt-eyebrow">Appointment</div>
                                    <div className="appt-id">APT-000124</div>
                                    <div className="appt-meta">
                                        <span><span className="material-symbols-outlined">schedule</span> 5:40 PM</span>
                                        <span><span className="material-symbols-outlined">stethoscope</span> Dr. Ahmed Khan</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Tabs --> */}
                        <div>
                            <ul className="nav consult-tabs" id="consultTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="consultation-tab" data-bs-toggle="tab" data-bs-target="#consultation-pane" type="button" role="tab" aria-controls="consultation-pane" aria-selected="true">
                                        Consultation
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="prescription-tab" data-bs-toggle="tab" data-bs-target="#prescription-pane" type="button" role="tab" aria-controls="prescription-pane" aria-selected="false">
                                        Prescription
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content pt-4">

                                {/* <!-- Consultation tab pane --> */}
                                <div className="tab-pane fade show active d-flex flex-column gap-4" id="consultation-pane" role="tabpanel" aria-labelledby="consultation-tab" tabindex="0">

                                    {/* <!-- Chief complaint --> */}
                                    <div className="clinical-section">
                                        <h3 className="clinical-section-title">
                                            <span className="material-symbols-outlined">chat_bubble</span>
                                            Chief Complaint &amp; Symptoms
                                        </h3>
                                        <textarea className="field-control" placeholder="Describe symptoms..."></textarea>
                                    </div>

                                    {/* <!-- Vital signs --> */}
                                    <div className="clinical-section">
                                        <div className="vitals-grid-header">
                                            <h3 className="clinical-section-title mb-0">
                                                <span className="material-symbols-outlined">monitor_heart</span>
                                                Vital Signs
                                            </h3>
                                            <button type="button" className="btn-clinical-text">
                                                <span className="material-symbols-outlined icon-16">edit</span> Edit
                                            </button>
                                        </div>
                                        <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-7 g-2">
                                            <div className="col">
                                                <div className="vital-card">
                                                    <div className="vital-label">Temp</div>
                                                    <div className="vital-value">98.6&deg;F</div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="vital-card">
                                                    <div className="vital-label">BP</div>
                                                    <div className="vital-value">120/80</div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="vital-card">
                                                    <div className="vital-label">Pulse</div>
                                                    <div className="vital-value">72 <span className="vital-unit">bpm</span></div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="vital-card">
                                                    <div className="vital-label">SpO2</div>
                                                    <div className="vital-value vital-value-good">98%</div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="vital-card">
                                                    <div className="vital-label">Weight</div>
                                                    <div className="vital-value">70kg</div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="vital-card">
                                                    <div className="vital-label">Height</div>
                                                    <div className="vital-value">175cm</div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="vital-card vital-highlight">
                                                    <div className="vital-label">BMI</div>
                                                    <div className="vital-value">22.9</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label className="field-label" for="examNotes">Physical Examination Notes</label>
                                            <textarea className="field-control field-textarea-md" id="examNotes" placeholder="Examination findings..."></textarea>
                                        </div>
                                    </div>

                                    {/* <!-- Diagnosis --> */}
                                    <div className="clinical-section">
                                        <h3 className="clinical-section-title">
                                            <span className="material-symbols-outlined">fact_check</span>
                                            Diagnosis
                                        </h3>
                                        <div className="diagnosis-search-wrap">
                                            <span className="material-symbols-outlined diagnosis-search-icon">search</span>
                                            <input type="text" className="field-control" placeholder="Search ICD-10 or clinical terms..." />
                                        </div>
                                        <div className="diagnosis-tags">
                                            <span className="diagnosis-tag">
                                                Viral Fever
                                                <button type="button" aria-label="Remove Viral Fever"><span className="material-symbols-outlined">close</span></button>
                                            </span>
                                        </div>
                                        <label className="field-label" for="clinicalNotes">Clinical Notes</label>
                                        <textarea className="field-control" id="clinicalNotes" placeholder="Assessment details..."></textarea>
                                    </div>

                                </div>
                                {/* <!-- /Consultation tab pane --> */}

                                {/* <!-- Prescription tab pane --> */}
                                <div className="tab-pane fade d-flex flex-column gap-4" id="prescription-pane" role="tabpanel" aria-labelledby="prescription-tab" tabindex="0">

                                    <div className="rx-header-card">
                                        <div>
                                            <h2 className="rx-header-title">Prescription</h2>
                                            <p className="rx-header-subtitle">Create and manage medicines prescribed for this consultation</p>
                                        </div>
                                        <div className="rx-header-meta">
                                            <div className="rx-number">Prescription No: RX-000124</div>
                                            <div>Date: 30 Aug 2026</div>
                                        </div>
                                    </div>

                                    <div className="rx-patient-strip">
                                        <div className="rx-patient-strip-left">
                                            <div className="rx-patient-strip-name">Rahim Ahmed <span>(P-000124)</span></div>
                                            <div className="rx-strip-divider"></div>
                                            <div className="rx-patient-strip-meta">35 Years &bull; Male &bull; B+</div>
                                        </div>
                                        <div className="rx-patient-strip-right">
                                            <div>Appt: <strong>APT-000124</strong></div>
                                            <div>Doctor: <strong>Dr. Ahmed Khan</strong></div>
                                        </div>
                                    </div>

                                    <div className="rx-previous-bar">
                                        <div className="rx-previous-bar-label">
                                            <span className="material-symbols-outlined icon-18">history</span>
                                            <span>Previous Prescription (26 Aug 2026)</span>
                                        </div>
                                        <button type="button" className="btn-clinical-text">View Previous</button>
                                    </div>

                                    <div className="d-flex flex-column gap-3">
                                        <div className="rx-medicines-header">
                                            <h3 className="rx-medicines-title">Medicines</h3>
                                            <button type="button" className="btn-clinical-primary d-inline-flex align-items-center gap-2">
                                                <span className="material-symbols-outlined icon-18">add</span> Add Medicine
                                            </button>
                                        </div>

                                        <div className="rx-medicine-card">
                                            <button type="button" className="rx-medicine-remove" aria-label="Remove medicine">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>

                                            <div className="row g-3 mb-3">
                                                <div className="col-12 col-md-4">
                                                    <label className="field-label" for="medName">Medicine Name</label>
                                                    <input type="text" className="field-control" id="medName" value="Paracetamol 500mg" />
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <label className="field-label">Generic Name</label>
                                                    <div className="field-readonly">Acetaminophen</div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <label className="field-label">Form</label>
                                                    <div className="field-readonly">Tablet</div>
                                                </div>
                                            </div>

                                            <div className="row g-3 mb-3">
                                                <div className="col-6 col-md-3">
                                                    <label className="field-label" for="medDosage">Dosage</label>
                                                    <input type="text" className="field-control" id="medDosage" placeholder="e.g. 1 tablet" />
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <label className="field-label" for="medFrequency">Frequency</label>
                                                    <select className="field-control" id="medFrequency">
                                                        <option>1+1+1</option>
                                                        <option>1+0+1</option>
                                                        <option>Twice daily</option>
                                                    </select>
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <label className="field-label" for="medDurationValue">Duration</label>
                                                    <div className="duration-group">
                                                        <input type="number" className="field-control" id="medDurationValue" value="5" />
                                                        <select className="field-control" id="medDurationUnit">
                                                            <option>Days</option>
                                                            <option>Weeks</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <label className="field-label" for="medRoute">Route</label>
                                                    <select className="field-control" id="medRoute">
                                                        <option>Oral</option>
                                                        <option>Topical</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="field-label" for="medInstructions">Instructions</label>
                                                <textarea className="field-control field-textarea-sm" id="medInstructions" placeholder="After food, etc."></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column gap-2">
                                        <label className="rx-notes-label" for="rxNotes">Prescription Notes</label>
                                        <textarea className="field-control clinical-section field-textarea-lg" id="rxNotes" placeholder="Additional clinical notes for the pharmacist or patient..."></textarea>
                                    </div>

                                    <div className="rx-summary-box">
                                        <div className="rx-summary-header">
                                            <h3 className="rx-summary-title mb-0">Prescription Summary</h3>
                                            <span className="rx-draft-badge">Draft</span>
                                        </div>
                                        <ul className="rx-summary-list">
                                            <li>Paracetamol 500mg - 1 tablet, 1+1+1 for 5 Days (Oral)</li>
                                        </ul>
                                    </div>

                                </div>
                                {/* <!-- /Prescription tab pane --> */}

                            </div>
                        </div>

                    </div>
                    {/* <!-- /Main content column --> */}

                    {/* <!-- Right sidebar (desktop only) --> */}
                    <div className="col-12 col-xl-3 d-none d-xl-block clinical-summary-col">
                        <div className="clinical-summary-panel">
                            <div className="clinical-summary-panel-header">
                                <span className="material-symbols-outlined icon-18">history</span> Clinical Summary
                            </div>
                            <div className="clinical-summary-panel-body">
                                <div>
                                    <div className="summary-item-label"><span className="material-symbols-outlined icon-tone-error">warning</span> Allergies</div>
                                    <div className="summary-item-value">No known allergies</div>
                                </div>
                                <div>
                                    <div className="summary-item-label"><span className="material-symbols-outlined icon-tone-secondary">coronavirus</span> Conditions</div>
                                    <div className="summary-item-tags">
                                        <span className="summary-item-tag">Diabetes</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="summary-item-label"><span className="material-symbols-outlined icon-tone-primary">pill</span> Current Meds</div>
                                    <div className="summary-item-value">Metformin 500mg</div>
                                </div>
                                <div>
                                    <div className="summary-item-label"><span className="material-symbols-outlined">content_cut</span> Surgeries</div>
                                    <div className="summary-item-value">Appendectomy - 2022</div>
                                </div>
                            </div>
                            <div className="clinical-summary-panel-footer">
                                <button type="button">View Full Medical History</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Right sidebar --> */}

                </div>
            </div>
            {/* <!-- /Scrollable workspace --> */}

            {/* <!-- Bottom action bar: swaps content to match the active tab --> */}
            <div className="consult-action-bar" id="actionBarConsultation">
                <button type="button" className="btn-clinical-outline">Save Draft</button>
                <div className="consult-action-bar-right">
                    <button type="button" className="btn-clinical-ghost-primary">Save Consultation</button>
                    <button type="button" className="btn-clinical-primary d-inline-flex align-items-center gap-2">
                        Save &amp; Continue to Prescription
                        <span className="material-symbols-outlined icon-18">arrow_forward</span>
                    </button>
                </div>
            </div>
            <div className="consult-action-bar d-none" id="actionBarPrescription">
                <button type="button" className="btn-clinical-outline">Save Draft</button>
                <div className="consult-action-bar-right">
                    <button type="button" className="btn-clinical-primary d-inline-flex align-items-center gap-2">
                        Finalize Prescription
                        <span className="material-symbols-outlined icon-18">check_circle</span>
                    </button>
                </div>
            </div>
        </>
    )
}
