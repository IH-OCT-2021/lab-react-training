import React from 'react'

const CreditCard = (props) => {
    return (
        <div style={{
            backgroundColor: props.bgColor,
            color: props.color
        }}>
            <img src={props.type === 'Visa' ? "../assets/images/visa.png" : "../assets/images/master-card.svg"}
                alt={props.type} />
            <p>**** **** **** {props.number.slice(12, 16)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear - 2000} {props.bank}</p>
            <p>{props.owner}</p>
       </div> 
    )
}

export default CreditCard
