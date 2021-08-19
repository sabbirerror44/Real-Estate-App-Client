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
           <div className="col-7">
               <h2>{singleFlat.flat}</h2>
               <img className='imageStyle' src={`http://localhost:5000/uploads/flatAvatars/${singleFlat.avatar}`} alt="" />
               <br/>
               <FontAwesomeIcon icon={faBed}/><span>{singleFlat.bed} beds</span> <FontAwesomeIcon icon={faBath}/> <span>{singleFlat.bath} baths</span> <FontAwesomeIcon icon={faChartArea}/> <span>2000sqft</span><br/>
                <p>{singleFlat.location} {singleFlat.district}</p>
                <p>{singleFlat.description}</p>
                <p>{singleFlat.developer} Design and Development Company</p>
                <Link to={`/contact/${singleFlat._id}`}>
                    <button type="button" class="btn btn-secondary btn-lg">contact With Owner</button>
                </Link>
           </div>
          <div className="col-5">
            <h2>Bochure</h2>
            <img className='bochure m-2' src="https://i.ibb.co/4g2ChsH/bochure.jpg" alt="" />
          </div>
        </div>
    );
};

export default SingleFlat;