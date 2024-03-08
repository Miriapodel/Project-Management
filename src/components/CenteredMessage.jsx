import React from "react";

function CenteredMessage(props){
    return(
        <h1 className="centered-message" >{props.message}</h1>
    );
}

export default CenteredMessage;