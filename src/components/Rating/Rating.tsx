import React from "react";

type RatingPropsType={
    value:number;
}
type StarPropsType={
    selected:boolean
}
export function Rating(props: RatingPropsType) {

    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

    return (
        <div>
            <Star selected={props.value >0}/>
            <Star selected={props.value >1}/>
            <Star selected={props.value >2}/>
            <Star selected={props.value >3}/>
            <Star selected={props.value >4}/>
        </div>
    );
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return (
            <span><b>Star </b></span>
        )
    } else {
        return (
            <span>Star </span>
        )
    }
}
