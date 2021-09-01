import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const InterestedClients = () => {
    const [clients, setClient]= useState([]);
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    useEffect(()=>{
       fetch(`http://localhost:5000/contact/${localStorage.getItem('user')}`)
           .then(res => res.json())
           .then(data => {
               setClient(data)
           })
       }, [loggedInUser.email]);

    return (
        <div>
                {
                 clients.result&&clients.result.map(client =><>
                    <div>
                        <p>{client.flatId}</p>
                       <h4>{client.ClientEmail}</h4>
                       <h4>{client.ClientMobile}</h4>
                       <p>{client.ClientMessage}</p>
                    </div>
                    
                    </>)
                       
              }
        </div>
    );
};

export default InterestedClients;