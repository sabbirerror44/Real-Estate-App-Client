import { faBath, faBed, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TypeContext } from '../../App';
import Footer from '../Footer/Footer';
import "./Home.css";
import Welcome from './Welcome/Welcome';

const Home = () => {
    const [type, setType] = useContext(TypeContext)
    const [flats, setFlats] = useState([])
    useEffect(()=>{
            fetch(`http://localhost:5000/flat/${type}`)
                .then((res) => res.json())
                .then((data) => {
                    setFlats(data);
                });
        }, [type]);
    return (
        <div>
            <Welcome setType={setType}></Welcome>

            <Row className="m-4 p-4">
        {
                 flats.map(flat=><>
                   <Col className="py-2" xs={12} sm={6} md={4} lg={3} xl={3}>
            
                 <Card>
                   <Link to={`/flat/${flat._id}`}><Card.Img variant="top" src={`http://localhost:5000/uploads/flatAvatars/${flat.avatar}`} /></Link>
                       <Card.Body>
                            <Card.Title className="title">{flat.flat}</Card.Title>
                            <div>
                                <FontAwesomeIcon icon={faBed}/><span>{flat.bed} beds</span> <FontAwesomeIcon icon={faBath}/> <span>{flat.bath} baths</span> <FontAwesomeIcon icon={faChartArea}/> <span>2000sqft</span><br/>
                                <p>{flat.location}</p>
                            </div>
                            <Card.Text>Taka {flat.price}</Card.Text>
                       </Card.Body>
                       <Card.Footer>
                             <Card.Text>Developer: {flat.developer}</Card.Text>
                       </Card.Footer>
                   </Card>
             
               </Col>
         </>
                    
                )
             }
        </Row>



            {/* {
                flats.map(flat => (<>
                    <h3>Flat Name: {flat.flat}</h3>
                    <p>Description: {flat.description}</p>
                    <img src={`http://localhost:5000/${flat.avatar}`} alt="Flat Pic" />
                </>))
            } */}
            <Footer></Footer>
            
        </div>
    );
};

export default Home;