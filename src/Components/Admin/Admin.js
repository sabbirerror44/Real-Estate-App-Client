import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';


const Admin = () => {
    const [show, setShow] = useState(false);
    const [cvs, setCv] = useState([])
    useEffect(()=>{
        fetch(`https://floating-mountain-79047.herokuapp.com/cv`)
            .then(res => res.json())
            .then(data => {
                setCv(data)
            })
        }, []);
    return (
        <div className="backgroundAdmin">
             <div className="container">
             <Link to='/pendingflat'><input className="sendButton m-2" type="submit" value="Pending Flats" /></Link>
             
             <div>
                <Button variant="success" onClick={() => setShow(true)}>
                    Recieved CV
                </Button>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="Cart-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="Cart-custom-modal-styling-title">Applicant's CV</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {
                            cvs.result?cvs.result.map(cv =><>
                            <div className="cvStyle">
                                <h6>{cv.name}</h6>
                                <p>{cv.email}</p>
                                <p>{cv.mobile}</p>
                                
                            </div>
                            
                            </>):<h4>Sorry, No CV Recieved</h4>
                            

                            
                        }
                
                    </Modal.Body>
                </Modal>
             </div>
             
             <p className="textAdmin">Welcome to Admin Panel</p>
             <p className="descriptionAdmin">Hello, Admin!!! Your might have pending flats and Some Applicants CV's. Kindly review the Pending Flats and CV. Have a Nice Day!!!</p>
             <img src="https://i.ibb.co/GdNLKJs/admin-concept-illustration-114360-2248.jpg" height="30%" width="22%" alt="" />
            </div>
            </div>
    );
};

export default Admin;