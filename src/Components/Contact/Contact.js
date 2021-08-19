import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [flat, setFlat] = useState(''); 
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/flat/single/${id}`)
            .then(res => res.json())
            .then(data => {
                setFlat(data[0])
            })
        }, [id])
   
    return (
        <div>
           <div className="contact-form">
           <h3 className="mb-3">Contact With The Owner</h3>
                    <form
                        action="http://localhost:5000/contact/owner"
                        method="post"
                    >
                        <div className="form-group">
                        <input type="text" 
                          className="form-control item"
                          placeholder="Flat Id"
                          value={flat._id}
                          name="flatId" />
                        </div>
            
                        <div className="form-group">
                        <input type="email"
                          className="form-control item"
                          placeholder="Owner's Email"
                          value={flat.owner}
                          name="OwnerEmail" required  />
                        </div>
                        
                        <div className="form-group">
                        <input type="email"
                          className="form-control item"
                          placeholder="Enter Your Email"
                          value={loggedInUser.email}
                          name="ClientEmail" required  />
                        </div>

                        <div className="form-group">
                        <input type="text" 
                            className="form-control item" 
                            placeholder="Enter Your Mobile Number"
                            name="ClientMobile"
                            required  />
                        </div>  
                    
                        <div className="form-group">
                             <textarea
                               className="form-control item"
                               placeholder="Message to the Owner" 
                               name="ClientMessage" />
                        </div>

                      <input className="btn btn-dark" type="submit" value="Submit" />
                    </form>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;