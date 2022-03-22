import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}
function AppTitle(){
    return <>This is App component</>

    ;
}

function Star(){
    return(
        <div>Star</div>
    );
}

export default App;
