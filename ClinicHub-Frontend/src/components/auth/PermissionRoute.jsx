import { Navigate, Outlet } from "react-router-dom";
import Forbidden from "../../pages/errors/Forbidden";

const PermissionRoute = ({ permission }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // No logged-in user
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Admin has full access
    if (user.role?.id === 1) {
        return <Outlet />;
    }

    // Other roles need the specific permission
    const hasPermission = user.permissions?.includes(permission);

    if (!hasPermission) {
        return <Forbidden />;
    }

    return <Outlet />;
};

export default PermissionRoute;