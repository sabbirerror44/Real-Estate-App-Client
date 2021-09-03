import React from 'react';
import './AddFlat.css';

const AddFlat = () => {
    return (
        <div>
            <div className="flat-info-form">
                    <form
                        action="https://floating-mountain-79047.herokuapp.com/flat"
                        method="post"
                        encType="multipart/form-data"
                    >

                        <div className="form-group">
                           <input id="flat" type="text" name="flat" className="form-control item" placeholder="Enter Your Flat Name" required />
                        </div>

                        <div className="form-group">
                           <input id="bed" type="text" name="bed" className="form-control item" placeholder="How many beds in your flat?" required />
                        </div>

                        <div className="form-group">
                           <input id="bath" type="text" name="bath" className="form-control item" placeholder="How many baths in your flat?" required />
                        </div>
                        
                        <div className="form-group">
                           <input id="district" type="text" name="district" className="form-control item" placeholder="In which discrict it's situated?" required />
                        </div>

                        <div className="form-group">
                           <input id="price" type="text" name="price" className="form-control item" placeholder="What's the price of your flat" required />
                        </div>

                        <div className="form-group">
                           <input id="description" type="text" name="description" className="form-control item" placeholder="Describe your flat" required />
                        </div>

                        <div className="form-group">
                           <input id="location" type="text" name="location" className="form-control item" placeholder="Give Exact Location of your flat" required />
                        </div>   
                     
                        <div className="form-group">
                        <label htmlFor="avatar">Flat's Picture</label>
                        <input id="avatar" type="file" className="form-control item" name="avatar" required/>
                        </div>
                      
                        <div className="form-group">
                         <label htmlFor="contract">Choose a Contract</label><span> : </span>
                            <select id="contract" name="contract">
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                                <option value="bachelor">Bachelor</option>
                            </select>
                        </div><br/>
                       
                        <div className="form-group">
                           <input id="owner" type="text" name="owner" value={localStorage.getItem('user')} className="form-control item" placeholder="Enter Developer's Information" required />
                        </div> 

                        <input className="btn btn-dark" type="submit" value="Submit" />
                    </form>
             </div>
        </div>
    );
};

export default AddFlat;