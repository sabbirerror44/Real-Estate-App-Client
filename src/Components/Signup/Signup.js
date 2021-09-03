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
            <div className="row background">
                <div className="col-7">
                <div className="registration-form">
           <p className="Style">Create Your Profile</p>
                    <form onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                        <input type="text" 
                          className="form-control item"
                          placeholder="Enter Your Name"
                          onChange = {handleChange}
                          name="name" required  />
                        </div>
                        {errors.name&&<p className="error">{errors.name.msg}</p>}

                        <div className="form-group">
                        <input type="email"
                          className="form-control item"
                          placeholder="Enter Your Email"
                          onChange = {handleChange}
                          name="email" required  />
                        </div>
                        {errors.email&&<p className="error">{errors.email.msg}</p>}
              
                        <div className="form-group">
                        <input type="text" 
                            className="form-control item" 
                            placeholder="Enter Your Mobile Number"
                            onChange = {handleChange}
                            name="mobile"
                            required  />
                        </div>  
                        {errors.mobile&&<p className="error">{errors.mobile.msg}</p>} 

                        <div className="form-group">
                             <input type="password"
                               className="form-control item"
                               placeholder="Enter Your Password" 
                               onChange = {handleChange}
                               name="password" required  />
                        </div>
                        {errors.password&&<p className="error">{errors.password.msg}</p>}
                   
            
                        <input className="sendButton" type="submit" value="Create Your Profile" />
                    </form>
                </div>

                </div>
                <div className="col-5 pictureSignup">

                </div>
            </div>
           
        </>
    );
};

export default Signup;