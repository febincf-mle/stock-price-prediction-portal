import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

import Button from "./Button"

function Header() {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    function handleLogout() {
        localStorage.removeItem('access-token')
        setIsLoggedIn(false)
    }

    return (
        <>
            <nav className="navbar container pt-3 pb-3 align-items-start">
                <Link className="navbar-brand text-light" to="/">Stockit</Link>

                {!isLoggedIn ? (<div>
                    <Button class="btn-outline-info" text="Login" url="/login" />
                    &nbsp;
                    <Button class="btn-info" text="Signup" url="/register" />
                </div>) : <button className="btn btn-danger" onClick={handleLogout}>Logout</button>}
            </nav>
        </>
    )
}

export default Header