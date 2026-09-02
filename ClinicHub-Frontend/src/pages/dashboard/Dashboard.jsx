import "../../assets/css/Dashboard.css"

export default function Dashboard() {
  return (
    <>
      <div className="page-title mb-lg">
        <h2>Overview</h2>
        <p>Today's clinical metrics and operational status.</p>
      </div>

      <div className="row g-md">
        {/* <!-- Stat cards --> */}
        <div className="col-12" style={{ marginBottom: '30px' }}>
          <div className="row g-md">
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="top-row">
                  <h3>Total Patients</h3>
                  <div className="stat-icon primary"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>group</span></div>
                </div>
                <div>
                  <p className="stat-value">1,248</p>
                  <p className="stat-sub up"><span className="material-symbols-outlined">trending_up</span> +12% this week</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="top-row">
                  <h3>Appointments Today</h3>
                  <div className="stat-icon secondary"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>event_available</span></div>
                </div>
                <div>
                  <p className="stat-value">42</p>
                  <p className="stat-sub"><span className="text-tertiary-tok fw-medium">8 completed</span>&nbsp;/ 34 pending</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="top-row">
                  <h3>Available Doctors</h3>
                  <div className="stat-icon tertiary"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>stethoscope</span></div>
                </div>
                <div>
                  <p className="stat-value">12</p>
                  <p className="stat-sub">Out of 15 on roster today</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="top-row">
                  <h3>Est. Revenue</h3>
                  <div className="stat-icon neutral"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>payments</span></div>
                </div>
                <div>
                  <p className="stat-value">$8,450</p>
                  <p className="stat-sub down"><span className="material-symbols-outlined">trending_down</span> -2% vs yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Appointment Queue --> */}
        <div className="col-12 col-md-8">
          <div className="panel h-100 d-flex flex-column">
            <div className="panel-head">
              <h3>Appointment Queue</h3>
              <button className="link-btn">View Full Schedule</button>
            </div>
            <div style={{ overflowX: 'auto', flex: 1 }}>
              <table className="appt-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="appt-mono">09:00 AM</td>
                    <td>
                      <div className="d-flex align-items-center gap-sm">
                        <div className="avatar-init blue">JD</div>
                        <span className="fw-medium" style={{ color: 'var(--on-background)' }}>John Doe</span>
                      </div>
                    </td>
                    <td className="text-on-surface-variant-tok">Dr. Smith (Cardiology)</td>
                    <td><span className="badge-status checked-in">Checked In</span></td>
                    <td className="text-end"><button className="table-icon-btn"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>more_horiz</span></button></td>
                  </tr>
                  <tr>
                    <td className="appt-mono">09:30 AM</td>
                    <td>
                      <div className="d-flex align-items-center gap-sm">
                        <div className="avatar-init teal">AS</div>
                        <span className="fw-medium" style={{ color: 'var(--on-background)' }}>Alice Smith</span>
                      </div>
                    </td>
                    <td className="text-on-surface-variant-tok">Dr. Jones (Pediatrics)</td>
                    <td><span className="badge-status waiting">Waiting</span></td>
                    <td className="text-end"><button className="table-icon-btn"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>more_horiz</span></button></td>
                  </tr>
                  <tr>
                    <td className="appt-mono">10:00 AM</td>
                    <td>
                      <div className="d-flex align-items-center gap-sm">
                        <div className="avatar-init red">BW</div>
                        <span className="fw-medium" style={{ color: 'var(--on-background)' }}>Bob Williams</span>
                      </div>
                    </td>
                    <td className="text-on-surface-variant-tok">Dr. Smith (Cardiology)</td>
                    <td><span className="badge-status late">Late</span></td>
                    <td className="text-end"><button className="table-icon-btn"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>more_horiz</span></button></td>
                  </tr>
                  <tr>
                    <td className="appt-mono text-outline-tok">10:30 AM</td>
                    <td className="text-outline-tok fst-italic">Available Slot</td>
                    <td className="text-on-surface-variant-tok">Dr. Jones (Pediatrics)</td>
                    <td><span className="badge-status open">Open</span></td>
                    <td className="text-end"><button className="book-link">Book</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <!-- Right column --> */}
        <div className="col-12 col-md-4 d-flex flex-column gap-lg">
          {/* <!-- Doctor status --> */}
          <div className="panel p-md">
            <div className="d-flex justify-content-between align-items-center mb-md">
              <h3 className="text-headline-sm" style={{ color: 'var(--on-background)', margin: 0 }}>Doctor Status</h3>
              <span className="material-symbols-outlined text-outline-tok">medical_information</span>
            </div>
            <div className="d-flex flex-column gap-sm">
              <div className="doctor-row">
                <div className="d-flex align-items-center gap-sm">
                  <div className="doctor-avatar-wrap">
                    <img className="doctor-avatar" alt="Dr. Smith"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT9pEwmwSvacukYXhMjnoiOYvFszWYBZDIK980_uaBEd5kRiqTuCTVE64Fwi7jQlpGYgPqkOavjtdrRGc_ERnKskbwEY6-0p6o2iCSA3SZm2g-d_NQUazlhdnNbsTdiB8QHwgQbxPquAxVChZIeqHhdxCVUTPCiUybz60rh-CTdq6C0jvzHfr2XFDH1LTJO3YwwmS01MgQhgrJneWpbmxlpBpA_58-PQek61EEg7xFd7T2UdzewbFl" />
                    <div className="status-dot online"></div>
                  </div>
                  <div>
                    <p className="doctor-name">Dr. Smith</p>
                    <p className="doctor-dept">Cardiology</p>
                  </div>
                </div>
                <span className="doctor-status-label">On Call</span>
              </div>
              <div className="doctor-row">
                <div className="d-flex align-items-center gap-sm">
                  <div className="doctor-avatar-wrap">
                    <img className="doctor-avatar" alt="Dr. Jones"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNPVMTAyZfrXTHdwqkz3Fq_X66usZA38pal8nqXwlH_G0niP3OOkntViI3r5O-L2xXS7sm0V-kWQVmUTsyeTOLW7ehTDbDIeWLO4JE3eVo4VyY0U2_LeZ0vV4BA2DqyNqjfU-8kFX8dEY4uLfgOW3c9pyrbFVbp-L6YlAwm3C3tgmgBYybA8DAxD5tMTdjIMmkli-KRD-xoypwmYBv8saLyW1ZdQWnHNy2QsfuaSOXSPjT0pqDaSEX" />
                    <div className="status-dot online"></div>
                  </div>
                  <div>
                    <p className="doctor-name">Dr. Jones</p>
                    <p className="doctor-dept">Pediatrics</p>
                  </div>
                </div>
                <span className="doctor-status-label">On Call</span>
              </div>
              <div className="doctor-row away">
                <div className="d-flex align-items-center gap-sm">
                  <div className="doctor-avatar-wrap">
                    <div className="doctor-avatar-placeholder">MR</div>
                    <div className="status-dot away"></div>
                  </div>
                  <div>
                    <p className="doctor-name">Dr. Rivera</p>
                    <p className="doctor-dept">Neurology</p>
                  </div>
                </div>
                <span className="doctor-status-label away">Away</span>
              </div>
            </div>
          </div>

          {/* <!-- Recent activity --> */}
          <div className="panel p-md flex-fill">
            <h3 className="text-headline-sm mb-md" style={{ color: 'var(--on-background)' }}>Recent Activity</h3>
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-dot blue"></div>
                <p><strong>New Patient Reg:</strong> Sarah Connor</p>
                <p className="time">10 mins ago</p>
              </div>
              <div className="activity-item">
                <div className="activity-dot teal"></div>
                <p><strong>Appt Completed:</strong> John Doe</p>
                <p className="time">25 mins ago</p>
              </div>
              <div className="activity-item">
                <div className="activity-dot red"></div>
                <p><strong>Appt Cancelled:</strong> Emily Chen</p>
                <p className="time">1 hour ago</p>
              </div>
            </div>
            <button className="view-all-btn">View All Activity</button>
          </div>
        </div>
      </div>
    </>
  )
}