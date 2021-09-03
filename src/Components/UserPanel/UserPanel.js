import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserPanel.css';
const UserPanel = () => {
    const [show, setShow] = useState(false);
    const [clients, setClient]= useState([]);

    useEffect(()=>{
       fetch(`http://localhost:5000/contact/${localStorage.getItem('user')}`)
           .then(res => res.json())
           .then(data => {
               setClient(data)
           })
       }, []);

    return (
      <div className='backgroundUser'>
             <div className="container">
             <Link to='/addflat'><input className="sendButton m-2" type="submit" value="Add A Flat" /></Link>
          
             <div>
                <Button variant="success" onClick={() => setShow(true)}>
                    Interested Clients
                </Button>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="Cart-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="Cart-custom-modal-styling-title">Interested Clients for flat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        {
                                clients.result?clients.result.map(client =>
                                    <div>
                                        <p>{client.flatId}</p>
                                        <h4>{client.ClientEmail}</h4>
                                        <h4>{client.ClientMobile}</h4>
                                        <p>{client.ClientMessage}</p>
                                    </div>
                                    
                                    ):<h2>Sorry, No Client interested yet</h2>
                                    
                            }
                        </div>
                
                    </Modal.Body>
                </Modal>
             </div>

             <p className="text">Welcome to User Panel</p>
             <p className="description">Hello, Do you have any Extra Flat that you wanna give rent or Sell? We are here to simplify the process. Add your flat and Check your Interested Clients Here!!</p>
             </div>
            
            
                  
        </div>
    );
};

export default UserPanel;