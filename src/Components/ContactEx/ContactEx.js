import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import './ContactEx.css';

const ContactEx = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
        <div>
           <div className="contactEx-form">
           <h3 className="mb-3">Contact With Us</h3>
                    <form 
                        action="http://localhost:5000/contact/admin"
                        method="post"
                    >
                        <div className="form-group">
                        <input type="text" 
                          className="form-control item"
                          placeholder="Your Topic"
                          name="topic" />
                        </div>
            
                        <div className="form-group">
                        <input type="text"
                          className="form-control item"
                          placeholder="Your Name"
                          name="name" required  />
                        </div>
                        
                        <div className="form-group">
                        <input type="email"
                          className="form-control item"
                          placeholder="Your Email"
                          value={loggedInUser.email}
                          name="email" required  />
                        </div>

                        <div className="form-group">
                        <input type="text" 
                            className="form-control item" 
                            placeholder="Your Mobile Number"
                            name="mobile"
                            required  />
                        </div>  
                    
                        <div className="form-group">
                             <textarea
                               className="form-control item"
                               placeholder="Message to the Authority" 
                               name="message" />
                        </div>

                      <input className="btn btn-dark" type="submit" value="Send" />
                    </form>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactEx;