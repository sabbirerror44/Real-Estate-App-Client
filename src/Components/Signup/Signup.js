import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        role: 'user',

    })

const [errors, setError] = useState('');

const handleChange = (e) => {
        if(e.target.name === 'name'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
         }
        if(e.target.name === 'email'){
                const addUser = { ...user };
                addUser[e.target.name] = e.target.value;
                setUser(addUser);
        }
        if(e.target.name === 'mobile'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
        }
        if(e.target.name === 'password'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
        }
        if(e.target.name === 'role'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
        }

}
 const handleSubmit = (e) => {
     e.preventDefault();
     fetch('http://localhost:5000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((result) => {
                if(result.message) {
                       alert(result.message)
                }
                else{
                      setError(result.errors)
                    }
             })



 }
    return (
        <>
           <div className="registration-form">
           <h3 className="mb-3">Sign Up</h3>
                    <form onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                        <input type="text" 
                          className="form-control item"
                          placeholder="Enter Your Name"
                          onChange = {handleChange}
                          name="name" required  />
                        </div>
                        {errors.name&&<p>{errors.name.msg}</p>}

                        <div className="form-group">
                        <input type="email"
                          className="form-control item"
                          placeholder="Enter Your Email"
                          onChange = {handleChange}
                          name="email" required  />
                        </div>
                        {errors.email&&<p>{errors.email.msg}</p>}
              
                        <div className="form-group">
                        <input type="text" 
                            className="form-control item" 
                            placeholder="Enter Your Mobile Number"
                            onChange = {handleChange}
                            name="mobile"
                            required  />
                        </div>  
                        {errors.mobile&&<p>{errors.mobile.msg}</p>} 

                        <div className="form-group">
                             <input type="password"
                               className="form-control item"
                               placeholder="Enter Your Password" 
                               onChange = {handleChange}
                               name="password" required  />
                        </div>
                        {errors.password&&<p>{errors.password.msg}</p>}
                                          
                        {/* <div className="form-group item">
                         <label htmlFor="role">Choose a Role</label><span> : </span>
                            <select id="role" onChange = {handleChange} name="role">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>  */}
                   
            
                        <input className="btn btn-dark" type="submit" value="Submit" />
                    </form>
                </div>
            </>
    );
};

export default Signup;