import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
    const [flat, setFlat] = useState(''); 
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://floating-mountain-79047.herokuapp.com/flat/single/${id}`)
            .then(res => res.json())
            .then(data => {
                setFlat(data[0])
            })
        }, [id])
   
    return (
        <div className='background'>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="contact-form">
                      <p className="Style">Contact With Owner</p>
                    <form
                        action="https://floating-mountain-79047.herokuapp.com/contact/owner"
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
                          value={localStorage.getItem('user')}
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

                      <input className="sendButton" type="submit" value="Submit" />
                    
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

export default Contact;