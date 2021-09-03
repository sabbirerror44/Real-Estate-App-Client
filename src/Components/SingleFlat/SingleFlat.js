import { faBath, faBed, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SingleFlat.css';

const SingleFlat = () => {
    const {id} = useParams();
    const [singleFlat, setSingleFlat] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/flat/single/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleFlat(data[0])
            })
        }, [id])
    return (
        <div className="row">
           <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
               <h2>{singleFlat.flat}</h2>
               <img className='imageStyle' height="10%" width="50%" src={`http://localhost:5000/uploads/flatAvatars/${singleFlat.avatar}`} alt="" />
               <br/>
               <FontAwesomeIcon icon={faBed}/><span>{singleFlat.bed} beds</span> <FontAwesomeIcon icon={faBath}/> <span>{singleFlat.bath} baths</span> <FontAwesomeIcon icon={faChartArea}/> <span>2000sqft</span><br/>
                <p className="details">{singleFlat.location} {singleFlat.district}</p>
                <p className="details">{singleFlat.description}</p>
                <p className="details">{singleFlat.developer} Design and Development Company</p>
                <Link to={`/contact/${singleFlat._id}`}>
                <input className="sendButton" type="button" value="Contact With Owner" />
                </Link>
           </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <p className="Style">Bochure</p>
            <img className='bochure m-2' src="https://i.ibb.co/4g2ChsH/bochure.jpg" alt="" />
          </div>
        </div>
    );
};

export default SingleFlat;