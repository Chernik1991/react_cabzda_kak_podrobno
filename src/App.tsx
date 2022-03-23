import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
// import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from './components/UncontrolledAccordion/Accordion';
import { UncontrolledRating } from './components/UncontrolledRating/Rating';
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className={"App"}>
            <input/>
            <input  checked={true}/>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledAccordion titleValue={"Menu"} />
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            <UncontrolledRating/>
            <Rating value={0}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating value={3}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
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
