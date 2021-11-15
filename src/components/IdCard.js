import React from "react";

const IdCard = (props) => {

    return(
        <div>
        <img src= {props.picture} alt="person"/>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Last name:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Birthday:</b> {props.birth}</p>
        </div>
    )
}

export default IdCard;