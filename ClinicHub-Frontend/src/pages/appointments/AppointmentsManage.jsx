import "../../assets/css/AppointmentsManage.css"

export default function AppointmentsManage() {
  return (
    <>
      {/* <!-- Header Section --> */}
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Appointments</h1>
          <p className="page-subtitle">Manage and track patient appointments.</p>
        </div>
        <button type="button" className="theme-toggle-btn" id="themeToggle" aria-label="Toggle dark mode">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </div>

      {/* <!-- Summary Cards --> */}
      <div className="row g-3 g-md-4">
        <div className="col-6 col-md-3">
          <div className="summary-card">
            <div className="summary-card-head">
              <span className="summary-card-label">Today's</span>
              <span className="material-symbols-outlined icon-fill summary-icon-primary">calendar_today</span>
            </div>
            <span className="summary-card-value">24</span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="summary-card">
            <div className="summary-card-head">
              <span className="summary-card-label">Confirmed</span>
              <span className="material-symbols-outlined icon-fill summary-icon-tertiary">check_circle</span>
            </div>
            <span className="summary-card-value">18</span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="summary-card">
            <div className="summary-card-head">
              <span className="summary-card-label">Checked In</span>
              <span className="material-symbols-outlined icon-fill summary-icon-secondary">how_to_reg</span>
            </div>
            <span className="summary-card-value">4</span>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="summary-card">
            <div className="summary-card-head">
              <span className="summary-card-label">Completed</span>
              <span className="material-symbols-outlined icon-fill summary-icon-outline">task_alt</span>
            </div>
            <span className="summary-card-value">8</span>
          </div>
        </div>
      </div>

      {/* <!-- Filter Toolbar --> */}
      <section className="filter-card">
        <form className="row g-3" onsubmit="return false;">
          <div className="col-12 col-lg-4">
            <label className="filter-label" for="apptSearch">Search</label>
            <div className="search-input-wrap">
              <span className="material-symbols-outlined search-icon">search</span>
              <input type="text" className="form-control" id="apptSearch" placeholder="ID, name, phone"/>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <label className="filter-label" for="apptDoctor">Doctor</label>
            <select className="form-select" id="apptDoctor">
              <option value="">All Doctors</option>
              <option>Dr. Ahmed Khan</option>
              <option>Dr. Sara Rahman</option>
            </select>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <label className="filter-label" for="apptDate">Date</label>
            <input type="date" className="form-control" id="apptDate"/>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <label className="filter-label" for="apptStatus">Status</label>
            <select className="form-select" id="apptStatus">
              <option value="">All Status</option>
              <option>Confirmed</option>
              <option>Checked In</option>
            </select>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <label className="filter-label" for="apptType">Type</label>
            <select className="form-select" id="apptType">
              <option value="">All Types</option>
              <option>New</option>
              <option>Follow-up</option>
            </select>
          </div>

          <div className="col-12 filter-actions">
            <button type="reset" className="btn btn-ghost-tok">Reset</button>
            <button type="submit" className="btn btn-primary-tok">Apply Filter</button>
          </div>
        </form>
      </section>

      {/* <!-- Data Table --> */}
      <section className="table-card">
        <div className="table-responsive custom-scrollbar">
          <table className="table appt-table">
            <thead>
              <tr>
                <th scope="col">Appointment ID</th>
                <th scope="col">Patient</th>
                <th scope="col">Doctor</th>
                <th scope="col">Date &amp; Time</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Payment</th>
                <th scope="col" className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Row 1 --> */}
              <tr>
                <td className="appt-id">APT-000124</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar-initials avatar-primary">MR</div>
                    <div>
                      <span className="patient-name">Md. Rahim</span>
                      <span className="patient-id-small">P-000124</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="doctor-name">Dr. Ahmed Khan</div>
                  <div className="doctor-dept">Cardiology</div>
                </td>
                <td>
                  <div className="appt-date">26 Aug 2026</div>
                  <div className="appt-time">5:20 PM</div>
                </td>
                <td><span className="pill-badge badge-type-new">New</span></td>
                <td><span className="pill-badge badge-status-confirmed">Confirmed</span></td>
                <td><span className="pill-badge badge-payment-paid">Paid</span></td>
                <td className="text-end">
                  <div className="row-actions">
                    <button type="button" className="action-icon-btn" title="View" data-bs-toggle="modal" data-bs-target="#viewModal">
                      <span className="material-symbols-outlined icon-20">visibility</span>
                    </button>
                    <button type="button" className="action-icon-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                      <span className="material-symbols-outlined icon-20">edit</span>
                    </button>
                    <button type="button" className="action-icon-btn action-danger" title="Cancel" data-bs-toggle="modal" data-bs-target="#cancelModal">
                      <span className="material-symbols-outlined icon-20">block</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* <!-- Row 2 --> */}
              <tr>
                <td className="appt-id">APT-000125</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar-initials avatar-secondary">FA</div>
                    <div>
                      <span className="patient-name">Fatema Akter</span>
                      <span className="patient-id-small">P-000125</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="doctor-name">Dr. Sara Rahman</div>
                  <div className="doctor-dept">Gynecology</div>
                </td>
                <td>
                  <div className="appt-date">26 Aug 2026</div>
                  <div className="appt-time">6:00 PM</div>
                </td>
                <td><span className="pill-badge badge-type-followup">Follow-up</span></td>
                <td><span className="pill-badge badge-status-checkedin">Checked In</span></td>
                <td><span className="pill-badge badge-payment-partial">Partial</span></td>
                <td className="text-end">
                  <div className="row-actions">
                    <button type="button" className="action-icon-btn" title="View" data-bs-toggle="modal" data-bs-target="#viewModal">
                      <span className="material-symbols-outlined icon-20">visibility</span>
                    </button>
                    <button type="button" className="action-icon-btn" title="Edit" data-bs-toggle="modal" data-bs-target="#editModal">
                      <span className="material-symbols-outlined icon-20">edit</span>
                    </button>
                    <button type="button" className="action-icon-btn action-danger" title="Cancel" data-bs-toggle="modal" data-bs-target="#cancelModal">
                      <span className="material-symbols-outlined icon-20">block</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Pagination --> */}
        <div className="table-footer">
          <span className="footer-text">Showing 1 to 2 of 2 entries</span>
          <nav aria-label="Appointments pagination">
            <ul className="pagination pagination-custom mb-0">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true" aria-label="Previous">
                  <span className="material-symbols-outlined icon-20">chevron_left</span>
                </a>
              </li>
              <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span className="material-symbols-outlined icon-20">chevron_right</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>


      {/* <!-- ===================== View Modal ===================== --> */}
      <div className="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header-tok">
              <div>
                <h2 className="modal-title-tok" id="viewModalLabel">Appointment Overview</h2>
                <p className="modal-subtitle-mono">APT-000124</p>
              </div>
              <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="modal-body-tok">
              <div className="row g-3">
                {/* <!-- Left Col --> */}
                <div className="col-12 col-md-8">
                  <div className="d-flex flex-column gap-3">
                    {/* <!-- Patient Info --> */}
                    <div className="info-panel">
                      <h3 className="info-panel-title">
                        <span className="material-symbols-outlined icon-20 text-primary-tok">person</span>
                        Patient Information
                      </h3>
                      <div className="d-flex align-items-start gap-3 mb-3">
                        <div className="avatar-initials avatar-primary size-lg">MR</div>
                        <div>
                          <div className="fw-medium text-body-lg">Md. Rahim</div>
                          <div className="patient-id-small">P-000124</div>
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-6">
                          <span className="info-field-label">Gender</span>
                          <span className="info-field-value">Male</span>
                        </div>
                        <div className="col-6">
                          <span className="info-field-label">DOB (Age)</span>
                          <span className="info-field-value">12 Jan 1980 (46)</span>
                        </div>
                        <div className="col-6">
                          <span className="info-field-label">Phone</span>
                          <span className="info-field-value">+1 234 567 8900</span>
                        </div>
                        <div className="col-6">
                          <span className="info-field-label">Address</span>
                          <span className="info-field-value">123 Health Ave, NY</span>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Visit Info --> */}
                    <div className="info-panel">
                      <h3 className="info-panel-title">
                        <span className="material-symbols-outlined icon-20 text-primary-tok">stethoscope</span>
                        Visit Details
                      </h3>
                      <div className="row g-3 mb-3">
                        <div className="col-6">
                          <span className="info-field-label">Doctor</span>
                          <span className="info-field-value d-block fw-medium">Dr. Ahmed Khan</span>
                          <span className="doctor-dept">Cardiology, Chamber 204</span>
                        </div>
                        <div className="col-6">
                          <span className="info-field-label">Schedule</span>
                          <span className="info-field-value d-block">26 Aug 2026, 5:20 PM</span>
                          <span className="pill-badge pill-sm badge-type-new mt-1">New Visit</span>
                        </div>
                      </div>
                      <div className="reason-box">
                        <span className="info-field-label">Reason for Visit</span>
                        <p className="info-field-value mb-0">Patient complains of mild chest pain and shortness of breath after physical exertion.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Right Col --> */}
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column gap-3">
                    {/* <!-- Timeline --> */}
                    <div className="info-panel">
                      <h3 className="info-panel-title">Status Timeline</h3>
                      <div className="timeline">
                        <div className="timeline-item">
                          <span className="timeline-dot"></span>
                          <div className="timeline-label">Confirmed</div>
                          <div className="timeline-time">25 Aug, 10:00 AM</div>
                        </div>
                        <div className="timeline-item">
                          <span className="timeline-dot pending"></span>
                          <div className="timeline-label muted">Booked</div>
                          <div className="timeline-time muted">24 Aug, 2:15 PM</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Payment --> */}
                    <div className="info-panel">
                      <h3 className="info-panel-title">
                        <span className="material-symbols-outlined icon-20 text-primary-tok">payments</span>
                        Payment
                      </h3>
                      <div className="payment-row">
                        <span className="label">Consultation Fee</span>
                        <span className="value">$150.00</span>
                      </div>
                      <div className="payment-status-row">
                        <span className="payment-status-label">Status</span>
                        <span className="pill-badge badge-payment-paid">Paid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer-tok">
              <button type="button" className="btn btn-outline-tok" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ===================== Edit / Reschedule Modal ===================== --> */}
      <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header-tok">
              <div>
                <h2 className="modal-title-tok" id="editModalLabel">Edit / Reschedule</h2>
                <p className="modal-subtitle-mono">APT-000124</p>
              </div>
              <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="modal-body-tok">
              <div className="d-flex flex-column gap-4">
                {/* <!-- Patient read-only strip --> */}
                <div className="readonly-strip">
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar-initials avatar-primary size-md">MR</div>
                    <div>
                      <div className="patient-name">Md. Rahim</div>
                      <div className="patient-id-small">P-000124 &bull; +1 234 567 8900</div>
                    </div>
                  </div>
                  <span className="readonly-tag">Read Only</span>
                </div>

                <form>
                  <div className="row g-4">
                    {/* <!-- Doctor & Date --> */}
                    <div className="col-12 col-md-6 d-flex flex-column gap-3">
                      <div>
                        <label className="filter-label" for="editDoctor">Attending Doctor <span className="required-mark">*</span></label>
                        <select className="form-select" id="editDoctor">
                          <option>Dr. Ahmed Khan (Cardiology)</option>
                          <option>Dr. Sara Rahman (Gynecology)</option>
                        </select>
                      </div>
                      <div>
                        <label className="filter-label" for="editDate">Date <span className="required-mark">*</span></label>
                        <input type="date" className="form-control" id="editDate" value="2026-08-26"/>
                      </div>
                    </div>

                    {/* <!-- Time Slots --> */}
                    <div className="col-12 col-md-6">
                      <label className="filter-label">Available Slots (26 Aug)</label>
                      <div className="slot-grid">
                        <button type="button" className="slot-btn">5:00 PM</button>
                        <button type="button" className="slot-btn selected">5:20 PM</button>
                        <button type="button" className="slot-btn">5:40 PM</button>
                        <button type="button" className="slot-btn unavailable" disabled>6:00 PM</button>
                        <button type="button" className="slot-btn">6:20 PM</button>
                        <button type="button" className="slot-btn">6:40 PM</button>
                      </div>
                    </div>

                    <div className="col-12 border-top pt-3 d-flex flex-column gap-3">
                      <div>
                        <label className="filter-label" for="editReason">Reason for Visit</label>
                        <textarea className="form-control" id="editReason" rows="2">Chest pain</textarea>
                      </div>
                      <div>
                        <label className="filter-label" for="editNote">Receptionist Note (Internal)</label>
                        <textarea className="form-control" id="editNote" rows="2" placeholder="Add any private notes here..."></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="edit-modal-footer">
              <div className="payment-status-inline">
                <span className="material-symbols-outlined icon-16 text-tertiary-tok">check_circle</span>
                Payment Status: Paid
              </div>
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-ghost-tok" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary-tok">Save &amp; Reschedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ===================== Cancel Confirmation Modal ===================== --> */}
      <div className="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="cancelModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content cancel-modal-content">
            <div className="cancel-body">
              <div className="warning-icon-circle">
                <span className="material-symbols-outlined icon-28">warning</span>
              </div>
              <div>
                <h2 id="cancelModalLabel">Cancel Appointment?</h2>
                <p>Are you sure you want to cancel the appointment for <strong className="text-on-background-tok">Md. Rahim</strong> with Dr. Ahmed Khan on 26 Aug 2026?</p>
              </div>
              <div className="cancel-reason-field">
                <label className="filter-label" for="cancelReason">Cancellation Reason <span className="required-mark">*</span></label>
                <textarea className="form-control form-control-error" id="cancelReason" rows="2" placeholder="Required..."></textarea>
              </div>
            </div>
            <div className="cancel-footer">
              <button type="button" className="btn btn-outline-tok" data-bs-dismiss="modal">Keep Appointment</button>
              <button type="button" className="btn btn-danger-tok">Cancel Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
