import "../../assets/css/UsersManagement.css"

export default function UsersManagement() {
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
            <button type="button" className="theme-toggle-btn" id="theme-toggle" aria-label="Toggle dark mode">
              <span className="material-symbols-outlined" id="theme-toggle-icon" aria-hidden="true">dark_mode</span>
            </button>
            <button type="button" className="btn btn-brand-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">
              <span className="material-symbols-outlined fs-sm" aria-hidden="true">add</span>
              Add User
            </button>
          </div>
        </div>

        {/* <!-- Filter Area --> */}
        <div className="filter-card mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-4">
              <label for="search-users" className="filter-label">Search</label>
              <div className="filter-input-wrap">
                <span className="material-symbols-outlined" aria-hidden="true">search</span>
                <input type="text" className="form-control form-control-brand" id="search-users" placeholder="Name, email, phone..." />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <label for="filter-role" className="filter-label">Role</label>
              <select className="form-select form-select-brand" id="filter-role">
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="receptionist">Receptionist</option>
              </select>
            </div>
            <div className="col-6 col-md-3">
              <label for="filter-status" className="filter-label">Status</label>
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
                <tr>
                  <td className="text-center text-body-sm">1</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgq2JjQAti9nifl7Fx9DsH0wwnYIdvK4bFZzzwqQZKmMkXQFJGG9cRMyi5i6wkZQVhTorrZlnU59zV-lNCeTq9Bj2Bffcr9akrmSAOHrMB97h3vRa6KzXGd0-LRkcq9cVU4IDlfHto43bTI9Tk-8F1-cYXkwVjXoiRqAtYeq2Y4uePT22aHgD3R8jc_A4cUCOwJhUH7SOf0JKzcAUkSsS_QH1wKztvC46CruvDbrwn5NbijKYsnKIk" alt="Sarah Jenkins" className="user-avatar" />
                      <span className="user-name text-truncate" style={{ maxWidth: '150px' }}>Sarah Jenkins</span>
                    </div>
                  </td>
                  <td>
                    <span className="user-email text-truncate d-inline-block" style={{ maxWidth: '180px' }}>sarah.j@clinicherp.com</span>
                    <span className="user-phone">+1 (555) 123-4567</span>
                  </td>
                  <td><span className="badge-role badge-role-admin">Admin</span></td>
                  <td><span className="badge-status badge-status-active"><span className="status-dot"></span>Active</span></td>
                  <td className="last-login-cell">Today, 09:41 AM</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-1">
                      <button type="button" className="btn-icon-ghost" title="View" data-bs-toggle="modal" data-bs-target="#viewUserModal">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                      </button>
                      <button type="button" className="btn-icon-ghost" title="Edit">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* <!-- Row 2: Doctor --> */}
                <tr>
                  <td className="text-center text-body-sm">2</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChRs_lxEL6LwkXdwe3epFt_wLC5ZNOWQ-N_JjSTKgp4-W4tEli_0IR2fGewMhJXHh1FtNhAiiumExEy3aKVkx6QW8sdx67fVa_C-fxnUORt_-wTyoNDiOm3Ao9HMshRa50VU3N7uZ7acqk3NRLlo20smyg6ZsDLWry1NZJ7pawi8nFDhmy2u6DcwiXXn-MJHtLy0RfYLKL1nerah9OqPVoIU88MO8-B4BTVFx4llrluxp271B7Dd7n" alt="Dr. Robert Chen" className="user-avatar" />
                      <span className="user-name text-truncate" style={{ maxWidth: '150px' }}>Dr. Robert Chen</span>
                    </div>
                  </td>
                  <td>
                    <span className="user-email text-truncate d-inline-block" style={{ maxWidth: '180px' }}>rchen@clinicherp.com</span>
                    <span className="user-phone">+1 (555) 987-6543</span>
                  </td>
                  <td><span className="badge-role badge-role-doctor">Doctor</span></td>
                  <td><span className="badge-status badge-status-active"><span className="status-dot"></span>Active</span></td>
                  <td className="last-login-cell">Yesterday, 16:20</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-1">
                      <button type="button" className="btn-icon-ghost" title="View" data-bs-toggle="modal" data-bs-target="#viewUserModal">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                      </button>
                      <button type="button" className="btn-icon-ghost" title="Edit">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                      </button>
                      <button type="button" className="btn-icon-ghost danger" title="Deactivate" data-bs-toggle="modal" data-bs-target="#deactivateUserModal">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">block</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* <!-- Row 3: Receptionist (Inactive) --> */}
                <tr className="row-inactive">
                  <td className="text-center text-body-sm">3</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <span className="user-avatar-fallback">MW</span>
                      <span className="user-name text-truncate" style={{ maxWidth: '150px' }}>Maria Williams</span>
                    </div>
                  </td>
                  <td>
                    <span className="user-email text-truncate d-inline-block" style={{ maxWidth: '180px' }}>mwilliams@clinicherp.com</span>
                    <span className="user-phone">+1 (555) 333-2222</span>
                  </td>
                  <td><span className="badge-role badge-role-receptionist">Receptionist</span></td>
                  <td><span className="badge-status badge-status-inactive"><span className="status-dot"></span>Inactive</span></td>
                  <td className="last-login-cell">Oct 12, 2023</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-1">
                      <button type="button" className="btn-icon-ghost" title="View" data-bs-toggle="modal" data-bs-target="#viewUserModal">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">visibility</span>
                      </button>
                      <button type="button" className="btn-icon-ghost" title="Edit">
                        <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
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
      <div className="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content modal-content-brand">
            <div className="modal-header modal-header-brand">
              <h2 className="modal-title" id="addUserModalLabel">Add New User</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="addUserForm" novalidate>
                <h3 className="section-eyebrow">Basic Information</h3>
                <div className="row g-3 mb-2">
                  <div className="col-12 d-flex align-items-center gap-3 mb-2">
                    <div className="avatar-upload" role="button" tabindex="0" aria-label="Upload profile photo">
                      <span className="material-symbols-outlined" aria-hidden="true">add_a_photo</span>
                    </div>
                    <div>
                      <p className="form-label-brand mb-1">Profile Photo</p>
                      <p className="text-body-sm text-on-surface-variant-tok mb-0">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label for="add-fname" className="form-label form-label-brand">First Name *</label>
                    <input type="text" className="form-control form-select-brand" id="add-fname" required />
                  </div>
                  <div className="col-12 col-md-6">
                    <label for="add-lname" className="form-label form-label-brand">Last Name *</label>
                    <input type="text" className="form-control form-select-brand" id="add-lname" required />
                  </div>
                  <div className="col-12 col-md-6">
                    <label for="add-email" className="form-label form-label-brand">Email Address *</label>
                    <input type="email" className="form-control form-select-brand" id="add-email" required />
                  </div>
                  <div className="col-12 col-md-6">
                    <label for="add-phone" className="form-label form-label-brand">Phone Number</label>
                    <input type="tel" className="form-control form-select-brand" id="add-phone" />
                  </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'var(--outline-variant)' }}/>

                  <h3 className="section-eyebrow">Account Settings</h3>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label for="add-role" className="form-label form-label-brand">System Role *</label>
                      <select className="form-select form-select-brand" id="add-role" required>
                        <option value="" disabled selected>Select a role</option>
                        <option value="admin">Administrator</option>
                        <option value="doctor">Doctor</option>
                        <option value="receptionist">Receptionist</option>
                        <option value="hr">HR</option>
                        <option value="accountant">Accountant</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label for="add-status" className="form-label form-label-brand">Initial Status</label>
                      <select className="form-select form-select-brand" id="add-status">
                        <option value="active" selected>Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label for="add-pass" className="form-label form-label-brand">Temporary Password *</label>
                      <input type="password" className="form-control form-select-brand" id="add-pass" required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label for="add-pass-confirm" className="form-label form-label-brand">Confirm Password *</label>
                      <input type="password" className="form-control form-select-brand" id="add-pass-confirm" required />
                    </div>
                  </div>
              </form>
            </div>
            <div className="modal-footer modal-footer-brand">
              <button type="button" className="btn btn-brand-outline" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-brand-primary" id="submitAddUserBtn">Create User</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- View User Modal (Profile Card Style) --> */}
      <div className="modal fade" id="viewUserModal" tabindex="-1" aria-labelledby="viewUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modal-content-brand overflow-hidden">
            <div className="profile-banner">
              <button type="button" className="btn-close-brand" data-bs-dismiss="modal" aria-label="Close">
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>
            </div>
            <div className="px-4 pb-4 d-flex flex-column align-items-center text-center">
              <div className="profile-avatar-wrap">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKLPT7QbpOpiUJXEgR_SMzj-D2kIdhHBn7wOUkVtT_Awm0CBwxEzGDFEgxxeeB6qPRzGgMwFXThOsEMkg3enMgEAiXi6cnGBIbtwtf78ZIiqsPQwEI8wv6u6W23sHHBe43q_HZhz5qiBnPtXAhIMHT6v__xF5m0vy0SINFZivOl1iE4VFbGJHSRZ1mJF8Zqt6Hf9gsp16z8rMwN_ROqkojACne607kJ9CCiSSITCSFes2jAFX5e8dy" alt="Sarah Jenkins" id="viewUserModalLabel" />
              </div>
              <h2 className="text-headline-sm mt-2 mb-1 text-on-background-tok">Sarah Jenkins</h2>
              <span className="badge-role badge-role-admin mb-3">Administrator</span>

              <div className="w-100 d-flex align-items-center justify-content-center gap-3 mb-3">
                <div className="d-flex flex-column align-items-center">
                  <span className="profile-stat-label">Status</span>
                  <span className="profile-stat-value text-tertiary-tok d-flex align-items-center gap-1">
                    <span className="status-dot" style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--tertiary)', display: 'inline-block' }}></span>Active
                  </span>
                </div>
                <div className="profile-stat-divider"></div>
                <div className="d-flex flex-column align-items-center">
                  <span className="profile-stat-label">Joined</span>
                  <span className="profile-stat-value">Jan 2022</span>
                </div>
              </div>

              <div className="w-100 d-flex flex-column gap-2">
                <div className="profile-info-row">
                  <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                  <div className="text-start">
                    <p className="profile-info-label">Email</p>
                    <p className="profile-info-value">sarah.j@clinicherp.com</p>
                  </div>
                </div>
                <div className="profile-info-row">
                  <span className="material-symbols-outlined" aria-hidden="true">call</span>
                  <div className="text-start">
                    <p className="profile-info-label">Phone</p>
                    <p className="profile-info-value">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="profile-info-row">
                  <span className="material-symbols-outlined" aria-hidden="true">history</span>
                  <div className="text-start">
                    <p className="profile-info-label">Last Login</p>
                    <p className="profile-info-value">Today, 09:41 AM (IP: 192.168.1.42)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer modal-footer-brand justify-content-center">
              <button type="button" className="btn btn-brand-outline d-flex align-items-center gap-2">
                <span className="material-symbols-outlined fs-sm" aria-hidden="true">edit</span>
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Deactivate Confirmation Modal --> */}
      <div className="modal fade" id="deactivateUserModal" tabindex="-1" aria-labelledby="deactivateUserModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content modal-content-brand text-center p-2">
            <div className="modal-body">
              <div className="warning-icon-wrap">
                <span className="material-symbols-outlined" aria-hidden="true">warning</span>
              </div>
              <h2 className="text-headline-sm mb-2 text-on-background-tok" id="deactivateUserModalLabel">Deactivate User?</h2>
              <p className="text-on-surface-variant-tok mb-4">Are you sure you want to deactivate <span className="fw-semibold text-on-background-tok">Dr. Robert Chen</span>? They will no longer be able to access the system.</p>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-brand-outline flex-fill" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-brand-danger flex-fill" id="confirmDeactivateBtn">Deactivate</button>
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