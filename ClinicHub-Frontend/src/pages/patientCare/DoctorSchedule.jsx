import "../../assets/css/DoctorSchedule.css"

export default function DoctorSchedule() {
    return (
        <>
            <div classNameName="container-fluid px-0">

                <div className="page-wrap">

                    {/* <!-- Header Section --> */}
                    <div className="page-topbar">
                        <div>
                            <h2 className="page-title">Doctor Schedule</h2>
                            <p className="page-subtitle">Manage doctor working hours, appointment availability, and schedule exceptions.</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button type="button" className="btn theme-toggle-btn d-inline-flex align-items-center gap-1" id="themeToggleBtn" aria-label="Toggle dark mode">
                                <span className="material-symbols-outlined" id="themeToggleIcon">dark_mode</span>
                            </button>
                            <button type="button" className="btn btn-brand d-inline-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#addScheduleModal">
                                <span className="material-symbols-outlined icon-18">add</span>
                                Add Schedule
                            </button>
                        </div>
                    </div>

                    {/* <!-- Summary Cards --> */}
                    <div className="row g-3 mb-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="summary-card">
                                <div className="summary-icon"><span className="material-symbols-outlined" data-weight="fill">medical_services</span></div>
                                <div>
                                    <p className="summary-label">Total Doctors</p>
                                    <p className="summary-value">42</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="summary-card">
                                <div className="summary-icon icon-secondary"><span className="material-symbols-outlined" data-weight="fill">event_available</span></div>
                                <div>
                                    <p className="summary-label">Active Schedules</p>
                                    <p className="summary-value">128</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="summary-card">
                                <div className="summary-icon icon-tertiary"><span className="material-symbols-outlined" data-weight="fill">stethoscope</span></div>
                                <div>
                                    <p className="summary-label">Today's Available</p>
                                    <p className="summary-value">18</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="summary-card">
                                <div className="summary-icon"><span className="material-symbols-outlined" data-weight="fill">event_upcoming</span></div>
                                <div>
                                    <p className="summary-label">Available Slots (Today)</p>
                                    <p className="summary-value">142</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Filters & Controls --> */}
                    <div className="filter-card mb-4">
                        <div className="row g-3 align-items-end">
                            <div className="col-12 col-md-4">
                                <label className="filter-label" for="searchDoctor">Search Doctor</label>
                                <div className="filter-input-wrap">
                                    <span className="material-symbols-outlined">search</span>
                                    <input type="text" className="form-control" id="searchDoctor" placeholder="Name or ID" />
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <label className="filter-label" for="departmentSelect">Department</label>
                                <select className="form-select" id="departmentSelect">
                                    <option>All Departments</option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Pediatrics</option>
                                </select>
                            </div>
                            <div className="col-6 col-md-3">
                                <label className="filter-label" for="daySelect">Day</label>
                                <select className="form-select" id="daySelect">
                                    <option>All Days</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="d-flex gap-2">
                                    <button type="button" className="btn btn-outline-brand flex-fill">Reset</button>
                                    <button type="button" className="btn btn-brand flex-fill">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Content Tabs --> */}
                    <ul className="nav nav-tabs schedule-tabs mb-3">
                        <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#mainScheduleTab" type="button">Main Schedule</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#exceptionsTab" type="button">Exceptions</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#availabilityTab" type="button">Availability Preview</button>
                        </li>
                    </ul>

                    <div className="tab-content">
                        {/* <!-- Main Schedule Tab --> */}
                        <div className="tab-pane fade show active" id="mainScheduleTab">
                            <div className="table-card">
                                <div className="table-responsive">
                                    <table className="schedule-table">
                                        <thead>
                                            <tr>
                                                <th>Doctor</th>
                                                <th>Day &amp; Time</th>
                                                <th>Details</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {/* <!-- Row 1 --> */}
                                            <tr>
                                                <td>
                                                    <div className="doctor-cell">
                                                        <img className="doctor-avatar" alt="Dr. Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI_Gv_pBD1_3RTm8ao2o8N92-_YaqVqt1KVC9I0J-Vc7ept9DK9PhWJ0-igXbGWzFWYSxyABfpKR8bi3iLivBkvL1F2w9W_O4MSjkUMGdf3VCPSJGRlX44bFQTUo6DtlXlt8rFkGTMQFiG_lPEa-egUHCjtEwjcJIzSmrjHybjQIKjZ4pcLH9yVneVT5CthfEuuVI4nlzj53_kQ3jijIEnt9AKE_VLKkqTQoM3vZb49dWGF8-h0q3E" />
                                                        <div>
                                                            <p className="doctor-name">Dr. Sarah Jenkins</p>
                                                            <p className="doctor-dept">Cardiology</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="day-time-list">
                                                        <div className="day-time-row">
                                                            <span className="day-pill-sm">Mon</span>
                                                            <span className="time-mono">09:00 - 17:00</span>
                                                        </div>
                                                        <div className="day-time-row">
                                                            <span className="day-pill-sm">Wed</span>
                                                            <span className="time-mono">09:00 - 13:00</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul className="detail-list">
                                                        <li><span className="material-symbols-outlined">timer</span> 30m / slot</li>
                                                        <li><span className="material-symbols-outlined">meeting_room</span> Room 102</li>
                                                        <li><span className="material-symbols-outlined">video_camera_front</span> Hybrid</li>
                                                    </ul>
                                                </td>
                                                <td><span className="status-badge status-active">Active</span></td>
                                                <td>
                                                    <div className="row-actions">
                                                        <button type="button" className="row-action-btn brand" title="View" data-bs-toggle="modal" data-bs-target="#detailsModal">
                                                            <span className="material-symbols-outlined icon-18">visibility</span>
                                                        </button>
                                                        <button type="button" className="row-action-btn brand" title="Edit" data-bs-toggle="modal" data-bs-target="#addScheduleModal">
                                                            <span className="material-symbols-outlined icon-18">edit</span>
                                                        </button>
                                                        <button type="button" className="row-action-btn danger" title="Deactivate">
                                                            <span className="material-symbols-outlined icon-18">block</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Row 2 --> */}
                                            <tr>
                                                <td>
                                                    <div className="doctor-cell">
                                                        <img className="doctor-avatar" alt="Dr. Marcus Reyes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGsFTTiXlmUbRHpmQy3nZu85mL0xyyobO_QN9wc4fndTx8n8VVSJjoMQjCLfvt6ruXi9dIBsqGN0IPSOScNSNd8IezO8k6rEljt5w6HAcgRxfpAeKVN1UwBNLKpoqIyA_uGip48uI20X-KqtR9-KDubYIzaRrVNq4_jgBe7a-_eJLd0ftGUDS98FER0oqx4CWeNSCtXC5OE1pvOfHMqsQxJH0G_v--ddLejLqMejl0tF0LhC4EECc5" />
                                                        <div>
                                                            <p className="doctor-name">Dr. Marcus Reyes</p>
                                                            <p className="doctor-dept">Neurology</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="day-time-list">
                                                        <div className="day-time-row">
                                                            <span className="day-pill-sm">Tue</span>
                                                            <span className="time-mono">10:00 - 16:00</span>
                                                        </div>
                                                        <div className="day-time-row">
                                                            <span className="day-pill-sm">Thu</span>
                                                            <span className="time-mono">10:00 - 16:00</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul className="detail-list">
                                                        <li><span className="material-symbols-outlined">timer</span> 20m / slot</li>
                                                        <li><span className="material-symbols-outlined">meeting_room</span> Room 210</li>
                                                        <li><span className="material-symbols-outlined">person</span> In Person</li>
                                                    </ul>
                                                </td>
                                                <td><span className="status-badge status-active">Active</span></td>
                                                <td>
                                                    <div className="row-actions">
                                                        <button type="button" className="row-action-btn brand" title="View" data-bs-toggle="modal" data-bs-target="#detailsModal">
                                                            <span className="material-symbols-outlined icon-18">visibility</span>
                                                        </button>
                                                        <button type="button" className="row-action-btn brand" title="Edit" data-bs-toggle="modal" data-bs-target="#addScheduleModal">
                                                            <span className="material-symbols-outlined icon-18">edit</span>
                                                        </button>
                                                        <button type="button" className="row-action-btn danger" title="Deactivate">
                                                            <span className="material-symbols-outlined icon-18">block</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Row 3 --> */}
                                            <tr>
                                                <td>
                                                    <div className="doctor-cell">
                                                        <img className="doctor-avatar" alt="Dr. Amelia Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxVlxHTLAJGyKjEY32lLxIVfwAJD_iZqAw1W26Xvm7HvgtzZ1gHUk9egyBTNOcEP4i7unvKt_NgHGiBhBAdjmDjRTTf5o7UHrTXPkDss5lEM5K-y7axiSSaF2SgYAgqBKuaxTymXawa_ibqDVLku7GBxLfYkU3qQyiDiX7Fs2OBbqTEZJdSdNoUfhGgKBaCZRWiao1k0rpJ5q7PT9aW8Z0FhmpAFk75Wo5_e9Wb7Rhoh9zdgmLpG9b" />
                                                        <div>
                                                            <p className="doctor-name">Dr. Amelia Chen</p>
                                                            <p className="doctor-dept">Pediatrics</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="day-time-list">
                                                        <div className="day-time-row">
                                                            <span className="day-pill-sm">Fri</span>
                                                            <span className="time-mono">08:00 - 12:00</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul className="detail-list">
                                                        <li><span className="material-symbols-outlined">timer</span> 15m / slot</li>
                                                        <li><span className="material-symbols-outlined">meeting_room</span> Room 118</li>
                                                        <li><span className="material-symbols-outlined">video_camera_front</span> Online</li>
                                                    </ul>
                                                </td>
                                                <td><span className="status-badge status-inactive">Inactive</span></td>
                                                <td>
                                                    <div className="row-actions">
                                                        <button type="button" className="row-action-btn brand" title="View" data-bs-toggle="modal" data-bs-target="#detailsModal">
                                                            <span className="material-symbols-outlined icon-18">visibility</span>
                                                        </button>
                                                        <button type="button" className="row-action-btn brand" title="Edit" data-bs-toggle="modal" data-bs-target="#addScheduleModal">
                                                            <span className="material-symbols-outlined icon-18">edit</span>
                                                        </button>
                                                        <button type="button" className="row-action-btn danger" title="Activate">
                                                            <span className="material-symbols-outlined icon-18">block</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Exceptions Tab (placeholder content) --> */}
                        <div className="tab-pane fade" id="exceptionsTab">
                            <div className="table-card p-4 text-center text-body-sm text-on-surface-variant-tok">
                                No schedule exceptions recorded for the selected filters.
                            </div>
                        </div>

                        {/* <!-- Availability Preview Tab (placeholder content) --> */}
                        <div className="tab-pane fade" id="availabilityTab">
                            <div className="table-card p-4 text-center text-body-sm text-on-surface-variant-tok">
                                Select a doctor to preview their generated availability slots.
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* <!-- ===================== Add / Edit Doctor Schedule Modal ===================== --> */}
            <div className="modal fade" id="addScheduleModal" tabindex="-1" aria-labelledby="addScheduleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="addScheduleModalLabel">Add Doctor Schedule</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column gap-4">

                            {/* <!-- Doctor Selection --> */}
                            <div>
                                <label className="filter-label" for="doctorSearch">Select Doctor <span className="text-error-tok">*</span></label>
                                <div className="filter-input-wrap">
                                    <span className="material-symbols-outlined">search</span>
                                    <input type="text" className="form-control" id="doctorSearch" placeholder="Search doctor by name or specialty..." />
                                </div>
                            </div>

                            <hr className="text-outline-tok"/>

                                <div className="row g-4">
                                    {/* <!-- Left Column: Type & Days --> */}
                                    <div className="col-12 col-lg-5 d-flex flex-column gap-4">

                                        {/* <!-- Schedule Type Toggle --> */}
                                        <div>
                                            <label className="filter-label">Schedule Type</label>
                                            <div className="type-toggle">
                                                <input type="radio" className="btn-check" name="scheduleType" id="typeWeekly" autocomplete="off" checked />
                                                <label className="type-toggle-btn" for="typeWeekly">Weekly Schedule</label>
                                                <input type="radio" className="btn-check" name="scheduleType" id="typeSpecific" autocomplete="off" />
                                                <label className="type-toggle-btn" for="typeSpecific">Specific Date</label>
                                            </div>
                                        </div>

                                        {/* <!-- Days Selection --> */}
                                        <div className="days-card">
                                            <label className="filter-label mb-2">Select Days</label>
                                            <div className="day-pills">
                                                <input type="checkbox" className="btn-check" id="dayMon" autocomplete="off" checked />
                                                <label className="day-pill-toggle" for="dayMon">Mon</label>

                                                <input type="checkbox" className="btn-check" id="dayTue" autocomplete="off" checked />
                                                <label className="day-pill-toggle" for="dayTue">Tue</label>

                                                <input type="checkbox" className="btn-check" id="dayWed" autocomplete="off" />
                                                <label className="day-pill-toggle" for="dayWed">Wed</label>

                                                <input type="checkbox" className="btn-check" id="dayThu" autocomplete="off" />
                                                <label className="day-pill-toggle" for="dayThu">Thu</label>

                                                <input type="checkbox" className="btn-check" id="dayFri" autocomplete="off" />
                                                <label className="day-pill-toggle" for="dayFri">Fri</label>

                                                <input type="checkbox" className="btn-check" id="daySat" autocomplete="off" />
                                                <label className="day-pill-toggle" for="daySat">Sat</label>

                                                <input type="checkbox" className="btn-check" id="daySun" autocomplete="off" />
                                                <label className="day-pill-toggle" for="daySun">Sun</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Right Column: Session Configuration --> */}
                                    <div className="col-12 col-lg-7 d-flex flex-column gap-3">
                                        <div className="session-card">
                                            <button type="button" className="session-remove-btn" title="Remove session">
                                                <span className="material-symbols-outlined icon-20">delete</span>
                                            </button>
                                            <h3>Session 1 (Morning)</h3>
                                            <div className="row g-3 mb-3">
                                                <div className="col-12 col-sm-6">
                                                    <label className="filter-label" for="startTime1">Start Time</label>
                                                    <input type="time" className="form-control" id="startTime1" value="09:00" />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <label className="filter-label" for="endTime1">End Time</label>
                                                    <input type="time" className="form-control" id="endTime1" value="13:00" />
                                                </div>
                                            </div>
                                            <div className="row g-3">
                                                <div className="col-12 col-sm-6">
                                                    <label className="filter-label" for="duration1">Duration</label>
                                                    <select className="form-select" id="duration1">
                                                        <option>15 Minutes</option>
                                                        <option>20 Minutes</option>
                                                        <option selected>30 Minutes</option>
                                                        <option>60 Minutes</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <label className="filter-label" for="consultType1">Consultation Type</label>
                                                    <select className="form-select" id="consultType1">
                                                        <option selected>In Person</option>
                                                        <option>Online Video</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="button" className="add-session-btn">
                                            <span className="material-symbols-outlined">add</span>
                                            Add Another Session
                                        </button>
                                    </div>
                                </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-brand" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-brand">Save Schedule</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ===================== Doctor Schedule Details Modal ===================== --> */}
            <div className="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                    <div className="modal-content">

                        {/* <!-- Header: Doctor Profile --> */}
                        <div className="modal-header doctor-profile-header">
                            <div className="d-flex align-items-center gap-3">
                                <img className="doctor-profile-avatar" alt="Dr. Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGsFTTiXlmUbRHpmQy3nZu85mL0xyyobO_QN9wc4fndTx8n8VVSJjoMQjCLfvt6ruXi9dIBsqGN0IPSOScNSNd8IezO8k6rEljt5w6HAcgRxfpAeKVN1UwBNLKpoqIyA_uGip48uI20X-KqtR9-KDubYIzaRrVNq4_jgBe7a-_eJLd0ftGUDS98FER0oqx4CWeNSCtXC5OE1pvOfHMqsQxJH0G_v--ddLejLqMejl0tF0LhC4EECc5" />
                                <div>
                                    <h2 className="doctor-profile-name" id="detailsModalLabel">Dr. Sarah Jenkins</h2>
                                    <p className="doctor-profile-role">
                                        <span className="material-symbols-outlined icon-16">stethoscope</span>
                                        Senior Cardiologist
                                    </p>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* <!-- Body --> */}
                        <div className="modal-body d-flex flex-column gap-4">

                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <div className="detail-panel">
                                        <div className="detail-panel-header">
                                            <span className="material-symbols-outlined">calendar_month</span>
                                            <h3>Working Schedule</h3>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-row-label">Days</span>
                                            <span className="detail-row-value">Mon, Wed, Fri</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-row-label">Hours</span>
                                            <span className="detail-row-value mono">09:00 AM - 05:00 PM</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-row-label">Break Time</span>
                                            <span className="detail-row-value mono">12:30 PM - 01:30 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="detail-panel">
                                        <div className="detail-panel-header">
                                            <span className="material-symbols-outlined">settings_applications</span>
                                            <h3>Slot Configuration</h3>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-row-label">Slot Duration</span>
                                            <span className="detail-row-value">20 Mins</span>
                                        </div>
                                        <div className="detail-row">
                                            <span className="detail-row-label">Consultation Room</span>
                                            <span className="detail-row-value">Room 302, Wing B</span>
                                        </div>
                                        <div className="detail-row align-items-center">
                                            <span className="detail-row-label">Status</span>
                                            <span className="status-pill-inline">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Slot Preview Timeline --> */}
                            <div>
                                <h3 className="text-headline-sm mb-3">Generated Slots Preview</h3>
                                <div className="slots-panel">
                                    <div className="d-flex flex-wrap gap-2 w-100">
                                        <div className="slot-chip"><span>09:00 AM</span></div>
                                        <div className="slot-chip"><span>09:20 AM</span></div>
                                        <div className="slot-chip"><span>09:40 AM</span></div>
                                        <div className="slot-chip"><span>10:00 AM</span></div>
                                        <div className="slot-chip"><span>10:20 AM</span></div>
                                        <div className="slot-chip"><span>10:40 AM</span></div>
                                        <div className="slot-more"><span className="material-symbols-outlined icon-16">more_horiz</span></div>
                                    </div>

                                    <div className="break-divider">
                                        <div className="rule"></div>
                                        <div className="break-label">
                                            <span className="material-symbols-outlined">restaurant</span>
                                            <span>Break: 12:30 PM - 01:30 PM</span>
                                        </div>
                                        <div className="rule"></div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 w-100">
                                        <div className="slot-chip"><span>01:30 PM</span></div>
                                        <div className="slot-chip"><span>01:50 PM</span></div>
                                        <div className="slot-chip"><span>02:10 PM</span></div>
                                        <div className="slot-more"><span className="material-symbols-outlined icon-16">more_horiz</span></div>
                                        <div className="slot-chip"><span>04:40 PM</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-brand" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-brand d-inline-flex align-items-center gap-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#addScheduleModal">
                                <span className="material-symbols-outlined icon-18">edit</span>
                                Edit Schedule
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
