import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }) {
    const { isLoggedIn } = useContext(AuthContext);

    // If the user is not authenticated, redirect to the login page.
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // If the user is authenticated, render the children components.
    return children;
}


export default ProtectedRoute;