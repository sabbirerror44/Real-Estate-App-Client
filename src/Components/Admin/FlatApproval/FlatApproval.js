import { faBath, faBed, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const FlatApproval = () => {
    const [flats, setFlats] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/flat/pending/all`)
        .then((res) => res.json())
        .then((data) => {
            setFlats(data);
        });
    }, [])

    const handleClickApprove = (id) =>{
        fetch(`http://localhost:5000/flat/pending/${id}`, {
            method: 'PUT',
        })
        .then((res) => res.json())
        .then((result) => {
                if(result.message) {
                       alert(result.message)
                }
             })
        }
    const handleClickDelete = (id) =>{
        fetch(`http://localhost:5000/flat/pending/${id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((result) => {
                if(result.message) {
                       alert(result.message)
                }
             })
    }
    return (
        <div>
            {flats? <>{
                 <Row className="m-2 p-2">
        {
                 flats.map(flat=><>
                   <Col className="py-2" xs={12} sm={6} md={6} lg={4} xl={4}>
            
                 <Card>
                    <Card.Img variant="top" src={`http://localhost:5000/uploads/flatAvatars/${flat.avatar}`} />
                       <Card.Body>
                            <Card.Title className="title">{flat.flat}</Card.Title>
                            <div>
                                <FontAwesomeIcon icon={faBed}/><span>{flat.bed} beds</span> <FontAwesomeIcon icon={faBath}/> <span>{flat.bath} baths</span> <FontAwesomeIcon icon={faChartArea}/> <span>2000sqft</span><br/>
                                <p>{flat.location}</p>
                            </div>
                            <Card.Text>Taka {flat.price}</Card.Text>
                       </Card.Body>
                       <Card.Footer>
                           <button type="button" className="btn btn-secondary m-2" onClick={()=>handleClickApprove(flat._id)}>Approve</button>
                           <button type="button" className="btn btn-secondary m-2" onClick={()=>handleClickDelete(flat._id)}>Delete</button>
                       </Card.Footer>
                   </Card>
             
               </Col>
         </>
                    
                )
             }
        </Row>
       }</>: <h2>No Pending Flats Exists</h2>}
        </div>
    );
};

export default FlatApproval;