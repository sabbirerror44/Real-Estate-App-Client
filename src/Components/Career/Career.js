import React from 'react';
import Footer from '../Footer/Footer';
import './Career.css';

const Career = () => {
    return (
        <div className="background">
                 <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                     <div className="cv-form">
                      <p className="Style">Drop your CV</p>
                    <form
                        action="https://floating-mountain-79047.herokuapp.com/cv"
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
                        <label htmlFor="cv">PDF File cv</label>
                        <input id="cv" type="file" className="form-control item" name="cv" required/>
                        </div>
        

                        <input className="sendButton" type="submit" value="Submit" />
                    </form>
                    </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 picStyle"></div>
                 </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Career;