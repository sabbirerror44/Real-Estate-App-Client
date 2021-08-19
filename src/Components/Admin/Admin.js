import React from 'react';
import './Admin.css';
import CVCollection from './CVCollection/CVCollection';
import FlatApproval from './FlatApproval/FlatApproval';

const Admin = () => {
    return (
        <div>
           <h2>Admin Dashboard</h2>
           <FlatApproval></FlatApproval>
           <CVCollection></CVCollection>
        </div>
    );
};

export default Admin;