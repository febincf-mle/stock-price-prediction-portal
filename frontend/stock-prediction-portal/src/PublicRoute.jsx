import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";


function PublicRoute({ children }) {
    const { isLoggedIn } = useContext(AuthContext);

    // If the user is not authenticated, redirect to the login page.
    // Here, the children is the Login or Register component.
    if (!isLoggedIn) {
        return children;
    }

    // If the user is authenticated, redirect to the dashboard page.
    return <Navigate to="/dashboard" replace />; 
}


export default PublicRoute;