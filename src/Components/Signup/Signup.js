import React from 'react';
import './Signup.css';

const Signup = () => {
 
    return (
        <>
           <div className="registration-form">
           <h3 className="mb-3">Sign Up</h3>
                    <form
                        action="http://localhost:5000/users/signup"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <div className="form-group">
                        <input id="name" type="text" className="form-control item" placeholder="Enter Your Name" name="name" required  />
                        </div>

                        <div className="form-group">
                        <input id="email" type="text" className="form-control item" placeholder="Enter Your Email" name="email" required  />
                        </div>
              
                        <div className="form-group">
                        <input id="mobile" type="text" className="form-control item" placeholder="Enter Your Mobile Number" name="mobile" required  />
                        </div>                       
                        <div className="form-group">
                        <input id="password" type="password" className="form-control item" placeholder="Enter Your Password" name="password" required  />
                        </div>
                
                        <div className="form-group">
                        <label htmlFor="avatar">Profile Picture</label>
                        <input id="avatar" type="file" className="form-control item" name="avatar" />
                        
                        </div>
                    {/*                       
                        <div className="form-group item">
                         <label htmlFor="role">Choose a Role</label><span> : </span>
                            <select id="role" name="role">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div> 
                    */}
            
                        <input className="btn btn-dark" type="submit" value="Submit" />
                    </form>
                </div>
            </>
    );
};

export default Signup;