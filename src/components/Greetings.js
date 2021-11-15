import React from 'react';

const Greetings = (props) => {
        if(props.lang === 'de') {
            return(
                <div>
                    <p>Hallo {props.children}</p>
                </div>
            )
        } else {
            return(
            <div>
            <p>Bonjour {props.children}</p>
            </div>
            )
        }
}

export default Greetings;