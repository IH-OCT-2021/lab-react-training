import React from "react";

const BoxColor = (props)=> {
    return <div style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}> rgb {props.r} {props.g} {props.b} </div>

}

export default BoxColor;