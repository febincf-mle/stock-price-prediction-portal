import { useState, createContext } from "react";


export const AlertContext = createContext()

// This component will provide the AuthContext 
// to its children.
function AlertContextProvider({ children }) {

    // State to manage the login status of the user.
    const [ alerts, setAlerts ] = useState([])

    return (
        <AlertContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider