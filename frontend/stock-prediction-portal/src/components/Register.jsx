import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from './Alert';


function Regsiter() {
    // State to manage the form data.
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    // useNavigate hook to programmatically navigate.
    const navigate = useNavigate()

    // State to manage any errors that may occur.
    const [registerError, setRegisterError] = useState(null);

    // State to manage the loading.
    const [isLoading, setLoading] = useState(false);

    // State to manage the success of the registration.
    const [status, setStatus] = useState(null);

    // Function to handle form input changes.
    const handleChange = (e) => {
        // extract the name of the input 
        // field and its value.
        const { name, value } = e.target;

        // update the formData state
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }))
    }

    // Function to handle form submission
    // for user creation.
    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            // Make a POST request to the backend API.
            setLoading(true); // Set loading to true while the request is being processed.
            const response = await axios.post('http://127.0.01:8000/api/v1/register/', formData);
            
            // Reset any erors and clear the form data.
            setRegisterError(null); 
            setFormData({
                username: '',
                email: '',
                password: ''
            });
            setLoading(false);

            // Set the status to success.
            setStatus('success'); 

            // Clear it after 3 seconds.
            setTimeout(() => {
                setStatus(null); 
            }, 3000);

            // Navigate to the login page after successful registration.
            navigate('/login');

        } catch (error) {
            // Handle errors during registration
            setLoading(false);
            setRegisterError(error.response.data);
            setStatus('error'); 

            // Clear the status after 3 seconds.
            setTimeout(() => {
                setStatus(null); 
            }, 3000);
        }
    }

    return (
        <>  
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Create an Account</h3>
                        <form onSubmit={handleRegistration}>
                            <div className='mb-3'>
                                <input type="text" name="username" className="form-control" placeholder="Username... eg. John Doe" value={formData.username} onChange={handleChange} />
                                {registerError?.username && <small className="text-danger">{registerError.username[0]}</small>}
                            </div>
                            <div className='mb-3'>
                                <input type="text" name="email" className="form-control" placeholder="Email... eg. johndoe@gmail.com" value={formData.email} onChange={handleChange}/>
                                {registerError?.email && <small className="text-danger">{registerError.email[0]}</small>}
                            </div>
                            <div className="mb-3">
                                <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} />
                                {registerError?.password && <small className="text-danger">{registerError.password[0]}</small>}
                            </div>

                            {isLoading && <div className="text-center text-info">Creating account...</div>}
                            {!isLoading && <button className="btn btn-info d-block mx-auto">Register</button>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Regsiter