import React, {useState} from "react";

type StarPropsType={
    selected:boolean
    // star:1|2|3|4|5
    setStar: ()=>void
}
export function UncontrolledRating() {

    let [star,setStar]=useState(0)
    return (
        <div>
            <Star selected={star >0} setStar={()=>{setStar(1)}} />
            <Star selected={star >1} setStar={()=>{setStar(2)}} />
            <Star selected={star >2} setStar={()=>{setStar(3)}} />
            <Star selected={star >3} setStar={()=>{setStar(4)}} />
            <Star selected={star >4} setStar={()=>{setStar(5)}}/>
        </div>
    );
}

function Star(props: StarPropsType) {
    return(
        <span onClick={()=>{props.setStar()}}>{props.selected === true?<b>Star </b>:"Star "}</span>
    )
    //
    // if (props.selected === true) {
    //     return (
    //         <span><b>Star </b></span>
    //     )
    // } else {
    //     return (
    //         <span>Star </span>
    //     )
    // }
}
