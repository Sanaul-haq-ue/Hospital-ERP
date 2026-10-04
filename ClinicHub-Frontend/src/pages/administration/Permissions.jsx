import { useEffect, useMemo, useState } from 'react'
import '../../assets/css/Permissions.css'
import api from '../../api/axios'
import { toast } from 'react-toastify'

export default function Permissions() {

    const [roles, setRoles] = useState([])
    const [permissions, setPermissions] = useState([])

    const [selectedRoleId, setSelectedRoleId] = useState('')
    const [selectedPermissions, setSelectedPermissions] = useState([])

    const [originalPermissions, setOriginalPermissions] = useState([])

    const [loadingRoles, setLoadingRoles] = useState(true)
    const [loadingPermissions, setLoadingPermissions] = useState(true)
    const [loadingRolePermissions, setLoadingRolePermissions] = useState(false)
    const [saving, setSaving] = useState(false)

    const [canEditRoles, setCanEditRoles] = useState(false)

    /*
    |--------------------------------------------------------------------------
    | Module presentation
    |--------------------------------------------------------------------------
    | These control only how permissions are displayed.
    | The actual permission records come from Laravel.
    */

    const moduleConfig = [
        {
            name: 'dashboard',
            label: 'Dashboard',
            icon: 'dashboard',
            section: null,
        },
        {
            name: 'doctor_dashboard',
            label: 'Doctor Dashboard',
            icon: 'dashboard',
            section: null,
        },
        // User Section
        {
            name: 'users',
            label: 'Users',
            icon: 'group',
            section: 'Administration',
            sectionIcon: 'admin_panel_settings',
        },
        {
            name: 'roles',
            label: 'Roles',
            icon: 'rule',
            section: null,
        },
        {
            name: 'permission',
            label: 'Permission',
            icon: 'rule',
            section: null,
        },
        // Doctor Section
        {
            name: 'docM',
            label: 'Doctor Manage',
            icon: 'event',
            section: 'Doctor',
            sectionIcon: 'medical_services',
        },
        {
            name: 'Spec',
            label: 'Specialization',
            icon: 'event',
            section: null,
        },
        // {
        //     name: 'appointments',
        //     label: 'Appointments',
        //     icon: 'calendar_month',
        //     section: 'Appointments',
        //     sectionIcon: 'calendar_month',
        // },
        // HR Section
        {
            name: 'dept',
            label: 'Department',
            icon: 'event',
            section: 'HR',
            sectionIcon: 'HR',
        },
    ]

    /*
    |--------------------------------------------------------------------------
    | Load roles and permissions
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        loadRoles()
        loadPermissions()
    }, [])

    /*
    |--------------------------------------------------------------------------
    | Load selected role permissions
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!selectedRoleId) {
            return
        }

        loadRolePermissions(selectedRoleId)
    }, [selectedRoleId])

    /*
    |--------------------------------------------------------------------------
    | Load roles
    |--------------------------------------------------------------------------
    */

    const loadRoles = async () => {
        setLoadingRoles(true)

        try {
            const res = await api.get('/permissions/roles')

            if (res.data.success) {
                const roleList = res.data.data || []

                setRoles(roleList)

                /*
                * Select the first role automatically.
                */
                if (roleList.length > 0) {
                    setSelectedRoleId(String(roleList[0].id))
                }
            }
        } catch (error) {
            console.error(error)

            toast.error(
                error.response?.data?.message ||
                'Failed to load roles.'
            )
        } finally {
            setLoadingRoles(false)
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Load all permissions
    |--------------------------------------------------------------------------
    */

    const loadPermissions = async () => {
        setLoadingPermissions(true)

        try {
            const res = await api.get('/permissions')

            if (res.data.success) {
                setPermissions(res.data.data || [])
            }
        } catch (error) {
            console.error(error)

            toast.error(
                error.response?.data?.message ||
                'Failed to load permissions.'
            )
        } finally {
            setLoadingPermissions(false)
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Load permissions assigned to selected role
    |--------------------------------------------------------------------------
    */

    const loadRolePermissions = async (roleId) => {
        setLoadingRolePermissions(true)

        try {
            const res = await api.get(
                `/permissions/roles/${roleId}/permissions`
            )

            if (res.data.success) {
                const ids = (res.data.data.permission_ids || [])
                    .map(Number)

                setSelectedPermissions(ids)
                setOriginalPermissions(ids)
            }
        } catch (error) {
            console.error(error)

            setSelectedPermissions([])
            setOriginalPermissions([])

            toast.error(
                error.response?.data?.message ||
                'Failed to load role permissions.'
            )
        } finally {
            setLoadingRolePermissions(false)
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Group permissions by module
    |--------------------------------------------------------------------------
    */

    const permissionsByModule = useMemo(() => {

        const grouped = {}

        permissions.forEach(permission => {

            if (!grouped[permission.module]) {
                grouped[permission.module] = {}
            }

            grouped[permission.module][permission.action] = permission

        })

        return grouped

    }, [permissions])

    /*
    |--------------------------------------------------------------------------
    | Check permission
    |--------------------------------------------------------------------------
    */

    const isChecked = (permission) => {
        if (!permission) {
            return false
        }

        return selectedPermissions.includes(Number(permission.id))
    }

    /*
    |--------------------------------------------------------------------------
    | Toggle individual permission
    |--------------------------------------------------------------------------
    */

    const togglePermission = (permissionId) => {

        if (!canEditRoles) {
            return
        }

        const id = Number(permissionId)

        setSelectedPermissions(prev => {

            if (prev.includes(id)) {
                return prev.filter(item => item !== id)
            }

            return [...prev, id]
        })
    }

    /*
    |--------------------------------------------------------------------------
    | Select All
    |--------------------------------------------------------------------------
    */

    const handleSelectAll = () => {

        if (!canEditRoles) {
            return
        }

        const allIds = permissions.map(permission =>
            Number(permission.id)
        )

        setSelectedPermissions(allIds)
    }

    /*
    |--------------------------------------------------------------------------
    | Clear All
    |--------------------------------------------------------------------------
    */

    const handleClearAll = () => {

        if (!canEditRoles) {
            return
        }

        setSelectedPermissions([])
    }

    /*
    |--------------------------------------------------------------------------
    | Save
    |--------------------------------------------------------------------------
    */

    const handleSave = async () => {

        if (!selectedRoleId || !canEditRoles) {
            return
        }

        setSaving(true)

        try {

            const res = await api.put(
                `/permissions/roles/${selectedRoleId}/permissions`,
                {
                    permission_ids: selectedPermissions
                }
            )

            if (res.data.success) {

                const savedIds = (
                    res.data.data.permission_ids || []
                ).map(Number)

                setSelectedPermissions(savedIds)
                setOriginalPermissions(savedIds)

                toast.success(
                    res.data.message ||
                    'Permissions updated successfully.'
                )
            }

        } catch (error) {

            console.error(error)

            toast.error(
                error.response?.data?.message ||
                'Failed to save permissions.'
            )

        } finally {
            setSaving(false)
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Cancel
    |--------------------------------------------------------------------------
    */

    const handleCancel = () => {

        setSelectedPermissions([
            ...originalPermissions
        ])

        toast.info('Changes discarded.')
    }

    /*
    |--------------------------------------------------------------------------
    | Get selected role
    |--------------------------------------------------------------------------
    */

    const selectedRole = roles.find(
        role => String(role.id) === String(selectedRoleId)
    )

    /*
    |--------------------------------------------------------------------------
    | Determine whether current user can edit roles
    |--------------------------------------------------------------------------
    |
    | For now this uses localStorage user.permissions.
    | Laravel still enforces roles.edit on the API.
    |
    */

    useEffect(() => {

        const storedUser = localStorage.getItem('user')

        if (!storedUser) {
            setCanEditRoles(false)
            return
        }

        try {

            const user = JSON.parse(storedUser)

            setCanEditRoles(
                user?.role?.id === 1 ||
                (
                    Array.isArray(user.permissions) &&
                    user.permissions.includes('roles.edit')
                )
            )

        } catch (error) {

            console.error(error)
            setCanEditRoles(false)

        }

    }, [])

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    const pageLoading =
        loadingRoles ||
        loadingPermissions

    return (
        <>
            <div className="container-fluid px-3 px-md-4">

                {/* Page Header */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">

                    <div>
                        <h2 className="page-heading">Permissions</h2>
                        <p className="page-subtext">Control what each role can view, create, edit, and delete.</p>
                    </div>
                    <div className="d-flex align-items-end gap-2 flex-shrink-0">

                        <div style={{ minWidth: '220px' }}>

                            <label
                                htmlFor="role-select"
                                className="role-select-label"
                            >
                                Select Role
                            </label>

                            <select
                                className="form-select form-select-brand"
                                id="role-select"
                                value={selectedRoleId}
                                onChange={(e) =>
                                    setSelectedRoleId(e.target.value)
                                }
                                disabled={loadingRoles}
                            >

                                {roles.length === 0 && (
                                    <option value="">
                                        No roles available
                                    </option>
                                )}

                                {roles.map(role => (
                                    <option
                                        key={role.id}
                                        value={role.id}
                                    >
                                        {role.name}
                                    </option>
                                ))}

                            </select>

                        </div>

                    </div>

                </div>

                {/* Matrix Card */}
                <div className="matrix-card">

                    {/* Toolbar */}
                    <div className="matrix-toolbar">

                        <div className="d-flex gap-2">

                            <button
                                type="button"
                                className="btn-toolbar-link btn-toolbar-link-primary"
                                onClick={handleSelectAll}
                                disabled={
                                    pageLoading ||
                                    loadingRolePermissions ||
                                    !canEditRoles ||
                                    permissions.length === 0
                                }
                            >
                                Select All
                            </button>

                            <button
                                type="button"
                                className="btn-toolbar-link btn-toolbar-link-muted"
                                onClick={handleClearAll}
                                disabled={
                                    pageLoading ||
                                    loadingRolePermissions ||
                                    !canEditRoles ||
                                    permissions.length === 0
                                }
                            >
                                Clear All
                            </button>

                        </div>

                        <div className="d-flex align-items-center gap-3">

                            <span className="matrix-legend">
                                <span className="legend-dot legend-dot-granted"></span>
                                Granted
                            </span>

                            <span className="matrix-legend">
                                <span className="legend-dot legend-dot-denied"></span>
                                Denied
                            </span>

                        </div>

                    </div>

                    {/* Table */}
                    <div className="matrix-scroll">

                        {pageLoading ? (

                            <div className="text-center py-5">
                                <div
                                    className="spinner-border"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>

                                <p className="mt-3 mb-0">
                                    Loading permissions...
                                </p>
                            </div>

                        ) : (

                            <table className="matrix-table">

                                <thead>

                                    <tr>

                                        <th style={{ width: '25%' }}>
                                            Module
                                        </th>

                                        <th
                                            className="text-center"
                                            style={{ width: '18.75%' }}
                                        >
                                            View
                                        </th>

                                        <th
                                            className="text-center"
                                            style={{ width: '18.75%' }}
                                        >
                                            Create
                                        </th>

                                        <th
                                            className="text-center"
                                            style={{ width: '18.75%' }}
                                        >
                                            Edit
                                        </th>

                                        <th
                                            className="text-center"
                                            style={{ width: '18.75%' }}
                                        >
                                            Delete
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {moduleConfig.map(
                                        (module, index) => {

                                            const modulePermissions =
                                                permissionsByModule[module.name] || {}

                                            const actions = [
                                                'view',
                                                'create',
                                                'edit',
                                                'delete'
                                            ]

                                            const hasSection =
                                                module.section &&
                                                (
                                                    index === 0 ||
                                                    moduleConfig[index - 1]?.section !== module.section
                                                )

                                            return (
                                                <>

                                                    {/* Section Header */}
                                                    {hasSection && (
                                                        <tr
                                                            key={`${module.name}-section`}
                                                            className="row-section-header"
                                                        >
                                                            <td colSpan={5}>

                                                                <span className="module-cell module-cell-section">

                                                                    <span
                                                                        className="material-symbols-outlined"
                                                                        aria-hidden="true"
                                                                    >
                                                                        {module.sectionIcon}
                                                                    </span>

                                                                    {module.section}

                                                                </span>

                                                            </td>
                                                        </tr>
                                                    )}

                                                    {/* Permission Row */}
                                                    <tr
                                                        key={module.name}
                                                        className={
                                                            index % 2 === 0
                                                                ? ''
                                                                : 'row-alt'
                                                        }
                                                    >

                                                        <td>

                                                            <span className="module-cell">

                                                                <span
                                                                    className="material-symbols-outlined"
                                                                    aria-hidden="true"
                                                                >
                                                                    {module.icon}
                                                                </span>

                                                                {module.label}

                                                            </span>

                                                        </td>

                                                        {actions.map(action => {

                                                            const permission =
                                                                modulePermissions[action]

                                                            const isActionDisabled =
                                                                !permission ||
                                                                !canEditRoles ||
                                                                loadingRolePermissions

                                                            return (
                                                                <td
                                                                    key={`${module.name}-${action}`}
                                                                    className="matrix-check-cell"
                                                                >

                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-brand"
                                                                        checked={
                                                                            isChecked(permission)
                                                                        }
                                                                        disabled={
                                                                            isActionDisabled
                                                                        }
                                                                        onChange={() =>
                                                                            permission &&
                                                                            togglePermission(
                                                                                permission.id
                                                                            )
                                                                        }
                                                                    />

                                                                </td>
                                                            )
                                                        })}

                                                    </tr>

                                                </>
                                            )
                                        }
                                    )}

                                </tbody>

                            </table>

                        )}

                    </div>

                    {/* Actions Footer */}
                    <div className="matrix-footer">

                        <button
                            type="button"
                            className="btn btn-brand-outline"
                            onClick={handleCancel}
                            disabled={
                                saving ||
                                loadingRolePermissions ||
                                !canEditRoles
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="btn btn-brand-primary"
                            id="saveBtn"
                            onClick={handleSave}
                            disabled={
                                saving ||
                                pageLoading ||
                                loadingRolePermissions ||
                                !selectedRoleId ||
                                !canEditRoles
                            }
                        >

                            {saving ? (

                                <>
                                    <span
                                        className="spinner-border spinner-border-sm me-2"
                                        aria-hidden="true"
                                    ></span>

                                    Saving...
                                </>

                            ) : (

                                <>
                                    <span
                                        className="material-symbols-outlined fs-sm"
                                        aria-hidden="true"
                                    >
                                        save
                                    </span>

                                    Save Permissions
                                </>
                            )}

                        </button>

                    </div>

                </div>

                {/* Read-only message */}
                {!canEditRoles && !pageLoading && (
                    <div className="alert alert-warning mt-3">
                        You have view access to permissions, but you do not
                        have permission to modify role permissions.
                    </div>
                )}

            </div>

            {/* Toast Container */}
            <div
                className="toast-container position-fixed bottom-0 end-0 p-3"
                style={{ zIndex: 1080 }}
                id="toastContainer"
                aria-live="polite"
                aria-atomic="true"
            ></div>
        </>
    )
}