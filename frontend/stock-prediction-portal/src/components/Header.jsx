import Button from "./Button"

function Header() {
    return (
        <>
            <nav className="navbar container pt-3 pb-3 align-items-start">
                <a className="navbar-brand text-light">Stockit</a>

                <div>
                    <Button class="btn-outline-info" text="Login" />
                    &nbsp;
                    <Button class="btn-info" text="Signup" />
                </div>
            </nav>
        </>
    )
}

export default Header