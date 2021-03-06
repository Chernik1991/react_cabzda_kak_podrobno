import React from "react";

export type AccordionPropsType = {
    titleValue: string
    /**
     * overtreatment
     */
    collapsed:boolean
    onChange: (collapsed:boolean)=>void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onChange={props.onChange} />
            {!props.collapsed&& <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    collapsed:boolean
    onChange:(collapsed:boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onChange(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}