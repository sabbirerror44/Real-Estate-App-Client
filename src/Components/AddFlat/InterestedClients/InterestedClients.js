import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const InterestedClients = () => {
    const [clients, setClient]= useState([]);
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    useEffect(()=>{
       fetch(`http://localhost:5000/contact/${loggedInUser.email}`)
           .then(res => res.json())
           .then(data => {
               setClient(data)
           })
       }, [loggedInUser.email]);

    return (
        <div>
             <h2>Interested Clients</h2>
                {
                 clients.result&&clients.result.map(client =><>
                    <h2>{client.ClientEmail}</h2> 
                    
                    </>)
                       
              }
        </div>
    );
};

export default InterestedClients;