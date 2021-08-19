import React from 'react';
import Footer from '../Footer/Footer';
import './Career.css';

const Career = () => {
    return (
        <div>
                  <div className="cv-form">
                      <h3 className="mb-3">Drop your CV</h3>
                    <form
                        action="http://localhost:5000/cv"
                        method="post"
                        encType="multipart/form-data"
                    >

                        <div className="form-group">
                           <input type="text" name="name" className="form-control item" placeholder="Enter Your Name" required />
                        </div>

                        <div className="form-group">
                           <input type="email" name="email" className="form-control item" placeholder="Email" required />
                        </div>
                        
                        <div className="form-group">
                           <input type="text" name="mobile" className="form-control item" placeholder="Enter your Mobile Number" required />
                        </div>

                        <div className="form-group">
                        <label htmlFor="cv">Drop your CV</label>
                        <input id="cv" type="file" className="form-control item" name="cv" required/>
                        </div>
        

                        <input className="btn btn-dark" type="submit" value="Submit" />
                    </form>
             </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Career;