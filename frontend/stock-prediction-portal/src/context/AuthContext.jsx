import { useState, createContext } from "react";


export const AuthContext = createContext()

// This component will provide the AuthContext 
// to its children.
function AuthContextProvider({ children }) {

    // State to manage the login status of the user.
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('access-token')
    )

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider