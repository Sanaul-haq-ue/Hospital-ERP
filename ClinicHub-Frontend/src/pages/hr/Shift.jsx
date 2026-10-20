import { useCallback, useEffect, useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import "../../assets/css/Shift.css"
import { hasPermission } from "../../utils/permissions";

export default function Shift() {
  const [shiftRows, setShiftRows] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errors, setErrors] = useState({});

  const getFieldError = (field) => {
    const serverField = field.replace(/\[(\d+)\]/g, ".$1").replace(/\[([^\]]+)\]/g, ".$1");
    const error = errors[field] ?? errors[serverField];
    return Array.isArray(error) ? error[0] : error;
  };

  const clearFieldError = (field) => {
    const serverField = field.replace(/\[(\d+)\]/g, ".$1").replace(/\[([^\]]+)\]/g, ".$1");
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      delete next[serverField];
      return next;
    });
  };

  const fetchShifts = useCallback(async () => {
    try {
      const response = await api.get("/shifts");
      setShiftRows(response.data.map((shift) => ({
        id: shift.id,
        shiftName: shift.shift_name,
        days: `${shift.days.filter((day) => day.is_work_day).length} days`,
        status: shift.is_active ? "Active" : "Inactive",
        isActive: shift.is_active,
        schedule: shift.days,
      })));
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not load shifts.");
    }
  }, []);

  useEffect(() => {
    fetchShifts();
  }, [fetchShifts]);

  const handleCreateShift = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const shiftName = String(new FormData(form).get("shift_name") || "").trim();
    if (!shiftName) {
      const message = "Shift name is required.";
      setErrors({ shift_name: [message] });
      toast.error(message);
      form.querySelector('[name="shift_name"]')?.focus();
      return;
    }

    setSaving(true);
    setErrors({});
    try {
      const response = await api.post("/shifts/store", new FormData(form));
      await fetchShifts();
      form.reset();
      form.querySelectorAll(".availability-day-row input[type='time']").forEach((input) => {
        input.disabled = false;
      });
      setErrors({});
      window.bootstrap?.Modal.getInstance(document.getElementById("addShift"))?.hide();
      toast.success(response.data.message || "Shift saved successfully.");
    } catch (error) {
      const validationErrors = error.response?.data?.errors;
      if (validationErrors) setErrors(validationErrors);
      toast.error(validationErrors ? Object.values(validationErrors).flat()[0] : error.response?.data?.message || "Could not save shift.");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateShift = async (event) => {
    event.preventDefault();
    if (!selectedShift) return;

    const form = event.currentTarget;
    const shiftName = String(new FormData(form).get("shift_name") || "").trim();
    if (!shiftName) {
      toast.error("Shift name is required.");
      form.querySelector('[name="shift_name"]')?.focus();
      return;
    }

    setSaving(true);
    try {
      // Disabled Off Day time inputs are omitted by FormData, so enable them while collecting values.
      const disabledTimeInputs = [...form.querySelectorAll('.availability-day-row input[type="time"]:disabled')];
      disabledTimeInputs.forEach((input) => { input.disabled = false; });
      const data = new FormData(form);
      disabledTimeInputs.forEach((input) => { input.disabled = true; });

      const response = await api.post(`/shifts/update/${selectedShift.id}`, data);
      await fetchShifts();
      window.bootstrap?.Modal.getInstance(document.getElementById("editModal"))?.hide();
      toast.success(response.data.message || "Shift updated successfully.");
    } catch (error) {
      const validationErrors = error.response?.data?.errors;
      toast.error(validationErrors ? Object.values(validationErrors).flat()[0] : error.response?.data?.message || "Could not update shift.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteShift = async () => {
    if (!selectedShift || deleting) return;

    setDeleting(true);
    try {
      const response = await api.delete(`/shifts/delete/${selectedShift.id}`);
      await fetchShifts();
      window.bootstrap?.Modal.getInstance(document.getElementById("deleteModal"))?.hide();
      toast.success(response.data.message || "Shift deleted successfully.");
      setSelectedShift(null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not delete shift.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="container-fluid sp-container availability-page">
      <header className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-lg">
        <div>
          <h2 className="sp-title">Shift</h2>
          <p className="sp-subtitle">Set reusable clinic shifts and weekly working hours.</p>
        </div>
        {hasPermission("shift.create") && (
          <button type="button" className="sp-btn-primary" data-bs-toggle="modal" data-bs-target="#addShift" onClick={() => setErrors({})}>
            <span className="material-symbols-outlined" aria-hidden="true">add</span>
            Add Shift
          </button>
        )}
      </header>

      <section className="sp-filters" aria-label="Shift filters">
        <div className="row g-md align-items-end">
          <div className="col-12 col-md-4">
            <label className="sp-filter-label" htmlFor="filterShift">Shift</label>
            <input className="form-control sp-filter-select" id="filterShift" placeholder="Search shift name" />
          </div>
          <div className="col-6 col-md-3">
            <label className="sp-filter-label" htmlFor="filterDay">Day</label>
            <select className="sp-filter-select" id="filterDay" defaultValue="all">
              <option value="all">All Days</option>
              <option>Saturday</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </select>
          </div>
          <div className="col-6 col-md-3">
            <label className="sp-filter-label" htmlFor="filterAvailabilityStatus">Status</label>
            <select className="sp-filter-select" id="filterAvailabilityStatus" defaultValue="all">
              <option value="all">All Statuses</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="col-12 col-md-2">
            <button type="button" className="sp-btn-outline w-100">
              <span className="material-symbols-outlined" aria-hidden="true">filter_list</span>
              Filter
            </button>
          </div>
        </div>
      </section>

      <section className="sp-table-card" aria-label="Clinic shift schedules">
        <div className="table-responsive">
          <table className="table sp-table">
            <thead>
              <tr>
                <th className="sp-col-index">#</th>
                <th>Shift</th>
                <th className="d-none d-sm-table-cell">Weekly Working Days</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {shiftRows.map((row, index) => (
                <tr key={row.shiftName}>
                  <td className="sp-mono">{String(index + 1).padStart(2, "0")}</td>
                  <td className="fw-medium">{row.shiftName}</td>
                  <td className="d-none d-sm-table-cell sp-desc-cell">{row.days}</td>
                  <td>
                    <span className={`sp-pill ${row.status === "Active" ? "sp-pill-active" : "sp-pill-inactive"}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="sp-row-actions">
                      {hasPermission("shift.edit") && (
                        <button type="button" className="sp-action-btn" title={`Edit ${row.shiftName}`} data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setSelectedShift(row)}>
                          <span className="material-symbols-outlined" aria-hidden="true">edit</span>
                        </button>
                      )}
                      {hasPermission("shift.delete") && (
                        <button type="button" className="sp-action-btn sp-action-btn-danger" title={`Delete ${row.shiftName}`} data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setSelectedShift(row)}>
                          <span className="material-symbols-outlined" aria-hidden="true">delete</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="sp-table-footer">
          <div className="sp-table-footer-note">Showing <strong>{shiftRows.length}</strong> clinic shifts</div>
        </footer>
      </section>

      {/* Add Shift */}
      <div className="modal fade" id="addShift" tabIndex="-1" aria-labelledby="addShiftLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content sp-modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="addShiftLabel">Create New Shift</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form onSubmit={handleCreateShift}>
              <div className="modal-body d-flex flex-column gap-md">
                <div>
                  <label className="sp-form-label" htmlFor="shiftName">Shift Name</label>
                  <input
                    type="text"
                    className="form-control-tok"
                    id="shiftName"
                    name="shift_name"
                    placeholder="Day Shift"
                    aria-invalid={Boolean(getFieldError("shift_name"))}
                    aria-describedby={getFieldError("shift_name") ? "shiftNameError" : undefined}
                    onChange={() => clearFieldError("shift_name")}
                  />
                  {getFieldError("shift_name") && <small className="text-danger" id="shiftNameError" role="alert">{getFieldError("shift_name")}</small>}
                </div>
                {/* <!-- Section 6: Schedule (weekly) --> */}
                <section className="availability-schedule-section">
                  <div className="availability-schedule-heading">
                    <h4 className="availability-schedule-title"><span className="material-symbols-outlined" aria-hidden="true">calendar_month</span>Schedule</h4>
                  </div>
                  <div className="availability-grid-labels" aria-hidden="true">
                    <span>Day</span><span>Start time</span><span>End time</span><span>Day status</span>
                  </div>
                  <div className="d-flex flex-column gap-sm" id="scheduleList">
                    {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => <div className="multi-entry-row availability-day-row" key={day}>
                      <div className="availability-day-label">
                        {day}
                        <input type="hidden" name={`schedule[${index}][day]`} defaultValue={day} />
                      </div>
                      <input type="hidden" name={`schedule[${index}][start_time]`} defaultValue="08:00" />
                      <input type="hidden" name={`schedule[${index}][end_time]`} defaultValue="16:00" />
                      <div className="d-flex flex-column gap-1">
                        <input type="time" aria-label={`${day} start time`} className="form-control-tok" defaultValue="08:00" aria-invalid={Boolean(getFieldError(`schedule[${index}][start_time]`))} onChange={(event) => {
                          event.currentTarget.closest(".availability-day-row").querySelector(`input[name="schedule[${index}][start_time]"]`).value = event.currentTarget.value;
                          clearFieldError(`schedule[${index}][start_time]`);
                        }} />
                        {getFieldError(`schedule[${index}][start_time]`) && <small className="text-danger" role="alert">{getFieldError(`schedule[${index}][start_time]`)}</small>}
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <input type="time" aria-label={`${day} end time`} className="form-control-tok" defaultValue="16:00" aria-invalid={Boolean(getFieldError(`schedule[${index}][end_time]`))} onChange={(event) => {
                          event.currentTarget.closest(".availability-day-row").querySelector(`input[name="schedule[${index}][end_time]"]`).value = event.currentTarget.value;
                          clearFieldError(`schedule[${index}][end_time]`);
                        }} />
                        {getFieldError(`schedule[${index}][end_time]`) && <small className="text-danger" role="alert">{getFieldError(`schedule[${index}][end_time]`)}</small>}
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <select
                          className="form-select-tok"
                          name={`schedule[${index}][is_work_day]`}
                          aria-label={`${day} status`}
                          defaultValue="1"
                          aria-invalid={Boolean(getFieldError(`schedule[${index}][is_work_day]`))}
                          onChange={(event) => {
                            const isWorkDay = event.currentTarget.value === "1";
                            const row = event.currentTarget.closest(".availability-day-row");
                            const [startTime, endTime] = row.querySelectorAll('input[type="time"]');
                            const startTimeValue = row.querySelector(`input[name="schedule[${index}][start_time]"]`);
                            const endTimeValue = row.querySelector(`input[name="schedule[${index}][end_time]"]`);
                            startTime.value = isWorkDay ? "08:00" : "00:00";
                            endTime.value = isWorkDay ? "16:00" : "00:00";
                            startTimeValue.value = startTime.value;
                            endTimeValue.value = endTime.value;
                            startTime.disabled = !isWorkDay;
                            endTime.disabled = !isWorkDay;
                            clearFieldError(`schedule[${index}][is_work_day]`);
                          }}
                        >
                          <option value="1">Work Day</option><option value="0">Off Day</option>
                        </select>
                        {getFieldError(`schedule[${index}][is_work_day]`) && <small className="text-danger" role="alert">{getFieldError(`schedule[${index}][is_work_day]`)}</small>}
                      </div>
                    </div>)}
                  </div>
                </section>
                <div>
                  <label className="dp-form-label" htmlFor="addStatus">Status</label>
                  <select
                    className="form-select dp-form-control"
                    id="addStatus"
                    name="is_active"
                    defaultValue="1"
                    aria-invalid={Boolean(getFieldError("is_active"))}
                    onChange={() => clearFieldError("is_active")}
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                  {getFieldError("is_active") && <small className="text-danger" role="alert">{getFieldError("is_active")}</small>}
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn sp-btn-primary" disabled={saving}>{saving ? "Saving..." : "Save Shift"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Shift */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content sp-modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="editModalLabel">Edit Shift</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form key={selectedShift?.id || "empty-shift"} onSubmit={handleUpdateShift}>
              <div className="modal-body d-flex flex-column gap-md">
                <div>
                  <label className="sp-form-label" htmlFor="editShiftName">Shift Name</label>
                  <input type="text" className="form-control-tok" id="editShiftName" name="shift_name" placeholder="Day Shift" defaultValue={selectedShift?.shiftName || ""} />
                </div>
                <section className="availability-schedule-section">
                  <div className="availability-schedule-heading">
                    <h4 className="availability-schedule-title"><span className="material-symbols-outlined" aria-hidden="true">calendar_month</span>Schedule</h4>
                  </div>
                  <div className="availability-grid-labels" aria-hidden="true">
                    <span>Day</span><span>Start time</span><span>End time</span><span>Day status</span>
                  </div>
                  <div className="d-flex flex-column gap-sm">
                    {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => {
                      const savedDay = selectedShift?.schedule?.find((item) => item.day === day);
                      const isWorkDay = savedDay ? Boolean(savedDay.is_work_day) : true;
                      return (
                        <div className="multi-entry-row availability-day-row" key={day}>
                          <div className="availability-day-label">
                            {day}
                            <input type="hidden" name={`schedule[${index}][day]`} defaultValue={day} />
                          </div>
                          <input type="time" className="form-control-tok" name={`schedule[${index}][start_time]`} aria-label={`${day} start time`} defaultValue={isWorkDay ? savedDay?.start_time?.slice(0, 5) || "08:00" : "00:00"} disabled={!isWorkDay} />
                          <input type="time" className="form-control-tok" name={`schedule[${index}][end_time]`} aria-label={`${day} end time`} defaultValue={isWorkDay ? savedDay?.end_time?.slice(0, 5) || "16:00" : "00:00"} disabled={!isWorkDay} />
                          <select className="form-select-tok" name={`schedule[${index}][is_work_day]`} aria-label={`${day} status`} defaultValue={isWorkDay ? "1" : "0"} onChange={(event) => {
                            const nextIsWorkDay = event.currentTarget.value === "1";
                            const row = event.currentTarget.closest(".availability-day-row");
                            const [startTime, endTime] = row.querySelectorAll('input[type="time"]');
                            startTime.value = nextIsWorkDay ? "08:00" : "00:00";
                            endTime.value = nextIsWorkDay ? "16:00" : "00:00";
                            startTime.disabled = !nextIsWorkDay;
                            endTime.disabled = !nextIsWorkDay;
                          }}>
                            <option value="1">Work Day</option>
                            <option value="0">Off Day</option>
                          </select>
                        </div>
                      );
                    })}
                  </div>
                </section>
                <div>
                  <label className="dp-form-label" htmlFor="editShiftStatus">Status</label>
                  <select className="form-select dp-form-control" id="editShiftStatus" name="is_active" defaultValue={selectedShift ? (selectedShift.isActive ? "1" : "0") : "1"}>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn sp-btn-primary" disabled={saving}>{saving ? "Saving..." : "Save Changes"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Delete Shift */}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content sp-modal-content">
            <div className="modal-body text-center py-lg">
              <div className="sp-modal-icon"><span className="material-symbols-outlined" aria-hidden="true">warning</span></div>
              <h3 className="fs-5 mb-2" id="deleteModalLabel">Delete Shift?</h3>
              <p className="text-body-sm text-on-surface-variant-tok mb-0">Are you sure you want to remove <strong>{selectedShift?.shiftName || "this shift"}</strong>? It will be moved to deleted records.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleteShift} disabled={deleting}>{deleting ? "Deleting..." : "Delete"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>



    /* <div>
        <label className="sp-form-label" htmlFor="addAvailabilitySlot">Appointment Slot Length *</label>
        <select className="form-select sp-form-control" id="addAvailabilitySlot" defaultValue="20">
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
      </div> */
  )
}
