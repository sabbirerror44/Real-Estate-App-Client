import React from 'react';
import Footer from '../Footer/Footer';
import './ContactEx.css';

const ContactEx = () => {  
    return (
        <div className="background">
           <div className="row">
             <div className="col-xl-6 col-lg-6 col-md-12 sm-col-sm-12 col-xs-12">
             <div className="contactEx-form">
                  <p className="Style">Contact With Us</p>
                    <form 
                        action="https://floating-mountain-79047.herokuapp.com/contact/admin"
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
                          value={localStorage.getItem('user')}
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

                      <input className="sendButton" type="submit" value="Send" />
                    </form>
                </div>
             </div>
             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 picStyle">
             </div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactEx;