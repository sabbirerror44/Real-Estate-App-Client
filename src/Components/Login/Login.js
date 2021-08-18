import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';

const Login = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const history = useHistory();
        const location = useLocation();
        const { from } = location.state || { from: { pathname: '/' } };
    
        const [error, setError] = useState('');
        const [user, setUser] = useState({
            username: '',
            password: '',
        });
    
        const handleResponse = (res, redirect) => {
            setLoggedInUser(res);
            if (redirect) {
                history.replace(from);
            }
        };
        
        const handleBlur = (e) => {
            let isValid = true;
            console.log('True');
            if (e.target.name === 'username') {
                isValid = /\S+@\S+\.\S+/.test(e.target.value);
                if (isValid) {
                    setError('');
                } else {
                    setError('Please fill up email field correctly.');
                }
            }
            if (e.target.name === 'password') {
                const isPassValid = e.target.value.length > 5;
                const passHasNumber = /\d{1}/.test(e.target.value);
                isValid = isPassValid && passHasNumber;
                if (isValid) {
                    setError('');
                } else {
                    setError(
                        'Password strength poor. Please fill up with minimum 5 alphabates with minimun one number'
                    );
                }
            }
            // eslint-disable-next-line no-constant-condition
            if (true) {
                const addUser = { ...user };
                addUser[e.target.name] = e.target.value;
                setUser(addUser);
            }
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.message) {
                        handleResponse(user.username, true);
                        alert(result.message)
                    }
                     else {
                        setError(result.error);
                    }
                });
        };
    return (
        <>
        <div className="login-form">
        <h3 className="mb-3">Login</h3>
                 <form onSubmit={handleSubmit}>
                 
                     <div className="form-group">
                        <input
                            className="form-control item"
                            type="text"
                            name="username"
                            onBlur={handleBlur}
                            placeholder="Enter you Email or Mobile No"
                            required
                        />       
                     </div>
            
                       
                       <div className="form-group">
                            <input 
                               className="form-control item"
                                type="password"
                                name="password"
                                onBlur={handleBlur}
                                placeholder="Enter you Password"
                                required />
                        </div>
                        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
         
                     <input className="btn btn-dark" type="submit" value="Submit" />
                 </form>
             </div>
         </>
    );
};

export default Login;