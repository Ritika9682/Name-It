import React,{useState} from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Searchbox from '../Searchbox/Searchbox';
import './App.css';

const name=require('@rstacruz/startup-name-generator');
function App(){
    const [headertext,setheadertext]=useState("Name it!");
    const [headerExpanded,setheaderExpanded]=useState(true);
    const [suggestedName,setsuggestedName]=useState([]);
   function handleInputChange(inputtext){
        // console.log(inputtext);
        setheaderExpanded(!inputtext);
        setsuggestedName(inputtext?name(inputtext):[]);
    }
    return(
        <div>
            <Header 
            headerExpanded={headerExpanded}
            headtitle={headertext}
            />
            <Searchbox onInputChange={handleInputChange}/>
            <ResultsContainer suggestedNames={suggestedName}/>
        </div>
    )
}

export default App;