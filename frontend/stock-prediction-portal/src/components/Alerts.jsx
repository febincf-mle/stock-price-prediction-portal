import Alert from "./Alert"


function Alerts(props) {

    return (
            <div className="position-fixed top-0 end-0 p-3 w-sm-75 w-md-50" style={{ zIndex: 1055 }}>
                {props.alerts && props.alerts.map((alert, index) => (
                    <Alert className={alert.className} title={alert.title} message={alert.message}/>
                ))}
            </div>
    )
}


export default Alerts