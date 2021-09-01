import React from 'react';
import AddFlat from './AddFlat/AddFlat';
import InterestedClients from './InterestedClients/InterestedClients';
import './UserPanel.css';
const UserPanel = () => {

    return (
      <div className='row'>
            <div className="flat">
                <h4 className="mb-2">Add A Flat</h4>
                <AddFlat></AddFlat>
            </div>
            <div className="client">
                <h4 className="mb-4">Interested Client</h4>
                <InterestedClients></InterestedClients>
            </div>

            
                  
        </div>
    );
};

export default UserPanel;