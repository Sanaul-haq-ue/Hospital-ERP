import "../../assets/css/AppointmentCreate.css"
import { useState } from "react"

const timeSlots = [
  { time: "5:00 PM" },
  { time: "5:20 PM", selected: true },
  { time: "5:40 PM" },
  { time: "6:00 PM", booked: true },
  { time: "6:20 PM" },
  { time: "6:40 PM", booked: true },
  { time: "7:00 PM" },
  { time: "7:20 PM" },
  { time: "7:40 PM" },
]

export default function AppointmentCreate() {
  const [isAddingPatient, setIsAddingPatient] = useState(false)

  return (
    <main className="appointment-page">
      <header className="appointment-header">
        <div>
          <span className="appointment-eyebrow">APPOINTMENTS / NEW BOOKING</span>
          <h1 className="appointment-title">Create appointment</h1>
          <p className="appointment-subtitle">
            Choose a patient, provider, and time, then add the visit details.
          </p>
        </div>
        <span className="appointment-header-icon material-symbols-outlined" aria-hidden="true">
          event_available
        </span>
      </header>

      <div className="appointment-form-layout">
        <section className="appointment-section">
          <div className="appointment-section-heading">
            <span className="appointment-step">01</span>
            <div>
              <h2>Patient and provider</h2>
              <p>Select who the appointment is for and who they will see.</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <label className="field-label" htmlFor="patientSearch">Patient</label>
              <div className="input-icon-wrap appointment-input-wrap">
                <span className="material-symbols-outlined icon-start" aria-hidden="true">search</span>
                <input
                  id="patientSearch"
                  type="search"
                  className="form-control has-icon-start"
                  placeholder="Search by patient ID, name, or phone"
                />
              </div>
              {!isAddingPatient ? (
                <>
                  <div className="person-card">
                    <img
                      className="person-avatar"
                      alt=""
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuByd33Misbgelp_dBgXmXfospApACc5k2gQqyhR-SmCOmYrUCEQuOVzMA1_mdpRK-P7QtlcvQlr8bwVA8tJK9GYo96tFsg8Le2rMbJ8iw1SMw7m9Av7clRPmCapzkwxoI6BTbsF32mHG02Bta8QxuGOuu8w7oJ4_wyPBHZpNSeTDm9Pd-mblAys5w6p1xuPXZ3zp8cI5b7E7IBFFZKORhgH4RNVzMWAqbsMUIVzvc23TV8X5TWaoHo2"
                    />
                    <div className="person-card-details">
                      <p className="person-name">Md. Rahim <span className="person-id">P-000124</span></p>
                      <p className="person-meta">Male <span aria-hidden="true">·</span> 01711-XXXXXX</p>
                    </div>
                    <button type="button" className="btn-change">Change</button>
                  </div>
                  <div className="patient-add-prompt">
                    <span>Can’t find this patient?</span>
                    <button type="button" onClick={() => setIsAddingPatient(true)}>
                      <span className="material-symbols-outlined" aria-hidden="true">person_add</span>
                      Add new patient
                    </button>
                  </div>
                </>
              ) : (
                <div className="inline-patient-form">
                  <div className="inline-patient-form-heading">
                    <div>
                      <h3>New patient details</h3>
                      <p>Add the basic information, then continue with this appointment.</p>
                    </div>
                    <button type="button" className="patient-back-link" onClick={() => setIsAddingPatient(false)}>
                      Back to search
                    </button>
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="field-label" htmlFor="newPatientName">Full name <span className="required-mark">*</span></label>
                      <input id="newPatientName" className="form-control" type="text" placeholder="Enter patient’s full name" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="field-label" htmlFor="newPatientPhone">Phone number <span className="required-mark">*</span></label>
                      <input id="newPatientPhone" className="form-control" type="tel" placeholder="01XXXXXXXXX" required />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="field-label" htmlFor="newPatientGender">Gender <span className="field-optional">Optional</span></label>
                      <select id="newPatientGender" className="form-select" defaultValue="">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="field-label" htmlFor="newPatientDob">Date of birth <span className="field-optional">Optional</span></label>
                      <input id="newPatientDob" className="form-control" type="date" />
                    </div>
                    <div className="col-12">
                      <label className="field-label" htmlFor="newPatientEmail">Email <span className="field-optional">Optional</span></label>
                      <input id="newPatientEmail" className="form-control" type="email" placeholder="patient@example.com" />
                    </div>
                    <div className="col-12 inline-patient-actions">
                      <span className="inline-form-hint"><span className="required-mark">*</span> Required to register a patient</span>
                      <button type="button" className="btn-brand d-inline-flex align-items-center gap-2">
                        Save and select patient
                        <span className="material-symbols-outlined icon-18" aria-hidden="true">check</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-12 col-lg-6">
              <label className="field-label" htmlFor="providerSelect">Provider</label>
              <div className="input-icon-wrap appointment-input-wrap">
                <select className="form-select has-icon-end" id="providerSelect" defaultValue="ahmed">
                  <option value="ahmed">Dr. Ahmed Khan · Cardiology</option>
                  <option value="sarah">Dr. Sarah Rahman · Pediatrics</option>
                </select>
                <span className="material-symbols-outlined icon-end" aria-hidden="true">expand_more</span>
              </div>
              <div className="person-card provider-card">
                <span className="provider-avatar material-symbols-outlined" aria-hidden="true">stethoscope</span>
                <div className="person-card-details">
                  <p className="person-name">Dr. Ahmed Khan</p>
                  <p className="person-meta">MBBS, FCPS · Cardiology</p>
                </div>
                <span className="provider-fee">৳800</span>
              </div>
            </div>
          </div>
        </section>

        <section className="appointment-section">
          <div className="appointment-section-heading">
            <span className="appointment-step">02</span>
            <div>
              <h2>Date and time</h2>
              <p>Choose an appointment date and an available time slot.</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <label className="field-label" htmlFor="appointmentDate">Appointment date</label>
              <div className="input-icon-wrap appointment-input-wrap">
                <span className="material-symbols-outlined icon-start" aria-hidden="true">calendar_month</span>
                <input id="appointmentDate" type="date" className="form-control has-icon-start" />
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="slot-heading-row">
                <span className="field-label">Available time</span>
                <span className="slot-day-label">Afternoon clinic</span>
              </div>
              <div className="time-slot-grid">
                {timeSlots.map(({ time, selected, booked }) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot-btn${selected ? " is-selected" : ""}${booked ? " is-booked" : ""}`}
                    disabled={booked}
                    aria-pressed={Boolean(selected)}
                  >
                    {time}
                    {booked && <span className="slot-booked-label">Booked</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="appointment-section">
          <div className="appointment-section-heading">
            <span className="appointment-step">03</span>
            <div>
              <h2>Visit details</h2>
              <p>Add the reason for the visit and any helpful staff notes.</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <label className="field-label" htmlFor="appointmentType">Visit type</label>
              <div className="input-icon-wrap appointment-input-wrap">
                <select className="form-select has-icon-end" id="appointmentType" defaultValue="new">
                  <option value="new">New consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="report-review">Report review</option>
                </select>
                <span className="material-symbols-outlined icon-end" aria-hidden="true">expand_more</span>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <label className="field-label" htmlFor="visitReason">Reason for visit</label>
              <textarea
                className="form-control"
                id="visitReason"
                rows="2"
                placeholder="Briefly describe the reason for this appointment"
              />
            </div>
            <div className="col-12">
              <label className="field-label" htmlFor="internalNote">
                Staff note <span className="field-optional">Optional · visible to clinic staff</span>
              </label>
              <textarea
                className="form-control"
                id="internalNote"
                rows="2"
                placeholder="Add any details the clinic team should know"
              />
            </div>
          </div>
        </section>
      </div>

      <footer className="appointment-footer">
        <button type="button" className="btn-cancel-link">Cancel</button>
        <button type="button" className="btn-brand d-inline-flex align-items-center gap-2">
          Create appointment
          <span className="material-symbols-outlined icon-18" aria-hidden="true">arrow_forward</span>
        </button>
      </footer>
    </main>
  )
}
