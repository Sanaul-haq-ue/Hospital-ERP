import "../../assets/css/AppointmentCreate.css"

export default function AppointmentCreate() {
  return (
    <>
      <div className="appointment-page">
        <div className="appointment-card">

          {/* <!-- Header --> */}
          <div className="appointment-header">
            <h1 className="appointment-title">Create Appointment</h1>
            <p className="appointment-subtitle">Schedule a new appointment for an existing patient</p>
          </div>

          {/* <!-- Body --> */}
          <div className="appointment-body d-flex flex-column gap-4">

            {/* <!-- Section 1 & 2 --> */}
            <div className="row g-4">
              {/* <!-- Section 1: Patient Selection --> */}
              <div className="col-12 col-md-6">
                <h2 className="section-label">1. Patient Selection</h2>

                <div className="input-icon-wrap mb-3">
                  <span className="material-symbols-outlined icon-start">search</span>
                  <input type="text" className="form-control has-icon-start" placeholder="Search by patient ID, name or phone..." />
                </div>

                <div className="person-card">
                  <div className="d-flex align-items-center gap-3">
                    <img className="person-avatar" alt="Patient Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByd33Misbgelp_dBgXmXfospApACc5k2gQqyhR-SmCOmYrUCEQuOVzMA1_mdpRK-P7QtlcvQlr8bwVA8tJK9GYo96tFsg8Le2rMbJ8iw1SMw7m9Av7clRPmCapzkwxoI6BTbsF32mHG02Bta8QxuGOuu8w7oJ4_wyPBHZpNSeTDm9Pd-mblAys5w6p1xuPXZ3zp8cI5b7E7IBFFZKORhgH4RNVzMWAqbsMUIVzvc23TV8X5TWaoHo2" />
                    <div>
                      <p className="person-name">Md. Rahim <span className="person-id">(P-000124)</span></p>
                      <div className="person-meta">
                        <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined">male</span> Male</span>
                        <span className="person-meta-dot"></span>
                        <span className="d-flex align-items-center gap-1"><span className="material-symbols-outlined">call</span> 01711-XXXXXX</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-change">Change</button>
                </div>
              </div>

              {/* <!-- Section 2: Doctor Selection --> */}
              <div className="col-12 col-md-6">
                <h2 className="section-label">2. Doctor Selection</h2>

                <div className="input-icon-wrap mb-3">
                  <select className="form-select has-icon-end">
                    <option>Dr. Ahmed Khan (Cardiology)</option>
                    <option>Dr. Sarah Rahman (Pediatrics)</option>
                  </select>
                  <span className="material-symbols-outlined icon-end">expand_more</span>
                </div>

                <div className="person-card doctor-card">
                  <img className="person-avatar lg" alt="Doctor Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWxetGyayJ6cGS4X29C1jx4A2c26PldqxO6-pEciXbcewIgH3IbxR2wO-wlJGV8RGxPPr-r8K-uWqFb_OGNaqiOI_Xz4hRm7CnimgL1CULYRFh_VbSHV3vIA2wDAQbP0Fw0wr7mHDrSlndOF8xcCFcICGpMcZzW7ioLhbd5Tqw_L-0rHivTZVMNAKRBZ7utJ6cMU3L6J-q6g5QaHl-vx-9NUXhIYWIcc1vCkuA4DxOugZ6gu2aoAxS" />
                  <div className="flex-fill">
                    <p className="person-name">Dr. Ahmed Khan</p>
                    <p className="doctor-qualification">MBBS, FCPS (Cardiology), MD</p>
                    <div className="doctor-fee-tag">Fee: &#2547;800</div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="section-divider" />

            {/* <!-- Section 3 & 4 --> */}
            <div className="row g-4">
              {/* <!-- Section 3: Schedule Date --> */}
              <div className="col-12 col-lg-4">
                <h2 className="section-label">3. Schedule Date</h2>

                <div className="input-icon-wrap">
                  <span className="material-symbols-outlined icon-start">calendar_month</span>
                  <input type="text" className="form-control has-icon-start" readonly value="26 August 2026" />
                </div>
                <p className="availability-note">
                  <span className="material-symbols-outlined">check_circle</span>
                  Doctor is available on this date
                </p>
              </div>

              {/* <!-- Section 4: Available Time --> */}
              <div className="col-12 col-lg-8">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h2 className="section-label mb-0">4. Available Time</h2>
                  <div className="slot-legend">
                    <span className="slot-legend-item"><span className="legend-dot available"></span> Available</span>
                    <span className="slot-legend-item"><span className="legend-dot selected"></span> Selected</span>
                    <span className="slot-legend-item"><span className="legend-dot booked"></span> Booked</span>
                  </div>
                </div>

                <div className="time-slot-grid">
                  <button type="button" className="time-slot-btn">5:00 PM</button>
                  <button type="button" className="time-slot-btn is-selected">5:20 PM</button>
                  <button type="button" className="time-slot-btn">5:40 PM</button>
                  <button type="button" className="time-slot-btn is-booked" disabled>6:00 PM</button>
                  <button type="button" className="time-slot-btn">6:20 PM</button>
                  <button type="button" className="time-slot-btn is-booked" disabled>6:40 PM</button>
                  <button type="button" className="time-slot-btn">7:00 PM</button>
                  <button type="button" className="time-slot-btn">7:20 PM</button>
                  <button type="button" className="time-slot-btn">7:40 PM</button>
                </div>
              </div>
            </div>

            <hr className="section-divider" />

            {/* <!-- Section 5 & 6 --> */}
            <div className="row g-4">
              {/* <!-- Section 5: Appointment Details --> */}
              <div className="col-12 col-md-6">
                <h2 className="section-label">5. Appointment Details</h2>

                <div className="mb-3">
                  <label className="field-label" for="appointmentType">Appointment Type</label>
                  <div className="input-icon-wrap">
                    <select className="form-select has-icon-end" id="appointmentType">
                      <option>New Consultation</option>
                      <option>Follow-up</option>
                      <option>Report Review</option>
                    </select>
                    <span className="material-symbols-outlined icon-end">expand_more</span>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="field-label" for="visitReason">Reason for Visit</label>
                  <textarea className="form-control" id="visitReason" rows="2" placeholder="Enter reason for visit..."></textarea>
                </div>

                <div className="mb-3">
                  <label className="field-label" for="internalNote">
                    Internal Note
                    <span className="material-symbols-outlined field-hint-icon" title="Only visible to clinic staff">info</span>
                  </label>
                  <textarea className="form-control" id="internalNote" rows="2" placeholder="Add an internal note..."></textarea>
                </div>
              </div>

              {/* <!-- Section 6: Payment --> */}
              <div className="col-12 col-md-6">
                <div className="payment-summary-card">
                  <h2 className="section-label">6. Payment Summary</h2>

                  <div className="fee-row">
                    <span className="fee-row-label">Consultation Fee</span>
                    <span className="fee-row-value">&#2547;800</span>
                  </div>

                  <div className="mb-3">
                    <label className="field-label" for="paymentStatus">Payment Status</label>
                    <div className="input-icon-wrap">
                      <select className="form-select has-icon-end" id="paymentStatus">
                        <option value="unpaid">Unpaid (Pay at Clinic)</option>
                        <option value="paid">Paid</option>
                      </select>
                      <span className="material-symbols-outlined icon-end">expand_more</span>
                    </div>
                  </div>

                  <div>
                    <label className="field-label" for="paymentMethod">Payment Method</label>
                    <div className="input-icon-wrap">
                      <select className="form-select has-icon-end" id="paymentMethod" disabled>
                        <option>Select Payment Method</option>
                      </select>
                      <span className="material-symbols-outlined icon-end">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Footer --> */}
          <div className="appointment-footer">
            <button type="button" className="btn btn-cancel-link">Cancel</button>
            <button type="button" className="btn btn-brand d-inline-flex align-items-center gap-2">
              Create Appointment
              <span className="material-symbols-outlined icon-18">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
