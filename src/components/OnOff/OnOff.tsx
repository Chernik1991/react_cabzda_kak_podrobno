import React from 'react';
import './OnOff.css';

type PropsType = {
    onOffSwitch:boolean
    onClick:(onOffSwitch:boolean)=>void
}

export function OnOff(props:PropsType) {

const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display:"inline-block",
    padding: "2px",
    backgroundColor: props.onOffSwitch ? "green" : "white"
};
const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display:"inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: props.onOffSwitch ? "white" : "red"
};
const indicatorStyle={
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display:"inline-block",
    marginLeft: "5px",
    backgroundColor: props.onOffSwitch ? "green" : "red"
};
    return (
        <div>
            <div onClick={()=>{props.onClick(!props.onOffSwitch)}} style={onStyle}>On</div>
            <div onClick={()=>{props.onClick(!props.onOffSwitch)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}