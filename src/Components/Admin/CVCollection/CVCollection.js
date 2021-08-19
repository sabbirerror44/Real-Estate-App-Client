import React, { useEffect, useState } from 'react';

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
            <h3>All CV</h3>
            {
                cvs.result&&cvs.result.map(cv =><>
                   <h2>{cv.email}</h2> 
                   
                   </>)

                
            }
        </div>
    );
};

export default CVCollection;