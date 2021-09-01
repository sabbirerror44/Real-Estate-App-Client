import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
        const history = useHistory();
        const location = useLocation();
        const { from } = location.state || { from: { pathname: '/' } };
    
        const [error, setError] = useState('');
        const [user, setUser] = useState({
            username: '',
            password: '',
        });
        
        const handleChange = (e) =>{
            if(e.target.name==='username'){
                const addUser = { ...user };
                addUser[e.target.name] = e.target.value;
                setUser(addUser);
            }
            if(e.target.name==='password'){
                const addUser = { ...user };
                addUser[e.target.name] = e.target.value;
                setUser(addUser);
            }
        }
        
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((result) => {
                    if(result.message && result.user) {
                        alert(result.message);
                        setError('');
                        localStorage.setItem('token', result.access_token);
                        localStorage.setItem('user', result.user.email);
                        localStorage.setItem('id', result.user.id);
                        localStorage.setItem('role', result.user.role);
                        history.push(from)
                        window.location.reload();

                        // 
                    }
                    else if(result.message==='Login failed! Please try again.') {
                        alert(result.message);
                        setError('');
                    }
                    else{
                        setError(result.errors)
                        alert('Invalid username or password');
                        
                    }
                 })
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
                            onChange={handleChange}
                            placeholder="Enter you Email or Mobile No"
                            required
                        />       
                     </div>
                     {error.username&&<p>{error.username.msg}</p>}
            
                       
                       <div className="form-group">
                            <input 
                               className="form-control item"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Enter you Password"
                                required />
                        </div>
                        {error.password&&<p>{error.password.msg}</p>}
                        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
         
                     <input className="btn btn-dark" type="submit" value="Submit" />
                 </form>
             </div>
         </>
    );
};

export default Login;