function Alert(props) {

    return (
        <div className={`alert ${props.className} alert-dismissible fade show`} role="alert">
            <strong>{props.title}</strong><p>{props.message}</p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}


export default Alert