import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Welcome.css";

const Welcome = ({setType}) => {
    return (
        <div className="welcome">
            <div className="textStyle">
                <p className="text-center">Discover a place you'll love to live</p>
            </div>
            <div className="btn-group buttonStyle" role="group" aria-label="Select Type">
                <button type="button" onClick={()=>setType('buy')} className="btnStyle">Buy</button>
                <button type="button" onClick={()=>setType('rent')} className="btnStyle">Rent</button>
                <button type="button" onClick={()=>setType('bachelor')} className="btnStyle">Bachelor</button>
            </div>
            <div className="input-group rounded searchStyle">
                <input type="search" class="form-control rounded" placeholder="Search Your Desired Area" aria-label="Search"
                    aria-describedby="search-addon" />
                <div className="iconStyle">
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                </div>
            </div>
        </div>
    );
};

export default Welcome;