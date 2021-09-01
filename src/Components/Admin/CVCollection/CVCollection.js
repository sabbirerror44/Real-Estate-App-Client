import React, { useEffect, useState } from 'react';
import './CVCollection.css';
const CVCollection = () => {
    const [cvs, setCv] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/cv`)
            .then(res => res.json())
            .then(data => {
                setCv(data)
            })
        }, []);

    return (
        <div>
            {
                cvs.result&&cvs.result.map(cv =><>
                  <div className="cvStyle">
                    <h6>{cv.name}</h6>
                     <p>{cv.email}</p>
                     <p>{cv.mobile}</p>
                     
                  </div>
                   
                   </>)

                
            }
        </div>
    );
};

export default CVCollection;