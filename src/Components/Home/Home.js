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
            fetch(`https://floating-mountain-79047.herokuapp.com/flat/${type}`)
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
                   <Link to={`/flat/${flat._id}`}><Card.Img variant="top" src={`https://floating-mountain-79047.herokuapp.com/uploads/flatAvatars/${flat.avatar}`} /></Link>
                       <Card.Body>
                            <Card.Title className="title">{flat.flat}</Card.Title>
                            <div>
                                <FontAwesomeIcon icon={faBed}/><span>{flat.bed} beds</span> <FontAwesomeIcon icon={faBath}/> <span>{flat.bath} baths</span> <FontAwesomeIcon icon={faChartArea}/> <span>2000sqft</span><br/>
                                <p className="textDecoration">{flat.location}</p>
                                <p className="textDecoration">Contract: {flat.contract}</p>
                            </div>
                            <Card.Text className="textDecoration">Taka {flat.price}</Card.Text>
                       </Card.Body>
                       <Card.Footer className="developer">
                             <Card.Text>Owner: {flat.owner}</Card.Text>
                       </Card.Footer>
                   </Card>
             
               </Col>
         </>
                    
                )
             }
        </Row>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;