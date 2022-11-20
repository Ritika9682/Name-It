import React from "react";
import './Searchbox.css';
function Searchbox(props){
    return(<div className="search-container">
    <input onChange={(event)=>props.onInputChange(event.target.value)} placeholder="Type Keyword" className="search-input"></input>
    </div>)
}

export default Searchbox;