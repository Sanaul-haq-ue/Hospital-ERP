export const hasPermission = (permission) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
        return false;
    }

    try {
        const user = JSON.parse(storedUser);

        // Admin has full access
        if (user?.role?.id === 1) {
            return true;
        }

        // Other roles need the specific permission
        return user?.permissions?.includes(permission) ?? false;

    } catch (error) {
        return false;
    }
};

// hasPermission("appointments.view", user)

// {hasPermission("appointments.view") && (
//     <li>
//         <Link to="/appointments">
//             <span className="material-symbols-outlined">
//                 calendar_month
//             </span>
//             Appointments
//         </Link>
//     </li>
// )}


// {hasPermission("users.delete") && (
//     <button>Delete</button>
// )}