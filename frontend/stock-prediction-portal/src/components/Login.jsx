import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

import axios from 'axios'
import Alert from './Alert';


function Login() {
    // State to manage the form data.
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // global context for user authentication status.
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    // useNavigate hook to programmatically navigate.
    const navigate = useNavigate()

    // State to manage any errors that may occur.
    const [loginError, setLoginError] = useState(null);

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
    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {
            // Make a POST request to the backend API.
            setLoading(true); // Set loading to true while the request is being processed.
            const response = await axios.post('http://127.0.01:8000/api/v1/token/', formData);

            // Save the tokens in the Browser's local storage.
            localStorage.setItem('access-token', response.data.access);
            localStorage.setItem('refresh-token', response.data.refresh);

            setIsLoggedIn(true)
            
            // Reset any erors and clear the form data.
            setLoginError(null); 
            setFormData({
                username: '',
                password: ''
            });
            setLoading(false);

            // Set the status to success.
            setStatus('success'); 

            // Clear it after 3 seconds.
            setTimeout(() => {
                setStatus(null); 
            }, 3000);

            navigate('/'); 

        } catch (error) {
            // Handle errors during registration       
            setLoading(false);
            setFormData({
                username: '',
                password: ''
            });
            setLoginError(error.response.data);
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
                        <h3 className="text-light text-center mb-4">Welcome Back</h3>
                        <form onSubmit={handleLogin}>
                            <div className='mb-3'>
                                <input type="text" name="username" className="form-control" placeholder="Username... eg. johndoe" value={formData.username} onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} />
                                {loginError?.detail && <small className="text-danger d-block text-center">{loginError.detail}</small>}
                            </div>

                            {isLoading && <div className="text-center text-info">Logging in...</div>}
                            {!isLoading && <button className="btn btn-info d-block mx-auto">Login</button>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login