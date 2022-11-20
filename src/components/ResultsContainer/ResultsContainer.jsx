import React from "react";
import Namecard from "../Namecard/Namecard";
import './ResultsContainer.css';

function ResultsContainer({ suggestedNames }) {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <Namecard key={suggestedName} suggestedName={suggestedName} />
    })
    return (
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    )
}

export default ResultsContainer;