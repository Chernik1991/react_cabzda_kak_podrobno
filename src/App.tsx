import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/Accordion';
import { UncontrolledRating } from './components/UncontrolledRating/Rating';
import {Rating, RatingValuetype} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/OnOff';

function App() {
    let[ratingValue,setRatingValue]=useState<RatingValuetype>(0);
    let[accordionCollapsed,setAccordionCollapsed]=useState<boolean>(true);
    let[onOffSwitch,setOnOffSwitch]=useState<boolean>(true);
    return (
        <div className={"App"}>
            {/*<input/>*/}
            {/*<input  checked={true}/>*/}
            <PageTitle title={"This is App component"}/>
            {/*<PageTitle title={"My friends"}/>*/}
            Article 1
            <UncontrolledAccordion titleValue={"Menu"} />
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff onOffSwitch={onOffSwitch} onClick={setOnOffSwitch}/>
        </div>
    );
}
type PageTitlePropsType={
    title:string
}

function PageTitle(props:PageTitlePropsType){
    return <h1>{props.title}</h1>

    ;
}

export default App;
