import React from 'react';
import './Admin.css';
import CVCollection from './CVCollection/CVCollection';
import FlatApproval from './FlatApproval/FlatApproval';


const Admin = () => {
    return (
        <div className="row">
            <div className="flat">
                <h4 className="mb-2">These Flats need your Approval</h4>
                <FlatApproval></FlatApproval>
            </div>
            <div className="cv">
                <h4 className="mb-4">All CV</h4>
                <CVCollection></CVCollection>
            </div>
        </div>
    );
};

export default Admin;