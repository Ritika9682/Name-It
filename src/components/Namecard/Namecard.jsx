import React from "react";
import './Namecard.css';
const Namecard=({suggestedName})=>{

    const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain='
    return(
        <a target='_blank' className="card-link" href={`${nameCheapUrl}${suggestedName}`}>
 <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        </a>
       
    )
}

export default Namecard;